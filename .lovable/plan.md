
# Beechside Bees E-Commerce Implementation Plan
## Updated with Pre-Orders & Stock Notifications

---

## Overview

Transform your honey website into a full-featured e-commerce platform with:
- Product sales (physical + digital)
- **Pre-orders for out-of-stock items** (NEW)
- **Back-in-stock email notifications** (NEW)
- **Estimated restock dates** (NEW)
- User accounts, reviews, blog, newsletter, and FAQ

---

## New Inventory Features

### Pre-Order System
When a product is out of stock but can still be ordered:
- Display "Pre-Order" badge on product card
- Show estimated shipping date
- Allow customers to place orders with clear messaging
- Charge immediately or when product ships (configurable)

### Back-in-Stock Notifications
When a product is out of stock and cannot be pre-ordered:
- Display "Out of Stock" badge
- Show "Notify Me When Available" button
- Collect customer email via popup/inline form
- Automatic email when stock is replenished
- Track notification requests per product

### Estimated Restock Dates
For products that are temporarily unavailable:
- Display estimated availability date on product page
- Format as "Expected back: March 15, 2026" or "Back in ~2 weeks"
- Update automatically or manually through admin

---

## What You'll Get

### Core Shopping Features
- Product catalog with inventory status indicators
- Shopping cart with stock validation
- Secure Shopify checkout
- Order tracking for regular and pre-orders
- Digital download delivery

### Inventory Management Features (NEW)
- Real-time stock status (In Stock, Low Stock, Out of Stock, Pre-Order)
- Pre-order capability with estimated ship dates
- Back-in-stock notification signup
- Automated notification emails when restocked
- Estimated restock date display

### Customer Features
- User accounts with order history
- Digital library for PDF purchases
- Product reviews with verified purchase badges
- Notification preferences management

### Content & Engagement
- Blog for beekeeping content
- FAQ page
- Email newsletter signup
- SEO-optimized pages

---

## Product Status States

```text
+-------------------+------------------------------------------+---------------------------+
| Status            | Customer Experience                      | Available Actions         |
+-------------------+------------------------------------------+---------------------------+
| In Stock          | Normal purchase flow                     | Add to Cart               |
+-------------------+------------------------------------------+---------------------------+
| Low Stock         | "Only X left!" urgency message           | Add to Cart               |
+-------------------+------------------------------------------+---------------------------+
| Pre-Order         | "Pre-Order - Ships ~March 15"            | Pre-Order Now             |
|                   | Clear messaging about wait time          |                           |
+-------------------+------------------------------------------+---------------------------+
| Out of Stock      | "Currently Unavailable"                  | Notify Me                 |
|                   | "Back in stock: ~2 weeks" (if known)     |                           |
+-------------------+------------------------------------------+---------------------------+
| Coming Soon       | New product announcement                 | Notify Me                 |
+-------------------+------------------------------------------+---------------------------+
```

---

## New Pages & Navigation

```text
Current:
+------------------+
|   Landing Page   |
+------------------+

New Structure:
+------------------+     +------------------+     +------------------+
|    Home Page     | --> |   Shop (Browse)  | --> | Product Detail   |
+------------------+     +------------------+     +------------------+
        |                        |                        |
        v                        v                        v
+------------------+     +------------------+     +------------------+
|   About Page     |     |   Shopping Cart  |     |     Checkout     |
+------------------+     +------------------+     +------------------+
        |
        v
+------------------+     +------------------+     +------------------+
|    Blog Page     |     |   Account Area   |     |    FAQ Page      |
+------------------+     +------------------+     +------------------+
```

**Header Navigation**: Home | Shop | Blog | FAQ | Account Icon | Cart Icon

---

## Implementation Phases

### Phase 1: Foundation
**Goal**: Set up Shopify + Supabase backends

1. **Enable Shopify Integration**
   - Create development store (free until you go live)
   - Sync product catalog with inventory tracking
   - Configure shipping from Ponce Inlet, FL

2. **Enable Supabase**
   - User profiles and authentication
   - Newsletter subscribers
   - **Stock notification requests** (NEW)
   - Review storage
   - Digital product access
   - Blog and FAQ content

3. **Authentication Setup**
   - Email/password signup and login
   - Protected account pages
   - Guest notification signup (no account required)

---

### Phase 2: Shopping Experience + Inventory Status
**Goal**: Product browsing with smart stock indicators

1. **Shop Page** (`/shop`)
   - Product grid with status badges
   - Filter by: Category, Availability (In Stock, Pre-Order, All)
   - Sort by: Price, Popularity, Newest

2. **Product Detail Pages** (`/products/:handle`)
   - Large product images
   - **Dynamic stock status display**:
     - In Stock: "Add to Cart" button
     - Low Stock: "Only 3 left - Add to Cart"
     - Pre-Order: "Pre-Order Now - Ships ~[date]"
     - Out of Stock: "Notify Me When Available" + estimated restock
   - Product reviews section

3. **Stock Notification Modal**
   - Email input field
   - Product name confirmation
   - Optional: notification preferences
   - Success confirmation message

4. **Shopping Cart** (`/cart`)
   - Stock validation before checkout
   - Pre-order items clearly marked
   - Estimated shipping dates per item

---

### Phase 3: User Accounts
**Goal**: Personalized customer experience

1. **Account Dashboard** (`/account`)
   - Order overview
   - **Notification subscriptions** (NEW)
   - Quick links

2. **Order History** (`/account/orders`)
   - Regular orders and pre-orders
   - Status tracking (Processing, Awaiting Stock, Shipped, Delivered)
   - Reorder functionality

3. **Notification Preferences** (`/account/notifications`) (NEW)
   - View products you're watching
   - Manage back-in-stock alerts
   - Unsubscribe from specific products

4. **Digital Library** (`/account/library`)
   - Access purchased PDFs
   - Download buttons

---

### Phase 4: Reviews & Social Proof
**Goal**: Build customer trust

1. **Review System**
   - Star ratings (1-5)
   - Written reviews with photos
   - Verified purchase badges
   - Helpful votes

2. **Admin Moderation**
   - Approve/reject reviews
   - Auto-publish for verified purchases

---

### Phase 5: Notifications & Emails
**Goal**: Automated customer communication

1. **Back-in-Stock Notifications**
   - Supabase Edge Function to send emails
   - Triggered when inventory updated
   - Personalized product links
   - One-click unsubscribe

2. **Pre-Order Updates**
   - Shipping date confirmation
   - Delay notifications if needed
   - Shipped notification

3. **Email Templates**
   - Back in stock alert
   - Pre-order confirmation
   - Shipping update
   - Welcome email

---

### Phase 6: Content & Engagement
**Goal**: SEO and customer retention

1. **Blog Section** (`/blog`)
   - Beekeeping tips, recipes, news
   - Share buttons
   - Related posts

2. **FAQ Page** (`/faq`)
   - Collapsible Q&A sections
   - Categories: Ordering, Products, Shipping, Pre-Orders

3. **Newsletter**
   - Footer signup on all pages
   - New product announcements
   - Restock alerts for popular items

---

## Technical Details

### New Database Tables

```text
stock_notifications (NEW)
+--------------------+------------------+
| Column             | Type             |
+--------------------+------------------+
| id                 | uuid (PK)        |
| email              | text             |
| product_id         | text (Shopify)   |
| product_name       | text             |
| user_id            | uuid (FK, null)  |
| notified           | boolean          |
| notified_at        | timestamp        |
| created_at         | timestamp        |
+--------------------+------------------+

profiles
+--------------------+------------------+
| Column             | Type             |
+--------------------+------------------+
| id                 | uuid (PK)        |
| email              | text             |
| full_name          | text             |
| created_at         | timestamp        |
| newsletter_opt     | boolean          |
+--------------------+------------------+

reviews
+--------------------+------------------+
| Column             | Type             |
+--------------------+------------------+
| id                 | uuid (PK)        |
| product_id         | text (Shopify)   |
| user_id            | uuid (FK)        |
| rating             | integer (1-5)    |
| title              | text             |
| content            | text             |
| verified           | boolean          |
| approved           | boolean          |
| helpful_count      | integer          |
| created_at         | timestamp        |
+--------------------+------------------+

newsletter_subscribers
+--------------------+------------------+
| Column             | Type             |
+--------------------+------------------+
| id                 | uuid (PK)        |
| email              | text (unique)    |
| subscribed_at      | timestamp        |
| source             | text             |
+--------------------+------------------+

blog_posts
+--------------------+------------------+
| Column             | Type             |
+--------------------+------------------+
| id                 | uuid (PK)        |
| title              | text             |
| slug               | text (unique)    |
| content            | text (markdown)  |
| excerpt            | text             |
| image_url          | text             |
| category           | text             |
| published          | boolean          |
| published_at       | timestamp        |
+--------------------+------------------+
```

### New Components

| Component | Purpose |
|-----------|---------|
| `StockStatusBadge.tsx` | Display In Stock/Low Stock/Pre-Order/Out of Stock |
| `NotifyMeButton.tsx` | Button that opens notification modal |
| `NotifyMeModal.tsx` | Email capture for back-in-stock alerts |
| `PreOrderInfo.tsx` | Display pre-order details and ship date |
| `RestockEstimate.tsx` | Show "Back in stock: ~2 weeks" |
| `ProductCard.tsx` | Product display with dynamic stock status |
| `CartItem.tsx` | Cart row with pre-order indicators |

### New Hooks

| Hook | Purpose |
|------|---------|
| `useProductInventory.ts` | Get real-time stock status from Shopify |
| `useStockNotification.ts` | Subscribe to back-in-stock alerts |
| `useNotificationPreferences.ts` | Manage user's notification subscriptions |

### Edge Functions

| Function | Purpose |
|----------|---------|
| `send-stock-notification` | Email customers when product restocked |
| `send-preorder-update` | Email pre-order status updates |
| `check-inventory-changes` | Webhook to detect stock changes |

---

## Product Card UI Examples

**In Stock:**
```text
+---------------------------+
|        [Product Image]    |
|    "Best Seller" badge    |
+---------------------------+
| Wildflower Honey    $15   |
| 12 oz                     |
| Light, floral, perfectly  |
| sweet...                  |
|                           |
| [====== Add to Cart ====] |
+---------------------------+
```

**Low Stock:**
```text
+---------------------------+
|        [Product Image]    |
|    "Only 3 Left!" badge   |
+---------------------------+
| Wildflower Honey    $15   |
| 12 oz                     |
| Light, floral...          |
|                           |
| [====== Add to Cart ====] |
+---------------------------+
```

**Pre-Order:**
```text
+---------------------------+
|        [Product Image]    |
|    "Pre-Order" badge      |
+---------------------------+
| Wildflower Honey    $15   |
| 12 oz                     |
| Ships ~March 15, 2026     |
|                           |
| [==== Pre-Order Now ====] |
+---------------------------+
```

**Out of Stock:**
```text
+---------------------------+
|        [Product Image]    |
|   "Out of Stock" badge    |
+---------------------------+
| Wildflower Honey    $15   |
| 12 oz                     |
| Back in ~2 weeks          |
|                           |
| [===== Notify Me ======]  |
+---------------------------+
```

---

## Costs Summary

| Service | Development | Production |
|---------|-------------|------------|
| Shopify | Free (dev store) | ~$29-79/month after 30-day trial |
| Supabase | Free tier | Free tier likely sufficient |
| Email (Resend) | Free tier (100/day) | ~$20/month if needed |
| Lovable | Your current plan | Your current plan |

---

## Next Steps After Approval

1. **Enable Shopify** - Create development store with inventory tracking
2. **Enable Supabase** - Set up database for users, reviews, notifications
3. **Build Phase 1** - Foundation and authentication
4. **Build Phase 2** - Shop with stock status features
5. Continue through remaining phases

Each phase is functional independently, so you can launch incrementally.
