![image](https://github.com/user-attachments/assets/adccffa4-4590-47ba-a684-10d8a8590110)

## Introduction

This is the repository of the official GDSC-CSUSM community website. This website will hold events, projects, competitions, resources, and interview prep.

This is a [NextJS](https://nextjs.org/) project using React, TypeScript, and various modern npm technologies. 

## Getting Started

First, make sure you have nodeJS installed, this is vital in running the application.

You can check if you have nodeJS installed by running the command in your terminal (windows, mac, or linux),

```bash
node -v
```

If you don't have NodeJS installed, it is pretty easy to install it, just follow the instructions on the official website: [NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

## Making changes

If you wish to make changes to the code as a contributor, you will have to start with the making a branch off of the "MAIN" branch (can be named anything). When you are ready to finalize those changes, you can request a pull request to the "MAIN" branch and then one of the administrators will review the changes and go from there.

The reason for this is the following,

- **Main Branch**: This branch will be used as part of the deployment package with Vercel, meaning any new changes on this branch will "redeploy" the project automatically.

There will be branch protection on these branches to enforce these rules.

## Installation

Secondly, once you have NodeJS installed, clone the repository, then install the necessary dependencies by running the command inside your repository,

```
npm install
```

To set up the databases, ask one of the maintainers or check the internal docs for the secret keys.

Set the mongodb database connection inside a new file named ".env" (placed in the root directory),
```
DATABASE_URL="your-connection-string"
```

Set up clerk authentication along with its middleware inside a new file named ".env.local" (placed in the root directory),
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="secret-key"
CLERK_SECRET_KEY="secret-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/onboarding
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

## Tech Stack

This website is using a variety of technologies that is used in modern web development.

- **HTML**: [Markup Language](https://www.w3schools.com/html/)
- **CSS**: [Styling Language](https://www.w3schools.com/css/)
- **TAILWIND CSS** [CSS Framework](https://tailwindcss.com/)
- **TYPESCRIPT**: [Client+Server Language](https://www.typescriptlang.org/)
- **REACT**: [JavaScript GUI Library](https://react.dev/)
- **NEXTJS**: [React Web Framework](https://nextjs.org/)
- **SHADCN/UI**: [React Component Library](https://ui.shadcn.com/)
- **MAGIC/UI**: [React Component Library](https://magicui.design/)
- **CLERK**: [User Authentication](https://clerk.com/)
- **MONGODB**: [Database](https://www.mongodb.com/)
- **PRISMA**: [Database ORM](https://www.prisma.io/)
- **JEST**: [Test Framework](https://jestjs.io/)
- **ZOD**: [Data Validation Library](https://zod.dev/)
- **RECHARTS**: [Charts Library](https://recharts.org/)
- **FRAMER-MOTION**: [Animation Library](https://www.framer.com/motion/)

## Helpful resources

If you cannot understand a code snippet, take advantage of ChatGPT or similar tools to help it explain the code for you. This is extremely helpful and you will be able to ask it a bunch of clarifying questions. Of course, you are welcome to ask questions to any of the code maintainers as well.

The most important things you **need** to know before contributing is **TypeScript**, **React**, **HTML**, **CSS**, and **NextJS**

To learn more about Next.js (Do this last), take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
