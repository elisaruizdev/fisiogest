import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPatient } from './detail-patient';

describe('DetailPatient', () => {
  let component: DetailPatient;
  let fixture: ComponentFixture<DetailPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
