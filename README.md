# elm-tailwind-example
This project is for anyone who would like to create a development environment for Elm and tailwindcss. It features a dev server with hot reloading.

Elm and Tailwind are pretty easy to set up [manually](#manual-setup), but to get a full-featured dev server running, Webpack or some other bundler is pretty much required. Because Webpack can be absolutely awful to set up, this repo acts as a guide for what needs to be done. It covers the basic configuration and explains some of the reasons behind it in the hopes that more advanced configurations will come easier as a result.

## Using This Repo
While this repo _could_ serve as a template for other projects, it is probably most useful to copy just the necessary configuration into your own repo, or to read over the comments in the configuration to get a better idea of how Elm and Tailwind work with Webpack. This file structure and configuration is not the only way to get these three technologies working together, and everyone's requirements are different.

## Note about Elm dependency
It is not currently possible (as of 2021/03/14) to install Elm via `npm` on the ARM64-based Apple machines ("Apple Silicon" or "M1"), though it is possible to install by other means. I have not included the dependency on `elm` in `package.json` for this reason. If Elm is installed globally on your system, the dependency will be satisfied, but if you are not under this architecture restriction, you should be able to `yarn add -D elm` to satisfy this peer dependency of `elm-webpack-loader`.

## Manual Setup
If you don't need a fancy dev server, you can get Elm working with Tailwind a lot more simply by just writing an HTML file to link the two technologies together:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Elm & tailwindcss</title>
    <link rel="stylesheet" href="tailwind.css">
    <script src="main.js"></script>
  </head>
  <body>
      <script>
          var app = Elm.Main.init({
            node: document.body
          });
      </script>
  </body>
</html>
```

`main.js` is generated using the Elm compiler directly:
```
elm make src/Main.elm --output dist/main.js
```

This is mostly explained in [the Elm interop guide](https://guide.elm-lang.org/interop/), with the addition of the Tailwind stylesheet, which can be generated with [tailwindcss-cli](https://tailwindcss.com/docs/installation#using-tailwind-without-post-css):
```
tailwindcss-cli build -o dist/tailwind.css
```