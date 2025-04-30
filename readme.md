Great! Here's the updated `README.md` for your password hashing library, now named **`kavach.js`** 🔐🛡️:

---

# 🛡️ kavach.js – Strong & Simple Password Hashing

**kavach.js** (कवच = *armor*) is your lightweight and secure password hashing shield 🛡️ for Node.js, powered by the native `crypto` module.

Built to protect your app's passwords with simplicity and power.

---

## ✨ Features

- 🔐 Secure hashing with `pbkdf2` + SHA-512
- 🧂 Automatic random salt generation
- 🔁 100,000 iterations for added strength
- ⚡ Promise-based async API
- 🧠 Super simple to use

---

## 📦 Installation

```bash
npm install kavach.js
```

---

## 🚀 Usage

```js
const { hash, compare } = require('kavach.js');

// 🔐 Hash a password
hash('mySecretPassword123')
  .then(hashed => {
    console.log('Hashed Password:', hashed);

    // 🔍 Compare the password later
    compare('mySecretPassword123', hashed)
      .then(isMatch => {
        console.log('Password match? ✅', isMatch); // true
      });
  });
```

---

## 📘 API

### `hash(password: string): Promise<string>`

Generates a salted, hashed version of the password.  
🔒 Output format: `salt$hashedPassword`

---

### `compare(password: string, hashedPassword: string): Promise<boolean>`

Compares a plain text password with a stored hashed version.  
Returns `true` ✅ if they match, otherwise `false` ❌.

---

## ⚙️ How It Works

- 🔐 Uses `crypto.pbkdf2` under the hood
- 🧂 Salt length: 16 bytes
- 🔄 Iterations: 100,000
- 🔐 Digest: `sha512`
- 🔑 Key length: 64 bytes

---

## 🧪 Sample Output

```bash
Hashed Password: 3a4d7c1b93a5...$9d82c4f1b7e8...
Password match? ✅ true
```

---

## 📄 License

MIT © 2025 YourName

---

Let me know if you'd like a logo or badge for this library too!