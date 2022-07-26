const express = require('express');
const sequelize = require('./db/dbConection');
const configs = require('./config/dbConfigs');
const bodyParser = require('body-parser');
const routes=require('./routes/index')
const PORT = configs.PORT;
const errorMiddleware=require('./middlewares/errorMidleware')
const app = express();



app.use(bodyParser.json());
app.use(errorMiddleware)
//BASE URL
app.use('/api/v1/',routes)


async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`server runing at localhost:${PORT}`);
        });
          await sequelize.authenticate();
        console.log(`databes seqsesfuly contacted`);
    } catch (err) {
        console.log(err.message);
    }
}

start();