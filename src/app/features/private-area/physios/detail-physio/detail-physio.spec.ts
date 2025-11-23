import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPhysio } from './detail-physio';

describe('DetailPhysio', () => {
  let component: DetailPhysio;
  let fixture: ComponentFixture<DetailPhysio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPhysio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPhysio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
