## PasswordIndicator
Display a visual password indicator while inserting a (new) password

## Features
Display up to 5 levels of password strength that are being coloured while inserting a password to encourage inserting the strongest passwords.

## Typical usage scenario
Visual representation for password strength.

## Configuration
Place the widget below a password input field. Add a class to your password input (this should be unique). Type the same class within the widget. Adjust levels and/or texts that are used inside the widget

## Development and contribution
1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm run start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.


## Bugs
none known at this moment.