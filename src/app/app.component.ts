import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  role: string;
  @ViewChild('name', { read: ElementRef, static: true }) name!: ElementRef;
  // @ViewChild('user', { read: ViewContainerRef, static: true })
  VCR!: ViewContainerRef;
  constructor() {
    this.role = 'admin';
  }
  ngOnInit(): void {
    this.name.nativeElement.innerHTML = 'Hilton Hotel';
    // const roomsCompRef = this.VCR.createComponent(RoomsComponent);
    // roomsCompRef.instance.rooms.totalRooms = 50;
  }
}
