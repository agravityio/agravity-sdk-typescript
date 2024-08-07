/**
 * Agravity OpenAPI Documentation - Private Functions
 * <h1>Agravity API Reference</h1>This is the full API description of Agravity GmbH.<br/><h2>Resources</h2><ul> <li>Collection type management</li> <li>Collections management</li> <li>Assets management</li> <li>Assets operations</li> <li>Assets publishing</li> <li>Assets versioning</li> <li>Sharing collection</li> <li>Secure upload to collection</li> <li>Download ZIP</li> <li>Search</li> <li>General management</li> <li>Authentication management</li> <li>Blob management</li> <li>Queue management</li> <li>Structure management</li> <li>Bulk get all data from collection / collection type</li></ul><h2> Operations</h2>Agravity API performs the following operations:<ul> <li>Create / update / list / delete collection types</li> <li>Create / update / list / delete collections</li> <li>Create / update / list / delete assets</li> <li>Operations on assets like: move to collection, renew asset(through queue pipe), rotate, resize, etc.</li> <li>Publish / de-publish an asset or specific variants of an asset</li> <li>Create / delete version of asset</li> <li>Bulk download of Assets</li> <li>Search for assets or collections</li> <li>Authenticated access like e.g. getting access to blobs directly (for upload on folder or generate SAS token)</li> <li>List / delete blobs</li> <li>Create structures based on blob storage input</li></ul><br/>Copyright © Agravity GmbH 2024. All Rights Reserved
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
import { AgravityInfoResponse } from '../model/models';
import { AgravityUser } from '../model/models';
import { AgravityUserDto } from '../model/models';
import { SasToken } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { AgravityConfiguration } from '../configuration';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationManagementService {
	protected basePath = 'http://localhost:7071/api';
	public defaultHeaders = new HttpHeaders();
	public configuration = new AgravityConfiguration();
	public encoder: HttpParameterCodec;

	constructor(
		protected httpClient: HttpClient,
		@Optional() @Inject(BASE_PATH) basePath: string,
		@Optional() configuration: AgravityConfiguration
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
	 * This endpoint creates a new api key user in database and registers it on the public function
	 * @param agravityUserDto The user to create.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthCreatePublicApiKey(agravityUserDto: AgravityUserDto, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<AgravityUser>;
	public httpAuthCreatePublicApiKey(
		agravityUserDto: AgravityUserDto,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<AgravityUser>>;
	public httpAuthCreatePublicApiKey(
		agravityUserDto: AgravityUserDto,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<AgravityUser>>;
	public httpAuthCreatePublicApiKey(agravityUserDto: AgravityUserDto, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (agravityUserDto === null || agravityUserDto === undefined) {
			throw new Error('Required parameter agravityUserDto was null or undefined when calling httpAuthCreatePublicApiKey.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.post<AgravityUser>(`${this.configuration.basePath}/auth/apikey`, agravityUserDto, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint to end impersonation an Agravity user.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthDeleteImpersonateUser(observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<AgravityInfoResponse>;
	public httpAuthDeleteImpersonateUser(observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<AgravityInfoResponse>>;
	public httpAuthDeleteImpersonateUser(observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<AgravityInfoResponse>>;
	public httpAuthDeleteImpersonateUser(observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.delete<AgravityInfoResponse>(`${this.configuration.basePath}/auth/impersonate`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint deletes an api key user and removed the key from public functions.
	 * @param id The ID of api key user
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthDeletePublicApiKey(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<any>;
	public httpAuthDeletePublicApiKey(id: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<any>>;
	public httpAuthDeletePublicApiKey(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<any>>;
	public httpAuthDeletePublicApiKey(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpAuthDeletePublicApiKey.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.delete<any>(`${this.configuration.basePath}/auth/apikey/${encodeURIComponent(String(id))}`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint returns the user from database of the HTTP request.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthGetAgravityUser(observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<AgravityUser>;
	public httpAuthGetAgravityUser(observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<AgravityUser>>;
	public httpAuthGetAgravityUser(observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<AgravityUser>>;
	public httpAuthGetAgravityUser(observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.get<AgravityUser>(`${this.configuration.basePath}/auth/user`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint returns the Agravity user from database.
	 * @param id The ID of the requested Agravity user.
	 * @param limit (Optional): If the reponse should be limited to name and email.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthGetAgravityUserById(id: string, limit?: boolean, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<AgravityUser>;
	public httpAuthGetAgravityUserById(
		id: string,
		limit?: boolean,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<AgravityUser>>;
	public httpAuthGetAgravityUserById(
		id: string,
		limit?: boolean,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<AgravityUser>>;
	public httpAuthGetAgravityUserById(id: string, limit?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpAuthGetAgravityUserById.');
		}

		let queryParameters = new HttpParams({ encoder: this.encoder });
		if (limit !== undefined && limit !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>limit, 'limit');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.get<AgravityUser>(`${this.configuration.basePath}/auth/users/${encodeURIComponent(String(id))}`, {
			params: queryParameters,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint returns all the Agravity users from database.
	 * @param limit (Optional): If the reponse should be limited to name and email.
	 * @param apikey (Optional): If the response should be limited to api key users
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthGetAgravityUsers(
		limit?: boolean,
		apikey?: boolean,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<Array<AgravityUser>>;
	public httpAuthGetAgravityUsers(
		limit?: boolean,
		apikey?: boolean,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<Array<AgravityUser>>>;
	public httpAuthGetAgravityUsers(
		limit?: boolean,
		apikey?: boolean,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<Array<AgravityUser>>>;
	public httpAuthGetAgravityUsers(limit?: boolean, apikey?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		let queryParameters = new HttpParams({ encoder: this.encoder });
		if (limit !== undefined && limit !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>limit, 'limit');
		}
		if (apikey !== undefined && apikey !== null) {
			queryParameters = this.addToHttpParams(queryParameters, <any>apikey, 'apikey');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.get<Array<AgravityUser>>(`${this.configuration.basePath}/auth/users`, {
			params: queryParameters,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint gets the ID of the application client.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthGetAppClientId(observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<AgravityInfoResponse>;
	public httpAuthGetAppClientId(observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<AgravityInfoResponse>>;
	public httpAuthGetAppClientId(observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<AgravityInfoResponse>>;
	public httpAuthGetAppClientId(observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.get<AgravityInfoResponse>(`${this.configuration.basePath}/auth/clientid`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint creates and returns a SAS token for a single blob inside the optimized OR thumbnails container.
	 * @param blobName The name of the blob (aka the ID of the asset)
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthGetBlobReadSasToken(blobName: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<SasToken>;
	public httpAuthGetBlobReadSasToken(blobName: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<SasToken>>;
	public httpAuthGetBlobReadSasToken(blobName: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<SasToken>>;
	public httpAuthGetBlobReadSasToken(blobName: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (blobName === null || blobName === undefined) {
			throw new Error('Required parameter blobName was null or undefined when calling httpAuthGetBlobReadSasToken.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.get<SasToken>(`${this.configuration.basePath}/auth/blob/${encodeURIComponent(String(blobName))}`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint creates and returns a SAS token for a single container with read only access
	 * @param containerName The name of the requested storage container.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthGetContainerReadSasToken(containerName: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<SasToken>;
	public httpAuthGetContainerReadSasToken(
		containerName: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<SasToken>>;
	public httpAuthGetContainerReadSasToken(containerName: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<SasToken>>;
	public httpAuthGetContainerReadSasToken(containerName: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (containerName === null || containerName === undefined) {
			throw new Error('Required parameter containerName was null or undefined when calling httpAuthGetContainerReadSasToken.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.get<SasToken>(`${this.configuration.basePath}/auth/container/${encodeURIComponent(String(containerName))}`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint creates and returns a SAS-Token with write access for the inbox container
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthGetInboxContainerWriteSasToken(observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<SasToken>;
	public httpAuthGetInboxContainerWriteSasToken(observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<SasToken>>;
	public httpAuthGetInboxContainerWriteSasToken(observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<SasToken>>;
	public httpAuthGetInboxContainerWriteSasToken(observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.get<SasToken>(`${this.configuration.basePath}/auth/inbox`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint gets the ID of the user.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthGetUserId(observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<AgravityInfoResponse>;
	public httpAuthGetUserId(observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<AgravityInfoResponse>>;
	public httpAuthGetUserId(observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<AgravityInfoResponse>>;
	public httpAuthGetUserId(observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.get<AgravityInfoResponse>(`${this.configuration.basePath}/auth/userid`, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint to impersonate an Agravity user.
	 * @param id The ID of the user which should be impersonated.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpAuthPatchImpersonateUser(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<AgravityInfoResponse>;
	public httpAuthPatchImpersonateUser(
		id: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<AgravityInfoResponse>>;
	public httpAuthPatchImpersonateUser(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<AgravityInfoResponse>>;
	public httpAuthPatchImpersonateUser(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpAuthPatchImpersonateUser.');
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (msal_auth) required
		credential = this.configuration.lookupCredential('msal_auth');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
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

		return this.httpClient.patch<AgravityInfoResponse>(`${this.configuration.basePath}/auth/impersonate/${encodeURIComponent(String(id))}`, null, {
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: headers,
			observe: observe,
			reportProgress: reportProgress
		});
	}
}
