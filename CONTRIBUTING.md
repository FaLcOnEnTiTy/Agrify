# Contributing to AGRIFY

Thank you for your interest in contributing to **AGRIFY — Agricultural Intelligence Network (India)**! 🌾

AGRIFY is dedicated to empowering Indian farmers, Custom Hiring Centre (CHC) operators, agronomists, and policy researchers through geospatial intelligence, AI-assisted decision making, farm machinery networks, and accessible keypad telephony interfaces.

We welcome contributions of all types: bug fixes, localized translations (Kannada, Hindi, and regional languages), agricultural dataset updates, UI improvements, and feature expansions.

---

## Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free environment for everyone. Please treat all community members with respect, patience, and kindness.

---

## How Can You Contribute?

1. **Report Bugs**: If you find an issue with geospatial rendering, crop algorithms, machinery calculations, or authentication, open an issue using the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md).
2. **Suggest Enhancements**: Propose new agro-climatic parameters, state subsidy schemes, or language additions via the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md).
3. **Submit Pull Requests**: Fix reported issues, add new tests, or implement approved enhancements.
4. **Improve Translations**: Help expand Kannada (`kn`), Hindi (`hi`), or add new regional languages (Tamil, Telugu, Marathi, Bengali) in `src/locales/`.

---

## Local Development Workflow

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher (Node.js 20+ LTS recommended)
- **npm**: `v9.0.0` or higher
- **Git**

### 2. Fork and Clone
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/agrify.git
cd agrify

# Set upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/agrify.git
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment
Copy the example environment configuration:
```bash
cp .env.example .env
```
*(The default `.env.example` comes pre-configured with simulation modes for SMS and USSD, so no external paid API keys are required for local UI development).*

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Branching & Commit Conventions

### Branch Naming
Create a feature or bugfix branch with a descriptive name:
- `feat/kannada-machinery-contracts`
- `fix/district-boundary-color`
- `docs/update-api-reference`
- `perf/maplibre-geojson-caching`

### Commit Message Format
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat: add soil health card integration to crop planner`
- `fix: resolve mobile OTP auto-advance focus issue`
- `docs: update deployment instructions in README`
- `refactor: optimize district boundary rendering with Leaflet canvas`
- `style: harmonize dark mode borders in machinery card`

---

## Code Standards & Guidelines

### TypeScript & React
- Ensure strict typing without unnecessary `any`.
- Use functional components with React 19 hooks.
- Keep components modular, self-contained, and reusable.

### Styling (Tailwind CSS v4)
- Adhere to AGRIFY's design tokens:
  - **Light Mode**: Clean paper white (`#FFFFFF`), light emerald accents (`#16A36A`), dark slate text (`#1F2937`).
  - **Dark Mode**: Deep forest surface (`#101713`), card surface (`#18231C`), border (`#34443A`), high-contrast text (`#F3F7F3`).
- Ensure all components support both light and dark modes gracefully.

### Multilingual Localization
- Never hardcode user-facing strings directly into components.
- Add corresponding entries in:
  - `src/locales/en.ts` (English)
  - `src/locales/kn.ts` (Kannada - ಕನ್ನಡ)
  - `src/locales/hi.ts` (Hindi - हिंदी)

### Verification Before Submitting
Before pushing your branch, make sure all checks pass cleanly:
```bash
# Run typechecking & production bundle build
npm run build

# Run linter
npm run lint
```

---

## Submitting a Pull Request

1. Push your branch to your GitHub fork:
   ```bash
   git push origin feat/your-feature-name
   ```
2. Navigate to the AGRIFY repository and click **Compare & pull request**.
3. Fill in the provided [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).
4. Ensure all CI checks (linting, build) pass.
5. A maintainer will review your pull request, provide feedback, and merge once approved!

Thank you for contributing to agricultural digital transformation! 🌾🚜
