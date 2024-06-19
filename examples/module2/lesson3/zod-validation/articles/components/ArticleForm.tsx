import { useForm } from '../hooks/useForm';
import { ArticleFormFields, ArticleFormSchema } from '../models/ArticleForm';

interface ArticleFormProps {
  onFormSubmit: (title: string, content: string) => void;
}

export const ArticleForm = ({ onFormSubmit }: ArticleFormProps) => {
  const { formData, handleChange, handleValidation, errors } =
    useForm<ArticleFormFields>(ArticleFormSchema, {
      title: '',
      content: '',
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidation().then(({ title, content }) => {
      return onFormSubmit(title, content);
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          Title
          <input
            name="title"
            type="text"
            onChange={handleChange}
            value={formData.title}
            className="border border-gray-200 rounded-md p-2"
            placeholder="In a galaxy far, far away..."
          />
        </label>
        <label className="flex flex-col">
          Content
          <textarea
            name="content"
            className="border border-gray-200 rounded-md p-2"
            placeholder="Once upon a time..."
            value={formData.content}
            onChange={handleChange}
            rows={5}
          />
        </label>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2"
          >
            Submit
          </button>
        </div>
        <ul>
          {errors.map((error, index) => (
            <li key={index} className="text-red-500">
              {error}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ArticleForm;
