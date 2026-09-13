# BLAK MEYD — WEBSITE PROJECT REQUIREMENTS

> **Source:** Blak Meyd Website Implementation Architecture  
> **Purpose:** Functional source of truth for website implementation.

## 1. Project Scope

The website consists of:

- Public Website
- Authentication
- Client Portal
- Booking & Orders
- Administration

The public website remains accessible to visitors whether or not they have an account.

---

# 2. Public Website

The public website contains **7 main pages**.

## 2.1 Home

Main introduction to Blak Meyd and starting point for the client journey.

### Sections
- Hero
- Introduction
- Featured Collections
- The Blak Meyd Experience
- Bespoke Process Preview
- Bridal & Special Occasions
- Featured Work
- Why Blak Meyd
- Testimonials
- Booking Availability
- Consultation CTA
- Footer

## 2.2 About

The story, philosophy, bespoke approach, craftsmanship and client experience of Blak Meyd.

### Sections
- About
- Brand Story
- Brand Philosophy
- Bespoke Approach
- Craftsmanship
- Client Experience
- Policies & Client Information
- Consultation CTA
- Footer

## 2.3 Collections

Clear presentation of garment types and occasions Blak Meyd creates.

### Sections
- Collections Introduction
- Collection Categories
- Featured Work
- Portfolio Gallery
- Individual Garment / Project View
- Related Work
- Consultation CTA
- Footer

### Documented Collection Categories

Do not introduce additional categories unless approved.

1. Kente Gown
2. Reception Outfit
3. Bridal Robe
4. Bridesmaid Outfits
5. Wedding Guest
6. Photoshoot Outfits
7. Graduation Outfits
8. Prom Dress
9. Other Outfits

## 2.4 Process

Explains the journey from consultation and design through production, fittings and completion.

### Sections
- Process Introduction
- Consultation
- Custom Design
- Design Changes
- Creative Brief
- Fabric & Design Details
- Measurements
- Payment
- Order Confirmation
- Production
- Fittings
- Final Finishing
- Collection / Delivery
- Production Timelines
- Express Orders
- Process CTA
- Footer

## 2.5 Lookbook

Dedicated visual showcase of Blak Meyd's work.

### Sections
- Lookbook Introduction
- Lookbook Gallery
- Work / Garment Categories
- Individual Work View
- Consultation CTA
- Footer

## 2.6 Contact

Provides ways clients can contact Blak Meyd and studio information.

### Sections
- Contact Introduction
- Contact Information
- WhatsApp
- Email
- Instagram
- General Enquiry
- Studio / Location Information
- Consultation CTA
- Footer

## 2.7 Book a Consultation

Consultation booking experience. It is separate from garment ordering.

### Sections
- Consultation Introduction
- Consultation Type
- Consultation Fee
- Appointment Availability
- Basic Booking Details
- Booking Summary
- Consultation Payment
- Booking Confirmation

---

# 3. Consultation and Garment Order Separation

**Critical business rule:** Consultation booking and garment ordering are separate processes.

A consultation booking **does not create a garment order**.

Garment-order information is collected after the consultation when the client proceeds with production.

## Consultation Journey

1. Book a consultation
2. Choose consultation type
3. Choose available date/time
4. Enter basic booking details
5. Pay consultation fee
6. Booking confirmed
7. Attend consultation

## Garment Order Journey

1. Consultation completed
2. Design development
3. Garment order arrangement
4. Measurements
5. Design / colour / details
6. Fabric and order information
7. Pricing and required payment
8. Order confirmation
9. Production
10. Fittings
11. Final payment
12. Collection / delivery

---

# 4. Authentication

The same client account follows the client through the entire Blak Meyd journey.

A client must **not** create a new account when moving from consultation to garment ordering.

## Required Pages

### Sign Up
Create a client account before using the private client area.

### Login
Secure access to the client's information.

### Forgot / Reset Password
Recover access to an existing account.

---

# 5. Client Portal

The Client Portal is private and contains client-specific information.

## Client Dashboard
Central private area for the client's Blak Meyd journey.

## My Consultations
Display upcoming and previous consultation information.

## My Garment Orders
Display garment orders belonging to the client.

## Order Progress
Display progress information for an active garment order.

## Payments
Display consultation and garment payment information.

## Fittings
Display information related to fitting stages and appointments.

## Profile
Display/manage the client's account and personal information.

---

# 6. Client Journeys

## New Client

1. Visit any public page
2. Book a consultation
3. Create account
4. Choose consultation type
5. Choose available appointment
6. Enter booking details
7. Complete consultation payment
8. Receive booking confirmation
9. Access Client Dashboard

## Existing Client

1. Login
2. Open Client Dashboard
3. View consultations, orders, payments, fittings and progress
4. Continue or manage the relevant client journey

## Garment Order

1. Consultation completed
2. Proceed with garment
3. Complete garment order information
4. Confirm design, pricing and required payment
5. Order confirmed
6. Production
7. Fittings
8. Final payment
9. Collection / delivery

---

# 7. Administration

The Admin Area is private and is used by Blak Meyd to manage:

- Appointments
- Clients
- Garment orders
- Payments
- Portfolio content
- Booking availability

## Admin Areas

### Admin Dashboard
Overview of the system and current activity.

### Working Hours
Define studio working days and hours.

### Availability
Control available, blocked and unavailable appointment periods.

### Calendar
View appointments and availability across dates.

### Appointments
Manage consultation bookings.

### Clients
Manage client records and their relationship with Blak Meyd.

### Garment Orders
Manage garment orders after consultation.

### Payments
Record and manage consultation and garment payment information.

### Portfolio
Manage work displayed in Collections and Lookbook.

### Booking Availability Announcement
Control the availability message shown to visitors, including the current booking situation.

---

# 8. Dynamic Availability System

Booking availability is dynamic.

The client sees actual appointment slots generated from Blak Meyd's:

- Working hours
- Blocked periods
- Existing bookings
- Break periods
- Days off / holidays
- Appointment duration

## Admin Sets

- Working days
- Opening / closing hours
- Break periods
- Days off / holidays
- Blocked dates / times
- Appointment duration

## System Provides

- Available appointment slots
- Updated availability
- Booked slots removed
- Blocked dates removed
- Calendar synchronization

## Client Sees

- Available dates and times
- Current availability
- Only bookable options
- Current booking situation

---

# 9. Functional Confirmation / Order Pages

The application requires:

1. Booking Confirmation
2. Garment Order
3. Order Confirmation

---

# 10. Complete Application Architecture

## Public Website

1. Home
2. About
3. Collections
4. Process
5. Lookbook
6. Contact
7. Book a Consultation

## Authentication

8. Sign Up
9. Login
10. Forgot / Reset Password

## Client Portal

11. Client Dashboard
12. My Consultations
13. My Garment Orders
14. Order Progress
15. Payments
16. Fittings
17. Profile

## Functional Confirmation / Order

18. Booking Confirmation
19. Garment Order
20. Order Confirmation

## Administration

21. Admin Dashboard
22. Working Hours
23. Availability
24. Calendar
25. Appointments
26. Clients
27. Garment Orders
28. Payments
29. Portfolio
30. Booking Availability Announcement

---

# 11. Implementation Principles

## Public vs Private

- Public website content stays public.
- Client information stays private.
- Client-specific dashboard information is accessible only to the appropriate authenticated client.

## Consultation vs Garment Order

- Booking a consultation must not automatically create a garment order.
- Garment ordering begins only after the consultation is completed and the client decides to proceed with production.

## Single Client Account

- One client account follows the client throughout the entire journey.
- Do not create a separate account for garment ordering.

## Availability

- Appointment availability must be dynamic.
- Available slots must reflect working hours, blocked periods and existing bookings.
- Booked/unavailable slots must not be offered to another client.

## Intended Client Journey

**Public Website → Consultation → Client Account → Consultation → Garment Order → Production → Fittings → Final Payment → Collection / Delivery**

---

# 12. Out of Scope

The source architecture intentionally does not specify:

- Technology stack
- Framework
- Libraries
- Coding language
- Database technology
- Hosting provider
- Specific payment provider
- Additional collection categories
- Additional website pages

Do not introduce additional business requirements or categories unless explicitly approved.

---

# 13. Source of Truth

This file is derived from the **Blak Meyd Website Implementation Architecture** document.

Preserve the documented:

- Website structure
- Terminology
- Client journeys
- Separation between consultation and garment ordering
- Single-account client model
- Dynamic availability requirements
- Public/private information boundaries
