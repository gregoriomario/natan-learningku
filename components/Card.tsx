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
		<div className="col-md-4 mb-4">
			<div className="card shadow text-center h-100">
				<Image src={logo} className="card-img-top" alt="js" />
				<div className="card-body">
					<a
						className="stretched-link"
						href={`learn/${title.toLowerCase()}`}
					></a>
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
