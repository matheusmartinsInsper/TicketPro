//const Vehicle = require('../src/core/Vehicle');
import Vehicle from '../src/core/Agregate/Vehicle';
import DbContext from "../src/infra/DbContext";
import VehicleRepository from "../src/infra/VehicleRepository"
import CreateTicket, {Input} from "../src/application/UseCase/CreateTicket"

test('Deve criar um veiculo',async function(){
    const input:Input = {
        serviceId: "1",
        publisherClientId: "2",
        vehicleId:"3",
        comments:"lavagem agendada para proxima segunda feira"
    }
    const createVehicle = new CreateTicket()
    const vehicle:any = await createVehicle.execute(input);
    //expect(vehicle.vehicle_id).toBeDefined();
    //expect(vehicle.plate).toEqual(input.plate);
})