import React from "react";

type ButtonProps = {
	className?: string;
	children?: React.ReactNode;
};

const Button = ({ className = "", children }: ButtonProps) => {
	return (
		<button
			className={`bg-emerald-500 px-3 py-2 rounded-lg text-white ${className}`}
			name="search"
			type="submit"
		>
			{children || "button"}
		</button>
	);
};

export default Button;
