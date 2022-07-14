import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEveComponent } from './add-edit-eve.component';

describe('AddEditEveComponent', () => {
  let component: AddEditEveComponent;
  let fixture: ComponentFixture<AddEditEveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
