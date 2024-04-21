import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestGoogleApiKeyComponent } from './test-google-api-key/test-google-api-key.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestGoogleApiKeyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
