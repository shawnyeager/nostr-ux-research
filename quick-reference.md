# Quick Reference Guide

**TL;DR summaries of all 6 UX patterns for Nostr clients.**

Scan this guide in ~10 minutes to understand the critical issues. Then deep-dive the patterns most relevant to your work.

---

## Pattern 1: Onboarding & First-Run Experience

### The Problem
15-20 minute setup with overwhelming key management drives users away before they experience any value.

### Top 3 Recommendations

**1. Time-to-First-Value < 2 Minutes**
- Let users browse/read content without creating an account (like TikTok)
- Show value BEFORE asking for commitment
- Defer key generation until user wants to post/interact

**2. Progressive Key Education**
- Never show raw nsec during initial signup
- Use gradual disclosure: "Your account is secured" → explain backup later
- Offer multiple backup options (not just "write down this string")

**3. Smart Defaults for Relays**
- Pick good relays automatically based on geographic location
- Don't show relay picker during onboarding
- Defer relay management to settings (for power users only)

### Top 3 Anti-Patterns

❌ **Immediate nsec exposure** - "Here's your private key, don't lose it!" on first screen
❌ **50-relay picker during signup** - Overwhelming and irrelevant to new users
❌ **Empty feed after signup** - Cold start problem with no content

### Validation Checklist

- [ ] Time-to-first-value measured (target: <2 minutes)
- [ ] Signup completion rate tracked (baseline, then improve)
- [ ] D1, D7, D30 retention measured
- [ ] User research: Where do people drop off in onboarding?
- [ ] A/B test: Browse-first vs account-first conversion rates

### Learn More
→ **[Full Pattern 1: Onboarding](patterns/01-onboarding.md)** (~1200 lines, 20+ citations)

---

## Pattern 2: Content Discovery & Feed Quality

### The Problem
Empty feeds and poor content discovery drive users away - "Traditional apps win by having much better content selection."

### Top 3 Recommendations

**1. Solve the Cold Start Problem**
- Provide starter packs or default follows (topic-based or curated accounts)
- Auto-follow trusted accounts for new users (with clear "unfollow all" option)
- Show "Explore" or "Trending" content even with no follows

**2. Implement Effective Search**
- Full-text search across posts, not just hashtags
- Search is now table stakes (Gen Z uses social media as search engine)
- Filter/sort options (recency, relevance, author)

**3. Use Smart Discovery Mechanisms**
- Web-of-Trust (WoT) filtering for quality without centralization
- Zaps as quality signals (not just likes/reposts)
- Topic/hashtag-based discovery feeds
- "Trending now" computed locally or via relay aggregation

### Top 3 Anti-Patterns

❌ **Empty feed with "Follow people to see content"** - No help on WHO to follow
❌ **Only chronological feed** - Research shows this decreases engagement vs algorithmic
❌ **Over-reliance on global feed** - Spam problem makes this unusable

### Validation Checklist

- [ ] Session length measured
- [ ] Posts read per session tracked
- [ ] Discovery feature usage measured (explore, search, hashtags)
- [ ] Content diversity metrics (how many unique authors per session?)
- [ ] User feedback: "Is your feed interesting?" (weekly survey)

### Learn More
→ **[Full Pattern 2: Content Discovery](patterns/02-content-discovery.md)** (~1900 lines, 67+ citations)

---

## Pattern 3: Core Interaction Loops

### The Problem
Posts disappear, notifications missing, basic actions unreliable - users lose trust and abandon the platform.

### Top 3 Recommendations

**1. Optimistic UI for Everything**
- Show posts immediately when user clicks "Post" (don't wait for relay confirmation)
- Like/reaction buttons respond instantly (<100ms visual feedback)
- Only rollback if relay publish fails

**2. Clear System Status Visibility**
- Show explicit publish status: "Publishing..." → "Published to 8/10 relays"
- Surface errors with actionable recovery: "Post failed to publish. [Retry]"
- Display sync status for follows/profile updates

**3. Implement Robust Error Recovery**
- Auto-retry transient relay failures (exponential backoff)
- Queue actions when offline, sync when reconnected
- Never lose user's draft post (auto-save locally)

### Top 3 Anti-Patterns

❌ **Silent failures** - Post disappears with no feedback
❌ **Blocking UI while waiting** - Spinner for 5+ seconds with no interaction
❌ **No publish verification** - Hope relay got it, no confirmation

### Validation Checklist

- [ ] Post success rate measured (target: >95% to at least one relay)
- [ ] Time-to-publish tracked (user perception)
- [ ] Error rates and recovery success measured
- [ ] User feedback: "Does posting feel reliable?" (qualitative)
- [ ] Notification delivery rate tracked

### Learn More
→ **[Full Pattern 3: Core Interactions](patterns/03-core-interactions.md)** (~1500 lines, 30+ citations)

---

## Pattern 4: Performance & Perceived Speed

### The Problem
Apps hang/buffer/crash - users perceive Nostr clients as broken compared to mainstream apps.

### Top 3 Recommendations

**1. Optimize Perceived Performance**
- Skeleton screens for 2-10 second loads (perceived 30% faster than spinners)
- Optimistic UI for all user actions
- Progressive loading: Show partial data while fetching

**2. Set Performance Budgets**
- Initial bundle: <250KB gzipped for fast 3G
- Time-to-interactive: <3 seconds (5+ seconds = 90% bounce rate)
- React within 100ms to all user inputs (even if backend is slow)

**3. Implement Smart Caching**
- Cache profiles, media, frequently-accessed events locally
- Stale-while-revalidate pattern for dynamic content
- Service Workers + IndexedDB for offline-first

### Top 3 Anti-Patterns

❌ **Blocking on slow/dead relays** - Timeout and move on
❌ **No loading indicators** - Blank screen with no feedback
❌ **Fetching everything upfront** - Lazy load images, profiles, threads

### Validation Checklist

- [ ] Time-to-interactive measured (target: <3 seconds)
- [ ] Relay response times tracked (timeout slow relays)
- [ ] Error/timeout rates monitored
- [ ] Memory usage profiled (prevent leaks from unclosed subscriptions)
- [ ] User feedback: "Does the app feel fast?"

### Learn More
→ **[Full Pattern 4: Performance](patterns/04-performance.md)** (~1400 lines, 35+ citations)

---

## Pattern 5: Progressive Complexity

### The Problem
Exposing relay management, key signers (NIP-46), and protocol details to all users is overwhelming.

### Top 3 Recommendations

**1. Apply the 80/20 Rule**
- 80% of users need only 20% of features
- Ship with defaults that work great for most people
- Hide advanced features behind "Advanced Settings"

**2. Smart Defaults for Relay Management**
- Auto-select relays based on geography and reliability
- Most users should NEVER need to configure relays
- Surface relay health only when there's a problem

**3. Progressive Feature Education**
- Introduce power features contextually when users need them
- "You have 50+ follows. Want to organize them into lists?" (not day 1)
- Signer apps (NIP-46) are for advanced users, not onboarding

### Top 3 Anti-Patterns

❌ **Relay picker in onboarding** - Irrelevant to new users
❌ **Settings page with 50+ options** - Overwhelming, no clear priority
❌ **Forcing signer setup** - Too complex for 95% of users

### Validation Checklist

- [ ] Advanced feature adoption rate tracked (<20% = probably too exposed)
- [ ] Setting configuration rates measured (which settings do users actually change?)
- [ ] Support request analysis (are users confused by complexity?)
- [ ] User research: What do people actually configure?
- [ ] A/B test: Simplified settings vs full exposure

### Learn More
→ **[Full Pattern 5: Progressive Complexity](patterns/05-progressive-complexity.md)** (~900 lines, 12+ citations)

---

## Pattern 6: Cross-Client Consistency & Data Integrity

### The Problem
"Lost all followers when switching from Primal → Damus → Snort" - users don't trust their data is safe.

### Top 3 Recommendations

**1. Multi-Relay Write Strategy**
- Write to 3-5 relays minimum for critical data (profile, follows, posts)
- Verify events propagated successfully
- Show explicit sync status: "Synced to 5/5 relays" vs "Syncing..."

**2. Implement Conflict Resolution**
- When loading follows/profile, compare timestamps across relays
- Use most recent event (highest created_at timestamp)
- Surface conflicts to users: "Your follows differ between clients. Which is correct?"

**3. Explicit Data Health Checks**
- "Verify My Data" button - check follows, profile across relays
- Background sync to keep data consistent
- Export/import tools for data portability

### Top 3 Anti-Patterns

❌ **Write to one relay, hope for the best** - Recipe for data loss
❌ **No verification of event propagation** - Silent failures
❌ **Overwriting newer data with older cached data** - Race condition disasters

### Validation Checklist

- [ ] Data loss incidents tracked (user reports, automated detection)
- [ ] Event propagation success rate measured (target: >95% to configured relays)
- [ ] Cross-client compatibility tested (follow list, profile updates)
- [ ] User feedback: "Do you trust your data is safe?"
- [ ] Sync conflict frequency measured

### Learn More
→ **[Full Pattern 6: Cross-Client Consistency](patterns/06-cross-client-consistency.md)** (~1100 lines, 19+ citations)

---

## The Validation Framework (Apply to All Patterns)

Before building any feature, ask:

### 1. Does this help users accomplish their core goal?
Users come to social apps to **see interesting content** and **connect with people**.

If your feature doesn't directly support content discovery, posting, or social connection, it's probably not core functionality.

### 2. Have we validated this solves a real problem?
Evidence includes:
- **Data:** Retention metrics, session length, completion rates
- **User feedback:** Direct complaints, support tickets, observed behavior
- **Research:** Academic findings or mainstream app case studies

"Users might want X" is NOT validation.

### 3. Can we measure if it's working?
Every feature should have:
- **Leading indicators:** Usage rates, adoption, engagement
- **Lagging indicators:** D1/D7/D30 retention, DAU growth, session length
- **Qualitative signals:** User feedback, support ticket volume

If you can't measure it, you can't improve it.

---

## Priority Framework: Where to Start

### If you have <1 hour:
→ Implement **one** quick win from any pattern's Top 3 Recommendations

### If you have 1 day:
1. Measure D1/D7/D30 retention (if not tracking already)
2. Identify biggest drop-off point
3. Implement Top 3 Recommendations from that pattern
4. Measure if it improved retention

### If you have 1 week:
1. Audit app against all 6 patterns using validation checklists
2. Prioritize by impact (retention data) × effort (engineering estimate)
3. Fix highest-impact issues first
4. Ship incrementally, measure each change

### If you're building a new client:
1. Read [Pattern 1: Onboarding](patterns/01-onboarding.md) + [Pattern 2: Content Discovery](patterns/02-content-discovery.md) first
2. Implement browse-first onboarding with smart content defaults
3. Get [Pattern 3: Core Interactions](patterns/03-core-interactions.md) working reliably
4. THEN add features (use Validation Framework to prioritize)

---

## Common Traps to Avoid

❌ **"We need feature X because competitor has it"**
→ Validate it solves a real problem for YOUR users first

❌ **"Protocol purity over pragmatic UX"**
→ Users don't care about decentralization if posting doesn't work

❌ **"Power users will configure it themselves"**
→ 80% of users need defaults that "just work"

❌ **"We'll fix UX after we add more features"**
→ Feature bloat makes UX worse, not better. Fix core UX first.

---

## Success Metrics to Track

**Retention (most important):**
- D1 retention (came back next day?)
- D7 retention (came back after a week?)
- D30 retention (still using after a month?)

**Engagement:**
- DAU / MAU ratio
- Session length
- Posts per session
- Time-to-first-post for new users

**Onboarding:**
- Signup completion rate
- Time-to-first-value
- D1 activation rate (posted, followed, engaged)

**Reliability:**
- Post success rate (to at least one relay)
- Error rate for core actions
- Notification delivery rate

**Discovery:**
- Discovery feature usage (search, explore, hashtags)
- Content diversity (unique authors per session)
- Follow growth rate

---

## Next Steps

**Chose a pattern to deep-dive?**
- [Pattern 1: Onboarding](patterns/01-onboarding.md)
- [Pattern 2: Content Discovery](patterns/02-content-discovery.md)
- [Pattern 3: Core Interactions](patterns/03-core-interactions.md)
- [Pattern 4: Performance](patterns/04-performance.md)
- [Pattern 5: Progressive Complexity](patterns/05-progressive-complexity.md)
- [Pattern 6: Cross-Client Consistency](patterns/06-cross-client-consistency.md)

**Want the full context?**
→ Read **[Introduction](introduction.md)** - Why this research exists, the Validation Framework, where to start

**Need research methodology?**
→ See **[Appendices: Methodology](appendices/methodology.md)** - Research approach, sources, limitations

**Want to see all citations?**
→ Browse **[Appendices: References](appendices/references.md)** - 100+ verified sources

---

**Remember:** Good UX beats protocol purity. Ship working experiences, then add features.

*Last updated: November 2025*
