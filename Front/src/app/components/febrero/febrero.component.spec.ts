import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebreroComponent } from './febrero.component';

describe('FebreroComponent', () => {
  let component: FebreroComponent;
  let fixture: ComponentFixture<FebreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebreroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FebreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
