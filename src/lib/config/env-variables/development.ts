import { Config } from "../config";

const developmentConfig: Config = {
  api_keys: {
    example: process.env.EXPO_PUBLIC_DEV_API_KEY_EXAMPLE || "",
    example_2: process.env.EXPO_PUBLIC_DEV_API_KEY_EXAMPLE_2 || "",
    // Add more dev keys here
  },
  url_api_backend: process.env.EXPO_PUBLIC_DEV_BACKEND_API_URL || "",
};

export default developmentConfig;
