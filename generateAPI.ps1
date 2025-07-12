# check if $env:OAUTH2_TOKEN is set, if not: exit
if ($null -eq $env:AGRAVITY_OAUTH2_TOKEN) {
    Write-Host "Please set OAUTH2_TOKEN environment variable"
    exit
}

# check if $env:OPENAPI_GENERATOR is set, if not: exit
if ($null -eq $env:OPENAPI_GENERATOR) {
    Write-Host "Please set OPENAPI_GENERATOR path to the openapi-generator-cli.jar"
    # wait for user input
    Write-Host "Press any key to continue ..."
    exit
}

# check REST API endpoint /version if backend is running with API key $env:API_KEY as "x-functions-key" header, catch it and if it is not running: exit
$version = (Invoke-RestMethod -Uri http://localhost:7072/api/version -Method Get -ContentType "application/json" -ErrorAction SilentlyContinue).version

if ($null -eq $version) {
    Write-Host "Please start backend before generating API"
    exit
}

# get portal path from apiPath.txt file (optional)
$apiPath = Get-Content .\apiPath.txt -ErrorAction SilentlyContinue
if ($null -eq $apiPath) {
    $apiPath="..\..\portal_unleashed"
}

#add "\api" to apiPath
$apiPath = $apiPath + "\libs\api"

# echo apiVersion
Write-Host "Generate API with apiVersion: $version"

# wait for user input
Write-Host "Press any key to continue ..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# delete folder .\src without error output
Remove-Item -Path .\src -Recurse -Force -ErrorAction SilentlyContinue

# generate API

Write-Host "Calling private API"

# download file with Authentication header (Bearer token)
Invoke-WebRequest -Uri "http://localhost:7071/api/openapi/v3.json" -Headers @{"Authorization" = "$env:AGRAVITY_OAUTH2_TOKEN"} -OutFile "openapi.json"

# check if openapi.json exists and is not empty; if not: exit
if (!(Test-Path "openapi.json") -or (Get-Content "openapi.json" -Raw) -eq "") {
    Write-Host "openapi.json is empty or does not exist"
    exit
}

#$params="apiModulePrefix=Agravity,configurationPrefix=Agravity,modelFileSuffix=.agravity,serviceFileSuffix=.agravity,ngVersion=14.0.0,npmName=agravityAPI-private,npmVersion=$version"
$params = "apiModulePrefix=Agravity,configurationPrefix=Agravity,modelFileSuffix=.agravity,serviceFileSuffix=.agravity,ngVersion=19.0.0,npmName=@agravity/private,supportsES6=true,npmRepository=https://registry.npmjs.org/,useSingleRequestParameter=true"
#npx @openapitools/openapi-generator-cli generate -i openapi.json -g typescript-angular -o src/agravityAPI-private/ --additional-properties=$params
java -jar $env:OPENAPI_GENERATOR generate -i openapi.json -g typescript-angular -o src/agravityAPI-private/ --additional-properties=$params

# delete openapi.json
Remove-Item -Path .\openapi.json -Force

Write-Host "Calling public API"
Invoke-WebRequest -Uri "http://localhost:7072/api/openapi/v3.json" -OutFile "openapi.json"

# check if openapi.json exists and is not empty; if not: exit
if (!(Test-Path "openapi.json") -or (Get-Content "openapi.json" -Raw) -eq "") {
    Write-Host "openapi.json is empty or does not exist"
    exit
}

$params = "apiModulePrefix=AgravityPublic,configurationPrefix=AgravityPublic,modelFileSuffix=.pub.agravity,serviceFileSuffix=.pub.agravity,ngVersion=19.0.0,npmName=@agravity/public,supportsES6=true,npmRepository=https://registry.npmjs.org/,useSingleRequestParameter=true"
#npx @openapitools/openapi-generator-cli generate -i openapi.json -g typescript-angular -o src/agravityAPI-public/ --additional-properties=$params
java -jar $env:OPENAPI_GENERATOR generate -i openapi.json -g typescript-angular -o src/agravityAPI-public/ --additional-properties=$params

# delete openapi.json
Remove-Item -Path .\openapi.json -Force

Write-Host "Generate complete"
Write-Host "Start replacements"
function ReplaceStringInFiles {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$FolderPath,
        [Parameter(Mandatory = $true, Position = 1)]
        [string]$SearchString,
        [Parameter(Mandatory = $true, Position = 2)]
        [string]$ReplaceString
    )

    Get-ChildItem -Path $FolderPath -Recurse |
    ForEach-Object {
        if (-not $_.PSIsContainer) {
            $content = Get-Content $_.FullName -Raw
            if ($content -match $SearchString) {
                $content = $content -replace $SearchString, $ReplaceString
                Set-Content $_.FullName -Value $content -NoNewline
            }
        }
    }
}


ReplaceStringInFiles -FolderPath "src" -SearchString "add_properties\?: \{ \[key: string\]: object; \} \| null;" -ReplaceString "add_properties?: { [key: string]: any; } | null;"
Write-Host "Replace add_properties complete"
ReplaceStringInFiles -FolderPath "src" -SearchString "default_value\?: object \| null;" -ReplaceString "default_value?: any | null;"
Write-Host "Replace default_value complete"
ReplaceStringInFiles -FolderPath "src" -SearchString "custom\?: \{ \[key: string\]: object; \} \| null;" -ReplaceString "custom?: any | null;"
Write-Host "Replace custom complete"
ReplaceStringInFiles -FolderPath "src" -SearchString "ai\?: object \| null;" -ReplaceString "ai?: any | null;"
Write-Host "Replace ai complete"

# add line in file src\agravityAPI-private\api\assetManagement.agravity.ts after line 482
#$fileContent = Get-Content "src\agravityAPI-private\api\assetManagement.agravity.ts"
#$fileContent[348] = $fileContent[348] + ",`n" + "                body: assetBulkUpdate"
# write file
#$fileContent | Set-Content "src\agravityAPI-private\api\assetManagement.agravity.ts"

#Write-Host "Add line in file src\agravityAPI-private\api\assetManagement.agravity.ts after line 482 complete"


$fileContent = Get-Content "src\agravityAPI-private\api\assetVersioning.agravity.ts"
$fileContent[234] = "            // localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);"
    
# write file
$fileContent | Set-Content "src\agravityAPI-private\api\assetVersioning.agravity.ts"

Write-Host "Remove line in file src\agravityAPI-private\api\assetVersioning.agravity.ts after line 150 complete"


$fileContent = Get-Content "src\agravityAPI-public\api\publicCollectionSecureUpload.pub.agravity.ts"
$fileContent[262] = "            // localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);"
# write file
$fileContent | Set-Content "src\agravityAPI-public\api\publicCollectionSecureUpload.pub.agravity.ts"

Write-Host "Remove line in file src\agravityAPI-public\api\publicCollectionSecureUpload.pub.agravity.ts after line 150 complete"

# add line "export * from './encoder';" at the end of index.ts in src\agravityAPI-private
$fileContent = Get-Content "src\agravityAPI-private\index.ts"
$fileContent += "export * from './encoder';"
# write file
$fileContent | Set-Content "src\agravityAPI-private\index.ts"

# add line "export * from './encoder';" at the end of index.ts in src\agravityAPI-public
$fileContent = Get-Content "src\agravityAPI-public\index.ts"
$fileContent += "export * from './encoder';"
# write file
$fileContent | Set-Content "src\agravityAPI-public\index.ts"

ReplaceStringInFiles -FolderPath "src" -SearchString "`r`n" -ReplaceString "`n"

# Get-ChildItem -Path "src" -Recurse -File | ForEach-Object {(Get-Content $_.FullName -Raw) -replace ,  | Set-Content $_.FullName -NoNewline }

# set author to git user
$author = (git config user.name)
$licence = "MIT License"
$description = "The Agravity GlobalDAM API which allowes authenticated user to access the Agravity GlobalDAM Backend"
$repoUrl =   '    "url": "git+https://github.com/agravityio/agravity-sdk-typescript"'
#$repoUrl =   '"repository": { "type": "git","url": "git+https://github.com/agravityio/agravity-sdk-typescript"},'
$access =   '"access": "public",'

#set array of keywords: agravity, dam, globaldam
$keywords = @("agravity", "dam", "globaldam","apifirst","api","sdk","typescript")

#create copy of keywords and add "private" to it
$privateKeywords = $keywords
$privateKeywords += "private"

# parse package.json, change stuff and write it back
$json = Get-Content -Path src/agravityAPI-private/package.json -Raw | ConvertFrom-Json

$json.keywords = $privateKeywords
$json.author = $author
$json.license = $licence
$json.description = $description

$json | ConvertTo-Json -Depth 100 | Set-Content -Path src/agravityAPI-private/package.json

# add $repoUrl to package.json in line 20
$fileContent = Get-Content "src\agravityAPI-private\package.json"
$fileContent[7] =  $repoUrl
$fileContent[39] = $fileContent[39] + "`n  " + $access
# write file
$fileContent | Set-Content "src\agravityAPI-private\package.json"

############### public ###############

# parse package.json, change stuff and write it back
#create copy of keywords and add "public" to it
$publicKeywords = $keywords
$publicKeywords += "public"

$description = "The Agravity GlobalDAM API which allowes API key authenticated access the Agravity GlobalDAM Backend"

$json = Get-Content -Path src/agravityAPI-public/package.json -Raw | ConvertFrom-Json

$json.keywords = $publicKeywords
$json.author = $author
$json.license = $licence
$json.description = $description

$json | ConvertTo-Json -Depth 100 | Set-Content -Path src/agravityAPI-public/package.json

# add $repoUrl to package.json in line 12
$fileContent = Get-Content "src\agravityAPI-public\package.json"
$fileContent[7] =  $repoUrl
$fileContent[39] = $fileContent[39] + "`n  " + $access
# write file
$fileContent | Set-Content "src\agravityAPI-public\package.json"

# pretty print whole project using prettier
npx prettier --write src/**

######################### ASK FOR COPY SRC FILES TO AGRVITY-ANGULAR-APP #########################

# ask for copy src files to agrvity-angular-app
Write-Host "Do you want to copy src files to unleashed portal ($apiPath)? (y/n)"
$answer = Read-Host
if ($answer -eq "y") {
    # copy src files to agrvity-angular-app
    $privateSrc = $apiPath+"\private\src" 
    Remove-Item -Path $privateSrc -Recurse -Force -ErrorAction SilentlyContinue
    Copy-Item -Path .\src\agravityAPI-private -Destination $privateSrc -Recurse -Force

    $publicSrc = $apiPath+"\public\src"
    Remove-Item -Path $publicSrc -Recurse -Force -ErrorAction SilentlyContinue 
    Copy-Item -Path .\src\agravityAPI-public -Destination $publicSrc -Recurse -Force

    Write-Host "Copy complete"
}

# publish private and public package to npm
Write-Host "Do you want to publish private and public package to npm? (y/n)"
$answer = Read-Host
if ($answer -eq "y") {
    # publish private package to npm
    Set-Location src/agravityAPI-private
    npm publish --access public
    Set-Location ../agravityAPI-public
    npm publish --access public
    Set-Location ../..
    Write-Host "Publish complete"

    code.cmd .\changelog.md
}
