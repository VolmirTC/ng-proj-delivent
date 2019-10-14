import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})
export class OfflineComponent implements OnInit {

  _VERSAO = UrlService.VERSAO;
  
  constructor() { }

  ngOnInit() {
  }

}
