const dev = process.env.NODE_ENV !== "production";

const app = require('express')();
const next = require('next')({ dev });
const consign = require('consign');
const db = require('./database/index.js');


app.db = db;

const handle = next.getRequestHandler();


next.prepare().then(() => {


    consign()
        .include('./library/passport.js')
        .then('./config/middlewares.js')
        .then('./library')
        .then('./controllers')
        .then('./config/routes.js')
        .into(app)

    app.get("*", (req, res) => {
        return handle(req, res);
    })


    const port = 3333
    app.listen(port, () => {
        console.log(`Backend running on port ${port}`)
    });

})
