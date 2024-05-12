import React from "react";

const TwoColumnTextSection = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4">
          <h2 className="text-2xl font-bold">Alternativlos in der Abgasmessung:</h2>
          <p className="text-lg">das testo 300 NEXT LEVEL</p>
        </div>
        <div className="bg-gray-200 p-4">
          <p className="text-base leading-6">
            Effiziente, kabellose Messung von bis zu vier zusätzlichen Parametern parallel über unsere Smart Probes. Mit praktischem Second Screen und intuitiver Bedienung – einfacher geht es nicht. Sparen Sie wertvolle Zeit mit der einfachen, intuitiven Dokumentation vor Ort und dem Versand der Messdaten per E-Mail durch die testo Smart App. Entdecken Sie die Vorteile der einfachen Datenintegration in Ihre betriebseigene Software mittels QR-Code – weniger Übertragungsfehler, weniger Papierkram, weniger Stress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnTextSection;
