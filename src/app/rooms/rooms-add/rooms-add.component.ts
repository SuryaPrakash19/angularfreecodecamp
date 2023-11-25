import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };
  constructor(private roomsService: RoomsService) {}
  ngOnInit(): void {}
  successMessage: string = '';
  AddRoom() {
    this.roomsService.addRoom(this.room).subscribe((res) => {
      this.successMessage = 'Room Added successfully!';
      console.log(res);
    });
  }
}
