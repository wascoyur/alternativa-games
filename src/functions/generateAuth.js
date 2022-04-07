import React from 'react';

export const generateToken = (obj) => {
  const out = JWT.sign(JSON.stringify(obj));
  console.log({ out });
  return out;
};
