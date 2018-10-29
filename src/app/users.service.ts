import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  // hit api for user data
  getUserData(id){
    // hit api for user data with id: id
    alert('Calling DB with ID: '+id);
    return {
      name: 'Aditya',
      class: '4'
    }
  }
}
