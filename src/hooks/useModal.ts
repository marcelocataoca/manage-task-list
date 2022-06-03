import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function useModal(){
  const value = useContext(ModalContext);
  return value;
}