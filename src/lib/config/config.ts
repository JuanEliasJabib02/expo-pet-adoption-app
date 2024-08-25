import { Config } from './config-interface';
import developmentConfig from './env-variables/development';
import productionConfig from './env-variables/production';
import { validateConfig } from './validate-config';

/* Every time that a new variable in .env file is added is completly neccesary
restart the server and use this command

yarn start --reset-cache

.env file in expo is cached, so we have to "update it" with the last .env version.
*/

/* Flow to add a new variable
1.add it to the config interface
2.add it to production and development env variables with his respective referenc
2.use the command that i mention ahead.


This approach has the following benefits

- Automatic Adaptation: Handles changes in configuration structure without manual updates.
- Reduced Manual Effort: Avoids the need to explicitly list all required fields, minimizing errors.
- Consistent Error Reporting: Provides detailed error messages with exact paths to missing values.
- Scalable: Efficiently manages complex, nested configurations as your project grows.
- Easy Integration: Simplifies adding and validating new configuration variables.
*/

const env = process.env.EXPO_PUBLIC_NODE_ENV || 'development';
const configMap: { [key: string]: Config } = {
	development: developmentConfig,
	production: productionConfig,
};

const config = configMap[env];

validateConfig(config);

export default config;
