import createTestPackageJson from 'rollup-plugin-create-test-package-json'
import multiInput from 'rollup-plugin-multi-input'
import relativeToPackage from 'rollup-plugin-relative-to-package'
import createPackFile from '@toolbuilder/rollup-plugin-create-pack-file'
import { tempPath } from './temp-path'
import { runCommands, shellCommand } from './run-commands'

const testPackageDir = tempPath('pkgtest')

export default [
  {
    input: ['test/**/*test.js'],
    preserveModules: true,
    output: {
      format: 'es',
      dir: testPackageDir
    },
    plugins: [
      multiInput(),
      relativeToPackage({
        modulePaths: 'src/**/*.js'
      }),
      createTestPackageJson({
        testPackageJson: {
          scripts: {
            test: 'tape -r esm test/**/*test.js | tap-nirvana'
          },
          devDependencies: {
            esm: '^3.2.25',
            tape: '^5.0.1',
            'tap-nirvana': '^1.1.0'
          }
        }
      }),
      createPackFile({
        packCommand: 'pnpm pack'
      }),
      runCommands(
        shellCommand(`pnpm -C ${testPackageDir} install-test`)
      )
    ]
  }
]
