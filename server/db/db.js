const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const pinMe = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${pinMe}`,
  {
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
module.exports = db;
if (process.env.NODE_ENV === 'test') {
  after('close db connection', () => db.close());
}
