import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http"
import { Observable, delay } from "rxjs"

export function delayInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>>{
    return next(req).pipe(
        delay(100)
    );
}