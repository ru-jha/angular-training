import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-div-individual',
  templateUrl: './div-individual.component.html',
  styleUrls: ['./div-individual.component.scss'],
})
export class DivIndividualComponent {
  @Input() width = 200;
  @Input() height = 200;
  @Input() index: number;

  onButtonClick() {
    alert(`Button '${this.index}' is clicked`);
  }
}
