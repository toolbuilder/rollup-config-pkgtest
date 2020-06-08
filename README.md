# Rollup-Config-PkgTest

This [Rollup](https://rollupjs.org/guide/en/) configuration tests my packages. It is not configurable, but the configuration is easily adaptable to other situations.

Here's what it does:

* converts units tests so that they use package instead of relative imports (e.g. `../src/index` to `iterablefu`)
  * [rollup-plugin-multi-input](https://github.com/alfredosalzillo/rollup-plugin-multi-input)
  * [rollup-plugin-relative-to-package](https://github.com/toolbuilder/rollup-plugin-relative-to-package)
* builds a test package around those tests
  * [rollup-plugin-create-test-package-json](https://github.com/toolbuilder/rollup-plugin-create-test-package-json)
  * [rollup-plugin-create-pack-file](https://github.com/toolbuilder/rollup-plugin-create-pack-file)
* and run the tests
  * This package has a tiny, 23 line, plugin for that.
* It uses [pnpm](https://pnpm.js.org/) to build the pack file, install dependencies, and run the tests.

## Installation

```bash
pnpm add --save-dev @toolbuilder/rollup-config-pkgtest
```

## Use

```bash
pnpx rollup -c node:@toolbuilder/rollup-config-pkgtest
```

This package uses it's own configuration to run the unit tests. So just `pnpm test` to see the configuration in action.

## Contributing

Contributions are welcome. Please create a pull request.

I use [pnpm](https://pnpm.js.org/) instead of npm.

## Issues

This project uses Github issues.
