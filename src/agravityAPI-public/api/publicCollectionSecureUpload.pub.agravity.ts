/**
 * Agravity OpenAPI Documentation - Public Functions
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
import { AgravityErrorResponse } from '../model/agravityErrorResponse.pub.agravity';
// @ts-ignore
import { Asset } from '../model/asset.pub.agravity';
// @ts-ignore
import { SecureUploadEntity } from '../model/secureUploadEntity.pub.agravity';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { AgravityPublicConfiguration } from '../configuration';

export interface HttpSecureUploadEntityCheckByIdRequestParams {
	/** The ID of the secure upload collection. */
	id: string;
	/** The API key to access this endpoint. (Alternative using header x-function-keys with same value) */
	code: string;
}

export interface HttpSecureUploadFileByIdRequestParams {
	/** The ID of the secure upload collection. */
	id: string;
	/** The API key to access this endpoint. (Alternative using header x-function-keys with same value) */
	code: string;
	/** This endpoint allows to upload one asset which is put onto the storage (INBOX). Object has to be FormData (Add file). */
	body: object;
}

@Injectable({
	providedIn: 'root'
})
export class PublicCollectionSecureUploadService {
	protected basePath = 'http://localhost:7072/api';
	public defaultHeaders = new HttpHeaders();
	public configuration = new AgravityPublicConfiguration();
	public encoder: HttpParameterCodec;

	constructor(
		protected httpClient: HttpClient,
		@Optional() @Inject(BASE_PATH) basePath: string | string[],
		@Optional() configuration: AgravityPublicConfiguration
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
	 * Searchs for one single secure upload entity of an user and returns simple OK if found.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpSecureUploadEntityCheckById(
		requestParameters?: HttpSecureUploadEntityCheckByIdRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<SecureUploadEntity>;
	public httpSecureUploadEntityCheckById(
		requestParameters?: HttpSecureUploadEntityCheckByIdRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<SecureUploadEntity>>;
	public httpSecureUploadEntityCheckById(
		requestParameters?: HttpSecureUploadEntityCheckByIdRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<SecureUploadEntity>>;
	public httpSecureUploadEntityCheckById(
		requestParameters?: HttpSecureUploadEntityCheckByIdRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpSecureUploadEntityCheckById.');
		}
		const code = requestParameters?.code;
		if (code === null || code === undefined) {
			throw new Error('Required parameter code was null or undefined when calling httpSecureUploadEntityCheckById.');
		}

		let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
		if (code !== undefined && code !== null) {
			localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>code, 'code');
		}

		let localVarHeaders = this.defaultHeaders;

		let localVarCredential: string | undefined;
		// authentication (function_key) required
		localVarCredential = this.configuration.lookupCredential('function_key');
		if (localVarCredential) {
			localVarHeaders = localVarHeaders.set('x-functions-key', localVarCredential);
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

		let localVarPath = `/secureupload/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<SecureUploadEntity>('get', `${this.configuration.basePath}${localVarPath}`, {
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
	 * This endpoint allows to securly upload one asset which is put onto the storage (INBOX). Object has to be FormData (Add file).
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpSecureUploadFileById(
		requestParameters?: HttpSecureUploadFileByIdRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<Asset>;
	public httpSecureUploadFileById(
		requestParameters?: HttpSecureUploadFileByIdRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<Asset>>;
	public httpSecureUploadFileById(
		requestParameters?: HttpSecureUploadFileByIdRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<Asset>>;
	public httpSecureUploadFileById(
		requestParameters?: HttpSecureUploadFileByIdRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpSecureUploadFileById.');
		}
		const code = requestParameters?.code;
		if (code === null || code === undefined) {
			throw new Error('Required parameter code was null or undefined when calling httpSecureUploadFileById.');
		}
		const body = requestParameters?.body;
		if (body === null || body === undefined) {
			throw new Error('Required parameter body was null or undefined when calling httpSecureUploadFileById.');
		}

		let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
		if (code !== undefined && code !== null) {
			localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>code, 'code');
		}

		let localVarHeaders = this.defaultHeaders;

		let localVarCredential: string | undefined;
		// authentication (function_key) required
		localVarCredential = this.configuration.lookupCredential('function_key');
		if (localVarCredential) {
			localVarHeaders = localVarHeaders.set('x-functions-key', localVarCredential);
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
			// localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
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

		let localVarPath = `/secureupload/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}/upload`;
		return this.httpClient.request<Asset>('post', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: body,
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
