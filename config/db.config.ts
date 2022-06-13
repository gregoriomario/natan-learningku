import { Sequelize } from "sequelize";

import ENV from "./env.config";

const sequelize = new Sequelize(ENV.getDbString(), {
	logging: false,
});

(async function () {
	await sequelize.authenticate();
});

export default sequelize;
