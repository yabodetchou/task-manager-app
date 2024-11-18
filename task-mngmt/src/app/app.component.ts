import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // import commonmodule for angular built-in directives
import { HomeComponent } from './home/home.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HomeComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // It should be an array
})
export class AppComponent {
  title = 'task-mngmt';
}
