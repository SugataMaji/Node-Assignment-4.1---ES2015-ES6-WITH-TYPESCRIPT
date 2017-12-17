class vehicle{
    name: string;
    Description: string;
    Vehicle_Type: string;
    Cost_Per_Kilometer: number;
    constructor(theName: string, decs: string, type: string, cost: number) {
         this.name = theName; 
         this.Description =decs;
         this.Vehicle_Type= type;
         this.Cost_Per_Kilometer=cost;
    }
    move(Wheeler: number = 0) {
        console.log(`${this.name}: ${this.Description} ${this.Vehicle_Type} ${this.Cost_Per_Kilometer}/km. ${this.name} is a ${Wheeler}Wheeler.`);
    }
}

class twoWheeler extends vehicle {
    
    move(Wheeler = 2) {
        //console.log("Slithering...");
        super.move(Wheeler);
    }
}

class fourWheeler extends vehicle {

    move(Wheeler = 4) {
       // console.log("Galloping...");
        super.move(Wheeler);
    }
}

let twow = new twoWheeler("Bike", "The best bike", "PETROL", 45);
let fourw= new fourWheeler("Car", "The best bike", "CNR, PETROL", 25);

twow.move(2);
fourw.move(4);