# ⚡ React Assemble

> Tu portal Marvel definitivo: héroes, películas y videojuegos en un solo lugar.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/licencia-MIT-green)

🔗 **Demo en vivo:** [react-assemble.netlify.app](https://react-assemble.netlify.app)

---

## 📖 Descripción

**React Assemble** es una aplicación web desarrollada con React que permite explorar el universo Marvel: consulta información detallada sobre personajes, descubre todas las películas del MCU y explora videojuegos relacionados con el universo Marvel.

La aplicación integra múltiples fuentes de datos y ofrece búsqueda unificada, sistema de favoritos global y navegación fluida entre secciones.

---

## ✨ Funcionalidades

- 🦸 **Personajes** — Explora héroes y villanos con stats, poderes y descripción completa
- 🎬 **Películas** — Catálogo completo del MCU con sinopsis, puntuaciones y detalles vía TMDB
- 🎮 **Videojuegos** — Descubre todos los juegos del universo Marvel vía RAWG
- 🔍 **Búsqueda unificada** — Encuentra personajes, películas y juegos desde un único buscador
- 📄 **Paginación** — Navega por catálogos extensos cómodamente
- 🔐 **Autenticación** — Sistema de login y registro de usuarios

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| **React 18** | Librería principal de UI |
| **Vite** | Bundler y servidor de desarrollo |
| **React Router v6** | Navegación y rutas entre páginas |
| **Bootstrap 5** | Estilos y componentes UI |
| **Axios** | Peticiones HTTP a las APIs |
| **React Context** | Estado global (auth + favoritos) |
| **MSW (Mock Service Worker)** | Mock de la API de personajes en local |

---

## 🌐 APIs utilizadas

| API | Datos | Documentación |
|---|---|---|
| **The Movie Database (TMDB)** | Películas del MCU | [developers.themoviedb.org](https://developers.themoviedb.org) |
| **RAWG** | Videojuegos Marvel | [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Mock (MSW)** | Personajes Marvel (local) | — |

---

## 📁 Estructura del proyecto

```
src/
├── assets/                  # Imágenes y recursos estáticos
├── components/
│   ├── auth/                # Login y registro (formularios)
│   ├── finder/              # Componente de búsqueda global
│   ├── games/               # Cards, lista y controller de juegos
│   ├── heroes/              # Cards, lista y controller de héroes
│   ├── layout/              # Layout principal (page-layout)
│   ├── movies/              # Cards, lista y controller de películas
│   ├── pagination/          # Componente de paginación
│   └── ui/                  # Elementos reutilizables (navbar, footer, loader, jumbotron)
├── context/
│   ├── auth-context.jsx     # Contexto de autenticación
├── pages/
│   ├── games-pages/         # Páginas de juegos
│   ├── heroes-pages/        # Páginas de héroes
│   ├── home-page/           # Página principal
│   ├── login-page/          # Página de login
│   ├── movies-pages/        # Páginas de películas
│   ├── register-page/       # Página de registro
│   └── search-page/         # Página de resultados de búsqueda
├── services/
│   ├── auth-service/        # Lógica de autenticación
│   ├── characters-service/  # Peticiones a la API de personajes (MSW)
│   ├── games-service/       # Peticiones a RAWG
│   ├── movies-service/      # Peticiones a TMDB
│   └── search-service/      # Búsqueda unificada con Promise.all
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Instalación y uso local

### Prerrequisitos

- Node.js v18+
- npm o yarn

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/MonforGomez/react-assemble.git
cd react-assemble

# 2. Instala las dependencias
npm install

# 3. Crea el archivo de variables de entorno
cp .env.example .env
# Edita .env con tus API keys (ver sección Variables de entorno)

# 4. Arranca el servidor de desarrollo
npm run dev
```

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con:

```env
VITE_TMDB_API_KEY=tu_api_key_de_tmdb
VITE_RAWG_API_KEY=tu_api_key_de_rawg
```

Puedes obtener las keys en:
- TMDB: [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
- RAWG: [rawg.io/apidocs](https://rawg.io/apidocs)

---

## 📸 Capturas de pantalla



```md
![Personajes](https://raw.githubusercontent.com/MonforGomez/react-assemble/main/src/assets/screenshot-characters.PNG)
![Películas](https://raw.githubusercontent.com/MonforGomez/react-assemble/main/src/assets/screenshot-movies.PNG)
![Juegos](https://raw.githubusercontent.com/MonforGomez/react-assemble/main/src/assets/screenshot-games.PNG)
![Searcher](https://raw.githubusercontent.com/MonforGomez/react-assemble/main/src/assets/screenshot-searcher.PNG)
```

---

## 👥 Contribuidores

| Avatar | Nombre | GitHub |
|---|---|---|
| <img src="https://avatars.githubusercontent.com/u/265608819?v=4" width="50" height="50" style="border-radius:50%"> | Ruben Gomez Ibañez | [@ruben-9091](https://github.com/ruben-9091) |
| <img src="https://avatars.githubusercontent.com/u/59867802?v=4" width="50" height="50" style="border-radius:50%"> | Andreu Monforte | [@Copyrighter22](https://github.com/Copyrighter22) |

---


<p align="center">
  Hecho con ❤️ y mucho ☕ — <strong>React Assemble</strong> © 2026
</p>
