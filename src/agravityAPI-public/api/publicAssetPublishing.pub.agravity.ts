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
import { PublishEntity } from '../model/publishEntity.pub.agravity';
// @ts-ignore
import { PublishedAsset } from '../model/publishedAsset.pub.agravity';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { AgravityPublicConfiguration } from '../configuration';

export interface HttpPublishedAssetsCreateRequestParams {
	/** The ID of the asset. */
	id: string;
	/** This creates / adds an unique published asset ID and adds the information to the asset (in DB). */
	publishedAsset: PublishedAsset;
}

export interface HttpPublishedAssetsGetRequestParams {
	/** The ID of the asset. */
	id: string;
}

export interface HttpPublishedAssetsGetByIdRequestParams {
	/** The ID of the asset. */
	id: string;
	/** The published asset ID. */
	pid: string;
}

@Injectable({
	providedIn: 'root'
})
export class PublicAssetPublishingService {
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
	 * This endpoint creates an additional published asset
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPublishedAssetsCreate(
		requestParameters?: HttpPublishedAssetsCreateRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<PublishedAsset>;
	public httpPublishedAssetsCreate(
		requestParameters?: HttpPublishedAssetsCreateRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<PublishedAsset>>;
	public httpPublishedAssetsCreate(
		requestParameters?: HttpPublishedAssetsCreateRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<PublishedAsset>>;
	public httpPublishedAssetsCreate(
		requestParameters?: HttpPublishedAssetsCreateRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPublishedAssetsCreate.');
		}
		const publishedAsset = requestParameters?.publishedAsset;
		if (publishedAsset === null || publishedAsset === undefined) {
			throw new Error('Required parameter publishedAsset was null or undefined when calling httpPublishedAssetsCreate.');
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

		let localVarPath = `/assets/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}/publish`;
		return this.httpClient.request<PublishedAsset>('post', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: publishedAsset,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint lists all the published assets which are stored in the database if asset is still valid.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPublishedAssetsGet(
		requestParameters?: HttpPublishedAssetsGetRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<PublishEntity>;
	public httpPublishedAssetsGet(
		requestParameters?: HttpPublishedAssetsGetRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<PublishEntity>>;
	public httpPublishedAssetsGet(
		requestParameters?: HttpPublishedAssetsGetRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<PublishEntity>>;
	public httpPublishedAssetsGet(
		requestParameters?: HttpPublishedAssetsGetRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPublishedAssetsGet.');
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

		let localVarPath = `/assets/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}/publish`;
		return this.httpClient.request<PublishEntity>('get', `${this.configuration.basePath}${localVarPath}`, {
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
	 * This endpoint returns one single published asset (from ID). Not checked if assetId is not deleted!
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPublishedAssetsGetById(
		requestParameters?: HttpPublishedAssetsGetByIdRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<PublishedAsset>;
	public httpPublishedAssetsGetById(
		requestParameters?: HttpPublishedAssetsGetByIdRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<PublishedAsset>>;
	public httpPublishedAssetsGetById(
		requestParameters?: HttpPublishedAssetsGetByIdRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<PublishedAsset>>;
	public httpPublishedAssetsGetById(
		requestParameters?: HttpPublishedAssetsGetByIdRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPublishedAssetsGetById.');
		}
		const pid = requestParameters?.pid;
		if (pid === null || pid === undefined) {
			throw new Error('Required parameter pid was null or undefined when calling httpPublishedAssetsGetById.');
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

		let localVarPath = `/assets/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}/publish/${this.configuration.encodeParam({ name: 'pid', value: pid, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<PublishedAsset>('get', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}
}
