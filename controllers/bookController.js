import prisma from "../DB/db.config.js";
import {v4 as uuidv4} from "uuid";

// create book
 const createBook=async (req, res) => {
    try {
        const { title,authorID,genreID } = req.body;

        // create book
        const book = await prisma.book.create({
            data: {
                id : uuidv4(),
                title,
                authorID,
                genreID
            }
        });

        res.status(201).json({ book, message: "Book has been created" });


    } catch (error) {
        res.status(500).json({ error: error })
    }
};

// get books
const getAllBook= async (req, res) => {
    try {
        

        // getall books
        const books = await prisma.book.findMany({
            
            select:{
                id:true,
                title:true,
                author:{
                    select:{
                        id:true,
                        name:true
                    }
                },
                genre:true,
                status:true
            }
        });

        res.status(200).json({ books});


    } catch (error) {
        res.status(500).json({ error: error })
    }
};

const deleteBook=async(req,res)=>{
    try{
        const bookid=req.params.id;
console.log("in delete block");
        await prisma.book.delete({
            where:{
                id:bookid
            }
        });

        res.status(204).json({message:"Book Deleted"});
        res.end();
    }
    catch(error){
        // if user no exist because unable to handle in try block due to where:{}
        if(error.code==='P2025'){
            return res.status(404).json({message:"No Book with this ID"});
        }

        res.status(500).json({error:error});
    }
};

export {createBook,getAllBook,deleteBook};
