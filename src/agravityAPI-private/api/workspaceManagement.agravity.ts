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
import { PermissionChange } from '../model/models';
import { Workspace } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { AgravityConfiguration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class WorkspaceManagementService {

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
     * This endpoint creates a unique workspace ID and adds the information to the database.
     * @param workspace This endpoint creates a unique workspace ID and adds the information to the database.
     * @param translations When default language should be returned and the translation dictionary is delivered. (Ignores the \&quot;Accept-Language\&quot; header)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpWorkspacesCreate(workspace: Workspace, translations?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Workspace>;
    public httpWorkspacesCreate(workspace: Workspace, translations?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Workspace>>;
    public httpWorkspacesCreate(workspace: Workspace, translations?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Workspace>>;
    public httpWorkspacesCreate(workspace: Workspace, translations?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (workspace === null || workspace === undefined) {
            throw new Error('Required parameter workspace was null or undefined when calling httpWorkspacesCreate.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (translations !== undefined && translations !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>translations, 'translations');
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

        return this.httpClient.post<Workspace>(`${this.configuration.basePath}/workspaces`,
            workspace,
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
     * This endpoint deletes all workspaces on the system.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpWorkspacesDelete(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public httpWorkspacesDelete(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public httpWorkspacesDelete(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public httpWorkspacesDelete(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {

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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/workspaces`,
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
     * This endpoint deletes the workspace with the given ID.
     * @param id The ID of the workspace.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpWorkspacesDeleteById(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public httpWorkspacesDeleteById(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public httpWorkspacesDeleteById(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public httpWorkspacesDeleteById(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpWorkspacesDeleteById.');
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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/workspaces/${encodeURIComponent(String(id))}`,
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
     * This endpoint lists all available workspaces, which are stored in the database and not deleted (status \&quot;A\&quot;).
     * @param translations When default language should be returned and the translation dictionary is delivered. (Ignores the \&quot;Accept-Language\&quot; header)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpWorkspacesGet(translations?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<Workspace>>;
    public httpWorkspacesGet(translations?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<Workspace>>>;
    public httpWorkspacesGet(translations?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<Workspace>>>;
    public httpWorkspacesGet(translations?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (translations !== undefined && translations !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>translations, 'translations');
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

        return this.httpClient.get<Array<Workspace>>(`${this.configuration.basePath}/workspaces`,
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
     * This endpoint returns one single workspace (from ID).
     * @param id The ID of the workspace.
     * @param translations When default language should be returned and the translation dictionary is delivered. (Ignores the \&quot;Accept-Language\&quot; header)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpWorkspacesGetById(id: string, translations?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Workspace>;
    public httpWorkspacesGetById(id: string, translations?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Workspace>>;
    public httpWorkspacesGetById(id: string, translations?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Workspace>>;
    public httpWorkspacesGetById(id: string, translations?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpWorkspacesGetById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (translations !== undefined && translations !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>translations, 'translations');
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

        return this.httpClient.get<Workspace>(`${this.configuration.basePath}/workspaces/${encodeURIComponent(String(id))}`,
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
     * This endpoint updates the workspace. Null fields will be ignored. If \&#39;items\&#39; are set they are fully reset (like PUT).
     * @param id The ID of the workspace.
     * @param workspace The body has to be a valid workspace json. Not fitting properties are ignored.
     * @param translations When default language should be returned and the translation dictionary is delivered. (Ignores the \&quot;Accept-Language\&quot; header)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpWorkspacesUpdateById(id: string, workspace: Workspace, translations?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Workspace>;
    public httpWorkspacesUpdateById(id: string, workspace: Workspace, translations?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Workspace>>;
    public httpWorkspacesUpdateById(id: string, workspace: Workspace, translations?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Workspace>>;
    public httpWorkspacesUpdateById(id: string, workspace: Workspace, translations?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpWorkspacesUpdateById.');
        }
        if (workspace === null || workspace === undefined) {
            throw new Error('Required parameter workspace was null or undefined when calling httpWorkspacesUpdateById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (translations !== undefined && translations !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>translations, 'translations');
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

        return this.httpClient.post<Workspace>(`${this.configuration.basePath}/workspaces/${encodeURIComponent(String(id))}`,
            workspace,
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
     * This endpoint updates the permissions of the workspace. The modifier tells the system what to do with the list of ids.
     * @param id The ID of the workspace.
     * @param permissionChange The changes which ids and how they should be added / removed / replaced / etc.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public httpWorkspacesUpdatePermissionsById(id: string, permissionChange: PermissionChange, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Workspace>;
    public httpWorkspacesUpdatePermissionsById(id: string, permissionChange: PermissionChange, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Workspace>>;
    public httpWorkspacesUpdatePermissionsById(id: string, permissionChange: PermissionChange, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Workspace>>;
    public httpWorkspacesUpdatePermissionsById(id: string, permissionChange: PermissionChange, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling httpWorkspacesUpdatePermissionsById.');
        }
        if (permissionChange === null || permissionChange === undefined) {
            throw new Error('Required parameter permissionChange was null or undefined when calling httpWorkspacesUpdatePermissionsById.');
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

        return this.httpClient.post<Workspace>(`${this.configuration.basePath}/workspaces/${encodeURIComponent(String(id))}/permissions`,
            permissionChange,
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