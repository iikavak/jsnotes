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
    currentLocation:Point;
    travelTo(point:Point):void;
    getDistance(pointA:Point, pointB:Point):number;
    addPassenger(passenger:Passenger):void;
    removePassenger(passenger:Passenger):void;

}
class Bus implements Vehicle{
    currentLocation:Point;
    travelTo(point:Point):void;
    getDistance(pointA:Point, pointB:Point):number;
    addPassenger(passenger:Passenger):void;
    removePassenger(passenger:Passenger):void;
}
let taxi_1:Taxi=new Taxi();
taxi_1.travelTo({x:1,y:2});
taxi_1.currentLocation={x:2,y:5};

let taxi_2=new Taxi();
taxi_2.travelTo({x:5,y:6});
let bus_1=new Bus();

