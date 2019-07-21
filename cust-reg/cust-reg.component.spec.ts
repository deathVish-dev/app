import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRegComponent } from './cust-reg.component';

describe('CustRegComponent', () => {
  let component: CustRegComponent;
  let fixture: ComponentFixture<CustRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
