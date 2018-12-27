import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const VehicleSchema = new Schema({
    vehicleName: {
        type: String,
        required: 'Enter vehicle name'
    },
    vehicleCompany: {
        type: String,
        required: 'Enter vehicle company name'
    },
    vehicleNumber: {
        type: String,
        required: 'Enter vehicle number'
    },
    vehicleColor: {
        type: String,
        required: 'Enter vehicle color'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})