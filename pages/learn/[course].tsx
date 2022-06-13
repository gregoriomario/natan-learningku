import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import Logo from "../assets/img/logo.svg";
import HTMLLogo from "../assets/img/html.jpg";
import CSSLogo from "../assets/img/css.jpg";
import JSLogo from "../assets/img/js.jpg";
import PythonLogo from "../assets/img/python.jpg";
import ReactLogo from "../assets/img/react.jpg";

const Course = () => {
	const router = useRouter();
	const { course } = router.query;

	const image = () => {
		switch (course) {
			case "html":
				return (
					<Image src={HTMLLogo} alt="html" className="rounded img-thumbnail" />
				);
			case "css":
				return (
					<Image src={CSSLogo} alt="html" className="rounded img-thumbnail" />
				);
			case "js":
				return (
					<Image src={JSLogo} alt="html" className="rounded img-thumbnail" />
				);
			case "python":
				return (
					<Image
						src={PythonLogo}
						alt="html"
						className="rounded img-thumbnail"
					/>
				);
			case "react":
				return (
					<Image src={ReactLogo} alt="html" className="rounded img-thumbnail" />
				);
			default:
				return <Image src={Logo} alt="js" className="rounded img-thumbnail" />;
		}
	};
	console.log(course);
	return (
		<div>
			<Navbar />
			<div className="container ">
				<article className="blog-post pt-8">
					<div className="text-center">
						{image()}
						<h2 className="blog-post-title mt-2">
							{String(course).toUpperCase()}
						</h2>
						<p className="blog-post-meta">
							January 1, 2022 by <a href="#">Richie</a>
						</p>
					</div>
				</article>
			</div>

			<div className="container">
				<footer className="py-3 my-4">
					<ul className="nav justify-content-center border-bottom pb-3 mb-3">
						<li className="nav-item ">
							<Link href="/">
								<a className="text-decoration-none nav-link px-2 text-muted ">
									Home
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/">
								<a href="#" className="nav-link px-2 text-muted">
									Features
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/">
								<a href="#" className="nav-link px-2 text-muted">
									About
								</a>
							</Link>
						</li>
					</ul>
					<p className="text-center text-muted">© 2022 LearningKu, Inc</p>
				</footer>
			</div>
		</div>
	);
};

export default Course;
