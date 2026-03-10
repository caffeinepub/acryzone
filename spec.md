# AcryZone Business Website

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Multi-page premium business website for AcryZone (acrylic & UV print frame brand)
- Pages: Home, About Us, Products, Custom Orders, Gallery, Contact Us
- Product catalog: Premium Acrylic UV Print Frames, Islamic Wall Art Frames, Custom Photo Frames, 3D Acrylic Frames, Home Decor Acrylic Frames
- Order inquiry form (name, email, phone, product interest, message)
- Contact form submissions stored in backend
- WhatsApp floating contact button
- Mobile-responsive navigation
- Gallery section with product images

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: Store contact/order inquiry form submissions (name, email, phone, product, message, timestamp). Expose submit and list (admin) endpoints.
2. Frontend: 6-page SPA with React Router. Black/white/gold luxury design system. Sections per page as described. WhatsApp floating button. Responsive layout.
3. Images: Generate hero, product, and gallery images via AI image generation.
