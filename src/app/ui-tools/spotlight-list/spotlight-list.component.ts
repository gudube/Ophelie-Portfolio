import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FullImageViewerComponent } from '../full-image-viewer/full-image-viewer.component';
import { SpotlightModel } from '../spotlight-item/spotlight-model';

@Component({
	selector: 'app-spotlight-list',
	templateUrl: './spotlight-list.component.html',
	styleUrls: ['./spotlight-list.component.scss'],
})
export class SpotlightListComponent implements OnInit {
	@ViewChild(FullImageViewerComponent)
	public imageViewer!: FullImageViewerComponent;

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

	private showingFullItem = false;

	public get ShowingFullItem(): boolean {
		return this.showingFullItem;
	}

	@Input()
	public set ShowingFullItem(newValue: boolean) {
		if (newValue) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'auto';
		this.showingFullItem = newValue;
	}

	private selectedItem: SpotlightModel | undefined;

	public selectItem(item: SpotlightModel): void {
		this.selectedItem = item;
		this.imageViewer.setItem(this.selectedItem);
		this.ShowingFullItem = true;
	}

	ngOnDestroy(): void {
		document.body.style.overflow = 'auto';
	}
}
