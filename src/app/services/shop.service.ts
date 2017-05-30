import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

import {Shop} from '../models';

@Injectable()
export class ShopService {

  constructor(private router:Router) {}

  search(keyword): Observable<Shop[]> {
    let tempSearchList:Shop[] = [
      {
        id: '1', 
        name: 'Vercamer (L6)',
        address: 'St Lievenspoortstraat 59',
        zipcode: 9000,
        city: 'Gent',
        logo: 'assets/img/carrefour.jpg'
      },
      {
        id: '2', 
        name: 'unic wondelgemstraat',
        address: 'Wondelgemstraat 91',
        zipcode: 9000,
        city: 'Gent',
        logo: 'assets/img/proxydelhaize.jpg'
      },
      {
        id: '3', 
        name: 'SUPRA SERGEANT',
        address: 'BOSKEETSTRAAT 19',
        zipcode: 9031,
        city: 'Drongen',
        logo: 'assets/img/spar.jpg'
      },
      {
        id: '4', 
        name: 'cf gb sint-amandsberg',
        address: 'Antwerpsesteenweg 432',
        zipcode: 9040,
        city: 'Sint-Amandsberg',
        logo: 'assets/img/carrefour.jpg'
      },
      {
        id: '5', 
        name: "swc - 't bagetje",
        address: 'Nieuwe Baan 63',
        zipcode: 9120,
        city: 'Vrasene',
        logo: 'assets/img/conway.jpg'
      },
      {
        id: '6', 
        name: "cf e. kruibeke",
        address: 'Langestraat 17',
        zipcode: 9150,
        city: 'Kruibeke',
        logo: 'assets/img/carrefour.jpg'
      },
      {
        id: '7', 
        name: "De Clerq (L6)",
        address: 'Petrus Van Bavegemstraat 4',
        zipcode: 9200,
        city: 'Baasrode',
        logo: 'assets/img/spar.jpg'
      },
      {
        id: '8', 
        name: "LOUIS DELHAIZE LAARNE",
        address: 'Eekhoekstraat 19',
        zipcode: 9270,
        city: 'Laarne',
        logo: 'assets/img/louisdelhaize.jpg'
      },
      {
        id: '9', 
        name: "dema food bvba",
        address: 'Kloosterweg 2',
        zipcode: 9300,
        city: 'Aalst',
        logo: 'assets/img/spar.jpg'
      },
      {
        id: '10', 
        name: "cf gb aalst",
        address: 'RAFFELGEMSTRAAT 18',
        zipcode: 9300,
        city: 'Aalst',
        logo: 'assets/img/carrefour.jpg'
      },
      {
        id: '11', 
        name: "LOUIS DELHAIZE ASCHERICKX",
        address: 'VELDSTRAAT 127',
        zipcode: 9470,
        city: 'Denderleeuw',
        logo: 'assets/img/louisdelhaize.jpg'
      }
    ];
    return new Observable<Shop[]>((subscriber:Subscriber<Shop[]>) => subscriber.next(tempSearchList));
  }

  getOtherList(): Observable<Shop[]> {
    let tempSearchList:Shop[] = [
      {
        id: '3', 
        name: 'SUPRA SERGEANT',
        address: 'BOSKEETSTRAAT 19',
        zipcode: 9031,
        city: 'Drongen',
        logo: 'assets/img/spar.jpg'
      },
      {
        id: '4', 
        name: 'cf gb sint-amandsberg',
        address: 'Antwerpsesteenweg 432',
        zipcode: 9040,
        city: 'Sint-Amandsberg',
        logo: 'assets/img/carrefour.jpg'
      },
      {
        id: '5', 
        name: "swc - 't bagetje",
        address: 'Nieuwe Baan 63',
        zipcode: 9120,
        city: 'Vrasene',
        logo: 'assets/img/conway.jpg'
      },
      {
        id: '6', 
        name: "cf e. kruibeke",
        address: 'Langestraat 17',
        zipcode: 9150,
        city: 'Kruibeke',
        logo: 'assets/img/carrefour.jpg'
      },
      {
        id: '7', 
        name: "De Clerq (L6)",
        address: 'Petrus Van Bavegemstraat 4',
        zipcode: 9200,
        city: 'Baasrode',
        logo: 'assets/img/spar.jpg'
      },
      {
        id: '8', 
        name: "LOUIS DELHAIZE LAARNE",
        address: 'Eekhoekstraat 19',
        zipcode: 9270,
        city: 'Laarne',
        logo: 'assets/img/louisdelhaize.jpg'
      },
      {
        id: '9', 
        name: "dema food bvba",
        address: 'Kloosterweg 2',
        zipcode: 9300,
        city: 'Aalst',
        logo: 'assets/img/spar.jpg'
      },
      {
        id: '10', 
        name: "cf gb aalst",
        address: 'RAFFELGEMSTRAAT 18',
        zipcode: 9300,
        city: 'Aalst',
        logo: 'assets/img/carrefour.jpg'
      },
      {
        id: '11', 
        name: "LOUIS DELHAIZE ASCHERICKX",
        address: 'VELDSTRAAT 127',
        zipcode: 9470,
        city: 'Denderleeuw',
        logo: 'assets/img/louisdelhaize.jpg'
      }
    ];
    return new Observable<Shop[]>((subscriber:Subscriber<Shop[]>) => subscriber.next(tempSearchList));
  }

  getNearbyList(): Observable<Shop[]> {
    let tempSearchList:Shop[] = [
      {
        id: '1', 
        name: 'Vercamer (L6)',
        address: 'St Lievenspoortstraat 59',
        zipcode: 9000,
        city: 'Gent',
        logo: 'assets/img/carrefour.jpg'
      },
      {
        id: '2', 
        name: 'unic wondelgemstraat',
        address: 'Wondelgemstraat 91',
        zipcode: 9000,
        city: 'Gent',
        logo: 'assets/img/proxydelhaize.jpg'
      },
    ];
    return new Observable<Shop[]>((subscriber:Subscriber<Shop[]>) => subscriber.next(tempSearchList));
  }
}
