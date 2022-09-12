import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facility } from 'src/app/models/facility';
import { FacilityService } from 'src/app/services/facility.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  public facility?: Facility;

  constructor(private route: ActivatedRoute, private facilityService: FacilityService, private router: Router) {
  }

  ngOnInit(): void {
    const facilityId: string | null = this.route.snapshot.paramMap.get('id');
    this.getFacilityById(facilityId);
  }

  getFacilityById(id: string | null): void {
    this.facilityService.getById(id).subscribe({
      next: (res) => {
        this.facility = res;
      },
      error: ({ error }) => {
        if(error.status === 404) {
          this.router.navigateByUrl('/');
        }
        console.log(error);
      }
    })
  }

}
