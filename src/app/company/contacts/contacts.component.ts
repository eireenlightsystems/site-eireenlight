import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {YaCoreModule} from 'angular2-yandex-maps';
// import ymaps from 'ymaps';
// (window as any).global = window;

import {Address} from '../../shared/interfaces';

declare var ymaps: any;

@Component({
  selector: 'sel-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, AfterViewInit, OnDestroy {

  // other variables
  myMap: any;
  nCoord = 55.693662;
  eCoord = 37.349749;
  addresses: Address[];

  balloonHeader = 'Header';
  balloonBody = ''; //'<img class="page_avatar_img" src="https://pp.vk.me/c836238/v836238142/1fa2b/G4XOGyOyn9g.jpg" alt="Александр  Шатилов" width="200" height="200">';
  balloonFooter = 'Footer';


  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    this.addresses = [
      {
        namePlace: 'namePlace',
        address: 'address',
        nCoordinate: this.nCoord,
        eCoordinate: this.eCoord,
        comment: 'comment',
      }
    ];
    // this.mapInit();
  }

  ngAfterViewInit() {
    // this.addItemsToMap();
  }

  ngOnDestroy() {
    if (this.myMap) {
      this.myMap.destroy();
    }
  }

  // map initialization
  mapInit(): void {
    ymaps.ready().then(() => {
      this.myMap = new ymaps.Map('adress_yamaps', {
        center: [this.nCoord, this.eCoord],
        zoom: 17,
        controls: ['zoomControl']
      });
    });
  }

  // place the object on the map
  addItemsToMap() {
    const collection = new ymaps.GeoObjectCollection(null, {});

    const BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      `<table class="table table-sm">
      <tbody>

      <tr><th>Name place</th><td>{{properties.address.namePlace}}</td></tr>
      <tr><th>Address</th><td>{{properties.address.address}}</td></tr>

      </tbody>
      </table>`
      , {
        build: (function() {
          const mapComponent: ContactsComponent = this;
          return function() {
            BalloonContentLayout.superclass.build.call(this);
          };
        }).call(this),

        clear: (function() {
          const mapComponent: ContactsComponent = this;
          return function() {
            BalloonContentLayout.superclass.clear.call(this);
          };
        }).call(this),
      }
    );

    console.log(this.myMap);
    console.log(ymaps);

    this.myMap.geoObjects.removeAll();
    this.myMap.geoObjects.add(collection);
    for (const address of this.addresses) {
      const myGeoObject = new ymaps.GeoObject(
        {
          // description geometry
          geometry: {
            type: 'Point',
            coordinates: [address.nCoordinate, address.eCoordinate]
          },
          // properties
          properties: {
            // Content of icon
            address: address
          }
        },
        {
          // options
          balloonContentLayout: BalloonContentLayout,
          balloonPanelMaxMapArea: 0,
          // icon will be change width
          preset: 'islands#circleIcon',
          iconColor: '#000000'
        });

      collection.add(myGeoObject);
    }
  }

}
