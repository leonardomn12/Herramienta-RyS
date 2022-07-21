import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJunioComponent } from './crear-junio.component';

describe('CrearJunioComponent', () => {
  let component: CrearJunioComponent;
  let fixture: ComponentFixture<CrearJunioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJunioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJunioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
