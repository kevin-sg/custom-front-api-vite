import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { createPeople } from "../services";
import { FormState, useFormCustomHook } from "../models";

function useForm(formData: FormState): useFormCustomHook {
  const [formValues, setFormValues] = useState(formData);

  function handleInputChange({ target }: ChangeEvent<HTMLInputElement>): void {
    setFormValues((prev) => ({ ...prev, [target.name]: target.value }));
    console.log(formValues);
  }

  function handleTextAreaChange({ target }: ChangeEvent<HTMLTextAreaElement>): void {
    setFormValues((prev) => ({ ...prev, [target.name]: target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate field
    if (validateFilds()) return;

    try {
      // close toast
      toast.dismiss();

      const { data } = await createPeople(formValues);
      if (data) {
        toast.success("successfully created", { autoClose: 2000 });
      }
      // reset toast
      reset();
    } catch (err: any) {
      (err.response.data.errors as any[])?.forEach((el) => {
        toast.error(el.msg, { autoClose: 3000 });
      });
    }
  }

  function validateFilds(): boolean {
    const isValidField = Object.values(formValues).some((el) => el === "");
    if (isValidField) {
      toast.warning("Empty fields error!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return true;
    }
    return false;
  }

  function reset(): void {
    setFormValues({ ...formData });
  }

  return { formValues, handleInputChange, handleTextAreaChange, handleSubmit, reset };
}

export default useForm;
