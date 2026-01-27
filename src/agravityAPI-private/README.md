# @agravity/private@10.2.4

  <p>Agravity is a powerful, enterprise-grade Headless Digital Asset Management (DAM) system designed for organizations that need complete control over how they manage, organize, and distribute their digital assets.</p>    <h2>Key Features</h2>  <ul>  <li>Asset Management - Upload, organize, and manage all types of digital assets (images, videos, documents, etc.)</li>  <li>Collections &amp; Hierarchies - Create flexible folder structures and collection types with customizable metadata</li>  <li>Advanced Search - Powered by Azure Cognitive Search with AI-enhanced capabilities for intelligent discovery</li>  <li>AI Integration - Leverage AI to automatically generate metadata, tags, and descriptions for your assets</li>  <li>Versioning - Track and restore previous versions of your assets with complete version history</li>  <li>Publishing &amp; Distribution - Publish assets to various channels including Vimeo, CDN, and custom portals</li>  <li>Portal System - Create public-facing portals with granular permission controls and custom branding</li>  <li>Download Formats - Define custom download formats with image transformations and optimizations</li>  <li>Collaboration Features - Share collections, create quick shares, and manage team access with role-based permissions</li>  <li>Multi-Language Support - Full translation capabilities for all metadata and UI elements</li>  <li>API-First Architecture - Complete REST API for seamless integration with your applications</li>  </ul>    <h2>Headless DAM Benefits</h2>  <p>As a headless DAM solution, Agravity separates content management from presentation. This means:</p>  <ul>  <li>Flexibility - Use the same assets across multiple channels and applications without duplication</li>  <li>API-Driven - Access all functionality through powerful REST APIs for custom integrations</li>  <li>Framework Agnostic - Integrate with any frontend framework or technology stack</li>  <li>Scalability - Built on cloud-native architecture with Azure infrastructure for unlimited growth</li>  <li>Multi-Channel Distribution - Publish to web, mobile, social media, and custom portals from a single source</li>  </ul>    <h2>Core Entities</h2>  <p><strong>Assets</strong> - Your digital content (images, videos, documents). Each asset can have multiple versions, metadata, and be published to various targets.</p>  <p><strong>Collections</strong> - Logical groupings of assets organized hierarchically. Support custom metadata through collection types.</p>  <p><strong>Collection Types</strong> - Define the structure and metadata fields for collections, similar to database schemas.</p>  <p><strong>Workspaces</strong> - Organize collection types into workspaces for multi-project management.</p>  <p><strong>Download Formats</strong> - Define transformations and optimizations for assets when downloaded.</p>  <p><strong>Portals</strong> - Public-facing interfaces for sharing collections with external stakeholders.</p>    <h2>API Endpoints Overview</h2>  <p><strong>Asset Management</strong> - Create, read, update, delete, and search assets with full metadata support</p>  <p><strong>Collection Management</strong> - Organize assets into collections with hierarchical structures</p>  <p><strong>AI Operations</strong> - Automatically generate asset metadata using AI-powered field generation</p>  <p><strong>Publishing</strong> - Publish assets to Vimeo, CDN, or custom publishing targets</p>  <p><strong>Search &amp; Discovery</strong> - Full-text search with advanced filtering and AI-enhanced similarity search</p>  <p><strong>User &amp; Portal Management</strong> - Control access through roles, profiles, and custom portals</p>  <p><strong>Content Distribution</strong> - Share collections, create download packages, and generate secure links</p>    <h2>Security &amp; Permissions</h2>  <ul>  <li>OAuth 2.0 authentication with Azure AD integration</li>  <li>Role-based access control (RBAC) with custom profiles</li>  <li>Entity-level permissions for granular control</li>  <li>API key authentication for service-to-service communication</li>  <li>Secure sharing with password-protected links and expiration dates</li>  </ul>    <h2>Use Cases</h2>  <ul>  <li>E-commerce product image management and distribution</li>  <li>Marketing asset management across multiple channels</li>  <li>Brand asset library and governance</li>  <li>Video content management and publishing</li>  <li>Enterprise document management with searchability</li>  <li>Multi-tenant content management for agencies</li>  <li>AI-powered metadata generation at scale</li>  </ul>    <h2>Support</h2>  <p>For questions or support, contact <a href=\"mailto:support@agravity.io\">support@agravity.io</a> or visit <a href=\"https://agravity.io\">https://agravity.io</a>.</p>    < p>Agravity © 2026 - Enterprise Headless Digital Asset Management</p>      

The version of the OpenAPI document: 10.2.4

## Building

To install the required dependencies and to build the typescript sources run:

```console
npm install
npm run build
```

## Publishing

First build the package then run `npm publish dist` (don't forget to specify the `dist` folder!)

## Consuming

Navigate to the folder of your consuming project and run one of next commands.

_published:_

```console
npm install @agravity/private@10.2.4 --save
```

_without publishing (not recommended):_

```console
npm install PATH_TO_GENERATED_PACKAGE/dist.tgz --save
```

_It's important to take the tgz file, otherwise you'll get trouble with links on windows_

_using `npm link`:_

In PATH_TO_GENERATED_PACKAGE/dist:

```console
npm link
```

In your project:

```console
npm link @agravity/private
```

__Note for Windows users:__ The Angular CLI has troubles to use linked npm packages.
Please refer to this issue <https://github.com/angular/angular-cli/issues/8284> for a solution / workaround.
Published packages are not effected by this issue.

### General usage

In your Angular project:

```typescript

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideApi } from '@agravity/private';

export const appConfig: ApplicationConfig = {
    providers: [
        // ...
        provideHttpClient(),
        provideApi()
    ],
};
```

**NOTE**
If you're still using `AppModule` and haven't [migrated](https://angular.dev/reference/migrations/standalone) yet, you can still import an Angular module:
```typescript
import { AgravityApiModule } from '@agravity/private';
```

If different from the generated base path, during app bootstrap, you can provide the base path to your service.

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideApi } from '@agravity/private';

export const appConfig: ApplicationConfig = {
    providers: [
        // ...
        provideHttpClient(),
        provideApi('http://localhost:9999')
    ],
};
```

```typescript
// with a custom configuration
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideApi } from '@agravity/private';

export const appConfig: ApplicationConfig = {
    providers: [
        // ...
        provideHttpClient(),
        provideApi({
            withCredentials: true,
            username: 'user',
            password: 'password'
        })
    ],
};
```

```typescript
// with factory building a custom configuration
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideApi, AgravityConfiguration } from '@agravity/private';

export const appConfig: ApplicationConfig = {
    providers: [
        // ...
        provideHttpClient(),
        {
            provide: AgravityConfiguration,
            useFactory: (authService: AuthService) => new AgravityConfiguration({
                    basePath: 'http://localhost:9999',
                    withCredentials: true,
                    username: authService.getUsername(),
                    password: authService.getPassword(),
            }),
            deps: [AuthService],
            multi: false
        }
    ],
};
```

### Using multiple OpenAPI files / APIs

In order to use multiple APIs generated from different OpenAPI files,
you can create an alias name when importing the modules
in order to avoid naming conflicts:

```typescript
import { provideApi as provideUserApi } from 'my-user-api-path';
import { provideApi as provideAdminApi } from 'my-admin-api-path';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
    providers: [
        // ...
        provideHttpClient(),
        provideUserApi(environment.basePath),
        provideAdminApi(environment.basePath),
    ],
};
```

### Customizing path parameter encoding

Without further customization, only [path-parameters][parameter-locations-url] of [style][style-values-url] 'simple'
and Dates for format 'date-time' are encoded correctly.

Other styles (e.g. "matrix") are not that easy to encode
and thus are best delegated to other libraries (e.g.: [@honoluluhenk/http-param-expander]).

To implement your own parameter encoding (or call another library),
pass an arrow-function or method-reference to the `encodeParam` property of the Configuration-object
(see [General Usage](#general-usage) above).

Example value for use in your Configuration-Provider:

```typescript
new Configuration({
    encodeParam: (param: Param) => myFancyParamEncoder(param),
})
```

[parameter-locations-url]: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameter-locations
[style-values-url]: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values
[@honoluluhenk/http-param-expander]: https://www.npmjs.com/package/@honoluluhenk/http-param-expander
