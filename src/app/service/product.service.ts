import {Injectable} from '@angular/core';
import {ApiRequestsService} from "./api-requests.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(  private apiRequest: ApiRequestsService ) { }
  getProducts(page?:number, size?:number): Observable<any> {
    let me = this;
    let params: HttpParams = new HttpParams();
    params = params.append('page', typeof page === "number"? page.toString():"0");
    params = params.append('size', typeof size === "number"? size.toString():"1000");

    return  this.apiRequest.get('https://apitester.ir/api/Products',params)


  }

}
