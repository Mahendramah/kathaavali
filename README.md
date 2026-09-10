# ಕಥೆಗಳ ಮನೆ — Kannada Story Website

A fully static, mobile-friendly Kannada story website. It has no server or database requirement, so you can host it free on GitHub Pages, Netlify, or Cloudflare Pages.

## Run it on your computer

Open `index.html` in a modern browser. No installation is required.

## Personalize it

- In `index.html`, replace every `ನಿಮ್ಮ ಹೆಸರು` with your author name.
- Replace `hello@example.com` with your public email address.
- Edit the story titles and introductory text directly in `index.html`.
- Edit full story text in the `stories` object in `app.js`. Each paragraph is one item inside a story's `body` list.
- To add a new story card, copy one `<article class="story-card">` in `index.html`, choose a new `data-story` name, and add matching story content in `app.js`.

## Important note about the newsletter

The newsletter form currently shows a success message but does not save emails. To collect email addresses, connect it to a service such as Formspree, Mailchimp, or Buttondown later.

## Publish for free

1. Create a GitHub account and a new repository, for example `kannada-kathegalu`.
2. Upload these three files to the repository root.
3. In the repository, open **Settings → Pages** and deploy from the `main` branch.
4. GitHub will give you a shareable public website address.
