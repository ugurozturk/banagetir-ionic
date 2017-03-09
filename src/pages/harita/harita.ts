import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Geolocation, GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, CameraPosition, GoogleMapsMarkerOptions } from 'ionic-native';

@Component({
  selector: 'page-harita',
  templateUrl: 'harita.html'
})
export class Harita {
  map;
  constructor(public navCtrl: NavController, public menuController: MenuController) {
    let leftMenu = menuController.get('left');

    if (leftMenu) {
      leftMenu.ionOpen.subscribe(() => {
        if (this.map) {
          this.map.setClickable(false);
        }
      });

      leftMenu.ionClose.subscribe(() => {
        if (this.map) {
          this.map.setClickable(true);
        }
      });
    }
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    let element: HTMLElement = document.getElementById('map');
    this.map = new GoogleMap(element);
    // listen to MAP_READY event
    this.map.on(GoogleMapsEvent.MAP_READY); //.then(() => console.log('Map is ready!'));

    let ionic: GoogleMapsLatLng;
    //User Location
    var options = {
      enableHighAccuracy: true
    };
    Geolocation.getCurrentPosition(options).then((resp) => {
      console.log("User Location : ");
      ionic = new GoogleMapsLatLng(resp.coords.latitude, resp.coords.longitude);

      // create CameraPosition
      let position: CameraPosition = {
        target: ionic,
        zoom: 18,
        tilt: 30
      };
      console.log(position);
      // move the map's camera to position
      this.map.moveCamera(position);

      // create new marker
      let markerOptions: GoogleMapsMarkerOptions = {
        position: ionic,
        draggable: true,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIXES46di1HGAAAAS1JREFUOMul1DFuFEEQheGvGwLEnIGoiZxYgIWQ+hAb7UFIiQmJ8AGIWZP7BJNZ4MAyyNJkPoIbr1aIdVIjBoPQsvNHrVbpdVX1q0omdP2g1aLrh0d4ied4goRrfMZZq+VmjB1Jo8CEBY6xxtbvJDzAG3ycCuXxEJcrvMPtX0TE3Q+8xek0iTTJZoUXEbgLGeetlmXXD3JkssCz/xCBnzjq+uF1q0WKxl5FOftwi1c5fmdtfx7jMMcXb81jmcMnc9jiII9emknK4dhZIviaw/ZpptAq4yxsvy/fcZ5bLTcxO3kPkYc4abWspyNyiqfh2F351mpZuN+brh9OcITNDplcYIlNq+VXObFflngftk/3HkpR/hofIpPNuErSPxbbYbx4EHGX+IQvrZY/RuoOtQ1ieqVTJ4EAAAAASUVORK5CYII=",
        title: 'Konumum'
      };

      this.map.addMarker(markerOptions);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
