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
  
  ngAfterViewInit() {
     google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['USA', 200],
          ['Texas', 300],
          ['Illinois', 400],
          ['Florida', 500],
          ['Oregon', 600],
          ['Arkansas', 700]
        ]);

        var options = {
            colorAxis: {minValue: 0,  colors: ['#000000', '#efefef']},
            backgroundColor: '#00FFFFFF',
            defaultColor: '#f5f5f5',
            region: '013',
            //resolution :'provinces',
            displayMode : 'regions'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
        
  }
}

