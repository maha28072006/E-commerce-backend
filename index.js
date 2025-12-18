
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const bookRoutes = require("./routes/bookRoute");
// const authRoutes = require("./routes/authRoute");
// const orderRoutes = require("./routes/orderRoute");

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/books", bookRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/orders", orderRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.json({ 
//     message: "📚 Book Store API",
//     endpoints: {
//       books: "/api/books",
//       auth: "/api/auth",
//       orders: "/api/orders"
//     }
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Something went wrong!" });
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📖 API Documentation: http://localhost:${PORT}`);
// });




require("dotenv").config();   // MUST BE FIRST

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();
app.use(cors({
  origin: "http://13.201.134.109:3000"
}));
// app.use(
//   cors({
//     origin: [
//       "http://13.201.134.109:3000/", // frontend public IP
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(cors({
//   origin: "*",   // for development (later restrict this)
//   methods: ["GET", "POST", "PUT", "DELETE"],
// }));
// app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// routes
app.use("/api/books", require("./routes/bookRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

