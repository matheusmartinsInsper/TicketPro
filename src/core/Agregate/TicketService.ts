const crypto = require('crypto');
import { OperationCanceledException } from "typescript";
import Category from "./Category";

export default class TicketService {

    private TicketServiceId!:string;
    comments?:string;
    priceService!:number;
    ServiceId!:string;
    private priceTotal!:number;
    publisherClientId !: string;
    assingId?:string;
    productsId?:string[];
    dateStart!:Date;
    dateEnd!:Date;
    vehicleId!:string;
    weightVehicle!:number;
    priceProducts?:number;
    status!:string;
    duration?:number;
    statusPagment!:string

    private constructor(){}

    static create(input:Input):TicketService{
     const ticketservice = new TicketService()
     ticketservice.comments= input.comments;
     ticketservice.priceService= input.priceService;
     ticketservice.publisherClientId = input.publisherClientId;
     ticketservice.weightVehicle = input.weightVehicle;
     ticketservice.vehicleId = input.vehicleId;
     ticketservice.ServiceId = input.serviceId;
     ticketservice.priceProducts = ticketservice.setPriceProducts(input.productsPrice); 
     ticketservice.priceTotal = ticketservice.setPriceTotal();
     ticketservice.TicketServiceId = crypto.randomUUID();
     ticketservice.status = "Pending";
     ticketservice.dateStart = new Date();
     return ticketservice;
    }

    private setPriceProducts(prices:number[]):number{
        let total=0;
        if(prices.length!==0){
            for(let n  of prices){
                total+=n;
              }
        } 
        return total;
    }

    private setPriceTotal():number{
        let totalPriceProducts = this.priceProducts!=null?this.priceProducts:0;
        return this.priceService*this.weightVehicle + totalPriceProducts;
    }

    assignTicket(assingId:string){
        this.status= "Assigned";
        this.assingId=assingId;
    }

    closeTicket(){
        if(this.status==="Pending"||this.status===null){
            throw new Error("The ticket is not assigned yet");
        }else if(this.status==="Closed"){
            throw new Error("This ticket has already been closed");
        }
        this.status= "Closed";
        this.duration = new Date().getTime()-this.dateStart.getTime();
    }
}

interface Input {
    weightVehicle:number;
    comments?:string;
    classification:string;
    serviceId:string;
    priceService: number;
    publisherClientId:string;
    productsPrice:number[];
    vehicleId:string;
}