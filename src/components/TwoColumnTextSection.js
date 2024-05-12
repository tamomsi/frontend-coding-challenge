import React from "react";

const TwoColumnTextSection = () => {
  return (
    <div className="container mx-auto relative">
      {/* Mockup divider */}
      <div className="absolute bg-gray-400" style={{ width: "1200px", height: "1px", top: "84px", left: "20px" }}></div>

     {/* Header */}
<div className="bg-white p-4 mb-4" style={{ width: "auto", height: "36px", top: "20px", left: "20px", gap: "0px", opacity: "0px" }}>
  <h2 className="font-roboto font-bold text-black" style={{ fontSize: "26px", lineHeight: "36px", marginBottom: "10px", letterSpacing: "0.3px" }}>
    2-column text section
  </h2>
  <p className="text-lg font-roboto" style={{ fontSize: "24px", lineHeight: "32px", color: "#38342E" }}></p>
</div>


      {/* Left-aligned text */}
      <div className="bg-gray-300 p-4" style={{ width: "1434px", height: "421px", top: "156px", left: "242px" }}>
        <p className="text-base font-roboto leading-6" style={{ fontSize: "17px", lineHeight: "26px", letterSpacing: "0.2px", color: "#544E45" }}>
          Effiziente, kabellose Messung von bis zu vier zusätzlichen Parametern parallel über unsere Smart Probes. Mit praktischem Second Screen und intuitiver Bedienung – einfacher geht es nicht. Sparen Sie wertvolle Zeit mit der einfachen, intuitiven Dokumentation vor Ort und dem Versand der Messdaten per E-Mail durch die testo Smart App. Entdecken Sie die Vorteile der einfachen Datenintegration in Ihre betriebseigene Software mittels QR-Code – weniger Übertragungsfehler, weniger Papierkram, weniger Stress.
        </p>
      </div>
    </div>
  );
};

export default TwoColumnTextSection;
