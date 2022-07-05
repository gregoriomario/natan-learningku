import Image, { StaticImageData } from "next/image";
import React from "react";
import HTMLLogo from "../pages/assets/img/html.jpg";

type CardProps = {
	logo: StaticImageData;
	title: string;
	description: string;
};

const Card = ({ title, logo, description }: CardProps) => {
	return (
		<a className="mb-4" href={`learn/${title.toLowerCase()}`}>
			<div className="shadow text-center h-96">
				<div className="w-full h-48 relative">
					<Image
						src={logo}
						alt="js"
						layout="fill" // required
						objectFit="cover" // change to suit your needs
					/>
				</div>

				<div className="card-body mx-10 h-full">
					<div className="stretched-link"></div>
					<h5 className="card-title font-bold">{title}</h5>
					<p className="text-base h-full">{description}</p>
				</div>
			</div>
		</a>
	);
};

export default Card;
