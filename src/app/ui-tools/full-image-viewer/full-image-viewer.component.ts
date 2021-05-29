import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { PictureModel } from '../photo-grid/picture-model';

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

	public showImage = false;

	public image!: PictureModel;

	constructor() { }

	public setImage(image: PictureModel): void {
		this.image = image;
		this.showImage = true;
	}

	public hide(): void {
		this.visible = false;
		this.showImage = false;
		this.visibleChange.emit(this.visible);
	}

	@HostListener('window:keydown.arrowright', ['true'])
	@HostListener('window:keydown.arrowleft', ['false'])
	public changeImage(nextImage: boolean): void {
		this.nextImage.emit(nextImage);
	}
}
