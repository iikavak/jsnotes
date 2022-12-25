interface Point{
    x:number,
    y:number
}
interface Passenger{
    name:string;
    phone:string;
}
interface Vehicle{
    currentLocation:Point;
    travelTo(point:Point):void;
    getDistance(pointA:Point, pointB:Point):number;
    addPassenger(passenger:Passenger):void;
    removePassenger(passenger:Passenger):void;

}

class Taxi implements Vehicle{
    color:string;
    constructor(pravite location:Point, color?:string){
        this.currentLocation=location;
        this.color=color;
    }
    currentLocation:Point;
    travelTo(point:Point):void;
    get Location(){
        return this.location;
    }
    set  Location(value: Point){
        if(value.x<0|| value.y<0){
            throw new Error('negatif olamaz');
        }
        this.location=value;
    }
}

let taxi_1:Taxi=new Taxi({x:1,y:2},'red');
taxi_1.travelTo({x:1,y:2});
taxi_1.currentLocation={x:2,y:5};
let taxi_4=new Taxi({x:1,y:4},'red');