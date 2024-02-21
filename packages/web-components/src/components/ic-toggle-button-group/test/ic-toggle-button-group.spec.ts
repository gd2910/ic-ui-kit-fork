import { newSpecPage } from "@stencil/core/testing";
import { ToggleButtonGroup } from "../ic-toggle-button-group";
import { ToggleButton } from "../../ic-toggle-button/ic-toggle-button";

const keyboard = (key: string): KeyboardEvent => {
  return new KeyboardEvent("keydown", { key: key });
};

describe("ic-toggle-button-group component", () => {
  describe("ic-toggle-button-group render tests", () => {
    it("should render default", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
        >
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle"></ic-toggle-button>
        </ic-toggle-button-group>`,
      });

      expect(page.root).toMatchSnapshot();
    });
    it("should render auto and single selelct", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
          select-type="single"
          select-method="auto"
        >
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle"></ic-toggle-button>
        </ic-toggle-button-group>`,
      });

      expect(page.root).toMatchSnapshot();
    });
    it("should render multi", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
          select-type="multi"
          select-method="auto"
        >
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle"></ic-toggle-button>
        </ic-toggle-button-group>`,
      });
      expect(page.rootInstance.selectMethod).toBe("manual");
      expect(page.root).toMatchSnapshot();
    });
    it("should render disabled and with accessibleLabel", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
          disabled="true"
          accessible-label="a11y label"
        >
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle"></ic-toggle-button>
        </ic-toggle-button-group>`,
      });
      expect(page.rootInstance.selectMethod).toBe("manual");
      expect(page.root).toMatchSnapshot();
    });
  });
  describe("ic-toggle-button unit tests", () => {
    it("getAllToggleButtons should return an array of slotted ic-toggle-buttons", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
            select-type="single"
            size="small"
          >
            <ic-toggle-button label="Toggle"></ic-toggle-button>
            <ic-toggle-button label="Toggle"></ic-toggle-button>
            <ic-toggle-button label="Toggle"></ic-toggle-button>
          </ic-toggle-button-group>`,
      });

      const toggleButtonArray = page.rootInstance.getAllToggleButtons();
      await page.waitForChanges();
      expect(toggleButtonArray.length).toBe(3);
    });
    it("focusing group should select the first ic-toggle-button when select method is 'single' and no other selection made", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
            select-type="single"
          >
            <ic-toggle-button label="Toggle"></ic-toggle-button>
            <ic-toggle-button label="Toggle"></ic-toggle-button>
            <ic-toggle-button label="Toggle"></ic-toggle-button>
          </ic-toggle-button-group>`,
      });
      const toggleGroup = (await document.querySelector(
        "ic-toggle-button-group"
      )) as HTMLIcToggleButtonGroupElement;
      const buttons = await Array.from(
        toggleGroup.querySelectorAll("ic-toggle-button")
      );
      await page.waitForChanges();

      toggleGroup.focus();

      await page.waitForChanges();

      expect(buttons[0].toggleChecked).toBeTruthy();
    });
    it("focusing group when an ic-toggle-button selected should not select first option", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
            select-type="single"
          >
            <ic-toggle-button label="Toggle"></ic-toggle-button>
            <ic-toggle-button label="Toggle"></ic-toggle-button>
            <ic-toggle-button label="Toggle"></ic-toggle-button>
          </ic-toggle-button-group>`,
      });
      const toggleGroup = (await document.querySelector(
        "ic-toggle-button-group"
      )) as HTMLIcToggleButtonGroupElement;
      const buttons = await Array.from(
        toggleGroup.querySelectorAll("ic-toggle-button")
      );
      await page.waitForChanges();

      buttons[1].toggleChecked = true;

      toggleGroup.focus();

      await page.waitForChanges();

      expect(buttons[0].toggleChecked).toBeFalsy();
      expect(buttons[1].toggleChecked).toBeTruthy();
    });
    it("focusing the toggle-button-group should focus but not select the first ic-toggle-button when select method is 'multi'", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `<ic-toggle-button-group
              select-type="multi"
              >
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              </ic-toggle-button-group>`,
      });

      const toggleGroup = (await document.querySelector(
        "ic-toggle-button-group"
      )) as HTMLIcToggleButtonGroupElement;
      const buttons = await Array.from(
        toggleGroup.querySelectorAll("ic-toggle-button")
      );
      await page.waitForChanges();

      toggleGroup.focus();

      await page.waitForChanges();

      expect(buttons[0].toggleChecked).toBeFalsy();
    });
    it("focusing the toggle-button-group should focus but not select the first ic-toggle-button when select method is 'multi'", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `<ic-toggle-button-group
              select-type="multi"
              >
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              </ic-toggle-button-group>`,
      });

      const eventSpy = jest.fn();
      page.win.addEventListener("icChange", eventSpy);

      const toggleGroup = (await document.querySelector(
        "ic-toggle-button-group"
      )) as HTMLIcToggleButtonGroupElement;
      const buttons = await Array.from(
        toggleGroup.querySelectorAll("ic-toggle-button")
      );
      await page.waitForChanges();
      buttons[0].toggleChecked = true;
      buttons[1].toggleChecked = true;

      const customEv = new CustomEvent("icToggleChecked", {});

      page.rootInstance.selectHandler(customEv);

      await page.waitForChanges();

      expect(eventSpy).toHaveBeenCalled();
    });
    it("select method auto should select the focused toggle, as well as directional input", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `<ic-toggle-button-group
              select-method="auto"
              >
              <ic-toggle-button label="Toggle" disabled="true"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              </ic-toggle-button-group>`,
      });

      const toggleGroup = (await document.querySelector(
        "ic-toggle-button-group"
      )) as HTMLIcToggleButtonGroupElement;
      const buttons = await Array.from(
        toggleGroup.querySelectorAll("ic-toggle-button")
      );
      await page.waitForChanges();

      await document.dispatchEvent(keyboard("Tab"));
      const focusinEvent = new FocusEvent("focusin", {});
      await buttons[2].dispatchEvent(focusinEvent);

      await page.waitForChanges();

      expect(buttons[2].toggleChecked).toBeTruthy();

      await buttons[2].dispatchEvent(keyboard("ArrowLeft"));
      expect(buttons[1].toggleChecked).toBeTruthy();
      await buttons[1].dispatchEvent(keyboard("ArrowLeft"));
      expect(buttons[2].toggleChecked).toBeTruthy();
    });
    it("handleKeyDown", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
                select-type="single"
              >
                <ic-toggle-button label="Toggle"></ic-toggle-button>
                <ic-toggle-button label="Toggle"></ic-toggle-button>
                <ic-toggle-button label="Toggle"></ic-toggle-button>
              </ic-toggle-button-group>`,
      });

      const firstButton = (await document.querySelector(
        "#0"
      )) as HTMLIcToggleButtonElement;
      const secondButton = (await document.querySelector(
        "#1"
      )) as HTMLIcToggleButtonElement;
      const thirdButton = (await document.querySelector(
        "#2"
      )) as HTMLIcToggleButtonElement;

      expect(firstButton.toggleChecked).toBeFalsy();
      await firstButton.click();

      await page.waitForChanges();
      page.rootInstance.handleKeyDown(keyboard("ArrowDown"));
      expect(secondButton.toggleChecked).toBeTruthy();
      expect(firstButton.toggleChecked).toBeFalsy();

      await page.waitForChanges();
      page.rootInstance.handleKeyDown(keyboard("ArrowUp"));
      expect(firstButton.toggleChecked).toBeTruthy();
      expect(secondButton.toggleChecked).toBeFalsy();

      page.rootInstance.handleKeyDown(keyboard("ArrowRight"));
      expect(secondButton.toggleChecked).toBeTruthy();
      expect(firstButton.toggleChecked).toBeFalsy();

      await page.waitForChanges();
      page.rootInstance.handleKeyDown(keyboard("ArrowLeft"));
      expect(firstButton.toggleChecked).toBeTruthy();
      expect(secondButton.toggleChecked).toBeFalsy();

      await page.waitForChanges();
      page.rootInstance.handleKeyDown(keyboard("ArrowLeft"));
      expect(firstButton.toggleChecked).toBeFalsy();
      expect(thirdButton.toggleChecked).toBeTruthy();

      await page.waitForChanges();
      page.rootInstance.handleKeyDown(keyboard("ArrowRight"));
      expect(firstButton.toggleChecked).toBeTruthy();
      expect(thirdButton.toggleChecked).toBeFalsy();

      secondButton.disabled = true;

      await page.waitForChanges();
      page.rootInstance.handleKeyDown(keyboard("ArrowRight"));
      expect(firstButton.toggleChecked).toBeFalsy();
      expect(thirdButton.toggleChecked).toBeTruthy();
    });
    it("isLastKeyTab", async () => {
      const page = await newSpecPage({
        components: [ToggleButtonGroup, ToggleButton],
        html: `        <ic-toggle-button-group
              select-type="single"
              select-method="auto"
              >
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              </ic-toggle-button-group>`,
      });

      expect(page.rootInstance.lastKeyPressed).toBeNull();

      await document.dispatchEvent(keyboard("Tab"));

      expect(page.rootInstance.isLastKeyTab()).toBeTruthy();
    });
  });
});
