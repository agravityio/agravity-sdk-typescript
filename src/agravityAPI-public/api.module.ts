import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { AgravityPublicConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

@NgModule({
	imports: [],
	declarations: [],
	exports: [],
	providers: []
})
export class AgravityPublicApiModule {
	public static forRoot(configurationFactory: () => AgravityPublicConfiguration): ModuleWithProviders<AgravityPublicApiModule> {
		return {
			ngModule: AgravityPublicApiModule,
			providers: [{ provide: AgravityPublicConfiguration, useFactory: configurationFactory }]
		};
	}

	constructor(@Optional() @SkipSelf() parentModule: AgravityPublicApiModule, @Optional() http: HttpClient) {
		if (parentModule) {
			throw new Error('AgravityPublicApiModule is already loaded. Import in your base AppModule only.');
		}
		if (!http) {
			throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
		}
	}
}
