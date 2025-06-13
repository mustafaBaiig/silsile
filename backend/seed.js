// backend/seed.js
const { Pool } = require('pg');
const products = require('../src/data/products.js');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function seedProducts() {
  try {
    for (const product of products) {
      await pool.query(
        `INSERT INTO products (name, price, image, description)
         VALUES ($1, $2, $3, $4)`,
        [product.name, product.price, product.image, product.description]
      );
    }

    console.log('✅ Products seeded successfully!');
    await pool.end();
  } catch (err) {
    console.error('❌ Error seeding products:', err);
    process.exit(1);
  }
}

seedProducts();
