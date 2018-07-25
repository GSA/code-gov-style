# Contributing
In order to contribute, please make a pull request to master.

# Development
`code-gov-style` is basically a Jekyll project that includes SASS and CSS files that can be imported into your own project, wrapped around a node package.

### Run Local Server
You can run the local development server using `npm run serve`, which starts the local Jekyll server.  When you make changes to the SASS files, your page should automatically reload.

### Updating Font
code-gov-style depends on the font from [code-gov-font](https://github.com/GSA/code-gov-style).  In order to use a new version of `code-gov-font`, update the version in the [package.json](https://github.com/GSA/code-gov-style/blob/master/package.json), run `npm install`, and then run `npm run update-font`.  `npm run update-font` basically copies over the relevant font files from the installed package, so they're in the places that Jekyll expects.
