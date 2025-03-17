
// This file provides a type-safe way to access environment variables
// You would replace this with your actual backend environment configuration

export interface EnvVariables {
  // PostgreSQL connection
  POSTGRES_HOST: string;
  POSTGRES_PORT: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
  
  // Email configuration
  EMAIL_USER: string;
  EMAIL_PASSWORD: string;
  EMAIL_TO: string;
}

// This is just a placeholder - in a real environment,
// you would use process.env or another method appropriate for your backend
export const getEnvVariables = (): EnvVariables => {
  // In a real implementation, validate that all required vars are present
  return {
    POSTGRES_HOST: 'localhost',
    POSTGRES_PORT: '5432',
    POSTGRES_USER: 'postgres',
    POSTGRES_PASSWORD: 'your_password',
    POSTGRES_DB: 'contact_form_db',
    EMAIL_USER: 'your.email@gmail.com',
    EMAIL_PASSWORD: 'your_app_password',
    EMAIL_TO: 'recipient@example.com',
  };
};

/*
Example .env file structure:

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_secure_password
POSTGRES_DB=contact_form_db

EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_TO=your.email@example.com
*/
