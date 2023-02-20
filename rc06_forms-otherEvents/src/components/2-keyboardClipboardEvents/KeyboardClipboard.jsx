import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  //  

  const handleKeyDown = (e) => {
    // bu kisim inputa rakam girilmesini engellemek icin
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please dont enter a number");
      e.preventDefault();
      // bu kisim girdiyi iptal ediyoruz. Yazma yok
    }
    e.keyCode === 13 && setInputValue("");
  };

  const handleAreaPaste = (e) => {
    e.target.style.border = "2px solid red";
    e.target.value += e.clipboardData.getData("text").toLocaleUpperCase();
    // burada buyuk harf kullanimini gosterdi toLocalUpperCase
    e.preventDefault();
  };

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        // rakam girilmesini engellemek icin
      />

      <p
        onCopy={(e) => {
          // kopyalanmasini engellemek icin
          e.preventDefault();
          alert("you cannot copy this doc");
        }}
        className="text-start mt-4"
      >
        {inputValue}
      </p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        rows="10"
        onPaste={handleAreaPaste}
        // input icine bir seyler yapistirma
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
