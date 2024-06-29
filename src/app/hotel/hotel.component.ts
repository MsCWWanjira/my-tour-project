import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { hotelcomponent } from './hotel.component.spec';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
      <section class="listing">
          <h2 class="listing-heading">{{ hotelcomponent.name}}</h2>
          <p class="listing-location">{{ hotelcomponent}} </p>
          <p class="listing-starrating">
            <i *ngFor="let star of getStars(hotelcomponent.starrating)" class="fas fa-star"></i>
            <i *ngFor="let star of getEmptyStars(hotelcomponent.starrating)" class="far fa-star"></i>
          </p>
          <a [routerLink]="['/details', hotelcomponent.id]">Book now</a>
      </section>
  `,
  styleUrls: ['./hotel.component.css']
})
export class hotelcomponent {
  @Input() hotelcomponent!:hotelcomponent;


  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }
}