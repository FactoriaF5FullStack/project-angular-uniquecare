import { Component, OnInit } from '@angular/core';
import { Facility } from 'src/app/models/facility';
import { FacilityService } from 'src/app/services/facility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.getAllFacilities();
  }

  getAllFacilities() {
    this.facilityService.getAll().subscribe({
      next: (res) => {
        this.facilities = res;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}
