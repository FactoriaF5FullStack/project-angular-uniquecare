import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  description: string = `Do you need someone you trust to take care of your cats ? I take care of your kittens when you are not.I have a lot of
                        experience taking care of cats for more than 17 years.I take care of them in their own home, because they feel calmer.
                        I make daily visits changing their litter box and giving them their food, medicine, etc.I can also brush them, play
                        with them or leave their space alone.I send photos, videos and daily reports Only available in the downtown area.`

  constructor() { }

  ngOnInit(): void {
  }

}
