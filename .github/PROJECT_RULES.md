# SmashIT Project Rules & Workflow ⚖️

To maintain a high-quality codebase and a stable production environment, all contributors must follow these rules.

## 1. Branching Strategy 🌿

- **Main Branch (`main`)**: This is the production-ready branch. **Never commit directly to `main`.**
- **Feature Branches (`feature/your-feature`)**: Used for adding new components or functionality.
- **Bugfix Branches (`bugfix/issue-description`)**: Used for fixing identified bugs.
- **Chore Branches (`chore/task-name`)**: Used for maintenance tasks (CI/CD updates, library upgrades).

## 2. Commit Practices 💻

- **Hooks**: Husky and `lint-staged` are active. All commits are automatically linted and formatted before they are saved.
- **Atomic Commits**: Keep commits small and focused on a single logical change.
- **Messages**: Use descriptive commit messages (recommended: [Conventional Commits](https://www.conventionalcommits.org/)).
  - `feat:` for new features
  - `fix:` for bug fixes
  - `chore:` for maintenance

## 3. Pull Request (PR) Workflow 🚀

1.  Create a branch from `main`.
2.  Push your changes to the branch.
3.  Open a Pull Request (PR) on GitHub.
4.  **CI Check**: The PR must pass the `Pull Request Check` (Linting & Tests) before it can be merged.
5.  **Review**: At least one review is recommended before merging.
6.  **Merge**: Once approved and CI passes, merge into `main` using "Squash and Merge".

## 4. CI/CD & Deployment 🤖

- **Automatic Deployment**: Every merge to `main` triggers:
  - **DB Migration**: Updates the production database schema.
  - **Admin Build**: Builds the production-ready Admin Dashboard.
  - **Android Build**: Generates a new `.apk` artifact for testing.
- **Artifacts**: Android APKs are stored in GitHub Actions for 7 days.

## 5. Environment Management 🔐

- Never commit `.env` files.
- New environment variables must be added to GitHub Secrets for the CI/CD pipeline.
