import express from 'express';
import dotenv from 'dotenv';
import auth from './middlewares/auth.js';
const app=express();

import session from 'express-session';

// routes
import authorRouter from './routes/auhtorRouter.js';
import authorContactRouter from './routes/authorContactRoute.js';
import bookRouter from './routes/bookRouter.js';
import bookStatusRouter from './routes/bookStatusRoute.js';
import genreRouter from './routes/genreRouter.js';

// env file
dotenv.config();


// middlewares
app.use(express.json());

// session
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
  }));
//ttl.. time to live

// apis
app.use('/author',authorRouter);
  
// Apply Auth middleware to all routes
app.use(auth);
  
app.use('/genre',genreRouter);
app.use('/book',bookRouter);
app.use('/author/contact',authorContactRouter);
app.use('/book/bookstatus',bookStatusRouter);

// port
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
});