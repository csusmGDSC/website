This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, make sure you have nodeJS installed, this is vital in running the application.

You can check if you have nodeJS installed by running the command,

```
node -v
```

If you don't have NodeJS installed, it is pretty easy to install it, just follow the instructions on the official website: [NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

Secondly, once you have NodeJS installed, clone the repository, then install the necessary dependencies by running the command inside your repository,

```
npm install
```

Finally, run the development server, the terminal will provide you with a locahost:PORT_NUMBER link to access the website:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Testing

Testing (i.e. Unit, Integration, E2E) will be done with GitHub Actions and Jest will be done automatically, this will be covered in detail over the upcoming months. The important thing to know is that all the code on the MAIN branch should always work, and should be tested thorougly when the codebase gets larger.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Technologies

This website is using a variety of technologies that is used in modern web development.

- HTML: The standard language used to create and structure content on the web. Can be extended in the form of TSX (HTML code inside of TypeScript code), you will see the .TSX extension, which just means HTML code along with some programmable code.
- CSS: A stylesheet language used to describe the presentation and layout of a website. This is what makes the website pretty.
- TypeScript: A programming language that builds on JavaScript by adding static types, helping developers catch errors early and write more robust code. Having type safety for your code will make your life much easier, trust me.
- React: A JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components.
- NextJS: A React framework that enables server-side rendering and static website generation for building optimized and fast web applications. This is just a bunch of fancy words that means having a bunch of really helpful tools when building websites.
- Shadcn/UI: A customizable component library for building user interfaces in web applications, providing pre-designed components that can be easily styled and integrated. This just helps expedite development of commonly used react components, this is not needed at all.

