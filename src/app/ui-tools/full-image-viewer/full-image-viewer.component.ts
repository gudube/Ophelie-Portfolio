import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-full-image-viewer',
	templateUrl: './full-image-viewer.component.html',
	styleUrls: ['./full-image-viewer.component.scss'],
})
export class FullImageViewerComponent {
	@Input() public visible = false;

	@Output() visibleChange = new EventEmitter<boolean>();

	@Input() public hasPreviousImage = false;

	@Input() public hasNextImage = false;

	@Output() nextImage = new EventEmitter<boolean>();

	@Input() public items: string[] = [];

	@Input() public description = '';

	@Input() public title = '';

	public showImage = false;

	public cleanUrl: SafeResourceUrl | null = null;

	constructor() { }

	public hide(): void {
		this.visible = false;
		this.visibleChange.emit(this.visible);
	}

	@HostListener('window:keydown.arrowright', ['true'])
	@HostListener('window:keydown.arrowleft', ['false'])
	public changeImage(nextImage: boolean): void {
		this.nextImage.emit(nextImage);
	}
}
