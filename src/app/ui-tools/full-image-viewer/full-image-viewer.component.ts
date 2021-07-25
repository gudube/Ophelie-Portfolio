import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild } from '@angular/core';
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

	@ViewChild('subpreviousIcon', { read: ElementRef })
	private previousSubArrow: ElementRef | null = null;

	@ViewChild('subnextIcon', { read: ElementRef })
	private nextSubArrow: ElementRef | null = null;

	@ViewChild('fullImg')
	private fullImg: ElementRef<HTMLImageElement> | null = null;

	@ViewChild('smallImgContainer')
	private imgContainer: ElementRef<HTMLDivElement> | null = null;

	public showImage = false;

	public image!: PictureModel;

	public shownSubImageNum = 0;

	constructor(private renderer: Renderer2) { }

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

	@HostListener('window:resize')
	public resetArrowsPositions(): void {
		if (this.imgContainer && this.fullImg && this.nextSubArrow && this.previousSubArrow) {
			const offset = (this.imgContainer.nativeElement.clientWidth
				- this.fullImg.nativeElement.clientWidth) / 2 + 10;
			this.renderer.setStyle(this.previousSubArrow.nativeElement, 'left', offset);
			this.renderer.setStyle(this.nextSubArrow.nativeElement, 'right', offset);
		}
	}
}
