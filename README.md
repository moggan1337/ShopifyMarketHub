# ShopifyMarketHub

<p align="center">
  <img src="https://img.shields.io/badge/Shopify-Marketplace-95BF47?style=for-the-badge&logo=shopify&logoColor=white" alt="Shopify">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/PRs-Welcome-blue?style=for-the-badge" alt="PRs Welcome">
</p>

> 🏪 **Multi-Vendor Marketplace Engine** — Complete marketplace solution with vendor portals, commission splitting, dispute resolution, automated payouts, and Shopify integration.

## About

ShopifyMarketHub transforms your Shopify store into a full-featured multi-vendor marketplace. Vendors get their own dashboards to manage products, track sales, and receive automated payouts via Stripe Connect, while you maintain control over the platform with powerful admin tools and flexible commission rules. Ideal for Shopify merchants looking to launch a multi-vendor marketplace without building from scratch.

## ✨ Features

### Vendor Management
- 📊 **Vendor Dashboard** — Sales analytics, earnings, performance metrics
- 🏪 **Vendor Registration** — Application flow with approval workflow
- ⭐ **Vendor Ratings** — Review system with dispute handling
- 📝 **Vendor Profiles** — Custom branding, banners, and bio
- 📈 **Payout History** — Complete payout tracking and statements
- 🔐 **Vendor Verification** — ID verification and KYC support

### Commerce Engine
- 💰 **Commission Engine** — Flexible rules, tiered commissions, category-based rates
- 💳 **Split Payments** — Automatic vendor payouts via Stripe Connect
- 📦 **Shipping Rules** — Per-vendor, flat rate, weight-based shipping
- 🛒 **Cart Consolidation** — Multi-vendor cart with single checkout
- 📜 **Invoices** — Auto-generated vendor invoices
- 🏷️ **Product Approval** — Admin review before products go live

### Order Management
- 📦 **Order Tracking** — Per-vendor fulfillment tracking
- 🔄 **Split Fulfillment** — Multiple vendors, one order
- 📋 **Dispute Resolution** — Ticket system with mediation workflow
- 📧 **Automated Notifications** — Email/SMS updates to buyers and vendors

### Admin Tools
- ⚙️ **Platform Settings** — Commission rates, payout schedules, policies
- 📊 **Analytics Dashboard** — Platform-wide metrics, vendor rankings
- 🔔 **Notifications** — Email, SMS, in-app notifications
- 👥 **User Management** — Admins, support staff, vendor management
- 📱 **PWA Ready** — Mobile-optimized admin and vendor app

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           ShopifyMarketHub                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                      Frontend (Next.js)                            │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│  │
│  │  │  Customer  │  │   Vendor    │  │    Admin    │  │   Public    ││  │
│  │  │   Store    │  │   Portal    │  │    Panel    │  │    Pages    ││  │
│  │  │            │  │            │  │            │  │            ││  │
│  │  │ • Browse   │  │ • Dashboard │  │ • Overview │  │ • Home     ││  │
│  │  │ • Cart     │  │ • Products  │  │ • Vendors  │  │ • Login    ││  │
│  │  │ • Checkout │  │ • Orders   │  │ • Orders   │  │ • Register ││  │
│  │  │ • Profile  │  │ • Earnings  │  │ • Payouts  │  │            ││  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘│  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                    API Gateway (GraphQL + REST)                     │  │
│  │  • Authentication (JWT, OAuth2)                                      │  │
│  │  • Rate Limiting                                                    │  │
│  │  • Request Validation                                               │  │
│  │  • Logging & Tracing                                                │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                        Core Services                                │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│  │
│  │  │   Vendor    │  │    Order    │  │ Commission  │  │   Payout    ││  │
│  │  │   Service   │  │   Service   │  │   Service   │  │   Service   ││  │
│  │  │             │  │             │  │             │  │             ││  │
│  │  │ • Registry  │  │ • Creation  │  │ • Calculator│  │ • Stripe    ││  │
│  │  │ • Approval  │  │ • Tracking  │  │ • Splitting │  │ • Transfers ││  │
│  │  │ • Profiles  │  │ • Fulfillment│ │ • Routing  │  │ • Statements││  │
│  │  │ • Ratings   │  │ • Disputes  │  │ • Reports  │  │             ││  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘│  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                        Integrations                                 │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│  │
│  │  │   Shopify   │  │   Stripe    │  │    Email    │  │     SMS     ││  │
│  │  │    Store    │  │   Connect   │  │    (SES)    │  │  (Twilio)   ││  │
│  │  │             │  │             │  │             │  │             ││  │
│  │  │ • Products  │  │ • Vendors    │  │ • Onboarding│  │ • Order     ││  │
│  │  │ • Orders    │  │ • Payouts   │  │ • Updates   │  │   Updates   ││  │
│  │  │ • Customers │  │ • Disputes  │  │ • Alerts    │  │ • 2FA       ││  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘│  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/moggan1337/ShopifyMarketHub.git
cd ShopifyMarketHub

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure .env with your credentials:
# - SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
# - SHOPIFY_ACCESS_TOKEN=shpat_xxxxx
# - DATABASE_URL=postgresql://user:pass@localhost:5432/markethub
# - STRIPE_SECRET_KEY=sk_xxxxx
# - STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Run database migrations
npm run db:migrate

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🚀 Quick Start

```bash
# 1. Configure Stripe Connect in .env
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# 2. Set commission rules
COMMISSION_RATE=0.15  # 15% platform fee
COMMISSION_TIER_1=0.10  # 10% for vendors with $0-$10k sales
COMMISSION_TIER_2=0.08  # 8% for vendors with $10k-$50k sales
COMMISSION_TIER_3=0.05  # 5% for vendors with $50k+ sales

# 3. Start the marketplace
npm run dev

# 4. Access admin panel at http://localhost:3000/admin

# 5. Configure your marketplace settings

# 6. Invite your first vendor
```

## 🛠️ Commands Reference

### Vendor Management

```bash
# List all vendors
npm run vendors:list

# Approve a vendor application
npm run vendors:approve -- --id vendor_123

# Suspend a vendor
npm run vendors:suspend -- --id vendor_123

# Generate vendor payout report
npm run vendors:payouts -- --period=2024-10
```

### Commission Management

```bash
# Update commission rate
npm run commission:set -- --rate=0.15

# Set tiered commissions
npm run commission:tiers -- --tier1=0.10 --tier2=0.08 --tier3=0.05

# Generate commission report
npm run commission:report -- --start=2024-01-01 --end=2024-10-31
```

### Order Operations

```bash
# List all orders
npm run orders:list -- --status=processing

# Process a disputed order
npm run orders:dispute -- --id=order_123 --action=refund

# Generate order report
npm run orders:report -- --format=csv --output=./reports/orders.csv
```

## 📁 Project Structure

```
shopify-market-hub/
├── src/
│   ├── server/
│   │   ├── index.ts             # Express server entry
│   │   ├── routes/
│   │   │   ├── vendors.ts       # Vendor API routes
│   │   │   ├── products.ts      # Product API routes
│   │   │   ├── orders.ts        # Order API routes
│   │   │   ├── payouts.ts        # Payout API routes
│   │   │   └── admin.ts         # Admin API routes
│   │   ├── services/
│   │   │   ├── vendorService.ts  # Vendor business logic
│   │   │   ├── orderService.ts  # Order processing
│   │   │   ├── commissionService.ts
│   │   │   ├── payoutService.ts  # Stripe Connect payouts
│   │   │   └── disputeService.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts          # JWT authentication
│   │   │   └── vendorOnly.ts    # Vendor access control
│   │   └── graphql/
│   │       ├── schema.ts         # GraphQL schema
│   │       └── resolvers/        # GraphQL resolvers
│   ├── client/
│   │   ├── app/                  # Next.js app
│   │   │   ├── (main)/          # Customer storefront
│   │   │   ├── vendor/          # Vendor portal
│   │   │   └── admin/           # Admin panel
│   │   └── components/
│   │       ├── vendor/          # Vendor components
│   │       ├── admin/           # Admin components
│   │       └── shared/          # Shared components
│   ├── lib/
│   │   ├── shopify.ts           # Shopify API client
│   │   ├── stripe.ts            # Stripe Connect
│   │   └── email.ts             # Email service
│   └── types/
│       ├── vendor.ts
│       ├── order.ts
│       └── payout.ts
├── prisma/
│   └── schema.prisma            # Database schema
├── scripts/
│   ├── seed.ts                  # Database seeding
│   └── backfill.ts             # Data migration
├── tests/
│   ├── services/
│   └── integration/
├── package.json
└── README.md
```

## 🔌 API Reference

### REST Endpoints

#### Vendors

```typescript
// Register new vendor
POST /api/vendors
{
  "businessName": "Acme Store",
  "email": "vendor@acme.com",
  "phone": "+1234567890",
  "stripeConnectAccountId": "acct_xxxxx"  // Created via Stripe Connect OAuth
}

// Get vendor details
GET /api/vendors/:id

// Update vendor
PATCH /api/vendors/:id
{
  "businessName": "Acme Corp",
  "bannerUrl": "https://...",
  "bio": "We sell premium products"
}

// Approve vendor
PATCH /api/vendors/:id/approve

// Get vendor dashboard stats
GET /api/vendors/:id/stats
```

#### Products

```typescript
// Vendor creates product
POST /api/products
{
  "vendorId": "vendor_123",
  "title": "Premium Widget",
  "description": "...",
  "price": 2999,  // cents
  "compareAtPrice": 3999,
  "sku": "WIDGET-001",
  "inventory": 100,
  "images": ["https://..."]
}

// Admin approves product
PATCH /api/products/:id/approve

// List vendor products
GET /api/vendors/:id/products

// Update product
PATCH /api/products/:id
```

#### Orders

```typescript
// Create order (checkout)
POST /api/orders
{
  "customerId": "customer_123",
  "lines": [
    { "productId": "prod_1", "vendorId": "vendor_1", "quantity": 2 },
    { "productId": "prod_2", "vendorId": "vendor_2", "quantity": 1 }
  ],
  "shippingAddress": { ... }
}

// Get order details
GET /api/orders/:id

// Update order status
PATCH /api/orders/:id/status
{ "status": "fulfilled" }

// Create dispute
POST /api/orders/:id/disputes
{ "reason": "product_not_received", "description": "..." }
```

#### Payouts

```typescript
// Get vendor payout schedule
GET /api/vendors/:id/payouts

// Get vendor balance
GET /api/vendors/:id/balance

// Trigger manual payout
POST /api/vendors/:id/payouts
{ "amount": 50000 }  // cents
```

### GraphQL Schema

```graphql
type Vendor {
  id: ID!
  businessName: String!
  email: String!
  status: VendorStatus!
  commissionRate: Float!
  balance: Money!
  products: [Product!]!
  orders: [Order!]!
  payouts: [Payout!]!
  rating: Float
  createdAt: DateTime!
}

type Order {
  id: ID!
  orderNumber: String!
  customer: Customer!
  lines: [OrderLine!]!
  total: Money!
  status: OrderStatus!
  vendorPayouts: [VendorPayout!]!
  dispute: Dispute
  createdAt: DateTime!
}

type VendorPayout {
  vendor: Vendor!
  amount: Money!
  status: PayoutStatus!
  stripeTransferId: String
  createdAt: DateTime!
}

enum VendorStatus {
  PENDING
  APPROVED
  SUSPENDED
}

enum OrderStatus {
  PENDING
  PROCESSING
  SHIPPED
  DELIVERED
  DISPUTED
  REFUNDED
}
```

## 🔧 Configuration

### Environment Variables

```env
# Shopify
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_ACCESS_TOKEN=shpat_xxxxx
SHOPIFY_API_VERSION=2024-10

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/markethub

# Stripe Connect
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Commissions
DEFAULT_COMMISSION_RATE=0.15
PAYOUT_SCHEDULE=weekly  # daily, weekly, monthly
PAYOUT_MINIMUM=1000  # cents

# Email (AWS SES)
AWS_ACCESS_KEY_ID=xxxxx
AWS_SECRET_ACCESS_KEY=xxxxx
AWS_SES_REGION=us-east-1
EMAIL_FROM=noreply@yourmarketplace.com

# SMS (Twilio)
TWILIO_ACCOUNT_SID=xxxxx
TWILIO_AUTH_TOKEN=xxxxx
TWILIO_PHONE_NUMBER=+1234567890

# Auth
JWT_SECRET=your-secret-here
JWT_EXPIRY=7d
```

### Commission Configuration

```json
{
  "default_rate": 0.15,
  "tiers": [
    { "threshold": 0, "rate": 0.15 },
    { "threshold": 10000, "rate": 0.12 },
    { "threshold": 50000, "rate": 0.10 },
    { "threshold": 100000, "rate": 0.08 }
  ],
  "categories": {
    "electronics": 0.12,
    "clothing": 0.15,
    "home": 0.15,
    "food": 0.20
  },
  "payout_schedule": "weekly",
  "payout_minimum": 1000
}
```

## 💰 Stripe Connect Integration

### Vendor Onboarding Flow

```typescript
import { stripe } from '@/lib/stripe';

// 1. Create Stripe Connect Express account for vendor
const account = await stripe.accounts.create({
  type: 'express',
  email: 'vendor@example.com',
  business_type: 'individual',
  metadata: { vendor_id: 'vendor_123' }
});

// 2. Generate onboarding link
const accountLink = await stripe.accountLinks.create({
  account: account.id,
  refresh_url: 'https://yourmarketplace.com/vendor/onboarding/refresh',
  return_url: 'https://yourmarketplace.com/vendor/onboarding/complete',
  type: 'account_onboarding'
});

// 3. Redirect vendor to Stripe
res.redirect(accountLink.url);
```

### Payout Flow

```typescript
// When order is delivered and no disputes:
// 1. Calculate vendor portion
const vendorPortion = order.total * (1 - commissionRate);

// 2. Transfer to vendor's Stripe account
const transfer = await stripe.transfers.create({
  amount: vendorPortion,
  currency: 'usd',
  destination: vendor.stripeConnectAccountId,
  metadata: {
    order_id: order.id,
    vendor_id: vendor.id
  }
});
```

## 📊 Dashboard Screenshots

| Dashboard | Features |
|-----------|----------|
| **Admin Overview** | Total revenue, vendor count, active orders, disputes |
| **Vendor Portal** | Sales, earnings, products, orders, payout history |
| **Order Management** | Filter by status, vendor, date; bulk actions |
| **Analytics** | Revenue charts, top vendors, conversion rates |

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run integration tests
npm run test:integration

# Run specific test
npm test -- services/vendorService.test.ts

# E2E tests
npm run test:e2e
```

## 📚 Documentation

- [Getting Started](docs/getting-started.md)
- [Vendor Guide](docs/vendor-guide.md)
- [Admin Guide](docs/admin-guide.md)
- [API Reference](docs/api.md)
- [Stripe Connect Setup](docs/stripe-connect.md)
- [Deployment](docs/deployment.md)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/ShopifyMarketHub.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-marketplace-feature`
4. **Install** dependencies: `npm install`
5. **Make** your changes and **test**: `npm test`
6. **Commit** your changes: `git commit -m 'Add amazing marketplace feature'`
7. **Push** to the branch: `git push origin feature/amazing-marketplace-feature`
8. **Open** a Pull Request

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

Copyright (c) 2024 moggan1337

---

<p align="center">
  Built with ❤️ for multi-vendor marketplaces
</p>
