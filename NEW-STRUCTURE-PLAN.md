# New 5-Section Documentation Structure

## Rationale

Based on research of similar developer-focused documentation (Stripe, Shopify Polaris, Ant Design), the optimal structure follows an **"Understand → Learn → Apply → Reference"** flow.

Current structure has 3 sections (Get Started, Patterns, Resources).
New structure expands to 5 sections for better information architecture.

---

## Proposed Structure

```
content/docs/
├── _index.md (landing page - unchanged)
│
├── 1. introduction/
│   ├── _index.md (who this is for, core principle, the problem)
│   ├── quick-start.md (5 min / 30 min / scratch / evidence paths)
│   └── how-to-use.md (reading order, when to read what)
│
├── 2. foundation/
│   ├── _index.md (intro to validation-first approach)
│   ├── validation-framework.md (the 3-question filter, expanded)
│   ├── core-principles.md (UX over protocol purity, ship small, etc.)
│   └── quick-wins.md (high-impact, low-effort improvements)
│
├── 3. patterns/ (UNCHANGED)
│   ├── _index.md
│   ├── 01-onboarding.md
│   ├── 02-content-discovery.md
│   ├── 03-core-interactions.md
│   ├── 04-performance.md
│   ├── 05-progressive-complexity.md
│   └── 06-cross-client-consistency.md
│
├── 4. implementation/
│   ├── _index.md (overview of applying patterns)
│   ├── getting-started.md (which pattern first? integration strategies)
│   ├── measuring-success.md (metrics that matter, validation checklists)
│   ├── common-traps.md (meta anti-patterns, what to avoid)
│   └── case-studies.md (examples of successful implementations)
│
└── 5. research/
    ├── _index.md (about the research methodology)
    ├── methodology.md (how this was built)
    ├── references.md (100+ verified sources)
    ├── glossary.md (Nostr terms, UX terms)
    └── evidence-sources.md (links to detailed research files)
```

---

## Content Migration Map

### From `get-started.md` →

- **Executive Overview** → `introduction/_index.md`
- **Where to Start** → `introduction/quick-start.md`
- **The Validation Framework** → `foundation/validation-framework.md` (expand)
- **Quick Wins** → `foundation/quick-wins.md`
- **Next Steps** → `introduction/quick-start.md` (bottom)

### From `content/docs/_index.md` →

- **Why This Exists** → `introduction/_index.md`
- **What You'll Find** → `introduction/_index.md`
- **How This Was Built** → `research/_index.md`

### New Content to Create:

- `foundation/core-principles.md` (extract from patterns, CLAUDE.md)
- `foundation/_index.md` (intro to validation thinking)
- `implementation/getting-started.md` (new)
- `implementation/measuring-success.md` (new)
- `implementation/common-traps.md` (new)
- `implementation/case-studies.md` (new, or pull from appendices if exists)
- `research/glossary.md` (new)
- `research/evidence-sources.md` (links to research/ folder files)

### From `resources/` → `research/`:

- `methodology.md` → stays
- `references.md` → stays
- `onboarding-research-sources.md` → link from `evidence-sources.md`

---

## Section Weights (Hugo)

```yaml
1. introduction/     weight: 1
2. foundation/       weight: 2
3. patterns/         weight: 3  (unchanged)
4. implementation/   weight: 4
5. research/         weight: 5
```

---

## Navigation Labels

```
- Introduction
- Foundation
- Patterns
- Implementation
- Research
```

---

## Benefits of New Structure

1. **Clearer learning path**: Understand the problem → Learn the framework → Study patterns → Apply them → Reference research
2. **Matches user intent**:
   - "What is this?" → Introduction
   - "How should I think about UX?" → Foundation
   - "What specifically should I do?" → Patterns
   - "How do I implement this?" → Implementation
   - "Where's your proof?" → Research
3. **Scalable**: Room to add more implementation guides, case studies, tools
4. **Follows industry patterns**: Matches Stripe, Polaris, Ant Design structure
5. **Separates concerns**: Principles (foundation) from solutions (patterns) from application (implementation)

---

## Implementation Steps

1. ✅ Create this structure plan
2. Create new directories in content/docs/
3. Create _index.md files for each new section
4. Split and migrate content from get-started.md
5. Create new implementation/ content
6. Rename resources/ to research/ and reorganize
7. Update all internal links
8. Update section weights in frontmatter
9. Test build locally
10. Review and refine

---

## Open Questions

- Should "Quick Wins" be in Foundation or Implementation?
- Case studies: do they exist yet or should we create placeholder?
- Glossary: necessary or can link to external Nostr glossary?
- Should Foundation have subsections or be single long page?
