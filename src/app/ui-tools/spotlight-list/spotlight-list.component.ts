import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SpotlightModel } from '../spotlight-item/spotlight-model';

@Component({
	selector: 'app-spotlight-list',
	templateUrl: './spotlight-list.component.html',
	styleUrls: ['./spotlight-list.component.scss'],
})
export class SpotlightListComponent implements OnInit {
	@Input() public items: SpotlightModel[] = [];

	@ViewChild('itemsContainer') container!: ElementRef;

	constructor() { }

	ngOnInit(): void {
	}

	public scroll(right: boolean): void {
		const scrollContainer: HTMLElement = this.container.nativeElement;
		if (right) {
			scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: 'smooth' });
		} else {
			scrollContainer.scrollBy({ left: -scrollContainer.clientWidth, behavior: 'smooth' });
		}
	}
}
