import 'dotenv/config';
import app from './app.js';
import { logger } from './middleware.js';

// Get port from environment
const PORT = process.env.PORT || 3000;

// IMPORTANT: Only listen if NOT running on Vercel
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    logger.info({ type: 'server', port: PORT }, `Local server running on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel to handle as a serverless function
export default app;
