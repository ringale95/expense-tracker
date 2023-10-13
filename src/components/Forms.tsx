import { FieldValues, useForm } from "react-hook-form";
import categories from "./categories";
interface Props {
  onSubmit: (data: FormData) => void;
}
interface FormData {
  description: string;
  amount: number;
  category: string;
}

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, //formstate help to give errors validations//
  } = useForm<FormData>();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Expense Tracker</h2>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 3 })}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description?.type == "required" && (
            <p className="alert alert-warning">Description is required</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="alert alert-warning">Amount is required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { required: true })}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>
        {errors.amount?.type == "required" && (
          <p className="alert alert-warning">Amount is required</p>
        )}

        <div className="mb-3">
          <label htmlFor="Category" className="form-lable">
            Categories
          </label>
          <select
            {...(register("category"), { required: true })}
            id="Category"
            className="form-select"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
