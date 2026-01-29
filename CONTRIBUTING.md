# Contributing to Good Partner

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Good Partner and its packages.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report.
- **Use a clear and descriptive title**.
- **Describe the steps to reproduce the issue**.
- **Describe what you expected to happen**.

### Pull Requests

1.  Fork the repo and create your branch from `main`.
2.  Run `npm install` to install dependencies.
3.  If you change code in `src/`, make sure to run `npm run build` to verify compilation.
4.  If you add a feature, please add test cases or verify with `good-partner doctor`.
5.  If you change documentation, please consider updating **all three languages** (English, Korean, Chinese) if possible. If not, just update the English one and tag a maintainer.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")

### TypeScript Style

- Use `async/await` over raw promises.
- strictly type all function arguments.
- run `npx tsc --noEmit` to check for type errors.
