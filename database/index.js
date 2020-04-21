const { Sequelize } = require('sequelize');

var seq;

if (process.env.DATABASE_URL){
    seq = new Sequelize(process.env.DATABASE_URL);
    cek();
}
else {
    seq = new Sequelize(process.env.DB_DATABASE,
        process.env.DB_USER,
        process.env.DB_PASSWORD, 
        {
            host : process.env.DB_HOST,
            dialect : 'mysql',
            pool: {
            max: 3,
            min: 1,
            },
    });
    cek();
}

async function cek(){
    try {
        await seq.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = seq;