// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Sequelize } from "sequelize/types";
import Course from "../../model/Course.model";

type Data = {
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

		const result = data.filter((d: D) =>
			RegExp(String(req.query.q), "i").test(d.course)
		);

		//trim result property
		result.forEach((d: D) => {
			d.course = d.course.trim();
			d.page = d.page.trim();
		});

		res.status(200).json({ data: result });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: [] });
	}
}
