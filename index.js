const { rejects } = require('assert');
const crypto = require('crypto');
const { resolve } = require('path');

const SALT_LENGTH = 16;
const ITERATIONS = 100000;
const KEY_LENGTH = 64;
const DIGEST = 'sha512';

function hash(password) {
    return new Promise((resolve, reject) => {
      const salt = crypto.randomBytes(SALT_LENGTH).toString('hex');
      crypto.pbkdf2(password, salt, ITERATIONS, KEY_LENGTH, DIGEST, (err, derivedKey) => {
        if (err) return reject(err);
        resolve(`${salt}$${derivedKey.toString('hex')}`);
      });
    });
  }
  
  
  function compare(password, hashedPassword) {
    return new Promise((resolve, reject) => {
      const [salt, key] = hashedPassword.split('$');
      crypto.pbkdf2(password, salt, ITERATIONS, KEY_LENGTH, DIGEST, (err, derivedKey) => {
        if (err) return reject(err);
        resolve(derivedKey.toString('hex') === key);
      });
    });
  }
  
  module.exports = {
    hash,
    compare
  };