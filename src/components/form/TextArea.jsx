import { Controller, useFormContext } from "react-hook-form";

const TextArea = ({
  defaultValue = " ",
  label,
  required = false,
  disabled = false,
  placeholder,
  name,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full flex flex-col gap-2">
          {label && (
            <label htmlFor={name} className="text-base font-semibold">
              {label}
            </label>
          )}
          <textarea
            {...field}
            name={name}
            defaultValue={defaultValue}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
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

export default TextArea;
