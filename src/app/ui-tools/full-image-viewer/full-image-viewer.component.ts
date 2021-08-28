import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { PictureModel } from '../photo-grid/picture-model';
import { SpotlightModel } from '../spotlight-item/spotlight-model';

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

	public showingItemInsteadOfImage = false;

	public image: PictureModel | undefined;

	public item: SpotlightModel | undefined;

	public get shownDescription(): string {
		if (this.image) return this.image.description;
		return this.item?.description || '';
	}

	public cleanUrl: SafeResourceUrl | null = null;

	public shownSubImageNum = 0;

	public assetLoaded = false;

	constructor(private renderer: Renderer2, private sanatizer: DomSanitizer) { }

	public setImage(image: PictureModel): void {
		this.assetLoaded = false;
		this.image = image;
		this.shownSubImageNum = 0;
		this.showImage = true;
		this.showingItemInsteadOfImage = false;
	}

	public setItem(item: SpotlightModel): void {
		this.assetLoaded = false;
		this.item = item;
		this.hasPreviousImage = false;
		this.hasNextImage = false;
		this.cleanUrl = this.sanatizer.bypassSecurityTrustResourceUrl(item.videoUrl);
		this.showingItemInsteadOfImage = true;
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

	public finishedLoadingAsset(): void {
		this.resetArrowsPositions();
		this.assetLoaded = true;
	}

	@HostListener('window:resize')
	public resetArrowsPositions(): void {
		if (this.imgContainer && this.fullImg && (this.previousSubArrow || this.nextSubArrow)) {
			const offset = (this.imgContainer.nativeElement.clientWidth
				- this.fullImg.nativeElement.clientWidth) / 2 + 10;
			if (this.previousSubArrow) {
				this.renderer.setStyle(this.previousSubArrow.nativeElement, 'left', offset);
			}
			if (this.nextSubArrow) {
				this.renderer.setStyle(this.nextSubArrow.nativeElement, 'right', offset);
			}
		}
	}

	public changeSubImage(next: boolean) : void {
		if (next && this.image && this.shownSubImageNum + 1 < this.image.subImages.length) {
			this.assetLoaded = false;
			this.shownSubImageNum += 1;
		}
		if (!next && this.shownSubImageNum - 1 >= 0) {
			this.assetLoaded = false;
			this.shownSubImageNum -= 1;
		}
	}
}
