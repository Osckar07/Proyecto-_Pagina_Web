import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogomujerComponent } from './catalogomujer.component';

describe('CatalogomujerComponent', () => {
  let component: CatalogomujerComponent;
  let fixture: ComponentFixture<CatalogomujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogomujerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogomujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
