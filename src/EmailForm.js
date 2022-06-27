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
          message: <strong>Die E-Mail-Adressen müssen übereinstimmen</strong>,
        });
        return;
      } else {
        setToastMessage({
          type: "Success",
          message: <strong>E-Mail-Adresse übermittelt</strong>,
        });
      }
    },
    [emailsMatch]
  );

  const onInvalid = useCallback(() => {
    setToastMessage({
      type: "Error",
      message: <strong>Ungültige E-Mail-Adresse</strong>,
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
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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
        <ToastContainer position="top-center" className="p-3">
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
