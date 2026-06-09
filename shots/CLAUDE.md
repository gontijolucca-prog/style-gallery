# CLAUDE.md

## Auto-learned Rules

<!-- claude-evolve:managed-start -->

<!-- claude-evolve:rule id=r_mq7522e2_myx6 score=5.9 created=2026-06-09 source=observation complexity=simple -->
- After writing a new demo HTML file, immediately grep for banned fonts (Inter, Roboto, Arial, Open Sans, Lato, Space Grotesk, system-ui) before any other step
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq7522f5_o2lj score=5.9 created=2026-06-09 source=observation complexity=simple -->
- When starting a local HTTP server for style-gallery demos, always save the PID to /tmp/server.pid and verify with a curl HTTP code check before proceeding
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq7522gb_zoiq score=5.9 created=2026-06-09 source=observation complexity=simple -->
- When scaffolding a style-gallery demo, emit a StructuredOutput with slug, fonts, and layoutSummary immediately after writing the file — before screenshots or further edits
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq7522h7_ni69 score=5.9 created=2026-06-09 source=observation complexity=simple -->
- When verifying PT-PT copy in a demo, grep for BR slang markers (brasileiro, Brasil, vcs, galera, tá, vc, eh) AND lorem ipsum in separate targeted greps — do not rely on visual inspection alone
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq7522ic_tn2y score=5.9 created=2026-06-09 source=observation complexity=simple -->
- After navigating Playwright to a new URL, always take a viewport screenshot first, then a fullPage screenshot, then resize to mobile (390×844) and screenshot again before reporting visual results
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq7522ji_q24c score=5.3 created=2026-06-09 source=anti_pattern complexity=simple -->
- Do not start an HTTP server from the project root AND from the demos subdirectory in the same session — pick one base path and reuse it; mixed base paths cause 404s on relative asset links
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mq7522kb_xw7w score=5.9 created=2026-06-09 source=anti_pattern complexity=simple -->
- Do not write a verify/checklist to /tmp via heredoc cat — use the Bash output directly or a structured check script; heredoc checklists are static and do not actually verify file state
<!-- /claude-evolve:rule -->

<!-- claude-evolve:managed-end -->
