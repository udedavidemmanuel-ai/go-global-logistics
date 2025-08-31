const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

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