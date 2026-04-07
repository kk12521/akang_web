# Hero Stats Layout Design

**Goal:** Simplify the homepage hero area by removing the shortcut hint strip and repositioning the site statistics below the search panel with a cleaner visual hierarchy.

## Approved Change

- Remove the entire shortcut hint strip currently shown below the hero statistics.
- Keep the three statistics:
  - 精选站点
  - 主题分区
  - 友情链接
- Move those statistics from the title area to below the search panel.
- Present the statistics as a centered, visually balanced pill/card row that matches the current rounded glassmorphism look.

## Implementation Scope

- Update the homepage hero template in:
  - `layouts/partials/content_search.html`
- Update homepage-specific styles in:
  - `static/assets/css/custom-style.css`

## Layout Intent

- The hero title block becomes lighter and more focused on:
  - kicker
  - site title
  - description
- The search panel remains the visual centerpiece.
- The statistics become a secondary information band below search, with improved spacing and alignment.
- The result should look intentional on both desktop and mobile, not like the stats were merely pushed downward.

## Styling Notes

- Keep the current soft rounded style language.
- Reduce visual clutter by removing the shortcut hint strip entirely.
- Use a compact gap and centered alignment for the stats row.
- On smaller screens, allow the stats to wrap cleanly without crowding the search panel.
