import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EneroComponent } from './enero.component';

describe('EneroComponent', () => {
  let component: EneroComponent;
  let fixture: ComponentFixture<EneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
