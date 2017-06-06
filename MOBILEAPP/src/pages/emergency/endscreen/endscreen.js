"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmergencyComment_model_1 = require("../../../shared/models/EmergencyComment.model");
var EndScreen = (function () {
    function EndScreen(params, navCtrl, er) {
        this.params = params;
        this.navCtrl = navCtrl;
        this.er = er;
        this.emergencyComment = new EmergencyComment_model_1.EmergencyComment();
        this.emergencyId = params.get('emergencyId');
    }
    EndScreen.prototype.finish = function () {
        var _this = this;
        //send the comment
        var send = {};
        this.er.commentEmergency(this.emergencyId, JSON.stringify(this.emergencyComment)).subscribe(function (res) {
            alert("Thanks for commenting!");
            _this.navCtrl.popToRoot();
        });
    };
    EndScreen.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    EndScreen = __decorate([
        core_1.Component({
            templateUrl: 'endscreen.html'
        })
    ], EndScreen);
    return EndScreen;
}());
exports.EndScreen = EndScreen;
