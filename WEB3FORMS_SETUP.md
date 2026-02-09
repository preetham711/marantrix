# Web3Forms Setup Guide

Web3Forms is a simpler alternative to EmailJS - no OAuth, no complex setup!

## Quick Setup (2 minutes):

### 1. Get Your Access Key
1. Go to **https://web3forms.com/**
2. Enter your email: **marantrix@gmail.com**
3. Click "Create Access Key"
4. Copy the access key (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Update Contact.tsx
Open `project/src/components/Contact.tsx` and replace this line:

```typescript
const accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY';
```

With your actual access key:

```typescript
const accessKey = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'; // Your key here
```

### 3. Verify Email
1. Check marantrix@gmail.com inbox
2. Click the verification link from Web3Forms
3. Your form is now active!

### 4. Test the Form
1. Go to your website
2. Fill out the contact form
3. Click "Send Message"
4. Check marantrix@gmail.com inbox

## Features:
- ✅ No OAuth required
- ✅ No complex setup
- ✅ 250 submissions/month (free)
- ✅ Spam protection included
- ✅ Email notifications
- ✅ Works immediately after verification

## Email Format:
You'll receive emails with:
- Subject: "New Contact from [User Name]"
- From: Marantrix Website
- User's name, email, phone, and message

## Troubleshooting:
- **Not receiving emails?** Check spam folder
- **"Invalid access key"?** Make sure you copied the full key
- **Need more submissions?** Upgrade to paid plan ($5/month for 1000 submissions)

## Alternative: FormSubmit
If Web3Forms doesn't work, try FormSubmit.co:
1. Go to https://formsubmit.co/
2. Use marantrix@gmail.com
3. No registration needed!
