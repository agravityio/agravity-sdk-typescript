import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { AgravityPortalConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { PortalAssetManagementService } from './api/portalAssetManagement.pub.agravity';
import { PortalAssetOperationsService } from './api/portalAssetOperations.pub.agravity';
import { PortalGeneralManagementService } from './api/portalGeneralManagement.pub.agravity';
import { PortalSearchManagementService } from './api/portalSearchManagement.pub.agravity';

@NgModule({
	imports: [],
	declarations: [],
	exports: [],
	providers: []
})
export class AgravityPortalApiModule {
	public static forRoot(configurationFactory: () => AgravityPortalConfiguration): ModuleWithProviders<AgravityPortalApiModule> {
		return {
			ngModule: AgravityPortalApiModule,
			providers: [{ provide: AgravityPortalConfiguration, useFactory: configurationFactory }]
		};
	}

	constructor(@Optional() @SkipSelf() parentModule: AgravityPortalApiModule, @Optional() http: HttpClient) {
		if (parentModule) {
			throw new Error('AgravityPortalApiModule is already loaded. Import in your base AppModule only.');
		}
		if (!http) {
			throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
		}
	}
}
