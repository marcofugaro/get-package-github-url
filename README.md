# get-package-github-url [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![devDependency Status][daviddm-dev-image]][daviddm-dev-url]

> Get the github URL of a npm package


## Install

```
npm install get-package-github-url
```
or
```
yarn add get-package-github-url
```


## Usage

```js
import getPackageGithubUrl from 'get-package-github-url'

getPackageGithubUrl('promisify-dom-selector') // a sample npm package
  .then((githubUrl) => {
    // ...
  })

// or you can use it with async/await
async () => {
  const githubUrl = await getPackageGithubUrl('promisify-dom-selector')
  // ...
}
// ...
```


## API

### getPackageGithubUrl(packageName)

#### packageName

Type: `string`

The name of a npm package. It corresponds to the field `name` of the `package.json`.

## License

MIT © [Marco Fugaro](https://github.com/marcofugaro)


[travis-image]: https://travis-ci.org/marcofugaro/get-package-github-url.svg?branch=master
[travis-url]: https://travis-ci.org/marcofugaro/get-package-github-url
[daviddm-image]: https://david-dm.org/marcofugaro/get-package-github-url.svg
[daviddm-url]: https://david-dm.org/marcofugaro/get-package-github-url
[daviddm-dev-image]: https://david-dm.org/marcofugaro/get-package-github-url/dev-status.svg
[daviddm-dev-url]: https://david-dm.org/marcofugaro/get-package-github-url/?type=dev
