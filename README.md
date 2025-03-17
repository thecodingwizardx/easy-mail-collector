
# Contact Form Application

This is a contact form application that allows users to submit contact information, which is stored in a PostgreSQL database and sends email notifications.

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

During development, form submissions are handled by a mock API endpoint that logs data to the console.

## Production Setup

For production deployment, you'll need to:

1. Set up a PostgreSQL database
2. Create the required database tables using the SQL in `src/db/schema.sql`
3. Implement the API endpoint described in `src/api/submit-contact.ts`
4. Configure environment variables (see below)

## Environment Variables

Create a `.env` file with the following variables:

```
# PostgreSQL Configuration
POSTGRES_HOST=your-db-host
POSTGRES_PORT=5432
POSTGRES_USER=your-db-user
POSTGRES_PASSWORD=your-db-password
POSTGRES_DB=your-db-name

# Email Configuration
EMAIL_USER=your-gmail-account@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=recipient@example.com
```

Note for Gmail: You'll need to use an "App Password" rather than your regular Gmail password. You can generate one at https://myaccount.google.com/apppasswords (requires 2FA to be enabled on your Google account).

## Database Schema

The application uses a single table for storing contact submissions. The schema is available in `src/db/schema.sql`.

## Deployment Options

You can deploy the API endpoint using:
1. Supabase Edge Functions
2. Express.js on a Node.js server
3. Serverless Functions (AWS Lambda, Vercel Functions, etc.)
4. Next.js API Routes (if migrating to Next.js)

Choose the option that best fits your infrastructure requirements.
