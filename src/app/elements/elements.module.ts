import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WidgetAdsComponent} from "./widget-ads/widget-ads.component";
import {WidgetSocialComponent} from "./widget-social/widget-social.component";
import {WidgetMenuTopComponent} from "./widget-menu-top/widget-menu-top.component";
import {WidgetBannerComponent} from "./widget-banner/widget-banner.component";
import {WidgetMenuMainComponent} from "./widget-menu-main/widget-menu-main.component";
import {ElmHeaderComponent} from "./elm-header/elm-header.component";
import {WidgetPlaylistComponent} from "./widget-playlist/widget-playlist.component";
import {WidgetFeaturedVideoComponent} from "./widget-featured-video/widget-featured-video.component";
import {WidgetPopularVideoComponent} from "./widget-popular-video/widget-popular-video.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WidgetAdsComponent,
        WidgetSocialComponent,
        WidgetMenuTopComponent,
        WidgetBannerComponent,
        WidgetMenuMainComponent,
        ElmHeaderComponent,
        WidgetPlaylistComponent,
        WidgetFeaturedVideoComponent,
        WidgetPopularVideoComponent

    ],
    providers: [],
    exports: [
        WidgetAdsComponent,
        WidgetSocialComponent,
        WidgetMenuTopComponent,
        WidgetBannerComponent,
        WidgetMenuMainComponent,
        ElmHeaderComponent,
        WidgetPlaylistComponent,
        WidgetFeaturedVideoComponent,
        WidgetPopularVideoComponent
    ]
})
export class ElementsModule {

}
