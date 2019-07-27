import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoinventoryComponent } from './addtoinventory.component';

describe('AddtoinventoryComponent', () => {
  let component: AddtoinventoryComponent;
  let fixture: ComponentFixture<AddtoinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtoinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtoinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
