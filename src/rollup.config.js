import createTestPackageJson from 'rollup-plugin-create-test-package-json'
import multiInput from 'rollup-plugin-multi-input'
import relativeToPackage from 'rollup-plugin-relative-to-package'
import createPackFile from '@toolbuilder/rollup-plugin-create-pack-file'
import runCommands, { shellCommand } from '@toolbuilder/rollup-plugin-commands'
import { tempPath } from './temp-path'

const testPackageDir = tempPath('pkgtest')

export default [
  {
    // multi-input will turn glob into array of entry points
    input: ['test/**/*test.js'],
    // output one file per entry point
    preserveModules: true,
    output: {
      format: 'es',
      dir: testPackageDir
    },
    plugins: [
      multiInput(),
      // convert relative imports to package imports
      relativeToPackage({
        // where all package source files reside
        modulePaths: 'src/**/*.js'
      }),
      createTestPackageJson({
        // fields plugin can't infer from packageJson and bundles
        testPackageJson: {
          scripts: {
            // script to run generated unit tests
            test: 'tape -r esm test/**/*test.js | tap-nirvana'
          },
          // test script dependencies
          devDependencies: {
            esm: '^3.2.25',
            tape: '^5.0.1',
            'tap-nirvana': '^1.1.0'
          }
        }
      }),
      createPackFile({
        // create packfile (*.tgz) and move it to testPackageDir
        packCommand: 'pnpm pack'
      }),
      runCommands({
        commands: [
          // install and run tests
          // -C prevents package's path from being part of testPackage's path
          // So that modules in package aren't resolved by accident
          shellCommand(`pnpm -C ${testPackageDir} install-test`)
        ]
      })
    ]
  }
]
