# Angular Project

This repository contains a clean Angular application without any Next.js configuration files.

## Project Structure

```
.
└── angular-project/          # Main Angular application
    ├── src/                  # Angular source code
    ├── angular.json          # Angular CLI configuration
    ├── package.json          # Angular dependencies
    ├── tsconfig.json         # TypeScript configuration
    └── README.md             # Angular project documentation
```

## Getting Started

To run the Angular application:

1. Navigate to the Angular project directory:
   ```bash
   cd angular-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Available Scripts

Inside the `angular-project` directory, you can run:

- `ng serve` - Starts the development server
- `ng build` - Builds the app for production
- `ng test` - Runs the unit tests
- `ng lint` - Runs the linter

## Project Cleanup

This repository was cleaned up to remove Next.js configuration files that were previously mixed with the Angular project. The following files were removed:

- `next.config.ts`
- `next-env.d.ts`
- Root `package.json` (Next.js dependencies)
- `eslint.config.mjs`
- `postcss.config.mjs`
- `components.json`
- Next.js `src/` and `public/` directories
- `.next/` build directory
- Next.js `node_modules/`

The repository now contains only the Angular project in the `angular-project/` directory.

## Development

For development, work within the `angular-project/` directory. All Angular CLI commands should be run from that location.
