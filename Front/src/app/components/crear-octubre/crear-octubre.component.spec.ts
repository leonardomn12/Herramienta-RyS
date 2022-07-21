import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOctubreComponent } from './crear-octubre.component';

describe('CrearOctubreComponent', () => {
  let component: CrearOctubreComponent;
  let fixture: ComponentFixture<CrearOctubreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOctubreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOctubreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
