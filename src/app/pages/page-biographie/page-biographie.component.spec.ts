import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBiographieComponent } from './page-biographie.component';

describe('PageBiographieComponent', () => {
  let component: PageBiographieComponent;
  let fixture: ComponentFixture<PageBiographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBiographieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBiographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
