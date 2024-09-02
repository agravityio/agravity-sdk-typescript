import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { AgravityConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

@NgModule({
	imports: [],
	declarations: [],
	exports: [],
	providers: []
})
export class AgravityApiModule {
	public static forRoot(configurationFactory: () => AgravityConfiguration): ModuleWithProviders<AgravityApiModule> {
		return {
			ngModule: AgravityApiModule,
			providers: [{ provide: AgravityConfiguration, useFactory: configurationFactory }]
		};
	}

	constructor(@Optional() @SkipSelf() parentModule: AgravityApiModule, @Optional() http: HttpClient) {
		if (parentModule) {
			throw new Error('AgravityApiModule is already loaded. Import in your base AppModule only.');
		}
		if (!http) {
			throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
		}
	}
}
