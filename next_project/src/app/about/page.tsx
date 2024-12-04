"use client";
import Header from "../components/Header/Header";

export default function About() {
  const text = { message: "Contact Page", id: 22 };
  const array = [10, 12, 13, 14, 15];
  return (
    <>
      <Header text={text} array={array} />
      <h1>About Page</h1>
    </>
  );
}
