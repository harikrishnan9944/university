import React from "react";
import RegisterForm from "../../../../moduls/Register_form";
import Update_form from "./_componets/Update_form";


function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Update_form />
    </div>
  );
}

export default Page;
