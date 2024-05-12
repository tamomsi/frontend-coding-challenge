import React from "react";

const TwoColumnTextSection = () => {
  return (
    <div className="container mx-auto relative">
      {/* Mockup divider */}
      <div className="absolute bg-gray-400" style={{ width: "1200px", height: "1px", top: "84px", left: "20px" }}></div>

      {/* Header */}
      <div className="bg-gray-100 p-4 mb-4" style={{ width: "262px", height: "36px", top: "20px", left: "20px" }}>
        <h2 className="text-xl font-roboto font-bold text-black" style={{ fontSize: "26px", lineHeight: "36px", marginBottom: "10px", letterSpacing: "0.3px" }}>Alternativlos in der Abgasmessung:</h2>
        <p className="text-lg font-roboto" style={{ fontSize: "24px", lineHeight: "32px", color: "#38342E" }}>das testo 300 NEXT LEVEL</p>
      </div>

      {/* Two-column text section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4" style={{ width: "706px", height: "64px", top: "156px", left: "243px" }}>
          <p className="text-base font-roboto leading-6" style={{ fontSize: "17px", lineHeight: "26px", letterSpacing: "0.2px", color: "#544E45" }}>
            Effiziente, kabellose Messung von bis zu vier zusätzlichen Parametern parallel über unsere Smart Probes. Mit praktischem Second Screen und intuitiver Bedienung – einfacher geht es nicht. Sparen Sie wertvolle Zeit mit der einfachen, intuitiven Dokumentation vor Ort und dem Versand der Messdaten per E-Mail durch die testo Smart App. Entdecken Sie die Vorteile der einfachen Datenintegration in Ihre betriebseigene Software mittels QR-Code – weniger Übertragungsfehler, weniger Papierkram, weniger Stress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnTextSection;
