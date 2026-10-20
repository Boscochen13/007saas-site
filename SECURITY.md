# Security Notes

This repository publishes a public static website. Treat everything committed here, including source code and Git history, as public.

## Never commit
- API keys, access tokens, passwords, private keys, certificates, or production environment files.
- WordPress SQL/database exports, full-site archives, `wp-config.php`, customer records, or private business documents.
- Any credentials in HTML, CSS, JavaScript, or files served to the browser. Front-end code is public by design.

The root `.gitignore` excludes common secret files and WordPress backups as a guardrail. It is not a security boundary: files can still be force-added, and ignored files already committed remain public.

## If a secret is exposed
1. Revoke or rotate the credential immediately with the issuing service.
2. Check its usage and billing/activity logs.
3. Remove the exposed value from the repository and history where appropriate; deleting a file alone does not invalidate the credential.
4. Do not put replacement secrets in this static repository. Use the relevant service's secret store for server-side workloads.

## Account and deployment hygiene
- Protect the GitHub account with two-factor authentication or a passkey and keep recovery methods safe.
- Review authorized OAuth/GitHub Apps, SSH keys, active sessions, and repository collaborators periodically.
- Keep GitHub Actions permissions minimal and review workflow changes before merging.
- Verify the custom domain in GitHub account settings before attaching DNS records to GitHub Pages.
- Keep DNS/domain registrar accounts protected with strong unique credentials and MFA where available.

This file is operational guidance, not a guarantee that the repository or account has been fully audited.
