const crypto = require('crypto');
import Category from "./Category";

export default class Vehicle {
    vehicle_id?:string;
    plate?:string;
    price?:number;
    category?:string;
    owner_id?:string;
    weight?:number;  
    codeCategory!:string; 

    private constructor ( ){};

    static create(input:Input):Vehicle{
        const vehicle = new Vehicle();
        vehicle.vehicle_id=crypto.randomUUID();
        vehicle.plate=input.plate;
        vehicle.price=input.price;
        vehicle.codeCategory=input.codeCategory;
        vehicle.category= input.category;
        vehicle.weight = input.weight;
        vehicle.owner_id=input.owner_id;
        return vehicle;
    }

    static restore(input:InputDb){
      const vehicle = new Vehicle();
      vehicle.vehicle_id= input.vehicle_id;
      vehicle.plate = input.plate;  
      vehicle.price = input.price;  
      vehicle.category = input.category;     
      vehicle.owner_id=input.owner_id;
      vehicle.weight=input.weight || 0 ;    
      return vehicle;
    }
}

export interface Input {
    plate:string,
    price:number,
    category:string,
    owner_id:string,
    codeCategory:string,
    weight:number
}

export interface InputDb {
    vehicle_id:string,
    plate:string,
    price:number,
    category:string,
    owner_id:string,
    weight:number
}
