import React from "react";
import { useForm } from "react-hook-form";
import "./EmailForm.css";

export default function EmailForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  console.log("errors", errors);

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form novalidate="novalidate" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            {...register("email", {
              required: "Bitte neue E-Mail-Adresse eingeben.",
              pattern: {
                value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                message: "Bitte eine valide E-Mail-Adresse eingeben.",
              },
            })}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Neue E-Mail-Adresse"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1"></label>
          <input
            {...register("email", {
              required: "Bitte neue E-Mail-Adresse eingeben.",
              pattern: {
                value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                message: "Bitte eine valide E-Mail-Adresse eingeben.",
              },
            })}
            name="emailConfirmation"
            type="email"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Neue E-Mail-Adresse wiederholen"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-lg save-button">
            <strong>SPEICHERN</strong>
          </button>
        </div>
      </form>
    </div>
  );
}
