import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SingleVideoInterface } from '../interfaces/single-video.interface';
import { CommonModule, NgForOf } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    MatList,
    MatListItem,
    MatCardModule,
    MatTabsModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly playlistID = [
    'PL1F7117E03613D657',
    'PLpbCMGDjn19gq5GSYdWDoM1vVpqJ44JHd',
  ];
  playlistNames: string[] = [];
  playlistItems: SingleVideoInterface[][] = [];

  ngOnInit(): void {
    this.playlistID.forEach((item) => {
      this.apiService.getPlaylistName(item).subscribe((playlist) => {
        this.playlistNames.push(playlist.items[0].snippet.title);
      });
      this.apiService.getPlaylistItems(item).subscribe((items) => {
        this.playlistItems.push(items.items);
        console.log(this.playlistItems);
      });
    });
  }

  constructor(private apiService: ApiService) {}
}
