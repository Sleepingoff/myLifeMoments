import http from "http";
import express from "express";

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("views", __dirname + "/views");
app.use("/js", express.static(__dirname + "/js"));
app.get("/", (_, res) => res.render("main"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`listening on http://localhost:3000`);

const httpServer = http.createServer(app);

httpServer.listen(3000, handleListen);
