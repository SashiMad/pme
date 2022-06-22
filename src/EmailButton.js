import React from "react";

export default function EmailButton() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover"
      >
        <strong>E-MAIL-ADRESSE ÄNDERN</strong>
      </button>
    </div>
  );
}
