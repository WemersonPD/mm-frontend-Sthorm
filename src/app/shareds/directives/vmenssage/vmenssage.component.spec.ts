import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmenssageComponent } from './vmenssage.component';

describe('VmenssageComponent', () => {
  let component: VmenssageComponent;
  let fixture: ComponentFixture<VmenssageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmenssageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmenssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
