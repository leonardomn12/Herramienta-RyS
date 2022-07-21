import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJulioComponent } from './crear-julio.component';

describe('CrearJulioComponent', () => {
  let component: CrearJulioComponent;
  let fixture: ComponentFixture<CrearJulioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJulioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJulioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
