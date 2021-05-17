module.exports = {
    main: () => main()
}
var Ship = function (name){
    this.name = name;
}
var ShipOnPier = function (){
    this.ships = [];
    this.arrivals = [];
    this.departures = [];
    this.Add = (ship) => {
        this.ships.push(ship);
        this.arrivals.push(new Date(2021,2,24));
        this.departures.push(new Date(2021,2,25));
    }
    this.Remove = (name) => {
        for(let i = 0;i < this.ships.length;i++){
            if(this.ships[i].name === name) {
                this.ships = this.ships.slice(i, 1);
                this.arrivals = this.arrivals.slice(i,1);
                this.departures = this.departures.slice(i,1);
                return true;
            }
        }
        return false;
    }
    this.Find = (name) => {
        for(let i = 0;i < this.ships.length;i++){
            if(this.ships[i].name === name) {
                return {
                    ship: this.ships[i],
                    arrival: this.arrivals[i],
                    departure: this.departures[i]
                };
            }
        }
        return null;
    }
}
var Pier = function (id){
    this.id = id;
    this.ships = new ShipOnPier();
    this.AddShip = (ship) => {
        this.ships.Add(ship);
    }
    this.GetShipByName = (name) => {
        for(let i = 0;i < this.ships.length;i++){
            if(this.ships[i].name === name)
                return this.ships[i];
        }
    }
    this.GetAllShips = () => {
        return this.ships.ships;
    }
}
var Port = function (id){
    this.piers = [];
    this.id = id;
    this.Find = (name) =>{
        let res;
        for(let i =0;i < this.piers.length;i++){
            if(res = this.piers[i].ships.Find() != null)
                return res;
        }
    }
    this.RemovePier = (i) => {
        this.piers =  this.piers.slice(0,i).concat(this.piers.slice(i+1,this.piers.length));
    }
    this.AddPier = (pier) => {
        this.piers.push(pier);
    }
}


function step(value){
    console.log("---STEP " + value.toString() + "\n");
}
function main(){
    let ports = [];
    let ships = [];

    //a-------------------------
    step("a");
    ports.push(new Port(1));
    ports.push(new Port(2));
    console.log(ports);
    //b-------------------------
    step("b");
    ports[0].id = 3;
    console.log(ports[0]);
    //c-------------------------
        step("c");
        ports = ports.slice(0,1);
        console.log(ports);
    //d-------------------------
        step("d");
        let portId = 3;
        for(let i = 0;i < ports.length;i++){
            if(ports[i].id === portId) {
                console.log(ports[i]);
                break;
            }
        }
    //e--------------
        step("e");
        ships.push(new Ship("Roman"));

        ships.push(new Ship("kvas"));
        ships.push(new Ship("Khmil"));
        console.log(ships);
    //f---------------
        step("f");
        ships[0].name = "Kvas";
        console.log( ships[0]);
    //g---------------  ***
        step("g");
        if(ships.length > 2)
            ships = ships.slice(0,1).concat(ships.slice(2, ships.length));
        else
            ships = ships.slice(0,1);
        console.log(ships);
    //h----------
        step("h");
        let shipName = "Kvas";
        for(let i = 0;i < ships.length;i++){
            if(ships[i].name == shipName) {
                console.log(ships[i]);
                break;
            }
        }
    //i--------------------
        step("i");
        ports[0].AddPier(new Pier(0));
        ports[0].AddPier(new Pier(1));
        ports[0].AddPier(new Pier(2));
        console.log(ports[0]);
    //j------------------ ***
        step("j");
        console.log(ports[0]);
        ports[0].RemovePier(0);

        console.log(ports[0]);
    //k-------------------
        step("k");
        ports[0].piers[0].AddShip(new Ship("Roman1"));
        ports[0].piers[0].AddShip(new Ship("Roman2"));
        ports[0].piers[0].AddShip(new Ship("Roman3"));
        console.log(ports[0].piers[0]);
        console.log( ports[0].piers[0].ships.Find("Roman2"));
    //l------------------
        step("l");
        console.log(ports[0].piers[0].GetAllShips());


}