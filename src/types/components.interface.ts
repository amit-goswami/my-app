// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UniversalType = any;

export enum INPUT_TYPE {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  NUMBER = "number",
  FILE = "file",
  RADIO = "radio",
  CHECKBOX = "checkbox",
  MULTI_CHECKBOX = "multi-checkbox",
  COLOR = "color",
  DATE = "date",
  DATETIME = "datetime-local",
  DATE_RANGE = "date-range",
  DATETIME_RANGE = "datetime-range",
  NUMERIC_RANGE = "numeric-range",
  REGEX = "regex",
  TEXT_AREA = "textarea",
  SELECT = "select",
  MULTI_SELECT = "multi-select",
  IMAGE = "image",
  SINGLE_FILE = "single-file",
  MULTI_FILE = "multi-file",
  RANGE = "range",
  TIME = "time",
  BUTTON = "button",
}

export type InputType =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement
  | HTMLButtonElement;

export interface BaseInputProps<T extends InputType> {
  // Core attributes
  id?: string;
  name?: string;
  value?: UniversalType;
  defaultValue?: UniversalType;
  type?: INPUT_TYPE;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string; // Regex pattern for validation
  hidden?: boolean;

  // Event handlers
  onChange?: (event: React.ChangeEvent<T>) => void;
  onFocus?: (event: React.FocusEvent<T>) => void;
  onBlur?: (event: React.FocusEvent<T>) => void;
  onKeyUp?: (event: React.KeyboardEvent<T>) => void;
  onKeyDown?: (event: React.KeyboardEvent<T>) => void;
  onKeyPress?: (event: React.KeyboardEvent<T>) => void;
  onClick?: (event: React.MouseEvent<T>) => void;

  // Styling and layout
  className?: string;
  style?: React.CSSProperties;

  // Special attributes for specific input types
  accept?: string; // For 'file' type, e.g., ".jpg,.png,.jpeg"
  multiple?: boolean; // For 'file' type
  step?: number; // For 'number' or 'range' type
  min?: number | string; // For 'number', 'range', 'date', 'time', 'datetime-local', 'month', 'week'
  max?: number | string; // For 'number', 'range', 'date', 'time', 'datetime-local', 'month', 'week'
  checked?: boolean; // For 'radio' and 'checkbox'
  defaultChecked?: boolean; // For 'radio' and 'checkbox'
  alt?: string; // For 'image' type
  src?: string; // For 'image' type
  list?: string; // Refers to a <datalist> element

  //dirty - whether it has been touched or not
  dirty?: boolean;
  //Validity of input
  invalid?: boolean;

  // ARIA and accessibility attributes
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
  ariaValueNow?: number;
  ariaValueMin?: number;
  ariaValueMax?: number;

  // Custom data attributes
  [key: string]: UniversalType; // This allows for custom data-* attributes or any other prop not explicitly listed
}
