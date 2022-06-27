import React, { useMemo, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import "./EmailForm.css";
import { Toast, ToastContainer } from "react-bootstrap";

export default function EmailForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm();

  const [toastMessage, setToastMessage] = useState(undefined);

  const values = getValues();

  const emailsMatch = useMemo(() => {
    return values.email === values.confirmEmail;
  }, [values]);

  const onSubmit = useCallback(
    (data) => {
      if (!emailsMatch) {
        setToastMessage({
          type: "Error",
          message: "Emails don't match",
        });
        return;
      } else {
        setToastMessage({
          type: "Success",
          message: "Submitted",
        });
      }
    },
    [emailsMatch]
  );

  const onInvalid = useCallback(() => {
    setToastMessage({
      type: "Error",
      message: "Invalid email",
    });
  });

  return (
    <div>
      <form
        novalidate="novalidate"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
      >
        <div className="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            {...register("email", {
              required: "Bitte neue E-Mail-Adresse eingeben.",
              pattern: {
                value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
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
            {...register("confirmEmail", {
              required: "Bitte neue E-Mail-Adresse eingeben.",
              pattern: {
                value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
              },
            })}
            name="confirmEmail"
            type="email"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Neue E-Mail-Adresse wiederholen"
          />
          <p>{errors.confirmEmail?.message}</p>
        </div>

        <div>
          <button type="submit" className="btn btn-primary btn-lg save-button">
            <strong>SPEICHERN</strong>
          </button>
        </div>
      </form>
      {toastMessage && (
        <ToastContainer position="bottom-end" className="p-3">
          <Toast
            style={
              toastMessage.type === "Error"
                ? { color: "red" }
                : { color: "green" }
            }
          >
            <Toast.Body>{toastMessage.message}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </div>
  );
}
