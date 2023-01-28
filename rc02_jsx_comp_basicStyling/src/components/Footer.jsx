// Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
// JSX icerisinde degiskenler {} icerisinde gosterilir.
// Footer comp.

const Footer = () => {
  return <footer>Copyrigt by Clarusway, {new Date().getFullYear()}</footer>;
};

export default Footer;
