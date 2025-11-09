# Design Patterns for Nostr UX

**Evidence-based UX patterns for building Nostr apps people actually use.**

**🌐 View the complete study at:** **[nostr-ux.com](https://nostr-ux.com/)**

---

## The Problem

Nostr has a working, censorship-resistant protocol. The critical problem is user experience.

**Current metrics:**

- **30-day retention trending to 0%** for recent cohorts
- **Daily active users stuck at 10,000-12,000** despite viral adoption spikes
- Users often need **multiple clients** to access different features

This is a retention crisis. But it's also **solvable**. Traditional social apps achieve better retention not through centralization, but through better content discovery, reliable core interactions, and streamlined onboarding---all implementable on Nostr.

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

## Quick Start

→ **[Read the complete study](https://nostr-ux.com/docs/get-started/)**

Or jump directly to a specific pattern:

- **[Pattern 1: Onboarding](https://nostr-ux.com/docs/patterns/01-onboarding)** - Get users to value in under 2 minutes
- **[Pattern 2: Content Discovery](https://nostr-ux.com/docs/patterns/02-content-discovery)** - Solve the empty feed problem
- **[Pattern 3: Core Interactions](https://nostr-ux.com/docs/patterns/03-core-interactions)** - Make basic actions reliable
- **[Pattern 4: Performance](https://nostr-ux.com/docs/patterns/04-performance)** - Feel fast even when slow
- **[Pattern 5: Progressive Complexity](https://nostr-ux.com/docs/patterns/05-progressive-complexity)** - Hide advanced features from beginners
- **[Pattern 6: Cross-Client Consistency](https://nostr-ux.com/docs/patterns/06-cross-client-consistency)** - Don't lose data when switching apps

---

## For AI Agents & Developers

**[manifest.json](./manifest.json)** - Machine-readable content map for automated tools, AI agents, and RAG systems:

- Complete file inventory with titles, descriptions, and metadata
- 3 curated reading paths (quick/comprehensive/researcher)
- Category organization and importance ratings
- Perfect for feeding to LLMs, documentation generators, or analysis tools

Use cases: LLM context ingestion, RAG indexing, automated documentation, content validation, custom navigation interfaces.

---

## Who This Is For

- **Nostr developers** building consumer social apps (mobile, web, desktop)
- **Product designers** working on Nostr clients
- **Mainstream developers** evaluating whether to build on Nostr

**Assumed knowledge:** Basics of Nostr protocols (relays, events, NIPs)

---

## Research Foundation

This study synthesizes:

- Academic HCI research on social media UX, onboarding, feed algorithms
- Industry design systems (Apple HIG, Material Design)
- Nostr-specific data (retention metrics from nostr.band, user complaints, GitHub issues)
- Mainstream app case studies (TikTok, Instagram, Bluesky, Discord)
- 100+ verified sources with URLs (strict citation policy)

**Content balance:** 70% universal principles (applicable to any social app) + 30% Nostr-specific considerations (relays, keys, decentralization)

**[View complete methodology and references →](https://nostr-ux.com/docs/resources/)**

---

## Contributing & Feedback

Found errors? Have additional research? Implemented these patterns and want to share results?

- **GitHub Issues:** [Report issues or suggest improvements](https://github.com/shawnyeager/nostr-ux-research/issues)
- **Pull Requests:** Contributions welcome (see [research methodology](https://nostr-ux.com/docs/resources/methodology/))
- **Nostr Discussion:** Share feedback on Nostr with #NostrUX

---

## Related Resources

- **[Nostr Design](https://nostrdesign.org/)** - Design patterns and guidelines for Nostr
- **[Nostr NIPs](https://github.com/nostr-protocol/nips)** - Protocol specifications
- **[Awesome Nostr](https://github.com/aljazceru/awesome-nostr)** - Collection of Nostr projects

---

## License

This work is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You are free to:

- **Share** --- copy and redistribute the material in any medium or format
- **Adapt** --- remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:

- **Attribution** --- You must give appropriate credit to Shawn Yeager, provide a link to the license, and indicate if changes were made

---

## Author

**Shawn Yeager** ([@shawnyeager](https://github.com/shawnyeager))

---

**Remember:** Good UX beats protocol purity. Ship working experiences, then add features.

