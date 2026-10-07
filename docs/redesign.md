# Research portfolio redesign

The layout prioritizes three questions a research recruiter should be able to answer quickly: what Srijith studies, what he has contributed, and how to contact him. On October 7, 2026, the presentation was revised around the user's preferred [Ira Globus-Harris website](https://globusharris.github.io/): a fixed profile sidebar, a single reading column, EB Garamond body text, DM Sans navigation, and small uppercase section headings. Its public repository and live styling indicate custom HTML/CSS rather than a named theme.

## Design references

- [Chelsea Finn](https://ai.stanford.edu/~cbfinn/): concise research introduction and immediately accessible CV and Scholar links.
- [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/): publication titles, authors, venues, and resource links presented separately.
- [Andrej Karpathy](https://karpathy.ai/): direct personal presentation and simple navigation through a substantial research and career record.

These informed the information hierarchy; the typography, colors, and layout are custom.

## Structure

- Homepage: background, compact scrollable news, research areas, publications, and CV/contact in a single reading column. The profile portrait, professional links, and section navigation occupy the desktop sidebar; on mobile they become a compact header.
- Projects: separate two-column grid, stacking to one column on narrow screens. Project details use the same custom layout.
- Existing publications and CV pages remain accessible.
- News uses the existing YAML file. Empty entries are omitted.
- Publications use the existing BibTeX files and Jekyll-Scholar; titles appear first, followed by authors, venue, and resource links. BibTeX is expandable.

The theme dependency was removed. Jekyll remains as the static generator so the existing collections, bibliography, URLs, and deployment workflow can be retained. A framework migration is unnecessary to achieve this visual redesign.

## Maintenance and validation

Edit `index.html` for introductory copy, `_data/news.yml` for news, `_bibliography/*.bib` for publications, and `_projects/*` for projects. Shared presentation lives in `_layouts/research.html`, `assets/css/research.css`, and `assets/js/research.js`.

Run `bundle exec jekyll build` in an environment with Ruby and Bundler. The existing GitHub Actions workflow already uses this command. Ruby/Bundler was unavailable during local redesign work, so a full Jekyll build has not been verified. A separately generated static design preview was inspected in the browser at desktop and narrow-screen widths; it is not production build output. JavaScript syntax and Git whitespace checks passed.

Existing biographical dates and publication records have not been refreshed. No deployment was performed.
