import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAgostoComponent } from './crear-agosto.component';

describe('CrearAgostoComponent', () => {
  let component: CrearAgostoComponent;
  let fixture: ComponentFixture<CrearAgostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAgostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAgostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
