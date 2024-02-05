import prisma from "../DB/db.config.js";

import {v4 as uuidv4} from "uuid";


// create status
const addBookStatus=async (req, res) => {
    try {
        
        const {bookID,totalRented,totalSold}=req.body
        
        const findBook=await prisma.bookStatus.findUnique({
            where:{
                bookID:req.body.bookID
            }
        });

        if(findBook){
           const status= await prisma.bookStatus.update({
                where:{
                    id:findBook.id
                },
                data:{
                    totalRented: findBook.totalRented+totalRented,
                    totalSold: findBook.totalSold+totalSold
                }
            });

            return res.status(200).json({message:"Status Updated",status})
        }

        const bookStatus=await prisma.bookStatus.create({
            data:{
                id:uuidv4(),
                bookID,
                totalRented,
                totalSold
            }
        })

        res.status(201).json({ bookStatus, message: "Book Status has been created" });


    } catch (error) {
        res.status(500).json({ error })
    }
};


export default addBookStatus;
