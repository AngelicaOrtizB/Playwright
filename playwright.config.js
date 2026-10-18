// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Carpeta con los archivos de prueba.
  testDir: "./tests",
  // Ejecutar en paralelo las pruebas de cada archivo.
  fullyParallel: true,
  // Reporte HTML en playwright-report/.
  reporter: "html",
  // Navegadores en los que se ejecutan las pruebas.
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});