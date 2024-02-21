/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
// import { IcToggleButtonGroup, IcToggleButton } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import {
  ToggleGroupCustomWidth,
  ToggleGroupDark,
  ToggleGroupDisabled,
  ToggleGroupFullWidth,
  ToggleGroupIconLeft,
  ToggleGroupIconOnly,
  ToggleGroupIconRight,
  ToggleGroupIconTop,
  ToggleGroupLarge,
  ToggleGroupLargeLabel,
  ToggleGroupLight,
  ToggleGroupLoading,
  ToggleGroupLoadingDark,
  ToggleGroupLoadingLight,
  ToggleGroupMulti,
  ToggleGroupSingle,
  ToggleGroupSmall,
} from "./IcToggleButtonGroupTestData";
import {
  HAVE_ATTR,
  NOT_HAVE_ATTR,
  NOT_HAVE_BEEN_CALLED,
} from "../utils/constants";

const DEFAULT_TEST_THRESHOLD = 1;
const IC_TOGGLE_BUTTON_GROUP = "ic-toggle-button-group";
const IC_TOGGLE_BUTTON = "ic-toggle-button";

const getToggle = (number: number) => {
  return cy.get(IC_TOGGLE_BUTTON_GROUP).find(IC_TOGGLE_BUTTON).eq(number);
};

/**
 * Justification for additional rule: in the browser this is
 * not reported as an issue by axe Devtools, but it upsets cypress
 */
const TOGGLE_BUTTON_AXE_OPTIONS = {
  rules: {
    ...CYPRESS_AXE_OPTIONS.rules,
    "nested-interactive": { enabled: false },
  },
};

const WIN_CONSOLE_SPY = "@spyWinConsoleLog";

describe("IcToggleButtonGroup", () => {
  describe("E2E", () => {
    it("Single/manual should check only one toggle", () => {
      mount(<ToggleGroupSingle />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(HAVE_ATTR, "toggle-checked");
      getToggle(2).click();
      getToggle(0).should(NOT_HAVE_ATTR, "toggle-checked");
      getToggle(2).should(HAVE_ATTR, "toggle-checked");
    });
    it("Multi should check several toggles", () => {
      mount(<ToggleGroupMulti />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "toggle-checked");
      getToggle(2).click();
      getToggle(2).should(HAVE_ATTR, "toggle-checked");
      getToggle(1).click();
      getToggle(1).should(HAVE_ATTR, "toggle-checked");
    });
    it("should focus parent but not interact with toggle when disabled", () => {
      cy.spy(window.console, "log").as("spyWinConsoleLog");
      mount(<ToggleGroupDisabled />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "toggle-checked");
      getToggle(1).click({ force: true });
      cy.get(WIN_CONSOLE_SPY).should(NOT_HAVE_BEEN_CALLED);
    });
    it("should focus toggle but not check with toggle when loading", () => {
      cy.spy(window.console, "log").as("spyWinConsoleLog");
      mount(<ToggleGroupLoading />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "toggle-checked");
      getToggle(1).click({ force: true });
      cy.get(WIN_CONSOLE_SPY).should(NOT_HAVE_BEEN_CALLED);
    });
  });
  describe("screenshots", () => {
    beforeEach(() => {
      cy.injectAxe();
    });

    afterEach(() => {
      cy.task("generateReport");
    });

    it("renders default", () => {
      mount(<ToggleGroupSingle />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "default",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });

      getToggle(0).click();
      cy.wait(200).compareSnapshot({
        name: "default clicked",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders small", () => {
      mount(<ToggleGroupSmall />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "small",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });

      getToggle(0).click();
      cy.wait(200).compareSnapshot({
        name: "small clicked",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders large", () => {
      mount(<ToggleGroupLarge />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "large",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });

      getToggle(0).click();
      cy.wait(200).compareSnapshot({
        name: "large clicked",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders full-width", () => {
      mount(<ToggleGroupFullWidth />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "full-width",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });

      getToggle(0).click();
      cy.wait(200).compareSnapshot({
        name: "full-width clicked",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders custom width", () => {
      mount(<ToggleGroupCustomWidth />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "custom width",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });

      getToggle(0).click();
      cy.wait(200).compareSnapshot({
        name: "custom width clicked",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders toggle with large label", () => {
      mount(<ToggleGroupLargeLabel />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "large label",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });

      getToggle(0).click();
      cy.wait(200).compareSnapshot({
        name: "large label clicked",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders light", () => {
      mount(
        <div style={{ backgroundColor: "black", padding: "1rem" }}>
          <ToggleGroupLight />
        </div>
      );

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "light",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });

      getToggle(0).click();
      cy.wait(200).compareSnapshot({
        name: "light clicked",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders dark", () => {
      mount(<ToggleGroupDark />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "dark",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });

      getToggle(0).click();
      cy.wait(200).compareSnapshot({
        name: "dark clicked",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders disabled", () => {
      mount(<ToggleGroupDisabled />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "disabled",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders loading", () => {
      mount(<ToggleGroupLoading />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "loading",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders loading light", () => {
      mount(<ToggleGroupLoadingLight />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "loading light",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders loading dark", () => {
      mount(<ToggleGroupLoadingDark />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "loading dark",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
    it("renders icons", () => {
      mount(
        <div>
          <ToggleGroupIconOnly />
          <ToggleGroupIconRight />
          <ToggleGroupIconLeft />
          <ToggleGroupIconTop />
        </div>
      );

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "icons",
        testThreshold: DEFAULT_TEST_THRESHOLD,
      });
    });
  });
});
