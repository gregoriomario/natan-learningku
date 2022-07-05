// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Course from "../../model/Course.model";

type Data = {
	success?: boolean;
	data: Array<D>;
};

export type D = { id: string; logo: string; course: string; page: string };

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const data = await Course.findAll({
			raw: true,
		})
			.then((d) => {
				return JSON.parse(JSON.stringify(d));
			})
			.catch((err) => console.error(err));

		let result = data.filter((d: D) =>
			RegExp(String(req.query.q), "i").test(d.course)
		);

		if (result.length === 0) {
			result = data;
		}

		//trim result property
		result.forEach((d: D) => {
			d.course = d.course.trim();
			d.page = d.page.trim();
			d.logo = d.logo.trim();
		});

		res.status(200).json({ success: true, data: result });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: [] });
	}
}
