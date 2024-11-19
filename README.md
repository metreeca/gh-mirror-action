# Metreeca/Sync

This action merges the triggering branch into a target branch.

# Usage

## Inputs

| name      | default                        | description                                                                                                      |
|-----------|--------------------------------|------------------------------------------------------------------------------------------------------------------|
| `token`   | `${{ github.token }}`          | GitHub API access token                                                                                          |
| `source`  | `${{ github.ref }}`            | name of the source branch; defaults to the fully-formed ref of the branch or tag that triggered the workflow run |
| `target`  | `main`                         | name of the target branch                                                                                        |
| `message` | `Merge {source} into {target}` | commit message template                                                                                          |

## Example

Merge the `release/v1.0` branch into the `main` branch:

```yaml
name: Merge branch

on:
  push:
    branches: release/v1.0

jobs:
  mirror-to-main:
    runs-on: ubuntu-latest
    steps:
      - uses: metreeca/gh-sync-action@v2
        with:
          token: ${{ github.token }}            # optional
          source: ${{ github.ref }}             # optional
          target: main                          # optional
          message: Merge {source} into {target} # optional
```

# Support

- open an [issue](https://github.com/metreeca/gh-mirror-action/issues) to report a problem or to suggest a new feature
- start a [discussion](https://github.com/metreeca/gh-mirror-action/discussions) to ask a how-to question or to share an
  idea

# License

This project is licensed under the Apache 2.0 License – see [LICENSE](LICENSE) file for details.