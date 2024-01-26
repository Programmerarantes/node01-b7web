import express from "express";
import mainRoutes from './routes/index'
import mustache from 'mustache-express'
import path from "path";

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({extended: true}));

app.use(mainRoutes)

app.listen(3000, () => {
    console.log("Servidor disponível na porta 3000")
});