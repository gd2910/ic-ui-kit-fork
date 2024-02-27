/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { HAVE_TEXT } from "../utils/constants";
import {
  IndeterminateCircularLoadingIndWithLabel,
  DeterminateCircularLoadingIndWithLabel,
  IndeterminateCircularLoadingIndSizeSmallDefaultLarge,
  DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge,
  IndeterminateCirclularLoadingIndWithIcon,
  IndeterminateLinearLoadingIndWithLabel,
  DeterminateLinearLoadingIndWithLabel,
  IndeterminateLinearLoadingIndSizeSmallDefaultLargeFull,
  DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull,
  IndeterminateCircularDarkLoadingIndSizeSmallDefaultLarge,
  IndeterminateCircularDarkLoadingIndNoLabel,
  IndeterminateLinearDarkLoadingIndSizeSmallDefaultLargeFull,
  IndeterminateLoadingIndWithNameNoLabel,
  IndeterminateLoadingIndChangingLabel,
  DeterminateCircularLoadingIndWithInnerLabel,
  IndeterminateCircularLoadingIndE2EWithDuration,
  IndeterminateCircularLoadingIndE2ENoDuration,
} from "./IcLoadingIndicatorTestData";
const DEFAULT_TEST_THRESHOLD = 0.04;

export const defaultArgs = {
  progress: 30,
  min: 0,
  max: 100,
};

describe("IcLoadingIndicator", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(<IndeterminateCircularLoadingIndWithLabel />);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Loading...");

    cy.wait(100).compareSnapshot({
      name: "indeterminateCircular",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders determinate", () => {
    mount(
      <DeterminateCircularLoadingIndWithLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Loading...");

    cy.get("ic-loading-indicator").invoke("prop", "progress").should("eq", 30);

    cy.compareSnapshot({
      name: "determinateCircular",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of indeterminate with many sizes", () => {
    mount(<IndeterminateCircularLoadingIndSizeSmallDefaultLarge />);

    cy.wait(100).compareSnapshot({
      name: "indeterminateCircularsWith3Sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.1,
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of determinate with many sizes", () => {
    mount(
      <DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.compareSnapshot({
      name: "determinateCircularsWith3Sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders indeterminate with icon", () => {
    mount(<IndeterminateCirclularLoadingIndWithIcon />);

    cy.get("ic-loading-indicator").invoke("prop", "size").should("eq", "icon");

    cy.wait(100).compareSnapshot({
      name: "indeterminateCircularWithIcon",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders indeterminate linear", () => {
    mount(<IndeterminateLinearLoadingIndWithLabel />);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Loading...");

    cy.get("ic-loading-indicator")
      .invoke("prop", "type")
      .should("eq", "linear");

    cy.wait(450).compareSnapshot({
      name: "indeterminateLinear",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.1,
    });
    cy.checkA11yWithWait();
  });

  it("renders determinate linear", () => {
    mount(
      <DeterminateLinearLoadingIndWithLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Loading...");

    cy.get("ic-loading-indicator").invoke("prop", "max").should("eq", 100);

    cy.compareSnapshot({
      name: "determinateLinear",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of indeterminate linear with many sizes", () => {
    mount(<IndeterminateLinearLoadingIndSizeSmallDefaultLargeFull />);

    cy.wait(1350).compareSnapshot({
      name: "indeterminateLinearsWith3Sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.1,
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of determinate linear with many sizes", () => {
    mount(
      <DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.compareSnapshot({
      name: "determinateLinearsWith3Sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of indeterminate dark circular with many sizes", () => {
    mount(<IndeterminateCircularDarkLoadingIndSizeSmallDefaultLarge />);
    cy.get("ic-loading-indicator")
      .invoke("prop", "appearance")
      .should("eq", "dark");

    cy.wait(100).compareSnapshot({
      name: "indeterminateCircularDarkWith3Sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
  });

  it("renders indeterminate dark circular icon size", () => {
    mount(<IndeterminateCircularDarkLoadingIndNoLabel />);
    cy.get("ic-loading-indicator")
      .invoke("prop", "appearance")
      .should("eq", "dark");
    cy.get("ic-loading-indicator").invoke("prop", "size").should("eq", "icon");

    cy.wait(100).compareSnapshot({
      name: "indeterminateCircularDarkWithIcon",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of indeterminate linear dark with many sizes", () => {
    mount(<IndeterminateLinearDarkLoadingIndSizeSmallDefaultLargeFull />);

    cy.wait(1350).compareSnapshot({
      name: "indeterminateLinearsDarkWith3Sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.1,
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of indeterminate circular with no label but description", () => {
    mount(<IndeterminateLoadingIndWithNameNoLabel />);
    cy.get("ic-loading-indicator")
      .invoke("prop", "description")
      .should("eq", "Loading");

    cy.wait(1350).compareSnapshot({
      name: "indeterminateCircularWithDescNoLabel",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.1,
    });
    cy.checkA11yWithWait();
  });

  it("renders indeterminate circular with changing label", () => {
    mount(<IndeterminateLoadingIndChangingLabel />);

    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Loading...");
    cy.compareSnapshot({
      name: "indeterminateCircularWithChangingLabelFirstLabel",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });

    cy.wait(4000);

    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Still loading...");
    cy.compareSnapshot({
      name: "indeterminateCircularWithChangingLabelSecondLabel",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });

    cy.checkA11yWithWait();
  });

  it("renders lots of determinate circular with inner label", () => {
    mount(
      <DeterminateCircularLoadingIndWithInnerLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );
    cy.get("ic-loading-indicator")
      .invoke("prop", "inner-label")
      .should("eq", "3");
    cy.get("ic-loading-indicator").invoke("prop", "min").should("eq", 0);

    cy.compareSnapshot({
      name: "determinateCircularWithInnerLabel",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
  });

  it("changes label after default label duration time (8 seconds) if appropriate label is given", () => {
    mount(<IndeterminateCircularLoadingIndE2ENoDuration />);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "First label");
    cy.wait(8000);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Second label");
  });

  it("should change label back to first in the string after timeout on last label option", () => {
    mount(<IndeterminateCircularLoadingIndE2ENoDuration />);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "First label");
    cy.wait(16000);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Third label");
    cy.wait(8000);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "First label");
  });

  it("should change label after specified amount of time", () => {
    mount(<IndeterminateCircularLoadingIndE2EWithDuration />);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "First label");
    cy.wait(2000);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Second label");
  });
});
