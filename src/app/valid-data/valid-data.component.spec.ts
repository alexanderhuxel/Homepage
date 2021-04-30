import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidDataComponent } from './valid-data.component';

describe('ValidDataComponent', () => {
  let component: ValidDataComponent;
  let fixture: ComponentFixture<ValidDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
