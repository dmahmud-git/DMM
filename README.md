# Academic Portfolio

Multi-file, no-framework portfolio. Works with any local server.

## Folder structure

```
site/
├── index.html              ← Home page
├── css/
│   └── style.css           ← All styling (edit :root to retheme)
├── js/
│   ├── data.js             ← ★ YOUR CONTENT — only file you need to edit
│   ├── components.js       ← Header + footer (shared, don't edit)
│   └── utils.js            ← Render helpers (don't edit)
├── pages/
│   ├── publications.html
│   ├── talks.html
│   ├── teaching.html
│   ├── portfolio.html
│   ├── blog.html
│   └── cv.html
├── images/
│   ├── avatar.jpg          ← Your profile photo goes here
│   └── ...                 ← Publication/talk/project thumbnails go here
└── files/
    └── cv.pdf              ← Your downloadable CV goes here
```

## Adding images

1. Drop the image file into the `images/` folder.
2. Reference it in `js/data.js` as `"images/filename.jpg"` — works the same
   whether it's the avatar or a thumbnail on any entry (publication, talk,
   teaching, portfolio). The path is resolved correctly no matter which
   page (root or `pages/*.html`) is rendering it.

## Adding your CV

1. Drop your PDF into the `files/` folder.
2. Set `cvLink: "files/cv.pdf"` in `js/data.js` (already the default).

## How to run

```bash
# Python
python -m http.server 4000
# then open http://localhost:4000

# Node
npx serve .
```

Or install **VS Code Live Server** extension → right-click index.html → Open with Live Server.

## Editing guide

| What to change         | Where                            |
|------------------------|----------------------------------|
| Name, bio, links       | `js/data.js` top section         |
| Publications           | `js/data.js` → publications      |
| Talks / Teaching / etc | same file, matching array        |
| Colors, fonts          | `css/style.css` → `:root { }`    |
| Page content structure | the relevant `pages/*.html` file |
| Header / footer text   | `js/components.js`               |
