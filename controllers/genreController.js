import prisma from "../DB/db.config.js";


import {v4 as uuidv4} from "uuid";


// create users or signup
const createGenre= async (req, res) => {
    try {
        const { type } = req.body;

        // create genre
        const genre = await prisma.genre.create({
            data: {
                id : uuidv4(),
                type:type

            }
        });

        res.status(201).json({ genre, message: "Genre has been created" });


    } catch (error) {
        res.status(500).json({ error: error })
    }
};

// get genres
const getAllGenre=async (req, res) => {
    try {
        

        // getall genre
        const genres = await prisma.genre.findMany({
            include:{
                books:{

                    select:{

                        id:true,

                        title:true,

                        author:{
                            select:{

                                id:true,
                                
                                name:true
                            }
                        }
                    }
                }
            }
            
        });

        res.status(200).json({ genres});


    } catch (error) {
        res.status(500).json({ error: error })
    }
};



export {createGenre,getAllGenre};
