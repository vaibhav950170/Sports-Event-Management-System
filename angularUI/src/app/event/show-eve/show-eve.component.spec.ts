import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEveComponent } from './show-eve.component';

describe('ShowEveComponent', () => {
  let component: ShowEveComponent;
  let fixture: ComponentFixture<ShowEveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
