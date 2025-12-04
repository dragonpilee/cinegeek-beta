# CineGeek 2.0 Beta 🎬
> **Containerized Movie & Series Streaming Platform**

![Status](https://img.shields.io/badge/Status-Beta-blue?style=for-the-badge) ![Docker](https://img.shields.io/badge/Deployment-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Next.js](https://img.shields.io/badge/Framework-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

**CineGeek** is a premium, fully dockerized streaming application that offers a vast library of movies and series. Designed for consistency and ease of deployment, it runs exclusively within a containerized environment, eliminating the need for local Node.js setups.

---

## ✨ Features

- **🎥 Smart Browsing**: Explore collections sorted by genre, release date, or popularity.
- **🔍 Advanced Search**: Instantly find content by title, director, or cast members.
- **🧠 Recommendation Engine**: Personalized suggestions tailored to your preferences.
- **📱 PWA Support**: Installable as a standalone, native-like app on mobile and desktop.
- **🐳 Pure Docker**: Zero-dependency architecture; runs entirely in containers.
- **🎨 Responsive UI**: Seamless viewing experience across all screen sizes.

---

## 🚀 Quick Start

### Prerequisites

1.  **Docker Desktop**: Ensure Docker is installed and running.
2.  **Git**: To clone the repository.
    * *Note: No Node.js or npm is required on your host machine.*

### Installation & Run

1.  Clone the repository and navigate to the root:
    ```bash
    git clone [https://github.com/dragonpilee/cinegeek.git](https://github.com/dragonpilee/cinegeek.git)
    cd cinegeek
    ```

2.  Configure your environment variables:
    ```bash
    cp .env.example .env
    # Open .env and add your TMDb API keys
    ```

3.  Build and launch the container:
    ```bash
    docker-compose up --build
    ```

4.  Open your browser and visit:
    **[http://localhost:3000](http://localhost:3000)**

---

## 🛠️ Technology Stack

| Component | Technology |
|----------|------------|
| **Core Framework** | Next.js (React) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Data Sources** | TMDb API, Vidsrc |
| **Infrastructure** | Docker, Docker Compose |

---

## 🤝 Contributing

**Important:** This project enforces a strict Docker-only workflow.

1.  **Fork & Branch**: Create a new branch for your feature.
2.  **Develop**: Test all changes inside the container (`docker-compose up`).
3.  **Commit & Push**: Submit your changes via Pull Request.

---

<div align="center">
  <sub>Developed with ❤️ by Alan Cyril Sunny</sub><br>
  <sub>If you find this project helpful, please consider ⭐ <a href="https://github.com/dragonpilee/cinegeek">starring the repository!</a></sub>
</div>
