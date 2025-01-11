import React, { useEffect } from "react";
import { saveAs } from "file-saver";

function App() {
  useEffect(() => {
    const saveToDocuments = async () => {
      // Crear un archivo con contenido
      const content = "Este es el contenido del archivo guardado en Documents.";
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

      // Proporcionar un nombre al archivo
      const fileName = "archivo-en-Documents.txt";

      // Usar FileSaver.js para descargar el archivo
      saveAs(blob, fileName);
    };

    // Llamar automáticamente a la función para descargar el archivo
    saveToDocuments();
  }, []);

  return (
    <div>
      <h1>Descargar Archivo</h1>
      <p>El archivo se descargará automáticamente al cargar la página.</p>
    </div>
  );
}

export default App;
