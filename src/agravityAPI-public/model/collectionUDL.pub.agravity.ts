/**
 * Agravity OpenAPI Documentation - Public Functions
 *
 * Contact: office@agravity.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EntityIdName } from './entityIdName.pub.agravity';

export interface CollectionUDL {
	children?: Array<EntityIdName> | null;
	name?: string | null;
	entity_type?: string | null;
	translations?: { [key: string]: { [key: string]: object } } | null;
	id?: string | null;
}
