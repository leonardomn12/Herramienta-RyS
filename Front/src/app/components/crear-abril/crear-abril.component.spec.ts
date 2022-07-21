import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAbrilComponent } from './crear-abril.component';

describe('CrearAbrilComponent', () => {
  let component: CrearAbrilComponent;
  let fixture: ComponentFixture<CrearAbrilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAbrilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAbrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
