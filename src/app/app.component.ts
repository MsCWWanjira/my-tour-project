import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
               header class="brand-name"> alt="logo" aria-hidden="true"></header>
                 <section class="content">
                   <router-outlet></router-outlet>
                 </section>
              </main>
,
  standalone: true,
  imports: [RouterOutlet],
 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-tour-project';