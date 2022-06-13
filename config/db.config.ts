import * as pg from "pg";
import { Sequelize } from "sequelize";

import ENV from "./env.config";

const sequelize = new Sequelize(ENV.getDbString(), {
	logging: false,
	dialectModule: pg,
});

(async function () {
	await sequelize.authenticate();
});

export default sequelize;
