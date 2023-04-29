import { Sequelize } from "sequelize";

const db = new Sequelize(
    "database",
    "user",
    "pass",
    {
        dialect:"sqlite",
        storage:"src/db.sqlite"
    }
)

export default db