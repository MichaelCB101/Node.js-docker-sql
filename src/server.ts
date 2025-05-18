import express, {Request, Response} from 'express';

const app = express(); //Create express app
const port = 3000;

//route the get users
app.get('/users', (req: Request, res: Response) => {
    //return some random json data for testing
    res.json([
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Sinead'}
    ]);
});

//start the server
app.listen(port, () => {console.log(`The server is running at http://localhost:${port}`);});