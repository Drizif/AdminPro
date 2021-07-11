import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  fecha = new Date().getFullYear();

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {}

}
