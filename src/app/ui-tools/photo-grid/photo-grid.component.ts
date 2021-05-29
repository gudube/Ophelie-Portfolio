import { Input, Component, ViewChild } from '@angular/core';
import { FullImageViewerComponent } from '../full-image-viewer/full-image-viewer.component';
import { PictureModel } from './picture-model';

@Component({
	selector: 'app-photo-grid',
	templateUrl: './photo-grid.component.html',
	styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent {
	@ViewChild(FullImageViewerComponent)
	public imageViewer!: FullImageViewerComponent;

	@Input() public pictures: PictureModel[] = [];

	private showingFullImage = false;

	public get ShowingFullImage(): boolean {
		return this.showingFullImage;
	}

	@Input()
	public set ShowingFullImage(newValue: boolean) {
		if (newValue) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'auto';
		this.showingFullImage = newValue;
	}

	public hasPreviousImage = false;

	public hasNextImage = false;

	ngOnDestroy(): void {
		document.body.style.overflow = 'auto';
	}

	private selectedPicture: PictureModel | undefined;

	public selectImage(index: number): void {
		this.selectedPicture = this.pictures[index];
		this.imageViewer.setImage(this.selectedPicture);

		this.hasPreviousImage = index > 0;
		this.hasNextImage = index < this.pictures.length - 1;
		this.ShowingFullImage = true;
	}

	public nextImage(next: boolean): void {
		if (this.selectedPicture) {
			const currentId = this.pictures.indexOf(this.selectedPicture);
			const newId = next ? currentId + 1 : currentId - 1;
			if (newId >= 0 && newId < this.pictures.length) this.selectImage(newId);
		}
	}
}
