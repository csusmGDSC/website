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

## Making changes

If you wish to make changes to the code as a contributor, you will have to start with the making a branch off of the "DEV" branch. You can name this branch whatever as long as it is descriptive and clarifies your goals. When you are ready to finalize those changes, you can request a merge with your changes to the "DEV" branch and then one of the administrators will review the changes and go from there.

Note: No one should be able to make direct changes to the "MAIN" branch or the "DEV" branch directly, only through merges.

The reason for this is the following,

- Main Branch: This branch will be used as part of the deployment package with Vercel, meaning any new changes on this branch will "redeploy" the project automatically.
- Dev Branch: It will be very confusing to have multiple collaborators working on the same branch at the same time, which can lead to merge conflicts. Making your own branch off of the "DEV" branch will alleviate this.

There will be branch protection on these branches to enforce these rules.

## Testing

Testing (i.e. Unit, Integration, E2E) will be done with GitHub Actions and Jest will be done automatically, this will be covered in detail over the upcoming months. The important thing to know is that all the code on the MAIN branch should always work, and should be tested thorougly when the codebase gets larger.

## Technologies

This website is using a variety of technologies that is used in modern web development.

- **HTML**: The standard language used to create and structure content on the web. Can be extended in the form of TSX (HTML code inside of TypeScript code), you will see the .TSX extension, which just means HTML code along with some programmable code.

- **CSS**: A stylesheet language used to describe the presentation and layout of a website. This is what makes the website pretty.

- **TypeScript**: A programming language that builds on JavaScript by adding static types, helping developers catch errors early and write more robust code. Having type safety for your code will make your life much easier, trust me.

- **React**: A JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components.

- **NextJS**: A React framework that enables server-side rendering and static website generation for building optimized and fast web applications. This is just a bunch of fancy words that means having a bunch of really helpful tools when building websites.

- **Shadcn/UI**: A customizable component library for building user interfaces in web applications, providing pre-designed components that can be easily styled and integrated. This just helps expedite development of commonly used react components, this is not needed at all.


## Helpful resources

If you cannot understand a code snippet, take advantage of ChatGPT or similar tools to help it explain the code for you. This is extremely helpful and you will be able to ask it a bunch of clarifying questions. I do this all the time when learning new technologies, and it is encouraged. Of course, you are welcome to ask questions to any of the code maintainers as well.

Finally, if you are curious, you can use these resources to futher your learning,

[What is react in 100 seconds?](https://www.youtube.com/watch?v=Tn6-PIqc4UM&ab_channel=Fireship)
<br/>
[React tutorial in 1 hour](https://www.youtube.com/watch?v=SqcY0GlETPk&t=16s&ab_channel=ProgrammingwithMosh)
<br/>
[TypeScript tutorial](https://www.youtube.com/watch?v=ahCwqrYpIuM&ab_channel=Fireship)
<br/>
[HTML/CSS tutorial (I highly, highly recommend this one)](https://www.youtube.com/watch?v=HGTJBPNC-Gw&t=6998s&ab_channel=BroCode)

To learn more about Next.js (Do this last), take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
