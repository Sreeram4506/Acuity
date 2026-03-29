# EmailJS Setup Guide

## Option 1: EmailJS (Recommended)

### Setup Steps:
1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for free account (200 emails/month free)

2. **Create Email Service**
   - Dashboard → Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your email account
   - Note the Service ID

3. **Create Email Template**
   - Dashboard → Email Templates → Create New Template
   - Template content:
   ```
   Subject: New Consultation Request from ACUITY TAX Website
   
   Name: {{from_name}}
   Email: {{from_email}}
   City: {{city}}
   Service: {{service}}
   Message: {{message}}
   ```

4. **Get Your Keys**
   - Go to Account → API Keys
   - Copy your Public Key

5. **Update Code**
   Replace placeholder values in ConsultationForm.jsx:
   ```javascript
   const serviceID = 'your_actual_service_id';
   const templateID = 'your_actual_template_id';
   const publicKey = 'your_actual_public_key';
   ```

## Option 2: Formspree (Alternative)

### Setup:
1. Sign up at https://formspree.io/
2. Create new form
3. Get form endpoint
4. Replace EmailJS code with fetch request

## Option 3: Netlify Forms (If using Netlify)

### Setup:
1. Add `data-netlify="true"` to form
2. Netlify automatically handles form submissions
3. Emails sent to your registered email

## Option 4: Backend API (Most Professional)

### Setup:
1. Create Node.js/Express backend
2. Use Nodemailer for email sending
3. Deploy to Vercel/Netlify/Railway

## Current Status:
- ✅ EmailJS installed
- ✅ Form updated with EmailJS integration
- ⏳ Need to configure EmailJS account

## Testing:
After setup, test form submission to verify emails are received at sreerammulukuri6@gmail.com
