import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFebreroComponent } from './crear-febrero.component';

describe('CrearFebreroComponent', () => {
  let component: CrearFebreroComponent;
  let fixture: ComponentFixture<CrearFebreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFebreroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFebreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
