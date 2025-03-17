
-- This is the schema you would use to set up your PostgreSQL database

-- Create the contact_submissions table
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed BOOLEAN DEFAULT FALSE
);

-- Create an index on email for faster lookups
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on created_at for sorting and filtering
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Sample query to get all submissions
-- SELECT * FROM contact_submissions ORDER BY created_at DESC;

-- Sample query to mark a submission as processed
-- UPDATE contact_submissions SET processed = TRUE WHERE id = 1;
