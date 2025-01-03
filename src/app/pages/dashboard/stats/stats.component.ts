import { Component, OnInit } from '@angular/core';
import {  NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  // Bar chart (Inventory)
  inventoryChartOptions: any;

  // Line chart (Sales)
  salesChartOptions: any;

  // Pie chart (Expenses)
  expensesChartOptions: any;

  // Horizontal bar chart (Most sold dishes)
  dishesChartOptions: any;

  // Mixed chart (Profitability)
  profitabilityChartOptions: any;

  constructor() {}

  ngOnInit(): void {
    // Inventory Chart Configuration
    this.inventoryChartOptions = {
      series: [{
        name: "Initial Inventory",
        data: [100, 120, 90, 140, 110]
      }, {
        name: "Final Inventory",
        data: [80, 100, 70, 130, 90]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%'
        }
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: { height: 300 },
          legend: { position: 'bottom' }
        }
      }]
    };

    // Sales Chart Configuration
    this.salesChartOptions = {
      series: [{
        name: "Menu Sales",
        data: [50, 70, 65, 80, 60]
      }, {
        name: "À la Carte Sales",
        data: [30, 40, 35, 50, 45]
      }],
      chart: {
        type: 'line',
        height: 350
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: { height: 300 },
          legend: { position: 'bottom' }
        }
      }]
    };

    // Expenses Chart Configuration
    this.expensesChartOptions = {
      series: [40, 25, 20, 15],
      chart: {
        type: 'pie',
        height: 350
      },
      labels: ['Ingredients', 'Employees', 'Utilities', 'Miscellaneous'],
      responsive: [{
        breakpoint: 768,
        options: {
          chart: { height: 300 },
          legend: { position: 'bottom' }
        }
      }]
    };

    // Most Sold Dishes Chart Configuration
    this.dishesChartOptions = {
      series: [{
        data: [30, 25, 20, 15]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        categories: ['Dish A', 'Dish B', 'Dish C', 'Dish D']
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: { height: 300 },
          legend: { position: 'bottom' }
        }
      }]
    };

    // Profitability Chart Configuration
    this.profitabilityChartOptions = {
      series: [{
        name: "Income",
        type: 'column',
        data: [200, 250, 300, 280, 310]
      }, {
        name: "Expenses",
        type: 'column',
        data: [150, 180, 200, 190, 210]
      }, {
        name: "Net Profit",
        type: 'line',
        data: [50, 70, 100, 90, 100]
      }],
      chart: {
        height: 350,
        type: 'line'
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: { height: 300 },
          legend: { position: 'bottom' }
        }
      }]
    };
  }
}