cosmoAny known issues detected on that version are listed in the [known issues](#known-issues) section.

## Release notes

Preview features are treated as a separate branch and will not be included in the official release until the feature is ready. Each preview release lists all the additional features that are enabled.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project does not adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
It will be upgraded when the Agravity Backend is upgraded and will have the same version.

## AgravityAPI <a name="10.1.2"/> [10.1.2](https://www.npmjs.com/package/@agravity/private/v/10.1.2) (2025-10-19)

-   Just version upgrade to match backend

## AgravityAPI <a name="10.1.1"/> [10.1.1](https://www.npmjs.com/package/@agravity/private/v/10.1.1) (2025-10-15)

-   Just version upgrade to match backend

## AgravityAPI <a name="10.1.0"/> [10.1.0](https://www.npmjs.com/package/@agravity/private/v/10.1.0) (2025-10-12)

-   1492 AI Field Mapping: include number, bool and date
    -   Add optional property mapping and translate_mapping on AI fields
-   1474 Quality Gate Field on Asset
    -   Add new quality_gate property on asset which is readonly
-   1102 Asset export to and import from excel for meta data update with selectable fields
    -   Add new models:
        -   `AvailableExportFields` - The languages, core and custom fields available in the system
        -   `ExcelImportTableEntity` -
        -   `ExportFieldDefinition` - A single field definition (for core and custom field) - (translateable, multi, field_type, importable, etc.)
    -   Add new endpoints:
        -   add POST `/data/excel/import/assets` - This endpoint starts an excel import of assets from an uploaded Excel file.
        -   add GET `/data/excel/import/{id}` - This endpoint retrieves the status of the excel import.
        -   add POST `/data/excel/export/assets/fields` - This endpoint gets available fields for asset export selection

---

## AgravityAPI <a name="10.0.2"/> [10.0.2](https://www.npmjs.com/package/@agravity/private/v/10.0.2) (2025-09-14)

-   Updated StructureImport API with parameters `collectiontypeid`, `parent`, `rootiscolltype`
-   Improve portal: Add `format`property to portals to allow formatting the values

## AgravityAPI <a name="10.0.1"/> [10.0.1](https://www.npmjs.com/package/@agravity/private/v/10.0.1) (2025-09-07)

-   Just version upgrade to match backend

## AgravityAPI <a name="10.0.0"/> [10.0.0](https://www.npmjs.com/package/@agravity/private/v/10.0.0) (2025-08-27)

-   #1466 Add endpoint GET `/ai/models`- This endpoint returns all deployed multimodal AI Models
-   #614 Subscribe to notifications on a collection
-   #1426 Queue: AI Field generation & Try out endpoint
-   #1439 Search Settings Entity
-   #1412 OpenAI - Use similarity search for "invers image recognition"
-   Replace all "[key: string]: object" with "[key: string]: any"
-   using new openAPI Generator (7.15.0)
    -   20% less code
    -   Redo RoleEnum
    -   updated packages (typescript and zone.js)
    -   new way to use provideApi (old AppModule way still works)

## AgravityAPI <a name="9.4.0"/> [9.4.0](https://www.npmjs.com/package/@agravity/private/v/9.4.0) (2025-08-12)

-   #1441 Asset Comments: Allow annotations on images

## AgravityAPI <a name="9.3.0"/> [9.3.0](https://www.npmjs.com/package/@agravity/private/v/9.3.0) (2025-07-20)

-   #1434 Remove secure upload entity from user - now secure upload is own entity

## AgravityAPI <a name="9.2.4"/> [9.2.4](https://www.npmjs.com/package/@agravity/private/v/9.2.4) (2025-07-13)

-   #1436: Update edit version reason of change on API

## AgravityAPI <a name="9.2.3"/> [9.2.3](https://www.npmjs.com/package/@agravity/private/v/9.2.3) (2025-07-09)

-   Just version upgrade to match backend

## AgravityAPI <a name="9.2.2"/> [9.2.2](https://www.npmjs.com/package/@agravity/private/v/9.2.2) (2025-07-09)

-   Just version upgrade to match backend

## AgravityAPI <a name="9.2.1"/> [9.2.1](https://www.npmjs.com/package/@agravity/private/v/9.2.1) (2025-07-03)

-   Just version upgrade to match backend

## AgravityAPI <a name="9.2.0"/> [9.2.0](https://www.npmjs.com/package/@agravity/private/v/9.2.0) (2025-07-01)

-   1416 Optimize Vector Search (SkillVectorizedFieldsEnhancment )
    -   Add endpoint helper/vectorsearchenabled - This endpoint fetches the vector search enabled values from the configuration and returns them as a dictionary. [admin only]

## AgravityAPI <a name="9.1.2"/> [9.1.2](https://www.npmjs.com/package/@agravity/private/v/9.1.2) (2025-06-22)

-   Just version upgrade to match backend

## AgravityAPI <a name="9.1.1"/> [9.1.1](https://www.npmjs.com/package/@agravity/private/v/9.1.1) (2025-06-10)

-   Just version upgrade to match backend

## AgravityAPI <a name="9.1.0"/> [9.1.0](https://www.npmjs.com/package/@agravity/private/v/9.1.0) (2025-05-25)

-   #1395 Quick Share - Allow to name the quickshare
    -   Add property `name` to quickshare
    -   Add endpoint POST `/quickshares/{id}` - Updates an existing quick share
-   #1377 Asset Relations
    -   Add private and public endpoints for managing asset relations
    -   Add `rel_id` (relation id) as search parameter (to filter out all ids in search of this relation)
-   #1309 Implement AI Vector Search
    -   Add optional `broadness` parameter to search query (default 0)
-   #1304 Create OpenAI (ChatGPT) image tagging queue
    -   Rework AI Grouping and put it to separate entity
-   Add vector_search_enabled, base name and tenant_id properties to agravity version
-   Add endpoint GET `/helper/skillenhancer/openaienhancement` - This is a helper method to see the result when an Asset is enhanced with the OpenAI skill-enhancer (for search indexer). (unused)

## AgravityAPI <a name="9.0.3"/> [9.0.3](https://www.npmjs.com/package/@agravity/private/v/9.0.3) (2025-04-08)

-   Just version upgrade to match backend

## AgravityAPI <a name="9.0.2"/> [9.0.2](https://www.npmjs.com/package/@agravity/private/v/9.0.2) (2025-04-02)

-   Just version upgrade to match backend

## AgravityAPI <a name="9.0.1"/> [9.0.1](https://www.npmjs.com/package/@agravity/private/v/9.0.1) (2025-03-09)

-   #1361 Add endpoints to fetch collection names at once (private & public)
    -   Add POST `/collectionsbynames` - This endpoint fetches all collections based on names which comes from an array inside the POST request body and return another list of EntityIdName objects and an array of strings with the names which could not be found.
    -   Add `entity_type` property to EntityIdName (and therefore to ColllectionUDL as well)

## AgravityAPI <a name="9.0.0"/> [9.0.0](https://www.npmjs.com/package/@agravity/private/v/9.0.0) (2025-02-28)

-   #1343 Add contact person to environment (AppConfig)

-   #1340 Version: Completely update orig blob and store old orig blob information on version
    Fully store last orig-blob to version to get full information about this asset.

-   #1222 Implement backup strategy
    Add endpoint POST `/backup`- This endpoint triggers a backup via a docker container.

-   #1353 SavedSearch per User (User Context)
    Add isglobal query param for saved searches

-   #1346 Allow multiple download formats in ZIP download
    ZIP Upgrades (unify / simplify process and reduce endpoints)

    -   Add DELETE `/downloadzip/{zipId}` - This endpoint removes the ZIP request and all related data from the database and storage.
    -   Add GET `/downloadzip/{zipId}` - This endpoint gets the progress/status of the ZIP creation.
    -   Removed `downloads` array from AgravityUser object;
    -   Change models: DownloadObject to DownloadZipRequest

-   #1326 Restore assets from history
    -   Add POST `/assets/{assetId}/restore` - This endpoint lets you restore an asset to a certain point in time.
    -   Add POST `/collections/{collectionId}/restore` - Restore a collection to a certain point in time

## AgravityAPI <a name="8.4.2"/> [8.4.2](https://www.npmjs.com/package/@agravity/private/v/8.4.2) (2025-02-02)

-   Add endpoint GET `/helper/imageoperations` - Returns all operations which could be applied to images.
-   Add new property to blob info object which stores all metadata from that blob object

## AgravityAPI <a name="8.4.1"/> [8.4.1](https://www.npmjs.com/package/@agravity/private/v/8.4.1) (2025-01-26)

-   Just version upgrade to match backend

## AgravityAPI <a name="8.4.0"/> [8.4.0](https://www.npmjs.com/package/@agravity/private/v/8.4.0) (2025-01-12)

-   Add new `/portalssaveuserattributes` endpoint to save the portal user attributes
-   Change from CustomClaimsProviderResponseContent to CustomClaimsProviderResponseContentTokenIssuanceStart
-   Add more description to public configuration (404 and 401)
-   Add AgravityErrorResponse to ts-ignore
-   Change year in description to 2025

## AgravityAPI <a name="8.3.1"/> [8.3.1](https://www.npmjs.com/package/@agravity/private/v/8.3.1) (2024-12-12)

-   Add `add_properties` and `note` property to Portals User.

## AgravityAPI <a name="8.3.0"/> [8.3.0](https://www.npmjs.com/package/@agravity/private/v/8.3.0) (2024-12-11)

-   Create portals users management to own service
    -   POST `/portalsusers` - This endpoint upserts a portals user.
    -   GET `/portalsusers` - This endpoint lists all portals user.
    -   DELETE `/portalsusers/{id}` - This endpoint deletes a portals user.
-   Adjustments for portals
      - Change properties `in_details` to `detail_order`
      - Change properties `in_facets` to `facet_order`
      - Add `options` to user context for limiting the options
      - Add `translations` and `acceptLanguage` to parameters on portal configurations
-   Do adjustments for User Context in Portal:
    -   Add properties `fields`and `authentication` to Portal (and PortalConfiguration)
    -   Add endpoint POST `/portalsenhancetoken` - for Entra External ID authentication token extension (add user context to token)
    -   Add models of Entra External ID Claims
    -   1253 FC Portal: Add user context and apply filter in local API
        -   Add List of PortalFields to add user context and change the way metadata, facets and user context is stored on Portals
    -   Add Scopefilter to search query to just add another filter which can come from another source (like user-context)
    -   Add `history` property to SearchAdmingIndexerStatus which contains the history of the last runs of indexer
-   Adjust Portal Model
      - add property theme.fav_icon, allowed_origins,
      - remove properties `metadata` and `facettes` (replaced by `fields`)
      - restructure/reorder properties in Portal (and PortalConfiguration)
-   Add Role to ProviderResponseClaims

## AgravityAPI <a name="8.2.1"/> [8.2.1](https://www.npmjs.com/package/@agravity/private/v/8.2.1) (2024-11-22)

-   Add `language` to asset download object (to respect the requested language)

## AgravityAPI <a name="8.2.0"/> [8.2.0](https://www.npmjs.com/package/@agravity/private/v/8.2.0) (2024-11-13)

-   Add PATCH `/searchadmin/run` search admin endpoint
-   Add `portal_id` parameter to Search Indexer Run endpoint
-   Refactor endpoint `/clearconfigcache` to `/clearcache` (private and public)
-   Add endpoint to patch the UDL cache on demand (with admin API key)
-   Add GET `/auth/containerwrite/{container}` - This endpoint creates and returns a SAS-Token with write access for the requested container
-   Deprecate GET `/auth/inbox` but have alternative. (use `/auth/containerwrite/inbox` instead)
-   Add POST `/secureupload/{id}` endpoint which updates a secure upload entity

---

## AgravityAPI <a name="8.1.2"/> [8.1.2](https://www.npmjs.com/package/@agravity/private/v/8.1.2) (2024-10-11)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="8.1.1"/> [8.1.1](https://www.npmjs.com/package/@agravity/private/v/8.1.1) (2024-10-10)

-   Change `collectionid` to be lowercase (now it is working with SDK again)
-   Change the `share_id` to be separated by underscore

---

## AgravityAPI <a name="8.1.0"/> [8.1.0](https://www.npmjs.com/package/@agravity/private/v/8.1.0) (2024-10-08)

-   Add property `asset_icon_rules` to the Portal (and PortalConfiguration) - to allow to store rules to show icons in the portal
-   Add `accepted-language` header parameter to the HttpSharedCollections endpoints.

---

## AgravityAPI <a name="8.0.0"/> [8.0.0](https://www.npmjs.com/package/@agravity/private/v/8.0.0) (2024-09-30)

-   Changed all requests to have one parameter instead of multiple
-   Use new openapi-generator (7.8.0) and use ngVersion 17.3.5
-   Target now net8.0
-   Add Accepted-Languages as HTTP header parameter
-   Portal now have simple `languages` property (comma separated strings)
-   #845 Copy image directly to clipboard: Allow image edit to set `origin` (i.e. optimized) which image is the base of the conversion
-   #1228 Export Translation: Add ability to exclude IDs from export: Add `exclude` filter to translation excel export
-   #1023 Download formats - Permissions on download formats
-   Correcting the return parameter of GeneralManagement Version to `AgravityInfoResponse` and remove badResult
-   #1114 Upgrade .NET 6 to .NET 8 (incl. switch to isolated model)

---

## AgravityAPI <a name="7.3.1"/> [7.3.1](https://www.npmjs.com/package/@agravity/private/v/7.3.1) (2024-08-18)

-   1196 Download Format: Add optional parameter for fallback to thumbnails
-   Correct status of search status (from "201 Created" to "200 OK")

---

## AgravityAPI <a name="7.3.0"/> [7.3.0](https://www.npmjs.com/package/@agravity/private/v/7.3.0) (2024-08-02)

-   Add public API: GET `/searchadmin/status` - This endpoint gives the status about the index and indexer.
-   Add (hidden) `simulate` parameter to create asset in active state
-   Add endpoint PATCH `/helper/userdefinedlists` (admin) - To (re-)create the user defined lists cache
-   Add endpoint DELETE `/collection/{id}` to public - This endpoint deletes the collection with the given ID (and their siblings).
-   Update some of the descriptions.
-   1167 Remove obsolete marked fields and queues
    -   removed metadata from asset Blob
    -   shared collections from users
    -   text_content from asset
-   1100 Created/Change date saved on asset (create/update/modified)
-   1176 Add 'created_by' to published asset

---

## AgravityAPI <a name="7.2.2"/> [7.2.2](https://www.npmjs.com/package/@agravity/private/v/7.2.2) (2024-06-10)

-   Add optional `id` to body of create portal to allow to create a portal with a specific id

---

## AgravityAPI <a name="7.2.1"/> [7.2.1](https://www.npmjs.com/package/@agravity/private/v/7.2.1) (2024-06-03)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="7.2.0"/> [7.2.0](https://www.npmjs.com/package/@agravity/private/v/7.2.0) (2024-05-31)

-   Add endpoint GET `{{url_public}}/api/assets/{assetId}/view?portal_id={portalId}&format={downloadFormatId}` - This endpoint returns the content of an asset which is available in a specific portal (portal_id is "key") and returns the blob directly.
    -   Add optional `download` boolean parameter to indicate that I want to download the file
-   Add property `zipname` to DownloadZipRequest - which is used for downloading zip;
    Add new endpoint GET `/deleted` - This endpoint checks all deleted entities in the database until a specific date and returns the elements which are deleted.
    -   allows to filter for `since`, `until`, `entity_type` and `portal_id`
-   Add new endpoint GET `/portals/{id}/assetids` - This endpoint gets all Asset IDs in portal scope.

## AgravityAPI <a name="7.1.0"/> [7.1.0](https://www.npmjs.com/package/@agravity/private/v/7.1.0) (2024-05-08)

-   Add PATCH /collections/{collectionId}/repairendpoint - This endpoint repairs the collection with name and items.
-   Add GET /search/facette with nearly same attributes than search - This endpoint returns one facette based on the search parameters.
-   Add param collectiontypeid to GET /assets endpoint to query all assets from collection type
-   Add endpoint PATCH /searchadmin/reindex/{id} - This endpoint takes the ID and check if it is a collection type, collection or asset and re-index it in search.
-   Add POST /collectiontypeitems- This endpoint updates all collection type items in all collection types regarding: Label, Order, Translations and Group.
-   Put full SDL in response of portal config

## AgravityAPI <a name="7.0.1"/> [7.0.1](https://www.npmjs.com/package/@agravity/private/v/7.0.1) (2024-04-07)

Portal:

-   Add links to portal model for impressum, privacy and conditions;
-   Add optional icon_empty and icon_active to theme
-   Add portalZipRequest class and add zip_type to SharedCollectionZipRequest
-   Add endpoint POST /portals/{id}/zip - Which initiates the ZIP creation of a portal id. (public)
-   Add endpoint GET /portals/{id}/zip/{zipId} - This endpoint gets the progress/status of the ZIP creation of a portal. (public)

Search:

-   Add PATCH /searchadmin/clean - This endpoint cleans the deleted assets from the search index (with param portal_id the portal gets cleared).

## AgravityAPI <a name="7.0.0"/> [7.0.0](https://www.npmjs.com/package/@agravity/private/v/7.0.0) (2024-03-23)

General:

-   Order start with 999 as default
-   Add `/assets/{id}/tocollection` endpoint to allow assigning / moving / removing an asset to/from a collection (public)

Add AgravityAPI for Portal Management (private):

-   Add POST `/api/portals` - This endpoint creates one portal entry in the database.
-   Add DELETE `/api/portals/{id}` - This endpoint deletes a single portal.
-   Add GET `/api/portals` - This endpoint show all the portals from database.
-   Add GET `/api/portals/{id}` - This endpoint show the portal from database.
-   Add GET `/portals/{id}` endpoint (public) - This endpoint returns a portal with specific id.
-   Add GET `/portals/{id}/config` endpoint (private and public) - This endpoint returns a full configuration of the portal. Incl. download formats, SDLs, UDLs and coll type items
    -   Add the way how to fetch UDLs, SDLs (limit by ID and with language)

Enhance download endpoint(s):

-   Add `f`and `portal_id` parameter to `/assets/{id}/download` (private + public)
-   Add `key` (asset MD5) parameter to `/assets/{id}/download` when coming via portal identification (public only)
-   extend original blob metadata and add download format behaviour to download

Add DataImportExport Management API (move some from Helper Management)

-   add GET `/helper/excel/export/assets` to `/data/excel/export/assets` - This endpoint creates an excel export of an asset list.
-   move GET `/helper/excel/export` to `/data/excel/export`
-   move GET `/helper/excel/export/translations` to `/data/excel/export/translations`
-   move DELETE `/helper/excel/export/translations/{id}` to `/data/excel/export/translations/{id}`
-   move GET `/helper/excel/export/translations/{id}` to `/data/excel/export/translations/{id}`
-   move POST `/helper/excel/import/translations` to `/data/excel/import/translations`

---

## AgravityAPI <a name="6.1.6"/> [6.1.6](https://www.npmjs.com/package/@agravity/private/v/6.1.6) (2024-02-01)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="6.1.5"/> [6.1.5](https://www.npmjs.com/package/@agravity/private/v/6.1.5) (2024-01-28)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="6.1.4"/> [6.1.4](https://www.npmjs.com/package/@agravity/private/v/6.1.4) (2024-01-17)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="6.1.3"/> [6.1.3](https://www.npmjs.com/package/@agravity/private/v/6.1.3) (2024-01-14)

-   Just update year to 2024 in description

---

## AgravityAPI <a name="6.1.2"/> [6.1.2](https://www.npmjs.com/package/@agravity/private/v/6.1.2) (2023-12-18)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="6.1.1"/> [6.1.1](https://www.npmjs.com/package/@agravity/private/v/6.1.1) (2023-12-15)

-   Change PATCH `/assets/{id}/alternative` to DELETE for alternative removal
-   Add new HistoryEntryType: SystemUpgrade which does not use modifiedBy to write changes

---

## AgravityAPI <a name="6.1.0"/> [6.1.0](https://www.npmjs.com/package/@agravity/private/v/6.1.0) (2023-12-14)

Extend Share to have passwords, allowed_formats and be a separate entity:

-   add GET `/assets/{id}/blob` - This endpoint checks, if an asset exists, is an image, has original blob, is status active, is part of the shared collection and returns the requested asset blob.
-   add GET `/downloadformats-shared` - This endpoint lists all download formats for a specific shared collections in database. Needs a valid shared collection ID to be authenticated.
-   add GET `/shared/{id}/zip/{zipId}` - This endpoint gets the progress/status of the ZIP creation of a shared collection.
-   add POST `/shared/{id}/zip` - Initiates the ZIP creation of a shared collection.
-   add param `ay-password` to get share
-   fix add_data in AssetBlob to be not an array of metadata
-   add model `SharedAllowedFormat`
-   add model `SharedCollectionZipRequest`
-   refactor collectionSharingService to collectionShareManagementService
-   Add ay-password header to shared collection (and zip request) endpoints
-   Add password to shared collection model

Extend publish endpoints:

-   add GET `/assets/{id}/publish/{pid}/status` - This endpoint retrieves the status of the published entity i.e. vimeo video upload
-   add GET `/helpers/vimeo-videos` - This endpoint fetches all videos that are published on vimeo (to get their video id for error handling) [admin only]
-   add `target`and `status_table_id` - to the PublishAsset to have a publishing target and keep track via status_table_id
-   add `force` query parameter to DELETE `/assets/{id}/publish/{pid} - so the published video can be deleted even when external unpublish failed

Other changes:

-   GET `/assets/{id}/textcontent` - This endpoint returns all textual content of an asset (i.e. text of PDF)
-   PATCH `/cleanup` - Add `olderThanDays` parameter which cleans archived assets and collections (marked as deleted) which are older than this day count. If no parameter is added, default value of 90 days is used.
-   Add `Removed` and `DirtyMarked` as history entry types. `DirtyMarked` is only used backend internally.
-   Added `error`(AgravityErrorResponse) to sharedCollectionZipRequest class if zip caused an error.
-   Removed unused `opened` field from sharedCollection model.
-   Add DELETE `/tables` endpoint: This deletes all table entries.

---

## AgravityAPI <a name="6.0.4"/> [6.0.4](https://www.npmjs.com/package/@agravity/private/v/6.0.4) (2023-11-06)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="6.0.3"/> [6.0.3](https://www.npmjs.com/package/@agravity/private/v/6.0.3) (2023-11-04)

-   Add endpoint DELETE /assets - (Admin only) - which can have filters and/or collection-ids to remove lots of assets
-   InfoEntitySkillEnhanced now have PermissionEntity as permission groups

---

## AgravityAPI <a name="6.0.2"/> [6.0.2](https://www.npmjs.com/package/@agravity/private/v/6.0.2) (2023-10-23)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="6.0.1"/> [6.0.1](https://www.npmjs.com/package/@agravity/private/v/6.0.1) (2023-10-19)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="6.0.0"/> [6.0.0](https://www.npmjs.com/package/@agravity/private/v/6.0.0) (2023-10-02)

-   #784 Add Roles to Permission System

    -   Add `role` property to Asset, Collection and CollectionType which can be NONE, VIEWER, EDITOR
    -   Change `permissions` property from workspace and collection to to be an array of `PermissionEntity` (role and id)

-   #858 Impersonate User

    -   PATCH `/auth/impersonate/{id}` - This endpoint to impersonate an Agravity user.
    -   DELETE `/auth/impersonate` - This endpoint to end impersonation an Agravity user.
    -   Add `impersonation` property to AgravityUser to indicate if this user is impersonating (will be null most of the time)

-   #905 Translations excel import/export
    -   Add endpoint GET `/helper/excel/export/translations` - This endpoint creates an excel export of translations of db entities
    -   Add endpoint DELETE `/helper/excel/export/translations/{exportId}` - This endpoint retrieves the status and if populated the url to the excel export
    -   Add endpoint GET `/helper/excel/export/translations/{exportId}` - This endpoint retrieves the status and if populated the url to the excel export.
    -   Add endpoint POST `/helper/excel/import/translations` - This endpoint puts a excel file on the translations import blob container
-   #917 Api key management

    -   Add `apikey`as property to AgravityUser;
    -   Add endpoint POST `/auth/apikey` - This endpoint creates a new api key user in database and registers it on the public function
    -   Add endpoint DELETE `/auth/apikey/{apiUserId}` - This endpoint deletes an api key user and removed the key from public functions.
    -   Add param `apikey` to endpoint GET `/auth/users` - This optional parameter if the response should be limited to api key users

-   #70 Alternative thumbnails for assets

    -   Add new optional param `previewof` to `/assetupload` endpoint
    -   Respect `version`endpoint as well for preview
    -   Adapt generate to build assetManagement

-   #974 Allow free custom configs for any frontend to be stored and called
    -   Add endpoint DELETE `/config/{key}` - Deletes an existing custom config value with the given key. It will also refresh the current application configuration cache for this key.
    -   Update endpoint GET `/config/frontend` - add param `customonly` - This returns only the custom created configurations.
    -   Update endpoint POST `/config/{key}` - Update an existing (pre-generated) config value (only value, content-type and description) or creates/updates custom config with the given key (full). It will also refresh the current application configuration cache for this key.
    -   add `is_custom` property to appConfigTableEntity field (default false)

### Bugfixes

-   Fix: WorkspacesUpdatePermissionsById `/workspaces/{id}/permissions` - Now responses a AgravityInfoResponse
-   Fix: CollectionTypesUpdatePermissionsById `/collectiontypes/{id}/permissions` - Now responses a AgravityInfoResponse

---

## AgravityAPI <a name="5.3.6"/> [5.3.6](https://www.npmjs.com/package/@agravity/private/v/5.3.6) (2023-09-18)

-   Just version upgrade to match backend

---

## AgravityAPI <a name="5.3.5"/> [5.3.5](https://www.npmjs.com/package/@agravity/private/v/5.3.5) (2023-09-18)

-   Add `search_terms`to info entity skill enhanced model (not used anywhere)

---

## AgravityAPI <a name="5.3.4"/> [5.3.4](https://www.npmjs.com/package/@agravity/private/v/5.3.4) (2023-09-10)

-   Return list of collection type items now contains ALL items (regardless of permissions)

---

## AgravityAPI <a name="5.3.3"/> [5.3.3](https://www.npmjs.com/package/@agravity/private/v/5.3.3) (2023-08-27)

-   Add optional `filename` as property for httpAssetUploadFile

---

## AgravityAPI <a name="5.3.2"/> [5.3.2](https://www.npmjs.com/package/@agravity/private/v/5.3.2) (2023-08-17)

-   Just version upgrade to match backend

## AgravityAPI <a name="5.3.1"/> [5.3.1](https://www.npmjs.com/package/@agravity/private/v/5.3.1) (2023-08-01)

-   Add query parameter include to add certain fields to history (i.e. collections for assets)
-   Allow managing SDLs (add, remove, replace) in Public API

---

## AgravityAPI <a name="5.3.0"/> [5.3.0](https://www.npmjs.com/package/@agravity/private/v/5.3.0) (2023-07-21)

-   Add new API for Asset History Management:

    -   Add GET `/history/id` Returns a list with history entries for the given entity id.

-   Other improvements:
    -   Add "contains" to search filter query with new separator `<>`
    -   Remove old upgrade endpoints

---

## AgravityAPI 5.2.2 (2023-07-06)

(no changes - just update according to backend version)

---

## AgravityAPI 5.2.1 (2023-07-04)

-   Add endpoint PATCH `/helper/clearconfigcache` - This method starts queues in all functions to clear the config cache.
-   Add `name` property to AssetIdFormat
-   Remove format from downloadObject (now each asset can have individual format)
-   Refactor AssetIdContainer to AssetIdFormat
-   Add `zip_url` to quickshare (and full)

---

## AgravityAPI <a name="5.2.0"/> [5.2.0](https://www.npmjs.com/package/@agravity/private/v/5.2.0) (2023-06-06)

-   Add new API for QuickShares:
-   Add POST `/quickshares` to create a new QuickShare (for user)
-   Add GET `/quickshares` to get all QuickShares of user (can be specified by Admin when adding userid query param)
-   Add GET `/quickshares/{id}` to get a specific QuickShares of user
-   Add DELETE `/quickshares/{id}` to delete a specific QuickShares of user
-   Add DELETE `/quickshares` deletes all quick shares of a user (can be specified by Admin when adding userid query param)

Enhance Auth Mangement API:

-   Add GET `/auth/users/{id}` to get user information (if not ADMIN or the requesting user - only name and email
    are returned)
-   new query parameter limit
-   Add GET `/auth/users` (only ADMIN) to get all user informations
    new query parameter limit

Public API:

-   Add public PUT `/assets/{id}/availability` to set the availability of an asset

---

## AgravityAPI 5.1.6 (2023-05-23)

-   Remove techdata from all assets get endpoint and moved to GetAssetById:
    -   add GET endpoint `/assets/{id}/techdata` to private
    -   add query parameter `techdata` to public and private GetAssetById endpoints
-   Refactor public SignalR management class to have the prefix "public"
-   Update description of get asset techdata endpoint

---

## AgravityAPI 5.1.5 (2023-05-04)

(no changes - just update according to backend version)

---

## AgravityAPI 5.1.4 (2023-04-27)

(no changes - just update according to backend version)

---

## AgravityAPI 5.1.3 (2023-04-23)

-   Add new endpoints for download formats:
-   GET `/downloadformats/{id}` - This endpoint get a single download format.
-   POST `/downloadformats/{id}` - This endpoint updates one download format entry in the database. (Roles: Editor, Admin)
-   Include more translation options (show all)
-   Allow filtering of exported data (asset, workspace, collection_type and/or only certain collection types (IDs) for exporting. When providing multiple values separate it with comma)
-   Change separator of filter in searches (so comma (',') could be included in SDL values)

---

## AgravityAPI 5.1.2 (2023-03-23)

-   Change all `AddProperties` from `Dictionary<string, Object>` to `Dictionary<string, object>`
-   Add property `Profile` which could have the ICC-Profile name for the original blob
-   Add `Format` property to CollTypeItem model to get and store additional information about the format of the item_type
-   Add `ClientId` property to VersionInfo

---

## AgravityAPI 5.1.1 (2023-03-16)

(no changes - was not published on nuget - just update according to backend version)

---

## AgravityAPI 5.1.0 (2023-02-19)

(no changes - just update according to backend version)

---

## AgravityAPI 5.0.2 (2023-02-06)

(no changes - just update according to backend version)

---

## AgravityAPI 5.0.1 (2023-01-27)

-   Add / modifiy multipart/formdata endpoint POST `/assets/{id}/versionsupload`: This endpoint allows to upload one asset which replaces the asset with given id and creates a version which is returned.
-   modified `/assets/{id}/versions` to now only take json as input (VersionedAsset)
-   add missing `filter` parameter to HttpAssetsGet and made collectionId not mandatory.
-   add `expires` property to SasToken for easy access;
-   Add upload to storage use case;
-   Add `notPrefix`to WhereParam (only used in backend);

---

## AgravityAPI 5.0.0 (2023-01-07)

-   Add new permission endpoints:
    -   CollectionType Management: POST `/collectiontypes/{id}/permissions`
    -   Workspace Management: POST `/workspaces/{id}/permissions`
    -   (new) PermissionManagement:
        -   POST `/permissions/settings/identities` update all allowed permissions (ADD, REPLACE, REMOVE);
        -   GET `/permissions/settings` - Get the permission settings
        -   PUT `/permissions/settings` - Fully replace the settings;
-   Changed POST `/signalr/messages/{id}` to GET `/signalr/info/{id}`
-   Add `permissionless` property on collection type;
-   Add `permission_enabled` property on Agravity version;
-   Corrected properties of infoEntitySkillEnhanced to be alligned to other objects;
-   Removed `enabled` property in Permission Settings (Permissions are now globally set in Environment Variables);
-   Removed `uncomplete` flag in get assets by id;
-   Allow viewer to edit images
-   Change and add admin asset operations:
    -   PATCH `/assets/{id}/repair` (was GET)
    -   PATCH `/assets/{id}/renew` (was GET)
    -   PATCH `/assets/renew!!` (was GET)
    -   Add PATCH `/assets/{id}/reindex`
-   Add new Asset Versioning methods to public function:
    -   POST `/assets/{id}/versions` - This endpoint allows to create empty version or upload one asset which replaces the asset with given id and creates version.
    -   DELETE `/assets/[id}/versions/{vNr}` - This endpoint deletes a version of an asset.
    -   GET `/assets/{id}/versions/{vNr}/blobs` - This endpoint checks if assets and version exists and returns the url for the requested blob.
    -   POST `/assets/{id}}/versions/{vNr}/restore` - This endpoint restores a version nr to be the current version and saves the current asset as version.
    -   GET `/assets/{id}/versions` - This endpoint lists all the versioned assets which are stored in the database if asset is still valid.
-   Remove some endpoints:
    -   AssetOperations: GET `/assets/{id}/similar`- Perhash removed because it is not working as expected;
    -   CollectionManagement: POST & GET: `/collections/{id}/permissions`- Currently not used (will have a comeback soon)
    -   HelperTools: GET `/helpers/allqueryrus` not in use anymore - show RUs in portal;
    -   Remove deprecated Search result entries (`reason_result`, `max_sum_results`, `search_query`, `search_filter`, `search_order_by`, `search_mode` and `origin`)
-   Update asset version to create empty versions of assets (removes orig blob) - additional PUT blob on azure storage inbox is neccessary:
-   Add SearchAdmin status endpoint: GET `/searchadmin/status`;
-   Changed SearchAdmin endpoints:
    -   Recreate index: PATCH `/searchadmin/recreate`
    -   Delete index (and search resources): PATCH `/searchadmin/delete`
-   Add `translations`parameter to GET StaticDefinedLists and StaticDefinedListById endpoints (private & public)

---

## AgravityAPI 4.9.3 (2022-12-15)

Add parameter:

-   Paging with param `skip` in GET `/api/search`

Copy more endpoints from private to public:

-   Create Asset (without data) POST `{{url}}/api/assets?collectionid={{collectionId}}`
-   Get Inbox Token GET `{{url}}/api/auth/inbox` (for upload)
-   Create Published AssetImage POST `{{url}}/api/assets/{{assetId}}/publish`
-   Get All Published of Asset GET `{{url}}/api/assets/asset_id/publish`
-   SignalR GET `/api/signalr/negotiate?negotiateVersion=1`

Repaired some annotations

-   `x-functions-key` header was missing (saved search)
-   API Key instead of Bearer `401` message
-   Comma instead of colon separation in search param `ids`

---

## AgravityAPI 4.9.2 (2022-12-05)

-   Add to Public the Download Format Management and Custom Image Manipulation (with DownloadID):
    -   Add POST `assets/{id}/imageedit` to Public Asset Operation Management
    -   Add GET `assets/{id}/imageedit/{download_format_id}` to Public Asset Operation Management
    -   Fix missing OpenAPI parameter change the param `use_internal_image` to `original` in GET `assets/{id}/imageedit` in Public Asset Operation Management
    -   Remove POST `assets/{id}/rotate` from Public Asset Operation Management

---

## AgravityAPI 4.9.1 (2022-12-01)

-   Add `ids` param to search endpoint (private and public) to limit the results to given ids (comma separated);
-   introduce new `options` property to searchResult which reflect all filter params given
-   deprecation properties announced (all are included in `options`):
    -   `max_sum_results` => `options.limit`
    -   `search_query` => `options.searchstring`
    -   `search_filter` => `options.filter`
    -   `search_order_by` => `options.orderby`
    -   `search_mode` => `options.mode`

---

## AgravityAPI 4.9.0 (2022-11-28)

Add `translations` param in nearly all endpoints which receives translateable objects
Add missing `items` as param PublicAssetManagement
Add missing `fields` as param PublicAssetOperations and PublicCollectionManagement
Add Saved Search Management:

-   POST `/savedsearches` (editor + admin) This endpoint creates one saved search entry in the database.
-   GET `/savedsearches` (all + public) This endpoint lists all saved searchs in database.
-   DELETE `/savedsearches/{id}` (editor + admin) This endpoint deletes a single saved search.

---

## AgravityAPI 4.8.1 (2022-11-14)

-   Change GET `/assetsenhancer/{id}` to GET `/helper/skillenhancer/{id}` - Show the result of the SkillEnhancer for assets and collections

---

## AgravityAPI 4.8.0 (2022-11-13)

-   Add methods to public functions:
    -   Update GET `/assets/{id}` - Add "uncomplete" flag return uncomplete
    -   Add POST `/assets/{id}` - Update asset via API key
    -   Add POST `/collections/{id}` - Update collection via API
    -   Fix return value from HttpStaticDefinedListsGetById

---

## AgravityAPI 4.7.3 (2022-10-31)

> Just version upgrade to match backend

---

## AgravityAPI 4.7.2 (2022-11-02)

> Just version upgrade to match backend

---

## AgravityAPI 4.7.1 (2022-10-31)

> Just version upgrade to match backend

---

## AgravityAPI 4.7.0 (2022-10-30)

### New Features (in public)

-   Add helper methods to public functions:
    -   Add POST `/assetsupload` - Upload asset via API key
    -   Add POST `/collections` - Create collection via API key

### Improvements

-   Changed publish asset - removed "original" and replaced with "format";
-   Add origin to downloadFormat (where this format is based on);

---

## AgravityAPI 4.6.0 (2022-10-18)

### New Features (in public)

-   Repair `/collections` endpoint (level and parentid are now optional);
-   Add GET `/collectiontypeitems` - This method returns a list of collection types items.
-   Add helper methods to public functions:
    -   Add GET `/helper/userdefinedlists` - Returns all user defined lists of all collection types
    -   Add GET `/helper/filterableitems` - Returns all filterable items directly from the search index
    -   Add GET `/helper/searchableitemnames` - Returns all searchable items directly from the search index
    -   Add GET `/helper/searchableitems` - Returns all searchable items directly from the search index
-   Add Translations Management to public functions;
    -   Add GET `/translations/{id}` - Get all the translations of a whole entity (Asset, Collection, Collection Type, Download Format)
    -   Add GET `/translations/{id]}/custom/{customProperty}` - Get the translation of custom field on the entity (Asset, Collection)
    -   Add GET `/translations/{id}/{property}` - Get the translations of a specific field on the entity (Asset, Collection, Collection Type, Download Format)

---

## AgravityAPI 4.5.5 (2022-10-14)

> Just version upgrade to match backend

---

## AgravityAPI 4.5.4 (2022-09-28)

### Improvements

-   PublishAsset body now allows
    -   "usecases" (string list) (also to be updated)
    -   "original" (boolean) to publish original asset (with new name)

---

## AgravityAPI 4.5.3 (2022-09-21)

> Just version upgrade to match backend

---

## AgravityAPI 4.5.2 (2022-09-12)

> Just version upgrade to match backend

---

## AgravityAPI 4.5.1 (2022-09-11)

### New Features

-   Add new endpoint POST `/translations` which takes a list of string (assetIds) to return all translations of these assets;
    -   Has optional `property` query param where it can be filtered down to a specific property;

### Improvements

-   Make `includeblueprint` in `/collectiontypeitems` as query parameter (not path param);

> Others: Just reordering of properties (no changes on content) - because C# source based on new base classes

---

## AgravityAPI 4.5.0 (2022-09-04)

### New Features

-   Add endpoint PUT `/assets/{id}/availability` to set the availibility of the asset (asset operation);
    -   Add availability properties to asset (only set, when asset is locked or availability is timed);
    -   Add assetAvailability as separate model;
-   Add Ordering of entities in Workspace/CollectionType and Items of CollectionTypes and CollTypeItemBlueprints
-   Add AssetIconRuleManagement CRUD `/asseticonrules` to have asset icon rules which are displayed on assets;
-   Add `includeBlueprint` parameter at GET `/collectiontypeitems` (to get even the items of blueprints)

> Not possible to update the asset availability asset update (asset mangement) endpoint;

### Improvements

-   Add param for body POST `/colltypeitemgroup` (was missing)
-   Add security annotation to GET `/collectiontypeitems` (was missing in openAPI)

---

## AgravityAPI 4.4.2 (2022-08-29)

### New Features

-   Add ICC Profile Management:
    -   GET `/iccprofiles` This endpoint lists all icc profiles in blob container.
-   POST `/colltypeitemgroups/{{collTypeItemGroupId}}` (editor, admin) This endpoint updates a single collection type item group. (Roles: Editor, Admin)
-   Add new endpoint GET `/searchableitems` which now returns full items with lots of new information;

### Improvements

-   Change items of translationManagement.agravity.ts to optional and type bool
-   Changed endpoint `/searchableitems` to `/searchableitemnames`

---

## AgravityAPI 4.4.1 (2022-08-11)

### Improvements

-   Add missing OpenApiHeader at sdl update
-   Extend WhereParam
-   Update the agravityuser to save name/email/roles/groups
    -   add tutorial list (without any function yet)

---

## AgravityAPI 4.4.0 (2022-07-22)

Add Static Defined List Management:

-   POST `/staticdefinedlists` (admin) This endpoint creates one static defined list entry in the database.
-   GET `/staticdefinedlists` (all) This endpoint lists all static defined lists in database.
-   GET `/staticdefinedlists/{id}` (all) This endpoint gets a static defined list from database.
-   UPDATE `/staticdefinedlists/{id}` (admin) Updates a static defined list in database.
-   DELETE `/staticdefinedlists/{id}` (admin) This endpoint deletes a single static defined list.

Add AssetOperations with new endpoints:

-   PATCH `assets/{id}/runqueue/{queue}` (editor/admin) This endpoint execute a specific queue of the asset. E.g. Recreation of previews, AI recognition, hash values, ...
-   PATCH `assets/{id}/purgecdn` (editor/admin) This endpoint purges all published assets of this asset when CDN is enabled

Add AssetPublishing with new endpoint:

-   POST `assets/{id}/publish/{pid}` (editor/admin) This endpoint currently updates only the description of the published asset with the given ID.

Add HelperTools with new endpoint:

-   POST `helper/excel/export` (admin) This endpoint creates an excel export of the db

---

## AgravityAPI 4.3.0 (2022-06-27)

Add GeneralManagement with new endpoint:

-   POST `/cleanup` (admin) to check all original blobs if all elements are set correctly in database
    -   will be removed if not found in database
    -   will be moved to archive if found in database but set as deleted (status "D")

Add AssetOperations with new endpoint:

-   GET `assets/{id}/repair` (editor/admin) which refills (or corrects) the collection type items based on collections

Improvements:

-   Remove the assets on collections
-   Replaced PublishEntity with PublishedAssets
-   Add param `workspaceid` to create collection type;
-   Add param `sftpenabled` to create secure upload for user;
-   Add `name` and `email` to user info;
-   Add `region` to version, versionEntity, publishEntity, asset;

---

## AgravityAPI 4.2.0 (2022-06-15)

Add CollTypeItemGroups Management with new endpoints:

-   POST `/colltypeitemgroups` (editor/admin) : This endpoint creates a item collection type group with a subset of items as preparation
-   GET `/colltypeitemgroups` (editor/admin) : This endpoint delivers a list all item collection type groups.
-   DELETE `/colltypeitemgroups/{id}` (editor/admin) : This endpoint deletes a specific item collection type group.

> A CollTypeItemGroup is a collection of prepared items which could be assigned to collection types. These items don't have any relation to collection types, collections or assets.

Improvements:

-   Add `items` parameter to assets and collection to expand all items (with corresponding language);
-   CollTypeItem boolean fields are now nullable (mandatory, searchable, onlyasset,multi)
-   Add `group` (translateable label of grouping items within a collection type) and `order` (bring the items in order) properties to CollTypeItem which can be filled.

---

## AgravityAPI 4.1.1 (2022-05-26)

-   Add publicCollectionTypeManagement and updated routes in publicWorkspaceManagement;

---

## AgravityAPI 4.1.0 (2022-05-15)

-   #441
    -   POST `/workspaces` (editor/admin) : This endpoint creates a unique workspace ID and adds the information to the database.
    -   GET `/workspaces` (all - private & public) : This endpoint lists all available workspaces, which are stored in the database and not deleted (status "A"). It will never be empty. If no workspace is stored in the database, one is constructed (id: "w0000") with all available collection types.
    -   GET `/workspaces/{id}` (all - private & public) : This endpoint returns one single workspace (from ID).
    -   POST `/workspaces/{id}` (editor/admin) : This endpoint updates the workspace with name, description and collection_types
    -   DELETE `/workspaces/{id}` (editor/admin) : This endpoint deletes the workspace with the given ID.
    -   DELETE `/workspaces` (admin) : This endpoint deletes all workspaces

---

## AgravityAPI 4.0.1 (2022-05-05)

-   Add `filter` query param to GET `/assets` endpoint;
    -   extended assetPageResult with filter criterion;
    -   new "WhereParam" model

---

## AgravityAPI 4.0.0 V4 .NET6 UPGRADE (2022-04-27)

-   Add new private ConfigurationManagementService with new endpoints:
    -   GET `/config` (only admin) : Lists all config values stored in config table
    -   GET `/config/frontend` (all) : Lists config value only for frontend stored in config table
    -   POST `/config` (only admin) : This initializes all configurations and write them into appconfig table.
    -   POST `/ config/key` (only admin) : Update an existing config value with the given key. (Only value, content-type and description)
-   Add new public ConfigurationManagementService with new endpoint:
    -   GET `/config/frontend` (all) : Lists config value only for frontend stored in config table
-   Add optional `addconfigqueues` query param to setup (if custom queues have to be initialized)
-   SasToken now contains full token incl. URL
-   Add upgrade v3tov4 endpoint `/upgrade/V3toV4`

---

## ##AgravityAPI 3.4.5: Just version update

## AgravityAPI 3.4.4: Translations Custom Fields

### API

-   `/translations/{id}/custom/{customField}` GET Get the translation of custom field on the entity (Asset, Collection)
-   `/collections/{id}/repair` PATCH This endpoint checks if collection and assets from collection are the same. If not, the collection is corrected.

---

## ##AgravityAPI 3.4.3: Just version update

## AgravityAPI 3.4.2: Translation Management (Bulk)

### API

-   `/translations/{id}` GET all the translations of a whole entity (Asset, Collection, Collection Type, Download Format)
-   `/translations/{id}/{property}` GET the translations of a specific field on the entity (Asset, Collection, Collection Type, Download Format)
-   `/translations/{id}` POST Updates the translations of a whole entity (Asset, Collection, Collection Type, Download Format)

---

## AgravityAPI 3.4.0: Translations / Download Formats / Search Improvement

### Model

-   `pageResultAsset` was refactored to `assetPageResult`
-   `downloadFormat` has now `operations` and `asset_type` instead of `image_operations` to be more flexible
-   `shareCollectionFull` has `page` instead of `assets` and `page_size` in return model;
-   Translations added to asset, collection, collectionType, collTypeItem and downloadFormat
    ###API:
-   `/assets` POST has now collection id as mandatory parameter
-   `/assets` GET has now new assetPageResult return value
-   `/shared` GET has now continuous token + limit + order by parameter
-   `/deletesearchresources` _[admin]_ can now delete the index, indexer, data-sources and skills - have to be recreated after that.

---

## <a name="known-issues"></a> Known issues

Below is a list of any know issues affecting the [recommended minimum version](#recommended-version):

| Issue | Impact | Mitigation | Tracking link |
| ----- | ------ | ---------- | ------------- |
