import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExperiencesComponent } from './page-experiences.component';

describe('PageExperiencesComponent', () => {
  let component: PageExperiencesComponent;
  let fixture: ComponentFixture<PageExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
