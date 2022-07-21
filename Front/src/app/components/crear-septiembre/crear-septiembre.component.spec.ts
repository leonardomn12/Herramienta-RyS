import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSeptiembreComponent } from './crear-septiembre.component';

describe('CrearSeptiembreComponent', () => {
  let component: CrearSeptiembreComponent;
  let fixture: ComponentFixture<CrearSeptiembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSeptiembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSeptiembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
