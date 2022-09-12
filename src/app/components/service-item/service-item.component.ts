import { Component, Input, OnInit } from '@angular/core';
import { Facility } from 'src/app/models/facility';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input() facility!: Facility;

  constructor() { }

  ngOnInit(): void {
  }

}
