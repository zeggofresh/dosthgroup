# EmailJS Setup Instructions

To enable the contact form functionality, you need to configure EmailJS. Follow these steps:

## 1. Sign up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account

## 2. Create an Email Service
1. After logging in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Note down the **Service ID** (you'll need this later)

## 3. Create an Email Template
1. Go to the "Email Templates" tab
2. Click "Create new template"
3. Customize your template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name (Dosth Construction)
4. Note down the **Template ID** (you'll need this later)

## 4. Get Your Public Key
1. Go to the "Account" tab
2. Find your **Public Key** in the API Keys section

## 5. Configure the Application
1. Open `src/components/ContactForm.jsx`
2. Replace the placeholders:
   - `"YOUR_SERVICE_ID"` with your actual Service ID
   - `"YOUR_TEMPLATE_ID"` with your actual Template ID
   - `"YOUR_PUBLIC_KEY"` with your actual Public Key

3. Open `src/main.jsx`
4. Replace `"YOUR_PUBLIC_KEY"` with your actual Public Key

## Example Configuration
```javascript
// In ContactForm.jsx
const SERVICE_ID = "service_x1a2b3c4d5e";
const TEMPLATE_ID = "template_y1z2a3b4c5d";
const PUBLIC_KEY = "a1b2c3d4e5f6_g7h8i9j0k1l2m3n4o5p6";

// In main.jsx
emailjs.init('a1b2c3d4e5f6_g7h8i9j0k1l2m3n4o5p6');
```

## Testing
After configuration, test the form by:
1. Filling out the contact form
2. Submitting it
3. Checking if you receive the email
4. Verifying that WhatsApp opens with the message

## Notes
- The WhatsApp integration will work immediately with the provided phone number
- Email functionality requires proper EmailJS configuration
- The form will still submit to WhatsApp even if EmailJS is not configured