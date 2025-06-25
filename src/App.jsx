import React from "react";
import { useForm, Controller } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      skills: [],
      age: "",
      bio: "",
      country: "India",
    },
    mode: "onChange", // Realtime validation
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleReset = () => {
    reset();
  };

  const handleSetValue = () => {
    setValue("firstName", "Aman");
    setValue("email", "aman@example.com");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>React Hook Form - Full Feature Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div>
          <label>First Name*</label>
          <input
            type="text"
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 2, message: "Too short" },
            })}
          />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input type="text" {...register("lastName")} />
        </div>

        {/* Email */}
        <div>
          <label>Email*</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        {/* Gender (Radio) */}
        <div>
          <label>Gender*</label>
          <div>
            <label>
              <input type="radio" value="Male" {...register("gender", { required: "Select gender" })} /> Male
            </label>
            <label>
              <input type="radio" value="Female" {...register("gender")} /> Female
            </label>
          </div>
          {errors.gender && <p style={{ color: "red" }}>{errors.gender.message}</p>}
        </div>

        {/* Skills (Checkbox) */}
        <div>
          <label>Skills*</label>
          <div>
            <label>
              <input type="checkbox" value="HTML" {...register("skills", { required: "Select at least one skill" })} />{" "}
              HTML
            </label>
            <label>
              <input type="checkbox" value="CSS" {...register("skills")} /> CSS
            </label>
            <label>
              <input type="checkbox" value="JS" {...register("skills")} /> JS
            </label>
          </div>
          {errors.skills && <p style={{ color: "red" }}>{errors.skills.message}</p>}
        </div>

        {/* Country (Select) */}
        <div>
          <label>Country*</label>
          <select {...register("country", { required: "Country is required" })}>
            <option value="">Select...</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <p style={{ color: "red" }}>{errors.country.message}</p>}
        </div>

        {/* Age (Controller example with number input) */}
        <div>
          <label>Age*</label>
          <Controller
            control={control}
            name="age"
            rules={{ required: "Age is required", min: { value: 18, message: "Must be at least 18" } }}
            render={({ field }) => <input type="number" {...field} />}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>

        {/* Bio */}
        <div>
          <label>Bio</label>
          <textarea {...register("bio")} />
        </div>

        {/* Watch Example */}
        <div>
          <strong>Real-time Name:</strong> {watch("firstName")} {watch("lastName")}
        </div>

        {/* Buttons */}
        <div style={{ marginTop: "20px" }}>
          <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>
            Submit
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="button" onClick={handleSetValue}>
            Set Default Name
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
