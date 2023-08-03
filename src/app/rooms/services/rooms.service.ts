import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      ameneties: 'AC, Wifi',
      price: 20000,
      photos:
        'https://plus.unsplash.com/premium_photo-1671569714765-5829db780ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('13-Nov-2023'),
      rating: 3.4,
    },
    {
      roomNumber: 2,
      roomType: 'Double Room',
      ameneties: 'AC, Wifi',
      price: 25000,
      photos:
        'https://plus.unsplash.com/premium_photo-1671569714765-5829db780ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('13-Nov-2023'),
      rating: 3.533,
    },
    {
      roomNumber: 3,
      roomType: 'Triple Room',
      ameneties: 'AC, Wifi, Fridge',
      price: 30000,
      photos:
        'https://plus.unsplash.com/premium_photo-1671569714765-5829db780ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      checkInTime: new Date('14-Nov-2023'),
      checkOutTime: new Date('17-Nov-2023'),
      rating: 4.55556,
    },
  ];
  constructor() {}
  getRooms() {
    return this.roomList;
  }
}
