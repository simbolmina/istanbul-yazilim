import React from "react";
import MyRouter from "routers/index";
import FloatingWhatsApp from "react-floating-whatsapp";

function App() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <a
        href="https://api.whatsapp.com/send/?phone=905424296653&text&app_absent=0"
        target="_blank"
      >
        <FloatingWhatsApp
          styles={{ zIndex: 5000 }}
          phoneNumber="+905300334018"
          accountName="Test"
          allowClickAway
          // notificationDelay={60000} // 1 minute
        />
      </a>
      <MyRouter />
    </div>
  );
}

export default App;
