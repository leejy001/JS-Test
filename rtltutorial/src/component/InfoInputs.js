import React from "react";

function InfoInputs() {
  return (
    <>
      <div>
        <label htmlFor="username">이름</label>
        <input type="text" id="username" value="Tom" readOnly />
      </div>
      <div data-testid="my-div" />
      <div>
        <label htmlFor="profile">자기소개</label>
        <textarea id="profile"></textarea>
      </div>
    </>
  );
}

export default InfoInputs;
