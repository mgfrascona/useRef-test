# Project Initialization

I just created a new react project (this project) using `npm create vite@latest .` and chose:
	- React
	- JavaScript + SWC

Please perform the following cleanup for me:

1. Delete everything from the public folder

2. Delete the src/assets folder (and everything inside)

3. Delete the `App.css` file

4. Create a `components` folder in the `src` directory.

5. Rewrite the `App.jsx` file to use an arrow function that simply returns the string "Setup Complete"

6. Change `index.css` to the following css:

```css
:root {
  --color-text: #333333;
  --color-background: #f0f0f0;
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  justify-self: center;
  min-width: 320px;
  min-height: 100vh;
  color: var(--color-text);
  background-color: var(--color-background);
}
```

7. Rewrite main.jsx to:

```jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'

const root = document.querySelector('#root')
createRoot(root).render(<StrictMode><App /></StrictMode>)

```

That's all thank you!

Ignore this:

// please do everything specified in this file