type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type Action = {
  /**
   * This function will be called when the user clicks the action.
   */
  onClick: () => void;
  /**
   * Icon to be shown in the action.
   */
  icon: string | SVG;
  /**
   * Title of the action.
   */
  title?: string;
};

type Props = {
  /**
   * Text to be placed above the input. This label will be used as the aria-label attribute of the list of suggestions.
   */
  label?: string;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * Initial value of the input, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * Value of the input. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string;
  /**
   * Helper text to be placed above the input.
   */
  helperText?: string;
  /**
   * Text to be put as placeholder of the input.
   */
  placeholder?: string;
  /**
   * Action to be shown in the input. This is an object composed of an onClick function and an icon,
   * being the latter either an inline svg or a URL to the image.
   */
  action?: Action;
  /**
   * If true, the input will have an action to clear the entered value.
   */
  clearable?: boolean;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the input will be optional, showing '(Optional)'
   * next to the label. Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur and onChange functions when it has
   * not been filled.
   */
  optional?: boolean;
  /**
   * Prefix to be placed before the input value.
   */
  prefix?: string;
  /**
   * Suffix to be placed after the input value.
   */
  suffix?: string;
  /**
   * This function will be called when the user types within the input
   * element of the component. An object including the current value and
   * the error (if the value entered is not valid) will be passed to this
   * function. If there is no error, error will not be defined.
   */
  onChange?: (val: { value: string; error?: string }) => void;
  /**
   * This function will be called when the input element loses the focus.
   * An object including the input value and the error (if the value
   * entered is not valid) will be passed to this function. If there is no error,
   * error will not be defined.
   */
  onBlur?: (val: { value: string; error?: string }) => void;
  /**
   * If it is a defined value and also a truthy string, the component will
   * change its appearance, showing the error below the input component. If
   * the defined value is an empty string, it will reserve a space below
   * the component for a future error, but it would not change its look. In
   * case of being undefined or null, both the appearance and the space for
   * the error message would not be modified.
   */
  error?: string;
  /**
   * These are the options to be displayed as suggestions. It can be either an array or a function:
   *    - Array:    Array of options that will be filtered by the component.
   *    - Function: This function will be called when the user changes the value, we will send as a parameter the new value;
   *                apart from that this function should return one promise on which we should make 'then' to get the suggestions filtered.
   */
  suggestions?: string[] | ((value: string) => Promise<string[]>);
  /**
   * Regular expression that defines the valid format allowed by the input.
   * This will be checked both when the input element loses the focus and
   * while typing within it. If the string entered does not match the
   * pattern, the onBlur and onChange functions will be called with the
   * current value and an internal error informing that this value does not
   * match the pattern. If the pattern is met, the error parameter of both
   * events will not be defined.
   */
  pattern?: string;
  /**
   * Specifies the minimun length allowed by the input.
   * This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not
   * comply the minimum length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value
   * length does not comply the specified range. If a valid length is
   * reached, the error parameter of both events will not be defined.
   */
  minLength?: number;
  /**
   * Specifies the maximum length allowed by the input.
   * This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not
   * comply the maximum length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value
   * length does not comply the specified range. If a valid length is
   * reached, the error parameter of both events will not be defined.
   */
  maxLength?: number;
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the input value.
   * Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  autocomplete?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

/**
 * Reference to the component.
 */
export type RefType = HTMLDivElement;

/**
 * Single suggestion of the Autosuggest Text Input component.
 */
export type SuggestionProps = {
  id: string;
  value: string;
  onClick: () => void;
  suggestion: string;
  isLast: boolean;
  visuallyFocused: boolean;
  highlighted: boolean;
};

export default Props;
