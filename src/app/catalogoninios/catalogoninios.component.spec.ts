import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoniniosComponent } from './catalogoninios.component';

describe('CatalogoniniosComponent', () => {
  let component: CatalogoniniosComponent;
  let fixture: ComponentFixture<CatalogoniniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoniniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoniniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
