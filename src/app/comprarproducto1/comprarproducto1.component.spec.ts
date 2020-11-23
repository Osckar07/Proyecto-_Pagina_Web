import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comprarproducto1Component } from './comprarproducto1.component';

describe('Comprarproducto1Component', () => {
  let component: Comprarproducto1Component;
  let fixture: ComponentFixture<Comprarproducto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comprarproducto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comprarproducto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
