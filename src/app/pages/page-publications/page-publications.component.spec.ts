import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePublicationsComponent } from './page-publications.component';

describe('PagePublicationsComponent', () => {
  let component: PagePublicationsComponent;
  let fixture: ComponentFixture<PagePublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
