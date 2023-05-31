import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { AgravityPublicConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { PublicAssetManagementService } from './api/publicAssetManagement.pub.agravity';
import { PublicAssetOperationsService } from './api/publicAssetOperations.pub.agravity';
import { PublicAssetPublishingService } from './api/publicAssetPublishing.pub.agravity';
import { PublicAssetVersioningService } from './api/publicAssetVersioning.pub.agravity';
import { PublicAuthenticationManagementService } from './api/publicAuthenticationManagement.pub.agravity';
import { PublicCollectionManagementService } from './api/publicCollectionManagement.pub.agravity';
import { PublicCollectionSecureUploadService } from './api/publicCollectionSecureUpload.pub.agravity';
import { PublicCollectionTypeManagementService } from './api/publicCollectionTypeManagement.pub.agravity';
import { PublicConfigurationManagementService } from './api/publicConfigurationManagement.pub.agravity';
import { PublicDownloadFormatManagementService } from './api/publicDownloadFormatManagement.pub.agravity';
import { PublicGeneralManagementService } from './api/publicGeneralManagement.pub.agravity';
import { PublicHelperToolsService } from './api/publicHelperTools.pub.agravity';
import { PublicPublishingService } from './api/publicPublishing.pub.agravity';
import { PublicSavedSearchService } from './api/publicSavedSearch.pub.agravity';
import { PublicSearchManagementService } from './api/publicSearchManagement.pub.agravity';
import { PublicSharingManagementService } from './api/publicSharingManagement.pub.agravity';
import { PublicSignalRConnectionManagementService } from './api/publicSignalRConnectionManagement.pub.agravity';
import { PublicStaticDefinedListManagementService } from './api/publicStaticDefinedListManagement.pub.agravity';
import { PublicTranslationManagementService } from './api/publicTranslationManagement.pub.agravity';
import { PublicWebAppDataService } from './api/publicWebAppData.pub.agravity';
import { PublicWorkspaceManagementService } from './api/publicWorkspaceManagement.pub.agravity';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class AgravityPublicApiModule {
    public static forRoot(configurationFactory: () => AgravityPublicConfiguration): ModuleWithProviders<AgravityPublicApiModule> {
        return {
            ngModule: AgravityPublicApiModule,
            providers: [ { provide: AgravityPublicConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: AgravityPublicApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('AgravityPublicApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
