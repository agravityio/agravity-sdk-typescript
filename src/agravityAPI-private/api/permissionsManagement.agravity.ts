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
import { AgravityInfoResponse } from '../model/agravityInfoResponse.agravity';
// @ts-ignore
import { AzureIdentity } from '../model/azureIdentity.agravity';
// @ts-ignore
import { PermissionSetting } from '../model/permissionSetting.agravity';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { AgravityConfiguration } from '../configuration';

export interface HttpPermissionSettingsAddIdentitiesRequestParams {
	/** This endpoint takes the AzureIdentity  and saves it to the allowed permissions in the cosmos db. */
	azureIdentity: Array<AzureIdentity>;
}

export interface HttpPermissionSettingsPutRequestParams {
	/** This endpoint overwrites the permission setting ID and adds the information to the database. */
	permissionSetting: PermissionSetting;
}

export interface HttpPermissionSettingsUpdateIdentityRequestParams {
	/** The ID of the requested identity */
	id: string;
	/** This endpoint takes the AzureIdentity and updates it in permissions settings in the cosmos db. */
	azureIdentity: AzureIdentity;
}

@Injectable({
	providedIn: 'root'
})
export class PermissionsManagementService {
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
	 * This endpoint creates one permission setting entry in the database.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPermissionSettingsAddIdentities(
		requestParameters?: HttpPermissionSettingsAddIdentitiesRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<AgravityInfoResponse>;
	public httpPermissionSettingsAddIdentities(
		requestParameters?: HttpPermissionSettingsAddIdentitiesRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<AgravityInfoResponse>>;
	public httpPermissionSettingsAddIdentities(
		requestParameters?: HttpPermissionSettingsAddIdentitiesRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<AgravityInfoResponse>>;
	public httpPermissionSettingsAddIdentities(
		requestParameters?: HttpPermissionSettingsAddIdentitiesRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const azureIdentity = requestParameters?.azureIdentity;
		if (azureIdentity === null || azureIdentity === undefined) {
			throw new Error('Required parameter azureIdentity was null or undefined when calling httpPermissionSettingsAddIdentities.');
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

		let localVarPath = `/permissions/settings/identities`;
		return this.httpClient.request<AgravityInfoResponse>('post', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: azureIdentity,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint lists all permission settings in database.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPermissionSettingsGet(
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<PermissionSetting>;
	public httpPermissionSettingsGet(
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<PermissionSetting>>;
	public httpPermissionSettingsGet(
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<PermissionSetting>>;
	public httpPermissionSettingsGet(
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

		let localVarPath = `/permissions/settings`;
		return this.httpClient.request<PermissionSetting>('get', `${this.configuration.basePath}${localVarPath}`, {
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
	 * This endpoint creates one permission setting entry in the database.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPermissionSettingsPut(
		requestParameters?: HttpPermissionSettingsPutRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<PermissionSetting>;
	public httpPermissionSettingsPut(
		requestParameters?: HttpPermissionSettingsPutRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<PermissionSetting>>;
	public httpPermissionSettingsPut(
		requestParameters?: HttpPermissionSettingsPutRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<PermissionSetting>>;
	public httpPermissionSettingsPut(
		requestParameters?: HttpPermissionSettingsPutRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const permissionSetting = requestParameters?.permissionSetting;
		if (permissionSetting === null || permissionSetting === undefined) {
			throw new Error('Required parameter permissionSetting was null or undefined when calling httpPermissionSettingsPut.');
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

		let localVarPath = `/permissions/settings`;
		return this.httpClient.request<PermissionSetting>('put', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: permissionSetting,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}

	/**
	 * This endpoint updates one permission setting entry in the database.
	 * @param requestParameters
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public httpPermissionSettingsUpdateIdentity(
		requestParameters?: HttpPermissionSettingsUpdateIdentityRequestParams,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<AgravityInfoResponse>;
	public httpPermissionSettingsUpdateIdentity(
		requestParameters?: HttpPermissionSettingsUpdateIdentityRequestParams,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpResponse<AgravityInfoResponse>>;
	public httpPermissionSettingsUpdateIdentity(
		requestParameters?: HttpPermissionSettingsUpdateIdentityRequestParams,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<HttpEvent<AgravityInfoResponse>>;
	public httpPermissionSettingsUpdateIdentity(
		requestParameters?: HttpPermissionSettingsUpdateIdentityRequestParams,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext; transferCache?: boolean }
	): Observable<any> {
		const id = requestParameters?.id;
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling httpPermissionSettingsUpdateIdentity.');
		}
		const azureIdentity = requestParameters?.azureIdentity;
		if (azureIdentity === null || azureIdentity === undefined) {
			throw new Error('Required parameter azureIdentity was null or undefined when calling httpPermissionSettingsUpdateIdentity.');
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

		let localVarPath = `/permissions/settings/identities/${this.configuration.encodeParam({ name: 'id', value: id, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined })}`;
		return this.httpClient.request<AgravityInfoResponse>('put', `${this.configuration.basePath}${localVarPath}`, {
			context: localVarHttpContext,
			body: azureIdentity,
			responseType: <any>responseType_,
			withCredentials: this.configuration.withCredentials,
			headers: localVarHeaders,
			observe: observe,
			transferCache: localVarTransferCache,
			reportProgress: reportProgress
		});
	}
}
