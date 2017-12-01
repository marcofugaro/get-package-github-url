export default async function getPackageGithubUrl(packageName) {
  const { repository } = await fetch(`https://registry.npmjs.org/${packageName}`)
    .then((res) => res.json())

  if (!repository || repository.type !== 'git')
    return null

  let { url } = repository

  if (url.startsWith('git+')) {
    url = url.slice('git+'.length)
  }

  if (url.endsWith('.git')) {
    url = url.slice(0, -'.git'.length)
  }

  if (url.startsWith('git://')) {
    url = url.slice('git://'.length)
  }

  if (url.startsWith('ssh://')) {
    url = url.slice('ssh://'.length)
  }

  if (url.startsWith('git@github.com:')) {
    url = `github.com/${url.slice('git@github.com:'.length)}`
  }

  if (url.startsWith('git@github.com/')) {
    url = `github.com/${url.slice('git@github.com/'.length)}`
  }

  // finally add the correct protocol
  if (!url.startsWith('https://')) {
    url = `https://${url}`
  }

  return url
}
