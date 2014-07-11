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
var camelizeNamespace = function camelizeNamespace( namespace, doNotCamelizeFirstLetter ){
	/*:
		@meta-configuration:
			{
				"namespace:required": "string",
				"doNotCamelizeFirstLetter:optional": boolean
			}
		@end-meta-configuration
	*/

	if( NAMESPACE_PATTERN.test( namespace ) ){
        return namespace
            .toLowerCase( )
            .replace( NAMESPACE_TERM_PATTERN,
                function onReplaced( match, divideCharacter ){
                    if( divideCharacter ){
                        return match.replace( divideCharacter, "" ).toUpperCase( );
                    }else{
                        return match.toUpperCase( );
                    }
                } )
            .replace( FIRST_LETTER_PATTERN,
                function onReplaced( match ){
                    if( doNotCamelizeFirstLetter ){
                        return match.toLowerCase( );
                    }else{
                        return match;
                    }
                } );
	}else{
		var error = new Error( "invalid namespace format" );
		console.error( error );
		throw error;
	}
};

const NAMESPACE_PATTERN = /^(?:[a-zA-Z][a-zA-Z0-9]*[-_ ])*[a-zA-Z][a-zA-Z0-9]*$/;
const NAMESPACE_TERM_PATTERN = /^[a-zA-Z]|([-_ ])[a-zA-Z]/g;
const FIRST_LETTER_PATTERN = /^[a-zA-Z]/;

( module || { } ).exports = camelizeNamespace;