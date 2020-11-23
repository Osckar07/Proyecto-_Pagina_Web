import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntoComponent } from './pronto.component';

describe('ProntoComponent', () => {
  let component: ProntoComponent;
  let fixture: ComponentFixture<ProntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
