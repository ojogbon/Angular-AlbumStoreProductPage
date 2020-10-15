import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _http_: Http;

  private _albumUrl: string = "../assets/album.json";  

  constructor(private _http: Http) {
      this._http_ = _http;
   }

   public getAlbum (id: number){
      return this._http_.get(this._albumUrl)
      .map(responce => {
        return responce.json()});
   }

   
}
