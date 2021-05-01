import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChoreoComponent } from './page-choreo.component';

describe('PageChoreoComponent', () => {
  let component: PageChoreoComponent;
  let fixture: ComponentFixture<PageChoreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChoreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
