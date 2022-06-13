import Image from "next/image";
import Link from "next/link";
import React, { FormEventHandler, useState } from "react";
import Logo from "../pages/assets/img/logo.svg";

const Navbar = () => {
	const [search, setSearch] = useState<string>("");

	const handleSearch = (e: any) => {
		e.preventDefault();
		window.location.href = "/search?q=" + search;
	};
	return (
		<header>
			<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
				<div className="container-fluid">
					<Link href="/">
						<div className="d-flex align-items-center">
							<Image
								src={Logo}
								alt="logo"
								width="30"
								height="30"
								className="d-inline-block align-text-top"
							/>
							LearningKu
						</div>
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" href="#">
									Course
								</a>
							</li>
						</ul>
						<form className="d-flex" onSubmit={handleSearch}>
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search course here"
								aria-label="Search"
								name="keyword"
								onChange={(e) => setSearch(e.target.value)}
							/>
							<button
								className="btn btn-outline-success"
								name="search"
								type="submit"
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
