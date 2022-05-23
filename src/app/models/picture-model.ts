export interface PictureModel {
	fileName: string;
	title: string;
	subtitle: string;
	description: string;
	subImages: string[];
}

export interface Collection {
	headerUrl: string;
	url: string;
	title: string;
	description: string;
	text: string;
	photos: PictureModel[];
}

export interface Category {
	title: string;
	collections: Collection[];
}

export interface CarouselItem {
	title: string;
	image: string;
	cadre: string;
	url: string;
}
