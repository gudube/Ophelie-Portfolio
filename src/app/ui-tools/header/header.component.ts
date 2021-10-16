import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
	@ViewChild('onglets')
	ongletsContainer!: any;

	public indicatorPos = 0;

	public visibleIndicator = false;

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				setTimeout(() => {
					this.computeIndicatorPos();
				}, 0);
			}
		});
	}

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
			this.indicatorPos = activeOnglet.offsetLeft + activeOnglet.clientWidth / 2;
			this.visibleIndicator = true;
		}
	}
}
