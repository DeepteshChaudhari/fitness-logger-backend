import Jwt from "jsonwebtoken";
const secret = "mysecretsdontmess";
const expiration = "6h";

// function for our authenticated routes
export const authMiddleware = (req, res, next) => {
  // allows token to be sent via  req.query or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(400).json({ message: 'You have no token!' });
  }

  // verify token and get user data out of it
  try {
    const { data } = Jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
    return res.status(400).json({ message: 'invalid token!' });
  }

  // send to next endpoint
  next();
}
export const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };

  return Jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
