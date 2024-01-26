import express from "express";
import mainRoutes from './routes/index'
import mustache from 'mustache-express'
import dotenv from 'dotenv';
import path from "path";

dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({extended: true}));

app.use(mainRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});