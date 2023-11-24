import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { RoomList } from '../rooms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() roomsList: RoomList[] | null = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title'])
      this.title = changes['title'].currentValue.toUpperCase();
  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  streamSubscriber!: Subscription;
  stream = new Observable((observer) => {
    let i: number = 0;
    setInterval(() => {
      observer.next(i++);
    }, 1000);
  });
  ngOnInit(): void {
    // this.streamSubscriber = this.stream.subscribe((response) => {
    //   console.log(response);
    // });
  }
  ngOnDestroy() {
    console.log('destroyed');
    this.streamSubscriber?.unsubscribe();
  }
}
