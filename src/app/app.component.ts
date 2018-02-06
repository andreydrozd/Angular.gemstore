import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// This is where properties are defined.
export class AppComponent {
  title = 'Gem Store';
  hotdog = "This is the hotdog property.";
  now = Date.now().toString();
}
