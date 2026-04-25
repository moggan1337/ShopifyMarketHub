import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Types
interface Vendor {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'approved' | 'suspended';
  commission: number;
}

interface Product {
  id: string;
  vendorId: string;
  title: string;
  price: number;
  status: 'pending' | 'approved' | 'rejected';
}

// In-memory store (replace with database)
const vendors = new Map<string, Vendor>();
const products = new Map<string, Product>();

// Middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
};

// Routes - Vendors
app.post('/api/vendors', (req: Request, res: Response) => {
  const vendor: Vendor = {
    id: `vendor_${Date.now()}`,
    name: req.body.name,
    email: req.body.email,
    status: 'pending',
    commission: 10,
  };
  vendors.set(vendor.id, vendor);
  res.status(201).json(vendor);
});

app.get('/api/vendors', (_req: Request, res: Response) => {
  res.json(Array.from(vendors.values()));
});

app.get('/api/vendors/:id', (req: Request, res: Response) => {
  const id = req.params.id as string;
  const vendor = vendors.get(id);
  if (!vendor) {
    return res.status(404).json({ error: 'Vendor not found' });
  }
  res.json(vendor);
});

app.patch('/api/vendors/:id/approve', (req: Request, res: Response) => {
  const id = req.params.id as string;
  const vendor = vendors.get(id);
  if (!vendor) {
    return res.status(404).json({ error: 'Vendor not found' });
  }
  vendor.status = 'approved';
  vendors.set(vendor.id, vendor);
  res.json(vendor);
});

// Routes - Products
app.post('/api/products', (req: Request, res: Response) => {
  const product: Product = {
    id: `product_${Date.now()}`,
    vendorId: req.body.vendorId,
    title: req.body.title,
    price: req.body.price,
    status: 'pending',
  };
  products.set(product.id, product);
  res.status(201).json(product);
});

app.get('/api/products', (req: Request, res: Response) => {
  const vendorId = req.query.vendorId as string | undefined;
  if (vendorId && typeof vendorId === 'string') {
    res.json(Array.from(products.values()).filter(p => p.vendorId === vendorId));
  } else {
    res.json(Array.from(products.values()));
  }
});

app.patch('/api/products/:id/approve', (req: Request, res: Response) => {
  const id = req.params.id as string;
  const product = products.get(id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  product.status = 'approved';
  products.set(product.id, product);
  res.json(product);
});

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', vendors: vendors.size, products: products.size });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`ShopifyMarketHub server running on port ${PORT}`);
});

export { app };
