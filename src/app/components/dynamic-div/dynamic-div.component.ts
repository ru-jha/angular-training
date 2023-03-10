import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
})
export class DynamicDivComponent {
  items = Array.from({ length: 500 });
  visibleItems = 10;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      this.visibleItems += 10;
    }
  }
}
