import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OllareComponent } from './ollare.component';

describe('OllareComponent', () => {
  let component: OllareComponent;
  let fixture: ComponentFixture<OllareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OllareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OllareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
