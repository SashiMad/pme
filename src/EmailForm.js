import React from "react";
import { useForm } from "react-hook-form";

export default function EmailForm() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Neue E-Mail-Adresse"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1"></label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Neue E-Mail-Adresse wiederholen"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            <strong>SPEICHERN</strong>
          </button>
        </div>
      </form>
    </div>
  );
}
