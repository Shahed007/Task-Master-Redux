import { Controller, useFormContext } from "react-hook-form";

const Input = ({
  name,
  label,
  defaultValue = "",
  required = false,
  disabled = false,
  type = "text",
  placeholder,
  ...props
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue} // Define the default value here
      render={({ field, fieldState: { error } }) => (
        <div className="w-full flex flex-col gap-2">
          {label && (
            <label className="text-base font-semibold" htmlFor={name}>
              {label}
            </label>
          )}
          <input
            {...field}
            {...props}
            value={field.value || ""} // Ensure the input is controlled
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            type={type}
            className={`rounded ${
              error ? "border-red-500" : "border-gray-300 w-full flex"
            }`}
          />
          {error && (
            <span className="text-red-500 text-sm mt-1">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default Input;
