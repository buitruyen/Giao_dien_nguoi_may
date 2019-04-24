import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-zvideo-home',
    templateUrl: '../templates/home.component.html'
})
export class HomeComponent implements OnInit {
    playlistInfors: any[];

    constructor() {
    }

    ngOnInit() {
        this.playlistInfors = [
            //Lập trinh java
            {
                'playlistID': 'PLv6GftO355Av6u60DTCvrUe6aXror_bdE',
                'layoutType': 'grid'
            },
            //Lập trinh Adroid
            {
                'playlistID': 'PLv6GftO355AsmgFEoUx_XHfN14FAI3SrN',
                'layoutType': 'hdgrid'
            },
            //Lập trình Php
            {
                'playlistID': 'PLv6GftO355AsZFXlWLKob6tMsWZa4VCY1',
                'layoutType': 'list'
            },
            //Lập trinh Angular
            {
                'playlistID': 'PLv6GftO355AsMUZXqKY_IFsNahY1txNXS',
                'layoutType': 'hdlist'
            }
        ]
    }
}