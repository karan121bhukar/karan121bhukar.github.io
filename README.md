# karan121bhukar.github.io

Personal academic website for Karan Bhukar, built on the
[academicpages](https://github.com/academicpages/academicpages.github.io)
template (a fork of
[Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)).

Live at **https://karan121bhukar.github.io/**.

## Content layout

- `_pages/about.md` — Home page.
- `_pages/cv.md` — CV page (education, work experience, auto-rendered
  publications/talks/teaching, awards, service).
- `_publications/*.md` — one file per paper or patent. `category: conferences`,
  `manuscripts`, or `patents` controls which subsection they appear under on
  the Publications page.
- `_talks/*.md` — one file per talk.
- `_teaching/*.md` — one file per teaching assignment.
- `_config.yml` — site-wide settings + sidebar links.
- `_data/navigation.yml` — top-nav menu.
- `files/karan-bhukar-cv.pdf` — the downloadable CV.
- `images/profile.jpg` — sidebar profile photo.

## Running locally

Requires Ruby 3.x. On macOS:

```bash
brew install ruby
gem install bundler
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/. Edits to Markdown / HTML hot-reload;
changes to `_config.yml` need a server restart.

Alternatively via Docker:

```bash
docker compose up
```

## License

Site content © Karan Bhukar. Theme licensed under the MIT License (see
`LICENSE`). Attribution to academicpages and Minimal Mistakes is kept in
the footer per theme conventions.
