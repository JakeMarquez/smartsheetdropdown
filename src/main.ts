import express, { Express, Request, Response } from 'express';
const smartsheet = require('smartsheet');

const app: Express = express();

app.listen(4443, () => {
    console.log('hello');
});

app.get('/', async (req: Request, res: Response) => {
    const client = smartsheet.createClient({
      accessToken: 'Wr4JhaEreWRNlClb7oeI0yqRDx2NuNMAEf191',
      logLevel: 'info'
    });
    
    const sheets = await client.sheets.listSheets();
    console.log(sheets);
});

