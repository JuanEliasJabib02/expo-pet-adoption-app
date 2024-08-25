/* Every time that a new variable in .env file is added is completly neccesary
restart the server and use this command

yarn start --reset-cache

.env file in expo is cached, so we have to "update it" with the last .env version.
*/

enum Environment {
	Production = 'production',
	Development = 'development',
}

const { PROD_API_KEY_EXAMPLE, DEV_API_KEY_EXAMPLE } = process.env;

const NODE_ENV = process.env.EXPO_PUBLIC_NODE_ENV;

export const isProd = NODE_ENV === Environment.Production;

export const api_key_example = isProd
	? PROD_API_KEY_EXAMPLE
	: DEV_API_KEY_EXAMPLE;
