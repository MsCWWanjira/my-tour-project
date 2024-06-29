import { Injectable } from '@angular/core';
import { hotelcomponent  } from './hotel.component';

@Injectable({
  providedIn: 'root' //is available application-wide
})
export class hotelsService {
 
    url = 'http://localhost:3000/hotel';
  
  
  constructor() { }

  async getAllHotelLocations() : Promise<hotelcomponent []> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHotelLocationById(id: Number): Promise<hotelcomponent | undefined> {
    const data = await fetch('${this.url}/${id}');
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
