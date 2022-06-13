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
	return (
		<div>
			<Navbar />
			<div className="container mt-12">
				<div className="container pt-5 mt-5">
					<article className="blog-post">
						<div className="text-center">
							{image()}
							<h2 className="blog-post-title mt-2">
								{String(course).toUpperCase()}
							</h2>
							<p className="blog-post-meta">
								January 1, 2022 by <a href="#">Richie</a>
							</p>
						</div>

						<div className="container text-center">
							<h3>Pengertian {course} dan Sejarahnya</h3>
							<p>
								Hypertext Markup Language atau HTML adalah bahasa markup standar
								yang digunakan untuk membuat halaman website dan aplikasi web.
								Sejarah HTML dimulai oleh Tim Berners-Lee, seorang ahli fisika
								di lembaga penelitian CERN yang berlokasi di Swiss. Versi
								pertamanya dirilis pada tahun 1991, dengan 18 tag. Sejak saat
								itu, setiap kali ada versi barunya, pasti akan selalu ada tag
								dan attribute (tag modifier) yang juga baru.
							</p>

							<p>
								Berkat popularitasnya yang terus meningkat, bahasa markup ini
								kini dianggap sebagai standar web resmi. Spesifikasi HTML
								dikelola dan dikembangkan oleh World Wide Web Consortium (W3C).
								Berdasarkan HTML Element Reference milik Mozilla Developer
								Network, saat ini ada 140 tag HTML, meskipun sebagiannya sudah
								tidak lagi didukung oleh beberapa versi terbaru browser.
								Kemudian, pada tahun 2014, HTML5 mulai diperkenalkan. Dengan
								diperkenalkannya HTML5, terdapat semantic baru seperti artcile,
								header, dan footer yang memperjelas bagian-bagian dalam konten.
								Nah, setelah Anda tahu apa itu HTML, selanjutnya kami akan
								membahas cara kerjanya.
							</p>

							<h3>Bagaimana Cara Kerja HTML?</h3>
							<p>
								File HTML diakhiri dengan ekstensi .html atau .htm. Ekstensi
								file ini bisa dilihat dengan mengunakan web browser apa pun
								(seperti Google Chrome, Safari, atau Mozila Firefox). Browser
								tersebut membaca file HTML dan merender kontennya sehingga user
								internet bisa melihat dan membacanya. Biasanya, rata-rata situs
								web menyertakan sejumlah halaman HTML yang berbeda-beda.
								Contohnya, halaman beranda, ‘Tentang Kami’, halaman kontak
								memiliki dokumennya sendiri-sendiri. Masing-masing halaman
								tersebut terdiri atas serangkaian tags (bisa disebut juga
								elements), yang tersusun untuk membentuk sebuah halaman website.
								Tag tersebut membuat hierarki yang menyusun konten hingga
								menjadi bagian, paragraf, heading, dan block konten lainnya.
							</p>

							<h3>Pengertian Tag HTML dan Fungsinya</h3>
							<p>
								Tag HTML memiliki dua tipe utama: block-level dan inline tags.
								1. Elemen block-level memakai semua ruang yang tersedia dan
								selalu membuat line baru di dalam dokumen. Contoh dari tag block
								adalah heading dan paragraf. 2. Elemen inline hanya memakai
								space sesuai dengan kebutuhannya dan tidak membuat line baru di
								halaman. Biasanya elemen ini akan memformat isi konten dari
								elemen block-level. Contoh dari tag inline adalah link dan
								emphasized strings.
							</p>

							<h3>Apa yang Membedakan HTML dengan HTML5?</h3>
							<p>
								Sejak pertama diperkenalkan, bahasa ini telah melewati
								perkembangan yang cukup signifikan. W3C terus merilis versi dan
								update terbaru sembari mencetak sejarah dan mengukuhkan
								keberadaannya. HTML4 (dikenal sebagai “HTML”) dirilis pada tahun
								1999 dan versi terbarunya diperkenalkan pada publik pada tahun
								2014, yaitu HTML5, versi terbaru ini menambahkan lebih banyak
								fitur baru ke bahasa mark up ini.
							</p>

							<h3>Hubungan HTML, CSS, dan JavaScript</h3>
							<p>
								Meskipun dinyatakan sebagai bahasa markup yang canggih dan
								mudah, HTML tidak sepenuhnya bisa membuat website yang
								profesional dan responsif. Bahasa ini hanya bisa digunakan untuk
								menambah elemen dan membuat struktur konten. Namun di satu sisi,
								bahasa ini bisa bekerja secara maksimal dengan dua bahasa
								frontend: CSS (Cascading Style Sheets) dan JavaScript. Jika
								digabungkan, kedua bahasa frontend ini bisa meningkatkan
								pengalaman user dan memberikan fungsi yang lebih canggih. CSS
								erat kaitannya dengan styling, seperti background, warna,
								layout, spacing, dan animiasi. JavaScript memungkinkan Anda
								menambahkan fungsionalitas yang dinamis, seperti slider, pop-up,
								dan galeri foto. Jika digambarkan, berikut perbedaan HTML dan
								CSS dan JavaScript: HTML adalah orang yang tidak mengenakan
								busana apa pun, kemudian CSS adalah bajunya, kemudian JavaScript
								adalah aktivitas dan sikap orang tersebut.
							</p>

							<h3>Kesimpulan</h3>
							<p>
								Sampai di sini, Anda sudah mempelajari apa itu HTML,
								pengertiannya, dan cara kerjanya. HTML bukanlah bahasa
								pemrograman, dan tidak memiliki kemampuan untuk membuat
								fungsionalitas yang dinamis. Dengan bahasa markup ini, user bisa
								mengelola dan memformat dokumen secara statis, sama seperti
								Microsoft Word. Berdasarkan cara kerja HTML, Anda bisa
								menggunakannya untuk membuat struktur konten pada website dan
								aplikasi web (menggunakan coding sederhana). HTML merupakan
								level terbawah dari teknologi frontend dan berfungsi sebagai
								dasar styling yang bisa Anda tambahkan dengan CSS dan
								fungsionalitas yang dapat dijalakan menggunakan JavaScript.
							</p>
						</div>
					</article>
				</div>
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
