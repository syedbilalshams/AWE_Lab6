# Combined State Management (Redux + Context API)

CED-329 Advanced Web Engineering — Lab 06

A React.js app that manages global state two ways:

| State | Tool | Where |
|---|---|---|
| User (name, logged in/out) | Context API | `src/context/UserContext.js` |
| Theme (light/dark) | Context API | `src/context/ThemeContext.js` |
| Counter | Redux | `src/redux/` (store, reducers, actions) |

## Run it

```bash
npm install
npm start        # http://localhost:3000
```

## Project structure

```
src/
├── context/
│   ├── UserContext.js    # UserProvider + useUser() hook (login / logout)
│   └── ThemeContext.js   # ThemeProvider + useTheme() hook (toggleTheme)
├── redux/
│   ├── actions.js        # INCREMENT / DECREMENT / RESET + action creators
│   ├── reducers.js       # counterReducer
│   └── store.js          # createStore(counterReducer)
├── components/
│   ├── Button.js         # reusable themed button (props: onClick, variant)
│   ├── Card.js           # reusable themed container (props: title, children)
│   ├── Layout.js         # page shell, applies theme class
│   ├── ThemeToggle.js    # toggles theme via useContext
│   ├── UserProfile.js    # consumes UserContext
│   ├── Counter.js        # consumes Redux (useSelector / useDispatch)
│   └── Dashboard.js      # consumes BOTH Context and Redux
├── App.js                # <Provider> → <ThemeProvider> → <UserProvider>
└── App.css
```

## How it works

**Context API (user + theme).** Each context file creates a context, a provider that holds the
state with `useState()`, and a small hook (`useUser`, `useTheme`) that wraps `useContext()`.
Any component inside the provider can read or update the value without prop drilling.

**Redux (counter).** `actions.js` defines action types and creators, `reducers.js` returns a new
state for each action, and `store.js` creates the store. `App.js` wraps the tree in
`<Provider store={store}>`, and `Counter.js` reads the count with `useSelector` and updates it
with `useDispatch`.

**Combining both.** `Dashboard.js` reads the user and theme from Context and the count from Redux
in the same component.

**Theming.** `ThemeToggle` calls `toggleTheme()`. `Layout`, `Card` and `Button` read the current
theme and apply `light`/`dark` CSS classes (conditional styling).

## When to use which

- **Context API**: simple, rarely changing global data (logged-in user, theme, language).
- **Redux**: state that changes often or has more complex update logic, with a single store,
  predictable reducers and DevTools support.
