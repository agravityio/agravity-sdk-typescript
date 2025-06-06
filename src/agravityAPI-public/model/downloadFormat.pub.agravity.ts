/**
 * Agravity OpenAPI Documentation - Public Functions
 *
 * Contact: office@agravity.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DynamicImageOperation } from './dynamicImageOperation.pub.agravity';
import { PermissionEntity } from './permissionEntity.pub.agravity';

export interface DownloadFormat {
	id?: string | null;
	entity_type?: string | null;
	operations?: Array<DynamicImageOperation> | null;
	extension?: string | null;
	asset_type?: string | null;
	origin?: string | null;
	fallback_thumb?: boolean | null;
	target_filename?: string | null;
	translations?: { [key: string]: { [key: string]: object } } | null;
	permissions?: Array<PermissionEntity> | null;
	name?: string | null;
	description?: string | null;
	add_properties?: { [key: string]: any } | null;
	status?: string | null;
	created_date?: string | null;
	created_by?: string | null;
	modified_date?: string | null;
	modified_by?: string | null;
	pk?: string | null;
	_etag?: string | null;
}
