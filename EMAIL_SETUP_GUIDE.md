# Email Setup Guide for Contact Form

The contact form is configured to send emails to **marantrix@gmail.com** using EmailJS.

## Setup Instructions:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in the EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (marantrix@gmail.com)
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the Marantrix website contact form.
```

4. Set template variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `phone` - Sender's phone (optional)
   - `message` - Message content
   - `to_email` - Recipient email (marantrix@gmail.com)

5. Copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key** (e.g., `abcdefghijklmnop`)

### 5. Update Contact Component
Open `project/src/components/Contact.tsx` and replace these values:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

### 6. Test the Form
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check marantrix@gmail.com inbox for the email

## Email Content Format

When a user submits the form, you'll receive an email with:
- **Subject**: New Contact Form Submission from [User Name]
- **From**: User's name and email
- **Phone**: User's phone number (if provided)
- **Message**: User's message content

## Troubleshooting

### Email not received?
- Check spam/junk folder
- Verify EmailJS service is connected to marantrix@gmail.com
- Check EmailJS dashboard for error logs
- Ensure you've replaced all placeholder IDs in Contact.tsx

### Rate limits?
- Free plan: 200 emails/month
- Upgrade to paid plan for more emails

### Alternative: Web3Forms
If you prefer a simpler solution without account setup:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter marantrix@gmail.com
3. Get your access key
4. Update the form to use Web3Forms API

## Security Notes
- EmailJS credentials are safe to use in frontend code
- They only allow sending emails, not reading them
- Rate limiting prevents abuse
- Consider adding reCAPTCHA for production use
