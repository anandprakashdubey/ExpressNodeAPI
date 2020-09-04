import express from 'express';
import bodyParse from 'body-parser';
import userRouter from './routes/users.js';


const app = express();
const PORT = '5000';

app.use(bodyParse.json()); // This is saying that we are going to JSON format throughout our application.


//Below code is for routing because node and express is all about routing.
app.use('/',userRouter);

app.get('/',(req,res)=>{
    console.log('This is Home Page of Routing');
    res.send('This is the response from Home Page');
});



//Below code is for listening the income request.
app.listen(PORT, ()=> console.log(`Server is running on PORT : http://localhost:${PORT}`));