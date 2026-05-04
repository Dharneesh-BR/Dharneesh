# EmailJS Setup Guide

## Overview
The contact form now uses EmailJS to send emails directly to `dharneeshbr@gmail.com`. This guide will help you set up EmailJS properly.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Important**: Use `dharneeshbr@gmail.com` for the connected email
6. Copy the **Service ID** (it will look like `service_xxxxxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Fill in the template details:

### Template Content:
```
Subject: New Contact Form Submission from Website

Content:
Hello,

You have received a new contact form submission with the following details:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{contact_number}}
Message: {{message}}

Best regards,
Your Website Contact Form
```

4. Save the template and copy the **Template ID** (it will look like `template_xxxxxxxxxx`)

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (it will look like `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Update ContactUs.js
Open `src/pages/ContactUs.js` and replace the placeholder values:

```javascript
// Replace these with your actual EmailJS credentials:
const serviceId = 'service_your_service_id'; // Replace with your Service ID
const templateId = 'template_your_template_id'; // Replace with your Template ID
const publicKey = 'your_public_key'; // Replace with your Public Key
```

## Step 6: Test the Form
1. Start your development server: `npm start`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check if you receive the email at `dharneeshbr@gmail.com`

## Fallback Option
If EmailJS is not configured, the form will fall back to opening the user's default email client with pre-filled data. This ensures the contact form always works.

## Features Implemented
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Form reset after submission
- ✅ Fallback to email client
- ✅ Beautiful UI with animations
- ✅ Responsive design

## Troubleshooting
- **Email not sending**: Check your EmailJS credentials
- **Service not found**: Verify your Service ID is correct
- **Template not found**: Verify your Template ID is correct
- **Invalid public key**: Check your Public Key in EmailJS dashboard

## EmailJS Free Plan Limits
- 200 emails per month
- 2 email services
- 3 email templates
- 1,000 contacts

For higher volume, consider upgrading to a paid plan.
