# LRC Protected Live Deployment

This branch records the protected LRC Property LLC live state while terminal GitHub authentication is being reconnected.

## Current Protected Live Site

- Production domain: https://www.lrcpropertyllc.com/
- Cloudflare Pages project: `lrcsite`
- Latest verified protected deployment: https://c25ed905.lrcsite.pages.dev
- Local live-ready commit: `84d13ba34dba81361672d6c66982e4b135bbf7a4`
- Local live-ready branch: `lrc-live-protected`
- Local live-ready tag: `lrc-live-protected-2026-05-01`

## Verified Protections

- Production root returns `401` when not unlocked with the preview password.
- `robots.txt` returns `User-agent: *` and `Disallow: /`.
- Responses include `x-robots-tag: noindex, nofollow, noarchive`.
- Authenticated `/api/lead` test returned `{"ok":true,"stored":true}`.
- Preview password is stored as a Cloudflare Pages secret, not committed to source.

## Local Backup

The exact live-ready source tree is preserved locally in:

- `/Users/Roo/Documents/Codex/lrcpropertyllc-deploy`
- `/Users/Roo/Documents/Codex/deploy-backups/lrc-live-protected-2026-05-01.bundle`

## Remaining Sync Step

Terminal GitHub authentication is still blocked with:

```text
fatal: could not read Username for 'https://github.com': Device not configured
```

Once GitHub terminal auth is reconnected, push the exact full source branch with:

```bash
cd /Users/Roo/Documents/Codex/lrcpropertyllc-deploy
git push origin refs/heads/lrc-live-protected:refs/heads/lrc-live-protected
```

Do not overwrite `main` or `Hyper@LRCPropertyLLC.com` until the older remote history is reviewed.
