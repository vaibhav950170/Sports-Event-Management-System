import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSpoComponent } from './add-edit-spo.component';

describe('AddEditSpoComponent', () => {
  let component: AddEditSpoComponent;
  let fixture: ComponentFixture<AddEditSpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
