---
title: "Pattern 1: Onboarding & First-Run Experience"
weight: 1
---

## Problem Statement

Onboarding is the critical gate between curiosity and engagement. If users can't reach value quickly, they abandon - and in Nostr's case, they're abandoning in droves.

**Current State:**

{{< callout type="error" >}}
**Retention Crisis:** 30-day retention is trending toward 0% for recent cohorts [[Data:1]](#data-1)
{{< /callout >}}

- Nostr clients require 15-20 minutes of setup before users can post [[User:11]](#user-11)
- New users face overwhelming decisions: relay selection, key management, profile setup
- The complexity of keypair cryptography is exposed immediately without context
- Users encounter empty feeds after signup with no clear path forward

**The Impact:**
Users abandon before reaching their "aha moment" - that first experience of value that makes them want to return. Every minute of friction in onboarding is a decision point where users can leave. Crypto-native early adopters might tolerate this complexity, but mainstream users won't.

**Root Causes:**

1. **Protocol complexity exposed upfront:** Relay selection, key generation, and NIPs terminology shown to beginners
2. **No progressive disclosure:** Everything required immediately rather than deferred
3. **Cold start problem unsolved:** Empty feeds after signup with no content discovery
4. **Feature parity focus:** Trying to match power-user features before nailing basics
5. **No guest/browse mode:** Must commit before seeing value

**Why This Matters:**
Onboarding is not just about getting users in - it's about getting them to their first moment of value fast enough that they want to stay. Research shows 40% of users abandon products after their first interaction if the experience isn't seamless [[Research:1]](#research-1). Current Nostr onboarding takes 15-20 minutes, which massively exceeds acceptable time-to-first-value thresholds.

---

## Universal Principles

These principles apply to any social application, not just Nostr.

### 1. Time-to-Value

{{< callout type="important" >}}
**Principle:** Users should reach their first moment of value within 2 minutes of opening your app.
{{< /callout >}}

**Why it works:**

- Attention spans are short; every second of setup is friction
- Users judge apps in the first few interactions
- Value must precede commitment
- The faster users experience value, the more likely they'll tolerate setup later

**What "value" means for social apps:**

- See interesting content (even without posting)
- Understand what the app does and who uses it
- Experience the core interaction loop
- Feel social proof (this place is alive, people I care about are here)

**Research backing:** Time-to-first-value (TTFV) measures how long it takes for users to experience their first meaningful benefit. Research shows 40% of users abandon products after their first interaction if the experience isn't seamless [[Research:1]](#research-1). Samuel Hulick, leading onboarding expert, emphasizes: "The single biggest mistake is not focusing on delivering value to users" [[Example:2]](#example-2).

**Examples from mainstream apps:**

- **TikTok:** Opens directly to For You feed, no signup required. Value (entertaining videos) is immediate - contrast with Instagram's minimum 8 clicks before viewing first content [[Example:1]](#example-1)
- **Instagram:** Can browse limited content before signup, demonstrates value upfront
- **Discord:** Can join servers and read channels before creating account
- **Twitter/X:** Can browse tweets and threads without account (partially)

### 2. Progressive Disclosure

**Principle:** Only ask for information or decisions that are absolutely necessary for the first experience. Everything else can wait.

**The friction ladder:**

```
Low friction:    Browse without account
                 ↓
Medium friction: One-click signup (email/OAuth)
                 ↓
High friction:   Profile customization
                 ↓
Highest:         Advanced configuration (power user features)
```

**Why it works:**

- Reduces cognitive load for new users
- Prevents decision paralysis
- Allows users to invest effort after they've experienced value
- Users who see value are willing to provide more information

**What to defer in social apps:**

- Profile photo/bio (can add later)
- Friend invites (do this after seeing value)
- Notification preferences (sensible defaults)
- Advanced settings (power user territory)
- Any configuration that requires domain knowledge

**Research backing:** Jakob Nielsen introduced progressive disclosure in 1995 as a principle to defer advanced or rarely used features to secondary screens. It improves 3 of 5 usability components: learnability, efficiency, and error rate [[Research:2]](#research-2).

### 3. Friction Laddering

**Principle:** Start with the lowest possible commitment, then gradually increase investment as users see value.

**Commitment levels:**

1. **Zero commitment:** Browse, explore (no account)
2. **Low commitment:** Create account (minimal info)
3. **Medium commitment:** Customize profile
4. **High commitment:** Invite friends, configure settings
5. **Full investment:** Power user features, integrations

**Why it works:**

- Humans are loss-averse; asking for commitment before value feels risky
- Small commitments lead to larger ones (consistency principle)
- Sunk cost fallacy works in your favor once users invest effort
- Allows natural filtering: engaged users self-select for deeper features

**Anti-example:** Requiring 10 fields of information before users can browse

**Research backing:** Robert Cialdini's research on commitment and consistency shows that "once we make a choice or take a stand, we encounter personal and interpersonal pressures to behave consistently with that commitment." Small commitments build to larger ones (the "foot-in-the-door" technique) [[Research:3]](#research-3). Luke Wroblewski's "Gradual Engagement" principle applies this to product design: showcase value before requiring information.

### 4. Social Proof

**Principle:** Demonstrate that real people use this app and create value before asking users to invest effort.

**Forms of social proof:**

- Active user counts
- Recent posts/activity
- Notable users or communities
- Testimonials or success stories
- Popular content

**Why it works:**

- Reduces perceived risk ("Others use this, so it's probably worth my time")
- Sets expectations for what the experience will be
- Provides motivation to complete setup
- Answers the question: "Is this place alive?"

**Examples:**

- TikTok: Shows viral videos immediately (proof of entertaining content)
- Discord: Shows server member counts and recent activity
- Mastodon: Shows federated timeline to demonstrate active community

**Research backing:** Social proof is a well-established psychological principle in persuasion and conversion optimization. TikTok demonstrates this by showing viral videos immediately - proof of entertaining content exists [[Example:1]](#example-1).

### 5. First Success

**Principle:** Engineer an early success moment that feels meaningful and rewarding.

**For social apps, this means:**

- First post goes smoothly
- Immediate feedback (likes, replies, visibility)
- Onboarding checklist with satisfying completion
- Welcome message or interaction from the community
- Clear progress indicators

**Why it works:**

- Success breeds engagement
- Positive reinforcement creates habit loops
- Reduces anxiety about "doing it wrong"
- Gives users confidence to continue

**Examples:**

- Twitter: Prompts first tweet and shows it prominently in your timeline
- LinkedIn: Celebrates profile completion milestones
- Duolingo: First lesson is easy and rewarding

**Research backing:** Early success experiences create positive reinforcement and build user confidence. Samuel Hulick emphasizes focusing on "meaningful wins as early as possible" to give users "a taste of why the product improves their lives" [[Example:2]](#example-2).

### 6. Onboarding as Education

**Principle:** Users need to learn your app's mental model, but education should be contextual and just-in-time.

**Good education:**

- Contextual tooltips (show help when relevant)
- Progressive feature introduction (not all at once)
- Clear labels and microcopy
- Examples and templates
- Undo/redo to encourage experimentation

**Bad education:**

- Long tutorial walls before usage
- Feature tours that overwhelm
- Jargon without explanation
- Help docs as primary onboarding

**Why it works:**

- People learn by doing, not by reading
- Context makes information relevant and memorable
- Just-in-time education is more effective than upfront dumps
- Users retain what they immediately apply

**Research backing:** Just-in-time education is more effective than upfront information dumps because context makes information relevant and memorable. This aligns with progressive disclosure principles [[Research:2]](#research-2).

---

## Nostr-Specific Considerations

Nostr's decentralized architecture creates unique onboarding challenges that centralized apps don't face.

### Challenge 1: Key Management Without Password Recovery

**The Problem:**

- Nostr uses public/private keypairs (npub/nsec)
- No "forgot password" flow - lose your nsec, lose your identity permanently
- This is terrifying for mainstream users accustomed to password resets
- Private keys are long hexadecimal strings (or bech32-encoded)

**Current failures:**

- Showing nsec on signup with "NEVER SHARE THIS, DON'T LOSE IT" [[User:12]](#user-12)
- No context for why keys work this way
- Immediate responsibility without understanding
- Users screenshot private keys or store insecurely out of confusion
- March 2025 analysis: "A protocol based entirely on public/private key pairs cannot gain traction if people are burning their accounts by accident" [[User:17]](#user-17)

**The tension:**
Security vs. usability. Keys are the foundation of Nostr's censorship-resistance, but they're also the biggest UX barrier.

**Solutions (see Pattern Library):**

- Defer key exposure until users understand why they matter
- Use temporary/burner keys for initial exploration
- Provide multiple backup options with clear guidance
- Abstract keys behind "account" language initially
- Progressive education about key security

**Related NIPs:**

- NIP-07: Browser extension signing (abstracts key management)
- NIP-46: Nostr Connect / remote signers (separates keys from client)

### Challenge 2: Relay Selection

**The Problem:**

- Nostr has no central server; users connect to multiple relays
- Different relays have different content and policies
- Relay selection affects: content visibility, post reach, performance, censorship-resistance
- New users have no mental model for how relays work

**Current failures:**

- Showing relay picker with 50+ options during signup
- Asking users to choose without context for implications
- Technical language: "wss://relay.example.com"
- No guidance on how many relays or which ones
- Nostr Design (2024) explicitly calls relay selection "high friction" that should be minimized during onboarding [[User:18]](#user-18)

**The tension:**
Relay selection matters for the Nostr experience, but beginners can't make informed choices. Power users need control, but new users need sensible defaults.

**Solutions (see Pattern Library):**

- Smart defaults: Connect to popular, well-maintained relays automatically
- Defer relay configuration until users understand what relays do
- Use relay health indicators to guide selection later
- Explain relays contextually (when relevant to user's experience)
- Allow advanced users to customize after onboarding

**Related NIPs:**

- NIP-65: Relay List Metadata (user's preferred relays)
- NIP-42: Authentication for private relays

### Challenge 3: Identity Portability Paradox

**The Unique Advantage:**
Unlike Twitter/Facebook/Instagram, Nostr identities are portable. Your keypair works across all clients. Switch apps without losing your identity, followers, or content.

**The Onboarding Challenge:**
This portability means:

- Users don't understand why they need to "create an account" if identity is portable
- Key management is critical (no reset = permanent loss)
- Cross-client consistency expectations are higher
- First-time users don't appreciate portability until they experience lock-in elsewhere

**How to leverage this:**

- Explain identity portability as a benefit (not a burden)
- Show examples: "Your account works in Damus, Amethyst, Primal, Snort..."
- For users coming from other Nostr apps: seamless import flow
- For new users: defer portability education until after first value

### Challenge 4: Signer Apps Add Complexity

**The Problem:**

- NIP-46 signer apps (like Nostr Signer, Amber) separate key management from clients
- This is great for security, but terrible for first-time UX
- Requires installing two apps and connecting them
- Confusing flow: "Open signer app, approve connection, return to main app"

**When signers make sense:**

- Power users who want security
- Users managing multiple identities
- Advanced use cases (bots, integrations)

**When signers are harmful:**

- First-time onboarding (too much complexity)
- Casual users who just want to post
- Mobile users unfamiliar with cross-app workflows

**Solutions (see Pattern Library):**

- Don't require signers for onboarding
- Allow in-app key management initially
- Introduce signers as optional security upgrade later
- Provide clear migration path when users are ready

**Related NIPs:**

- NIP-46: Nostr Connect protocol for remote signing

### Challenge 5: Cold Start Problem

**The Problem:**

- Centralized apps use algorithms to show new users interesting content
- Nostr has no central recommendation engine
- New users with zero follows get empty feeds
- Web-of-trust requires a graph to work, but new users have no connections

**Current failures:**

- Signup → empty feed → "Follow people to see content"
- No guidance on who to follow or why
- Global feed is often spam-filled
- No personalization based on interests
- Users report "traditional apps win by having much better content selection" [[User:15]](#user-15)
- Even Jack Dorsey admitted "Nostr is weird and hard to use" [[User:16]](#user-16)
- Damus is still actively working on onboarding improvements as of Feb 2025 [[User:19]](#user-19)
- Damus considering removing entire "create account" step in Aug 2025 due to friction [[User:20]](#user-20)

**The tension:**
Nostr's decentralization is a feature, but content discovery suffers. Algorithmic feeds are powerful but potentially manipulative.

**Solutions (see Pattern Library):**

- Default follows: Pre-populate feed with high-quality accounts (opt-out, not opt-in)
- Interest-based discovery: "What are you interested in?" → relevant follows
- Trending/popular content (without centralization): Relay-based or WoT-filtered
- Show value before requiring follows

**Note:** This overlaps heavily with Pattern 2 (Content Discovery). Key for onboarding: don't leave users with empty feeds.

---

## Pattern Library: Concrete Solutions

### Pattern A: Guest/Browse Mode

**Description:** Allow users to explore content without creating an account.

**Implementation:**

- Open app → show curated feed immediately (no signup wall)
- Allow browsing profiles, reading posts, viewing threads
- Prompt account creation only when user wants to interact (post, like, follow)
- Use temporary read-only relay connections

**Benefits:**

- Zero friction to first value
- Users see what the app is about before committing
- Natural conversion point: "Want to reply? Create account"
- Reduces abandonment from complex signup

**Examples in mainstream apps:**

- TikTok: Full browse experience without account
- Reddit: Can browse all content, requires account to vote/comment
- Medium: Limited article reading without account

**Nostr considerations:**

- No keypair needed for read-only access
- Connect to public relays for content
- Handle transition to account creation smoothly

**Code implications:**

- Separate read-only mode from authenticated mode
- Defer key generation until needed
- Cache browsed content so it's available after signup

### Pattern B: Gradual Key Education

**Description:** Introduce key concepts progressively with context, not all at once.

**Bad flow:**

```
1. Welcome to Nostr!
2. Here's your private key: nsec1abc123def456...
3. NEVER SHARE THIS! If you lose it, your account is gone forever.
4. Here's your public key: npub1xyz789...
```

**Good flow:**

```
1. Welcome! Let's create your account.
2. [Generate keypair in background]
3. Choose a username and profile picture
4. [After first post success] Your Nostr identity is secured with a private key.
   This key lets you use your account across any Nostr app.
5. [Progressive education] Let's back up your key so you never lose access.
6. [Guided backup flow with options]
```

**Key principles:**

- Don't expose nsec until users understand what it is
- Explain WHY keys matter (portability, security) before showing them
- Frame as benefit, not burden: "Your account works everywhere"
- Provide multiple backup options (copy, password manager, write down)
- Verify backup completion (ask user to re-enter part of key)

**Educational touchpoints:**

- First mention: "Your account is portable"
- Second mention: "Let's back up your account"
- Third mention: "Advanced: View your private key"

**Nostr considerations:**

- Store nsec securely on device until user backs up
- Consider NIP-07 browser extensions for web clients
- Offer signer app migration path later

### Pattern C: Smart Default Relays

**Description:** Connect new users to well-maintained, popular relays automatically. Defer relay selection.

**Implementation:**

- Ship with 5-10 curated default relays
- Criteria: uptime, speed, content quality, moderation
- Don't show relay picker during onboarding
- Add "Advanced: Manage Relays" in settings later

**Benefits:**

- Users get working experience immediately
- No decision paralysis
- Can change later if needed
- Most users will never need to configure relays

**Default relay selection criteria:**

- High uptime (>95%)
- Low latency
- Large user base (content availability)
- Clear moderation policies
- Geographic diversity (global coverage)

**When to introduce relay management:**

- After user has been active for a week
- When user reports performance issues
- In advanced settings, not onboarding
- With contextual education: "Relays are like servers that store posts"

**Nostr considerations:**

- Use NIP-65 relay list metadata for portability
- Write user's posts to multiple relays for redundancy
- Read from aggregated relay set for feed

### Pattern D: Interest-Based First Follows

**Description:** Solve cold start by suggesting follows based on user interests.

**Implementation:**

```
1. "What are you interested in?" (select topics)
   [ ] Bitcoin  [ ] Art  [ ] Technology  [ ] Nostr Development  [ ] Memes
2. "Here are some popular accounts in those topics"
   - Show profiles with bio, recent post
   - Pre-select high-quality accounts (user can unfollow later)
3. "Your feed is ready!" → Show populated feed
```

**Benefits:**

- No empty feed problem
- Users see relevant content immediately
- Demonstrates value of following
- Can unfollow later if not interested

**Criteria for suggested accounts:**

- Active posters (not dormant)
- High-quality content (manual curation or WoT-based)
- Diverse perspectives within topic
- No spam or low-effort accounts

**Opt-out, not opt-in:**

- Pre-populate follows based on interests
- Allow users to unfollow during onboarding
- Better to have too much content than none

**Nostr considerations:**

- Maintain curated lists by topic (update regularly)
- Use NIP-51 (lists) for topic-based recommendations
- Consider WoT scores from trusted curators

### Pattern E: First Post Success Flow

**Description:** Guide users to post something successfully and see immediate feedback.

**Implementation:**

```
1. After signup: "Share your first post!"
2. Composition UI with helpful prompt: "Introduce yourself or share what brought you to Nostr"
3. [User posts]
4. Optimistic UI: Show post immediately in timeline
5. Success feedback: "Your post is live! It's being shared across relays"
6. [Optional] Automated welcome reply or highlight in special feed
```

**Benefits:**

- Creates positive first experience
- Demonstrates core interaction works
- Builds confidence
- Satisfying completion

**Design details:**

- Keep composition simple (no overwhelming options)
- Show character count (if relevant)
- Preview before posting
- Clear success confirmation
- Show post in context (feed, profile)

**Nostr considerations:**

- Use optimistic UI (show post immediately)
- Publish to multiple relays in background
- Handle failure gracefully (retry, show error if needed)

### Pattern F: Onboarding Checklist / Progress

**Description:** Break onboarding into clear steps with satisfying completion.

**Implementation:**

```
Getting Started (3/5 completed)
✅ Create account
✅ Choose username
✅ Post your first note
⬜ Follow interesting people
⬜ Back up your account key
```

**Benefits:**

- Clear expectations
- Sense of progress
- Satisfying completion
- Guides users through critical steps

**Principles:**

- Keep list short (5-7 items max)
- Make first items easy (quick wins)
- Don't block usage on checklist completion
- Allow skipping non-essential items
- Celebrate completion

**What to include:**

- Essential: Create account, first post, backup key
- Important: Follow people, customize profile
- Optional: Enable notifications, invite friends

**Nostr considerations:**

- Include "Back up your key" as critical item
- Don't require relay configuration
- Highlight portable identity benefit

---

## Anti-Patterns: What Not to Do

### Anti-Pattern 1: Show Private Key Immediately

{{< callout type="warning" >}}
**What it looks like:**

```
Welcome to Nostr!
Your private key: nsec1qpzqgr3qg7v6p...
⚠️ NEVER SHARE THIS! IF YOU LOSE IT, YOUR ACCOUNT IS GONE FOREVER!
```

**Why it's bad:**

- Terrifying for new users
- No context for why keys work this way
- Responsibility without understanding
- Increases anxiety and abandonment

**What to do instead:** Use Pattern B (Gradual Key Education)
{{< /callout >}}

### Anti-Pattern 2: Relay Picker During Signup

**What it looks like:**

```
Choose your relays:
[ ] wss://relay.damus.io
[ ] wss://nos.lol
[ ] wss://relay.nostr.band
[ ] wss://nostr.wine
... (50 more options)
```

**Why it's bad:**

- Decision paralysis for beginners
- No mental model for choosing
- Technical jargon (wss://)
- Delays reaching value

**What to do instead:** Use Pattern C (Smart Default Relays)

### Anti-Pattern 3: Empty Feed After Signup

**What it looks like:**

```
[Empty timeline]
"Follow people to see content!"
```

**Why it's bad:**

- No value demonstrated
- Cold start problem unsolved
- User must work before seeing benefit
- High abandonment point

**What to do instead:** Use Pattern D (Interest-Based First Follows) or Pattern A (Guest/Browse Mode)

### Anti-Pattern 4: Require Signer App

**What it looks like:**

```
1. Download Nostr Signer app
2. Generate key in signer
3. Open main app
4. Connect to signer
5. Approve connection in signer
6. Return to main app
```

**Why it's bad:**

- Too many steps before value
- Requires installing two apps
- Confusing cross-app flow
- Only power users understand this

**What to do instead:** Offer signer apps as optional security upgrade after onboarding

### Anti-Pattern 5: Feature Tour Before Usage

**What it looks like:**

```
[5-screen carousel]
"Welcome to Nostr! Swipe to learn about..."
Screen 1: What is Nostr
Screen 2: How relays work
Screen 3: Your keys explained
Screen 4: Zaps and Lightning
Screen 5: Now you're ready!
```

**Why it's bad:**

- Users don't retain information without context
- Delays reaching value
- Most users skip these entirely
- Learning by reading, not doing

**What to do instead:** Let users start immediately, provide contextual education

### Anti-Pattern 6: Require Complete Profile

**What it looks like:**

```
Create your profile:
- Username (required)
- Display name (required)
- Bio (required)
- Profile picture (required)
- Banner image (required)
- Website (required)
- NIP-05 verification (required)
```

**Why it's bad:**

- Too much friction before value
- Not all fields are necessary
- Users might not know what to put
- Abandonment before experiencing app

**What to do instead:** Username only required, everything else optional and deferrable

### Anti-Pattern 7: Technical Jargon in Onboarding

**What it looks like:**

```
"Configure your NIP-65 relay list metadata"
"Choose read/write relay split strategy"
"Enable NIP-42 authentication"
```

**Why it's bad:**

- Alienates non-technical users
- Creates confusion and anxiety
- No benefit to exposing implementation details
- Makes Nostr feel inaccessible

**What to do instead:** Use plain language, explain in user terms, hide protocol details

---

## Validation Checklist: How to Measure Success

### Quantitative Metrics

**Primary:**

- [ ] **Time-to-first-post:** Measure median time from app open to first successful post
  - Target: <2 minutes for new users

- [ ] **Signup completion rate:** % of users who start signup and finish
  - Target: >80%
  - Track drop-off points in funnel

- [ ] **D1 retention:** % of users who return day 1 after signup
  - Target: >50% (a16z "OK" benchmark) [[Data:3]](#data-3)
  - Stretch: >60% ("Good"), >70% ("Great")

- [ ] **D7 retention:** % of users who return day 7
  - Target: >35% (a16z "OK" benchmark) [[Data:3]](#data-3)

- [ ] **D30 retention:** % of users who return day 30
  - Target: >20% (a16z "OK" benchmark) [[Data:3]](#data-3)
  - Current Nostr: trending to 0% [[Data:1]](#data-1)
  - Note: Even AppsFlyer's lower benchmark (3.11%) exceeds Nostr's performance [[Data:4]](#data-4)

**Secondary:**

- [ ] **Onboarding completion rate:** % who finish onboarding checklist
- [ ] **First post success rate:** % of attempted posts that publish successfully
- [ ] **Key backup completion rate:** % who complete backup flow
- [ ] **Drop-off analysis:** Where do users abandon? (relay picker? key exposure? empty feed?)

### Qualitative Feedback

**User Research:**

- [ ] User interviews: "Describe your first experience with the app"
- [ ] Usability testing: Watch new users go through onboarding (where do they struggle?)
- [ ] Surveys: "How easy was it to get started?" (1-5 scale)
- [ ] Support tickets: Common questions/issues during onboarding

**Questions to ask:**

- "What was confusing about getting started?"
- "Did you feel overwhelmed at any point? When?"
- "How long did it take before you felt like you 'got it'?"
- "What would have made onboarding easier?"
- "Did you complete the key backup? Why or why not?"

### A/B Testing Opportunities

**High-impact tests:**

- Guest mode (browse first) vs. immediate signup
- Default follows (pre-populated) vs. empty feed with suggestions
- Key exposure timing (immediate vs. deferred)
- Relay configuration (smart defaults vs. user choice)
- Onboarding checklist vs. no checklist

**How to run tests:**

- Split new users 50/50
- Measure retention (D1/D7/D30) as primary metric
- Track secondary metrics (time-to-first-post, completion rates)
- Run for at least 2 weeks for statistical significance

### Competitive Benchmarking

**Compare against:**

- Mainstream social apps (Twitter, Instagram, TikTok)
  - What's their time-to-first-post?
  - What's their D1/D7/D30 retention?
  - How do they solve cold start?

- Other decentralized apps (Mastodon, Bluesky)
  - How do they handle account creation?
  - Do they solve content discovery?

- Other Nostr clients
  - Which client has best retention?
  - What do they do differently?

### Success Criteria

{{< callout >}}
**You'll know onboarding is working when:**

- [ ] D30 retention is >10% (vs. current 0%)
- [ ] Users post within 2 minutes of signup
- [ ] Drop-off rate at each onboarding step is <10%
- [ ] User feedback shifts from "confusing" to "easy"
- [ ] Support tickets about onboarding decrease
- [ ] New users successfully back up their keys
- [ ] First-time posters see their content propagate reliably
{{< /callout >}}

---

## Implementation Roadmap

### Phase 1: Quick Wins (1-2 weeks)

- [ ] Add smart default relays (remove relay picker from onboarding)
- [ ] Implement default follows (curated list by interest)
- [ ] Defer key exposure (show after first post)
- [ ] Add onboarding checklist

**Expected impact:** Reduce time-to-first-post by 50%, improve D1 retention

### Phase 2: Core Experience (2-4 weeks)

- [ ] Build guest/browse mode
- [ ] Create first post success flow with optimistic UI
- [ ] Implement gradual key education
- [ ] Add interest-based follow suggestions

**Expected impact:** Improve D7 retention, reduce abandonment

### Phase 3: Refinement (4-6 weeks)

- [ ] A/B test onboarding variations
- [ ] User research on remaining friction points
- [ ] Iterate based on data
- [ ] Optimize for D30 retention

**Expected impact:** Sustained retention improvement

### Phase 4: Advanced (6+ weeks)

- [ ] Optional signer app integration
- [ ] Advanced relay configuration (for power users)
- [ ] Cross-client import flow
- [ ] Onboarding personalization

**Expected impact:** Retain power users while keeping beginners onboarded

---

## Real-World Examples

### Example 1: TikTok's Onboarding

**What they do:**

- No signup required
- Opens directly to For You feed
- Algorithm shows engaging content immediately
- Signup prompts appear after several videos (when engaged)

**Time to value:** <5 seconds

**Why it works:**

- Value first, commitment later
- Demonstrates what the app does
- Social proof (millions of videos)
- Natural conversion point

**Nostr equivalent:**
Guest mode with curated feed, signup prompt after engagement

**Sources:** Multiple product analyses confirm TikTok's no-signup approach [[Example:1]](#example-1)

### Example 2: Discord's Server Onboarding

**What they do:**

- Can join servers without account (limited)
- Quick signup: username + email
- Immediately in server with populated chat
- Progressive feature education (roles, channels)

**Time to value:** <1 minute

**Why it works:**

- Minimal friction
- Immediate social context
- Learn by participating
- Features revealed as needed

**Nostr equivalent:**
Quick signup with default follows, immediate feed, deferred complexity

**Source:** Discord's server-first onboarding creates immediate social context

### Example 3: Instagram's Onboarding

**What they do:**

- Interest selection during signup
- Immediate follow suggestions based on interests
- Populated feed from day 1
- Profile completion deferred

**Time to value:** ~2-3 minutes

**Why it works:**

- Solves cold start
- Content relevant to interests
- No empty feed problem
- Progressive profile building

**Nostr equivalent:**
Interest-based follow suggestions, pre-populated feed

**Source:** Instagram's interest-based onboarding solves cold start [[Example:3]](#example-3)

---

## Citations & Sources

### Data Sources

- <a id="data-1"></a>**[[Data:1]](/docs/resources/references#data-1)** Nostr.band analytics showing 30-day retention trends (Accessed November 2025)
- <a id="data-3"></a>**[[Data:3]](/docs/resources/references#data-3)** Andreessen Horowitz (a16z) - Social App Retention Benchmarks (March 2023): OK (D1: 50%, D7: 35%, D30: 20%), Good (D1: 60%, D7: 40%, D30: 25%), Great (D1: 70%, D7: 50%, D30: 30%)
- <a id="data-4"></a>**[[Data:4]](/docs/resources/references#data-4)** AppsFlyer - Mobile App Retention Benchmarks (2024): Social media apps D1: 26.3%, D7: 9.3%, D30: 3.11%

### Research & UX Principles

- <a id="research-1"></a>**[[Research:1]](/docs/resources/references#research-1)** Time to First Value (TTFV) in Product Onboarding: 40% of users abandon products after first interaction if experience isn't seamless
- <a id="research-2"></a>**[[Research:2]](/docs/resources/references#research-2)** Nielsen, J. (1995). Progressive Disclosure - Improves learnability, efficiency, and error rate
- <a id="research-3"></a>**[[Research:3]](/docs/resources/references#research-3)** Cialdini, R. B. (2006). *Influence: Science and Practice* - Commitment and consistency principle applied to UX

### Examples & Case Studies

- <a id="example-1"></a>**[[Example:1]](/docs/resources/references#example-1)** TikTok Onboarding Analysis: No-signup browsing, immediate value (<10 seconds)
- <a id="example-2"></a>**[[Example:2]](/docs/resources/references#example-2)** Samuel Hulick - User Onboarding Philosophy: "The single biggest mistake is not focusing on delivering value to users"
- <a id="example-3"></a>**[[Example:3]](/docs/resources/references#example-3)** Instagram Onboarding Flow: Interest-based follow suggestions, pre-populated feed

### Protocol Documentation

- <a id="protocol-3"></a>**[[Protocol:3]](/docs/resources/references#protocol-3)** NIP-46: Nostr Connect
- <a id="protocol-4"></a>**[[Protocol:4]](/docs/resources/references#protocol-4)** NIP-65: Relay List Metadata
- <a id="protocol-7"></a>**[[Protocol:7]](/docs/resources/references#protocol-7)** Nostr Design community resources

### User Feedback (All 2024-2025)

- <a id="user-11"></a>**[[User:11]](/docs/resources/references#user-11)** Stacker News discussion: "After 15-20 minutes of messing around, I was able to create a NOSTR account" (2024)
- <a id="user-12"></a>**[[User:12]](/docs/resources/references#user-12)** Iris FAQ: "If you lose the private key the account is lost forever"
- <a id="user-15"></a>**[[User:15]](/docs/resources/references#user-15)** "The State of Nostr Clients" analysis: "Traditional apps win by having much better content selection" (March 2024)
- <a id="user-16"></a>**[[User:16]](/docs/resources/references#user-16)** Jack Dorsey interview: "Nostr is weird and hard to use" (May 2024)
- <a id="user-17"></a>**[[User:17]](/docs/resources/references#user-17)** "Managing Nostr Keys and Signing Devices": "A protocol based entirely on public/private key pairs cannot gain traction if people are burning their accounts by accident" (March 2025)
- <a id="user-18"></a>**[[User:18]](/docs/resources/references#user-18)** Nostr Design - Onboarding guidance: Relay selection is "high friction" that should be minimized during onboarding (2024)
- <a id="user-19"></a>**[[User:19]](/docs/resources/references#user-19)** Damus GitHub Issue #2642: Onboarding improvements tracker (Opened Nov 2024, last updated Feb 2025, ACTIVE)
- <a id="user-20"></a>**[[User:20]](/docs/resources/references#user-20)** Damus GitHub Issue #3207: Remove 'Create Account' step being considered due to friction (August 2025)
- <a id="user-21"></a>**[[User:21]](/docs/resources/references#user-21)** Nstart Onboarding Tool: Standalone tool created because client-level onboarding is too complex (February 2025)

---

## Related Patterns

{{< cards >}}
  {{< card link="02-content-discovery" title="Pattern 2: Content Discovery" subtitle="Solving the empty feed problem" icon="search" >}}
  {{< card link="05-progressive-complexity" title="Pattern 5: Progressive Complexity" subtitle="When to reveal advanced features like relay management" icon="adjustments" >}}
  {{< card link="03-core-interactions" title="Pattern 3: Core Interactions" subtitle="Making first post successful" icon="cursor-click" >}}
{{< /cards >}}

---

## Next Steps

1. **User testing:** Test these patterns with real users
2. **A/B experiments:** Validate which patterns have highest impact
3. **Developer feedback:** Get input from Nostr client builders
4. **Iterate:** Refine based on data and feedback

---

*Last updated: November 2025*
