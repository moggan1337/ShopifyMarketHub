import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
// In-memory store (replace with database)
const vendors = new Map();
const products = new Map();
// Middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
};
// Routes - Vendors
app.post('/api/vendors', (req, res) => {
    const vendor = {
        id: `vendor_${Date.now()}`,
        name: req.body.name,
        email: req.body.email,
        status: 'pending',
        commission: 10,
    };
    vendors.set(vendor.id, vendor);
    res.status(201).json(vendor);
});
app.get('/api/vendors', (_req, res) => {
    res.json(Array.from(vendors.values()));
});
app.get('/api/vendors/:id', (req, res) => {
    const id = req.params.id;
    const vendor = vendors.get(id);
    if (!vendor) {
        return res.status(404).json({ error: 'Vendor not found' });
    }
    res.json(vendor);
});
app.patch('/api/vendors/:id/approve', (req, res) => {
    const id = req.params.id;
    const vendor = vendors.get(id);
    if (!vendor) {
        return res.status(404).json({ error: 'Vendor not found' });
    }
    vendor.status = 'approved';
    vendors.set(vendor.id, vendor);
    res.json(vendor);
});
// Routes - Products
app.post('/api/products', (req, res) => {
    const product = {
        id: `product_${Date.now()}`,
        vendorId: req.body.vendorId,
        title: req.body.title,
        price: req.body.price,
        status: 'pending',
    };
    products.set(product.id, product);
    res.status(201).json(product);
});
app.get('/api/products', (req, res) => {
    const vendorId = req.query.vendorId;
    if (vendorId && typeof vendorId === 'string') {
        res.json(Array.from(products.values()).filter(p => p.vendorId === vendorId));
    }
    else {
        res.json(Array.from(products.values()));
    }
});
app.patch('/api/products/:id/approve', (req, res) => {
    const id = req.params.id;
    const product = products.get(id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    product.status = 'approved';
    products.set(product.id, product);
    res.json(product);
});
// Health check
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', vendors: vendors.size, products: products.size });
});
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`ShopifyMarketHub server running on port ${PORT}`);
});
export { app };
//# sourceMappingURL=index.js.map