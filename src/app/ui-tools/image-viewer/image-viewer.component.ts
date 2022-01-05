import { Component, ElementRef, HostListener, Input, OnInit, Pipe, PipeTransform, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	public transform(url: string): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}

@Component({
	selector: 'app-image-viewer',
	templateUrl: './image-viewer.component.html',
	styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
	constructor(private renderer: Renderer2, public sanatizer: DomSanitizer) { }

	ngOnInit(): void {
	}

	@ViewChild('previousIcon', { read: ElementRef })
	private previousSubArrow: ElementRef | null = null;

	@ViewChild('nextIcon', { read: ElementRef })
	private nextSubArrow: ElementRef | null = null;

	@ViewChild('fullImg')
	private fullImg: ElementRef<HTMLImageElement> | null = null;

	@ViewChild('mainContainer')
	private mainContainer: ElementRef<HTMLDivElement> | null = null;

	private _items: string[] = [];

	public get items(): string[] {
		return this._items;
	}

	@Input() public set items(newItems: string[]) {
		this.itemLoaded = false;
		this._shownItemNum = 0;
		this._items = newItems;
		this.shownIsImage = this.isImage(newItems[0]);
	}

	private _shownItemNum = 0;

	public get shownItemNum(): number {
		return this._shownItemNum;
	}

	public set shownItemNum(imageNum: number) {
		if (imageNum >= 0 && imageNum < this.items.length) {
			this.itemLoaded = false;
			this._shownItemNum = imageNum;
			this.shownIsImage = this.isImage(this.items[imageNum]);
		}
	}

	public shownIsImage = true;

	public itemLoaded = false;

	public changeImage(next: boolean) : void {
		this.shownItemNum += (next ? 1 : -1);
	}

	public isImage(item: string): boolean {
		const imageFormats = ['.webp', '.jpeg', '.jpg', '.png', '.webp'];
		return imageFormats.some((format) => item.endsWith(format));
	}

	public finishedLoadingAsset(): void {
		this.resetArrowsPositions();
		this.itemLoaded = true;
	}

	@HostListener('window:resize')
	public resetArrowsPositions(): void {
		const offset = (this.shownIsImage && this.mainContainer && this.fullImg)
			? (this.mainContainer.nativeElement.clientWidth
				- this.fullImg.nativeElement.clientWidth) / 2 + 10
			: 20;
		if (this.previousSubArrow) {
			this.renderer.setStyle(this.previousSubArrow.nativeElement, 'left', offset);
		}
		if (this.nextSubArrow) {
			this.renderer.setStyle(this.nextSubArrow.nativeElement, 'right', offset);
		}
	}
}
