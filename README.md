# Documentación de Facturate.pro

Este repositorio contiene la documentación oficial de [Facturate.pro](https://facturatepro.com), el sistema de facturación electrónica de Forjandi.

## 🚀 Acerca del proyecto

Esta documentación está construida con [Docusaurus](https://docusaurus.io/), un generador de sitios estáticos moderno optimizado para documentación técnica.

## 📋 Requisitos previos

- Node.js versión 18.0 o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/forjandi/facturate-docs.git
cd facturate-docs

# Instalar dependencias
npm install
# o
yarn install
```

## 💻 Desarrollo local

```bash
# Iniciar servidor de desarrollo
npm start
# o
yarn start
```

El comando iniciará un servidor local y abrirá el navegador en `http://localhost:3000/`. Los cambios se reflejarán automáticamente sin necesidad de reiniciar el servidor.

## 🏗️ Construcción

```bash
# Generar sitio estático
npm run build
# o
yarn build
```

Este comando genera contenido estático en el directorio `build` que puede ser servido por cualquier servicio de hosting estático.

## 📦 Despliegue

```bash
# Usando SSH
USE_SSH=true npm run deploy

# Sin SSH
GIT_USER=<tu-usuario-github> npm run deploy
```

## 📁 Estructura del proyecto

```
facturate-docs/
├── docs/              # Archivos de documentación en Markdown
├── blog/              # Artículos del blog (opcional)
├── src/               # Componentes React y páginas personalizadas
│   ├── components/
│   ├── css/
│   └── pages/
├── static/           # Recursos estáticos (imágenes, etc.)
└── docusaurus.config.ts  # Configuración principal
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📞 Soporte

- Email: [soporte@facturatepro.com](mailto:soporte@facturatepro.com)
- Sitio web: [https://facturatepro.com](https://facturatepro.com)
- Discord: [Únete a nuestra comunidad](https://discord.gg/facturatepro)

## 📄 Licencia

Copyright © 2024 Forjandi. Todos los derechos reservados.
