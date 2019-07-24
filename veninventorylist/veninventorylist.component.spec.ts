import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeninventorylistComponent } from './veninventorylist.component';

describe('VeninventorylistComponent', () => {
  let component: VeninventorylistComponent;
  let fixture: ComponentFixture<VeninventorylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeninventorylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeninventorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
