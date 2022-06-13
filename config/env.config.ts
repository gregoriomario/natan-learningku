import dotenv from "dotenv";
import path from "path";
dotenv.config();

const pathToCert = path.join(process.cwd(), "root.crt");

const env = {
	PORT: process.env.PORT || 8000,
	NODE_ENV: process.env.NODE_ENV || "dev",
	URL: process.env.URL || "",
	DB_USER: process.env.DB_USER || "admin",
	DB_PASSWORD: process.env.DB_PASSWORD || "admin",
	DB_PORT: process.env.DB_PORT || 5432,
	DB_HOST: process.env.DB_HOST || "localhost",
	DB_NAME: process.env.DB_NAME || "",
	DB_DRIVER: process.env.DB_DRIVER || "postgres",
	DB_CRT_PATH: pathToCert,
	getDbString: function () {
		return `${this.DB_DRIVER}://${this.DB_USER}:${this.DB_PASSWORD}@${this.DB_HOST}:${this.DB_PORT}/${this.DB_NAME}?ssl=true&sslmode=no-verify`;
	},
};

export default env;
