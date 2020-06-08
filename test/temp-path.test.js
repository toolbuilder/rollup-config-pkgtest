import { test } from 'zora'
import { tempPath } from '../src/temp-path'
import { tmpdir } from 'os'
import { join } from 'path'

test('provides default prefix', assert => {
  const path = tempPath()
  const beginning = join(tmpdir(), 'package-test')
  assert.ok(path.startsWith(beginning), 'provided default prefix')
})

test('uses provided prefix', assert => {
  const path = tempPath('myprefix')
  const beginning = join(tmpdir(), 'myprefix')
  assert.ok(path.startsWith(beginning), 'used provided prefix')
})
