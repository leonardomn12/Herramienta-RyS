import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDiciembreComponent } from './crear-diciembre.component';

describe('CrearDiciembreComponent', () => {
  let component: CrearDiciembreComponent;
  let fixture: ComponentFixture<CrearDiciembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDiciembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDiciembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
