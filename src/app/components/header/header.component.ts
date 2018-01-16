import { Component, OnInit,Inject  } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { Router }  from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
