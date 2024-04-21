import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {SingleVideoInterface} from "../interfaces/single-video.interface";
import {NgForOf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NgForOf,
        MatList,
        MatListItem
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  playlistID = "PL1F7117E03613D657"
  playlistName = ""
  playlistItems: SingleVideoInterface[] = []
  ngOnInit(): void {
   this.apiService.getPlaylistName(this.playlistID).subscribe((playlist) => {
     this.playlistName = playlist.items[0].snippet.title
   })

    this.apiService.getPlaylistItems(this.playlistID).subscribe((playlistItems) => {
      this.playlistItems = playlistItems.items
      console.log(this.playlistItems)
    })
  }
constructor(private apiService: ApiService) {
}}
