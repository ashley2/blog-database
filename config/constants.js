module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGOLAB_URI || process.env.MONGODB_URI || "mongodb://localhost/blog",
  SECRET: process.env.JWT_SECRET || "This is an exposed secret!"
}
