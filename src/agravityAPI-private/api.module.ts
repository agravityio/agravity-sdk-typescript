import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { AgravityConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AssetIconRuleManagementService } from './api/assetIconRuleManagement.agravity';
import { AssetManagementService } from './api/assetManagement.agravity';
import { AssetOperationsService } from './api/assetOperations.agravity';
import { AssetPublishingService } from './api/assetPublishing.agravity';
import { AssetVersioningService } from './api/assetVersioning.agravity';
import { AuthenticationManagementService } from './api/authenticationManagement.agravity';
import { CollectionManagementService } from './api/collectionManagement.agravity';
import { CollectionShareManagementService } from './api/collectionShareManagement.agravity';
import { CollectionTypeItemBlueprintManagementService } from './api/collectionTypeItemBlueprintManagement.agravity';
import { CollectionTypeManagementService } from './api/collectionTypeManagement.agravity';
import { CommentsManagementService } from './api/commentsManagement.agravity';
import { ConfigurationManagementService } from './api/configurationManagement.agravity';
import { DashboardWidgetManagementService } from './api/dashboardWidgetManagement.agravity';
import { DataImportExportManagementService } from './api/dataImportExportManagement.agravity';
import { DownloadFormatManagementService } from './api/downloadFormatManagement.agravity';
import { DownloadZipService } from './api/downloadZip.agravity';
import { GeneralManagementService } from './api/generalManagement.agravity';
import { HelperToolsService } from './api/helperTools.agravity';
import { HistoryEntryManagementService } from './api/historyEntryManagement.agravity';
import { IccProfileManagementService } from './api/iccProfileManagement.agravity';
import { ListBlobsService } from './api/listBlobs.agravity';
import { ListQueuesService } from './api/listQueues.agravity';
import { ListTablesService } from './api/listTables.agravity';
import { PermissionsManagementService } from './api/permissionsManagement.agravity';
import { PortalManagementService } from './api/portalManagement.agravity';
import { PublishingService } from './api/publishing.agravity';
import { QuickshareManagementService } from './api/quickshareManagement.agravity';
import { SavedSearchManagementService } from './api/savedSearchManagement.agravity';
import { SearchManagementService } from './api/searchManagement.agravity';
import { SecureUploadService } from './api/secureUpload.agravity';
import { SignalRConnectionManagementService } from './api/signalRConnectionManagement.agravity';
import { StaticDefinedListManagementService } from './api/staticDefinedListManagement.agravity';
import { StockImportService } from './api/stockImport.agravity';
import { StructureImportService } from './api/structureImport.agravity';
import { TranslationManagementService } from './api/translationManagement.agravity';
import { WebAppDataService } from './api/webAppData.agravity';
import { WidgetLayoutManagementService } from './api/widgetLayoutManagement.agravity';
import { WordpressManagementService } from './api/wordpressManagement.agravity';
import { WorkspaceManagementService } from './api/workspaceManagement.agravity';

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
