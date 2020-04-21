const { Sequelize } = require('sequelize');

const seq = new Sequelize(process.env.DATABASE_URL);

async function cek(){
    try {
        await seq.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

cek();

module.exports = seq;