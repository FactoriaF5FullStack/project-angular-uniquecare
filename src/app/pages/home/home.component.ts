import { Component, OnInit } from '@angular/core';
import { CoderService } from 'src/app/services/coder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private coderService: CoderService) { }

  ngOnInit(): void {
    this.getAllCoders();
  }

  public getAllCoders(): void {
    this.coderService.getAll().subscribe(
      (res) => {console.log(res)
    });
  }

}
