"use client";
import Header from "../components/Header/Header";

export default function Contact() {
  const text = { message: "Contact Page", id: 12 };
  const array = [1, 2, 3, 4, 5];
  return (
    <>
      <Header text={text} array={array} />
      <h1>Contact Page</h1>
    </>
  );
}
