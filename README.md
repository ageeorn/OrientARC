<img width=100% alt="image showing the web app" src="https://github.com/user-attachments/assets/3d25b347-c932-4ad8-81b4-594a4853dcd2" />

# OrientARC

This is a simple web app that helps you "identify" and learn about museum artifacts. You can use your camera or upload a photo, and the app will show you information about the artifact and suggest similar items. This project is a demo, so the "AI" is just a simulation using example data.

This guide is written for beginners. If you are new to programming or web development, don't worry cause each step is explained!


## Table of Contents
- What is this app?
- How to run it
- How the code is organised
- How the main features work
- How the data works
- How to change or add things
- Common problems and how to fix them
- Credits and licenses


## What is this app?

This app is a simple example of how a museum might let visitors scan or upload a photo of an artifact and get information about it. It is not a real AI system; it just picks a random artifact from a list and shows you details. It also suggests other artifacts that are similar.

You can use this app to:
- Try out a camera or image upload feature
- See how a web app can show information and recommendations
- Learn how React apps are built and organised


## How to run it (step by step)

You need Node.js installed on your computer. If you don't have it, download it from [nodejs.org](https://nodejs.org/).

1. **Download or clone this project**
  - If you see a green "Code" button on GitHub, click it and choose "Download ZIP" or use `git clone` if you know how.
2. **Open a terminal**
3. **Go to the project folder**
  - Example: `cd "Artefact Recommender App"`
4. **Install the required packages**
  - Type:
    ```bash
    npm install
    ```
    This will download everything the app needs.
5. **Start the app in development mode**
  - Type:
    ```bash
    npm run dev
    ```
  - You should see a message like `Local: http://localhost:3000/`.
6. **Open the app in your web browser**
  - Go to the address shown (usually http://localhost:5173/ but for this project it's http://localhost:3000/).

If you want to make a version for production, run:
```bash
npm run build
```
The finished files will be in the `build/` folder.


## How the code is organised

Here are the most important files and what they do:

- `index.html` — The main web page which loads the app.
- `package.json` — Lists the tools and libraries the app needs.
- `vite.config.ts` — Settings for the Vite tool (used to run/build the app).
- `src/main.tsx` — The starting point for the React app.
- `src/App.tsx` — The main part of the app. Controls which page/tab you see.
- `src/data/artifacts.ts` — Contains the list of example artifacts and the code that "recommends" similar ones.
- `src/types/artifact.ts` — Describes what an artifact is (its fields, like name, image, etc.).
- `src/components/` — All the pieces that make up the app (like the scanner, artifact cards, navigation bar, etc.).
- `src/components/ui/` — Small building blocks for the design (buttons, cards, etc.).
- `src/styles/globals.css` and `src/index.css` — Styles for how the app looks.
- `src/Credits.md` — Credits for images and design parts used.

If you want to see how the app works, start by opening `src/App.tsx`.


## How the main features work

- **Scan an artifact:**
  Click "Scanner" in the top menu.
  You can use your camera (if your device allows) or upload a photo.
  The app will pretend to "analyse" the image, then show you a random artifact from its list.

- **See artifact details:**
  After scanning, you'll see information about the artifact: name, picture, description, and more.

- **Get recommendations:**
  The app suggests other artifacts that are similar. This is based on simple rules (see below).

- **Browse and About:**
  You can also browse all artifacts or read about the app.

## How the data works

The app uses example data (not a real database or AI). The data is in `src/data/artifacts.ts`.

Each artifact has:
- An id (unique number or string)
- Name
- Description
- Period (like "Ming Dynasty")
- Origin (country)
- Category
- Image URL
- Materials
- Dimensions
- Significance (why it's important)
- Related tags (keywords)

When you scan, the app picks a random artifact and shows it. It also finds similar artifacts by checking:
- If they are the same category (+10 points)
- If they are from the same country (+5 points)
- If they share tags (+3 points for each tag)
The ones with the highest points are shown as recommendations.

## How the recommendation works

The recommendation is intentionally simple (suitable for a demo). `getRecommendedArtifacts` computes a similarity score per artifact based on:
- +10 if same `category`
- +5 if same `origin`
- +3 for each shared tag in `relatedTags`

Results are sorted by score and the top N artifacts are returned. This is a good place to plug-in a more advanced vector similarity search or ML (Machine Learning) model when moving beyond the prototype.


## How to change or add things

Want to make the app your own? Here are some ideas:

- **Change the artifact data:**
  - Open `src/data/artifacts.ts` and edit or add new artifacts to the list.

- **Change how recommendations work:**
  - Look for the `getRecommendedArtifacts` function in the same file. You can change the rules or make it smarter.

- **Change the look:**
  - Edit the files in `src/styles/` or the components in `src/components/ui/`.

- **Add new features:**
  - Try adding a search bar, filters, or more information to the artifact pages.

If you are new to React, try changing some text in `src/App.tsx` and see what happens when you reload the page!


## Common problems and how to fix them

- **Camera doesn't work:**
  - Some browsers block the camera if you open the app as a file (file://). Always use `npm run dev` and open the link it gives you (http://localhost:3000/).
  - If you are on mobile, you may need to use HTTPS or test on your computer.

- **The app looks weird or broken:**
  - Make sure you installed everything with `npm install`.
  - The app uses Tailwind CSS for styles. If you see no colors or layout, check that your environment supports Tailwind.

- **Type errors or code errors:**
  - This app uses TypeScript. If you see errors, make sure you have a recent version of Node.js and npm.

- **Want to reset changes?**
  - You can always delete the folder and download it again.


## Credits and licenses

This app uses:
- UI building blocks inspired by [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/) (MIT License)
- Icons from [lucide-react](https://lucide.dev/)
- Example images from [Unsplash](https://unsplash.com/)

See `src/Credits.md` for more details.

---

If you want to learn more or need help, try searching for "React beginner tutorial" or "Vite beginner tutorial" online. 

Good luck and have fun exploring!
