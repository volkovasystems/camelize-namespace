/*:
	@module-configuration:
		{
			"packageName": "camelize-namespace",
			"fileName": "camelize-namespace.js",
			"moduleName": "camelizeNamespace",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/camelize-namespace.git",
			"testCase": "camelize-namespace-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation
*/
var camelizeNamespace = function camelizeNamespace( namespace ){
	/*:
		@meta-configuration:
			{
				"namespace:required": "string"
			}
		@end-meta-configuration
	*/

	if( NAMESPACE_PATTERN.test( namespace ) ){

	}else{
		var error = new Error( "invalid namespace format" );
		console.error( error );
		throw error;
	}
};

const NAMESPACE_PATTERN = /^(?:[a-zA-Z][a-zA-Z0-9]+[-_ ])*[a-zA-Z][a-zA-Z0-9]+$/;
const NAMESPACE_TERM_PATTERN = /^([a-zA-Z])|[-_ ]([a-zA-Z])/;

( module || { } ).exports = camelizeNamespace;