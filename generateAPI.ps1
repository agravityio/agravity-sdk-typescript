# check REST API endpoint /version if backend is running, catch it and if it is not running: exit
$version = (Invoke-RestMethod -Uri http://localhost:7072/api/version -Method Get -ContentType "application/json" -ErrorAction SilentlyContinue).version
if ($null -eq $version) {
    Write-Host "Please start backend before generating API"
    exit
}

# echo apiVersion
Write-Host "Generate API with apiVersion: $version"

# wait for user input
Write-Host "Press any key to continue ..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# delete folder .\src without error output
Remove-Item -Path .\src -Recurse -Force -ErrorAction SilentlyContinue

# generate API
$params="apiModulePrefix=Agravity,configurationPrefix=Agravity,modelFileSuffix=.agravity,serviceFileSuffix=.agravity,ngVersion=14.0.0"
npx @openapitools/openapi-generator-cli generate -i http://localhost:7071/api/openapi/v3.json -g typescript-angular -o src/agravityAPI-private/ --additional-properties=$params
$params="apiModulePrefix=AgravityPublic,configurationPrefix=AgravityPublic,modelFileSuffix=.pub.agravity,serviceFileSuffix=.pub.agravity,ngVersion=14.0.0"
npx @openapitools/openapi-generator-cli generate -i http://localhost:7072/api/openapi/v3.json -g typescript-angular -o src/agravityAPI-public/ --additional-properties=$params

Write-Host "Generate complete"

function Replace-StringInFiles {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory=$true, Position=0)]
        [string]$FolderPath,
        [Parameter(Mandatory=$true, Position=1)]
        [string]$SearchString,
        [Parameter(Mandatory=$true, Position=2)]
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


Replace-StringInFiles -FolderPath "src" -SearchString "add_properties\?: \{ \[key: string\]: object; \};" -ReplaceString "add_properties?: { [key: string]: any; };"
Write-Host "Replace add_properties complete"
Replace-StringInFiles -FolderPath "src" -SearchString "default_value\?: object;" -ReplaceString "default_value?: any;"
Write-Host "Replace default_value complete"
Replace-StringInFiles -FolderPath "src" -SearchString "custom\?: \{ \[key: string\]: object; \};" -ReplaceString "custom?: any;"
Write-Host "Replace custom complete"
Replace-StringInFiles -FolderPath "src" -SearchString "ai\?: object;" -ReplaceString "ai?: any;"
Write-Host "Replace ai complete"


# add line in file src\agravityAPI-private\api\assetManagement.agravity.ts after line 482
$fileContent = Get-Content "src\agravityAPI-private\api\assetManagement.agravity.ts"
$fileContent[230] = $fileContent[230] + ",`n" + "                body: assetBulkUpdate"
# write file
$fileContent | Set-Content "src\agravityAPI-private\api\assetManagement.agravity.ts"

Write-Host "Add line in file src\agravityAPI-private\api\assetManagement.agravity.ts after line 482 complete"


$fileContent = Get-Content "src\agravityAPI-private\api\assetVersioning.agravity.ts"
$fileContent[148] = "            // headers = headers.set('Content-Type', httpContentTypeSelected);"
# write file
$fileContent | Set-Content "src\agravityAPI-private\api\assetVersioning.agravity.ts"

Write-Host "Remove line in file src\agravityAPI-private\api\assetVersioning.agravity.ts after line 150 complete"


$fileContent = Get-Content "src\agravityAPI-public\api\publicCollectionSecureUpload.pub.agravity.ts"
$fileContent[207] = "            // headers = headers.set('Content-Type', httpContentTypeSelected);"
# write file
$fileContent | Set-Content "src\agravityAPI-public\api\publicCollectionSecureUpload.pub.agravity.ts"

Write-Host "Remove line in file src\agravityAPI-public\api\publicCollectionSecureUpload.pub.agravity.ts after line 150 complete"


Get-ChildItem -Path "src" -Recurse -File | ForEach-Object {(Get-Content $_.FullName -Raw) -replace "`r`n", "`n" | Set-Content $_.FullName -NoNewline }
