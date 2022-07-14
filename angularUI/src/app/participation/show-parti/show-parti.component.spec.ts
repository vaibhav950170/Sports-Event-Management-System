import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPartiComponent } from './show-parti.component';

describe('ShowPartiComponent', () => {
  let component: ShowPartiComponent;
  let fixture: ComponentFixture<ShowPartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
