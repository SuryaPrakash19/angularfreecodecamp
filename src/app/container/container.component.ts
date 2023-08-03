import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor() {}
  ngAfterViewInit(): void {
    console.log('From afterViewInit:', this.employee);
  }
  ngAfterContentInit(): void {
    console.log('From afterContentInit:', this.employee);
  }

  ngOnInit(): void {}
}
