import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestGoogleApiKeyComponent } from './test-google-api-key/test-google-api-key.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestGoogleApiKeyComponent, MatToolbar, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  playlistID = "PL1F7117E03613D657"
}
