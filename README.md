# code-gov-style

Style for code.gov including buttons, banners, and cards. Inspired by and somewhat based on USWDS.

## View

All style components are [viewable online](https://gsa.github.io/code-gov-style/).

## Purpose

As our code base expands, maintaining and remembering all the CSS class names has become difficult.
The code.gov Style Guide makes the search and usage of CSS classes easier by providing examples of their usage.  These styles are not meant for usage outside of code.gov.  Feel free to fork this though if you want to create your own style guide :-)

## Install

The repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://docs.npmjs.com/getting-started/installing-node), you can install `code-gov-style` with this command:
```sh
$ npm i @code.gov/code-gov-style
```

## Usage

This package is meant to be used with the [code-gov-front-end](https://github.com/GSA/code-gov-front-end) project. Please follow the [configuration settings](https://github.com/GSA/code-gov-front-end/blob/master/CONFIGURATION.md#style) for the project.

## Link this package to edit Code.gov styles locally

You may want to view your style changes in the code-gov-style repo on your local machine for testing. Follow these steps to do so:
1. Clone the latest version of the `code-gov-style` repository.
2. Run `npm install` to install the dependencies required for the package in the `code-gov-style` directory.
3. Run `npm link` in the root level of the `code-gov-style` directory on your local machine.
4. On the `code-gov-front-end` [project](https://github.com/GSA/code-gov-front-end#getting-started), clone the repository and run `npm install` if you haven’t done this already.
5. Run `npm link @code.gov/code-gov-style` in the root level of the code-gov-front-end directory on your local machine.

You are now using the latest version of the code.gov design system via your cloned version when running the `code-gov-front-end` site on your local machine. To stop using this version, run `npm unlink @code.gov/code-gov-style` from the root level of the `code-gov-front-end` directory.

## Testing
Our continuous integration pipeline runs linting and accessibility tests on every pull request. Be sure to test your code by doing the following:
1. Use the `npm run lint` command to lint your `.scss` files.

2. To run web accessibility testing do the following:
    a. Make sure [ruby](https://www.ruby-lang.org/en/documentation/installation/) and the [bundler gem](https://bundler.io/) are installed on your computer.
    b. Start a server by running `npm run serve`.
    c. Use the `npm run test-pa11y` command to run the accessibility test.

The accessibility testing configuration is located in the .pa11yci file. We follow the WCAG2AA standard. For more info on the rules being tested checkout the [pa11y wiki](https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules)

## Deployment

The https://gsa.github.io/code-gov-style/ site is built using GitHub pages from the `master` branch. Any merges to the `master` branch will update the site within a few minutes.

In order for any style guide changes to be reflected on the `code-gov-front-end`, they must be deplyed to [NPM](https://www.npmjs.com/package/@code.gov/code-gov-style) and the package version that `code-gov-front-end` uses needs to be incremented.

## Legal

We use the fa-search icon from Font Awesome.  Font Awesome released their fa-search icon under this license https://creativecommons.org/licenses/by/4.0/

We copy-pasted some code from the `hamburgers` library to `_hamburgers.scss`.  Hamburgers was created by Jonsuh.  Hamburgers is released under the MIT License and can be found here https://github.com/jonsuh/hamburgers/blob/master/LICENSE as well as in the licenses folder in this repository.

## FAQS

Have a question?  Check out our [FAQS](FAQS.md).  If it's not there, feel free to post an issue or email us :-)

## Contact

Contact Daniel J. Dufour at daniel.dufour@gsa.gov if you have any questions
