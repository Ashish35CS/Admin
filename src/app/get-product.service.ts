import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor() { }
  public add(...params: number[]): number {
    let result = 0;
    for (let val of params) {
      result += val;
    }
    return result;
  }
  public showplaces(any) {
    let ret = [
      {
        imgSrc: 'assets/images/card-1.jpg',
        place: 'Cozy 5 Stars Apartment',
        description:
          'The place is tatti to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
        charge: '$899/night',
        location: 'Barcelona, Spain'
      },
      {
        imgSrc: 'assets/images/card-2.jpg',
        place: 'Office Studio',
        description:
          'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
        charge: '$1,119/night',
        location: 'London, UK'
      },
      {
        imgSrc: 'assets/images/card-3.jpg',
        place: 'Beautiful Castle',
        description:
          'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
        charge: '$459/night',
        location: 'Milan, Italy'
      }
    ];
    return ret;
  }
}
