import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNoviembreComponent } from './crear-noviembre.component';

describe('CrearNoviembreComponent', () => {
  let component: CrearNoviembreComponent;
  let fixture: ComponentFixture<CrearNoviembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNoviembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNoviembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
