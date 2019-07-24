import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditinventoryComponent } from './addeditinventory.component';

describe('AddeditinventoryComponent', () => {
  let component: AddeditinventoryComponent;
  let fixture: ComponentFixture<AddeditinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
