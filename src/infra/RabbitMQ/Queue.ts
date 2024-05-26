import { Channel, Connection, connect} from "amqplib";

export default class Queue {
    private _conn?:Connection;
    private _channel?:Channel;
    private _uri:string

    public constructor(uri:string){
      this._uri=uri;
    }

    public async connect():Promise<void>{
      this._conn = await connect(this._uri);
      this._channel = await this._conn.createChannel();
    }

    public async publish(queue:string,message:string):Promise<void>{
         await this._channel?.sendToQueue(queue,Buffer.from(message));
    }

    public consume(){

    }

}