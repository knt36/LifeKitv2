import { Component, ViewChild, ElementRef } from "@angular/core";
import { Platform } from "ionic-angular";
import { DeviceService } from "../../shared";
import { Geoposition, Geolocation } from "ionic-native";
import { SimpleMarker } from "../../shared/models";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import {GooglePlaces} from "../../../services/googleplaces.service";
import {EmergencyService} from "../../../services/emergency.service";

@Component({
  templateUrl: 'responders-map.html',
  selector: 'Responders-Map'
})
export class RespondersMap {


  constructor(public es:EmergencyService,public geo: Geolocation, public googleMaps: GoogleMaps) {

  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    // make sure to create following structure in your view.html file
    // and add a height (for example 100%) to it, else the map won't be visible
    // <ion-content>
    //  <div #map id="map" style="height:100%;"></div>
    // </ion-content>

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);
    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      map.setMyLocationEnabled(true);
      Geolocation.getCurrentPosition().then(res=>{
        // create LatLng object
        let currentLocation:LatLng = new LatLng(res.coords.latitude,res.coords.longitude);
        // create CameraPosition
        let position: CameraPosition = {
          target: currentLocation,
          zoom: 18
        };
        // move the map's camera to position
        map.moveCamera(position);

        this.es.getEmergencyStatus()

      });
    });


  }



}
