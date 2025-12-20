# Repository Protection Configuration

This directory contains configuration files that protect the portpolio repository and ensure only authorized changes are made.

## Files

### CODEOWNERS
- **Purpose**: Defines code ownership for the entire repository
- **Owner**: @CGunasekaran (exclusive access)
- **Scope**: All files and directories in the repository
- **Protection Level**: Requires review and approval from @CGunasekaran for any changes

### workflows/protection.yml
- **Purpose**: GitHub Actions workflow for additional repository protection
- **Features**:
  - Validates that only @CGunasekaran can push changes
  - Runs build and type checking for authorized changes
  - Provides deployment notifications
  - Blocks unauthorized push attempts

## How It Works

1. **CODEOWNERS Protection**: 
   - Any pull request requires approval from @CGunasekaran
   - Direct pushes to protected branches are restricted
   - Applies to all files (`*`) in the repository

2. **Workflow Protection**:
   - Automatically validates the author of push/PR attempts
   - Runs quality checks (TypeScript, build) for authorized changes
   - Fails the workflow for unauthorized attempts

3. **Branch Protection** (to be configured in GitHub settings):
   - Require pull request reviews before merging
   - Require status checks to pass
   - Require branches to be up to date before merging
   - Restrict pushes that create files

## GitHub Repository Settings Required

To fully protect your repository, configure these settings in GitHub:

1. Go to repository **Settings → Branches**
2. Add branch protection rule for `main` (or your default branch)
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (set to 1)
   - ✅ Require review from CODEOWNERS
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Restrict pushes that create files

## Repository Owner
**CGunasekaran** - [@CGunasekaran](https://github.com/CGunasekaran)

---

*This configuration ensures that only the repository owner can make changes while maintaining code quality and security standards.*