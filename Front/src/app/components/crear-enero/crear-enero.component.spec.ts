import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEneroComponent } from './crear-enero.component';

describe('CrearEneroComponent', () => {
  let component: CrearEneroComponent;
  let fixture: ComponentFixture<CrearEneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
