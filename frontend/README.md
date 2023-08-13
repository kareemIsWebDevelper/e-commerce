You are correct! In Next.js, the recommended approach for handling data fetching and displaying a loading state is to use React's Suspense feature along with the `next/dynamic` function.

Here's how you can implement it:

1. Import the necessary modules in your component file:
```javascript
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
```

2. Create a dynamic import for your component that fetches data from the database:
```javascript
const MyComponentWithData = dynamic(
  () => import('./MyComponentWithData'), // Replace with your component that fetches data
  {
    loading: () => <div>Loading...</div>, // Replace with your loading spinner component
    ssr: false, // Disable server-side rendering for this component
  }
);
```

3. Wrap your dynamic component with the `Suspense` component and render it:
```javascript
return (
  <div>
    <Suspense fallback={<div>Loading...</div>}> // Replace with your loading spinner component
      <MyComponentWithData />
    </Suspense>
  </div>
);
```

By using `Suspense` and `next/dynamic`, Next.js will automatically handle the loading state for you. The `fallback` prop of `Suspense` specifies the component to be displayed while the data is being fetched. Once the data is fetched, the actual component will be rendered.

This approach simplifies the code and provides a better user experience by automatically handling the loading state during data fetching.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
