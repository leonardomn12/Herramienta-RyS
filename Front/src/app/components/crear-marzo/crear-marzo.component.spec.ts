import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMarzoComponent } from './crear-marzo.component';

describe('CrearMarzoComponent', () => {
  let component: CrearMarzoComponent;
  let fixture: ComponentFixture<CrearMarzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMarzoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMarzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
