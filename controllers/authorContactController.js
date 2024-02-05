import prisma from "../DB/db.config.js";
import {v4 as uuidv4} from "uuid";



// create contacts detail
 const createContact=async (req, res) => {
    try {
        const { contactType,authorID,phone,address  } = req.body;

        // create contact
        const contact = await prisma.authorContact.create({
            data: {
                id : uuidv4(),
                contactType,
                authorID,
                phone,
                address
            }
        });

        res.status(201).json({ contact, message: "Contact has been created" });


    } catch (error) {
        res.status(500).json({ error: error })
    }
};


 //  get all contact
const getAllContact=async (req, res) => {
    try {
        
        const contacts = await prisma.authorContact.findMany();

        res.status(200).json({ contacts });


    } catch (error) {
        res.status(500).json({ error: error })
    }
};

export  {createContact,getAllContact};
