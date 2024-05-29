import { useState } from 'react';
import { ZodError, ZodSchema } from 'zod';

type FormInputType = HTMLInputElement & HTMLTextAreaElement;

export const useForm = <T>(schema: ZodSchema, initialState: T) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<FormInputType>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidation = () => {
    return new Promise<T>((resolve, reject) => {
      try {
        schema.parse(formData);
        setErrors([]);
        resolve(formData);
      } catch (error) {
        if (error instanceof ZodError) {
          setErrors(error.errors.map((err) => err.message));
        }
        reject(errors);
      }
    });
  };

  return { formData, handleChange, handleValidation, errors };
};
