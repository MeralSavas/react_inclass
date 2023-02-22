//?=============================================================
//?                 LIFECYCLE METOTLARI
//?      https://reactjs.org/docs/react-component.html
//?=============================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React mototlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)
  
import React from "react";


//! 1-) Bir componentin olsuturulmasinda cagrilir
class LifeCycleMethods extends React.Component {
  constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 0, //state baslangic degeri verme
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  //bind yapmaya gerek yok cunku arrow function yazdik.
  //! 3-) Bir component DOM agacina eklendiginde calistirilir.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir.
  componentDidMount() {
    console.log("Mounted");
  }  //bind etmeye gerek yoktur. Reactin yazdiklari dogustan bind edilmis 

  //! 4-) Bu metot ilk render haric diger tüm render'lardan sonra cagrilir.
  //!  prevState ve prevProps degerlerini parametre olarak alabilir.
  componentDidUpdate(prevProps, prevState) {
    console.log("Updated");
    // console.log(prevState.count);
  }

  //! 5-) Bir component DOM dan kaldirildiktan hemen sonra cagirilir.Yapilan islemler bellekten tamamen silinir.
  componentWillUnmount() {
    console.log("Unmounted");
  }


  //! 2-) Her bir render'da cagrilir
  render() {
    console.log("Rendered");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
