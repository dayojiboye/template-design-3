import React from 'react';

const input = (props) => {
  let inputType = null;
  let inputElement = null;

  let labelStyle = [props.labelClass];
  let inputStyle = [props.inputClass];

  let errorMessage = '';

  if (!props.validity || props.loginError) {
    labelStyle.push(props.invalid);
    inputStyle.push(props.invalid);
  }

  if (props.value.trim() === '' && !props.validity) {
    errorMessage = (
      <small className={props.errorClass}>{props.emptyInputErrorText}</small>
    );
  } else if (props.value.trim() !== '' && !props.validity) {
    errorMessage = (
      <small className={props.errorClass}>{props.patternErrorText}</small>
    );
  }

  if (props.elType === 'input') {
    inputElement = (
      <input
        className={inputStyle.join(' ')}
        {...props.elConfig}
        value={props.value}
        onChange={props.changed}
        required={props.required}
      />
    );
  } else if (props.elType === 'select') {
    inputElement = (
      <select
        className={inputStyle.join(' ')}
        value={props.value}
        name={props.elConfig.name}
        id={props.elConfig.id}
        onChange={props.changed}
        required={props.required}
      >
        {props.elConfig.options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.displayValue}
            </option>
          );
        })}
      </select>
    );
  }

  if (props.noLabel) {
    inputType = inputElement;
  } else {
    inputType = (
      <div className={props.class}>
        <label className={labelStyle.join(' ')} htmlFor={props.elConfig.id}>
          {props.label}
        </label>
        {inputElement}
        {errorMessage}
      </div>
    );
  }

  return inputType;
};

export default input;
