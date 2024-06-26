//const Vehicle = require('../src/core/Vehicle');
import Vehicle from '../src/core/Agregate/Vehicle';
import DbContext from "../src/infra/DbContext";
import VehicleRepository from "../src/infra/VehicleRepository"
import CreateVehicle from "../src/application/UseCase/CreateVehicle"
import {Input} from "../src/core/Agregate/Vehicle";

test('Deve criar um veiculo',async function(){
    const input:Input = {
        plate:'ABC1234',
        price:60000,
        category:'hatch',
        owner_id:'123xyz',
        codeCategory:"E002",
        weight:2
    }
    const context = new DbContext();
    const repo = new VehicleRepository(context);
    const createVehicle = new CreateVehicle(repo);
    const vehicle:any = await createVehicle.execute(input);
    //expect(vehicle.vehicle_id).toBeDefined();
    //expect(vehicle.plate).toEqual(input.plate);
})