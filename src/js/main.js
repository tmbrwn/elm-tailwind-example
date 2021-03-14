// this file serves as the root node of the dependency graph that webpack assembles,
// so it needs to import all the sources that we want to be included in the bundle.
// the various loaders we configure will then take care of processing the source into
// what is included in the bundle.

// import paths must include extension so webpack knows what file to look at.
// alternative would be to define extensions in the "resolve" webpack config.
import '../css/main.css';
import { Elm } from '../elm/Main.elm';
// we also need to mount Elm to the DOM
Elm.Main.init({ node: document.body });