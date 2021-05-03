import { Input, Component } from '@angular/core';

@Component({
	selector: 'app-photo-grid',
	templateUrl: './photo-grid.component.html',
	styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent {
	// @ViewChild(FullImageViewerComponent) public imageViewer: FullImageViewerComponent;

	@Input() public photos: string[] = [];
	// private _showingFullImage = false;
	// public get showingFullImage(): boolean {
	// 	return this._showingFullImage;
	// }

	// @Input()
	// public set showingFullImage(newValue: boolean) {
	// 	if(newValue)
	// 		document.body.style.overflow = 'hidden';
	// 	else
	// 		document.body.style.overflow = 'auto';
	// 	this._showingFullImage = newValue;
	// }
	// public hasPreviousImage = false;
	// public hasNextImage = false;

	// ngOnDestroy(): void {
	// 	document.body.style.overflow = 'auto';
	// }

	// private selectedFileName: string;

	// public selectImage(index: number): void{
	// 	this.selectedFileName = this.album.photoFileNames[index];
	// 	this.imageViewer.setImage(this.album.id, this.selectedFileName);

	// 	this.hasPreviousImage = index > 0;
	// 	this.hasNextImage = index < this.album.photoFileNames.length - 1;
	// 	this.showingFullImage = true;
	// }

	// public nextImage(next: boolean): void{
	// 	const currentId = this.album.photoFileNames.indexOf(this.selectedFileName);
	// 	const newId = next ? currentId + 1 : currentId - 1;
	// 	if(newId >=0 && newId < this.album.photoFileNames.length)
	// 		this.selectImage(newId, );
	// }
}
