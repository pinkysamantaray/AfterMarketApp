import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  results: string[];
  selectedPage: string;
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.selectedPage = 'myEquipments';
    
    /*this.http.get('app/data/chart.json').subscribe(data => {
      debugger;
      this.results = data['results'];
    });*/
  }

    ngAfterViewInit() {
      //############### Google Chart Code starts ###################
      google.charts.load('current', {
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
        //############### Google Chart Code ends ###################
        
        //############### amCharts Code starts #####################
        /*var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        
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
        } );*/
        //############### amCharts Code ends #####################
        
        //############### HighCharts High map Code starts ########
        /*
            this.data = [{
                "value": 438,
                "code": "NJ"
            },
            {
                "value": 387.35,
                "code": "RI"
            },
            {
                "value": 312.68,
                "code": "MA"
            },
            {
                "value": 271.4,
                "code": "CT"
            },
            {
                "value": 209.23,
                "code": "MD"
            },
            {
                "value": 195.18,
                "code": "NY"
            },
            {
                "value": 154.87,
                "code": "DE"
            },
            {
                "value": 114.43,
                "code": "FL"
            },
            {
                "value": 107.05,
                "code": "OH"
            },
            {
                "value": 105.8,
                "code": "PA"
            },
            {
                "value": 86.27,
                "code": "IL"
            },
            {
                "value": 83.85,
                "code": "CA"
            },
            {
                "value": 72.83,
                "code": "HI"
            },
            {
                "value": 69.03,
                "code": "VA"
            },
            {
                "value": 67.55,
                "code": "MI"
            },
            {
                "value": 65.46,
                "code": "IN"
            },
            {
                "value": 63.8,
                "code": "NC"
            },
            {
                "value": 54.59,
                "code": "GA"
            },
            {
                "value": 53.29,
                "code": "TN"
            },
            {
                "value": 53.2,
                "code": "NH"
            },
            {
                "value": 51.45,
                "code": "SC"
            },
            {
                "value": 39.61,
                "code": "LA"
            },
            {
                "value": 39.28,
                "code": "KY"
            },
            {
                "value": 38.13,
                "code": "WI"
            },
            {
                "value": 34.2,
                "code": "WA"
            },
            {
                "value": 33.84,
                "code": "AL"
            },
            {
                "value": 31.36,
                "code": "MO"
            },
            {
                "value": 30.75,
                "code": "TX"
            },
            {
                "value": 29,
                "code": "WV"
            },
            {
                "value": 25.41,
                "code": "VT"
            }
            ];

            // Instanciate the map
            Highcharts.mapChart('chartdiv', {

                chart: {
                    borderWidth: 1
                },

                title: {
                    text: 'US population density (/km²)'
                },

                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },

                mapNavigation: {
                    enabled: true
                },

                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },

                series: [{
                    animation: {
                        duration: 1000
                    },
                    data: this.data,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: ['postal-code', 'code'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.code}'
                    },
                    name: 'Population density',
                    tooltip: {
                        pointFormat: '{point.code}: {point.value}/km²'
                    }
                }]
            });
            */
        //############### HighCharts High map Code ends ##########
    }
 }
}