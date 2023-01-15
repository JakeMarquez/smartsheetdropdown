import express, { Express, Request, Response } from 'express';
const smartsheet = require('smartsheet');

const app: Express = express();

app.listen(4443, () => {
    console.log('hello');
});

// smartsheet webhook
app.post('/', async (req: Request, res: Response) => {

    // if smartsheet-hook-challenge header sent, respond and exit
    if (req.headers['smartsheet-hook-challenge']) {
        res.setHeader('smartsheet-hook-response', req.headers['smartsheet-hook-challenge']);
        res.send();
        return;
    }

    res.send(400);
    
});

