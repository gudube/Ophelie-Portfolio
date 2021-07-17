import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImageViewerComponent } from './full-image-viewer.component';

describe('FullImageViewerComponent', () => {
	let component: FullImageViewerComponent;
	let fixture: ComponentFixture<FullImageViewerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FullImageViewerComponent],
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FullImageViewerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
