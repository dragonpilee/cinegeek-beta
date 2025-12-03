# CineGeek 2.0 Beta

![Docker](https://img.shields.io/badge/Environment-Docker%20Only-2496ed?style=flat-square&logo=docker&logoColor=white)
![Next.js](https://img.shields.io/badge/Framework-Next.js-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/CSS-Tailwind-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)
![TMDb](https://img.shields.io/badge/Data-TMDb-01b4e4?style=flat-square&logo=themoviedb&logoColor=white)

> **Developed by Alan Cyril Sunny** > If you find this project helpful, please consider ⭐ [starring the repository](https://github.com/dragonpilee/cinegeek)!

---

## 🎬 CineGeek 2.0 Beta

A movie and series streaming website.  
**Note:** This project utilizes a strict containerized architecture. All development, testing, and deployment must be performed via Docker to ensure a consistent environment.

---

## ✨ Features

- **Browse Movies**: Explore a vast collection sorted by genre, release date, or popularity.
- **Search Functionality**: Easily find movies by title, director, or cast.
- **Recommendation Engine**: Get personalized movie recommendations based on your preferences.
- **Responsive Design**: Enjoy a seamless experience across devices.
- **PWA Support**: Install the app on your device for a native-like experience.
- **Containerized**: Zero-dependency setup on the host machine.

---

## 🛠️ Tech Stack

- **Container Engine:** [Docker](https://www.docker.com/)
- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Data:** [TMDb](https://www.themoviedb.org/) & [Vidsrc.to](https://vidsrc.to/)

---

## 🐳 Docker Development Environment

**⚠️ Prerequisites:** You do **not** need Node.js, npm, or Yarn installed on your local machine.  
The only requirement is **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** (or Docker Engine + Compose).

### Quick Start

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/dragonpilee/cinegeek.git](https://github.com/dragonpilee/cinegeek.git)
    cd cinegeek
    ```

2.  **Configure Environment**
    Create the `.env` file for the container to consume.
    ```bash
    cp .env.example .env
    ```
    *Edit `.env` and add your TMDb API keys.*

3.  **Start the Environment**
    This command builds the image, installs dependencies inside the container, and starts the server.
    ```bash
    docker-compose up --build
    ```

4.  **Access App**
    Open [http://localhost:3000](http://localhost:3000)

### Managing the Container

* **Stop the app:** Press `Ctrl+C` or run `docker-compose down`
* **Rebuild (after adding new packages):** `docker-compose up --build`
* **View Logs:** `docker-compose logs -f`

---

## 📱 Progressive Web App (PWA)

CineGeek is fully installable as a PWA directly from the Docker instance:
- **Installable**: Add to your home screen on mobile and desktop.
- **Standalone**: Runs in its own window without browser UI.

---

## 🤝 Contributing

**Important:** Do not try to run this project via `npm run dev`. All contributions must be compatible with the Docker environment.

1.  **Fork the repository**
2.  Create a new branch (`git checkout -b feature/improvement`)
3.  **Develop inside Docker:** Ensure your changes reflect correctly at `localhost:3000` via `docker-compose up`.
4.  Commit your changes (`git commit -am 'Add new feature'`)
5.  Push to the branch (`git push origin feature/improvement`)
6.  Create a new Pull Request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- The Movie Database (TMDb) for providing the movie data through their API.
- Vidsrc.to for providing the movie streaming links.

---

For more information, updates, and documentation, visit the  
👉 [GitHub Repository](https://github.com/dragonpilee/cinegeek)

Feel free to fork, star ⭐, and contribute!
