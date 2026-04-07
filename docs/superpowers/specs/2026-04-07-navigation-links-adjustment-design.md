# Navigation Links Adjustment Design

**Goal:** Update the Hugo navigation data to add new game and study links, promote selected shortcuts into the featured recommendations area, and apply the cleanup/sorting changes shown in the user's screenshots.

## Approved Scope

- Add `Gamer520` and `Spotify` to `常用推荐`.
- Keep `Linux.do` in `常用推荐`, but switch its logo source to the site's own icon.
- Remove `搜狗微信` from `常用推荐`.
- In `科研办公`, move `科研AI` to the first subgroup and move `云服务器` to the last subgroup.
- In `办公学习`, add:
  - `Burning Vocabulary 真题`
  - `sdmz.cn`
  - `最好古诗`
- In `悠闲娱乐 > 游戏竞技`, remove `台服战地` and add:
  - `Gamer520`
  - `太原switch专修`
  - `小霸王其乐无穷`

## Implementation Notes

- All changes live in `data/webstack.yml`.
- Use concise Chinese descriptions consistent with the current site style.
- Prefer stable remote favicon/logo URLs where no local asset already exists.
- No template or style changes are required for this request.
