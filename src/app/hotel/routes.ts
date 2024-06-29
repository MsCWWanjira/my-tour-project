import { Routes } from '@angular/router'
import { hotelcomponent } from './/hotel.component'
import { DetailsComponent } from './/details.component';
const routeConfig: Routes = [
    {
        path: '',
        component: hotelcomponent,
        title: "Home Page"
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;