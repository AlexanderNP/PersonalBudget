import { Login } from "@/modules/Auth/components/Login";
import { Registration } from "./components/Registration";
import { useState } from "react";

type SelectType = "login" | "registration";

export const Auth = () => {
  const [select, useSelect] = useState<SelectType>("login");

  const handleSelect = (selectedType: SelectType) => {
    useSelect(selectedType);
  };

  return (
    <>
      {select === "login" ? (
        <Login callback={handleSelect}></Login>
      ) : (
        <Registration callback={handleSelect}></Registration>
      )}
    </>
  );
};
