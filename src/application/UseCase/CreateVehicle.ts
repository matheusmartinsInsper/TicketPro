import VehicleRepository from "../../infra/VehicleRepository";
import IVehicleRepository from "../../core/InterfaceRepository/IVehicleRepository";
import Vehicle from "../../core/Agregate/Vehicle";
export default class CreateVehicle{
  private _repo:IVehicleRepository;
  constructor(repo:IVehicleRepository) {
    this._repo = repo
  }
  async execute(dtoVehicle:Input){
     const vehicle=Vehicle.create(dtoVehicle);
     await this._repo.save(vehicle);
     return vehicle;
  }
}

interface Input {
    placa:string,
    price:number,
    category:string,
    owner_id:string
}