# CLAUDE.md

## Auto-learned Rules

<!-- claude-evolve:managed-start -->

<!-- claude-evolve:rule id=r_mq4d7ji9_ixtn score=5.2 created=2026-06-07 source=observation complexity=simple -->
- After bulk-writing CSS files, verify registry-to-file parity with a node one-liner before serving (load the JS registry, fs.existsSync each slug)
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4d7jj3_xh46 score=5.5 created=2026-06-07 source=observation complexity=simple -->
- After writing new CSS files that reference Google Fonts, grep for banned font names immediately and sed-replace before moving on
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4d7jjp_aitx score=5 created=2026-06-07 source=observation complexity=simple -->
- When scaffolding a multi-file static project, create the directory structure in a single mkdir -p before any Write calls
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4d7jkb_3jp5 score=6.5 created=2026-06-07 source=observation complexity=simple -->
- After scaffolding a static site, do a live HTTP smoke-test (curl HTTP codes for index + at least one dynamic route) before opening in browser
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4d7jky_meg9 score=5.7 created=2026-06-07 source=anti_pattern complexity=simple -->
- Never write a CSS file referencing a banned font (Inter, Roboto, Space Grotesk, system-ui, etc.) — check CLAUDE.md banned list before writing, not after
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4d7jlk_o87b score=5.3 created=2026-06-07 source=anti_pattern complexity=simple -->
- When adding a new stylesheet link to an existing HTML file, Read the file first rather than relying on remembered content to construct the Edit old_string
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4e0zro_bxr4 score=5.3 created=2026-06-07 source=observation complexity=simple -->
- When a Cloudflare API token fails authentication, use cat -A to inspect for hidden whitespace/control chars before assuming the token is wrong — then confirm with tr -d '[:space:]' on read
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4e0zsh_1gny score=5.3 created=2026-06-07 source=observation complexity=simple -->
- When searching for a WhatsApp contact by name fails, try accent variants (Frazão/Frazao/Rúben/Ruben) AND list_chats with partial query before asking the user to disambiguate
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4e0zt5_ejd9 score=5.2 created=2026-06-07 source=observation complexity=simple -->
- After enabling GitHub Pages via API, poll the URL in a loop (sleep 15, up to 20 tries) before reporting the site as live — Pages propagation takes 1-5 min
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq4e0ztu_aqre score=5.3 created=2026-06-07 source=anti_pattern complexity=simple -->
- When deploying with wrangler pages, do not pass credentials via shell export alone — verify the token is non-empty and whitespace-free before invoking wrangler, not after it fails
<!-- /claude-evolve:rule -->

<!-- claude-evolve:managed-end -->
