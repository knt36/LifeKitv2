import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
    templateUrl: 'timer.html'
})
export class EmergencyTimer {

    constructor(public navCtrl:NavController) {

    }
    open(url){
      this.navCtrl.push(url);
    }
}
