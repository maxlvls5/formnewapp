import React, { useState } from "react";

function TheForm(props) {
  return (
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" />
    </form>
  );
}

export default TheForm;
