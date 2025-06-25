import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input type="text" {...register("firstName", { required: true, minLength: 1 })} />
          {errors.firstName && <p>First name is required</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" {...register("lastName")} />
        </div>

        <button type="submit">Submit Now</button>
      </form>
    </div>
  );
};

export default App;
