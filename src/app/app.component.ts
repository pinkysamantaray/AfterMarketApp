import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  selectedPage: string;
  
  ngOnInit(){
    this.selectedPage = 'myEquipments';
    
  }
    
}

