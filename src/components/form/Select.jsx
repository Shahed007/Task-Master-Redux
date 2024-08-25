import { Controller, useFormContext } from "react-hook-form";

const Select = ({
  name,
  defaultValue = "",
  label,
  required = false,
  options,
  ...props
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className={`w-full flex flex-col gap-2`}>
          {label && (
            <label htmlFor={name} className="text-lg font-semibold">
              {label}
            </label>
          )}
          <select
            {...field}
            {...props}
            required={required}
            className={`border h-10 rounded ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {error && (
            <span className="text-red-500 text-sm mt-1">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default Select;
