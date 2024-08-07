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
import { CollTypeItem } from './collTypeItem.agravity';
import { AssetBlob } from './assetBlob.agravity';
import { ArtificialIntelligenceGroup } from './artificialIntelligenceGroup.agravity';

export interface Asset {
	id?: string;
	entity_type?: string;
	name?: string;
	asset_type?: string;
	duplicates?: Array<string>;
	ai_groups?: Array<ArtificialIntelligenceGroup>;
	keywords?: Array<string>;
	orig_blob?: AssetBlob;
	blobs?: Array<AssetBlob>;
	collections?: Array<string>;
	failed_reason?: string;
	region_of_origin?: string;
	availability?: string;
	available_from?: string | null;
	available_to?: string | null;
	custom?: any;
	items?: Array<CollTypeItem>;
	translations?: { [key: string]: { [key: string]: object } };
	role?: Asset.RoleEnum;
	description?: string;
	add_properties?: { [key: string]: any };
	status?: string;
	created_date?: string | null;
	created_by?: string;
	modified_date?: string | null;
	modified_by?: string;
	pk?: string;
	_etag?: string;
}
export namespace Asset {
	export type RoleEnum = 'NONE' | 'VIEWER' | 'EDITOR';
	export const RoleEnum = {
		None: 'NONE' as RoleEnum,
		Viewer: 'VIEWER' as RoleEnum,
		Editor: 'EDITOR' as RoleEnum
	};
}
