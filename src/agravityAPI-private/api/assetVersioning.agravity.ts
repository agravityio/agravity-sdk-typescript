/**
 * Agravity OpenAPI Documentation - Private Functions
 * <h1>Agravity API Reference</h1>This is the full API description of Agravity GmbH.<br/><h2>Resources</h2><ul> <li>Collection type management</li> <li>Collections management</li> <li>Assets management</li> <li>Assets operations</li> <li>Assets publishing</li> <li>Assets versioning</li> <li>Sharing collection</li> <li>Secure upload to collection</li> <li>Download ZIP</li> <li>Search</li> <li>General management</li> <li>Authentication management</li> <li>Blob management</li> <li>Queue management</li> <li>Structure management</li> <li>Bulk get all data from collection / collection type</li></ul><h2> Operations</h2>Agravity API performs the following operations:<ul> <li>Create / update / list / delete collection types</li> <li>Create / update / list / delete collections</li> <li>Create / update / list / delete assets</li> <li>Operations on assets like: move to collection, renew asset(through queue pipe), rotate, resize, etc.</li> <li>Publish / de-publish an asset or specific variants of an asset</li> <li>Create / delete version of asset</li> <li>Bulk download of Assets</li> <li>Search for assets or collections</li> <li>Authenticated access like e.g. getting access to blobs directly (for upload on folder or generate SAS token)</li> <li>List / delete blobs</li> <li>Create structures based on blob storage input</li></ul><br/>Copyright © Agravity GmbH 2022. All Rights Reserved
 *
 * The version of the OpenAPI document: 5.1.5
 * Contact: office@agravity.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { AgravityErrorResponse } from '../model/models';
import { AssetBlob } from '../model/models';
import { VersionEntity } from '../model/models';
import { VersionedAsset } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { AgravityConfiguration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class AssetVersioningService {

    protected basePath = 'http://localhost:7071/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new AgravityConfiguration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: AgravityConfiguration) {
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

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
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

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * This endpoint allows to create empty version or upload one asset which replaces the asset with given id and creates version.
     * @param id The ID of the asset.
     * @param versionedAsset This VersionedAsset to create empty version (need to upload file with metadata to blob storage)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpAssetCreateNewVersion(id: string, versionedAsset: VersionedAsset, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<VersionedAsset>;
    public httpAssetCreateNewVersion(id: string, versionedAsset: VersionedAsset, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<VersionedAsset>>;
    public httpAssetCreateNewVersion(id: string, versionedAsset: VersionedAsset, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<VersionedAsset>>;
    public httpAssetCreateNewVersion(id: string, versionedAsset: VersionedAsset, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpAssetCreateNewVersion.');
        }
        if (versionedAsset === null || versionedAsset === undefined) {
            throw new Error('Required parameter versionedAsset was null or undefined when calling httpAssetCreateNewVersion.');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            // headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<VersionedAsset>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versions`,
            versionedAsset,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint allows to upload one asset which replaces the asset with given id and creates a version which is returned.
     * @param id The ID of the asset.
     * @param name 
     * @param collectionId 
     * @param file 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpAssetCreateUploadVersion(id: string, name?: string, collectionId?: string, file?: Blob, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<VersionedAsset>;
    public httpAssetCreateUploadVersion(id: string, name?: string, collectionId?: string, file?: Blob, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<VersionedAsset>>;
    public httpAssetCreateUploadVersion(id: string, name?: string, collectionId?: string, file?: Blob, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<VersionedAsset>>;
    public httpAssetCreateUploadVersion(id: string, name?: string, collectionId?: string, file?: Blob, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpAssetCreateUploadVersion.');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: this.encoder});
        }

        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) as any || formParams;
        }
        if (collectionId !== undefined) {
            formParams = formParams.append('collectionId', <any>collectionId) as any || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) as any || formParams;
        }

        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<VersionedAsset>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versionsupload`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint restores the last version of this asset (even when corrupt or no blob was uploaded).
     * @param id The ID of the asset.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpAssetRestoreLastVersion(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<VersionedAsset>;
    public httpAssetRestoreLastVersion(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<VersionedAsset>>;
    public httpAssetRestoreLastVersion(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<VersionedAsset>>;
    public httpAssetRestoreLastVersion(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpAssetRestoreLastVersion.');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.patch<VersionedAsset>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versionsrestore`,
            null,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint deletes a version of an asset.
     * @param id The ID of the asset.
     * @param vNr The version number of the asset.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpDeleteVersionedAssetsById(id: string, vNr: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public httpDeleteVersionedAssetsById(id: string, vNr: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public httpDeleteVersionedAssetsById(id: string, vNr: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public httpDeleteVersionedAssetsById(id: string, vNr: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpDeleteVersionedAssetsById.');
        }
        if (vNr === null || vNr === undefined) {
            throw new Error('Required parameter vNr was null or undefined when calling httpDeleteVersionedAssetsById.');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versions/${encodeURIComponent(String(vNr))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint checks if assets and version exists and returns the url for the requested blob.
     * @param id The ID of the asset.
     * @param vNr The version number of the asset.
     * @param c \&quot;t\&quot; for thumbnail (default); \&quot;o\&quot; for optimized
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpGetVersionedAssetBlobById(id: string, vNr: number, c?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<AssetBlob>;
    public httpGetVersionedAssetBlobById(id: string, vNr: number, c?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<AssetBlob>>;
    public httpGetVersionedAssetBlobById(id: string, vNr: number, c?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<AssetBlob>>;
    public httpGetVersionedAssetBlobById(id: string, vNr: number, c?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpGetVersionedAssetBlobById.');
        }
        if (vNr === null || vNr === undefined) {
            throw new Error('Required parameter vNr was null or undefined when calling httpGetVersionedAssetBlobById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (c !== undefined && c !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>c, 'c');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<AssetBlob>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versions/${encodeURIComponent(String(vNr))}/blobs`,
            {
                params: queryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint restores a version nr to be the current version and saves the current asset as version.
     * @param id The ID of the asset.
     * @param vNr The version number of the asset.
     * @param versionedAsset Only the version_info is used and will be added to the current version which is archived (before the old version is restored).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpRestoreVersionedAssetsById(id: string, vNr: string, versionedAsset: VersionedAsset, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<VersionedAsset>;
    public httpRestoreVersionedAssetsById(id: string, vNr: string, versionedAsset: VersionedAsset, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<VersionedAsset>>;
    public httpRestoreVersionedAssetsById(id: string, vNr: string, versionedAsset: VersionedAsset, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<VersionedAsset>>;
    public httpRestoreVersionedAssetsById(id: string, vNr: string, versionedAsset: VersionedAsset, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpRestoreVersionedAssetsById.');
        }
        if (vNr === null || vNr === undefined) {
            throw new Error('Required parameter vNr was null or undefined when calling httpRestoreVersionedAssetsById.');
        }
        if (versionedAsset === null || versionedAsset === undefined) {
            throw new Error('Required parameter versionedAsset was null or undefined when calling httpRestoreVersionedAssetsById.');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<VersionedAsset>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versions/${encodeURIComponent(String(vNr))}/restore`,
            versionedAsset,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint updates a version of an asset.
     * @param id The ID of the asset.
     * @param vNr The version number of the asset.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpUpdateVersionedAssetsById(id: string, vNr: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public httpUpdateVersionedAssetsById(id: string, vNr: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public httpUpdateVersionedAssetsById(id: string, vNr: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public httpUpdateVersionedAssetsById(id: string, vNr: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpUpdateVersionedAssetsById.');
        }
        if (vNr === null || vNr === undefined) {
            throw new Error('Required parameter vNr was null or undefined when calling httpUpdateVersionedAssetsById.');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versions/${encodeURIComponent(String(vNr))}`,
            null,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint deletes all versioned asset.
     * @param id The ID of the asset.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpVersionedAssetsDeleteAll(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public httpVersionedAssetsDeleteAll(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public httpVersionedAssetsDeleteAll(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public httpVersionedAssetsDeleteAll(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpVersionedAssetsDeleteAll.');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versions`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This endpoint lists all the versioned assets which are stored in the database if asset is still valid.
     * @param id The ID of the asset.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpVersionedAssetsGet(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<VersionEntity>;
    public httpVersionedAssetsGet(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<VersionEntity>>;
    public httpVersionedAssetsGet(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<VersionEntity>>;
    public httpVersionedAssetsGet(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpVersionedAssetsGet.');
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
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<VersionEntity>(`${this.configuration.basePath}/assets/${encodeURIComponent(String(id))}/versions`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}