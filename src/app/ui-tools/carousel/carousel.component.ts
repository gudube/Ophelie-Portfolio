import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CarouselItem } from 'src/app/models/picture-model';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
	@ViewChild('photoGrid')
	public photoGrid!: ElementRef;

	@Input() public centerItem: CarouselItem = {
		title: '',
		image: '',
		cadre: '',
		url: '',
	};

	@Input() public leftItem: CarouselItem = {
		title: '',
		image: '',
		cadre: '',
		url: '',
	};

	@Input() public rightItem: CarouselItem = {
		title: '',
		image: '',
		cadre: '',
		url: '',
	};

	public currentItem: CarouselItem | null = null;

	public hoverTitle: string | null = null;

	hoverImage(item: CarouselItem | null): void {
		this.hoverTitle = item?.title ?? '';
	}

	unhoverImage(): void {
		this.hoverTitle = null;
	}
}
