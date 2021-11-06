import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCollectionsComponent } from './page-collections.component';

describe('PageCollectionsComponent', () => {
  let component: PageCollectionsComponent;
  let fixture: ComponentFixture<PageCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
