import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar";
import { D } from "./api/hello";
import Logo from "./assets/img/logo.svg";

type ResultProps = {
	data: { data: Array<D> };
};

const Result = ({ data }: ResultProps) => {

	return (
		<div className="d-flex flex-column h-100">
			<Navbar />

			<main className="flex-shrink-0 mt-5">
				<div className="container mt-5">
					<div className="container">
						{data.data.map((course: D) => {
							return (
								<div
									className="card mb-3"
									style={{ maxWidth: "540px" }}
									key={course.id}
								>
									<div className="row g-0">
										<div className="col-md-4">
											<img
												src={`/${course.logo}`}
												className="img-fluid roundedn-start"
												alt="logo"
												width={400}
												height={300}
											/>
										</div>
										<div className="col-md-8 align-items-center d-flex justify-content-center">
											<div className="card-body text-center ">
												<h5 className="card-title">{course.course}</h5>
												<a
													className="stretched-link"
													href={`/learn/${course.course.toLowerCase()}`}
												></a>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</main>

			<div className="container">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
					<p className="col-md-4 mb-0 text-muted">
						&copy; 2022 LearningKu, Inc
					</p>

					<Link href="/">
						<a className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
							<Image
								src={Logo}
								className="bi me-2"
								width="40"
								height="32"
								alt="logo"
							/>
						</a>
					</Link>

					<ul className="nav col-md-4 justify-content-end">
						<li className="nav-item">
							<a href="#" className="nav-link px-2 text-muted">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link px-2 text-muted">
								About
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link px-2 text-muted">
								Course
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { data } = await axios
		.get(`${process.env.HOST}/api/hello?q=${context.query.q}`)
		.catch((err) => {
			console.error(err);
			return { data: [] };
		});
	return {
		props: {
			data: data,
		},
	};
	// ...
};
export default Result;
