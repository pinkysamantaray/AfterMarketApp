import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent implements OnInit {
  selectedPage: string;
  constructor() { 
  
  }

  ngOnInit() {
    this.selectedPage = 'myOrders';
  }

}
