## How other frameworks structure the codebase?

- Python Flask
  - Structure
    ```
    ├── static # css and js
    │   ├── index.css
    │   └── index.js
    ├── templates # html
    │   └── index.html
    └── index.py
    ```
- Traditional HTML CSS JS
  - Structure
    ```
    ├── another_page
    │   ├── index.html
    │   ├── index.css
    │   └── index.js
    ├── index.html
    ├── index.css
    └── index.js
    ```
  - Website endpoints
    - `domain/`
    - `domain/index.html`
    - `domain/another_page/`
    - `domain/another_page/index.html`
- CSS and JS separation
  - Structure
    ```
    ├── js
    │   ├── index.js
    │   └── about.js
    ├── css
    │   ├── index.css
    │   └── about.css
    ├── index.html
    └── about.html
    ```
  - Website endpoints
    - `domain/`
    - `domain/index.html`
    - `domain/about.html`
- React
  - Structure
    ```
    ├── public
    │   ├── index.html
    │   └── 404.html
    └── src
        ├── index.js
        ├── App.js
        ├── LoadBalancer.jsx
        ├── styles.js
        ├── components
        │   ├── Button
        │   │   └── button.jsx
        │   ├── Navbar
        │   │   └── navbar.jsx
        │   └── index.js
        └── pages
            ├── about
            │   └── about.jsx
            ├── home
            │   └── home.jsx
            └── index.js
    ```
