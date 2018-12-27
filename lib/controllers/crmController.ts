import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request , Response } from 'express';


const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController{
    
    public addNewContact(req: Request, res: Response) {
        let newContact = new Contact(req.body);
        newContact.save((err, contact) =>{
            if(err){
                res.send(err);
            }
            res.json(contact);
        })
    }


    // get all contact 
    public getContacts(req: Request, res: Response){
        Contact.find({}, (err, contact)=>{
            if(err){
                res.send(err);
            }
            res.json(contact);
        })
    }

    // get contact with id
    public getContactWithID(req: Request, res: Response){
        Contact.findById(req.params.contactId, (err, contact)=>{
            if(err){
                res.send(err);
            }
            res.json(contact);
        })
    }

    // updateContact with id
    public updateContact(req: Request, res: Response){
        Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, (err,contact)=>{
            if(err){
                res.send(err);
            }
            res.json(contact);
        })
    }

    // deleteContact with id
    public deleteContact(req: Request, res: Response){
        Contact.deleteOne({_id: req.params.contactId}, (err, contact)=>{
            if(err){
                res.send(err);
            }
            res.json({message: "Sucessfully deleted contact"});
        })
    }
}