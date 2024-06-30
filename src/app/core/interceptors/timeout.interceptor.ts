import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http"
import { Observable, catchError, delay, throwError, timeout } from "rxjs"

export function timeoutInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>>{
    return next(req).pipe(
        timeout(60000), // Timeout di 5 secondi
        catchError(error => {
            // Gestione dell'errore di timeout
            console.error('Request timed out:', error);
            return throwError(error);
        })
    );
}