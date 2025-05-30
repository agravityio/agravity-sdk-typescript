/**
 * Agravity OpenAPI Documentation - Private Functions
 *
 * Contact: office@agravity.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

// @ts-ignore
import { AgravityErrorResponse } from '../model/agravityErrorResponse.agravity';
// @ts-ignore
import { AgravityPortalUser } from '../model/agravityPortalUser.agravity';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { AgravityConfiguration } from '../configuration';

export interface HttpPortalsCreatePortalsUserRequestParams {
	/** The created Agravity Portals User. */
	agravityPortalUser: AgravityPortalUser;
}

export interface HttpPortalsDeletePortalUserRequestParams {
	/** The ID of the portal user which should be deleted */
	id: string;
}

export interface HttpPortalsGetPortalUserByIdRequestParams {
	/** The ID of the portals user. */
	id: string;
}

export interface HttpPortalsUpdatePortalUserByIdRequestParams {
	/** The ID of the portals user. */
	id: string;
	/** The created Agravity Portals User. */
	agravityPortalUser: AgravityPortalUser;
}

@Injectable({
	providedIn: 'root'
})
export class PortalsUsersManagementService {
	protected basePath = 'http://localhost:7071/api';
	public defaultHeaders = new HttpHeaders();
	public configuration = new AgravityConfiguration();
	public encoder: HttpParameterCodec;

	constructor(
		protected httpClient: HttpClient,
		@Optional() @Inject(BASE_PATH) basePath: string | string[],
		@Optional() configuration: AgravityConfiguration
	) {
		if (configuration) {
			this.configuration = configuration;
		}
		if (typeof this.configuration.basePath !== 'string') {
			const firstBasePath = Array.isArray(basePath) ? basePath[0] : undefined;
			if (firstBasePath != undefined) {
				basePath = firstBasePath;
			}

			if (typeof basePath !== 'string') {
				basePath = this.basePath;
			}
			this.configuration.basePath = basePath;
		}
		this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
	}

	// @ts-ignore
	private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
		if (typeof value === 'object' && value instanceof Date === false) {
			httpParams = this.addToHttpParamsRecursive(httpParams, value);
		} else {
			httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
		}
		return httpParams;
	}

	private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
		if (value == null) {
			return httpParams;
		}

		if (typeof value === 'object') {
			if (Array.isArray(value)) {
				(value as any[]).forEach((elem) => (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key)));
			} else if (value instanceof Date) {
				if (key != null) {
					httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
				} else {
					throw Error('key may not be null if value is Date');
				}
			} else {
				Object.keys(value).forEach((k) => (httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k)));
			}
		} else if (key != null) {
			httpParams = httpParams.append(key, value);
		} else {
			throw Error('key may not be null if value is not object or array');
		}
		return httpParams;
	}

	/**
	 * This endpoint creates a portals user.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalsCreatePortalsUser(
		requestParameters?: HttpPortalsCreatePortalsUserRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<AgravityPortalUser>;
	public httpPortalsCreatePortalsUser(
		requestParameters?: HttpPortalsCreatePortalsUserRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<AgravityPortalUser>>;
	public httpPortalsCreatePortalsUser(
		requestParameters?: HttpPortalsCreatePortalsUserRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<AgravityPortalUser>>;
	public httpPortalsCreatePortalsUser(
		requestParameters?: HttpPortalsCreatePortalsUserRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const agravityPortalUser = requestParameters?.agravityPortalUser;
		if (agravityPortalUser === null || agravityPortalUser === undefined) {
			throw new Error('Required parameter agravityPortalUser was null or undefined when calling httpPortalsCreatePortalsUser.');
		}

		let localVarHeaders = this.defaultHeaders;

		let localVarCredential: string | undefined;
		// authentication (msal_auth) required
		localVarCredential = this.configuration.lookupCredential('msal_auth');
		if (localVarCredential) {
			localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
		}

		let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (localVarHttpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (localVarHttpHeaderAcceptSelected !== undefined) {
			localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
		}

		let localVarHttpContext: HttpContext | undefined = options && options.context;
		if (localVarHttpContext === undefined) {
			localVarHttpContext = new HttpContext();
		}

		let localVarTransferCache: boolean | undefined = options && options.transferCache;
		if (localVarTransferCache === undefined) {
			localVarTransferCache = true;
		}

		// to determine the Content-Type header
		const consumes: string[] = ['application/json'];
		const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
		if (httpContentTypeSelected !== undefined) {
			localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
		}

		let responseType_: 'text' | 'json' | 'blob' = 'json';
		if (localVarHttpHeaderAcceptSelected) {
			if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
				responseType_ = 'text';
			} else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
				responseType_ = 'json';
			} else {
				responseType_ = 'blob';
			}
		}

		let localVarPath = `/portalsusers`;
		return this.httpClient.request<AgravityPortalUser>('post', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: agravityPortalUser,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint deletes a portal user.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalsDeletePortalUser(
		requestParameters?: HttpPortalsDeletePortalUserRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<string>;
	public httpPortalsDeletePortalUser(
		requestParameters?: HttpPortalsDeletePortalUserRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<string>>;
	public httpPortalsDeletePortalUser(
		requestParameters?: HttpPortalsDeletePortalUserRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<string>>;
	public httpPortalsDeletePortalUser(
		requestParameters?: HttpPortalsDeletePortalUserRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPortalsDeletePortalUser.');
		}

		let localVarHeaders = this.defaultHeaders;

		let localVarCredential: string | undefined;
		// authentication (msal_auth) required
		localVarCredential = this.configuration.lookupCredential('msal_auth');
		if (localVarCredential) {
			localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
		}

		let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (localVarHttpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (localVarHttpHeaderAcceptSelected !== undefined) {
			localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
		}

		let localVarHttpContext: HttpContext | undefined = options && options.context;
		if (localVarHttpContext === undefined) {
			localVarHttpContext = new HttpContext();
		}

		let localVarTransferCache: boolean | undefined = options && options.transferCache;
		if (localVarTransferCache === undefined) {
			localVarTransferCache = true;
		}

		let responseType_: 'text' | 'json' | 'blob' = 'json';
		if (localVarHttpHeaderAcceptSelected) {
			if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
				responseType_ = 'text';
			} else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
				responseType_ = 'json';
			} else {
				responseType_ = 'blob';
			}
		}

		let localVarPath = `/portalsusers/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<string>('delete', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint returns all portal users.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalsGetAllPortalUser(
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<Array<AgravityPortalUser>>;
	public httpPortalsGetAllPortalUser(
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<Array<AgravityPortalUser>>>;
	public httpPortalsGetAllPortalUser(
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<Array<AgravityPortalUser>>>;
	public httpPortalsGetAllPortalUser(
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		let localVarHeaders = this.defaultHeaders;

		let localVarCredential: string | undefined;
		// authentication (msal_auth) required
		localVarCredential = this.configuration.lookupCredential('msal_auth');
		if (localVarCredential) {
			localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
		}

		let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (localVarHttpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (localVarHttpHeaderAcceptSelected !== undefined) {
			localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
		}

		let localVarHttpContext: HttpContext | undefined = options && options.context;
		if (localVarHttpContext === undefined) {
			localVarHttpContext = new HttpContext();
		}

		let localVarTransferCache: boolean | undefined = options && options.transferCache;
		if (localVarTransferCache === undefined) {
			localVarTransferCache = true;
		}

		let responseType_: 'text' | 'json' | 'blob' = 'json';
		if (localVarHttpHeaderAcceptSelected) {
			if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
				responseType_ = 'text';
			} else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
				responseType_ = 'json';
			} else {
				responseType_ = 'blob';
			}
		}

		let localVarPath = `/portalsusers`;
		return this.httpClient.request<Array<AgravityPortalUser>>('get', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint returns single portals user.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalsGetPortalUserById(
		requestParameters?: HttpPortalsGetPortalUserByIdRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<Array<AgravityPortalUser>>;
	public httpPortalsGetPortalUserById(
		requestParameters?: HttpPortalsGetPortalUserByIdRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<Array<AgravityPortalUser>>>;
	public httpPortalsGetPortalUserById(
		requestParameters?: HttpPortalsGetPortalUserByIdRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<Array<AgravityPortalUser>>>;
	public httpPortalsGetPortalUserById(
		requestParameters?: HttpPortalsGetPortalUserByIdRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPortalsGetPortalUserById.');
		}

		let localVarHeaders = this.defaultHeaders;

		let localVarCredential: string | undefined;
		// authentication (msal_auth) required
		localVarCredential = this.configuration.lookupCredential('msal_auth');
		if (localVarCredential) {
			localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
		}

		let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (localVarHttpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (localVarHttpHeaderAcceptSelected !== undefined) {
			localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
		}

		let localVarHttpContext: HttpContext | undefined = options && options.context;
		if (localVarHttpContext === undefined) {
			localVarHttpContext = new HttpContext();
		}

		let localVarTransferCache: boolean | undefined = options && options.transferCache;
		if (localVarTransferCache === undefined) {
			localVarTransferCache = true;
		}

		let responseType_: 'text' | 'json' | 'blob' = 'json';
		if (localVarHttpHeaderAcceptSelected) {
			if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
				responseType_ = 'text';
			} else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
				responseType_ = 'json';
			} else {
				responseType_ = 'blob';
			}
		}

		let localVarPath = `/portalsusers/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<Array<AgravityPortalUser>>('get', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint updates a portals user.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalsUpdatePortalUserById(
		requestParameters?: HttpPortalsUpdatePortalUserByIdRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<AgravityPortalUser>;
	public httpPortalsUpdatePortalUserById(
		requestParameters?: HttpPortalsUpdatePortalUserByIdRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<AgravityPortalUser>>;
	public httpPortalsUpdatePortalUserById(
		requestParameters?: HttpPortalsUpdatePortalUserByIdRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<AgravityPortalUser>>;
	public httpPortalsUpdatePortalUserById(
		requestParameters?: HttpPortalsUpdatePortalUserByIdRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPortalsUpdatePortalUserById.');
		}
		const agravityPortalUser = requestParameters?.agravityPortalUser;
		if (agravityPortalUser === null || agravityPortalUser === undefined) {
			throw new Error('Required parameter agravityPortalUser was null or undefined when calling httpPortalsUpdatePortalUserById.');
		}

		let localVarHeaders = this.defaultHeaders;

		let localVarCredential: string | undefined;
		// authentication (msal_auth) required
		localVarCredential = this.configuration.lookupCredential('msal_auth');
		if (localVarCredential) {
			localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
		}

		let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (localVarHttpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (localVarHttpHeaderAcceptSelected !== undefined) {
			localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
		}

		let localVarHttpContext: HttpContext | undefined = options && options.context;
		if (localVarHttpContext === undefined) {
			localVarHttpContext = new HttpContext();
		}

		let localVarTransferCache: boolean | undefined = options && options.transferCache;
		if (localVarTransferCache === undefined) {
			localVarTransferCache = true;
		}

		// to determine the Content-Type header
		const consumes: string[] = ['application/json'];
		const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
		if (httpContentTypeSelected !== undefined) {
			localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
		}

		let responseType_: 'text' | 'json' | 'blob' = 'json';
		if (localVarHttpHeaderAcceptSelected) {
			if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
				responseType_ = 'text';
			} else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
				responseType_ = 'json';
			} else {
				responseType_ = 'blob';
			}
		}

		let localVarPath = `/portalsusers/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<AgravityPortalUser>('post', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: agravityPortalUser,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}
}
