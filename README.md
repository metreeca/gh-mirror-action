This action mirrors the triggering branch to a target branch.

# Usage

## Inputs

| name     | default               | description               |
|----------|-----------------------|---------------------------|
| `token`  | `${{ github.token }}` | GitHub API access token   |
| `target` | main                  | name of the target branch |

## Example

Mirror the `release/v1.0` branch to the `main` branch:

```yaml
name: Mirror branch

on:
  push:
    branches: release/v1.0

jobs:
  mirror-to-main:
    runs-on: ubuntu-latest
    steps:
      - uses: metreeca/gh-mirror-action@v2
        with:
          token: ${{ github.token }} # optional
          target: main               # optional
```

# Support

- open an [issue](https://github.com/metreeca/gh-mirror-action/issues) to report a problem or to suggest a new feature
- start a [discussion](https://github.com/metreeca/gh-mirror-action/discussions) to ask a how-to question or to share an
  idea

# License

This project is licensed under the Apache 2.0 License – see [LICENSE](LICENSE) file for details.