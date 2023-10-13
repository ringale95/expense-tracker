import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); //destructure of form element

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    /*<form onSubmit={handleSubmit((data) => console.log(data))}>*/
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type == "required" && (
          <p className="alert alert-warning">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="alert alert-warning">
            Name must be atleast 3 characters long
          </p>
        )}
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default Form;
