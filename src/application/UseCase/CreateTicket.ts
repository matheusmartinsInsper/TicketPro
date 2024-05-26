import Queue from "../../infra/RabbitMQ/Queue";

export default class CreateTicket {

 public constructor(){}
 public async execute(input:Input){
    const queue = new Queue("amqp://guest:guest@localhost:5672")
    await queue.connect();
    const datainput = JSON.stringify(input)
    await queue.publish("CreateVehicle",datainput)
 }
}
export interface Input {
    serviceId: string,
    publisherClientId: string,
    vehicleId:string,
    comments?:string
}