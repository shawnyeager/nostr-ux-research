# Nostr UX Research Study

**Evidence-based design patterns for building Nostr clients that people actually use.**

---

## The Problem

Nostr has a working, censorship-resistant protocol. The critical problem is user experience.

**Current metrics:**
- **30-day retention trending to 0%** for recent cohorts
- **Daily active users stuck at 10,000-12,000** despite viral adoption spikes
- Users often need **multiple clients** to access different features

This is a retention crisis. But it's also **solvable**. Traditional social apps achieve better retention not through centralization, but through better content discovery, reliable core interactions, and streamlined onboarding—all implementable on Nostr.

This research study provides evidence-based patterns to fix these critical UX problems.

---

## What You'll Find Here

**6 critical UX patterns** backed by 100+ verified sources:
1. **[Onboarding & First-Run Experience](patterns/01-onboarding.md)** - Minimize time-to-first-value
2. **[Content Discovery & Feed Quality](patterns/02-content-discovery.md)** - Solve the empty feed problem
3. **[Core Interaction Loops](patterns/03-core-interactions.md)** - Make posting/replying work reliably
4. **[Performance & Perceived Speed](patterns/04-performance.md)** - Optimistic UI and loading states
5. **[Progressive Complexity](patterns/05-progressive-complexity.md)** - Hide power features until needed
6. **[Cross-Client Consistency](patterns/06-cross-client-consistency.md)** - Data integrity across apps

Each pattern includes:
- Research-backed problem statement
- Universal UX principles (70%) + Nostr-specific considerations (30%)
- Concrete implementation examples
- Anti-patterns to avoid
- Validation checklists with measurable metrics

**Plus:** The Validation Framework - a decision-making filter to prevent feature bloat.

---

## Quick Start: Choose Your Path

### 🚀 First Time Here?
→ Read **[Introduction](introduction.md)** (5 minutes) - understand the problem, the framework, the 6 patterns

### 🏃 Short on Time?
→ **[Quick Reference Guide](quick-reference.md)** (10 minutes) - one-page summaries of all 6 patterns

### 🔨 Building a New Client?
1. Read **[Introduction](introduction.md)** (get the framework)
2. Start with **[Pattern 1: Onboarding](patterns/01-onboarding.md)** + **[Pattern 2: Content Discovery](patterns/02-content-discovery.md)**
3. Use **[Quick Reference](quick-reference.md)** to scan all patterns
4. Implement core interactions (Pattern 3) before adding features

### 🔧 Have an Existing Client?
1. Audit your app using **[Quick Reference](quick-reference.md)** validation checklists
2. Measure D1/D7/D30 retention (if you're not tracking, start now)
3. Identify your biggest retention drop-off
4. Deep-dive the relevant pattern and implement recommendations
5. **Measure** if it improved retention before moving to next pattern

### 🎨 Designer?
→ Start with **[Pattern 1: Onboarding](patterns/01-onboarding.md)** + **[Pattern 5: Progressive Complexity](patterns/05-progressive-complexity.md)**

### 👀 Evaluating Nostr as a Platform?
→ Read **[Introduction](introduction.md)**, then **[Quick Reference](quick-reference.md)**, then **[Pattern 6: Cross-Client Consistency](patterns/06-cross-client-consistency.md)** for multi-relay implications

---

## Core Documentation

- **[Introduction](introduction.md)** - Why this exists, the Validation Framework, where to start
- **[Quick Reference Guide](quick-reference.md)** - TL;DR summaries of all 6 patterns
- **[Research Methodology](appendices/methodology.md)** - How this study was conducted
- **[References & Bibliography](appendices/references.md)** - All 100+ citations

---

## The 6 Patterns (All Complete ✅)

### Pattern 1: Onboarding & First-Run Experience
**Problem:** 15-20 minute setup, key management overwhelming
**Impact:** Users abandon before reaching value
**Solution:** Minimize time-to-first-value, defer complexity, browse-first approach
→ **[Read Pattern 1](patterns/01-onboarding.md)**

### Pattern 2: Content Discovery & Feed Quality
**Problem:** Empty feeds, "Traditional apps win by having better content selection"
**Impact:** Users bounce because feed is boring
**Solution:** Smart defaults, starter packs, algorithmic discovery, search that works
→ **[Read Pattern 2](patterns/02-content-discovery.md)**

### Pattern 3: Core Interaction Loops
**Problem:** Posts disappear, notifications missing, unreliable actions
**Impact:** Users lose trust, abandon platform
**Solution:** Optimistic UI, instant feedback, error recovery, reliability first
→ **[Read Pattern 3](patterns/03-core-interactions.md)**

### Pattern 4: Performance & Perceived Speed
**Problem:** Apps hang/buffer, crashes, slow loading
**Impact:** Users perceive apps as unreliable
**Solution:** Skeleton screens, optimistic UI, lazy loading, caching strategies
→ **[Read Pattern 4](patterns/04-performance.md)**

### Pattern 5: Progressive Complexity
**Problem:** Relay management, key signers, NIPs exposed to all users
**Impact:** Overwhelming, users leave
**Solution:** 80/20 rule, smart defaults work for most, hide advanced settings
→ **[Read Pattern 5](patterns/05-progressive-complexity.md)**

### Pattern 6: Cross-Client Consistency & Data Integrity
**Problem:** "Lost all followers when switching clients"
**Impact:** Users don't trust the platform
**Solution:** Multi-relay write strategy, sync verification, conflict resolution
→ **[Read Pattern 6](patterns/06-cross-client-consistency.md)**

---

## The Validation Framework

Before building any feature, ask:
1. **Does this help users accomplish their core goal?** (seeing content, connecting with people)
2. **Have we validated this solves a real problem?** (data, user feedback, research - not hunches)
3. **Can we measure if it's working?** (leading indicators, lagging indicators, qualitative signals)

**Core principle:** Great UX is the gateway to the protocol's power.

Full framework with examples in **[Introduction](introduction.md#the-validation-framework-build-features-that-solve-real-problems)**.

---

## Who This Is For

- **Nostr developers** building consumer social apps (mobile, web, desktop)
- **Product designers** working on Nostr clients
- **Mainstream developers** evaluating whether to build on Nostr

**Assumed knowledge:** Basics of Nostr protocols (relays, events, NIPs)

---

## Research Foundation

This study synthesizes:
- ✅ Academic HCI research on social media UX, onboarding, feed algorithms
- ✅ Industry design systems (Apple HIG, Material Design)
- ✅ Nostr-specific data (retention metrics from nostr.band, user complaints, GitHub issues)
- ✅ Mainstream app case studies (TikTok, Instagram, Bluesky, Discord)
- ✅ 100+ verified sources with URLs (strict citation policy)

**Content balance:** 70% universal principles (applicable to any social app) + 30% Nostr-specific considerations (relays, keys, decentralization)

Full methodology: **[appendices/methodology.md](appendices/methodology.md)**

---

## Project Structure

```
nostr-ux-research/
├── README.md                           # This file (start here)
├── introduction.md                     # Why this exists, Validation Framework, where to start
├── quick-reference.md                  # TL;DR summaries of all 6 patterns
├── OUTLINE.md                          # Original study structure
├── patterns/                           # Detailed pattern documentation (all complete ✅)
│   ├── 01-onboarding.md                # ~1200 lines, 20+ citations
│   ├── 02-content-discovery.md         # ~1900 lines, 67+ citations
│   ├── 03-core-interactions.md         # ~1500 lines, 30+ citations
│   ├── 04-performance.md               # ~1400 lines, 35+ citations
│   ├── 05-progressive-complexity.md    # ~900 lines, 12+ citations
│   └── 06-cross-client-consistency.md  # ~1100 lines, 19+ citations
├── research/                           # Evidence files with verified citations
│   ├── README.md                       # Explains evidence collection methodology
│   ├── content-discovery-evidence-2024-2025.md
│   ├── content-discovery-mainstream-lessons.md
│   └── pattern-4-performance-evidence.md
└── appendices/                         # Supporting documentation
    ├── methodology.md                  # Research approach, ethics, limitations
    ├── references.md                   # Master bibliography (100+ sources)
    └── onboarding-research-sources.md  # Deep-dive for Pattern 1
```

---

## Success Criteria

We'll know this research is valuable when:
- Developers reference it in changelogs and design discussions
- Cross-client coordination on core UX patterns emerges
- D1/D7/D30 retention improves across Nostr clients
- User feedback shifts from fundamental UX issues to feature enhancement requests
- Mainstream developers start building on Nostr

**Target:** Nostr retention reaches "OK" benchmarks (D30: 20%+) within 6-12 months

---

## Contributing & Feedback

Found errors? Have additional research? Implemented these patterns and want to share results?

- **GitHub Issues:** [Report issues or suggest improvements](https://github.com/shawnyeager/nostr-ux-research/issues)
- **Pull Requests:** Contributions welcome (methodology in [appendices/methodology.md](appendices/methodology.md))
- **Nostr Discussion:** Share feedback on Nostr (link TBD)

---

## Related Resources

- **[Nostr Design](https://nostrdesign.org/)** - Design patterns and guidelines for Nostr
- **[Nostr NIPs](https://github.com/nostr-protocol/nips)** - Protocol specifications
- **[Awesome Nostr](https://github.com/aljazceru/awesome-nostr)** - Collection of Nostr projects

---

## License

This research is shared openly for the benefit of the Nostr community.

---

## Author

**Shawn Yeager** ([@shawnyeager](https://github.com/shawnyeager))

---

**Remember:** Good UX beats protocol purity. Ship working experiences, then add features.

*Last updated: November 2025*
