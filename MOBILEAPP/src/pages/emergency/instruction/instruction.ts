import {Component, Input} from "@angular/core";
import {NavController} from 'ionic-angular';

@Component({
  selector: 'e-instruction',
  templateUrl: 'instruction.html'
})

export class Einstruction {
  @Input() etimer = 123;

  // toDo: get patient info from server
  patient = {
    name : 'Micheal Lexon',
    info : 'Non Alergy'
  };



  constructor(public navCtrl:NavController){

  }

  endEmergency() {
    this.navCtrl.setRoot('endscreen');
  }
}

