# Sample Nuxt App

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

Replace the variables in tracing.ts file in `/server/tracing.ts`

- <region> with [region](https://signoz.io/docs/ingestion/signoz-cloud/overview/#endpoint)
- <your-ingestion-key> with your SigNoz ingestion key
- <service_name> with name of service

```bash
npm run dev
```
