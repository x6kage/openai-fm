# OpenAI.fm

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![NextJS](https://img.shields.io/badge/Built_with-NextJS-blue)
![OpenAI API](https://img.shields.io/badge/Powered_by-OpenAI_API-orange)

A TTS demo app (PoC) based on [OpenAI.fm](https://openai.fm). Try Voice / Vibe / Script and copy your preferred settings with one click. Access is protected by Basic auth.

## Setup

### Prerequisites

- [Bun](https://bun.sh/) installed
- [OpenAI API key](https://platform.openai.com/api-keys)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd openai-fm
```

### 2. Environment variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Edit `.env`:

```bash
# Required: OpenAI API key
OPENAI_API_KEY=sk-...

# Optional: Basic auth (enabled when both are set)
BASIC_AUTH_USER=admin
BASIC_AUTH_PASSWORD=your-password-here
```

### 3. Install dependencies

```bash
bun install
```

### 4. Start the dev server

```bash
bun run dev
```

The app runs at [`http://localhost:3000`](http://localhost:3000).

## Deploy to Vercel

1. Push the repository to GitHub
2. Import the project on [Vercel](https://vercel.com/new)
3. Set Environment Variables:
   - `OPENAI_API_KEY`
   - `BASIC_AUTH_USER`
   - `BASIC_AUTH_PASSWORD`
4. Deploy

> [!NOTE]
> OpenAI API usage on the deployed app is billed to the owner of the API key. Enable Basic auth to prevent unintended access.

## Lint (auto-fix)

### On save (Cursor / VS Code)

The repo includes `.vscode/settings.json` so that **ESLint auto-fix** runs when you save a file. Fixable issues (e.g. quotes, semicolons) are corrected automatically. Rules like `no-unused-vars` are not auto-fixable and must be fixed by hand.

### Pre-commit (husky + lint-staged)

On each commit, **lint-staged** runs `eslint --fix` on staged `.js` / `.jsx` / `.ts` / `.tsx` / `.mjs` files. Fixable problems are corrected; if any error remains, the commit is blocked.

After cloning, run `bun install` once so that the **husky** git hooks are installed (the `prepare` script runs automatically).

### Manual

To fix the whole project:

```bash
bun run lint:fix
```

## Changes from the original

- Share feature (Postgres) removed
- “Copy Settings” button added (Voice / Language / Vibe to clipboard)
- Basic auth middleware added
- Package manager unified to bun

## License

This project is licensed under the MIT License. See the LICENSE file for details.

Based on [openai/openai-fm](https://github.com/openai/openai-fm).
