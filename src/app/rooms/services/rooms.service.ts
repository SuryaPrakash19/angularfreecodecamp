import { Inject, Injectable } from '@angular/core';
import { RoomList, photoList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { catchError, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
  }
  getRooms$ = this.http
    .get<RoomList[]>('/api/rooms', { headers: { token: 'asdfnsgkjj' } })
    .pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }
  editRoom(id: string, room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${id}`, room);
  }
  deleteRoom(id: number) {
    return this.http.delete<RoomList[]>(`api/rooms/${id}`);
  }
  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true }
    );
    return this.http.request<photoList[]>(request);
  }
}
