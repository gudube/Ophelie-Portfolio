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

	private _showingFullItem = false;

	public get showingFullItem(): boolean {
		return this._showingFullItem;
	}

	@Input()
	public set showingFullItem(newValue: boolean) {
		if (newValue) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'auto';
		this._showingFullItem = newValue;
	}

	public selectItem(item: SpotlightModel): void {
		this.imageViewer.items = [item.videoUrl];
		this.imageViewer.description = item.description;
		this.showingFullItem = true;
	}

	ngOnDestroy(): void {
		document.body.style.overflow = 'auto';
	}
}
