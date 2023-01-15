import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.listen(4443, () => {
    console.log('hello');
});

app.get('/', (req: Request, res: Response) => {
    res.send('hello')
});