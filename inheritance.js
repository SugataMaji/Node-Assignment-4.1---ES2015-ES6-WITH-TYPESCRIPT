var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = (function () {
    function vehicle(theName, decs, type, cost) {
        this.name = theName;
        this.Description = decs;
        this.Vehicle_Type = type;
        this.Cost_Per_Kilometer = cost;
    }
    vehicle.prototype.move = function (Wheeler) {
        if (Wheeler === void 0) { Wheeler = 0; }
        console.log(this.name + ": " + this.Description + " " + this.Vehicle_Type + " " + this.Cost_Per_Kilometer + "/km. " + this.name + " is a " + Wheeler + "Wheeler.");
    };
    return vehicle;
}());
var twoWheeler = (function (_super) {
    __extends(twoWheeler, _super);
    function twoWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    twoWheeler.prototype.move = function (Wheeler) {
        if (Wheeler === void 0) { Wheeler = 2; }
        //console.log("Slithering...");
        _super.prototype.move.call(this, Wheeler);
    };
    return twoWheeler;
}(vehicle));
var fourWheeler = (function (_super) {
    __extends(fourWheeler, _super);
    function fourWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    fourWheeler.prototype.move = function (Wheeler) {
        if (Wheeler === void 0) { Wheeler = 4; }
        // console.log("Galloping...");
        _super.prototype.move.call(this, Wheeler);
    };
    return fourWheeler;
}(vehicle));
var twow = new twoWheeler("Bike", "The best bike", "PETROL", 45);
var fourw = new fourWheeler("Car", "The best bike", "CNR, PETROL", 25);
twow.move(2);
fourw.move(4);
