
// This file describes how to implement the contact form submission API

/**
 * DEVELOPMENT USAGE:
 * During development, form submissions are handled by the Vite dev server
 * using the mock API middleware configured in vite.config.ts
 * 
 * PRODUCTION IMPLEMENTATION:
 * For production, you'll need to implement this API endpoint in your backend.
 * Below is an example implementation for reference.
 */

// PostgreSQL connection is handled here
import { Pool } from 'pg';
import nodemailer from 'nodemailer';
import { getEnvVariables } from '../config/env';

/*
Required environment variables (save these in a .env file):
- POSTGRES_HOST
- POSTGRES_PORT
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_DB
- EMAIL_USER
- EMAIL_PASSWORD
- EMAIL_TO
*/

// This is a complete production-ready implementation
// Create PostgreSQL connection pool
const createPool = () => {
  const env = getEnvVariables();
  return new Pool({
    host: env.POSTGRES_HOST,
    port: parseInt(env.POSTGRES_PORT),
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DB,
  });
};

// Email transporter setup
const createTransporter = () => {
  const env = getEnvVariables();
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASSWORD,
    },
  });
};

// Handler function for different backend environments
export async function handleContactSubmission(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Extract data from request body
  const { email, phone, message } = req.body;
  
  try {
    const pool = createPool();
    const transporter = createTransporter();
    const env = getEnvVariables();
    
    // 1. Save to PostgreSQL
    console.log('Saving to PostgreSQL:', { email, phone, message });
    await pool.query(
      'INSERT INTO contact_submissions (email, phone, message, created_at) VALUES ($1, $2, $3, NOW())',
      [email, phone, message]
    );

    // 2. Send email notification
    console.log('Sending email notification to:', env.EMAIL_TO);
    await transporter.sendMail({
      from: env.EMAIL_USER,
      to: env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ 
      success: true,
      message: 'Your message has been saved and we have been notified.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Error processing your request. Please try again later.' 
    });
  }
}

/*
USAGE IN DIFFERENT ENVIRONMENTS:

1. Express.js:
```
import express from 'express';
import { handleContactSubmission } from './submit-contact';

const app = express();
app.use(express.json());
app.post('/api/submit-contact', handleContactSubmission);
```

2. Supabase Edge Function:
```
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { handleContactSubmission } from './submit-contact.ts';

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

3. Next.js API Route:
```
import { handleContactSubmission } from '../../src/api/submit-contact';

export default handleContactSubmission;
```
*/

// Add these dependencies to your project:
// npm install pg nodemailer
// npm install -D @types/pg @types/nodemailer
