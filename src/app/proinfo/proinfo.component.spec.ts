import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProinfoComponent } from './proinfo.component';

describe('ProinfoComponent', () => {
  let component: ProinfoComponent;
  let fixture: ComponentFixture<ProinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProinfoComponent]
    });
    fixture = TestBed.createComponent(ProinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
