import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExpositionsComponent } from './page-expositions.component';

describe('PageExpositionsComponent', () => {
  let component: PageExpositionsComponent;
  let fixture: ComponentFixture<PageExpositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExpositionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExpositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
