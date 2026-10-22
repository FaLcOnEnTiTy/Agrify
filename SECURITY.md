# Security Policy

## Supported Versions

We provide security updates and patches for the following versions of AGRIFY:

| Version | Supported          |
| ------- | ------------------ |
| 2.5.x   | :white_check_mark: |
| 2.x     | :white_check_mark: |
| < 2.0   | :x:                |

---

## Reporting a Vulnerability

The AGRIFY development team takes security seriously. If you discover a vulnerability or potential security risk regarding authentication, SMS delivery, telecom callbacks, or sensitive data handling, please **do not open a public GitHub issue**.

### Reporting Process
1. Email your findings to: **security@agrify.in** (or contact the repository maintainers privately).
2. Include in your report:
   - Type of vulnerability (e.g. authentication bypass, sensitive credential exposure, CSRF).
   - Detailed step-by-step instructions to reproduce the issue.
   - Proof of concept (PoC) code or requests if applicable.
   - Impact assessment on farmers, CHC operators, or system integrity.
3. You will receive an acknowledgment within **48 hours**.
4. We will coordinate a responsible disclosure schedule with you while a patch is prepared and deployed to production.

---

## Environment Variables & Secret Safety

- **Never commit `.env` or `.env.local` files containing live API keys** (Fast2SMS, MSG91, Gemini API, or JWT secrets) into git history.
- The repository `.gitignore` is configured to prevent accidental commits of secret files.
- Always use `.env.example` as a template for public documentation.
- When running in cloud hosting environments (such as Vercel, AWS, or GCP), configure secrets exclusively through secure environment variable dashboards.
