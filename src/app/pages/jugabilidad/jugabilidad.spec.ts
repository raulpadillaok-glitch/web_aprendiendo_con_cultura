import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugabilidad } from './jugabilidad';

describe('Jugabilidad', () => {
  let component: Jugabilidad;
  let fixture: ComponentFixture<Jugabilidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jugabilidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jugabilidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
