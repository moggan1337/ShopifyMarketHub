# ShopifyMarketHub - Development Guide

## Project Overview

**ShopifyMarketHub** is a multi-vendor marketplace platform built on Shopify. It enables multiple vendors to sell on a single Shopify store with vendor management, product approval workflows, and commission tracking.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js 20+, TypeScript 5.6 |
| **Framework** | Express.js |
| **Database** | PostgreSQL with Prisma (extensible) |
| **Payments** | Shopify Payments + Split |

## Project Structure

```
ShopifyMarketHub/
├── src/
│   ├── server/
│   │   ├── index.ts         # Express server
│   │   ├── routes/
│   │   │   ├── vendors.ts   # Vendor API
│   │   │   ├── products.ts  # Product API
│   │   │   └── orders.ts    # Order API
│   │   └── middleware/
│   │       └── auth.ts      # Auth middleware
│   └── types/
├── prisma/
│   └── schema.prisma        # Database schema
├── package.json
├── tsconfig.json
├── CLAUDE.md
└── README.md
```

## API Endpoints

### Vendors
- `POST /api/vendors` - Register new vendor
- `GET /api/vendors` - List all vendors
- `GET /api/vendors/:id` - Get vendor details
- `PATCH /api/vendors/:id/approve` - Approve vendor

### Products
- `POST /api/products` - Add product
- `GET /api/products` - List products (filter by vendorId)
- `PATCH /api/products/:id/approve` - Approve product

## LLM Integration

Uses MiniMax API for:
- Vendor application review automation
- Product description generation
- Fraud detection
- Analytics summaries

## Features

- Vendor registration and approval workflow
- Product submission and moderation
- Commission calculation
- Payout management
- Analytics dashboard
