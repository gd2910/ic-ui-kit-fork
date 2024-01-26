// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "../../../react/cypress/support/commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

/* eslint-disable @typescript-eslint/no-namespace */
import "cypress-axe";

// Importing ICDS style assets
import "../../dist/core/normalize.css";
import "../../../fonts/src/fonts";
import "../../dist/core/core.css";
