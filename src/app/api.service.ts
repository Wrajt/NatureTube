import { Injectable } from '@angular/core';
import { API_KEY } from "./API_KEY.const";
import { HttpClient } from "@angular/common/http";
import {PlaylistInterface} from "./interfaces/playlist.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getPlaylistName(playlistID:string){
    const url =
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistID}&key=${API_KEY}`;
    return this.http.get<PlaylistInterface>(url)
  }
  constructor(private http: HttpClient) {
    console.log('Hello from  api service')
  }
}
