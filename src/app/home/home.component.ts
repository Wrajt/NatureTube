import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  playlistID = "PL1F7117E03613D657"
  playlistName = ""
  ngOnInit(): void {
   this.apiService.getPlaylistName(this.playlistID).subscribe((playlist) => {
     this.playlistName = playlist.items[0].snippet.title
   })
  }
constructor(private apiService: ApiService) {
}}
