import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalHistory } from './clinical-history';

describe('ClinicalHistory', () => {
  let component: ClinicalHistory;
  let fixture: ComponentFixture<ClinicalHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicalHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicalHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
