import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    ngAfterViewInit() {
      //############### Google Chart Code starts ###################
      /*google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Region', 'sales'],
          ['California', 90],
          ['Texas', 70],
          ['North Dakota', 50],
          ['Louisiana', 65],
          ['Colorado', 80]
        ]);

        var options = {
            colorAxis: {minValue: 0,  colors: ['#FFF', '#4374E0']},
            backgroundColor: '#00FFFFFF',
            defaultColor: '#f5f5f5',
            resolution: 'provinces',
            region: 'US',
            legend: 'none',
            displayMode: 'markers',
            magnifyingGlass: {enable: true, zoomFactor: 100},
            regionClick : function(){
                alert("Hello World");
            }
        };

        var chart = new google.visualization.GeoChart(document.getElementById('chartdiv'));
        chart.draw(data, options);
        */
        //############### Google Chart Code ends ###################
        
        //############### amCharts Code starts #####################
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        var map = AmCharts.makeChart( "chartdiv", {
          "type": "map",
          "theme": "patterns",
          "colorSteps": 5,
          "imagesSettings": {
            "rollOverColor": "#e71836",
            "rollOverScale": 3,
            "color": "#e71836"
          },
          "areasSettings": {
            "outlineThickness": 0.3,
            "rollOverOutlineColor": "#FFFFFF",
            "rollOverColor": "#CC0000",
          },
          "dataProvider": {
            "map": "usaLow",
            "images": [{
              "svgPath": targetSVG,
              "title": "Los Angeles",
              "latitude": 34.3,
              "longitude": -118.15
            }, {
              "svgPath": targetSVG,
              "title": "Oklahoma City",
              "latitude": 35.0,
              "longitude": 97.09 
            }, {
              "svgPath": targetSVG,
              "title": "Boston",
              "latitude": 42,
              "longitude": -71 
            }, {
              "svgPath": targetSVG,
              "title": "Bismarck",
              "latitude": 46,
              "longitude": -100 
            }],
          },
          "zoomControl": {
            "zoomControlEnabled": false,
            "homeButtonEnabled": false
          },
          "valueLegend": false,
          "export": {
            "enabled": false
          }
        } );
        //############### amCharts Code ends #####################
        
        //############### HighCharts High map Code starts ########
        
        //############### HighCharts High map Code ends ##########
    }
 }
}
