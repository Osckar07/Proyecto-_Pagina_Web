import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comprarproducto2Component } from './comprarproducto2.component';

describe('Comprarproducto2Component', () => {
  let component: Comprarproducto2Component;
  let fixture: ComponentFixture<Comprarproducto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comprarproducto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comprarproducto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
