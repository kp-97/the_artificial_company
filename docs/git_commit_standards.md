# Git Commit Message Guidelines

This document defines the standard syntax and workflow for commit messages to ensure a professional and maintainable project history.

---

## 1. Primary Message Format
All commits must follow the **Conventional Commits** structure:

`type(scope): description`

| Component | Guideline |
| :--- | :--- |
| **Type** | A prefix to categorize the change (e.g., feat, fix). |
| **Scope** | (Optional) The specific module or area affected (e.g., auth, api). |
| **Description** | A short summary in the imperative mood (max 50 chars). |

### Structure Detail
- **Subject Line:** Follows the `type(scope): description` format. Do not end with a period.
- **Blank Line:** Necessary if a body or footer is included.
- **Body:** (Optional) Wrap at 72 characters. Focus on the *why* and *how*.
- **Footer:** (Optional) Use to reference Jira tickets, GitHub issues, or breaking changes.

---

## 2. Standard Types
We use these specific types to categorize changes:

| Type | Purpose |
| :--- | :--- |
| **feat** | A new feature for the user. |
| **fix** | A bug fix for the user. |
| **docs** | Changes to documentation only. |
| **style** | Formatting, missing semi-colons (no logic change). |
| **refactor** | Code changes that neither fix a bug nor add a feature. |
| **perf** | A code change that improves performance. |
| **test** | Adding or correcting tests. |
| **chore** | Updates to build tasks, package manager configs, etc. |

---

## 3. Core Principles

### The Imperative Mood
Always write the description as a command.
* **Correct:** `feat(api): add endpoint for user registration`
* **Incorrect:** `added endpoint for user registration`

### Atomic Commits
Each commit must represent one logical change. If a commit description requires the word "and," it should likely be split into two separate commits.

### Security First
Never commit `.env` files, API keys, or credentials. Use `.gitignore` to protect sensitive data. If secrets are committed, rotate them immediately.

### Local Workflow
Commit small changes frequently. Use `git add -p` to review code hunks and `git stash` for work-in-progress that is not yet ready for a commit.
