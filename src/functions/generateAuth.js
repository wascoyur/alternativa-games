import React from 'react';

export const generateToken = (obj) => {
  const out = JSON.stringify(btoa(obj.email + obj.password));
  // console.log({ out });
  return out;
}
