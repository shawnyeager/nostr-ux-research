# Nostr UX Research Study

A meta research study on UX best practices and design patterns for Nostr consumer applications.

## Overview

This project synthesizes research on user experience design for social applications and applies it to the unique challenges of building Nostr clients. It's designed to help Nostr developers create better user experiences by learning from both mainstream social app patterns and Nostr-specific considerations.

**Core Thesis:** Good UX wins every time. Ship working experiences, then add features.

## The Problem

Current state of Nostr apps (based on 2024-2025 data):
- **30-day user retention trending to 0%** for recent cohorts
- **15-20 minute onboarding** drives user abandonment
- **All clients in "alpha state"** with reliability issues
- Users need **5-6 different clients** to work around bugs
- Cross-client data loss and inconsistency
- DAU stuck at 10,000-12,000 trusted pubkeys

**Root causes:**
- Feature bloat without user validation
- Protocol complexity exposed to end users
- Core interactions shipped before they're reliable
- Power user features treated as essential

## Target Audience

This research is for:
- **Nostr developers** building consumer social apps (mobile, web, desktop)
- **Product designers** working on Nostr clients
- **Mainstream developers** evaluating whether to build on Nostr

**Assumed knowledge:** Basics of Nostr protocols (relays, events, NIPs)

## The 6 Critical Patterns

Based on research into Nostr apps' typical weaknesses, this study focuses on:

1. **[Onboarding & First-Run Experience](patterns/01-onboarding.md)** ✅ - Get to value fast, defer complexity
2. **[Content Discovery & Feed Quality](patterns/02-content-discovery.md)** ✅ - Solve the cold start problem
3. **[Core Interaction Loops](patterns/03-core-interactions.md)** ✅ - Make posting/replying/reacting work perfectly
4. **[Performance & Perceived Speed](patterns/04-performance.md)** ✅ - Optimistic UI, loading states, reliability
5. **[Progressive Complexity](patterns/05-progressive-complexity.md)** ✅ - Reveal power features gradually (relays, signers)
6. **Cross-Client Consistency** 🚧 - Following/follower sync, data integrity

Each pattern includes:
- Problem statement (research-backed)
- Universal principles (70% - applicable to any social app)
- Nostr-specific considerations (30%)
- Pattern library (concrete examples)
- Anti-patterns (what not to do)
- Validation checklist (how to measure success)

## The Validation Framework

A meta-pattern addressing "features without validation" problem.

**Three-question filter before building features:**
1. Does this help users accomplish their core goal?
2. Have we validated this solves a real problem?
3. Can we measure if it's working?

**Core principle:** Ship small, validate fast. Core interactions before new features.

## Navigation

### Core Documentation
- **[Complete Outline](OUTLINE.md)** - Full study structure and plan
- **[Research Methodology](appendices/methodology.md)** - How this study was conducted
- **[References & Bibliography](appendices/references.md)** - All citations and sources

### Pattern Documentation
1. **[Pattern 1: Onboarding & First-Run Experience](patterns/01-onboarding.md)** ✅ Complete
2. **[Pattern 2: Content Discovery & Feed Quality](patterns/02-content-discovery.md)** ✅ Complete
3. **[Pattern 3: Core Interaction Loops](patterns/03-core-interactions.md)** ✅ Complete
4. **[Pattern 4: Performance & Perceived Speed](patterns/04-performance.md)** ✅ Complete with 35+ 2024-2025 citations
5. **[Pattern 5: Progressive Complexity](patterns/05-progressive-complexity.md)** ✅ Complete with 12+ 2024-2025 citations
6. Pattern 6: Cross-Client Consistency 🚧 Coming soon

### Supporting Materials
- Validation Framework 🚧 Coming soon
- Implementation Guide 🚧 Coming soon
- Case Studies 🚧 Coming soon
- Glossary 🚧 Coming soon

## Project Structure

```
nostr-ux-research/
├── README.md                    # This file (navigation & overview)
├── OUTLINE.md                   # Complete study structure ✅
├── CLAUDE.md                    # Project context for AI assistance ✅
├── patterns/                    # Detailed pattern documentation
│   ├── 01-onboarding.md         # ✅ Complete with citations
│   └── 02-content-discovery.md  # ✅ Complete with citations
├── validation-framework.md      # 🚧 Coming soon
├── implementation-guide.md      # 🚧 Coming soon
└── appendices/
    ├── methodology.md           # ✅ Research approach and ethics
    ├── references.md            # ✅ Master bibliography
    ├── research-notes.md        # ✅ Raw findings organized by topic
    ├── case-studies.md          # 🚧 Coming soon
    ├── resources.md             # 🚧 Coming soon
    └── glossary.md              # 🚧 Coming soon
```

## Content Balance

- **70%** - Universal UX principles (applicable to any social app)
- **30%** - Nostr-specific considerations (relays, keys, zaps, censorship-resistance)

This balance makes the research valuable for both existing Nostr developers and mainstream developers evaluating the platform.

## Status

🚧 **Work in Progress** - Pattern documentation underway.

**Completed:**
- [x] [Research methodology framework](appendices/methodology.md)
- [x] [Master bibliography structure](appendices/references.md)
- [x] [Complete study outline](OUTLINE.md)
- [x] [Pattern 1: Onboarding](patterns/01-onboarding.md) - Fully documented with 2024-2025 citations
- [x] [Pattern 2: Content Discovery & Feed Quality](patterns/02-content-discovery.md) - Complete with 67+ 2024-2025 citations
- [x] [Pattern 3: Core Interaction Loops](patterns/03-core-interactions.md) - Complete with 30+ 2024-2025 citations from Nostr-specific sources and UX research
- [x] [Pattern 4: Performance & Perceived Speed](patterns/04-performance.md) - Complete with 35+ 2024-2025 citations, includes critical March 2024 Core Web Vitals update (INP replaced FID)
- [x] [Pattern 5: Progressive Complexity](patterns/05-progressive-complexity.md) - Complete with 12+ 2024-2025 citations, includes Pareto principle, progressive disclosure, contextual help, smart defaults, and 5 code pattern examples

**Current Work:**
- [ ] Pattern 6: Cross-Client Consistency - Detailed documentation
- [ ] Case studies from mainstream apps
- [ ] Validation framework
- [ ] Implementation guide

**Planned:**
- [ ] Visual diagrams and flows
- [ ] Community feedback and iteration
- [ ] Summary quick-start guide
- [ ] Video walkthrough

## Research Methodology

This study synthesizes:
- Academic HCI literature on social media UX
- Industry design systems (Apple HIG, Material Design)
- User feedback from Nostr clients (Damus, Amethyst, Primal, Snort, etc.)
- Retention and usage data (nostr.band)
- Developer discussions on UX challenges
- Successful patterns from mainstream social apps

Full methodology documented in **[appendices/methodology.md](appendices/methodology.md)** - includes research approach, source categories, citation standards, limitations, and research ethics.

## Success Criteria

We'll know this is valuable when:
- It generates substantive discussion on Nostr
- Developers reference it in client changelogs
- Measurable UX improvements appear in Nostr clients
- Cross-client coordination on core patterns emerges
- Retention metrics improve across the ecosystem

## Contributing & Feedback

This research is being developed in the open. Feedback welcome via:
- GitHub Issues (questions, suggestions, corrections)
- Pull requests (examples, case studies, additional research)
- Nostr discussions (links will be posted when content is ready)

## Related Resources

- [Nostr Design](https://nostrdesign.org/) - Design patterns and guidelines for Nostr
- [Awesome Nostr](https://github.com/aljazceru/awesome-nostr) - Collection of Nostr projects
- [Nostr NIPs](https://github.com/nostr-protocol/nips) - Protocol specifications

## License

This research is shared openly for the benefit of the Nostr community.

## Author

**Shawn Yeager** ([@shawnyeager](https://github.com/shawnyeager))

---

*Last updated: November 2025*
