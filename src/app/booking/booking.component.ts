import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
  removePassport() {
    if (this.bookingForm.get('passport'))
      this.bookingForm.removeControl('passport');
  }
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService
    //   .bookRoom(this.bookingForm.getRawValue())
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    // this.bookingForm.reset({
    //   roomId: '2',
    //   guestEmail: '',
    //   checkinDate: '',
    //   checkoutDate: '',
    //   bookingStatus: '',
    //   bookingAmount: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',
    //   address: {
    //     AddressLine1: '',
    //     AddressLine2: '',
    //     City: '',
    //     State: '',
    //     Country: '',
    //     ZipCode: '',
    //   },
    //   guests: [],
    //   tnc: false,
    // });
  }
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(
    private config: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}
  roomId: string = '';
  ngOnInit(): void {
    this.roomId = this.route.snapshot.params['id'];
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: this.roomId, disabled: true },
          { validators: [Validators.required] }
        ),
        guestEmail: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required, Validators.email],
          },
        ],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: ['', { updateOn: 'blur' }],
        guestName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            CustomValidator.ValidateName,
            CustomValidator.ValidateSpecialChar('*'),
          ],
        ],
        address: this.fb.group({
          AddressLine1: ['', Validators.required],
          AddressLine2: [''],
          City: ['', Validators.required],
          State: ['', Validators.required],
          Country: [''],
          ZipCode: [''],
        }),
        guests: this.fb.array([this.addGuestControl()]),
        tnc: new FormControl(
          { value: false, disabled: false },
          { validators: [Validators.requiredTrue] }
        ),
      },
      { updateOn: 'blur', validators: [CustomValidator.validateDate] }
      //{ updateOn: 'blur' } // this is to trigger valueChanges only on blur instead of keypress for entire form- all controls.
    );
    this.getBookingData();
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });

    this.bookingForm.valueChanges
      .pipe(
        exhaustMap((data) => {
          return this.bookingService.bookRoom(data);
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  addGuest() {
    this.guests.push(this.addGuestControl());
  }
  getBookingData() {
    this.bookingForm.patchValue({
      guestEmail: 'kC6qO@example.com',
      checkinDate: new Date('10/10/2025'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }
  private addGuestControl() {
    return this.fb.group({ guestName: ['', Validators.required], age: [''] });
  }
}
