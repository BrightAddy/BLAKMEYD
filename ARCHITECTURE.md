# BLAK MEYD
## Website Implementation Architecture

> **Brand:** BLAK MEYD  
> **Tagline:** Look different.  
> **Scope:** A clear structure for the public website, consultation journey, client portal, and administration.

---

### PROJECT SCOPE
This document defines what the Blak Meyd website will implement. It intentionally excludes technology stacks, coding instructions, frameworks, libraries, and other technical implementation details.

---

### 01 · WEBSITE STRUCTURE

| Area | What It Contains |
| :--- | :--- |
| **Public Website** | 7 main pages available to every visitor. |
| **Authentication** | Client account creation and login. |
| **Client Portal** | Private dashboard and client-specific information. |
| **Booking & Orders** | Consultation booking first, garment ordering after consultation. |
| **Administration** | Blak Meyd's internal management area. |

---

### 02 · PUBLIC WEBSITE
All seven main pages are accessible to visitors whether they have an account or not.

#### 01 Home
The main introduction to Blak Meyd and the starting point for the client journey.  
**Sections:**
1. Hero
2. Introduction
3. Featured Collections
4. The Blak Meyd Experience
5. Bespoke Process Preview
6. Bridal & Special Occasions
7. Featured Work
8. Why Blak Meyd
9. Testimonials
10. Booking Availability
11. Consultation CTA
12. Footer

#### 02 About
The story, philosophy, bespoke approach, craftsmanship and client experience of Blak Meyd.  
**Sections:**
- About
- Brand Story
- Brand Philosophy
- Bespoke Approach
- Craftsmanship
- Client Experience
- Policies & Client Information
- Consultation CTA
- Footer

#### 03 Collections
A clear presentation of the garment types and occasions Blak Meyd creates.  
**Sections:**
- Collections Introduction
- Collection Categories
- Featured Work
- Portfolio Gallery
- Individual Garment / Project View
- Related Work
- Consultation CTA
- Footer

#### 04 Process
Explains the journey from consultation and design through production, fittings and completion.  
**Sections:**
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

#### 05 Lookbook
A dedicated visual showcase of Blak Meyd's work, positioned after the process.  
**Sections:**
- Lookbook Introduction
- Lookbook Gallery
- Work / Garment Categories
- Individual Work View
- Consultation CTA
- Footer

#### 06 Contact
Provides the ways clients can contact Blak Meyd and information about the studio.  
**Sections:**
- Contact Introduction
- Contact Information
- WhatsApp
- Email
- Instagram
- General Enquiry
- Studio / Location Information
- Consultation CTA
- Footer

#### 07 Book a Consultation
The consultation booking experience. It is separate from garment ordering.  
**Sections:**
- Consultation Introduction
- Consultation Type
- Consultation Fee
- Appointment Availability
- Basic Booking Details
- Booking Summary
- Consultation Payment
- Booking Confirmation

---

### 03 · COLLECTIONS
The Collections page uses the documented garment and occasion categories. No additional categories are introduced.

**Documented Collection Categories:**
1. Kente Gown
2. Reception Outfit
3. Bridal Robe
4. Bridesmaid Outfits
5. Wedding Guest
6. Photoshoot Outfits
7. Graduation Outfits
8. Prom Dress
9. Other Outfits

---

### 04 · CONSULTATION AND GARMENT ORDER ARE SEPARATE

| Consultation Journey | Garment Order Journey |
| :--- | :--- |
| Book a consultation | Consultation completed |
| Choose consultation type | Design development |
| Choose available date/time | Garment order arrangement |
| Enter basic booking details | Measurements |
| Pay consultation fee | Design / colour / details |
| Booking confirmed | Fabric and order information |
| Attend consultation | Pricing and required payment |
| | Order confirmation |
| | Production → fittings → completion |

*The consultation booking does not create a garment order. Garment-order information is collected after the consultation when the client proceeds with production.*

---

### 05 · CLIENT ACCOUNT & PORTAL
The public website remains open to everyone. An account is used for private, client-specific information and the ongoing Blak Meyd journey.

| Account Page | Purpose |
| :--- | :--- |
| **Sign Up** | Create a client account before using the private client area. |
| **Login** | Secure access to the client's information. |
| **Forgot / Reset Password** | Recover access to an existing account. |
| **Client Dashboard** | The client's central private area for their Blak Meyd journey. |
| **My Consultations** | Upcoming and previous consultation information. |
| **My Garment Orders** | Garment orders belonging to the client. |
| **Order Progress** | Progress information for an active garment order. |
| **Payments** | Consultation and garment payment information. |
| **Fittings** | Information related to fitting stages and appointments. |
| **Profile** | The client's account and personal information. |

*The client account remains the same throughout the journey. A client does not create a new account when moving from consultation to garment ordering.*

---

### 06 · CLIENT JOURNEYS

#### New Client
1. Visit any public page
2. Book a consultation
3. Create account
4. Choose consultation type
5. Choose available appointment
6. Enter booking details
7. Complete consultation payment
8. Receive booking confirmation
9. Access Client Dashboard

#### Existing Client
1. Login
2. Open Client Dashboard
3. View consultations, orders, payments, fittings and progress
4. Continue or manage the relevant client journey

#### Garment Order
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

### 07 · ADMINISTRATION
The admin area is private and used by Blak Meyd to manage appointments, clients, garment orders, payments, portfolio content and booking availability.

| Admin Area | Purpose |
| :--- | :--- |
| **Dashboard** | Overview of the system and current activity. |
| **Working Hours** | Define the studio's working days and hours. |
| **Availability** | Control available, blocked and unavailable appointment periods. |
| **Calendar** | View appointments and availability across dates. |
| **Appointments** | Manage consultation bookings. |
| **Clients** | Manage client records and their relationship with Blak Meyd. |
| **Garment Orders** | Manage garment orders after consultation. |
| **Payments** | Record and manage consultation and garment payment information. |
| **Portfolio** | Manage the work displayed in Collections and Lookbook. |
| **Booking Availability Announcement** | Control the availability message shown to visitors, including the current booking situation. |

---

### 08 · AVAILABILITY SYSTEM
Booking availability is dynamic. The client sees actual appointment slots generated from Blak Meyd's working hours, blocked periods, and existing bookings.

| Admin Sets | System Provides | Client Sees |
| :--- | :--- | :--- |
| Working days | Available appointment slots | Available dates and times |
| Opening / closing hours | Updated availability | Current availability |
| Break periods | Booked slots removed | Unavailable booked times |
| Days off / holidays | Blocked dates removed | Only bookable options |
| Blocked dates / times | Calendar remains synchronized | Current booking situation |
| Appointment duration | | |

---

### 09 · FINAL ARCHITECTURE

#### PUBLIC WEBSITE · 7 PAGES
1. Home
2. About
3. Collections
4. Process
5. Lookbook
6. Contact
7. Book a Consultation

#### AUTHENTICATION
8. Sign Up
9. Login
10. Forgot / Reset Password

#### CLIENT PORTAL
11. Client Dashboard
12. My Consultations
13. My Garment Orders
14. Order Progress
15. Payments
16. Fittings
17. Profile

#### FUNCTIONAL CONFIRMATION / ORDER PAGES
18. Booking Confirmation
19. Garment Order
20. Order Confirmation

#### ADMINISTRATION
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

### Implementation Principle
> **Public content stays public.**  
> **Client information stays private.**  
> **Consultation booking and garment ordering remain separate processes.**  
> **One client account follows the client through the entire Blak Meyd journey.**
