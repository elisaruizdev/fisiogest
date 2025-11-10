import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsHistory } from './sessions-history';

describe('SessionsHistory', () => {
  let component: SessionsHistory;
  let fixture: ComponentFixture<SessionsHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
