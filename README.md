# Angular CRUD (Frontend del proyecto con Spring Boot)  
(Basado en el proyecto original de [Sotobotero](https://sotobotero.com))  
[![Powered by @sotobotero](https://img.shields.io/badge/Powered%20by-%40sotobotero-blue?style=flat-square&logo=twitter)](https://twitter.com/sotobotero)  
[![Sotobotero.com](https://img.shields.io/badge/Powered%20by-sotobotero.com-blue?style=flat-square&logo=twitter)](https://sotobotero.com/)

## 🌟 Descripción

Este repositorio contiene **el frontend desarrollado en Angular** de un proyecto CRUD que se integra con un **backend en Spring Boot**.  
Es una **versión personalizada y mejorada** del repositorio original de [Sotobotero](https://sotobotero.com), adaptada para trabajar con mi propio backend y aprendizaje de Angular y Spring Boot.

> ⚙️ *El objetivo es practicar la integración entre Angular y Spring Boot, y aplicar buenas prácticas de desarrollo fullstack.*

---

## 🚀 Mejoras y Cambios Realizados

- Refactorización de componentes y servicios.  
- Actualización de dependencias y estructura de carpetas.  
- Mejoras en el manejo de errores y mensajes al usuario.  
- Ajustes en la interfaz y estilos para una experiencia más clara.  
- Adaptación del README y documentación.  

---

## 🧩 Cómo Contribuir

¡Cualquier sugerencia o mejora es bienvenida! 🎉  
Si quieres aportar al proyecto:

1. Realiza un fork del repositorio.  
2. Crea una nueva rama con tus cambios.  
3. Envía un pull request.  

Consulta la guía original de contribución aquí:  
👉 [**Cómo contribuir con un proyecto en GitHub (Español)**](https://github.com/sotobotero/CodeHub/blob/develop/README.md#-cómo-contribuir)  
👉 [**How to Contribute with GitHub Project (English)**](https://github.com/sotobotero/CodeHub/blob/develop/README.md#-how-to-contribute)

---

## 🛠️ Requisitos

1. Node.js LTS (v18.16.0 o superior) y Angular CLI (v13 o superior).  
2. Backend en Spring Boot del proyecto.  
   - Si no está disponible, la aplicación cargará el frontend sin conexión a backend, mostrando solo la interfaz.

---

## ⚙️ Instalación y Ejecución

1. Clonar este repositorio:  
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```
2. Entrar en la carpeta del proyecto:  
   ```bash
   cd tu-repo
   ```
3. Instalar dependencias:  
   ```bash
   npm install
   ```
4. Ejecutar la aplicación en modo desarrollo:  
   ```bash
   ng serve --configuration=production
   ```
5. Ir a: [http://localhost:4200/customers](http://localhost:4200/customers)

> La aplicación se recargará automáticamente al detectar cambios en los archivos fuente.

---

## 🌐 Variables de Entorno en Angular 2+

Dado que Angular se ejecuta en el navegador, las variables de entorno de `environments/environment.ts` no están disponibles en el lado del servidor.  
Para usar variables de entorno en `environment.prod.ts`, puedes integrar la librería `dotenv` junto con el plugin `dotenv-webpack`.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia [MIT](https://github.com/sotobotero/CodeHub/blob/develop/LICENSE).  
Créditos al autor original: [Sotobotero](https://sotobotero.com).  
Modificaciones y mejoras: *[jorgealamoo]* ✨
