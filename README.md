This action mirrors the triggering branch to a target branch.

# Usage

## Inputs

| name     | default               | description                  |
|----------|-----------------------|------------------------------|
| `token`  | `${{ github.token }}` | GitHub API access token      |
| `branch` | *required*            | name of the mirroring branch |

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
      - uses: metreeca/gh-mirror-action@v1
```

# Support

- open an [issue](https://github.com/metreeca/gh-mirror-action/issues) to report a problem or to suggest a new feature
- start a [discussion](https://github.com/metreeca/gh-mirror-action/discussions) to ask a how-to question or to share an
  idea

# License

This project is licensed under the Apache 2.0 License – see [LICENSE](LICENSE) file for details.