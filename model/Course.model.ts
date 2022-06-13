import { DataTypes } from "sequelize";
import sequelize from "../config/db.config";

const Course = sequelize.define(
	"learningku",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		course: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logo: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		page: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		timestamps: false,
	}
);

export default Course;
