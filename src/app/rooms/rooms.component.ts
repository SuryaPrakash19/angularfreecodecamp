import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  ElementRef,
  QueryList,
  ViewChildren,
  OnDestroy,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpEventType, HttpUrlEncodingCodec } from '@angular/common/http';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  @ViewChild('heading', { read: ElementRef, static: true })
  headingElement!: ElementRef;
  @ViewChild(HeaderComponent, { static: true }) headerComp!: HeaderComponent;
  roomHeader: string;
  hideRooms: boolean;
  rooms: Room = {
    //availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 15,
  };
  totalBytes: number = 0;
  selectedRoom!: RoomList;
  roomsList: RoomList[] = [];
  title: string = 'List of Rooms';
  stream = new Observable((observer) => {
    observer.next('user1');
  });
  toggle() {
    this.hideRooms = !this.hideRooms;
    if (!this.hideRooms) this.title = 'List of Rooms';
    else this.title = 'Rooms List';
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Quadra Room',
      amenities: 'AC, Wifi, TV',
      price: 55000,
      photos:
        'https://plus.unsplash.com/premium_photo-1671569714765-5829db780ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('13-Nov-2023'),
      rating: 4.53,
    };
    this.roomsService.editRoom('3', room).subscribe((res) => {
      this.roomsList = res;
    });
  }
  deleteRoom() {
    this.roomsService.deleteRoom(3).subscribe((res) => {
      this.roomsList = res;
    });
  }
  constructor(private roomsService: RoomsService) {
    this.rooms.availableRooms = this.rooms.totalRooms - this.rooms.bookedRooms;
    this.roomHeader = 'Rooms';
    this.hideRooms = false;
  }

  ngOnInit(): void {
    console.log(environment);
    this.headingElement.nativeElement.children[0].style.color = 'red';
    this.roomsService.getRooms().subscribe((response) => {
      this.roomsList = response;
      this.stream.subscribe((response) => {
        console.log(response);
      });
      this.roomsService.getPhotos().subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent: {
            console.log('Request has been made!');
            break;
          }
          case HttpEventType.ResponseHeader: {
            console.log('Request success!');
            break;
          }
          case HttpEventType.DownloadProgress: {
            this.totalBytes += event.loaded;
            console.log('Total bytes: ', this.totalBytes);
            break;
          }
          case HttpEventType.Response: {
            console.log(event.body);
          }
        }
      });
    });
  }
  ngAfterViewInit(): void {
    this.headerComp.title = 'Rooms View';
    console.log(this.headerComp.title);
  }

  ngAfterViewChecked() {
    console.log('afterviewchecked is called');
  }

  ngDoCheck() {
    console.log('DoCheck is called');
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Quadra Room',
      amenities: 'AC, Wifi, TV',
      price: 55000,
      photos:
        'https://plus.unsplash.com/premium_photo-1671569714765-5829db780ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('13-Nov-2023'),
      rating: 4.53,
    };
    this.roomsService.addRoom(room).subscribe((res) => {
      this.roomsList = res;
    });
  }
}
