import React from "react";

export default function EmailForm() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Neue E-Mail-Adresse"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail"
            placeholder="Neue E-Mail-Adresse wiederholen"
          />
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            <strong>SPEICHERN</strong>
          </button>
        </div>
      </form>
    </div>
  );
}
