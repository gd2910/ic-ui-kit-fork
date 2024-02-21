import {
  Component,
  Host,
  h,
  Prop,
  Listen,
  Element,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import {
  IcSizes,
  IcThemeForeground,
  IcSelectTypes,
  IcSelectMethodTypes,
} from "../../utils/types";
import { IcChangeEventDetail } from "./ic-toggle-button-group.types";

interface lastKey {
  key: string | null;
  shift: boolean;
}

const TOGGLE_GROUP = "IC-TOGGLE-BUTTON-GROUP";

@Component({
  tag: "ic-toggle-button-group",
  styleUrl: "ic-toggle-button-group.css",
  shadow: true,
})
export class ToggleButtonGroup {
  @Element() el: HTMLIcToggleButtonGroupElement;

  @State() lastKeyPressed: lastKey = {
    key: null,
    shift: false,
  };

  /**
   * The accessible label of the toggle button group component to provide context for screen reader users.
   */
  @Prop() accessibleLabel?: string;

  /**
   * The appearance of the accordion group, e.g dark, or light.
   */
  @Prop() appearance: IcThemeForeground = "default";

  /**
   * If `true`, the toggle button group will be set to the disabled state.
   */
  @Prop() disabled: boolean = false;

  /**
   * If `true`, the toggle button group will fill the width of the container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The placement of the icons in relation to the toggle button labels.
   */
  @Prop() iconPlacement?: "left" | "right" | "top";

  /**
   * If `true`, the toggle button group will be in loading state.
   */
  @Prop() loading?: boolean = false;

  /**
   * If auto, controls are toggled as navigated to. If manual, controls must be actioned to change their toggled state. No effect if selectType is multi.
   */
  @Prop({ mutable: true }) selectMethod?: IcSelectMethodTypes = "manual";

  /**
   * sets whether a single option can be toggled at a time, or whether multiple options can be toggled. If multi, then select method is always manual.
   */
  @Prop() selectType?: IcSelectTypes = "single";

  /**
   * The size of the toggle buttons to be displayed. This does not affect the font size of the accessible label.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The variant of the toggle button.
   */
  @Prop({ reflect: true }) variant: "default" | "icon" = "default";

  /**
   * Emitted when a toggle-button is selected.
   */
  @Event() icChange: EventEmitter<IcChangeEventDetail>;

  @Listen("icToggleChecked")
  selectHandler(ev: CustomEvent, tabTarget?: HTMLIcToggleButtonElement): void {
    const allToggles = this.getAllToggleButtons();
    let clickedToggle = ev.target as HTMLIcToggleButtonElement;
    // tabTarget used in proxySelectHandler
    tabTarget && tabTarget.focus();
    if (this.selectType === "single") {
      if (!clickedToggle) {
        clickedToggle = tabTarget;
      }
      allToggles.forEach((el) => {
        if (el.id !== clickedToggle.id && el.toggleChecked) {
          el.toggleChecked = false;
        }
      });

      this.icChange.emit({
        toggleChecked: ev.detail.toggleChecked,
        selectedOption: clickedToggle,
      });
    } else {
      const toggledOptions = this.getAllToggleButtons().filter(
        (el) => el.toggleChecked && !el.disabled
      );

      this.icChange.emit({
        toggleChecked: toggledOptions.map((opt) => opt.toggleChecked),
        toggledOptions: toggledOptions.map((opt) => ({
          toggleButton: opt,
        })),
        selectedOption: clickedToggle,
      });
    }
  }

  componentWillLoad(): void {
    this.selectType === "multi" && (this.selectMethod = "manual");
    this.selectMethod === "auto" && this.selectType === "single";
    document.addEventListener("keydown", (ev) => {
      this.lastKeyPressed = {
        key: ev.key,
        shift: ev.shiftKey,
      };
    });
  }

  componentDidLoad(): void {
    this.getAllToggleButtons().forEach((el, i) => {
      el.size = this.size;
      el.loading = this.loading;
      el.iconPlacement = this.iconPlacement;
      el.disabled ? null : (el.disabled = this.disabled);
      el.appearance = this.appearance;
      el.variant = this.variant;
      el.fullWidth = this.fullWidth;
      el.id = i.toString();
      el.tabIndex = -1;
      this.selectMethod === "auto" &&
        el.addEventListener("focusin", (ev) => {
          if (this.isLastKeyTab()) {
            this.lastKeyPressed = null;
            this.handleSlotFocusAutoSelect(ev);
          }
        });
      el.addEventListener("keydown", (ev) => {
        this.handleKeyDown(ev);
      });
      el.classList.add("expand-toggle-group-child");
    });
  }

  // checks toggles when tabbed across in select method 'auto'
  private handleSlotFocusAutoSelect = (ev: FocusEvent): void => {
    const toggle = ev.target as HTMLIcToggleButtonElement;
    this.proxySelectHandler(toggle);
  };

  private handleHostFocus = (ev: FocusEvent): void => {
    if (this.loading || this.disabled) {
      return null;
    }
    const el = ev.target as HTMLIcToggleButtonGroupElement;
    const relEl = ev.relatedTarget as HTMLIcToggleButtonElement;
    const toggleButtons = Array.from(el.querySelectorAll("ic-toggle-button"));
    console.log("handlehost");
    // if 'auto' and no toggle checked, focus and select the first toggle button
    if (this.selectMethod === "auto") {
      if (toggleButtons.every((el) => !el.toggleChecked)) {
        toggleButtons[0].toggleChecked = true;
        this.proxySelectHandler(toggleButtons[0]);
      } else if (
        this.lastKeyPressed.shift === false ||
        (this.lastKeyPressed.shift === true && relEl.tagName == TOGGLE_GROUP)
      ) {
        // if toggle checked, focus that toggle
        const toggledButton = toggleButtons.filter((el) => el.toggleChecked);
        toggledButton[0].focus();
      }
    } else if (this.selectMethod === "manual") {
      // if 'manual' and no toggle checked, focus the first toggle button
      if (
        ((toggleButtons.every((el) => !el.toggleChecked) ||
          this.selectType !== "single") &&
          this.lastKeyPressed.shift === false) ||
        (toggleButtons.every((el) => !el.toggleChecked) &&
          this.lastKeyPressed.shift === true &&
          relEl.tagName == TOGGLE_GROUP)
      ) {
        toggleButtons[0].focus();
      } else if (
        this.lastKeyPressed.shift === false ||
        (this.lastKeyPressed.shift === true && relEl.tagName == TOGGLE_GROUP)
      ) {
        // if toggle checked and selectMethod is 'single' focus that toggle
        const toggledButton = toggleButtons.filter((el) => el.toggleChecked);
        toggledButton[0].focus();
      }
    }
  };

  // trigger selectHandler when unable to add 'target'
  private proxySelectHandler(toggle: HTMLIcToggleButtonElement): void {
    toggle.toggleChecked = true;
    const customEv = new CustomEvent("icToggleChecked", {
      detail: {
        toggleChecked: toggle.toggleChecked,
      },
    });
    this.selectHandler(customEv, toggle);
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    const toggleButtonOptions = this.getAllToggleButtons();
    const focussedChild = toggleButtonOptions.indexOf(
      toggleButtonOptions.filter((el) => el === document.activeElement)[0]
    );
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        this.selectMethod === "auto"
          ? this.proxySelectHandler(
              toggleButtonOptions[this.getNextItemToSelect(focussedChild, true)]
            )
          : toggleButtonOptions[
              this.getNextItemToSelect(focussedChild, true)
            ].focus();
        break;
      case "ArrowUp":
      case "ArrowLeft":
        this.selectMethod === "auto"
          ? this.proxySelectHandler(
              toggleButtonOptions[
                this.getNextItemToSelect(focussedChild, false)
              ]
            )
          : toggleButtonOptions[
              this.getNextItemToSelect(focussedChild, false)
            ].focus();
        break;
      case "Tab":
        break;
    }
  };

  private getNextItemToSelect = (
    currentItem: number,
    movingDown: boolean
  ): number => {
    const toggleButtonOptions = this.getAllToggleButtons();
    const numToggles = toggleButtonOptions.length - 1;

    if (currentItem < 1) {
      currentItem = 0;
    }

    let nextItem = movingDown ? currentItem + 1 : currentItem - 1;
    if (nextItem < 0) {
      nextItem = numToggles;
    } else if (nextItem > numToggles) {
      nextItem = 0;
    }

    if (toggleButtonOptions[nextItem].disabled) {
      nextItem = this.getNextItemToSelect(nextItem, movingDown);
    }

    return nextItem;
  };

  private getAllToggleButtons(): HTMLIcToggleButtonElement[] {
    return Array.from(this.el.querySelectorAll("ic-toggle-button"));
  }

  // used for tabbing backwards and 'auto' select method
  private isLastKeyTab(): boolean {
    return (
      this.lastKeyPressed.key === "Tab" && this.lastKeyPressed.shift === false
    );
  }

  render() {
    return (
      <Host
        aria-label={
          this.accessibleLabel ? this.accessibleLabel : "Toggle button group"
        }
        aria-disabled={this.disabled ? "true" : "false"}
        tabindex={0}
        class={{
          ["full-width"]: this.fullWidth,
          ["loading"]: this.loading,
          ["disabled"]: this.disabled,
          [`${this.appearance}`]: true,
        }}
        onFocus={this.handleHostFocus}
      >
        <slot></slot>
      </Host>
    );
  }
}
