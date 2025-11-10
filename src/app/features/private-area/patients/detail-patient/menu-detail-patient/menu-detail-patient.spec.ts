import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailPatient } from './menu-detail-patient';

describe('MenuDetailPatient', () => {
  let component: MenuDetailPatient;
  let fixture: ComponentFixture<MenuDetailPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDetailPatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDetailPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
