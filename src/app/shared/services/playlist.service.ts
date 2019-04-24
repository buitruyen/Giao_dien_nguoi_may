import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Ads} from "../defines/ads.class";
import {AppSetting} from "../../app.setting";
import {Observable} from "rxjs";
import {Playlist} from "../defines/playlist.class";

@Injectable()
export class PlaylistService {
	constructor(private _db: AngularFireDatabase) {
	}

	getItems():Observable<Playlist[]>{
		return (<Observable<Playlist[]>>this._db.list(AppSetting.TBL_PLAYLIST,ref => ref.limitToFirst(2)).valueChanges());
	}

}