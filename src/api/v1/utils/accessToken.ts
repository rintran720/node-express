import jwt from 'jsonwebtoken';
import config from '../../../common/config';

export type JwtPayload = {
  userId: string;
};

export function generateAccessToken(payload: JwtPayload) {
  return jwt.sign(payload, config.server.tokenSecret, {
    expiresIn: config.server.expiresIn,
  });
}

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, config.server.tokenSecret);
};

export const decodeAccessToken = (token: string) => {
  return jwt.decode(token);
};

const AccessTokenUtil = {
  generateAccessToken,
  verifyAccessToken,
  decodeAccessToken,
};

export default AccessTokenUtil;
