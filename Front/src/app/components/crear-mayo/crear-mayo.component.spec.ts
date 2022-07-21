import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMayoComponent } from './crear-mayo.component';

describe('CrearMayoComponent', () => {
  let component: CrearMayoComponent;
  let fixture: ComponentFixture<CrearMayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMayoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
