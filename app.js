let SwitchButton = function (lamp) {
    this.status = false;

    this.switch_button = function () {
        if (this.status) {
            this.switch_off();
        } else {
            this.switch_on();
        }
    }

    this.switch_on = function () {
        this.status = true;
    }
    this.switch_off = function () {
        this.status = false;
    }
    this.turn_lamp_on = function (lamp) {
        if (this.status){
            return lamp.turn_on();
        }
    }
    this.turn_lamp_off = function (lamp) {
        return lamp.turn_off;
    }
    this.control_lamp = function (lamp) {
        if (this.connect_to_lamp()) {
            if (lamp.status) {
                this.turn_lamp_off(lamp);
                console.log("Lamp Turned Off");
            } else {
                this.turn_lamp_on(lamp);
                console.log("Lamp Turned On");
            }
        } else {
            console.log ("No Electric");
        }
    }
}

let ElectricLamp = function () {
    this.status = false;
    this.turn_off = function () {
        this.status = false
    }
    this.turn_on = function () {
        this.status = true;
    }
}
let electricLamp = new ElectricLamp();
let switchButton = new SwitchButton(electricLamp);

console.log(switchButton.status);
console.log(electricLamp.status);

switchButton.turn_lamp_on(electricLamp)
console.log(electricLamp.status);

switchButton.switch_button()
switchButton.turn_lamp_on(electricLamp)
console.log(electricLamp.status)
