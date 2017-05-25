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
        name: 'Shop #1',
        address: 'street 12',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '2', 
        name: 'Shop #2',
        address: 'street 16',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '3', 
        name: 'Shop #3',
        address: 'street 17',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '4', 
        name: 'Shop #4',
        address: 'street 19',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '5', 
        name: 'Shop #5',
        address: 'street 67',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '6', 
        name: 'Shop #6',
        address: 'street 34',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      }
    ];
    return new Observable<Shop[]>((subscriber:Subscriber<Shop[]>) => subscriber.next(tempSearchList));
  }

  getOtherList(): Observable<Shop[]> {
    let tempSearchList:Shop[] = [
      {
        id: '1', 
        name: 'Shop #1',
        address: 'street 12',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '2', 
        name: 'Shop #2',
        address: 'street 16',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '3', 
        name: 'Shop #3',
        address: 'street 17',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '4', 
        name: 'Shop #4',
        address: 'street 19',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      }
    ];
    return new Observable<Shop[]>((subscriber:Subscriber<Shop[]>) => subscriber.next(tempSearchList));
  }

  getNearbyList(): Observable<Shop[]> {
    let tempSearchList:Shop[] = [
      {
        id: '1', 
        name: 'Shop #1',
        address: 'street 12',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      },
      {
        id: '2', 
        name: 'Shop #2',
        address: 'street 16',
        zipcode: 1000,
        city: 'Brussel',
        thumbnail: 'https://www.dawnfoods.com/images/default-source/site-images/recipes-decorating-ideas-thumbnail.jpg'
      }
    ];
    return new Observable<Shop[]>((subscriber:Subscriber<Shop[]>) => subscriber.next(tempSearchList));
  }
}
