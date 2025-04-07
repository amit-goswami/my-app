import {
  BaseInputProps,
  INPUT_TYPE,
  InputType,
} from "../../types/components.interface";

const BaseInput = <T extends InputType>(props: BaseInputProps<T>) => {
  const { dirty, hidden, type, ...rest } = props;

  const commonProps = {
    "data-dirty": dirty,
    className: hidden ? "hidden" : "",
    ...rest,
  };

  switch (type) {
    case INPUT_TYPE.TEXT_AREA:
      return (
        <textarea
          {...(commonProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    case INPUT_TYPE.SELECT:
    case INPUT_TYPE.MULTI_SELECT:
      return (
        <select
          {...(commonProps as React.SelectHTMLAttributes<HTMLSelectElement>)}
        />
      );
    case INPUT_TYPE.BUTTON:
      return (
        <button
          {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        />
      );
    default:
      return (
        <input
          type={type}
          {...(commonProps as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      );
  }
};

export default BaseInput;
