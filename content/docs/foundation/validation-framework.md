---
title: The Validation Framework
weight: 1
---

**A 3-question filter for every feature decision.**

## The Problem

Most Nostr apps suffer from **features without validation**. Features get built because:

- "Protocol X protocol supports it" (protocol-driven)
- "Competitor Y has it" (competition-driven)
- "Power users asked for it" (power-user-driven)
- "It's technically interesting" (engineer-driven)

**None of these guarantee the feature solves a real user problem.**

The result: Feature bloat, complex UIs, poor retention, and frustrated users who need 5-6 different clients to work around missing core functionality.

---

## The Solution: Three Questions

Before building any feature, ask these three questions:

### 1. Does this help users accomplish their core goal?

**Core goals for social apps:**
- See interesting content
- Connect with people
- Express themselves
- Feel heard/validated

**Not core goals:**
- Configure relay lists
- Understand NIPs
- Manage multiple signers
- Optimize bandwidth usage

**Example validation:**
- ❌ "Add relay performance metrics dashboard" → Not a core goal
- ✅ "Show skeleton screens while feed loads" → Helps users see content faster
- ❌ "Add NIP-46 signer configuration to onboarding" → Not a core goal for new users
- ✅ "Auto-follow 20 active accounts on signup" → Helps users see content immediately

---

### 2. Have we validated this solves a real problem?

**Valid validation sources:**
- Quantitative data (retention metrics, analytics, usage patterns)
- Qualitative user feedback (complaints, support tickets, user interviews)
- Academic research (HCI studies, published findings)
- A/B test results
- Competitive analysis (what works elsewhere)

**Invalid validation sources:**
- "I think users would like this"
- "It seems like a good idea"
- "The protocol supports it so we should too"
- "One power user on Nostr asked for it"

**Example validation:**
- ✅ "Users abandon during 15-min onboarding" → Validated by metrics
- ✅ "Empty feeds cause bounces" → Validated by research + user complaints
- ❌ "Users need advanced relay configuration" → Not validated (power user assumption)
- ✅ "Posts disappearing breaks trust" → Validated by user complaints

---

### 3. Can we measure if it's working?

**Good metrics have three components:**

1. **Leading indicators** - Early signals that predict success
2. **Lagging indicators** - Outcome metrics that prove impact
3. **Qualitative signals** - User feedback and sentiment

**Example measurement plans:**

**Feature: Guest browse mode**
- Leading: % of visitors who browse before signup
- Lagging: % who complete signup after browsing, 7-day retention
- Qualitative: User feedback, support ticket volume

**Feature: Optimistic UI for likes**
- Leading: Perceived latency (user surveys), interaction rate
- Lagging: Daily active users, posts per user
- Qualitative: Complaints about "broken likes"

**Feature: Relay configuration in settings**
- Leading: % users who open relay settings
- Lagging: Post success rate improvement (if any)
- Qualitative: Confusion reports, support tickets

**Anti-pattern:** "We'll add analytics later"
- If you can't measure it before shipping, you won't measure it after
- Build measurement plan BEFORE building the feature

---

## Applying the Framework

### Scenario 1: Should we add NIP-65 relay hints to onboarding?

**Q1: Does this help users accomplish their core goal?**
- Core goal: See content and connect with people
- Answer: Not directly. Relay hints optimize data retrieval, but new users don't understand or care about relays.

**Q2: Have we validated this solves a real problem?**
- What problem: Posts not loading?
- Validation: User complaints about missing posts exist, but they don't mention "relay hints" - they say "app is broken"
- Answer: Problem is real, but relay hints in onboarding is not validated solution

**Q3: Can we measure if it's working?**
- What would we measure: Post load success rate? But new users have no relay list yet to hint from
- Answer: Measurement would be complex and indirect

**Conclusion:** ❌ Don't add to onboarding. Instead:
- Auto-select good relays for new users (addresses same problem, simpler)
- Add relay hints in background for existing users (solves problem without UI complexity)

---

### Scenario 2: Should we add guest browse mode?

**Q1: Does this help users accomplish their core goal?**
- Core goal: See content
- Answer: Yes. Lets users see value before committing to signup

**Q2: Have we validated this solves a real problem?**
- Problem: Users abandon during signup
- Validation: Research shows "try before you buy" reduces friction (Instagram, Pinterest, Reddit all use this)
- Answer: Yes, validated by research + competitive analysis

**Q3: Can we measure if it's working?**
- Leading: % visitors who browse before signup, time spent browsing
- Lagging: Signup conversion rate, 7-day retention
- Qualitative: User feedback, NPS score
- Answer: Yes, clear measurement plan

**Conclusion:** ✅ Build it. All three questions pass.

---

## Common Traps

### Trap 1: "We'll validate after we ship"

**Problem:** Features rarely get validated post-launch. Teams move on to next feature.

**Solution:** Validate BEFORE building. Use:
- User interviews
- Prototype testing
- Competitive analysis
- Research synthesis

### Trap 2: "But the protocol supports it"

**Problem:** Protocol capabilities ≠ user needs

**Solution:** Protocol is infrastructure. UX is the interface. Don't expose protocol complexity unless users explicitly need it.

### Trap 3: "Power users need this"

**Problem:** Building for power users while ignoring new users guarantees 0% retention

**Solution:** Use [Progressive Complexity](../../patterns/05-progressive-complexity). Hide advanced features until users need them.

### Trap 4: "Competitor X has this feature"

**Problem:** You don't know if it's working for them. They might be stuck with it due to legacy decisions.

**Solution:** Study competitors, but validate for YOUR users. Copy principles, not features.

---

## Integration with Patterns

The Validation Framework is a **meta-pattern** that applies to all six design patterns:

- **[Pattern 1: Onboarding](../../patterns/01-onboarding)** - Validate what "value" means for your users
- **[Pattern 2: Content Discovery](../../patterns/02-content-discovery)** - Measure feed quality and engagement
- **[Pattern 3: Core Interactions](../../patterns/03-core-interactions)** - Track action success rates and errors
- **[Pattern 4: Performance](../../patterns/04-performance)** - Measure perceived performance, not just technical metrics
- **[Pattern 5: Progressive Complexity](../../patterns/05-progressive-complexity)** - Validate which features are "core" vs "advanced"
- **[Pattern 6: Cross-Client Consistency](../../patterns/06-cross-client-consistency)** - Measure data loss and sync failures

---

## Summary

**Before building any feature, ask:**

1. **Does this help users accomplish their core goal?**
2. **Have we validated this solves a real problem?**
3. **Can we measure if it's working?**

If you can't answer "yes" to all three, **don't build it yet**.

Instead:
- Do user research
- Build a prototype
- Test with 5-10 users
- Measure the results
- Then decide

**Remember:** The best feature is one you don't have to build because you validated it's not needed.

---

{{< cards >}}
  {{< card link="../core-principles/" title="Core Principles" subtitle="UX over protocol purity" icon="light-bulb" >}}
  {{< card link="../quick-wins/" title="Quick Wins" subtitle="Validated improvements to ship now" icon="lightning-bolt" >}}
  {{< card link="../../patterns/" title="Apply to Patterns" subtitle="Use the framework with the 6 patterns" icon="collection" >}}
{{< /cards >}}
