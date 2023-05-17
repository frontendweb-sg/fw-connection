import { Align } from "@/types";
import classNames from "classnames";
import { forwardRef } from "react";

/**
 * Form group component
 * @param param0
 * @returns
 */
interface FormGropProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  align?: Align;
  label?: string;
}
const FormGroup = forwardRef<HTMLDivElement, FormGropProps>(
  ({ children, className, align, label, ...rest }, ref) => {
    const classes = classNames("form-group mb-3", "text-" + align, className);
    return (
      <div className={classes} ref={ref} {...rest}>
        {label && <label className="form-label">{label}</label>}
        {children}
      </div>
    );
  }
);

export default FormGroup;
