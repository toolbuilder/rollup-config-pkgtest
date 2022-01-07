// export { nodeCommonJsTestConfig as default, tempPath } from '@toolbuilder/rollup-plugin-test-tools'
export { tempPath } from '@toolbuilder/rollup-plugin-test-tools'
import { basePackfileTestConfig } from '@toolbuilder/rollup-plugin-test-tools'

/*
  Could simply export nodeCommonJsTestConfig as default from '@toolbuilder/rollup-plugin-test-tools'.
  That works perfectly, but when 'pnpm run check:packfile' is run, it generates a warning from the
  test project about unmet dependendencies because rollup is not installed. So copied the config
  options for nodeCommonJsTestConfig from '@toolbuilder/rollup-plugin-test-tools' and added rollup
  as a devDependency.
*/
const options = {
  format: 'cjs',
  testPackageJson: {
    type: 'commonjs', // test package with commonJS project
    scripts: {
      test: "tape 'test/*test.js' | tap-nirvana"
    },
    devDependencies: {
      rollup: '^2.63.0', // <== to stop warning about peer dependencies
      // dependencies for test script
      tape: '^5.2.2', // used as test runner only
      'tap-nirvana': '^1.1.0'
    }
  }
}

export default basePackfileTestConfig(options)
