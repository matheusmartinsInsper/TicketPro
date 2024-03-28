//const Vehicle = require('../src/core/Vehicle');
import Vehicle from '../src/core/Agregate/Vehicle';
import DbContext from "../src/infra/DbContext";
import VehicleRepository from "../src/infra/VehicleRepository"
import CreateVehicle from "../src/application/UseCase/CreateVehicle"

test('Deve criar um veiculo',async function(){
    const input = {
        placa:'ABC1234',
        price:60000,
        category:'hatch',
        owner_id:'123xyz'
    }
    const context = new DbContext();
    const repo = new VehicleRepository(context);
    const createVehicle = new CreateVehicle(repo);
    const vehicle:Vehicle = await createVehicle.execute(input);
    expect(vehicle.vehicle_id).toBeDefined();
    expect(vehicle.placa).toEqual(input.placa);
})