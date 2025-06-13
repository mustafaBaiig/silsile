// backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // required for Neon
  }
});

// Root test route
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// GET /api/products route
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add this for GET /api/orders from browser
app.get('/api/orders', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// POST /api/orders - Save order to DB
app.post('/api/orders', async (req, res) => {
  const {
    fullName,
    email,
    phoneNumber,
    streetAddress,
    city,
    postalCode,
    items
  } = req.body;

  if (!fullName || !email || !phoneNumber || !streetAddress || !city || !postalCode || !items) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO orders
        (full_name, email, phone_number, street_address, city, postal_code, items)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        fullName,
        email,
        phoneNumber,
        streetAddress,
        city,
        postalCode,
        JSON.stringify(items)
      ]
    );

    res.status(201).json({ success: true, order: result.rows[0] });
  } catch (err) {
    console.error('Error inserting order:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
