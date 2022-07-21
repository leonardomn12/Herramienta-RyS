import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunioComponent } from './junio.component';

describe('JunioComponent', () => {
  let component: JunioComponent;
  let fixture: ComponentFixture<JunioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
