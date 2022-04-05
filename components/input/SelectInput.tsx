import React from 'react';

import clsx from 'clsx';
import { FormikProps } from 'formik';

type IProps = {
  label: string;
  name: string;
  options: Array<Record<string, string>>;
  className?: string;
  formik: FormikProps<any>;
};

const SelectInput: React.FC<IProps> = ({
  formik,
  label,
  options,
  name,
  className,
}: IProps): JSX.Element => {
  const { handleChange, touched, values, errors, handleBlur } = formik;
  const error = touched[name] && errors[name];
  const helperText = error && errors[name];
  return (
    <React.Fragment>
      <div className={'flex flex-col'}>
        <fieldset className={clsx(`border rounded  border-solid px-4 py-2 inline-block relative `,
         {'border-red':error, 'border-graylight':!error})}>
          <legend className={'text-label text-base font-light tracking-tight px-5'}>{label}</legend>
       
          <select 
          name={name}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          
          className={clsx(
            `  border-transparent focus:border-transparent focus:ring-0 font-normal text-pureblack
             outline-none  bg-white w-full`,
             {'text-pureblack':!error},
            className,
          )}>
        <option value='' label={`Choose ${label}`} />
        {options.map(({value, id}) => (
          <option key={id} value={value} label={value} />
        ))}
        </select>
            
        </fieldset>

        {error && <span className={'text-red font-medium text-sm'}>{helperText}</span>}
      </div>
    </React.Fragment>
  );
};

export default SelectInput;
