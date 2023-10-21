# SaaS Ninja

SaaS Ninja is an opinionated Software as a Service Starter Kit to speed up your SaaS development and deployment, putting you on the fast track to crafting your one-of-a-kind software solution.

## Features

- [Next.js](https://nextjs.org) - Web development framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Components library
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Prisma](https://www.prisma.io/) - ORM
- [Zod](https://zod.dev/) - Validation

## Running Locally

Before you start you will need the following:

- [Node.js](https://nodejs.org/en)
- [Docker](https://www.docker.com/)
- Optional: [pnpm](https://pnpm.io/)

1. Clone the repo

```bash
git clone git@github.com:RishikeshNK/saas-ninja.git
cd saas-ninja
```

2. Install the necessary dependencies

```bash
pnpm install
```

3. Configure the `.env` file by following the template in `.env.example`. See [Setting up the environment](#setting-up-the-environment).

4. Run the docker container

```bash
docker compose up -d
```

> **Note:** The `docker-compose.yml` file sets the `POSTGRES_USER` as "admin", `POSTGRES_PASSWORD` as "admin", and `POSTGRES_DB` as "saas-ninja" by default.

5. Generate the Prisma Client

```bash
pnpm dlx prisma generate
```

6. Run the application

```bash
pnpm run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the results.

### Setting up the environment

1. Create a new file called `.env` or copy the `.env.example` and rename it to `.env`

```bash
cp .env.example .env
```

2. Complete the file to add your environment variables
