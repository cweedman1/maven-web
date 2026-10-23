# `maven-web` repository audit

- **Audit date:** 2026-10-23 UTC
- **Repository:** `C:\Users\cweed\projects\maven-web`
- **Baseline:** `main` / `bd96191afcd8900b807c8064dad7bb43b8959658`
- **Audit branch:** `audit/2026-10-23-maven-web-repository-audit`
- **Mode:** implementation and content review plus this one authorized Markdown addition

## Executive summary

`maven-web` is the public presentation and administrator-reference layer for Maven Compliance. It is not the authenticated Maven application, an API service, an AI runtime, or an Evo Core store. The checkout is a dependency-free static site: 16 hand-authored HTML documents, five CSS files, one 98-line progressive-enhancement script, 20 image/vector assets, and five hosting/discovery control files. It presents a product operating model, explains Survey/Plan of Correction (POC), Investigation, and QAPI/facility-intelligence workflows, publishes a substantial Field Manual, points readers to official sources, and configures one Formspree access-request form.

The site is a real and accomplished website product. It has a coherent information architecture; complete internal navigation; responsive images and layouts; canonical, social, and structured metadata; a 15-URL sitemap; accessible source-level patterns; print and reduced-motion rules; article tables of contents; and clear professional-review disclaimers. Offline checks in this audit found no missing local link, asset, fragment, or ARIA target; all 28 JSON-LD blocks parsed; every page had one `h1`; and every image occurrence had an `alt` attribute.

The decisive audit boundary is claim provenance. The site accurately describes the intended professional model—intelligence assists, qualified people decide, and product-owned integrations of Evo primitives preserve authoritative context—but this checkout does not execute those workflows. It contains no domain classes, product API calls, identity or tenant logic, persistence, evidence store, state machine, prompt, model call, token control, AI JSON contract, clinical/general-knowledge check, or telemetry implementation. Statements such as “Implemented workflow,” “Operational,” “Evo Core remembers,” and “one operational memory” are public claims about sibling product implementations and architecture, not functionality proved by this repository. They should be governed against versioned product evidence, while preserving the existing distinction between current, expanding, and professionally reviewed capability.

Two concrete frontend consistency defects were identified: the CASPER long guide does not meet the JavaScript enhancer's `h1`-inside-article precondition, and homepage hash navigation receives `aria-current="location"` while the CSS highlights only `aria-current="page"`. The article TOC also has a dormant current-section style that JavaScript never sets, but no documented scrollspy requirement makes that a proven defect. The higher-risk findings are integration/governance gaps rather than broken code: the free-text Formspree form lacks a PHI/resident-data warning and linked privacy/retention disclosure; deployment settings, response headers, previews, and rollback are not versioned; repeated shell content is manually synchronized; and no retained validation harness or CI exists.

The recommended direction is reuse-first. Do not rebuild Maven workflows, facility history, or a second database in this website. Reuse product-owned professional workflows and Evo primitives through versioned links or authenticated handoffs when those contracts are ready. Evo supplies reusable primitives/modules incorporated into each product; it is not one shared master database, and each app should not recreate a historian. The website should remain a small public surface whose claims, form boundary, content freshness, and release contract are tested and governed.

## 1. Scope, constraints, and evidence classes

### 1.1 Reviewed in this audit

- Every tracked implementation/content file at baseline: all HTML, CSS, JavaScript, SVG, hosting controls, sitemap, and ignore rules.
- All tracked bitmap assets by inventory and reference coverage; bitmap pixels were not re-authored.
- Callers and runtime behavior in `js/site.js`, not just page prose.
- Navigation, article enhancement, form submission, structured data, sitemap, custom-domain, and inferred hosting boundaries.
- Safe Git metadata and relevant history, including the initial branch/HEAD/status and deployment-related commits.
- The user-authorized prior report, `Maven_Healthcare_Read_Only_Audit_2026-10-23.md`, and the earlier `maven-web` draft as background only. Current-repository conclusions were independently checked against this checkout.

### 1.2 Deliberately not inspected or executed

- Secrets, `.env`, patient/resident records, operational databases, operational logs, account configuration, or forbidden session paths.
- The ignored local `venv/`; it is not a tracked or reproducible site dependency contract.
- Live Formspree submission, Formspree account settings, CRM delivery, or any other external write.
- Public DNS/TLS/hosting settings, live Pages configuration, external-link health, security headers, or production behavior.
- Paid/model calls, dependency installation, historical test reruns, application workflow reruns, or a new browser/UI pass.
- Regulatory or clinical correctness certification. Official links were inventoried, not used to certify the guidance.

### 1.3 Evidence classification

| Class | Meaning in this report |
|---|---|
| Current-checkout fact | Directly read or safely checked in `maven-web` at `bd96191…` |
| Current offline check | A read-only repository-local validation run performed for this audit |
| Earlier audit evidence | Findings from the authorized 2026-10-23 Maven Healthcare audit; not re-executed here |
| User-reported historical evidence | Chris's report of several hundred real AI/API CLI tests and two completed UI/workflow passes; trusted history whose run records were not retained |
| Product claim | Public website language about capabilities implemented or evolving in sibling products; not locally executable evidence |
| Gap | A missing integration, governance, proof, or hardening layer; not automatically a defect |
| Defect | A concrete inconsistency in behavior implemented by this checkout |

The absence of historical logs or GitHub issues is not evidence that prior testing or controls did not exist. Prompt controls, JSON output handling, token limits, general-knowledge checks, and tracking predated the issue record. This audit did not hunt for deleted logs, request proof from Chris, or infer “untested” from the website repository's intentionally small retained surface.

## 2. Repository identity and initial state

| Property | Verified value |
|---|---|
| Repository root | `C:\Users\cweed\projects\maven-web` |
| Initial branch | `main` |
| Initial HEAD | `bd96191afcd8900b807c8064dad7bb43b8959658` |
| Initial worktree | Clean: `## main...origin/main` |
| Remote | `origin https://github.com/cweedman1/maven-web.git` |
| Refreshed remote baseline | `origin/main` = `bd96191afcd8900b807c8064dad7bb43b8959658` |
| Audit path before write | Available; no existing file was overwritten |
| Audit isolation | Branch `audit/2026-10-23-maven-web-repository-audit`, created from refreshed `origin/main` |

No `AGENTS.md` was present in the repository or checked ancestor locations. The repository's `.agents/` directory was empty, so there were no repository-specific skill instructions to apply. The existing ignored `venv/` was preserved and not inspected. No tracked or untracked user work was changed before this document was created.

Relevant history supports, but does not fully define, the delivery model: commits `39dd031` (“add nojekyll”) and `8e003fc` (“move site to root for github pages”) explicitly reference GitHub Pages; several commits manage `CNAME`; tag `v1-launch-candidate` points to earlier commit `608b106`; and current HEAD is the later “Release Maven Compliance iteration two rebuild.”

## 3. Purpose, audience, and actual architecture

### 3.1 Purpose and audience

The primary audience is nursing-home leadership—administrators, Directors of Nursing, MDS coordinators, infection preventionists, department leaders, and compliance reviewers. The homepage frames Maven around controlled work from source evidence through professional decision and closure (`index.html:60-104`). The access request asks for an operational control problem rather than an AI-feature request (`index.html:117-124`).

The site serves four purposes:

1. **Public product positioning.** It explains Maven's evidence, work, professional-review, readiness, closure, and Evo-memory model (`index.html:60-111`).
2. **Workflow explanation.** It describes Survey/POC, Investigation, and QAPI/facility-intelligence workspaces (`poc.html:59-64`; `investigations.html:59-64`; `intelligence.html:59-64`).
3. **Professional Field Manual.** It publishes workflow-oriented nursing-home operational guidance (`knowledge.html:69-85` and the deep guides).
4. **Access conversion.** It gathers a prospect's name, email, and operational challenge through Formspree (`index.html:117-124`).

### 3.2 Shipped file architecture

The 47 tracked baseline files comprise:

- 16 root HTML documents;
- five CSS layers;
- one 98-line JavaScript file;
- 16 WebP hero images, three PNG assets, and one SVG mark;
- `.gitignore`, `.nojekyll`, `CNAME`, `robots.txt`, and `sitemap.xml`.

Every page directly loads the same five stylesheets and `js/site.js`; there is no compilation step, server rendering, template engine, or dependency runtime (representative wiring: `index.html:36-37`). The CSS separation is purposeful:

| Layer | Responsibility |
|---|---|
| `css/foundation.css:1-21` | Design tokens, reset, typography, focus/skip-link behavior, print rules |
| `css/shell.css:1-14` | Sticky header, repeated nav/footer shell, heroes, access-band layout, breakpoints |
| `css/components-v3.css:1-12` | Buttons, workflows, cards, forms, evidence rows, process maps |
| `css/manual.css:1-6` | Field Manual hubs, article surface, TOC, metadata, provenance, responsive tables |
| `css/motion.css:1-35` | Tonal/story layouts, figure/media treatment, reduced-motion behavior |

The entire executable runtime is `js/site.js`:

- lines 2-10 toggle the mobile nav through DOM `data-open` and `aria-expanded`;
- lines 12-54 map routes and homepage hashes to primary-navigation `aria-current` state;
- lines 56-85 progressively restructure qualifying long articles, create heading IDs and a TOC, and inject administrator/provenance metadata;
- lines 87-96 add a scroll-progress bar.

There is no `fetch`, XHR, WebSocket, service worker, storage, cookie, analytics, authentication, or product API code. Content remains readable without JavaScript; enhancement is layered on authored HTML. The TOC uses `innerHTML`, but its variable heading text currently comes only from repository-authored static content. If headings ever become remotely or user supplied, that trust boundary would need sanitization.

### 3.3 Maintainability tradeoff

The direct-static approach is low dependency and easy to host, but headers, footers, disclaimers, stylesheet references, metadata, and navigation are copied across 16 documents. `site.js` also manually maps every route (`js/site.js:18-32`). A global content or navigation change therefore relies on coordinated manual edits. The site currently passes consistency checks, but this is a growing drift risk rather than a present failure.

## 4. Conceptual domain model versus executable domain model

This repository has a clear **conceptual** domain model expressed in content, but no executable product domain classes.

The homepage defines the lifecycle as:

> source → evidence → owned work → professional review → readiness → retained history/closure

The stages are explicitly described at `index.html:83-92`. Supporting concepts include source documents, citation narratives, evidence, facility context, owners, assignments, tasks, blockers, decisions, rationale, monitoring, timelines, readiness, outcomes, and closure (`index.html:63-111`). The human/automation split is also explicit: assistance extracts, interprets, drafts, recommends, and explains, while administrators and qualified professionals validate, decide, approve, and close (`index.html:78-103`).

| Domain concept presented | Website evidence | What exists locally |
|---|---|---|
| Survey/POC record | `poc.html:60-63` | Explanatory HTML only |
| Incident investigation | `investigations.html:60-63` | Explanatory HTML and professional guide only |
| Facility/QAPI signal | `intelligence.html:60-63`; `casper-facility-intelligence.html:124-170` | Explanatory HTML only |
| Evidence and provenance | `index.html:66-74,85-103` | Static examples plus injected article provenance notice |
| Ownership/tasks/blockers | `index.html:68-72,88-90`; product pages | Product claims; no task/state implementation |
| Professional decision | `index.html:80,103`; `investigations.html:63` | Boundary language; no authenticated decision record |
| Evo memory/history | `index.html:63,81,107` | Product architecture claim; no Evo client or store |
| Facility identity | `intelligence.html:60-63` | Narrative context only; no identifier or tenant model |

“One operational memory” (`index.html:107`) describes a product operating model, not a database topology proven here. Consistent with the product direction supplied for this audit, Evo provides reusable primitives/modules incorporated into each product. It is not one master database “to rule them all,” and the correct response is not to rebuild a separate historian in every app. This website should not acquire operational persistence merely to make the marketing language locally executable.

## 5. Full UI and professional workflow trace

### 5.1 Public visitor journey

The complete local visitor workflow is:

1. Arrive at the homepage with product metadata and a SoftwareApplication JSON-LD declaration (`index.html:7-35`).
2. Read the product boundary, example evidence-to-closure trace, and six-stage lifecycle (`index.html:57-104`).
3. Navigate to one of three product narratives, the Field Manual, or regulatory sources (`index.html:106-116`; header/footer links).
4. Browse topic hubs and deep guides through cards, breadcrumbs, related-resource links, and footer navigation (`knowledge.html:69-85`).
5. Optionally submit an access request directly to Formspree (`index.html:117-124`).
6. Receive a static confirmation presentation at `thank-you.html:74-83`; the page does not verify Formspree acceptance or delivery.

There is no sign-in, authenticated application link, demo session, tenant selection, facility selector, product record, or app-shell route in this checkout. The site is browsable but has no search or filtering feature.

### 5.2 Survey and Plan of Correction

The product page describes a professional flow of CMS-2567 intake → citation evidence review → POC drafting → compliance review → readiness and closure (`poc.html:60-63`). It correctly emphasizes source-narrative recovery, resident-specific facts, corrective elements, ownership, monitoring, approval/revision, and blockers. The deep POC guide gives a five-part professional structure—deficient practice, potentially affected residents, responsibility, monitoring, and completion date—with a worked medication-storage example (`how-to-write-plan-of-correction.html:89-163`).

This is an existing product/workflow claim, not an invitation to invent a new POC flow. The website itself does not upload a CMS-2567, call a parser, create a POC, assign an owner, collect approval, calculate readiness, or retain closure.

### 5.3 Investigation

The product page presents incident initiation → evidence/chronology → analysis and missing elements → recommended action converted to owned work → blocker-aware closure (`investigations.html:60-63`). It explicitly states that generated report language remains draft until a professional reviews it against facts and obligations (`investigations.html:63`).

The deep guide is substantive: immediate protection, reporting, evidence preservation, statements, record review, timeline building, findings, determination, root cause, corrective action, final submission, and follow-up are traced at `incident-investigation-report-example.html:89-198`. Evidence-gap checklists and investigation completeness are deliberate professional assistance, not evidence that the workflow is unfinished. No investigation case or evidence is stored by this site.

### 5.4 QAPI, CASPER, and facility intelligence

The facility-intelligence page presents CASPER source → metrics → interpretation → reviewed action plan/task → monitoring, and candidly says the workspace is functioning while its fuller lifecycle/state/closure depth is expanding (`intelligence.html:60-63`). Signals do not establish conclusions; leadership decides whether a signal becomes a QAPI priority (`intelligence.html:62-63`).

The QAPI guide defines the professional operating cycle as risk identification, root cause, assigned action, monitoring, leadership review, and documented closure (`what-is-qapi.html:89-195`). The CASPER guide connects measures and public performance context to multi-source review, QAPI prioritization, monitoring, and a worked falls example (`casper-facility-intelligence.html:65-170`). These pages recognize existing facility-state and QAPI work rather than proposing a replacement. This checkout does not parse CASPER, aggregate facility history, calculate trends, open a QAPI initiative, or persist monitoring.

### 5.5 Field Manual and official sources

`knowledge.html` organizes six topic areas—POC, QAPI, deficiencies, investigations, CASPER/facility intelligence, and regulatory sources—and four deep guides around professional questions (`knowledge.html:69-85`). Hub pages link the guides back to product narratives and official sources. Their “should expand” language (`plans-of-correction.html:78`; `qapi.html:77`; `survey-deficiencies.html:77`; `investigation-resources.html:77`) is an explicit content roadmap, not a broken workflow.

The source page links CMS nursing-home guidance, a CMS scope/severity methodology PDF, 42 CFR Part 483, CMS QAPI material, and Medicare Care Compare, while stating that Maven should operationalize rather than replace official sources (`regulatory-references.html:66-100`). Long-form pages receive a JavaScript-injected reminder to review against current requirements and facility policy (`js/site.js:73-82`), and every footer repeats a broader regulation/legal/professional-judgment disclaimer (for example, `index.html:137`).

## 6. AI, prompts, tokens, JSON, validation, and telemetry

### 6.1 Exact implementation in this checkout

| Concern | Current `maven-web` implementation |
|---|---|
| Model/provider call | None |
| Prompt templates or prompt versioning | None |
| Token/input/output limits | None |
| AI response mode or product JSON contract | None |
| AI output parsing/repair | None |
| AI factual/general-knowledge evaluation | None |
| Professional AI-output approval record | None; only explanatory boundary language |
| Product API client | None |
| Telemetry/analytics/error reporting | None |
| Cookies/localStorage/sessionStorage/IndexedDB | None |
| JSON in the site | 28 publication-only JSON-LD blocks; all parsed in the offline check |
| Local input validation | Native HTML `required` fields and `type="email"` on the access form |

The site uses “intelligence” as product language. It says the intelligence layer may extract citations, recover narratives, identify missing investigation elements, interpret CASPER metrics, and draft structured language, while control logic and professionals retain authority (`index.html:98-103`). Those are careful claim boundaries, not hidden model code.

No analytics or tracking script was found, which is a privacy-positive property. Conversely, this checkout cannot observe whether the Formspree request succeeded, whether an external product workflow ran, which prompt/model/version produced an output, how many tokens were used, or whether professional review occurred.

### 6.2 Sibling AI evidence, classified correctly

The authorized earlier Maven Healthcare audit reported that current `maven-healthcare` uses a retained external-model path for a legacy POC flow while its authoritative POC, current Investigation, QAPI, CASPER interpretation, normalization, readiness, and lifecycle logic are deterministic professional-support code. It also traced older `maven_2.0` Investigation/QAPI implementations with explicit prompts and JSON adapters, and noted older calls that lacked provider token limits/JSON response mode. Those are **earlier audit findings about sibling repositories**, not newly verified code in `maven-web`.

Chris reports several hundred real AI/API CLI tests and two completed UI/workflow passes across Maven's development history. He also states that prompt controls, JSON output, token limits, general-knowledge checks, and tracking predated GitHub issues. Historical run records were not retained, and this audit neither requested them nor treated their absence as a failure. Public copy should therefore be aligned to a versioned capability record—not weakened merely because the website repo does not contain the runtime and not strengthened beyond what the selected current deployment actually integrates.

## 7. Persistence, identity, state, evidence, and history

### 7.1 Local browser state

Local state is intentionally ephemeral:

- mobile-menu open/closed state exists only in `data-open` and `aria-expanded` (`js/site.js:2-9`);
- navigation state is recomputed from `location.pathname` and `location.hash` (`js/site.js:12-54`);
- article wrapper, heading IDs, TOC, provenance note, and progress width are DOM-only (`js/site.js:56-96`).

No state survives navigation except the URL itself. There is no identity, authorization, role, tenant, facility, case, session token, cookie, browser storage, cache database, or evidence/history persistence.

### 7.2 Form data boundary

The sole external write is the direct browser POST to Formspree at `index.html:119-124`. Fields are name, email, operational challenge, source, intent, subject, and redirect URL. The repository does not contain the receiving configuration, encryption/retention/deletion policy, anti-abuse rules, access controls, delivery telemetry, downstream CRM, or error-recovery path. `thank-you.html` is directly visitable and therefore cannot be treated as submission evidence.

### 7.3 Product evidence/history claims

Source documents, reviewed evidence, owners, decisions, rationale, blockers, timelines, outcomes, and closure are repeatedly presented as Maven/Evo product capabilities (`index.html:63-103`). This site neither creates nor reads those records. That is the correct public-site boundary, not a defect. The integration obligation is claim traceability: each claim should point to a versioned product capability/release state rather than implying that a marketing repository itself proves durability.

## 8. Sibling interfaces and reuse boundary

There is no implemented sibling interface in this checkout: no Maven application URL, Evo endpoint, SDK import, shared schema, auth handoff, NexusGrid/FairFight reference, or database connection. “Evo Core” appears as narrative architecture at `index.html:63,81`, and EVO Engineering appears in publisher/footer attribution.

The following context comes from the authorized earlier Maven Healthcare audit and is included to interpret public claims, not to assert a fresh sibling-repository review:

| Sibling/interface context | Earlier evidence classification | Website implication |
|---|---|---|
| Current `maven-healthcare` | FastAPI product with a strong survey/evidence/POC/professional-decision/task/readiness spine backed through secured Evo Core interfaces | POC operating-language has a real lineage; link claims to the selected deployed version |
| Current Investigation/QAPI/CASPER review | Typed professional-support workflows exist; parts of reviewed state/handoffs were reported as browser-session or service-level rather than fully durable facility records | Preserve “professional decides” and “expanding” language; do not claim every state is durably unified without release evidence |
| `maven_2.0` | Historical model-backed POC/Investigation/QAPI plus dynamic facility-context compression | Reuse concepts and prompts where applicable; do not present historical integration as the exact current deployment |
| `mds_maven_prod` | Historical case-centric and consolidated UI/workflow generations plus real/synthetic harnesses | Supports accomplished lineage and two UI generations; exact historical run records remain user-reported |
| Evo Core | Reusable identity, evidence, decision, task, transition, artifact, and history primitives with bounded deployments/interfaces | Incorporate primitives per product; do not build a master cross-product database or duplicate a historian in this site |

The next product milestone described by that earlier audit was not “invent POC/Investigation/QAPI again.” It was to connect already-designed reviewed outputs to governed facility identity and durable product-owned Evo records while keeping case readiness distinct from any future facility/QAPI readiness policy. `maven-web` should reflect that integration status; it should not implement it.

## 9. Navigation, accessibility, media, and responsive behavior

### 9.1 Implemented strengths

- Every page has an HTML5 doctype, `lang="en"`, a title, description, canonical URL, skip link, one `h1`, and a matching `main` target.
- Header nav, breadcrumbs, contextual cards, related-resource lists, and three footer link groups provide multiple paths through the content.
- The mobile menu is a real button with `aria-controls` and `aria-expanded`; the script updates its state (`index.html:40-53`; `js/site.js:2-9`).
- All 40 image occurrences include `alt`; decorative brand marks use empty alt while content images have descriptive text.
- `:focus-visible` and skip-link treatment are defined (`css/foundation.css:14,18`).
- Print rules remove shell/progress/CTA chrome and preserve article readability (`css/foundation.css:21`).
- Reduced-motion preferences disable animation/transition behavior (`css/motion.css:32-35`).
- Hero images use 960/1800 WebP pairs, responsive `srcset`, intrinsic sizes, and lazy loading below the fold; the homepage preloads its lead image (`index.html:36,94-96`).
- Article tables can scroll horizontally on narrow screens (`css/manual.css:6`).

These source patterns support accessibility; they do not establish WCAG conformance. No rendered contrast, keyboard, screen-reader, zoom/reflow, form-error, or mobile-device evaluation was run in this audit.

### 9.2 Concrete frontend defects

| Severity | Finding | Evidence | Effect |
|---|---|---|---|
| Medium-low | CASPER guide misses the article enhancer | `casper-facility-intelligence.html:61-65` places its `h1` outside `.documentation-surface`, while `js/site.js:56-57` requires an `h1` inside that surface | Unlike the four other deep guides, it receives no generated TOC, article metadata/provenance insert, article wrapper, or progress bar |
| Low | Homepage hash current-state style mismatch | `js/site.js:36-50` sets `aria-current="location"`; `css/shell.css:4` highlights only `aria-current="page"` | Accessible state exists, but Product/Access hash locations lack the same current-link color |

The CSS also contains a dormant current-section affordance: `css/manual.css:3` styles TOC links with `aria-current="true"`, but `js/site.js:56-97` never assigns it. The TOC itself works, and no retained requirement establishes scroll-position tracking, so this is an implementation/dead-style gap rather than a confirmed defect.

The mobile menu also lacks Escape handling, outside-click closing, and explicit focus return. That is an accessibility refinement gap, not a failure of its basic toggle.

## 10. Form, privacy, and security boundaries

The access form is configured in source; live submission was not verified. On submission, it sends healthcare-context free text to a third party. The line “used only to evaluate Maven access and follow up about operational fit” is useful but incomplete (`index.html:123`).

Priority governance gaps:

- no explicit “do not submit PHI, resident names, or patient-identifying information” warning;
- no linked privacy notice, processor disclosure, retention/deletion statement, or contact identity;
- no repository evidence for Formspree access, region, encryption, deletion, abuse prevention, or breach handling;
- no in-repo receiving handler; receiver-side validation, anti-abuse controls, rate limiting, retry/error state, and delivery confirmation are external and unverified;
- no consent/version record or evidence trail for submitted copy.

Native `required` and email-type checks improve usability but are not a security or data-governance boundary. Formspree may supply protections externally; absence from this repo is not proof that they do not exist.

No Content-Security-Policy, HSTS, `nosniff`, Referrer-Policy, Permissions-Policy, frame restriction, or form-action allowlist is configured in tracked files. A static host may set some of these outside the checkout. The finding is lack of versioned evidence, not confirmed absence in production.

## 11. Content, claims, SEO, and discovery

### 11.1 Discovery implementation

- `robots.txt:1-4` allows crawling and advertises `https://mavencompliance.systems/sitemap.xml`.
- `sitemap.xml:4-78` lists all 15 intended indexable pages, each with `2026-09-17` as `lastmod`.
- `thank-you.html:10` is `noindex, follow` and is correctly omitted from the sitemap.
- Every page includes canonical, Open Graph, Twitter-card, and JSON-LD metadata.
- The 28 JSON-LD blocks cover SoftwareApplication, BreadcrumbList, CollectionPage, Article, and WebPage publication schemas and parsed successfully offline.
- The custom domain is `mavencompliance.systems` (`CNAME:1`).

No external crawler, rich-results service, canonical resolver, social-card renderer, or live link was queried. `lastmod` values are manually maintained and can drift.

### 11.2 Professional claim boundaries

Strengths:

- intelligence assistance is distinguished from professional authority (`index.html:63,74,78-81,98-103`);
- Investigation drafts remain subject to fact/obligation review (`investigations.html:63`);
- facility signals are not regulatory conclusions (`intelligence.html:62-63`);
- Field Manual guidance is practice-informed and must be checked against current requirements and policy (`knowledge.html:85`; `js/site.js:73-82`);
- facility intelligence is visibly “Expanding,” and its lifecycle depth is expressly qualified (`index.html:111`; `intelligence.html:61-63`).

Governance gaps:

- “Operational” and “Implemented workflow” claims have no version/release/source link in this repo;
- content has no visible per-content review owner, reviewed-on date, next-review date, or change history;
- official URLs and time-sensitive reporting/regulatory language have no retained freshness check;
- the site has no capability manifest distinguishing current, legacy/compatibility, browser-session, and expanding behavior.

## 12. Build, deployment, and release boundary

`.nojekyll`, the root-level source layout, `CNAME`, Git history, and the GitHub remote are consistent with a GitHub Pages deployment. Exact Pages source branch/folder, environment approvals, preview behavior, domain verification, HTTPS enforcement, caching, and branch protection are not encoded here.

There is no README, license, package/lockfile, static-site generator, `.github/workflows`, build script, test directory, Dockerfile, Makefile, Vercel/Netlify config, deployment manifest, release checklist, or rollback procedure. Source is deployable as static files, but the release contract lives outside version control.

That boundary matters for this audit: if repository settings publish `main` from the root, merging `docs/audits` could make an internal audit web-accessible. The audit was therefore created and pushed only on a non-production audit branch. No deployment, merge, or production-source update is part of this work.

Current HEAD `bd96191` consolidated the modern CSS/JS site and removed earlier demonstration media, screenshots, and `test.ipynb`. Commit `5347280` removed two tracked Lighthouse HTML reports while `.gitignore:5` continued to ignore `maven-lighthouse-*.html`. Those historical files show prior review activity but are not a retained current harness or release attestation.

## 13. Harness scope and verification evidence

### 13.1 Retained in this repository

No executable test, link checker, linter, HTML/CSS validator, accessibility suite, browser automation, Lighthouse configuration/report, performance budget, build verification, deploy check, or CI gate is retained. The ignored local environment is not a harness contract.

### 13.2 Current offline checks run for this audit

Without installs, external requests, or file writes, this audit checked:

- 16 HTML documents and all 47 tracked baseline files;
- 600 HTML `href`/`src` occurrences: 559 repository-local, 24 absolute HTTP(S), and 17 fragment-only;
- eight `srcset` attributes with 16 candidates;
- 16 CSS `url(...)` references;
- zero missing repository-local targets;
- zero unresolved explicit fragments;
- zero duplicate IDs;
- zero unresolved `aria-labelledby`, `aria-describedby`, or `aria-controls` references;
- 28 JSON-LD blocks, with zero parse failures;
- one `h1` on every page;
- 40 image occurrences, all with `alt`;
- one form total;
- 15 sitemap URLs exactly matching the 15 intended indexable pages.

These are repository-local structural checks. They do not prove rendered layout, external availability, accessibility conformance, form delivery, product behavior, clinical correctness, regulatory sufficiency, privacy compliance, or production readiness.

### 13.3 Earlier and historical evidence

- **Earlier Maven Healthcare audit evidence, not rerun here:** at the audited healthcare baseline `279b65a`, 274 tests passed, one opt-in live test skipped, and the release import smoke passed. Most integration tests used injected/fake authority, Core, or model components; the live provider/Core path was intentionally not run.
- **User-reported historical evidence:** several hundred real AI/API CLI tests and two completed UI/workflow passes. Run records are not retained. This is trusted product history, not a current website test result.
- **Website history:** removed Lighthouse reports and prior release/media work show historical review, but no current result is inferred from an absent artifact.

## 14. Accomplished functionality

The repository already delivers:

- a coherent public product narrative centered on evidence, accountability, professional authority, readiness, and closure;
- distinct Survey/POC, Investigation, and facility-intelligence explanations with visible maturity boundaries;
- a substantive Field Manual rather than placeholder marketing copy;
- deep operational guides covering POC structure, investigation discipline, deficiency patterns, QAPI, CASPER, and closure;
- official-source orientation and repeated non-replacement disclaimers;
- responsive, dependency-light static delivery with deliberate visual hierarchy;
- complete local navigation and related-resource pathways;
- strong baseline canonical/social/structured metadata, robots, sitemap, and custom-domain controls;
- progressive article enhancement, print support, focus/skip-link patterns, and reduced-motion behavior;
- a privacy-light runtime with no observed tracker, cookie, or browser-persistence layer;
- a configured third-party access-request endpoint, with delivery intentionally unverified here.

These are finished website capabilities. They should not be discounted because the operational Maven application lives in sibling repositories.

## 15. Integration gaps versus defects

### Confirmed local defects

1. CASPER guide/article-enhancement precondition mismatch.
2. Homepage `aria-current="location"` visual-selector mismatch.

### Integration, governance, or assurance gaps

1. No versioned product-claim/capability matrix.
2. No authenticated handoff or link to an actual application surface in this checkout.
3. Formspree privacy, PHI warning, retention, processor, error, and delivery boundaries are not documented here.
4. No versioned Pages/release/preview/rollback/security-header contract.
5. No retained static, browser, accessibility, performance, or external-link harness.
6. Repeated shell/metadata content is manually synchronized.
7. TOC current-section styling is retained without a state-setting caller or documented scrollspy requirement.
8. Regulatory-adjacent content lacks visible ownership and review cadence.
9. External link, structured-result, DNS/TLS, header, and live-form behavior remain unverified.

### Explicitly not defects in this repository

- absence of a backend, product API, AI/model runtime, identity system, database, evidence store, workflow state machine, or historian;
- absence of operational Survey/POC, Investigation, QAPI, CASPER, and facility-state records;
- absence of historical AI/API CLI logs;
- deliberate professional evidence-gap/checklist assistance;
- the Field Manual hubs' stated content-expansion roadmap;
- using Evo reusable primitives per product rather than one shared master database.

## 16. Prioritized reuse-based next steps

### P0 — truth, privacy, and release containment

1. **Create a versioned capability-claim registry.** Map each public claim to a product/version and one of: current durable, current session/service-level, legacy/compatibility, expanding, or conceptual. Review `index.html:63-111`, `poc.html:60-63`, `investigations.html:60-63`, and `intelligence.html:60-63` against it before product releases.
2. **Harden the access boundary.** Add a prominent no-PHI/resident-data instruction, accurate privacy/processor/retention/contact material, and defined Formspree success/failure/abuse handling. Verify configuration without sending patient data.
3. **Document production containment.** Version the Pages source-branch/folder, preview policy, custom-domain ownership, release/rollback process, and security-header ownership. Keep internal audit branches outside the production source.

### P1 — reproducible quality and consistent UI

4. **Add a small retained static harness.** Reuse the offline checks from this audit for local targets, fragments, JSON-LD, IDs, ARIA references, sitemap parity, one-`h1`, alt text, form destinations, and repeated resource wiring. Run it in CI without paid/live calls.
5. **Repair the two local UI defects and resolve the dormant affordance.** Bring the CASPER guide into the shared article-enhancement contract, style both valid `aria-current` values, and either document/implement or remove TOC current-section state.
6. **Add browser/accessibility coverage.** Exercise keyboard navigation, mobile-menu focus/Escape behavior, generated TOCs, zoom/reflow, contrast, reduced motion, print, native form errors, and representative viewports.
7. **Centralize repeated shell data.** Use a small deterministic include/generation step or single content source for nav, footer, disclaimers, metadata defaults, and sitemap inputs while keeping the deployed result static and reviewable.
8. **Version response-security expectations.** Define CSP (including the exact Formspree `form-action`), HSTS ownership, frame restrictions, `nosniff`, Referrer-Policy, and Permissions-Policy; then verify them at the actual host.

### P2 — product handoff, content governance, and performance

9. **Link rather than duplicate product workflows.** When a stable authenticated contract exists, add scoped links/handoffs to product-owned Maven surfaces. Do not add operational persistence, prompts, facility state, or a historian to this site.
10. **Reuse Evo/product primitives at their owner boundary.** Let each Maven/NexusGrid/FairFight product incorporate appropriate Evo modules and maintain its governed records. Do not create one cross-product master database and do not rebuild the same history layer per app.
11. **Assign content owners and review dates.** Track official-source checks, review dates, and material changes for regulatory/reporting/QAPI guidance.
12. **Measure performance instead of inferring it.** Restore reproducible Lighthouse/Core Web Vitals checks with budgets, retain summary evidence, validate hero preload value, and prevent media regressions.
13. **Add public content search only if evidence supports it.** The current card/breadcrumb architecture is coherent; if the Field Manual grows, build search from the same authoritative content index used for sitemap and navigation rather than hand-maintaining another index.

## 17. File and line coverage ledger

| File/group | Lines reviewed | Coverage/result |
|---|---:|---|
| `index.html` | 1-140 | Metadata, conceptual lifecycle/domain, product modules, professional/AI boundaries, access form, repeated shell |
| `poc.html` | 1-78 | Survey/POC narrative, evidence, review, readiness, closure claims |
| `investigations.html` | 1-78 | Investigation narrative, evidence gaps, assigned work, professional boundary, closure claims |
| `intelligence.html` | 1-78 | CASPER/QAPI/facility context, task/monitoring claims, explicit maturity boundary |
| `knowledge.html` | 1-100 | Field Manual taxonomy, deep-guide routing, professional reading standard |
| `plans-of-correction.html` | 1-99 | POC hub, artifact chain, roadmap/source links |
| `qapi.html` | 1-98 | QAPI hub, framework roadmap, product/source links |
| `survey-deficiencies.html` | 1-98 | Deficiency hub, scope/severity roadmap, product/source links |
| `investigation-resources.html` | 1-98 | Investigation hub, professional framework roadmap |
| `casper-facility-intelligence.html` | 1-199 | CASPER, Care Compare, warnings, QAPI handoff, facility intelligence, worked example, enhancement mismatch |
| `regulatory-references.html` | 1-117 | CMS/eCFR/Care Compare source interface and replacement boundary |
| `how-to-write-plan-of-correction.html` | 1-180 | POC professional structure, worked example, related navigation |
| `incident-investigation-report-example.html` | 1-216 | Protection, reporting, evidence, timeline, determination, RCA, action, follow-up |
| `nursing-home-deficiency-examples.html` | 1-161 | Deficiency examples, causes, correction, monitoring, scope/severity |
| `what-is-qapi.html` | 1-223 | QAPI participants, CASPER, QA/PI distinction, five elements, RCA, closure |
| `thank-you.html` | 1-98 | Static confirmation and `noindex` boundary; no delivery proof |
| `js/site.js` | 1-98 | Entire executable behavior and callers/preconditions |
| `css/foundation.css` | 1-21 | Tokens, reset, focus/skip-link, typography, print |
| `css/shell.css` | 1-14 | Header/nav/footer, heroes, responsive shell, current-state selector |
| `css/components-v3.css` | 1-12 | Buttons, workflows, cards, form controls, process maps, breakpoints |
| `css/manual.css` | 1-6 | Manual hubs, article/TOC/meta/provenance/table layout and dormant selector |
| `css/motion.css` | 1-35 | Story/media hierarchy and reduced-motion handling |
| `.gitignore` | 1-5 | Ignored environment/cache/secrets/Lighthouse-output patterns |
| `.nojekyll` | complete (empty marker) | Static Pages convention; no runtime configuration |
| `CNAME` | 1 | Custom domain |
| `robots.txt` | 1-4 | Crawl and sitemap declaration |
| `sitemap.xml` | 1-81 | Exact 15-page indexable URL set and manual dates |
| `assets/maven-mark.svg` | 1-9 | Accessible vector brand mark source |
| `assets/*.png`, `assets/hero/*.webp` | 19 binary files | Icons, social card, eight responsive hero pairs; all tracked assets referenced |
| Git refs/history | relevant safe metadata | Initial clean baseline, refreshed remote equality, Pages-related commits, removed historical reports/harness artifacts |

## 18. Limitations and verification attestation

This is a source and repository audit, not a production certification. It did not validate clinical outcomes, regulatory sufficiency, legal compliance, HIPAA compliance, patient-data safety, model correctness, accessibility conformance, live hosting, external URL availability, or Formspree delivery. Sibling-runtime descriptions are explicitly labeled earlier audit evidence; the exact integration present in this checkout is static content plus a third-party form.

No HTML, CSS, JavaScript, image, hosting control, dependency, product code, form configuration, external account, deployment, database, log, or patient record was modified or accessed. No reset, clean, merge, force push, dependency install, paid/live call, historic retest, or deployment was performed. The only authorized repository content change is this audit Markdown file on the non-production audit branch.
