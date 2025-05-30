/**
 * Agravity OpenAPI Documentation - Private Functions
 *
 * Contact: office@agravity.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CollectionType } from './collectionType.agravity';
import { Asset } from './asset.agravity';
import { Collection } from './collection.agravity';
import { DistZipResponse } from './distZipResponse.agravity';

export interface GroupAllAppData {
	collection_type?: CollectionType;
	collections?: Array<Collection> | null;
	assets?: Array<Asset> | null;
	created_date?: string | null;
	add_info?: Array<{ [key: string]: object }> | null;
	dist?: DistZipResponse | null;
}
