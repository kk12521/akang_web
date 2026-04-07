# Navigation Links Adjustment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the navigation data for recommendations, game links, and study links while applying the approved cleanup and ordering changes.

**Architecture:** This change is data-only. We will update the relevant sections in `data/webstack.yml`, keep descriptions concise and user-facing, and validate the file with diff checks after editing.

**Tech Stack:** Hugo, YAML data file

---

### Task 1: Update Navigation Data

**Files:**
- Modify: `data/webstack.yml`

- [ ] **Step 1: Update featured recommendations**

Add `Gamer520` and `Spotify`, update `Linux.do` logo source, and remove `搜狗微信` inside the `常用推荐` block.

- [ ] **Step 2: Reorder and expand the research/work section**

Move `科研AI` ahead of other subgroups, keep `云服务器` last, and append the three approved links inside `办公学习`.

- [ ] **Step 3: Refresh the game section**

Remove `台服战地` and add `Gamer520`, `太原switch专修`, and `小霸王其乐无穷` inside `悠闲娱乐 > 游戏竞技`.

- [ ] **Step 4: Validate formatting**

Run: `git diff --check`
Expected: no whitespace or merge-marker errors

- [ ] **Step 5: Review resulting diff**

Run: `git diff -- data/webstack.yml`
Expected: only the approved navigation data changes appear
