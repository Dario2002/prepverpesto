import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdprodottoComponent } from './idprodotto.component';

describe('IdprodottoComponent', () => {
  let component: IdprodottoComponent;
  let fixture: ComponentFixture<IdprodottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdprodottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
