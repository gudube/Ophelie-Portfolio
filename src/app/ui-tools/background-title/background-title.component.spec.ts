import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundTitleComponent } from './background-title.component';

describe('BackgroundTitleComponent', () => {
  let component: BackgroundTitleComponent;
  let fixture: ComponentFixture<BackgroundTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
