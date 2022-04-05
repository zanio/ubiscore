import React from 'react';

import clsx from 'clsx';
import { FormikProps } from 'formik';

type IProps = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  className?: string;
  formik: FormikProps<any>;
  autoCompleteBehavior?: string;
  inputDisabled?: boolean;
};

const TextInput: React.FC<IProps> = ({
  formik,
  label,
  inputDisabled = false,
  name,
  autoCompleteBehavior = 'off',
  type = 'text',
  className,
  placeholder,
}: IProps): JSX.Element => {
  const { handleChange, touched, values, errors, handleBlur } = formik;
  const error = touched[name] && errors[name];
  const helperText = error && errors[name];
  return (
    <React.Fragment>
      <div className={'flex flex-col'}>
        <fieldset className={clsx(`border rounded  border-solid px-4 py-2 `, {'border-red':error, 'border-graylight':!error})}>
          <legend className={'text-label text-base font-light tracking-tight px-5'}>{label}</legend>
        <input
          autoComplete={autoCompleteBehavior}
          onChange={handleChange}
          onBlur={handleBlur}
          type={type}
          value={values[name]}
          disabled={inputDisabled}
          className={clsx(
            `  border-transparent focus:border-transparent focus:ring-0 font-normal
             text-pureblack
             placeholder:text-slate-300
             outline-none  bg-white w-full`,
             {'text-pureblack':!error,'text-red':error},
            className,
          )}
          placeholder={placeholder}
          name={name}
        />
        </fieldset>

        {error && <span className={'text-red font-normal text-sm'}>{helperText}</span>}
      </div>
    </React.Fragment>
  );
};

export default TextInput;
