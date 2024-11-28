import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import DisableDevtool from 'disable-devtool';

DisableDevtool();


const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);


//tawk.to//

useEffect(() => {
  // sayfa yüklendiğinde çalışacak JavaScript kodu
  var Tawk_API = Tawk_API || {};
  var Tawk_LoadStart = new Date();

  (function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/65ae843e8d261e1b5f566924/1hkor95hk';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
}, []); // Boş bağımlılık dizisi, bu etkileşimin bir kez çalışmasını sağlar.
  
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <AllRoutes />
      {/* End contact */}
      <ToastContainer />
      {/* Same as */}
    </>
  );
};

export default App;

