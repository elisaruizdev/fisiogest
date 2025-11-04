import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Physios } from './physios';

describe('Physios', () => {
  let component: Physios;
  let fixture: ComponentFixture<Physios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Physios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Physios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
