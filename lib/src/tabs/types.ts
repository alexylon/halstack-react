type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type TabCommonProps = {
  /**
   * Whether the tab is disabled or not.
   */
  isDisabled?: boolean;
  /**
   * If the value is 'true', an empty badge will appear.
   * If it is 'false', no badge will appear.
   * If a number is put it will be shown as the label of the notification
   * in the tab, taking into account that if that number is greater than 99,
   * it will appear as '+99' in the badge.
   */
  notificationNumber?: boolean | number;
};

type TabLabelProps = TabCommonProps & {
  /**
   * Tab label.
   */
  label: string;
  /**
   * Element or path used as the icon that will be displayed in the tab.
   */
  icon?: string | SVG;
};

type TabIconProps = TabCommonProps & {
  /**
   * Tab label.
   */
  label?: string;
  /**
   * Element or path used as the icon that will be displayed in the tab.
   */
  icon: string | SVG;
};

type Props = {
  /**
   * An array of objects representing the tabs.
   */
  tabs: (TabLabelProps | TabIconProps)[];
  /**
   * Whether the icon should appear above or to the left of the label.
   */
  iconPosition?: "top" | "left";
  /**
   * Initially active tab, only when it is uncontrolled.
   */
  defaultActiveTabIndex?: number;
  /**
   * The index of the active tab. If undefined, the component will be
   * uncontrolled and the active tab will be managed internally by the component.
   */
  activeTabIndex?: number;
  /**
   * This function will be called when the user clicks on a tab. The index of the
   * clicked tab will be passed as a parameter.
   */
  onTabClick?: (tabIndex: number) => void;
  /**
   * This function will be called when the user hovers a tab.The index of the
   * hovered tab will be passed as a parameter.
   */
  onTabHover?: (tabIndex: number) => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex for each tab.
   */
  tabIndex?: number;
};

export default Props;
