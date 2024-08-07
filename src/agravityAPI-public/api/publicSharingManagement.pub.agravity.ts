/**
 * Agravity OpenAPI Documentation - Public Functions
 * <h1>Agravity API Reference</h1>This is the public API description of Agravity GmbH.<br/><h2>Resources</h2><ul> <li>Collection type management</li> <li>Collections management</li> <li>Assets management</li> <li>Assets operations</li> <li>Assets publishing</li> <li>Collection Sharing (consume share)</li> <li>Secure Upload (validate + upload file)</li> <li>Download ZIP</li> <li>Search</li> <li>General management</li></ul><h2> Operations</h2>Agravity API performs the following operations:<ul> <li>List / get single collection types</li> <li>List / get single collections</li> <li>List / get single  assets</li> <li>Operations on assets like: blobs, rotate, resize, similar, collections, customfields, download</li> <li>List / get single published asset</li> <li>Search for assets or collections</li> <li>Get version of deployment</li></ul><br/><b>API key is needed to access these endpoints.</b><br/><br/>Copyright © Agravity GmbH 2024. All Rights Reserved
 *
 * The version of the OpenAPI document: 7.3.0
 * Contact: office@agravity.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { AgravityErrorResponse } from '../model/models';
import { QuickShareFull } from '../model/models';
import { SharedCollectionFull } from '../model/models';
import { SharedCollectionZipRequest } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { AgravityPublicConfiguration } from '../configuration';

@Injectable({
	providedIn: 'root'
})
export class PublicSharingManagementService {
	protected basePath = 'http://localhost:7072/api';
	public defaultHeaders = new HttpHeaders();
	public configuration = new AgravityPublicConfiguration();
	public encoder: HttpParameterCodec;

	constructor(
		protected httpClient: HttpClient,
		@Optional() @Inject(BASE_PATH) basePath: string,
		@Optional() configuration: AgravityPublicConfiguration
	) {
		if (configuration) {
			this.configuration = configuration;
		}
		if (typeof this.configuration.basePath !== 'string') {
			if (typeof basePath !== 'string') {
				basePath = this.basePath;
			}
			this.configuration.basePath = basePath;
		}
		this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
	}

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
					httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
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
	 * Returns one single quick share (from ID)
	 * @param id The ID of the quick share.
	 * @param continuationToken Each result returns the continous token if more results are available than requested. With this token, the next page could be fetched. (URL encoded!)
	 * @param limit This number limits the page result of assets.
	 * @param orderby How the return assets are sorted. Default is property: created_date (newest first).
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpQuickShareGetById(
		id: string,
		continuationToken?: string,
		limit?: number,
		orderby?: string,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<QuickShareFull>;
	public httpQuickShareGetById(
		id: string,
		continuationToken?: string,
		limit?: number,
		orderby?: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<QuickShareFull>>;
	public httpQuickShareGetById(
		id: string,
		continuationToken?: string,
		limit?: number,
		orderby?: string,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<QuickShareFull>>;
	public httpQuickShareGetById(
		id: string,
		continuationToken?: string,
		limit?: number,
		orderby?: string,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpQuickShareGetById.');
		}

		let queryParameters = new HttpParams({ encoder: this.encoder });
		if (continuationToken !== undefined && continuationToken !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>continuationToken, 'continuation_token');
		}
		if (limit !== undefined && limit !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>limit, 'limit');
		}
		if (orderby !== undefined && orderby !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>orderby, 'orderby');
		}

		let headers = this.defaultHeaders;

		let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
			responseType_ = 'text';
		}

		return this.httpClient.get<QuickShareFull>(`${this.configuration.basePath}/quickshares/${encodeURIComponent(String(id))}`, {
			params: queryParameters,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * Returns one single shared collection (from ID)
	 * @param id The ID of the shared collection.
	 * @param ayPassword If shared collection has a password, this header is mandatory. Otherwise StatusCode 403 (Forbidden) is returned.
	 * @param continuationToken Each result returns the continous token if more results are available than requested. With this token, the next page could be fetched. (URL encoded!)
	 * @param limit This number limits the page result of assets.
	 * @param orderby How the return assets are sorted. Default is property: created_date (newest first).
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpSharedCollectionsGetById(
		id: string,
		ayPassword?: string,
		continuationToken?: string,
		limit?: number,
		orderby?: string,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<SharedCollectionFull>;
	public httpSharedCollectionsGetById(
		id: string,
		ayPassword?: string,
		continuationToken?: string,
		limit?: number,
		orderby?: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<SharedCollectionFull>>;
	public httpSharedCollectionsGetById(
		id: string,
		ayPassword?: string,
		continuationToken?: string,
		limit?: number,
		orderby?: string,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<SharedCollectionFull>>;
	public httpSharedCollectionsGetById(
		id: string,
		ayPassword?: string,
		continuationToken?: string,
		limit?: number,
		orderby?: string,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpSharedCollectionsGetById.');
		}

		let queryParameters = new HttpParams({ encoder: this.encoder });
		if (continuationToken !== undefined && continuationToken !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>continuationToken, 'continuation_token');
		}
		if (limit !== undefined && limit !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>limit, 'limit');
		}
		if (orderby !== undefined && orderby !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>orderby, 'orderby');
		}

		let headers = this.defaultHeaders;
		if (ayPassword !== undefined && ayPassword !== null) {
			headers = headers.set('ay-password', String(ayPassword));
		}

		let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
			responseType_ = 'text';
		}

		return this.httpClient.get<SharedCollectionFull>(`${this.configuration.basePath}/shared/${encodeURIComponent(String(id))}`, {
			params: queryParameters,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint gets the progress/status of the ZIP creation of a shared collection.
	 * @param id The ID of the zip request collection.
	 * @param zipId The ID of the requested zip.
	 * @param ayPassword If shared collection has a password, this header is mandatory. Otherwise StatusCode 401 (Unauthorized) is returned.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpSharedCollectionsGetStatusZipById(
		id: string,
		zipId: string,
		ayPassword?: string,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<SharedCollectionZipRequest>;
	public httpSharedCollectionsGetStatusZipById(
		id: string,
		zipId: string,
		ayPassword?: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<SharedCollectionZipRequest>>;
	public httpSharedCollectionsGetStatusZipById(
		id: string,
		zipId: string,
		ayPassword?: string,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<SharedCollectionZipRequest>>;
	public httpSharedCollectionsGetStatusZipById(
		id: string,
		zipId: string,
		ayPassword?: string,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpSharedCollectionsGetStatusZipById.');
		}
		if (zipId === null || zipId === undefined) {
			throw new Error('Required parameter zipId was null or undefined when calling httpSharedCollectionsGetStatusZipById.');
		}

		let headers = this.defaultHeaders;
		if (ayPassword !== undefined && ayPassword !== null) {
			headers = headers.set('ay-password', String(ayPassword));
		}

		let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
			responseType_ = 'text';
		}

		return this.httpClient.get<SharedCollectionZipRequest>(`${this.configuration.basePath}/shared/${encodeURIComponent(String(id))}/zip/${encodeURIComponent(String(zipId))}`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * Initiates the ZIP creation of a shared collection.
	 * @param id The ID of the shared collection.
	 * @param ayPassword If shared collection has a password, this header is mandatory. Otherwise StatusCode 403 (Forbidden) is returned.
	 * @param sharedCollectionZipRequest The allowed formats are the input which could be optionally added.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpSharedCollectionsRequestZipById(
		id: string,
		ayPassword?: string,
		sharedCollectionZipRequest?: SharedCollectionZipRequest,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<SharedCollectionZipRequest>;
	public httpSharedCollectionsRequestZipById(
		id: string,
		ayPassword?: string,
		sharedCollectionZipRequest?: SharedCollectionZipRequest,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<SharedCollectionZipRequest>>;
	public httpSharedCollectionsRequestZipById(
		id: string,
		ayPassword?: string,
		sharedCollectionZipRequest?: SharedCollectionZipRequest,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<SharedCollectionZipRequest>>;
	public httpSharedCollectionsRequestZipById(
		id: string,
		ayPassword?: string,
		sharedCollectionZipRequest?: SharedCollectionZipRequest,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpSharedCollectionsRequestZipById.');
		}

		let headers = this.defaultHeaders;
		if (ayPassword !== undefined && ayPassword !== null) {
			headers = headers.set('ay-password', String(ayPassword));
		}

		let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		// to determine the Content-Type header
		const consumes: string[] = ['application/json'];
		const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
		if (httpContentTypeSelected !== undefined) {
			headers = headers.set('Content-Type', httpContentTypeSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
			responseType_ = 'text';
		}

		return this.httpClient.post<SharedCollectionZipRequest>(`${this.configuration.basePath}/shared/${encodeURIComponent(String(id))}/zip`, sharedCollectionZipRequest, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}
}
