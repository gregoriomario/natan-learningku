import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import Logo from "./assets/img/logo.svg";
import Study from "./assets/img/study.jpg";
import HTMLLogo from "./assets/img/html.jpg";
import CSSLogo from "./assets/img/css.jpg";
import JSLogo from "./assets/img/js.jpg";
import PythonLogo from "./assets/img/python.jpg";
import ReactLogo from "./assets/img/react.jpg";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

type CardType = {
	logo: StaticImageData;
	title: string;
	description: string;
};

const cards: CardType[] = [
	{
		logo: HTMLLogo,
		title: "HTML",
		description:
			"HTML merupakan singkatan dari Hypertext Markup Language, yaitu bahasa markup standar untuk membuat dan menyusun halaman dan aplikasi web.",
	},
	{
		logo: CSSLogo,
		title: "CSS",
		description:
			"CSS adalah kepanjangaan dari Cascading Style Sheets yang berguna untuk menyederhanakan proses pembuatan website dengan mengatur elemen yang tertulis di bahasa markup.",
	},
	{
		logo: JSLogo,
		title: "Javascript",
		description:
			"JavaScript atau kita singkat menjadi JS merupakan bahasa pemrograman jenis interpreter, sehingga kamu tidak memerlukan compiler untuk menjalankannya.",
	},
	{
		logo: PythonLogo,
		title: "Python",
		description:
			"Python adalah bahasa pemrograman interpretatif populer yang berkaitan dengan Data Science, Machine Learning, dan Internet of Things (IoT).",
	},
	{
		logo: ReactLogo,
		title: "React",
		description:
			"React adalah library Javascript terpopuler untuk membuat user interface (UI). Tool ini menawarkan respons cepat untuk user input dengan menggunakan metode baru dalam proses rendering website.",
	},
];

const Home: NextPage = () => {
	return (
		<div>
			<Navbar />
			<main>
				<div className="container col-xxl-8 px-4 py-5">
					<div className="row flex-lg-row-reverse align-items-center g-5 py-5 pt-5 mt-5">
						<div className="col-10 col-sm-8 col-lg-6">
							<Image
								src={Study}
								className="d-block mx-lg-auto img-fluid"
								alt="Bootstrap Themes"
								width="700"
								height="600"
								loading="lazy"
							/>
						</div>
						<div className="col-lg-6">
							<h1 className="display-5 fw-bold lh-1 mb-3">LearningKu</h1>
							<p className="lead">
								Ayo mulai belajar di website ini dengan course gratis tetapi
								berkualitas
							</p>
							<div className="d-grid gap-2 d-md-flex justify-content-md-start">
								<button
									type="button"
									className="btn btn-primary btn-lg px-4 me-md-2 mt-2"
								>
									Yuk Mulai!
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="px-4 py-5 my-5 text-center">
					<Image
						className="d-block mx-auto"
						src={Logo}
						alt=""
						width="72"
						height="57"
					/>
					<h1 className="display-5 fw-bold">About</h1>
					<div className="col-lg-6 mx-auto">
						<p className="lead mb-4">
							Kami menyediakan course gratis yang bisa diakses kapan saja
							sebagai metode pembelajaran digital yang dapat membantu siapapun
							yang ingin belajar dan memudahkan pengguna dalam belajar
						</p>
					</div>
				</div>

				<div className="container mt-5">
					<div className="row mb-4">
						<div className="col-lg-8 mx-auto text-center">
							<h2 className="fs-1">Course</h2>
							<p className="mb-0">Pilih course yang ada dibawah ini</p>
						</div>
					</div>
					<div className="row justify-content-center">
						{cards.map((card, index) => {
							return <Card key={card.title} {...card} />;
						})}
					</div>
				</div>
			</main>

			<div className="container">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
					<p className="col-md-4 mb-0 text-muted">
						&copy; 2022 LearningKu, Inc
					</p>

					<a
						href="index.php"
						className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
					>
						<Image
							src={Logo}
							className="bi me-2"
							width="40"
							height="32"
							alt="logo"
						/>
					</a>

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

export default Home;
