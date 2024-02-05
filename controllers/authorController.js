import prisma from "../DB/db.config.js";
import bcrypt from "bcrypt";

import {v4 as uuidv4} from "uuid";


// create users or signup
const authorSignup=async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check user
        const findauthor = await prisma.author.findUnique({
            where: {
                email: email
            }
        });

        if (findauthor) {
            return res.status(400).json({ message: "Author already exist with this email" });
        }

        // hashing password
        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        // create user
        const author = await prisma.author.create({
            data: {
                id : uuidv4(),
                name: name,
                email: email,
                password: hashedPassword,

            }
        });

        res.status(201).json({ author, message: "Auhtor has been created" });


    } catch (error) {
        res.status(500).json({ error: error })
    }
};


// login
const authorLogin=async (req, res) => {
    try {
        const {email, password } = req.body;

        // check user
        const author = await prisma.author.findUnique({
            where: {
                email: email
            }
        });

        if (!author) {
            return res.status(400).json({ message: "NO User  exist with this email Register first!" });
        }

        // password validation
        const isValid= await bcrypt.compare(password,author.password);
        
        if(!isValid){
            return res.status(401).json({message:"Incorrect Password"});
        }
       
        req.session.user={
            id:author.id,
            email:author.email
        };

        res.status(200).json({message: "Signin Success!",author:author});


    } catch (error) {
        res.status(500).json({ error: error });
    }
};


// get authors with their books and contact
const getAllAuthor=async (req, res) => {
    try {
        

        // getall books
        const authors = await prisma.author.findMany({
            
            select:{
                id:true,
                name:true,
                books: true,
                contacts:true
            }
        });

        res.status(200).json({ authors});


    } catch (error) {
        res.status(500).json({ error: error })
    }
};

// dlete author
const deleteAuthor=async(req,res)=>{
    try{
        const authorid=req.params.id;
// console.log("in delete block");
        await prisma.author.delete({
            where:{
                id:authorid
            }
        });

        res.status(204).json({message:"Author Deleted"});
        res.end();
    }
    catch(error){
        // if user no exist because unable to handle in try block due to where:{}
        if(error.code==='P2025'){
            return res.status(404).json({message:"No Author with this ID"});
        }

        res.status(500).json({error:error});
    }
};


// logout

const authorLogout= (req, res) => {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Logout successful' });
      }
    });
  };
  
export {authorLogin,authorSignup,getAllAuthor,authorLogout,deleteAuthor};
