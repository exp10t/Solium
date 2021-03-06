/**
 * @fileoverview Schema of the soliumrc config deprecated in v1.0.0.
 * @author Raghav Dua <duaraghav8@gmail.com>
 */

'use strict';

// A fully qualified object for this Schema is:
/*
{
	"custom-rules-filename": "~/my-life/my-rules",
	"rules": {
		"deprecated-suicide": false,
		"pragma-on-top": true
	}
}
*/

var Schema = {
	type: 'object',

	properties: {
		'custom-rules-filename': {
			oneOf: [
				{ type: 'string', minLength: 1 },
				{ type: 'null' }
			]
		},

		rules: {
			type: 'object',
			patternProperties: {
				'^.+$': { type: 'boolean' }
			},
			additionalProperties: false
		}
	},

	required: ['rules'],

	additionalProperties: false
};


module.exports = Schema;