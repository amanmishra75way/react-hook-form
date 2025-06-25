import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <label>First Name</label>
          <input type="text" {...register("firstName")} />
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
