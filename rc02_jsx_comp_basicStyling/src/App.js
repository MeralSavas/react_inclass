import React from "react";

//? React, JSX kullanilmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir.

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.
//! Bir componentin return () kismi ise JSX kodlari icerir.
//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b
//! herhangi bir element kullanilabilir.

//? App componentinin tanimlanmasi

function App() {
  return (
    //* JSX
    //?
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
