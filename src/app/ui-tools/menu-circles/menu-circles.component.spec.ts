import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCirclesComponent } from './menu-circles.component';

describe('MenuCirclesComponent', () => {
  let component: MenuCirclesComponent;
  let fixture: ComponentFixture<MenuCirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCirclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
