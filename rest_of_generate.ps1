

# git discard all neccessary files

# git discard files
git checkout -- .\.gitignore
git checkout -- .\generateAPI.ps1
git checkout -- .\Agravity.Public.sln
git checkout -- .\extract_thirdparty_licenses.bat
git checkout -- .\icon.png
git checkout -- .\nuget.exe
git checkout -- .\openapitools.json
git checkout -- .\src\Agravity.Public\Agravity.Public.nuspec
git checkout -- .\src\Agravity.Public\Agravity.Public.csproj
git checkout -- .\src\Agravity.Public\THIRD-PARTY-NOTICES.TXT

#replace old version with new version in csproj file
$csproj = Get-Content .\src\Agravity.Public\Agravity.Public.csproj
$csproj = $csproj -replace "<Version>.*</Version>", "<Version>$apiVersion</Version>"
$csproj | Set-Content .\src\Agravity.Public\Agravity.Public.csproj

# echo apiVersion
Write-Host "Build and Publish with apiVersion: $apiVersion"

# build project with release
dotnet build .\src\Agravity.Public\Agravity.Public.csproj -c Release

# execute extract third party licenses
.\extract_thirdparty_licenses.bat

# build nuget package with version
#create command 
nuget pack -Build -OutputDirectory .\out .\src\Agravity.Public\Agravity.Public.csproj -Version $apiVersion

# Set API Key (once)
# nuget setApiKey xyz

# prompt to publish
Write-Host "Publish package in version $apiVersion? (y/n)"
$publish = Read-Host

# check if publish
if ($publish -eq "y") {
    # publish nuget package
    dotnet nuget push .\out\Agravity.Public."$apiVersion".nupkg -s https://api.nuget.org/v3/index.json
}


