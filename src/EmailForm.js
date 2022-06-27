import React, { useState, useCallback } from "react";
import "./EmailForm.css";
import { Toast, ToastContainer } from "react-bootstrap";

export default function EmailForm() {
  const [toastMessage, setToastMessage] = useState(undefined);
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")

  const onSubmit = useCallback(
    () => {
      if (!email || !confirmEmail) {
        setToastMessage({
          type: "Error",
          message: <strong>Bitte neue E-Mail-Adresse eingeben.</strong>,
        });
        return;
      }
      
      const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
      if (!emailRegex.test(email) || !emailRegex.test(confirmEmail)) {
        setToastMessage({
          type: "Error",
          message: <strong>Invalid email</strong>,
        });
        return
      }

      if (email !== confirmEmail) {
        setToastMessage({
          type: "Error",
          message: <strong>Emails do not match</strong>,
        });
        return
      } 
      
      setToastMessage({
        type: "Success",
        message: <strong>E-Mail-Adresse übermittelt</strong>,
      });
    },
    [email, confirmEmail]
  );

  return (
    <div>
      {/* <form
        novalidate="novalidate"
        // onSubmit={handleSubmit(onSubmit, onInvalid)}
      > */}
        <div className="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            // {...register("email", {
            //   required: "Bitte neue E-Mail-Adresse eingeben.",
            //   pattern: {
            //     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            //   },
            // })}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Neue E-Mail-Adresse"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/* <p>{errors.email?.message}</p> */}
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1"></label>
          <input
            // {...register("confirmEmail", {
            //   required: "Bitte neue E-Mail-Adresse eingeben.",
            //   pattern:c {
            //     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            //   },
            // })}
            name="confirmEmail"
            type="email"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Neue E-Mail-Adresse wiederholen"
            onChange={(e) => setConfirmEmail(e.target.value)}
            value={confirmEmail}
          />
          {/* <p>{errors.confirmEmail?.message}</p> */}
        </div>

        <div>
          <button className="btn btn-primary btn-lg save-button" onClick={onSubmit}>
            <strong>SPEICHERN</strong>
          </button>
        </div>
      {/* </form> */}
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
