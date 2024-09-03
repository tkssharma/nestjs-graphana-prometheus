"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const typeorm_1 = require("typeorm");
const connectionSource = new typeorm_1.DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    ssl: process.env.NODE_ENV !== 'local' && process.env.NODE_ENV !== 'test'
        ? { rejectUnauthorized: false }
        : false,
    logging: true,
    name: 'default',
    entities: ['./build/src/**/**.entity{.ts,.js}'],
    migrations: ['./build/src/migrations/**/*.js'],
    subscribers: ['./build/src/subscriber/**/*.js'],
});
exports.default = connectionSource;
//# sourceMappingURL=ormconfig.js.map