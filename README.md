# 🎨 Portfolio Website  

Repository ini berisi **Portfolio Website** yang dibangun menggunakan **React.js**. Selain itu, saya juga telah membuat versi **Next.js**, yang dapat ditemukan di branch `NextJSver`.  

## 🚀 Versi yang Tersedia  

- **`main` branch** → Dibangun dengan **React.js**  
- **`NextJSver` branch** → Dibangun dengan **Next.js** (https://github.com/Rifqi121/my-portfolio/tree/NextJSver)

## 🔗 Live Demo  
Kamu bisa mencoba website yang sudah dideploy di Vercel melalui tautan berikut:  

➡️ **[Testing Portfolio Live Demo](https://testing-portfolio-rifqi121-rifqi121s-projects.vercel.app)**  


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
