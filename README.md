
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
3. Install required production dependencies: `npm install pg nodemailer`
4. Configure environment variables (see below)
5. Choose a deployment method for the API endpoint (see Deployment Options below)

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

1. Express.js on a Node.js server:
   ```javascript
   import express from 'express';
   import { handleContactSubmission } from './src/api/submit-contact';

   const app = express();
   app.use(express.json());
   app.post('/api/submit-contact', handleContactSubmission);
   app.listen(3000, () => console.log('Server running on port 3000'));
   ```

2. Supabase Edge Functions:
   ```typescript
   // submit-contact.ts edge function
   import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
   import { handleContactSubmission } from '../src/api/submit-contact.ts';

   serve(async (req) => {
     const body = await req.json();
     const response = { body: {}, status: 200 };
     
     await handleContactSubmission(
       { method: req.method, body },
       { 
         status: (code) => { response.status = code; return response; },
         json: (data) => { response.body = data; return response; }
       }
     );
     
     return new Response(JSON.stringify(response.body), {
       status: response.status,
       headers: { 'Content-Type': 'application/json' }
     });
   });
   ```

3. Next.js API Routes:
   ```typescript
   // pages/api/submit-contact.ts
   import { handleContactSubmission } from '../../src/api/submit-contact';

   export default handleContactSubmission;
   ```

Choose the option that best fits your infrastructure requirements.

## Required Dependencies

For production, make sure to install:
```
npm install pg nodemailer
npm install -D @types/pg @types/nodemailer
```
