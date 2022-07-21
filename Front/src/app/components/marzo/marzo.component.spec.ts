import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarzoComponent } from './marzo.component';

describe('MarzoComponent', () => {
  let component: MarzoComponent;
  let fixture: ComponentFixture<MarzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarzoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
