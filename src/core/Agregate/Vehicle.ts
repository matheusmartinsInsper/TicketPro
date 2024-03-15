const crypto = require('crypto');

export default class Vehicle {
    vehicle_id?:string;
    placa?:string;
    price?:number;
    category?:string;
    owner_id?:string;
    private constructor ( ){};
    static create(input:Input):Vehicle{
        const vehicle = new Vehicle();
        vehicle.vehicle_id=crypto.randomUUID();
        vehicle.placa=input.placa;
        vehicle.price=input.price;
        vehicle.category=input.category;
        vehicle.owner_id=input.owner_id;
        return vehicle;
    }
    static restore(input:any){
      const vehicle = new Vehicle();
      vehicle.vehicle_id= input.vehicle_id;
      vehicle.placa = input.placa;  
      vehicle.price = input.price;  
      vehicle.category = input.category;     
      vehicle.owner_id=input.owner_id;
      return vehicle;
    }
}

interface Input {
    placa:string,
    price:number,
    category:string,
    owner_id:string
}
interface InputDb {
    vehicle_id:string,
    placa:string,
    price:number,
    category:string,
    owner_id:string
}