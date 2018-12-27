import * as mongoose from 'mongoose';
import {VehicleSchema } from '../models/vehicleModel'
import { Request, Response } from 'express';

const Vehicle = mongoose.model('Vehicle', VehicleSchema);

export class VehicleController{
    
    public addNewVehicle(req: Request, res: Response) {
        let newVehicle = new Vehicle(req.body);
        newVehicle.save((err, vehicle) =>{
            if(err){
                res.send(err);
            }
            res.json(vehicle);
        })
    }

    // get all vehicle

    public getVehicle(req: Request, res: Response){
        Vehicle.find({}, (err, vehicle)=>{
            if(err){
                res.send(err);
            }
            res.json(vehicle);
        })
    }
}