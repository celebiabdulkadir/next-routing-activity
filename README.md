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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Instructions:

1. Create a Navbar that is displayed on all pages. The content of the Navbar can be anything you want.

2. Create a route `users`. In this route, use the `getAllUsers` function from the `lib` directory.

3. On the `users` page, each `user` name should be a navigation link that takes the user to their respective user page based on their `id`.

4. On the user-specific page, display all the user's posts using the `getUserPosts` function.

5. To display the posts mentioned in the previous step, create a `UserPosts` component that will be responsible for rendering the posts.

## Code example:

1. Here is how to use the `getAllUsers` function:

```jsx
  const usersData = getAllUsers();
  const users] = await usersData;
```

Now you can map through the `userData` and get the data you want.

Same things for other functions.

## Optional:

1. Create a loading status in each route so that it shows a loading text in slow connections. [Check this link](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)

2. Create an error handling component to be shown incase an error happen. [Check this link](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
