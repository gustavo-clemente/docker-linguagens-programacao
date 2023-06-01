import express, {Request, Response} from 'express';

const app = express();
const port = 8000;

app.get('/', (req : Request, res: Response) => {
    res.send('Olá mundo');
})

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
