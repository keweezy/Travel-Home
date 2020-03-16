import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    // $( document ).ready(function() {
    //   $("#js-rotating").Morphext({
    //     animation: "bounceIn",
    //     separator: ",",
    //     speed: 2000,
    //     complete: function () {
    //     }
    //   });
    // });
  }
  
}
