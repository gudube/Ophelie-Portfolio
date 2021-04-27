import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePeinturesComponent } from './page-peintures.component';

describe('PagePeinturesComponent', () => {
  let component: PagePeinturesComponent;
  let fixture: ComponentFixture<PagePeinturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePeinturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePeinturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
