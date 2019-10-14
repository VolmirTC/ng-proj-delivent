import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  _VERSAO =  UrlService.VERSAO;
  
  constructor() { }

  ngOnInit() {
  }

}
