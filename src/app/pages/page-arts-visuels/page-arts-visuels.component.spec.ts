import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtsVisuelsComponent } from './page-arts-visuels.component';

describe('PagePeinturesComponent', () => {
	let component: PageArtsVisuelsComponent;
	let fixture: ComponentFixture<PageArtsVisuelsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageArtsVisuelsComponent],
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageArtsVisuelsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
