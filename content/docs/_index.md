---
linkTitle: "Documentation"
title: Introduction
weight: 1
---

**Evidence-based design patterns for building Nostr clients that people actually use.**

## Why This Exists

Nostr has a working, censorship-resistant protocol. The critical bottleneck is user experience. Current metrics show **30-day retention trending to 0%** for recent cohorts, and **daily active users stuck at 10,000-12,000** despite viral adoption spikes.

This is a retention crisis—but it's solvable. Traditional social apps achieve better retention not through centralization, but through better content discovery, reliable core interactions, and streamlined onboarding. All of these are implementable on Nostr.

### What You'll Find

**Six evidence-based design patterns** addressing the highest-impact UX problems:

1. **Onboarding & First-Run Experience** - Get users to value in under 2 minutes
2. **Content Discovery & Feed Quality** - Solve the empty feed problem
3. **Core Interaction Loops** - Make basic actions reliable
4. **Performance & Perceived Speed** - Feel fast even when slow
5. **Progressive Complexity** - Hide advanced features until needed
6. **Cross-Client Consistency** - Don't lose data when switching apps

Each pattern includes: research-backed problem statements, universal UX principles (70%) + Nostr-specific considerations (30%), concrete implementation examples, anti-patterns to avoid, and validation checklists with measurable metrics.

### How This Was Built

This study synthesizes **100+ verified sources** from academic HCI research, industry design systems (Apple HIG, Material Design), Nostr-specific data (retention metrics, user complaints, GitHub issues), and mainstream app case studies (TikTok, Instagram, Bluesky, Discord). All claims are backed by verifiable sources with URLs—strict citation policy enforced throughout.

---

{{< cards >}}
  {{< card link="/docs/get-started/" title="Get Started" subtitle="Executive overview, quick wins, and where to begin" icon="academic-cap" >}}
  {{< card link="/docs/patterns/" title="The 6 Critical Patterns" subtitle="Deep-dive on onboarding, discovery, interactions, performance, complexity, and consistency" icon="collection" >}}
  {{< card link="/docs/resources/" title="Resources" subtitle="Methodology, references, and research sources" icon="book-open" >}}
{{< /cards >}}

---

**Core Principle:** Great UX is the gateway to the protocol's power. Ship working experiences, then add features.
