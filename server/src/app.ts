import "reflect-metadata";
import express, {Request, Response} from 'express';
import routes from './routes';

const app = express();
const port = 8000;

routes(app)

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
