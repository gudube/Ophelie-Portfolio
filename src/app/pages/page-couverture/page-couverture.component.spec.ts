import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCouvertureComponent } from './page-couverture.component';

describe('PageCouvertureComponent', () => {
  let component: PageCouvertureComponent;
  let fixture: ComponentFixture<PageCouvertureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCouvertureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCouvertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
