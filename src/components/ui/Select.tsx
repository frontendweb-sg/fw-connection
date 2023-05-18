import React, { SelectHTMLAttributes, forwardRef, Ref } from "react";

export type SelectProps<T> = SelectHTMLAttributes<HTMLSelectElement> & {
  options: T[];
  getOptionLabel: (option: T) => string;
};

export type SelectRef = HTMLSelectElement;

/**
 * Select component
 */
const Select = <T,>(
  { options, ...rest }: SelectProps<T>,
  ref: Ref<SelectRef>
) => {
  return (
    <div className="select">
      <select ref={ref} {...rest}>
        {options.map((option) => (
          <option key={JSON.stringify(option)}>sdfsd</option>
        ))}
      </select>
    </div>
  );
};

export default forwardRef<SelectRef, SelectProps<any>>(Select);
