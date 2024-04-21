import { Component, OnInit } from '@angular/core';
import { API_KEY } from '../API_KEY.const';
import { CommonModule } from '@angular/common';

/*
  The purpose of this component is to test the Google Cloud API KEY.
  Feel free to delete it after obtaining and testing API KEY.
*/
@Component({
  selector: 'app-test-google-api-key',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-google-api-key.component.html',
  styleUrl: './test-google-api-key.component.scss',
})
export class TestGoogleApiKeyComponent implements OnInit {
  testResult: any;

  ngOnInit(): void {
    this.getYouTuBePlaylistItems();
  }

  getYouTuBePlaylistItems() {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL2MI040U_GXobmpXtTwBF7oHBGT5BETSD&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data.items);
        this.testResult = data;
      });
  }
}
