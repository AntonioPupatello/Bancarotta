import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ACCOUNT_URL, API_URL } from "../config/tokens";
import { Observable, catchError } from "rxjs";
import { ApiCallParams } from "../models/api";


@Injectable()
export class EssentialService {
    // dependencies
    private http = inject(HttpClient)
    protected apiBase = inject(API_URL)
    protected altApiBase = inject(ACCOUNT_URL)
    protected apiPath = ''

    get altApiUrl():string{
        return `${this.altApiBase}/${this.apiPath}`
    }

    // variabili configurabili

    get apiUrl():string{
        return `${this.apiBase}/${this.apiPath}`
    }

    // metodo che permette di chiamare gli endpoint api
    protected apiCall<T>(params: ApiCallParams):Observable<T>{
        return this.http.request<T>(
            params.type,
            params.url,
            params.options
        ).pipe(
            catchError(err => {
                alert(err)
                throw new Error(err)
            })
        )
    }

}