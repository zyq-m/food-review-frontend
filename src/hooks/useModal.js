import { useState } from "react";

export default function useModal() {
  const [modal, setModal] = useState({ title: "", description: "" });

  function openModal() {
    document.getElementById("msg-modal").showModal();
  }

  function closeModal() {
    document.getElementById("msg-modal").close();
  }

  return { modal, setModal, openModal, closeModal };
}
