import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MYCalComponent } from './mycal.component';

describe('MYCalComponent', () => {
  let component: MYCalComponent;
  let fixture: ComponentFixture<MYCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MYCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MYCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
