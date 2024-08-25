import { FormProvider, useForm } from "react-hook-form";

const Form = ({ children, onSubmit, resolver, defaultValues, className }) => {
  const formConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const submit = (data) => {
    onSubmit(data);
    reset;
  };

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
