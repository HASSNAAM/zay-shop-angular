import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarticonComponent } from './carticon.component';

describe('CarticonComponent', () => {
  let component: CarticonComponent;
  let fixture: ComponentFixture<CarticonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarticonComponent]
    });
    fixture = TestBed.createComponent(CarticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
