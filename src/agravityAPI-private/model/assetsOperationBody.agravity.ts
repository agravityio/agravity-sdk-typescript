/**
 * Agravity OpenAPI Documentation - Private Functions
 *
 * Contact: office@agravity.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AssetCollectionLink } from './assetCollectionLink.agravity';

export interface AssetsOperationBody {
	asset_links?: Array<AssetCollectionLink> | null;
	to_collection_id?: string | null;
	operation?: string | null;
}
