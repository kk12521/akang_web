# Hero Stats Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the hero shortcut hint strip and reposition the homepage statistics beneath the search panel with a cleaner, centered layout.

**Architecture:** The change stays local to the homepage hero. We will move the `hero-stats` block in `content_search.html`, delete the `hero-tips` block, and update `custom-style.css` so the moved stats row visually anchors the search panel without crowding it on desktop or mobile.

**Tech Stack:** Hugo templates, CSS

---

### Task 1: Restructure the Hero Template

**Files:**
- Modify: `layouts/partials/content_search.html`

- [ ] **Step 1: Remove the shortcut hint block**

Delete the entire `hero-tips` block from the hero intro so the title area only contains the kicker, title, and description.

Expected resulting structure:

```html
<div class="hero-intro">
    <p class="hero-kicker">Bioinformatics / AI / Reading</p>
    <h1 class="hero-title">{{ .Site.Title }}</h1>
    <p class="hero-summary">{{ .Site.Params.description }}</p>
</div>
```

- [ ] **Step 2: Move the statistics block below the search panel**

Move the existing `hero-stats` markup so it renders after the closing `</div>` of the search panel and before the hero shell closes.

Expected resulting placement:

```html
<div id="search" class="s-search mx-auto search-panel">
    ...
</div>
<div class="hero-stats hero-stats-below">
    <span><strong>{{ $stats.Get "links" }}</strong> 精选站点</span>
    <span><strong>{{ $stats.Get "terms" }}</strong> 主题分区</span>
    <span><strong>{{ len .Site.Data.friendlinks }}</strong> 友情链接</span>
</div>
```

- [ ] **Step 3: Keep the stats values dynamic**

Do not change the `newScratch` logic at the top of the template. The counts must continue to be calculated from:

```go-html-template
{{ $stats.Get "links" }}
{{ $stats.Get "terms" }}
{{ len .Site.Data.friendlinks }}
```

- [ ] **Step 4: Review the resulting template diff**

Run:

```bash
git diff -- layouts/partials/content_search.html
```

Expected: only the `hero-stats` move and `hero-tips` removal appear.

### Task 2: Restyle the Stats for the New Position

**Files:**
- Modify: `static/assets/css/custom-style.css`

- [ ] **Step 1: Remove obsolete hero tips styling**

Delete the `hero-tips` and `hero-tips kbd` rules, since the shortcut strip is being removed.

- [ ] **Step 2: Adjust the hero stats spacing**

Update the stats styles so the moved row works as a secondary band below search rather than under the title.

Expected CSS direction:

```css
.hero-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 0;
}

.hero-stats-below {
    position: relative;
    z-index: 2;
    max-width: 860px;
    margin: 18px auto 0;
    padding: 0 20px;
}
```

- [ ] **Step 3: Refine the stat pills for the lower placement**

Tune the pill sizing so they look balanced below the search panel.

Expected CSS direction:

```css
.hero-stats span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 150px;
    padding: 12px 18px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(10px);
}
```

- [ ] **Step 4: Add mobile-safe wrapping**

Ensure the stats row remains centered and readable on smaller screens.

Expected CSS direction:

```css
@media (max-width: 767.98px) {
    .hero-stats-below {
        margin-top: 16px;
        padding: 0 12px;
    }

    .hero-stats span {
        min-width: 132px;
        width: calc(50% - 8px);
    }
}
```

- [ ] **Step 5: Review the resulting CSS diff**

Run:

```bash
git diff -- static/assets/css/custom-style.css
```

Expected: hero stats moved into a cleaner lower layout and obsolete tip styles removed.

### Task 3: Verify the Homepage Change

**Files:**
- Verify: `layouts/partials/content_search.html`
- Verify: `static/assets/css/custom-style.css`

- [ ] **Step 1: Run whitespace and conflict validation**

Run:

```bash
git diff --check
```

Expected: no output other than harmless line-ending warnings.

- [ ] **Step 2: Review combined hero diff**

Run:

```bash
git diff -- layouts/partials/content_search.html static/assets/css/custom-style.css
```

Expected: the shortcut strip is removed, the stats block is below search, and only hero-related CSS changed.

- [ ] **Step 3: Manual visual verification**

Check the homepage and confirm:

```text
1. The shortcut hint strip is gone.
2. The hero title area is lighter and less crowded.
3. The statistics row sits below the search panel.
4. The statistics remain centered and visually balanced.
5. Mobile wrapping does not create uneven or cramped pills.
```
