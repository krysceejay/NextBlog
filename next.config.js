module.exports = {
    reactStrictMode: true,
    env: {
      BASE_URL: process.env.BASE_URL,
      REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
      CLOUD_UPDATE_PRESET: process.env.CLOUD_UPDATE_PRESET,
      CLOUD_NAME: process.env.CLOUD_NAME,
      CLOUD_API: process.env.CLOUD_API,
      PORT: process.env.PORT,
      MONGO_URI: process.env.MONGO_URI,
      JWT_SECRET: process.env.JWT_SECRET,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      USER_PASS: process.env.USER_PASS,
    }
  }