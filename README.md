# Toptal Test of Bach Ly

This project is built using NextJS, TailwindCSS and Google Map Static API.

Demo: [https://toptal-test.vercel.app/](https://toptal-test.vercel.app/).

## Commands

```
// Install dependencies
yarn install

// Run development environment locally
yarn dev

// Run E2E Visual Test
yarn cypress

// Udate E2E Visual Test snapahots
yarn cypress-udpate-snapshot
```

## Configurations

### Environment variables

Environment variables are stored in `.env.local` for local development

Rename `.env.example` to `.env.local` and add the API keys accordingly

### TailwindCSS

TailwindCSS is configured in `tailwind.config.js` and `postcss.config.js`

Other custom CSS can be found in `styles/main.scss`

### Cypress E2E testing

Cypress is configured in `cypress.json`

## Deployment

The project is deployed to Vercel.

```
vercel --prod
```
