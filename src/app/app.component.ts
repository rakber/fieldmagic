import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  public showAside: boolean = false;
  public minimizeAside: boolean = false;
  public showHeaderSearchForm: boolean = false;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {}
}
