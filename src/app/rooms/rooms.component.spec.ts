import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from './services/rooms.service';
import { ConfigService } from '../services/config.service';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { HttpClient } from '@angular/common/http';
import { RouteConfigToken } from '../services/routeConfig.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RoomsService,
        ConfigService,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: {
            apiEndpoint: 'http://localhost:8000/api/v1',
          },
        },
        {
          provide: HttpClient,
        },
        {
          provide: RouteConfigToken,
          useValue: {
            title: 'List of Rooms',
          },
        },
      ],
      declarations: [RoomsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
