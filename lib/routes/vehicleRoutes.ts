import { Request, Response} from "express";
import { VehicleController } from "../controllers/vehicleController";;


export class VehicleRoutes {
    public vehicleController: VehicleController = new VehicleController();
    
    public routes(app): void{
        app.route('/vehicle')
        .post(this.vehicleController.addNewVehicle);
    }
}