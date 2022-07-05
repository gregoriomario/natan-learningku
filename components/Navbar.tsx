import Image from "next/image";
import Link from "next/link";
import React, { FormEventHandler, useState } from "react";
import Logo from "../pages/assets/img/logo.svg";
import Button from "./Button";

const Navbar = () => {
	const [search, setSearch] = useState<string>("");

	const handleSearch = (e: any) => {
		e.preventDefault();
		window.location.href = "/search?q=" + search;
	};
	return (
		<header>
			<nav className=" w-full fixed navbar-light bg-white flex z-50 px-24 py-4 shadow-md">
				<div className="flex w-full">
					<Link href="/">
						<div className="flex pr-3 items-center cursor-pointer">
							<div className="w-10 h-10 mr-3 relative">
								<Image
									src={Logo}
									alt="logo"
									layout="fill" // required
								/>
							</div>

							<p> LearningKu</p>
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
					<div className=" flex justify-between w-full items-center">
						<ul className="flex ">
							<li className="nav-item mx-2">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item mx-2">
								<a className="nav-link active" href="#">
									About
								</a>
							</li>
							<li className="nav-item mx-2">
								<a className="nav-link active" href="#">
									Course
								</a>
							</li>
						</ul>
						<form className="flex" onSubmit={handleSearch}>
							<input
								className="border rounded-lg px-3 mr-2"
								type="search"
								placeholder="Search course here"
								aria-label="Search"
								name="keyword"
								onChange={(e) => setSearch(e.target.value)}
							/>
							<Button>Search</Button>
						</form>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
