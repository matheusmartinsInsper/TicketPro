import Vehicle from "../Agregate/Vehicle";
export default interface IVehicleRepository {
    get(id:string):Promise<Vehicle>;
    save(vehicle:Vehicle): Promise<any>;
    update(vehicle: Vehicle) : Promise<void>;
}