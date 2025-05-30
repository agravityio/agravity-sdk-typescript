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
import { StaticDefinedList } from '../model/staticDefinedList.agravity';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { AgravityConfiguration } from '../configuration';

export interface HttpStaticDefinedListsCreateRequestParams {
	/** This endpoint creates an unique static defined list ID and adds the information to the database. */
	staticDefinedList: StaticDefinedList;
	/** When default language should be returned and the translation dictionary is delivered. (Ignores the \&quot;Accept-Language\&quot; header) */
	translations?: boolean;
	/** The requested language of the response. If not matching it falls back to default language. */
	acceptLanguage?: string;
}

export interface HttpStaticDefinedListsDeleteByIdRequestParams {
	/** The ID of the static defined list. */
	id: string;
}

export interface HttpStaticDefinedListsGetAllRequestParams {
	/** When default language should be returned and the translation dictionary is delivered. (Ignores the \&quot;Accept-Language\&quot; header) */
	translations?: boolean;
	/** The requested language of the response. If not matching it falls back to default language. */
	acceptLanguage?: string;
}

export interface HttpStaticDefinedListsGetByIdRequestParams {
	/** The ID of the static defined list. */
	id: string;
	/** When default language should be returned and the translation dictionary is delivered. (Ignores the \&quot;Accept-Language\&quot; header) */
	translations?: boolean;
	/** The requested language of the response. If not matching it falls back to default language. */
	acceptLanguage?: string;
}

export interface HttpStaticDefinedListsUpdateByIdRequestParams {
	/** The ID of the static defined list. */
	id: string;
	/** The mode how the list should be updated. Available values are: add, delete and replace. */
	updatemode: string;
	/** Body has to be a valid static defined list item. */
	staticDefinedList: StaticDefinedList;
	/** When default language should be returned and the translation dictionary is delivered. (Ignores the \&quot;Accept-Language\&quot; header) */
	translations?: boolean;
	/** The requested language of the response. If not matching it falls back to default language. */
	acceptLanguage?: string;
}

@Injectable({
	providedIn: 'root'
})
export class StaticDefinedListManagementService {
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
	 * This endpoint creates one static defined list entry in the database.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpStaticDefinedListsCreate(
		requestParameters?: HttpStaticDefinedListsCreateRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<StaticDefinedList>;
	public httpStaticDefinedListsCreate(
		requestParameters?: HttpStaticDefinedListsCreateRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<StaticDefinedList>>;
	public httpStaticDefinedListsCreate(
		requestParameters?: HttpStaticDefinedListsCreateRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<StaticDefinedList>>;
	public httpStaticDefinedListsCreate(
		requestParameters?: HttpStaticDefinedListsCreateRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const staticDefinedList = requestParameters?.staticDefinedList;
		if (staticDefinedList === null || staticDefinedList === undefined) {
			throw new Error('Required parameter staticDefinedList was null or undefined when calling httpStaticDefinedListsCreate.');
		}
		const translations = requestParameters?.translations;
		const acceptLanguage = requestParameters?.acceptLanguage;

		let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
		if (translations !== undefined && translations !== null) {
			localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>translations, 'translations');
		}

		let localVarHeaders = this.defaultHeaders;
		if (acceptLanguage !== undefined && acceptLanguage !== null) {
			localVarHeaders = localVarHeaders.set('Accept-Language', String(acceptLanguage));
		}

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

		let localVarPath = `/staticdefinedlists`;
		return this.httpClient.request<StaticDefinedList>('post', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: staticDefinedList,
			params: localVarQueryParameters,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint deletes a single static defined list.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpStaticDefinedListsDeleteById(
		requestParameters?: HttpStaticDefinedListsDeleteByIdRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any>;
	public httpStaticDefinedListsDeleteById(
		requestParameters?: HttpStaticDefinedListsDeleteByIdRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<any>>;
	public httpStaticDefinedListsDeleteById(
		requestParameters?: HttpStaticDefinedListsDeleteByIdRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<any>>;
	public httpStaticDefinedListsDeleteById(
		requestParameters?: HttpStaticDefinedListsDeleteByIdRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpStaticDefinedListsDeleteById.');
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

		let localVarPath = `/staticdefinedlists/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`, {
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
	 * This endpoint lists all static defined lists in database.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpStaticDefinedListsGetAll(
		requestParameters?: HttpStaticDefinedListsGetAllRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<Array<StaticDefinedList>>;
	public httpStaticDefinedListsGetAll(
		requestParameters?: HttpStaticDefinedListsGetAllRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<Array<StaticDefinedList>>>;
	public httpStaticDefinedListsGetAll(
		requestParameters?: HttpStaticDefinedListsGetAllRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<Array<StaticDefinedList>>>;
	public httpStaticDefinedListsGetAll(
		requestParameters?: HttpStaticDefinedListsGetAllRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const translations = requestParameters?.translations;
		const acceptLanguage = requestParameters?.acceptLanguage;

		let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
		if (translations !== undefined && translations !== null) {
			localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>translations, 'translations');
		}

		let localVarHeaders = this.defaultHeaders;
		if (acceptLanguage !== undefined && acceptLanguage !== null) {
			localVarHeaders = localVarHeaders.set('Accept-Language', String(acceptLanguage));
		}

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

		let localVarPath = `/staticdefinedlists`;
		return this.httpClient.request<Array<StaticDefinedList>>('get', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			params: localVarQueryParameters,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint gets a static defined list from database.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpStaticDefinedListsGetById(
		requestParameters?: HttpStaticDefinedListsGetByIdRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<StaticDefinedList>;
	public httpStaticDefinedListsGetById(
		requestParameters?: HttpStaticDefinedListsGetByIdRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<StaticDefinedList>>;
	public httpStaticDefinedListsGetById(
		requestParameters?: HttpStaticDefinedListsGetByIdRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<StaticDefinedList>>;
	public httpStaticDefinedListsGetById(
		requestParameters?: HttpStaticDefinedListsGetByIdRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpStaticDefinedListsGetById.');
		}
		const translations = requestParameters?.translations;
		const acceptLanguage = requestParameters?.acceptLanguage;

		let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
		if (translations !== undefined && translations !== null) {
			localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>translations, 'translations');
		}

		let localVarHeaders = this.defaultHeaders;
		if (acceptLanguage !== undefined && acceptLanguage !== null) {
			localVarHeaders = localVarHeaders.set('Accept-Language', String(acceptLanguage));
		}

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

		let localVarPath = `/staticdefinedlists/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<StaticDefinedList>('get', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			params: localVarQueryParameters,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * Updates a static defined list in database.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpStaticDefinedListsUpdateById(
		requestParameters?: HttpStaticDefinedListsUpdateByIdRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<StaticDefinedList>;
	public httpStaticDefinedListsUpdateById(
		requestParameters?: HttpStaticDefinedListsUpdateByIdRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<StaticDefinedList>>;
	public httpStaticDefinedListsUpdateById(
		requestParameters?: HttpStaticDefinedListsUpdateByIdRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<StaticDefinedList>>;
	public httpStaticDefinedListsUpdateById(
		requestParameters?: HttpStaticDefinedListsUpdateByIdRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpStaticDefinedListsUpdateById.');
		}
		const updatemode = requestParameters?.updatemode;
		if (updatemode === null || updatemode === undefined) {
			throw new Error('Required parameter updatemode was null or undefined when calling httpStaticDefinedListsUpdateById.');
		}
		const staticDefinedList = requestParameters?.staticDefinedList;
		if (staticDefinedList === null || staticDefinedList === undefined) {
			throw new Error('Required parameter staticDefinedList was null or undefined when calling httpStaticDefinedListsUpdateById.');
		}
		const translations = requestParameters?.translations;
		const acceptLanguage = requestParameters?.acceptLanguage;

		let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
		if (updatemode !== undefined && updatemode !== null) {
			localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>updatemode, 'updatemode');
		}
		if (translations !== undefined && translations !== null) {
			localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>translations, 'translations');
		}

		let localVarHeaders = this.defaultHeaders;
		if (acceptLanguage !== undefined && acceptLanguage !== null) {
			localVarHeaders = localVarHeaders.set('Accept-Language', String(acceptLanguage));
		}

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

		let localVarPath = `/staticdefinedlists/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<StaticDefinedList>('post', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: staticDefinedList,
			params: localVarQueryParameters,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}
}
