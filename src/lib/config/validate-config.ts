import { Config } from "./config-interface";

export const validateConfig = (config: Config) => {
  const validateField = (obj: any, path: string[] = []) => {
    if (typeof obj !== "object" || obj === null) {
      if (obj === undefined || obj === "") {
        throw new Error(`Missing configuration value at ${path.join(".")}`);
      }
      return;
    }
    for (const key in obj) {
      validateField(obj[key], path.concat(key));
    }
  };

  validateField(config);
};
