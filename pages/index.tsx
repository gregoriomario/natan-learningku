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
import Button from "../components/Button";

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
		<div className="font-sans">
			<Navbar />
			<main className="px-24 py-24 w-full">
				<div className="flex w-full px-20 py-5  relative">
					<div className="w-full flex justify-between">
						<div className="flex flex-col justify-center">
							<h1 className="font-bold text-6xl mb-3">LearningKu</h1>
							<p className="text-lg mb-3">
								Ayo mulai belajar di website ini dengan course gratis tetapi
								berkualitas
							</p>
							<Button className="w-fit text-lg">Yuk Mulai!</Button>
						</div>
						<div className="w-full flex justify-end col-10 col-sm-8 col-lg-6">
							<Image
								src={Study}
								className="d-block mx-lg-auto img-fluid"
								alt="Bootstrap Themes"
								width="700"
								height="600"
								loading="lazy"
							/>
						</div>
					</div>
				</div>

				<div className="text-center my-24">
					<Image
						className="d-block mx-auto"
						src={Logo}
						alt=""
						width="72"
						height="57"
					/>
					<h2 className="font-bold text-4xl mb-3">About</h2>
					<div className="col-lg-6 mx-auto">
						<p className="lead mb-4">
							Kami menyediakan course gratis yang bisa diakses kapan saja
							sebagai metode pembelajaran digital yang dapat membantu siapapun
							yang ingin belajar dan memudahkan pengguna dalam belajar
						</p>
					</div>
				</div>

				<div className=" mt-5 w-full">
					<div className="row mb-4">
						<div className="col-lg-8 mx-auto text-center">
							<h2 className="font-bold text-4xl mb-3">Course</h2>
							<p className="mb-0">Pilih course yang ada dibawah ini</p>
						</div>
					</div>
					<div className="grid gap-x-10 grid-cols-3">
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
