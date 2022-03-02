import express from "express";
import Router from "./router.js";
import bodyParser from "body-parser";

const app = express()
const port = process.env.PORT || 3100

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(Router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})