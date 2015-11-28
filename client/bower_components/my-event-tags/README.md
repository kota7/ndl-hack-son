# ng-component-template

angular component (directive) private bower starter kit.

### develop tasks

```sh

grunt --help

```

### costmize

 1. modifiled file and module name
   1. rename to `src/**.js`, `src/**.html`, `src/**.css`.
   1. will change grunt task `config/ngtemplates.js` of `module` value.
   1. will change load file name of the `demo/index.html` of `<script>` tag.


## regoster [private bower](https://www.npmjs.com/package/private-bower)

#### add `.bowerrc` setting.

you a private bower server url

```json
{
  "registry": "http://localhost:5678",
}
```

#### register private bower

```sh
bower register [package name] [repository name]
```

## use component

#### use install bower

```sh

bower install --save [package name]

```
