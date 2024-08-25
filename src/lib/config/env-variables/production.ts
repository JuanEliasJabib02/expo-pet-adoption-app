import { Config } from '../config-interface';

const productionConfig: Config = {
	api_keys: {
		example: process.env.EXPO_PUBLIC_PROD_API_KEY_EXAMPLE || '',
		example_2: process.env.EXPO_PUBLIC_PROD_API_KEY_EXAMPLE_2 || '',
		// Add more prod keys here
	},
	url_api_backend: process.env.EXPO_PUBLIC_PROD_BACKEND_API_URL || '',
};

export default productionConfig;
