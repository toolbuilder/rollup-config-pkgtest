# Rollup-Config-PkgTest

This [Rollup](https://rollupjs.org/guide/en/) configuration tests Node CommonJS packages. It is not configurable, but the configuration is easily adaptable to other situations.

This package has been superceded by [@toolbuilder/rollup-plugin-test-tools](https://www.npmjs.com/package/@toolbuilder/rollup-plugin-test-tools). With the advent of Node ES modules, packages should also be tested against ES projects. So called 'isomorphic' packages should be tested against browsers. It is easy to include more tests in the provided rollup configuration and bump the major version number. However, a one-size-fits-all configuration no longer meets my needs.

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
