import { ChangeEvent, FormEvent } from "react";

export interface useFormCustomHook {
  formValues: FormState;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  reset: () => void;
}

export interface FormState {
  ref_people: string;
  appearance: string;
  history: string;
  film: string;
  img: string;
}
