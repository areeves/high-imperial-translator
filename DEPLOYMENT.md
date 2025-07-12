# GitHub Pages Deployment Instructions

1. Replace the `homepage` field in `package.json` with:
   
   "homepage": "https://<your-github-username>.github.io/<your-repo-name>"

   For example, if your username is `andrewreeves` and your repo is `High-Imperial-Translator`:
   
   "homepage": "https://andrewreeves.github.io/High-Imperial-Translator"

2. Install the `gh-pages` package:

   npm install --save-dev gh-pages

3. Add the following scripts to your `package.json`:

   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"

4. Commit your changes, then deploy with:

   npm run deploy

5. Make sure your repository's GitHub Pages settings are set to deploy from the `gh-pages` branch.

---

These steps will allow you to build and deploy your React app to GitHub Pages.

# Deploying to GitHub Pages with Jekyll

1. Update the `homepage` field in `package.json` to your GitHub Pages URL.
2. Run `npm run build` to build the app and copy it to the `docs` folder.
3. Commit and push the `docs` folder to your repository's default branch.
4. Enable GitHub Pages in your repository settings, set the source to `/docs`.
5. A `.nojekyll` file is included to prevent Jekyll processing.

You can also use `npm run deploy` to commit and push the `docs` folder.
