import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightListComponent } from './spotlight-list.component';

describe('SpotlightListComponent', () => {
	let component: SpotlightListComponent;
	let fixture: ComponentFixture<SpotlightListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SpotlightListComponent],
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SpotlightListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
