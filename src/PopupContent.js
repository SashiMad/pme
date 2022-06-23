import React from "react";
import EmailForm from "./EmailForm";

export default function PopupContent() {
  return (
    <div>
      <h2>E-Mail-Adresse ändern</h2>
      <hr />
      <p class="card-text">
        Bitte gib deine neue E-Mail-Adresse zweimal an. Deine alte
        E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten oder
        Fragen werden wir dich künftig über die neue E-Mail-Adresse
        kontaktieren. Um wieder alle Funktionen des Portals nutzen zu können,
        musst du deine neue E-Mail-Adresse bestätigen.
      </p>
      <EmailForm />
    </div>
  );
}
