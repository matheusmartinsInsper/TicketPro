import VehicleRepository from "../../infra/VehicleRepository";
import IVehicleRepository from "../../core/InterfaceRepository/IVehicleRepository";
import Vehicle,{Input} from "../../core/Agregate/Vehicle";
import Queue from "../../infra/RabbitMQ/Queue";

export default class CreateVehicle{
  private _repo:IVehicleRepository;
  constructor(repo:IVehicleRepository) {
    this._repo = repo
  }
  async execute(dtoVehicle:Input):Promise<Output>{
     const vehicle=Vehicle.create(dtoVehicle);
     const vehicledb=await this._repo.save(vehicle);
     const vehicleOutput:Output = {
      vehicleId:vehicledb.vehicle_id,
      plate:vehicle.plate!,
      price:vehicle.price!,
      category:vehicle.category!,
      owner_id:vehicle.owner_id!,

     }
     const queue = new Queue("amqp://guest:guest@localhost:5672")
     await queue.connect();
     await queue.publish("CreateVehicle",JSON.stringify(vehicleOutput))
     return vehicleOutput;
  }
}


interface Output {
  vehicleId:string,
  plate:string,
  price:number,
  category:string,
  owner_id:string
}