# EmailJS Troubleshooting Guide

## Current Setup:
- Service ID: `service_nHJgzpa`
- Template ID: `template_uu15hwu`
- Public Key: `hVN8O-gWBwGRYzl7x`
- Recipient: marantrix@gmail.com

## Common Issues & Solutions:

### 1. Template Variables Mismatch
Your EmailJS template must use these exact variable names:

```
{{from_name}}
{{from_email}}
{{phone}}
{{message}}
```

**To Fix:**
1. Go to EmailJS Dashboard → Email Templates
2. Click on your template (`template_uu15hwu`)
3. Make sure your template content uses these variables:

```
Subject: New Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

4. Click "Save"

### 2. Gmail Service Not Fully Connected
The error "Request had insufficient authentication scopes" means Gmail needs more permissions.

**To Fix:**
1. Go to EmailJS Dashboard → Email Services
2. Find your Gmail service (`service_nHJgzpa`)
3. Click "Disconnect"
4. Click "Connect" again
5. When Google asks for permissions, make sure to:
   - Allow "Send email on your behalf"
   - Check all permission boxes
6. Complete the authorization

### 3. Test Your Template
1. Go to EmailJS Dashboard → Email Templates
2. Click on `template_uu15hwu`
3. Click "Test it" button
4. Fill in test values:
   - from_name: Test User
   - from_email: test@example.com
   - phone: 123-456-7890
   - message: This is a test message
5. Click "Send Test"
6. Check marantrix@gmail.com inbox

### 4. Check Browser Console
Open browser console (F12) and look for errors when submitting the form. Common errors:

- **"Request had insufficient authentication scopes"** → Reconnect Gmail service with full permissions
- **"Template not found"** → Check template ID is correct
- **"Service not found"** → Check service ID is correct
- **"Invalid public key"** → Check public key is correct

### 5. Verify EmailJS Dashboard
1. Go to https://dashboard.emailjs.com/
2. Check "Email Services" - Gmail should show "Connected"
3. Check "Email Templates" - Your template should be active
4. Check "Account" - You should have requests left (200/month on free plan)

### 6. Alternative: Use Web3Forms
If EmailJS continues to have issues, you can use Web3Forms instead:

1. Go to https://web3forms.com/
2. Enter marantrix@gmail.com
3. Get your access key
4. Update Contact.tsx to use Web3Forms API instead

## Quick Test Steps:
1. Open browser console (F12)
2. Go to contact form
3. Fill out form
4. Click "Send Message"
5. Check console for errors
6. Check EmailJS dashboard for sent emails
7. Check marantrix@gmail.com inbox (and spam folder)

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
