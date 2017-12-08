import test from 'ava'
import getPackageGithubUrl from '../build/get-package-github-url'

test('repository string', async t => {
  const githubUrl = await getPackageGithubUrl('get-package-github-url')
  t.is(githubUrl, 'https://github.com/marcofugaro/get-package-github-url')
})

test('repository object', async t => {
  const githubUrl = await getPackageGithubUrl('lodash')
  t.is(githubUrl, 'https://github.com/lodash/lodash')
})

test('weird repository string', async t => {
  const githubUrl = await getPackageGithubUrl('gulp-eslint-if-fixed')
  t.is(githubUrl, 'https://github.com/lukeapage/gulp-eslint-if-fixed')
})
