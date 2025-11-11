---
title: Core Principles
weight: 2
---

**The mindset shift required for great Nostr UX.**

## Principle 1: UX Over Protocol Purity

**The Problem:** "Protocol purity over pragmatic UX"

Nostr developers often prioritize protocol elegance over user experience:
- Exposing relay selection to new users
- Requiring users to understand NIPs
- Showing technical error messages ("relay wss://... closed connection")
- Building features because "the protocol supports it"

**Result:** Overwhelming complexity, user abandonment, 0% retention.

**The Principle:**

> **Good UX beats protocol purity. Ship working experiences, then add features.**

**What This Means:**

- Hide protocol complexity from users by default
- Use plain language, not technical jargon
- Auto-select good defaults instead of forcing configuration
- Expose advanced protocol features only to users who need them

**Examples:**

❌ **Protocol-First Approach:**
- Show relay configuration during onboarding
- Require users to understand "Kind 0 metadata events"
- Display raw NIP numbers in UI ("Enable NIP-46 signers")

✅ **UX-First Approach:**
- Auto-select reliable relays, hide configuration in settings
- Just show "Edit Profile" (users don't need to know about Kind 0)
- Say "Use separate app for keys" (users don't need to know about NIP-46)

---

## Principle 2: Ship Small, Validate Fast

**The Problem:** "We'll fix UX after we add more features"

Developers build feature after feature without validating if they're solving real problems. Result: Feature bloat, complex UIs, bugs in core interactions.

**The Principle:**

> **Validate core interactions work before adding new features.**

**What This Means:**

- Start with minimal feature set that delivers value
- Measure if core interactions are reliable (posting, replying, loading feeds)
- Validate features solve real problems before building them
- Add features one at a time, measuring impact

**Examples:**

❌ **Feature-First Approach:**
- Build 20 features in alpha release
- Add zaps, communities, long-form, DMs, marketplace all at once
- Ship without measuring which features actually get used

✅ **Validation-First Approach:**
- Launch with: post, reply, follow, feed
- Measure: Do posts succeed? Do replies appear? Do feeds load?
- Fix reliability issues before adding zaps
- Add one new feature, measure adoption, validate it works, then add next

**The 80/20 Rule:**

- 20% of features deliver 80% of value (posting, replying, following, feeds)
- Focus on making that 20% bulletproof before adding the other 80%

---

## Principle 3: Optimize for New Users, Not Power Users

**The Problem:** "Power users will configure it themselves"

Nostr apps often optimize for power users who understand relays, NIPs, and signers. Result: New users are overwhelmed and abandon before reaching value.

**The Principle:**

> **If new users don't stick around, you'll never get power users.**

**What This Means:**

- Onboarding must work for people who've never heard of Nostr
- Default configuration should be excellent (not just "configurable")
- Advanced features should be hidden until needed (progressive complexity)
- Measure new user retention, not power user happiness

**Examples:**

❌ **Power-User-First Approach:**
- Expose relay configuration during onboarding
- Require understanding of public/private keys
- Show all features in settings (100+ options)

✅ **New-User-First Approach:**
- Auto-select relays, let power users change later
- Use metaphors ("Username" instead of "Public Key")
- Show 5 essential settings, hide advanced features in "Advanced" section

**Progressive Complexity:**

- Start simple (5 settings)
- Add complexity as users gain experience (show "Advanced" after 7 days)
- Let power users opt-in to advanced features (don't force on everyone)

---

## Principle 4: Perceived Performance > Actual Performance

**The Problem:** Waiting for relay responses before showing UI updates

Developers wait for relay confirmations before updating the UI. Result: Apps feel slow and unresponsive, even when relays are fast.

**The Principle:**

> **Users care about how fast your app *feels*, not how fast your relays respond.**

**What This Means:**

- Use optimistic UI (show updates immediately, sync in background)
- Show skeleton screens while loading (don't show blank white screens)
- Cache aggressively (show stale data while fetching fresh data)
- Lazy load non-critical content (load images after text)

**Examples:**

❌ **Actual-Performance Approach:**
- Wait for relay confirmation before showing like
- Show blank screen while feed loads
- Load all images before rendering feed

✅ **Perceived-Performance Approach:**
- Show like immediately, sync in background
- Show skeleton screens + cached posts while fetching
- Render text immediately, lazy load images

**The 100ms Rule:**

- If an action takes >100ms, show loading indicator
- If it takes >1s, show progress or skeleton
- If it takes >3s, explain what's happening

---

## Principle 5: Reliability Over Features

**The Problem:** "It works on my machine"

Developers ship features without validating they work reliably across different relays, network conditions, and devices. Result: Posts disappear, replies don't show up, follows get lost.

**The Principle:**

> **Users need core interactions to work 99% of the time, not 100 cool features that work 80% of the time.**

**What This Means:**

- Measure action success rates (did this post succeed?)
- Write to multiple relays for redundancy
- Verify writes succeeded before confirming to user
- Test on slow networks and unreliable relays
- Monitor error rates in production

**Examples:**

❌ **Feature-First Approach:**
- Ship posting without retry logic
- Write to one relay, assume it worked
- No error handling for network failures

✅ **Reliability-First Approach:**
- Write to 3+ relays with retry logic
- Verify at least 2 writes succeeded
- Show clear error messages on failure
- Let users retry failed actions

**The Reliability Hierarchy:**

1. **Posting & replying** must work 99%+ of the time (make this bulletproof)
2. **Following & feeds** must work 95%+ of the time (very important)
3. **Notifications** should work 90%+ of the time (important)
4. **Advanced features** can work 80%+ of the time (less critical)

---

## Principle 6: Default to Simplicity

**The Problem:** "Users might want to configure this"

Developers add configuration options instead of making good default decisions. Result: Overwhelming settings screens, decision fatigue, abandonment.

**The Principle:**

> **Make excellent defaults. Add configuration only when validated that users need it.**

**What This Means:**

- Choose the best option by default (don't force users to choose)
- Reduce settings to the minimum (5 core settings, hide the rest)
- Only add configuration when users ask for it (not preemptively)
- Test defaults with real users (validate they work)

**Examples:**

❌ **Configuration-First Approach:**
- 100+ settings in preferences
- Require relay selection during onboarding
- Ask users to configure every aspect of the app

✅ **Simplicity-First Approach:**
- 5 essential settings visible (theme, notifications, privacy, account, about)
- Auto-select relays (let power users configure later)
- Hide advanced settings until users need them

**The Configuration Test:**

- For each setting, ask: "What % of users will change this?"
- If <10%: Remove it or use the best default
- If <30%: Hide in "Advanced" section
- If >30%: Keep visible

---

## Principle 7: Evidence-Based Design

**The Problem:** "I think users would like this"

Decisions based on hunches instead of evidence. Result: Features that don't solve real problems, wasted development time, poor retention.

**The Principle:**

> **Validate with evidence, not hunches. Use research, data, and user feedback.**

**What This Means:**

- Study what works in mainstream apps (competitive analysis)
- Read academic research on social UX (evidence-based design)
- Talk to actual users (user interviews, feedback)
- Measure everything (analytics, success rates, retention)
- A/B test when uncertain (data over opinions)

**Sources of Evidence:**

1. **Quantitative data** - Retention, DAU, success rates, usage patterns
2. **Qualitative feedback** - User complaints, support tickets, interviews
3. **Academic research** - HCI papers, published studies
4. **Competitive analysis** - What works in TikTok, Instagram, Bluesky
5. **A/B tests** - Test two approaches, measure which works better

**Examples:**

❌ **Hunch-Based Design:**
- "I think users want relay configuration"
- "It seems like a good feature"
- "The protocol supports it so we should add it"

✅ **Evidence-Based Design:**
- "Retention data shows 80% abandon during 15-min onboarding" → Simplify onboarding
- "Research shows 'try before you buy' reduces friction" → Add guest browse mode
- "User complaints mention 'posts disappearing'" → Fix write verification

---

## Applying These Principles

**When making any decision:**

1. **Does this make the core experience simpler?** (Simplicity)
2. **Have we validated users need this?** (Evidence-based)
3. **Does this help new users or just power users?** (New user focus)
4. **Are we exposing protocol complexity?** (UX over purity)
5. **Can we measure if it's working?** (Validation)
6. **Is the core experience reliable?** (Reliability over features)

**If you can't confidently answer these questions, reconsider the feature.**

---

## Summary

**The 7 Core Principles:**

1. **UX Over Protocol Purity** - Ship working experiences, then add features
2. **Ship Small, Validate Fast** - Validate core interactions before adding features
3. **Optimize for New Users** - If new users don't stick, you'll never get power users
4. **Perceived Performance > Actual Performance** - Feel fast even when slow
5. **Reliability Over Features** - Core interactions must work 99% of the time
6. **Default to Simplicity** - Make excellent defaults, add configuration only when needed
7. **Evidence-Based Design** - Validate with data, not hunches

**Remember:** Great UX is the gateway to the protocol's power. Ship working experiences, then add features.

---

{{< cards >}}
  {{< card link="../validation-framework/" title="Validation Framework" subtitle="The 3-question filter" icon="clipboard-check" >}}
  {{< card link="../quick-wins/" title="Quick Wins" subtitle="Apply principles to ship fast" icon="lightning-bolt" >}}
  {{< card link="../../patterns/" title="Patterns" subtitle="See principles in action" icon="collection" >}}
{{< /cards >}}
