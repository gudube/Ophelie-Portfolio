import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightItemComponent } from './spotlight-item.component';

describe('SpotlightItemComponent', () => {
  let component: SpotlightItemComponent;
  let fixture: ComponentFixture<SpotlightItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotlightItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
