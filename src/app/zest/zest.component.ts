import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zest',
  templateUrl: './zest.component.html',
  styleUrls: ['./zest.component.css']
})
export class ZestComponent implements OnInit {
  public colors = [ "red","green", "yellow","blue"];

  constructor() { }

  ngOnInit() {
  }

}
