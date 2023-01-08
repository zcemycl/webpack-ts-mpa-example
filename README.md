### Multipages Application with Typescript and Webpack

![example workflow](https://github.com/zcemycl/webpack-ts-mpa-example/actions/workflows/main.yml/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/zcemycl/webpack-ts-mpa-example/badge.svg?branch=main)](https://coveralls.io/github/zcemycl/webpack-ts-mpa-example?branch=main)

#### Project Structure

```
├── assets # css
│   ├── components
│   └── pages # @import components
│       ├── index.css
│       └── page1
│           ├── index-lg.css
│           ├── index-sm.css
│           ├── index-md.css
│           └── index.css # all @imports
├── dist # after build
│   ├── index.html # link one 1 js and 1 css
│   ├── index.bundle.js # group mvc
│   ├── index.css # many css to 1 css
│   └── page1
│       ├── index.html
│       ├── index.bundle.js
│       └── index.css
├── public # html
│   ├── components
│   └── pages # require partial/components
│       ├── index.html # require partial
│       ├── partial1.html
│       ├── partial2.html
│       └── page1
│           └── index.html
└── src # ts
    ├── index.ts # import mvc
    ├── index.model.ts
    ├── index.view.ts
    ├── index.control.ts
    └── page1
        ├── index.ts
        ├── index.model.ts
        ├── index.view.ts
        └── index.control.ts
```

Follow-ups: gif,jpg,jpeg,png?

#### Techniques

1. Model View Controller (MVC)
2. Jest for unit and mock testings
3. Puppeteer for e2e testing
4. Webpack
5. MultiPages Application
6. Github action to deploy github pages
7. Typescript
8. ESLint
9. Prettier
10. Cypress for e2e testing

### References

1. [Define global variable with webpack](https://stackoverflow.com/questions/37656592/define-global-variable-with-webpack)
2. [How to use ESLint with TypeScript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)
3. [Linting in TypeScript using ESLint and Prettier](https://blog.logrocket.com/linting-typescript-eslint-prettier/)
4. [Create a Pre-commit Git Hook to Check and Fix Your JavaScript/TypeScript Code Automatically](https://javascript.plainenglish.io/create-a-pre-commit-git-hook-to-check-and-fix-your-javascript-typescript-code-b04de61834bd)
