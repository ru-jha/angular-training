import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivIndividualComponent } from './div-individual.component';

describe('DivIndividualComponent', () => {
  let component: DivIndividualComponent;
  let fixture: ComponentFixture<DivIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
