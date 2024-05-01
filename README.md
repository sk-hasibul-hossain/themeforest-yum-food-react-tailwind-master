# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

jatin.vyas@outlook.com


This challenge is very challenging; code extraction is not an easy task. This kind of well-managed project is the most complex I've ever seen. In the initial stage, I could not find a way to extract this code from humongous files. Components are interlinked with each other, which was a major problem. At last, I found a way to extract files. The steps are:

Step 1: Firstly, remove the login functionality.
Step 2: Open and read each file individually, then remove the components that are not required.
Step 3: I used VS Code's search functionality to remove the files.
Step 4: After removing the unnecessary files, I started removing React Router DOM hooks like (Link, useNavigate, useLocation).
Step 5: Finally, I removed the base URL.