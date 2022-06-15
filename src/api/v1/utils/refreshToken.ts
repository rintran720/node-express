import jwt from 'jsonwebtoken';
import config from '../../../common/config';

export type JwtPayload = {
  userId: string;
};

export function generateRefreshToken(payload: JwtPayload) {
  return jwt.sign(payload, config.server.tokenSecret, {
    expiresIn: config.server.refreshExpiresIn,
  });
}

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, config.server.tokenSecret);
};

export const decodeRefreshToken = (token: string) => {
  return jwt.decode(token);
};

const RefreshTokenUtil = {
  generateRefreshToken,
  verifyRefreshToken,
  decodeRefreshToken,
};

export default RefreshTokenUtil;
