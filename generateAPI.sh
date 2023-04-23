rm -rf src/agravityAPI-private/
npx @openapitools/openapi-generator-cli generate -i http://localhost:7071/api/openapi/v3.json -g typescript-angular -o src/agravityAPI-private/ --additional-properties=apiModulePrefix=Agravity,configurationPrefix=Agravity,modelFileSuffix=.agravity,serviceFileSuffix=.agravity,ngVersion=14.0.0
# ,useSingleRequestParameter=true,ngVersion=11.0.0
# ,npmName="@agravity/private"
rm -rf src/agravityAPI-public/
npx @openapitools/openapi-generator-cli generate -i http://localhost:7072/api/openapi/v3.json -g typescript-angular -o src/agravityAPI-public/ --additional-properties=apiModulePrefix=AgravityPublic,configurationPrefix=AgravityPublic,modelFileSuffix=.pub.agravity,serviceFileSuffix=.pub.agravity,ngVersion=14.0.0
# ,useSingleRequestParameter=true,ngVersion=11.0.0
# ,npmName="@agravity/public"


function replace_in_files()
{
ESCAPED_KEYWORD=$(printf '%s\n' "$1" | sed -e 's/[]\/$*.^[]/\\&/g');
ESCAPED_REPLACE=$(printf '%s\n' "$2" | sed -e 's/[\/&]/\\&/g')
find . -type f -name "*.ts" -print0 | xargs -0 sed -i '' -e "$3s/$ESCAPED_KEYWORD/$ESCAPED_REPLACE/g"
}

function replace_in_file()
{
ESCAPED_KEYWORD=$(printf '%s\n' "$1" | sed -e 's/[]\/$*.^[]/\\&/g');
ESCAPED_REPLACE=$(printf '%s\n' "$2" | sed -e 's/[\/&]/\\&/g')
sed -i -e "$4s/$ESCAPED_KEYWORD/$ESCAPED_REPLACE/g" $3
}

replace_in_files "default_value?: object;" "default_value?: any;"
replace_in_files "custom?: { [key: string]: object; };" "custom?: any;"
replace_in_files "ai?: object;" "ai?: any;"
replace_in_files  "add_properties?: { [key: string]: object; };" "add_properties?: { [key: string]: any; };" 
    
# replace_in_files "'image/xyz' | 'application/json'}): Observable<string>" "'image/xyz'}): Observable<Blob>" 
# replace_in_files "'image/xyz' | 'application/json'}): Observable<HttpResponse<string>>;" "'image/xyz'}): Observable<HttpResponse<Blob>>;"
# replace_in_files "'image/xyz' | 'application/json'}): Observable<HttpEvent<string>>;" "'image/xyz'}): Observable<HttpEvent<Blob>>;"

replace_in_file "headers = headers.set('Content-Type', httpContentTypeSelected);" "//headers = headers.set('Content-Type', httpContentTypeSelected);" "src/agravityAPI-private/api/assetVersioning.agravity.ts" "125,160"
replace_in_file "headers = headers.set('Content-Type', httpContentTypeSelected);" "//headers = headers.set('Content-Type', httpContentTypeSelected);" "src\agravityAPI-public\api\publicCollectionSecureUpload.pub.agravity.ts" "200,220"

#linenr=$(awk '/\}\/imageedit/{ print NR; exit }' "v4\agravityAPI-private\api\assetOperations.agravity.ts")
#replace_in_file "<string>" "<Blob>" "v4\agravityAPI-private\api\assetOperations.agravity.ts" $linenr
#linenr2=$(($linenr + 10))
#replace_in_file "responseType: <any>responseType_," "responseType: <any>'blob'," "v4\agravityAPI-private\api\assetOperations.agravity.ts" $linenr,$linenr2

#linenr=$(awk '/\}\/resize/{ print NR; exit }' "v4\agravityAPI-private\api\assetOperations.agravity.ts")
#replace_in_file "<string>" "<Blob>" "v4\agravityAPI-private\api\assetOperations.agravity.ts" $linenr
#linenr2=$(($linenr + 10))
#replace_in_file "responseType: <any>responseType_," "responseType: <any>'blob'," "v4\agravityAPI-private\api\assetOperations.agravity.ts" $linenr,$linenr2
