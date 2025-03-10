/**
 * Agravity OpenAPI Documentation - Private Functions
 *
 * Contact: office@agravity.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface PortalAuthentication {
	method?: PortalAuthentication.MethodEnum;
	issuer?: string | null;
	client_id?: string | null;
	tenant_id?: string | null;
	password?: string | null;
}
export namespace PortalAuthentication {
	export type MethodEnum = 'UNDEFINED' | 'NONE' | 'PASSWORD' | 'EEID' | 'AUTH0';
	export const MethodEnum = {
		Undefined: 'UNDEFINED' as MethodEnum,
		None: 'NONE' as MethodEnum,
		Password: 'PASSWORD' as MethodEnum,
		Eeid: 'EEID' as MethodEnum,
		Auth0: 'AUTH0' as MethodEnum
	};
}
