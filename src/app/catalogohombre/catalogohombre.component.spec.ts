import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogohombreComponent } from './catalogohombre.component';

describe('CatalogohombreComponent', () => {
  let component: CatalogohombreComponent;
  let fixture: ComponentFixture<CatalogohombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogohombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogohombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
