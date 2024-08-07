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
import { Portal } from '../model/models';
import { PortalConfiguration } from '../model/models';
import { PortalZipRequest } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { AgravityPublicConfiguration } from '../configuration';

@Injectable({
	providedIn: 'root'
})
export class PublicPortalManagementService {
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
	 * This endpoint gets all Asset IDs in portal scope.
	 * @param id The ID of the portal.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalGetAllAssetIdsById(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<Array<string>>;
	public httpPortalGetAllAssetIdsById(id: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<Array<string>>>;
	public httpPortalGetAllAssetIdsById(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<Array<string>>>;
	public httpPortalGetAllAssetIdsById(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPortalGetAllAssetIdsById.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (function_key) required
		credential = this.configuration.lookupCredential('function_key');
		if (credential) {
			headers = headers.set('x-functions-key', credential);
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

		return this.httpClient.get<Array<string>>(`${this.configuration.basePath}/portals/${encodeURIComponent(String(id))}/assetids`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint gets the progress/status of the ZIP creation of a portal.
	 * @param id The ID of the zip request collection.
	 * @param zipId The ID of the requested zip.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalGetStatusZipById(id: string, zipId: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<PortalZipRequest>;
	public httpPortalGetStatusZipById(
		id: string,
		zipId: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<PortalZipRequest>>;
	public httpPortalGetStatusZipById(
		id: string,
		zipId: string,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<PortalZipRequest>>;
	public httpPortalGetStatusZipById(id: string, zipId: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPortalGetStatusZipById.');
		}
		if (zipId === null || zipId === undefined) {
			throw new Error('Required parameter zipId was null or undefined when calling httpPortalGetStatusZipById.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (function_key) required
		credential = this.configuration.lookupCredential('function_key');
		if (credential) {
			headers = headers.set('x-functions-key', credential);
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

		return this.httpClient.get<PortalZipRequest>(`${this.configuration.basePath}/portals/${encodeURIComponent(String(id))}/zip/${encodeURIComponent(String(zipId))}`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * Initiates the ZIP creation of an asset basket from an portal.
	 * @param id The ID of the portal.
	 * @param portalZipRequest The allowed formats are the input which could be added.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalRequestZipById(
		id: string,
		portalZipRequest: PortalZipRequest,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<PortalZipRequest>;
	public httpPortalRequestZipById(
		id: string,
		portalZipRequest: PortalZipRequest,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<PortalZipRequest>>;
	public httpPortalRequestZipById(
		id: string,
		portalZipRequest: PortalZipRequest,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<PortalZipRequest>>;
	public httpPortalRequestZipById(
		id: string,
		portalZipRequest: PortalZipRequest,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPortalRequestZipById.');
		}
		if (portalZipRequest === null || portalZipRequest === undefined) {
			throw new Error('Required parameter portalZipRequest was null or undefined when calling httpPortalRequestZipById.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (function_key) required
		credential = this.configuration.lookupCredential('function_key');
		if (credential) {
			headers = headers.set('x-functions-key', credential);
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

		return this.httpClient.post<PortalZipRequest>(`${this.configuration.basePath}/portals/${encodeURIComponent(String(id))}/zip`, portalZipRequest, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint returns a full configuration of the portal. Incl. download formats, SDLs, UDLs, etc.
	 * @param id The ID of the portal.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalsConfigurationGetById(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<PortalConfiguration>;
	public httpPortalsConfigurationGetById(
		id: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<PortalConfiguration>>;
	public httpPortalsConfigurationGetById(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<PortalConfiguration>>;
	public httpPortalsConfigurationGetById(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPortalsConfigurationGetById.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (function_key) required
		credential = this.configuration.lookupCredential('function_key');
		if (credential) {
			headers = headers.set('x-functions-key', credential);
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

		return this.httpClient.get<PortalConfiguration>(`${this.configuration.basePath}/portals/${encodeURIComponent(String(id))}/config`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint return the created portal by ID.
	 * @param id The ID of the portal.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPortalsGetById(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<Portal>;
	public httpPortalsGetById(id: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<Portal>>;
	public httpPortalsGetById(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<Portal>>;
	public httpPortalsGetById(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPortalsGetById.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (function_key) required
		credential = this.configuration.lookupCredential('function_key');
		if (credential) {
			headers = headers.set('x-functions-key', credential);
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

		return this.httpClient.get<Portal>(`${this.configuration.basePath}/portals/${encodeURIComponent(String(id))}`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}
}
