import Vehicle from "../Agregate/Vehicle";
export default interface IVehicleRepository {
    get(id:string):Promise<Vehicle>;
    save(vehicle:Vehicle): Promise<void>;
    update(vehicle: Vehicle) : Promise<void>;
}