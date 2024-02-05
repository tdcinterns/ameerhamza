// Middleware to check if a session exists
const requireSession = (req, res, next) => {
    if (req.session && req.session.user) {
      // User is authenticated, continue to the next middleware/route handler
      next();
    } else {
      // User is not authenticated, send a 401 Unauthorized response
      res.status(401).json({ message: 'Unauthorized' });
    }
  };

  export default requireSession;