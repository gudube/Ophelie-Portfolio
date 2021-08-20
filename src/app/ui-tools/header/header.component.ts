import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
	@ViewChild('onglets')
	ongletsContainer!: any;

	public indicatorPos = 0;

	public visibleIndicator = false;

	constructor() { }

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.computeIndicatorPos();
		}, 0);
	}

	private computeIndicatorPos(): void {
		const activeOnglets = this.ongletsContainer.nativeElement.getElementsByClassName('active');
		if (activeOnglets.length !== 1 || !activeOnglets[0]) {
			this.visibleIndicator = false;
		} else {
			const activeOnglet = activeOnglets[0] as HTMLElement;
			console.log(this.ongletsContainer.nativeElement.clientLeft);
			this.indicatorPos = activeOnglet.offsetLeft + activeOnglet.clientWidth / 2;
			this.visibleIndicator = true;
		}
	}
}
