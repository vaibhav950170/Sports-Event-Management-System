import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlyComponent } from './show-ply.component';

describe('ShowPlyComponent', () => {
  let component: ShowPlyComponent;
  let fixture: ComponentFixture<ShowPlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
