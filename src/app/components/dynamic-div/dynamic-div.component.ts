import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
})
export class DynamicDivComponent {
  items = Array.from({ length: 10 });
  totalItems = Array.from({ length: 100 });

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      this.addMoreItems(10);
    }
  }

  private addMoreItems(n: number) {
    const currentItemCount = this.items.length;
    if (currentItemCount === this.totalItems.length) {
      return;
    }
    // alert('adding more items...');
    const temp = this.totalItems.slice(currentItemCount, currentItemCount + n);
    this.items = [...this.items, ...temp];
  }
}
