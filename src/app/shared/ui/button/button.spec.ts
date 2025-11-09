import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUI } from './button';

describe('Button', () => {
  let component: ButtonUI;
  let fixture: ComponentFixture<ButtonUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonUI],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
