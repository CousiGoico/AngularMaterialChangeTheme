import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterialChangeTheme';
  isDarkThemeActive = false;

  constructor(@Inject(DOCUMENT) private document: Document){}

  onChange(newValue: boolean): void {
    if (newValue == true){
      this.document.body.classList.add('dark-mode');
    } 
    else {
      this.document.body.classList.remove('dark-mode');
    }   
  }
}
