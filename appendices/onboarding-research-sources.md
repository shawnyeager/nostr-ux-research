# Onboarding UX Research Sources

Research findings for Pattern 1: Onboarding & First-Run Experience

This document contains credible sources backing the core UX principles in Pattern 1, organized by topic.

---

## 1. Time-to-Value / Time-to-First-Value (TTFV)

### Source 1A: Industry Research on Time to First Value

**Full Citation:**
- Multiple industry sources including Sixteenventures, MarTech, and UserGuiding (2023-2024)
- Primary: "Time to First Value (TTFV) is a Customer Onboarding Goal" - Sixteenventures
- URL: https://sixteenventures.com/customer-onboarding-ttfv
- Supporting: "Time to First Value: The CX metric you can't afford to ignore" - MarTech
- URL: https://martech.org/time-to-first-value-the-cx-metric-you-cant-afford-to-ignore/

**Key Findings:**
> "Time to First Value measures how long it takes for a new user to experience their first meaningful benefit from your product. It's a critical metric because the faster users see value, the more likely they are to continue engaging."

> "40% of users abandon products after their first interaction if the experience isn't seamless."

> "It's not a first login, attending a kickoff call or completing onboarding. It is when the customer says, 'OK. This is worth it.' It's when the customer realizes the outcome that's aligned with why they purchased your product in the first place."

**Application to Nostr:**
- **Current problem:** Nostr's 15-20 minute onboarding (key generation, relay setup, profile creation) means users wait too long for first value
- **First value for social app:** Seeing interesting content, not completing setup
- **Recommendation:** Let users browse/read without account (like TikTok), defer key generation until user wants to post/interact
- **Metric to track:** Time from app open to seeing first interesting content (target: <30 seconds)

---

### Source 1B: Samuel Hulick on User Onboarding & Time to Value

**Full Citation:**
- Hulick, Samuel. "Elements of User Onboarding" - UserOnboard.com
- Interviews: Heavybit (https://www.heavybit.com/library/article/samuel-hulick-elements-of-user-onboarding), Intercom (https://www.intercom.com/blog/podcasts/podcast-samuel-hulick-onboarding/), Appcues (https://www.appcues.com/blog/onboarding-new-users-an-interview-with-samuel-hulick)
- Years: 2015-present

**Key Findings:**
> "The single biggest mistake is not focusing on the process of delivering value to users."

> "What's the shortest path to get a user to think that this product is going to make them more awesome at a specific task?"

> "Success is not whether users are fully set up or have activated features, but when users come back and actively engage with the product."

- Emphasizes finding "the quickest way to get somebody to have a meaningful win as early into the product as possible"
- Focus on giving users "a taste of why the product improves their lives"

**Application to Nostr:**
- **Anti-pattern:** Treating onboarding completion as success (profile filled out, relays configured)
- **Better metric:** User saw interesting content and came back the next day
- **Design principle:** Defer everything except delivering the core value proposition (interesting social content)
- **Nostr-specific:** Key management and relay selection are infrastructure concerns, not user value - hide them initially

---

## 2. Progressive Disclosure

### Source 2A: Nielsen Norman Group - Progressive Disclosure Principle

**Full Citation:**
- Nielsen, Jakob. (1995). "Progressive Disclosure." Nielsen Norman Group.
- URL: https://www.nngroup.com/articles/progressive-disclosure/
- Updated: Multiple revisions through 2024

**Key Findings:**
> "Progressive disclosure defers advanced or rarely used features to a secondary screen, making applications easier to learn and less error-prone."

- First introduced in 1995 specifically to minimize user errors in complex programs
- **Improves 3 of 5 usability components:** learnability, efficiency of use, and error rate
- Helps novice users avoid mistakes and saves time they would spend contemplating features they don't need
- Helps advanced users save time by avoiding scanning past features they rarely use

**Common Implementation Patterns:**
- Accordions, tabs, dropdown menus
- Tooltips and modal dialogs
- Hypertext (higher-level pages with simplified descriptions, lower-level pages with details)
- "Advanced options" buttons in dialogs (example: print dialog with advanced settings)

**Application to Nostr:**
- **Current problem:** New users see relay lists, key signers (NIP-46), outbox model settings, and protocol jargon immediately
- **Progressive disclosure approach:**
  - **Level 1 (all users):** Read feed, post, reply, like
  - **Level 2 (engaged users):** Profile customization, follow management
  - **Level 3 (power users):** Relay configuration, key management, signer apps
  - **Level 4 (developers):** Protocol details, NIPs, raw event inspection
- **UI pattern:** Hide relay/signer configuration behind "Advanced" settings, never show to users in first 7 days
- **Onboarding:** No mention of relays, keys (beyond "your account is secured"), or protocol concepts

---

### Source 2B: Academic Research on Progressive Disclosure

**Full Citation:**
- Springer, Aaron and Whittaker, Steve. (2019). "Progressive Disclosure: Designing for Effective Transparency." *ACM Transactions on Interactive Intelligent Systems*, Vol 10, No 4.
- arXiv preprint: https://arxiv.org/pdf/1811.02164
- DOI: 10.1145/3374218

**Key Findings:**
- Extends progressive disclosure principles to algorithmic transparency in intelligent systems
- Users benefit from "initially simplified feedback that assists in building working heuristics about system operation"
- Progressive disclosure helps users manage information complexity while supporting understanding
- Empirically motivated approaches show users want control over how much transparency information they see

**Application to Nostr:**
- **Relay selection as algorithmic transparency:** Most users don't need to know which relay served which post
- **Progressive approach:**
  1. Initially: Posts just appear (like Twitter)
  2. If interested: Show "via [relay]" metadata in post details
  3. If power user: Offer relay configuration and performance monitoring
- **Anti-pattern:** Showing relay connection status, message counts, and failures to all users
- **Better UX:** Abstract away unless user explicitly wants to understand the decentralized architecture

---

## 3. Friction Laddering / Gradual Commitment

### Source 3A: Robert Cialdini - Commitment & Consistency Principle

**Full Citation:**
- Cialdini, Robert B. (2006). *Influence: Science and Practice* (5th ed.). Pearson Education.
- Chapter 3: "Commitment and Consistency"

**Key Findings:**
> "Once we have made a choice or taken a stand, we will encounter personal and interpersonal pressures to behave consistently with that commitment."

- Behavioral consistency is a fundamental human tendency to match actions with past decisions
- **"Foot-in-the-door" technique:** Small commitments lead to larger ones
- **Gradual commitment more effective** than asking for large commitment upfront
- People prefer to be consistent with their prior actions to simplify decision-making

**Application to Nostr:**
- **Current anti-pattern:** Asking for large commitment immediately (generate keys = permanent identity, choose relays = can't change)
- **Gradual commitment ladder:**
  1. **No commitment:** Browse without account (like Reddit, Twitter before 2023)
  2. **Tiny commitment:** Like/bookmark posts (stored locally, no account needed)
  3. **Small commitment:** Create temporary "trial" account (auto-generated keys, stored in browser)
  4. **Medium commitment:** Save/backup keys (now user cares about keeping account)
  5. **Large commitment:** Set up dedicated signer app, configure custom relays
- **Psychological principle:** Users more willing to backup keys after they've already posted content they care about (commitment built up)

---

### Source 3B: Nielsen Norman Group - Commitment & Consistency in UX

**Full Citation:**
- Moran, Kate. "The Principle of Commitment and Behavioral Consistency." Nielsen Norman Group.
- URL: https://www.nngroup.com/articles/commitment-consistency-ux/
- Based on Cialdini's research applied to digital product design

**Key Findings:**
> "Designs which allow users to make a small, low-cost commitment will be more likely to convert customers than ones that make commitment a costly process. An all-or-nothing design will deliver nothing from most users."

**Examples:**
- **Yelp:** Asks users to write review first (small commitment), then create account to save it (leveraging aversion to data loss)
- **Fitbit:** Asks users to state fitness goals early (small commitment), then builds on that commitment
- **Effective technique:** Get users to make small commitment and follow up on it to increase engagement

**Application to Nostr:**
- **Current problem:** All-or-nothing approach (must generate keys and set up profile before seeing value)
- **Better approach:** Let users draft a post before creating account (Yelp model)
  - User types interesting post
  - App says "Create account to publish this?"
  - User now has commitment (sunk cost in drafting post) and motivation (wants to share)
  - More likely to complete account creation
- **Key management:** Don't terrify users with "SAVE THIS OR LOSE YOUR IDENTITY FOREVER" on first screen
  - First: Auto-generate keys, store in app
  - Later: "Want to use this account on other devices? Back up your keys"
  - User now has reason to care (they have posts/followers)

---

### Source 3C: Luke Wroblewski - Gradual Engagement

**Full Citation:**
- Wroblewski, Luke. "Gradual Engagement" principle in mobile/web design
- Referenced across multiple UX resources including industry analyses

**Key Findings:**
- "Gradual engagement" (also called "lazy registration") as ideal onboarding approach
- Showcase product and let visitors experience value before asking for information
- **Duolingo example:** "Gradual engagement and deferred account creation, letting you experience the value before requiring a full commitment"

**Application to Nostr:**
- **Parallel to TikTok model:** Show users great content immediately
- **Defer account creation** until user wants to:
  - Post/reply (requires identity)
  - Follow specific users (requires saving preferences)
  - Use on multiple devices (requires key backup)
- **Nostr advantage:** Reading is permissionless, no account needed
- **Implementation:** PWA or web app that works without keys, generates keys on-demand when needed

---

## 4. Mainstream App Retention Benchmarks

### Source 4A: Andreessen Horowitz (a16z) Social App Benchmarks

**Full Citation:**
- Andreessen Horowitz Consumer Team. (March 2023). "Do You Have Lightning In a Bottle? How to Benchmark Your Social App."
- URL: https://a16z.com/do-you-have-lightning-in-a-bottle-how-to-benchmark-your-social-app/

**Key Findings - Social App Retention Thresholds:**

| Rating | D1 Retention | D7 Retention | D30 Retention |
|--------|-------------|--------------|---------------|
| **OK** | 50% | 35% | 20% |
| **Good** | 60% | 40% | 25% |
| **Great** | 70% | 50% | 30% |

Additional insights:
- "More users who reach an 'aha moment' in onboarding (D0) correlates with better retention across all time periods (D1, D7, D30)"
- "Retention curves typically flatten between D7-D14 and hit a plateau by D20"
- These are n-day (bounded) retention: percentage of original cohort that enters app on specific day

**Application to Nostr:**
- **Current state:** ~0% D30 retention (per nostr.band data) - far below even "OK" threshold of 20%
- **Root cause:** Onboarding fails to deliver "aha moment" - users face setup friction, empty feeds, unreliable posts
- **Target:** Achieve at least "OK" tier (50% D1, 35% D7, 20% D30) before adding new features
- **Metric focus:** Track D1 retention as leading indicator - if users don't return next day, onboarding failed
- **Aha moment definition for Nostr:** User sees interesting content they couldn't find elsewhere (censorship-resistant, direct from creators, zaps, etc.)

---

### Source 4B: AppsFlyer Mobile App Retention Benchmarks

**Full Citation:**
- AppsFlyer. (2024). "App Retention Benchmarks Report: 2024 Edition."
- URL: https://www.appsflyer.com/resources/reports/app-retention-benchmarks/

**Key Findings - Social Media App Retention (2024):**
- **D1 retention:** 26.3%
- **D7 retention:** 9.3%
- **D30 retention:** 3.11%

Additional insights:
- Social media category showed +23% year-over-year growth in retention (Android)
- iOS retention rates 46% higher than Android across all app categories
- General industry baseline: most apps lose 80% of users in first few days

**Application to Nostr:**
- **Context:** Even AppsFlyer's lower benchmarks (3.11% D30) are still above Nostr's ~0%
- **Interpretation:** While social media has lower retention than a16z's VC-backed app benchmarks, even these "average" apps retain more users than Nostr
- **This suggests:** Nostr's retention problem is not just about missing network effects, but fundamental onboarding/UX failures
- **Opportunity:** Even reaching AppsFlyer's average benchmarks would represent massive improvement
- **Platform consideration:** iOS clients may have natural retention advantage (46% higher) - focus testing there first?

---

### Source 4C: Andrew Chen - Mobile User Retention Analysis

**Full Citation:**
- Chen, Andrew. (Multiple publications on andrewchen.com)
- "New data shows losing 80% of mobile users is normal, and why the best apps do better"
- URL: https://andrewchen.com/new-data-shows-why-losing-80-of-your-mobile-users-is-normal-and-that-the-best-apps-do-much-better/

**Key Findings:**
- Losing 80% of mobile users in first days is normal for average apps
- The best apps significantly outperform through better onboarding and value delivery
- Retention is not just about product quality, but about how quickly users understand and experience value

**Application to Nostr:**
- **Expectation setting:** High initial churn is normal, but Nostr's near-100% churn is extreme
- **Differentiation:** Top apps succeed by optimizing onboarding, not by having inherently better products
- **Action item:** Nostr can compete with mainstream apps *if* onboarding is fixed
- **Protocol advantage not enough:** Even with censorship-resistance and decentralization, users won't stay if they never experience those benefits due to poor onboarding

---

## 5. TikTok Onboarding Analysis

### Source 5A: Product Teardowns of TikTok Onboarding

**Full Citation:**
- Multiple sources analyzing TikTok's onboarding UX:
  - Appcues. "TikTok's addictive, activation-focused user onboarding"
    - URL: https://goodux.appcues.com/blog/tiktok-user-onboarding
  - Dulenko, Vitaly. (UX Planet). "How TikTok Design Hooks You Up"
    - URL: https://uxplanet.org/how-tiktok-design-hooks-you-up-6c889522c7ed
  - Srivastava, Rishabh. (Medium). "Decoding TikTok's peerless onboarding and curation process"
    - URL: https://medium.com/@rishdotblog/decoding-tiktoks-peerless-onboarding-and-curation-process-d520f3d17600

**Key Findings - TikTok's Onboarding Strategy:**

1. **No-signup browsing:**
   > "TikTok's core page is accessible without signing up, giving personal information and finding friends on the app."

   > "TikTok allows users to start seeing entertaining videos as soon as they open the app for the first time, with no annoying screens asking to define preferences or set up an account."

2. **Minimal onboarding friction:**
   > "Once users create an account, there's no traditional onboarding - users don't have to upload a profile picture, select interests, or follow random TikTokers."

   - Immediately shows autoplayed video after short intro
   - No profile setup required
   - Algorithm learns from behavior, not explicit preferences

3. **Time to value:**
   - Users see first interesting video within seconds of opening app
   - Contrast with Instagram: "Minimum of eight clicks before viewing the first post, including username creation, profile picture upload, birthday, and following suggested accounts"

4. **Psychological hooks:**
   > "Variable rewards similar to slot machines - users don't know what they'll get next, so they keep swiping the feed"

   - Auto-play + swipe interface = minimal friction per video
   - If current video is boring, next one is 1 second away

**Application to Nostr:**

**What Nostr Can Learn:**

1. **Browse-first model:**
   - TikTok lets you watch without account → Nostr should let you read without keys
   - Implementation: Web client or PWA that shows curated feed from public relays
   - No mention of "relays," "events," or "keys" until user wants to post

2. **Algorithm-first, not social-graph-first:**
   - TikTok doesn't make you follow accounts to see content → Nostr could show interesting posts from WoT + popular content
   - Solves cold-start problem: new users see good content immediately, not empty feed
   - Defer "follow people" to later (after user cares about personalizing)

3. **Time-to-value comparison:**
   - **TikTok:** <10 seconds to first interesting video
   - **Nostr (current):** 15-20 minutes to setup, then empty feed
   - **Nostr (target):** <30 seconds to first interesting post

4. **When to ask for commitment:**
   - **TikTok:** Ask for account when user wants to like/comment/save (optional features)
   - **Nostr:** Ask for keys when user wants to post/reply (requires identity)
   - **Both:** Defer until user has experienced value and wants to engage

**Nostr-Specific Considerations:**

- **Reading is permissionless:** Nostr's architecture actually makes browse-first model *easier* than centralized apps (no API restrictions)
- **Algorithm concerns:** Nostr community may resist algorithmic feeds, but could offer:
  - Default: Chronological feed from high-quality sources (WoT, popular users)
  - Power users: Full control over follows and feed algorithm
  - Progressive disclosure: Start simple, offer complexity later

**Anti-pattern to avoid:**
- Don't copy TikTok's addictive variable-reward mechanisms if they conflict with user wellbeing
- Do copy TikTok's *onboarding* philosophy: remove all friction between user and value

---

## Summary: How to Apply These Sources to Pattern 1

### Key Principles Backed by Research:

1. **Time to Value (TTFV):**
   - Users abandon if they don't see value in first interaction (40% abandon rate)
   - Value = interesting content, NOT completed setup
   - Target: <30 seconds to first value (like TikTok), not 15-20 minutes (current Nostr)

2. **Progressive Disclosure:**
   - Hide complexity initially, reveal as needed (Nielsen, 1995)
   - Nostr-specific: Relays, keys, signers = advanced concepts, hide from new users
   - 3-tier approach: Basic → Engaged → Power User

3. **Gradual Commitment:**
   - Small commitments build to larger ones (Cialdini)
   - Browse → Like → Post → Backup Keys → Configure Relays
   - All-or-nothing approach (current Nostr) = nothing from most users

4. **Retention Benchmarks:**
   - Minimum viable: D1: 50%, D7: 35%, D30: 20% (a16z "OK" tier)
   - Nostr current: ~0% D30 = catastrophic failure, not just "early product"
   - Focus on D1 retention as leading indicator

5. **TikTok Model:**
   - No-signup browsing works for engagement-driven apps
   - Algorithm or curated content solves cold-start problem
   - User gets "hooked" before asked for commitment

### Validation Checklist for Nostr Clients:

Using these sources, evaluate your onboarding:

- [ ] **TTFV <30 seconds:** User sees interesting content within 30 seconds of opening app
- [ ] **Browse without account:** Can user experience core value (reading posts) without generating keys?
- [ ] **No protocol jargon:** Zero mentions of "relays," "events," "NIPs," "nsec" in first-time user flow
- [ ] **Progressive disclosure:** Relay configuration hidden behind "Advanced settings" or "Developer options"
- [ ] **Gradual commitment:** Multi-step progression from browse → post → backup keys, not all-at-once
- [ ] **Retention tracked:** Measure D1, D7, D30 retention and compare to a16z benchmarks (OK/Good/Great)
- [ ] **Cold start solved:** New users see populated feed, not "follow people to see content"
- [ ] **Success metric:** Define "aha moment" and measure % of users who reach it

### Anti-Patterns to Avoid (Contradicted by Research):

- ❌ "Users need to understand the protocol" (Progressive disclosure says no, hide complexity)
- ❌ "Setup everything before showing value" (TTFV says show value first)
- ❌ "Ask users to pick relays" (TikTok shows algorithm works better than manual curation for new users)
- ❌ "Terrify users about key loss immediately" (Gradual commitment says build up to important decisions)
- ❌ "Our retention is fine for an early product" (Benchmarks say even 3% D30 is low, 0% is crisis)

---

## References for Citations in Pattern Documentation

When writing Pattern 1 (Onboarding), cite sources using this format:

**In-text citations:**
- a16z benchmark data: `[Data:3]`
- Progressive disclosure: `[Research:2]`
- Commitment & consistency: `[Research:3]`
- TikTok case study: `[Example:1]`
- Samuel Hulick: `[Example:2]`

**Example usage in Pattern 1:**
> Research shows that 40% of users abandon products after their first interaction if the experience isn't seamless [Research:1], and successful social apps maintain at least 50% D1 retention and 20% D30 retention to be considered viable [Data:3]. TikTok demonstrates the power of immediate value delivery, getting users to their first interesting video in under 10 seconds without requiring account creation [Example:1].

---

*Document created: November 7, 2025*
*For: Nostr UX Research Study, Pattern 1 (Onboarding & First-Run Experience)*
