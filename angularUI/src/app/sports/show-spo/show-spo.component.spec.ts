import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpoComponent } from './show-spo.component';

describe('ShowSpoComponent', () => {
  let component: ShowSpoComponent;
  let fixture: ComponentFixture<ShowSpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
