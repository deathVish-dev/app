import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinventoryinfoComponent } from './addinventoryinfo.component';

describe('AddinventoryinfoComponent', () => {
  let component: AddinventoryinfoComponent;
  let fixture: ComponentFixture<AddinventoryinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinventoryinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinventoryinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
