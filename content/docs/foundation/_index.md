---
linkTitle: "Foundation"
title: Foundation
weight: 2
---

**The meta-pattern: How to think about UX decisions.**

## Why Foundation Matters

Before diving into specific patterns, you need a framework for making UX decisions. Without this, you'll add features that don't move metrics, fix symptoms instead of root causes, and overwhelm users with complexity.

The Foundation provides:

1. **[The Validation Framework](validation-framework/)** - A 3-question filter for every feature decision
2. **[Core Principles](core-principles/)** - The mindset shift required for great Nostr UX
3. **[Quick Wins](quick-wins/)** - High-impact improvements you can ship this week

---

## The Core Problem

Nostr apps suffer from **feature bloat without validation**. Developers add features because:

- "Competitor X has it"
- "Protocol purism demands it"
- "Power users will configure it"
- "We'll fix UX after we add more features"

**None of these are user-validated reasons.**

The result: 15-20 minute onboarding flows, relay configuration exposed to beginners, posts that disappear, and 0% retention.

---

## The Solution: Validation-First Development

Every feature decision should pass through the **Validation Framework**:

1. Does this help users accomplish their core goal?
2. Have we validated this solves a real problem?
3. Can we measure if it's working?

If you can't answer "yes" to all three, reconsider whether this feature should be built now.

---

## Start Here

{{< cards >}}
  {{< card link="validation-framework/" title="The Validation Framework" subtitle="The 3-question filter for feature decisions" icon="clipboard-check" >}}
  {{< card link="core-principles/" title="Core Principles" subtitle="UX over protocol purity, ship small, validate fast" icon="light-bulb" >}}
  {{< card link="quick-wins/" title="Quick Wins" subtitle="Ship high-impact improvements this week" icon="lightning-bolt" >}}
{{< /cards >}}

---

**Core Principle:** Great UX is the gateway to the protocol's power. Ship working experiences, then add features.
