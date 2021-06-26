import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemarchesComponent } from './page-demarches.component';

describe('PageDemarchesComponent', () => {
  let component: PageDemarchesComponent;
  let fixture: ComponentFixture<PageDemarchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDemarchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDemarchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
