import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPartiComponent } from './add-edit-parti.component';

describe('AddEditPartiComponent', () => {
  let component: AddEditPartiComponent;
  let fixture: ComponentFixture<AddEditPartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
