const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());          // Allow frontend to connect
app.use(express.json());  // Handle JSON requests

// ✅ Test API route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working" });
});

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (placeholder)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/goglobal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('GoGlobal Logistics Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
