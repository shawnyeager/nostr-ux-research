---
title: "Get Started"
description: "Where to begin with improving your Nostr app's UX"
---

## Executive Overview

**The Problem:** Nostr is struggling with user retention. 30-day retention trends toward 0%, DAU is stuck at 10-12k trusted pubkeys, and users need 5-6 different clients to work around bugs. The root cause isn't the protocol—it's UX.

**The Solution:** Six research-backed patterns that address the highest-impact problems:

1. **Onboarding** - Get users to value in under 2 minutes
2. **Content Discovery** - Solve the empty feed problem
3. **Core Interactions** - Make basic actions reliable
4. **Performance** - Feel fast even when slow
5. **Progressive Complexity** - Hide advanced features from beginners
6. **Cross-Client Consistency** - Don't lose data when switching apps

**Who This Is For:**
- Nostr developers building consumer apps
- Product designers working on Nostr clients
- Mainstream developers evaluating Nostr

**Core Principle:** Great UX is the gateway to the protocol's power. Ship working experiences, then add features.

---

## Where to Start

### If you have 5 minutes
Read the [Quick Reference](/quick-reference/) for TL;DR summaries of all 6 patterns.

### If you have 30 minutes
Pick the pattern that matches your biggest pain point:
- **Users abandon during signup?** → [Pattern 1: Onboarding](/patterns/01-onboarding/)
- **Empty feeds after signup?** → [Pattern 2: Content Discovery](/patterns/02-content-discovery/)
- **Posts disappearing?** → [Pattern 3: Core Interactions](/patterns/03-core-interactions/)
- **App feels slow/crashy?** → [Pattern 4: Performance](/patterns/04-performance/)
- **Users overwhelmed by settings?** → [Pattern 5: Progressive Complexity](/patterns/05-progressive-complexity/)
- **Data loss when switching clients?** → [Pattern 6: Cross-Client Consistency](/patterns/06-cross-client-consistency/)

### If you're building from scratch
Read patterns in order (1-6). Each builds on principles from earlier patterns.

### If you want evidence
Check the [Research Methodology](/resources/methodology/) and [References](/resources/references/) to see the 100+ sources backing these patterns.

---

## The Validation Framework

Before building any feature, ask these three questions:

1. **Does this help users accomplish their core goal?** (seeing content, connecting with people)
2. **Have we validated this solves a real problem?** (data, user feedback, research - not hunches)
3. **Can we measure if it's working?** (leading indicators, lagging indicators, qualitative signals)

If you can't answer "yes" to all three, reconsider whether this feature should be built now.

**Learn more:** Full framework with examples in the [Introduction](/introduction/).

---

## Quick Wins

Here are high-impact, low-effort improvements you can ship this week:

**Onboarding:**
- Add guest/browse mode (see content before account creation)
- Reduce required fields to just username
- Auto-select relays, don't make users choose

**Content Discovery:**
- Show trending/popular content on empty feeds
- Add basic search functionality
- Create starter packs of accounts to follow

**Core Interactions:**
- Implement optimistic UI for likes/reposts
- Show clear error messages (not relay URLs)
- Add retry logic for failed actions

**Performance:**
- Add skeleton screens while loading
- Cache profile data locally
- Lazy load images

**Progressive Complexity:**
- Move relay settings to Advanced
- Hide signer setup from onboarding
- Use plain language, not protocol jargon

**Cross-Client Consistency:**
- Write to 3+ relays for critical data
- Verify successful writes before confirming
- Add sync status indicators

---

## Next Steps

1. **Browse the patterns** that match your current priorities
2. **Join the discussion** on Nostr (search for #NostrUX)
3. **Share feedback** by opening issues on [GitHub](https://github.com/shawnyeager/nostr-ux-research)
4. **Measure your improvements** using the validation checklists in each pattern

---

*Remember: You don't have to implement everything at once. Pick one pattern, validate it works, then move to the next.*
