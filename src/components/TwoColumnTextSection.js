import React from "react";
import styles from "./TwoColumnTextSection.module.css";

const TwoColumnTextSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2 className={styles.heading}>Alternativlos in der Abgasmessung:</h2>
        <p className={styles.text}>das testo 300 NEXT LEVEL</p>
      </div>
      <div className={styles.column}>
        <p className={styles.paragraph}>
          Effiziente, kabellose Messung von bis zu vier zusätzlichen Parametern parallel über unsere Smart Probes. Mit praktischem Second Screen und intuitiver Bedienung – einfacher geht es nicht. Sparen Sie wertvolle Zeit mit der einfachen, intuitiven Dokumentation vor Ort und dem Versand der Messdaten per E-Mail durch die testo Smart App. Entdecken Sie die Vorteile der einfachen Datenintegration in Ihre betriebseigene Software mittels QR-Code – weniger Übertragungsfehler, weniger Papierkram, weniger Stress.
        </p>
      </div>
    </div>
  );
};

export default TwoColumnTextSection;
