import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlyComponent } from './add-edit-ply.component';

describe('AddEditPlyComponent', () => {
  let component: AddEditPlyComponent;
  let fixture: ComponentFixture<AddEditPlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
