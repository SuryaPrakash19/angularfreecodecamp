import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, pipe } from 'rxjs';

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
  constructor(
    private initService: InitService,
    @Inject(localStorageToken) private locStorage: any,
    private config: ConfigService,
    private router: Router
  ) {
    this.role = 'admin';
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      console.log(event);
    });
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationStart))
    //   .subscribe((event) => console.log('Navigation Started!'));

    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event) => console.log('Navigation Completed!'));
    this.name.nativeElement.innerHTML = 'Hilton Hotel';
    // const roomsCompRef = this.VCR.createComponent(RoomsComponent);
    // roomsCompRef.instance.rooms.totalRooms = 50;
    this.locStorage.setItem('name', 'Hilton Hotel'); // this is better as we can replace localstorage with something else in the service without making any changes here.
    localStorage.setItem('name2', 'sdfsf');
  }
}
