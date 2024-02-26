/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import {
  IcBreadcrumb,
  IcBreadcrumbGroup,
  IcButton,
  IcChip,
  IcNavigationItem,
  IcPageHeader,
  IcStep,
  IcStepper,
  IcTextField,
} from "../../components";
import { mount } from "cypress/react";
import { BE_VISIBLE, HAVE_LENGTH } from "../utils/constants";
import {
  DesktopScrollablePageVariant,
  ScrollStickyPageHeader,
} from "./IcPageHeaderTestData";

const DEFAULT_TEST_THRESHOLD = 0.05;

describe("IcPageHeader e2e, A11y and visual regression tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("IcPageHeader", () => {
    mount(
      <IcPageHeader
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
        reverseOrder
      >
        <IcChip slot="heading-adornment" label="BETA" size="large" />
      </IcPageHeader>
    );
    cy.checkHydrated("ic-page-header");
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("should stay at the top of the page if the sticky variant is used", () => {
    mount(<ScrollStickyPageHeader />);
    cy.viewport(1050, 450);
    cy.checkA11yWithWait();
    cy.scrollTo("bottom").checkHydrated("ic-button#end");
    cy.checkA11yWithWait();
    cy.get("ic-page-header").invoke("css", "position", "absolute");
    cy.compareSnapshot({
      name: "stickyVariant",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.get("ic-page-header").invoke("css", "position", "null");
  });

  it("page header should not stay on top if prop use stickyDesktopOnly for viewport extra small", () => {
    mount(<DesktopScrollablePageVariant />);
    cy.viewport("iphone-6");
    cy.wait(500).compareSnapshot({
      name: "desktopOnlyBeforeScroll",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.scrollTo(0, 800);
    cy.wait(500).compareSnapshot({
      name: "dasktopOnlyAfterScroll",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("centered page header", () => {
    mount(
      <IcPageHeader
        aligned="center"
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
        reverseOrder
      >
        <IcChip slot="heading-adornment" label="BETA" size="large" />
        <IcButton slot="actions" variant="primary">
          Create coffee
        </IcButton>
        <IcButton slot="actions" variant="tertiary">
          Filter coffee
        </IcButton>
        <IcTextField
          slot="input"
          placeholder="Search for ingredients…"
          label="Input"
          hideLabel
        />
      </IcPageHeader>
    );
    cy.viewport(1450, 500);
    cy.compareSnapshot({
      name: "centerPageHeader",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("small size page header", () => {
    mount(
      <IcPageHeader
        size="small"
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
      />
    );
    cy.compareSnapshot({
      name: "smallSize",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("fullWidth page header", () => {
    mount(
      <IcPageHeader
        aligned="full-width"
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
        reverseOrder
      >
        <IcChip slot="heading-adornment" label="BETA" size="large" />
        <IcButton slot="actions" variant="primary">
          Create coffee
        </IcButton>
        <IcButton slot="actions" variant="tertiary">
          Filter coffee
        </IcButton>
        <IcTextField
          slot="input"
          placeholder="Search for ingredients…"
          label="Input"
          hideLabel
        />
      </IcPageHeader>
    );
    cy.viewport(1440, 590);
    cy.compareSnapshot({
      name: "fullWidthPageHeader",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("without boarder page header", () => {
    mount(
      <IcPageHeader
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
        border={false}
      >
        <IcChip slot="heading-adornment" label="BETA" size="large" />
        <IcButton slot="actions" variant="primary">
          Create coffee
        </IcButton>
        <IcButton slot="actions" variant="tertiary">
          Filter coffee
        </IcButton>
        <IcTextField
          slot="input"
          placeholder="Search for ingredients…"
          label="Input"
          hideLabel
        />
      </IcPageHeader>
    );
    cy.viewport(1450, 500);
    cy.compareSnapshot({
      name: "withoutBorder",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("page header with With actions, input and tabs", () => {
    mount(
      <IcPageHeader
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
        reverseOrder
      >
        <IcChip slot="heading-adornment" label="BETA" size="large" />
        <IcButton slot="actions" variant="primary">
          Create coffee
        </IcButton>
        <IcButton slot="actions" variant="tertiary">
          Filter coffee
        </IcButton>
        <IcTextField
          slot="input"
          placeholder="Search for ingredients…"
          label="Input"
          hideLabel
        />
        <IcNavigationItem slot="tabs" label="Method" href="#" selected />
        <IcNavigationItem slot="tabs" label="Ingredients" href="#" />
      </IcPageHeader>
    );
    cy.get("ic-navigation-item").should(BE_VISIBLE);
    cy.viewport(1450, 500);
    cy.compareSnapshot({
      name: "withActionInputTab",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("page header with actions,input and stepper", () => {
    mount(
      <IcPageHeader
        heading="latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
        reverseOrder
      >
        <IcChip slot="heading-adornment" label="BETA" size="large" />
        <IcButton slot="actions" variant="primary">
          Create coffee
        </IcButton>
        <IcButton slot="actions" variant="tertiary">
          Filter coffee
        </IcButton>
        <IcStepper slot="stepper">
          <IcStep stepTitle="Warm kettle" stepType="completed" />
          <IcStep
            stepTitle="Warm milk"
            stepSubtitle="Optional"
            stepType="completed"
          />
          <IcStep stepTitle="Pour milk" stepType="current" />
        </IcStepper>
        <IcTextField
          slot="input"
          placeholder="Search for ingredients…"
          label="Input"
          hideLabel
        />
      </IcPageHeader>
    );
    cy.get("ic-chip").should(BE_VISIBLE);
    cy.get("ic-button").should(BE_VISIBLE).should(HAVE_LENGTH, "2");
    cy.get("ic-text-field").should(BE_VISIBLE);
    cy.viewport(1450, 500);
    cy.compareSnapshot({
      name: "withActionInputStep",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("page header With breadcrumb navigation", () => {
    mount(
      <IcPageHeader
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
      >
        <IcChip slot="heading-adornment" label="BETA" size="large" />
        <IcBreadcrumbGroup slot="breadcrumbs">
          <IcBreadcrumb pageTitle="Drinks" href="#" />
          <IcBreadcrumb pageTitle="Coffees" href="#" />
          <IcBreadcrumb current pageTitle="Latte" href="#" />
        </IcBreadcrumbGroup>
      </IcPageHeader>
    );
    cy.viewport(1450, 500);
    cy.compareSnapshot({
      name: "withBreadcrumb",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });
});
