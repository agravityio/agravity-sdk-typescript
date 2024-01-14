export * from './portalAssetManagement.pub.agravity';
import { PortalAssetManagementService } from './portalAssetManagement.pub.agravity';
export * from './portalAssetOperations.pub.agravity';
import { PortalAssetOperationsService } from './portalAssetOperations.pub.agravity';
export * from './portalGeneralManagement.pub.agravity';
import { PortalGeneralManagementService } from './portalGeneralManagement.pub.agravity';
export * from './portalSearchManagement.pub.agravity';
import { PortalSearchManagementService } from './portalSearchManagement.pub.agravity';
export const APIS = [PortalAssetManagementService, PortalAssetOperationsService, PortalGeneralManagementService, PortalSearchManagementService];
