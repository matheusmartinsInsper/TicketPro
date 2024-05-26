import IVehicleRepository from "../core/InterfaceRepository/IVehicleRepository";
import IDbContext from "../core/InterfaceRepository/IDbContext";
import { Client } from 'pg';
import Vehicle,{InputDb} from "../core/Agregate/Vehicle"

export default class VehicleRepository implements IVehicleRepository{

    private _context:IDbContext;

    constructor(context:IDbContext){
      this._context=context
    }
    
    async get(id:string):Promise<Vehicle>{
        const client = await this._context.getConnection();
        const vehicledb:any = await client.query(`SELECT * FROM vehicle inner join category
        on vehicle.category_code=category.code WHERE vehicle_is=${id}`);
        const vehicle:Vehicle = Vehicle.restore(vehicledb[0]);
        client.end();
        return vehicle;
    }

    async save(vehicle:Vehicle):Promise<any>{
        const client = await this._context.getConnection();
        const vehicledb:any = await client.query(`INSERT INTO vehicle (vehicle_id,placa,price,category,owner_id) values($1,$2,$3,$4,$5)`,
        [vehicle.vehicle_id,vehicle.plate,vehicle.price,vehicle.category,vehicle.owner_id]);
        client.end();
        return vehicledb;
    }

    async update(vehicle:Vehicle) {
        const client = await this._context.getConnection();
        const vehicledb:any = await client.query(`UPDATE vehicle placa=${vehicle.plate},price=${vehicle.price},category=${vehicle.category} where vehicle_id=${vehicle.vehicle_id}`);
        client.end();
    }
}