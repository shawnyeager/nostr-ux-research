# References & Bibliography

This document contains all sources cited throughout the Nostr UX Research Study, organized by category.

---

## Citation Key

Citations in pattern documents use this format:
- **[Data:1]** = Data & Analytics (section 1)
- **[Research:12]** = Academic & UX Research (section 2)
- **[Example:5]** = Case Studies & Examples (section 3)
- **[Protocol:3]** = Nostr Protocol Documentation (section 4)
- **[User:8]** = User Feedback & Quotes (section 5)

---

## 1. Data & Analytics Sources

### Nostr Usage & Retention Data

**[Data:1]** Nostr.band Analytics
- **Source:** https://nostr.band/stats
- **Data:** DAU trends, retention cohorts, network growth metrics
- **Date accessed:** November 2025
- **Key findings:** 30-day retention trending to 0% for recent cohorts, DAU stable at 10,000-12,000 trusted pubkeys

**[Data:2]** Nostr Network Statistics
- **Source:** [To be filled with specific source]
- **Data:** [Description]
- **Date accessed:** [Date]
- **Key findings:** [Summary]

### Mainstream App Benchmarks

**[Data:3]** Andreessen Horowitz (a16z) Social App Retention Benchmarks (2023)
- **Source:** a16z Consumer Team
- **URL:** https://a16z.com/do-you-have-lightning-in-a-bottle-how-to-benchmark-your-social-app/
- **Publication:** March 2023
- **Data:** N-day retention benchmarks for social apps (D1/D7/D30)
- **Key findings:**
  - **OK:** D1: 50%, D7: 35%, D30: 20%
  - **Good:** D1: 60%, D7: 40%, D30: 25%
  - **Great:** D1: 70%, D7: 50%, D30: 30%
  - Retention curves typically flatten between D7-D14 and plateau by D20
  - More users reaching "aha moment" in onboarding correlates with better retention across all time periods
- **Relevance:** Nostr's ~0% D30 retention for recent cohorts falls far below even the "OK" threshold (20%)

**[Data:4]** AppsFlyer Mobile App Retention Benchmarks (2024)
- **Source:** AppsFlyer
- **URL:** https://www.appsflyer.com/resources/reports/app-retention-benchmarks/
- **Publication:** 2024 Edition
- **Data:** Global mobile app retention rates by category
- **Key findings:**
  - Social media apps: D1: 26.3%, D7: 9.3%, D30: 3.11%
  - Social media showed +23% YoY growth in retention (Android)
  - iOS retention rates 46% higher than Android across categories
  - Industry baseline shows most apps lose 80% of users in first days
- **Relevance:** Even AppsFlyer's lower benchmarks (3.11% D30) exceed Nostr's near-zero retention, indicating fundamental onboarding/retention failures

---

## 2. Academic & UX Research

### Onboarding & First-Run Experience

**[Research:1]** Time to First Value (TTFV) in Product Onboarding
- **Citation:** Multiple industry sources (UserGuiding, Sixteenventures, MarTech)
- **URLs:**
  - https://sixteenventures.com/customer-onboarding-ttfv
  - https://martech.org/time-to-first-value-the-cx-metric-you-cant-afford-to-ignore/
- **Key findings:**
  - TTFV measures how long it takes for users to experience first meaningful benefit from a product
  - 40% of users abandon products after their first interaction if experience isn't seamless
  - Journey mapping reveals the "true value event" is when customer says "OK, this is worth it"
  - Not about first login or completing setup, but when users realize the outcome aligned with why they tried the product
  - Shorter TTFV correlates with higher user satisfaction and retention
- **Relevance:** Pattern 1 (Onboarding) - Nostr's 15-20 minute setup process massively exceeds acceptable TTFV thresholds

**[Research:2]** Progressive Disclosure in Human-Computer Interaction
- **Citation:** Nielsen, J. (1995). Progressive Disclosure. Nielsen Norman Group.
- **URL:** https://www.nngroup.com/articles/progressive-disclosure/
- **Key findings:**
  - Progressive disclosure defers advanced/rarely used features to secondary screens
  - First introduced by Jakob Nielsen in 1995 to minimize user errors in complex programs
  - Improves 3 of 5 usability components: learnability, efficiency, and error rate
  - Helps novices avoid mistakes and saves time scanning features they don't need
  - Helps advanced users by reducing initial cognitive load
  - Common patterns: accordions, tabs, tooltips, modal dialogs, hypertext
- **Academic extension:** Springer, A., & Whittaker, S. (2019). "Progressive Disclosure: Designing for Effective Transparency." ACM Transactions on Interactive Intelligent Systems.
  - arXiv preprint: https://arxiv.org/pdf/1811.02164
  - Extends progressive disclosure principles to algorithmic transparency
  - Users benefit from initially simplified feedback to build working heuristics
- **Relevance:** Pattern 1 (Onboarding), Pattern 5 (Progressive Complexity) - Nostr clients should hide relay/signer complexity for new users

**[Research:3]** Commitment & Consistency in User Onboarding
- **Citation:** Cialdini, R. B. (2006). *Influence: Science and Practice* (5th ed.). Pearson Education.
- **NN/g Application:** Kate Moran (Nielsen Norman Group). "The Principle of Commitment and Behavioral Consistency."
  - URL: https://www.nngroup.com/articles/commitment-consistency-ux/
- **Key findings:**
  - Behavioral consistency: people tend to behave in manner matching past decisions/behaviors
  - "Once we make a choice or take a stand, we encounter personal and interpersonal pressures to behave consistently with that commitment" (Cialdini)
  - "Foot-in-the-door" technique: small commitments build to larger ones
  - Start with small, low-cost commitments rather than all-or-nothing approaches
  - Examples: Yelp asks for review first, then account creation (leveraging aversion to data loss); Fitbit asks users to state fitness goals early
  - Gradual commitment more effective than immediate large asks
- **Related:** Luke Wroblewski's "Gradual Engagement" principle
  - Showcase product value before requiring information/commitment
  - Duolingo example: experience value before full account creation
- **Relevance:** Pattern 1 (Onboarding) - Nostr should allow browsing/reading before requiring key generation and account setup

### Content Discovery & Feed Algorithms

**[Research:4]** Cold Start Problem in Recommendation Systems
- **Citation:** [Academic paper - to be researched]
- **Key finding:** [Summary]
- **Relevance:** Pattern 2 (Content Discovery)

**[Research:5]** Algorithmic vs Chronological Feeds: Impact on Engagement
- **Citation:** [To be researched]
- **Key finding:** [Summary]
- **Relevance:** Pattern 2 (Content Discovery)

**[Research:6]** Social Network Analysis: Content Discovery Mechanisms
- **Citation:** [To be researched]
- **Key finding:** [Summary]
- **Relevance:** Pattern 2 (Content Discovery)

### Performance & Perceived Speed

**[Research:7]** Perceived Performance vs Actual Performance
- **Citation:** [UX research - to be found]
- **Key finding:** Users perceive apps as faster with skeleton screens and optimistic UI
- **Relevance:** Pattern 4 (Performance)

**[Research:8]** Mobile App Performance Budgets
- **Citation:** [To be researched - Google Web Fundamentals or similar]
- **Key finding:** [Summary]
- **Relevance:** Pattern 4 (Performance)

**[Research:9]** Optimistic UI Patterns
- **Citation:** [To be researched]
- **Key finding:** [Summary]
- **Relevance:** Pattern 3 (Core Interactions), Pattern 4 (Performance)

### Progressive Complexity & Feature Discovery

**[Research:10]** The 80/20 Rule in Feature Usage
- **Citation:** [Product design research - to be found]
- **Key finding:** 80% of users use only 20% of features
- **Relevance:** Pattern 5 (Progressive Complexity)

**[Research:11]** Settings Hierarchy and Configuration Burden
- **Citation:** [UX research - to be researched]
- **Key finding:** [Summary]
- **Relevance:** Pattern 5 (Progressive Complexity)

### Data Consistency & Trust

**[Research:12]** User Trust in Distributed Systems
- **Citation:** [HCI research - to be found]
- **Key finding:** [Summary]
- **Relevance:** Pattern 6 (Cross-Client Consistency)

**[Research:13]** Eventual Consistency and User Experience
- **Citation:** [Distributed systems + UX research]
- **Key finding:** [Summary]
- **Relevance:** Pattern 6 (Cross-Client Consistency)

---

## 3. Case Studies & Examples

### Mainstream App Onboarding

**[Example:1]** TikTok Onboarding Teardown & UX Analysis
- **Sources:**
  - Appcues: "TikTok's addictive, activation-focused user onboarding" - https://goodux.appcues.com/blog/tiktok-user-onboarding
  - UX Planet: Dulenko, V. "How TikTok Design Hooks You Up" - https://uxplanet.org/how-tiktok-design-hooks-you-up-6c889522c7ed
  - Medium: Srivastava, R. "Decoding TikTok's peerless onboarding and curation process" - https://medium.com/@rishdotblog/decoding-tiktoks-peerless-onboarding-and-curation-process-d520f3d17600
  - App Fuel: TikTok Onboarding Flow - https://www.theappfuel.com/examples/tiktok_onboarding
- **Key patterns:**
  - **No-signup browsing:** Core feed accessible without account, no personal info required
  - **Immediate value:** Users see entertaining videos as soon as they open app
  - **Minimal friction:** No annoying screens asking preferences or setup
  - **No traditional onboarding:** No profile picture, interest selection, or forced follows
  - **Algorithm-first approach:** AI automatically sources content users will love without explicit preferences
  - **Variable rewards:** Slot machine psychology - users don't know what's next, keep swiping
  - **Auto-play + short clips:** Instant engagement, low commitment per video
- **Comparison:** Instagram requires minimum 8 clicks before viewing first post (username, profile picture, birthday, follow suggestions)
- **Relevance:** Pattern 1 (Onboarding), Pattern 2 (Content Discovery) - Gold standard for time-to-value and gradual commitment

**[Example:2]** Samuel Hulick - User Onboarding Philosophy
- **Source:** UserOnboard.com, various interviews and analyses
  - Heavybit: "Elements of User Onboarding's Samuel Hulick" - https://www.heavybit.com/library/article/samuel-hulick-elements-of-user-onboarding
  - Intercom: "Samuel Hulick on building better onboarding" - https://www.intercom.com/blog/podcasts/podcast-samuel-hulick-onboarding/
  - Appcues: "Onboarding new users—an interview with Samuel Hulick" - https://www.appcues.com/blog/onboarding-new-users-an-interview-with-samuel-hulick
- **Key philosophy:**
  - "The single biggest mistake is not focusing on delivering value to users"
  - "What's the shortest path to get a user to think this product will make them more awesome at a specific task?"
  - Success = when users come back and actively engage, not when they complete setup
  - Focus on "meaningful wins" as early as possible
  - Give users "a taste of why the product improves their lives"
- **Best known for:** UX teardowns on UserOnboard.com analyzing onboarding flows of popular apps
- **Relevance:** Pattern 1 (Onboarding) - Framework for evaluating Nostr onboarding against time-to-value principles

**[Example:3]** Instagram Onboarding Flow Comparison
- **Source:** Various product analyses (referenced in TikTok comparisons)
- **Key pattern:** Multi-step required setup before value
  - Username creation (required)
  - Profile picture upload (encouraged)
  - Birthday entry (required)
  - Follow suggested accounts (encouraged)
  - Minimum 8 clicks before viewing first content
- **Relevance:** Pattern 1 (Onboarding) - Example of higher friction approach that still works due to network effects (friends are already there)

### Feed Design & Discovery

**[Example:4]** TikTok's For You Algorithm
- **Source:** [Published analysis - to be found]
- **Key pattern:** Cold start solved via aggressive recommendation
- **Relevance:** Pattern 2 (Content Discovery)

**[Example:5]** Instagram Explore Page
- **Source:** [Product analysis]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 2 (Content Discovery)

**[Example:6]** Mastodon Discovery Mechanisms
- **Source:** [Decentralized social comparison]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 2 (Content Discovery)

### Performance Optimization

**[Example:7]** Twitter/X Performance Optimization
- **Source:** [Engineering blog - to be found]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 4 (Performance)

**[Example:8]** Facebook Mobile Performance Budgets
- **Source:** [Engineering blog]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 4 (Performance)

### Progressive Disclosure

**[Example:9]** Slack Settings Hierarchy
- **Source:** [Product analysis]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 5 (Progressive Complexity)

**[Example:10]** Apple iOS Progressive Feature Education
- **Source:** [iOS design patterns]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 5 (Progressive Complexity)

---

## 4. Nostr Protocol Documentation

### NIPs (Nostr Implementation Possibilities)

**[Protocol:1]** NIP-01: Basic Protocol Flow
- **Source:** https://github.com/nostr-protocol/nips/blob/master/01.md
- **Relevance:** All patterns (foundational)

**[Protocol:2]** NIP-02: Contact List and Petnames
- **Source:** https://github.com/nostr-protocol/nips/blob/master/02.md
- **Relevance:** Pattern 6 (Cross-Client Consistency)

**[Protocol:3]** NIP-46: Nostr Connect (Signers)
- **Source:** https://github.com/nostr-protocol/nips/blob/master/46.md
- **Relevance:** Pattern 1 (Onboarding), Pattern 5 (Progressive Complexity)

**[Protocol:4]** NIP-65: Relay List Metadata (Outbox Model)
- **Source:** https://github.com/nostr-protocol/nips/blob/master/65.md
- **Relevance:** Pattern 5 (Progressive Complexity), Pattern 6 (Cross-Client Consistency)

**[Protocol:5]** NIP-57: Lightning Zaps
- **Source:** https://github.com/nostr-protocol/nips/blob/master/57.md
- **Relevance:** Pattern 2 (Content Discovery - quality signal)

**[Protocol:6]** Event Kinds Reference
- **Source:** [NIPs repository]
- **Key kinds:** Kind 0 (metadata), Kind 1 (notes), Kind 3 (contacts)
- **Relevance:** Multiple patterns

### Nostr Design Resources

**[Protocol:7]** Nostr Design - UX Guidelines
- **Source:** https://nostrdesign.org/
- **Relevance:** All patterns (community design resource)

**[Protocol:8]** Nostr Protocol Specification
- **Source:** [Official docs]
- **Relevance:** All patterns (foundational)

---

## 5. User Feedback & Quotes

### Onboarding Pain Points

**[User:1]** "15-20 minute setup process overwhelms new users"
- **Source:** [User feedback - to be specifically cited]
- **Context:** [Where this was observed]
- **Relevance:** Pattern 1 (Onboarding)

**[User:2]** "Key management is terrifying - losing nsec = losing identity forever"
- **Source:** [User feedback - to be cited]
- **Context:** [Where this was observed]
- **Relevance:** Pattern 1 (Onboarding)

**[User:3]** "Empty feed after signup - no idea what to do"
- **Source:** [User feedback - to be cited]
- **Context:** [Where this was observed]
- **Relevance:** Pattern 1 (Onboarding), Pattern 2 (Content Discovery)

### Reliability & Core Interactions

**[User:4]** "Posts disappear seconds after posting"
- **Source:** [User complaint - to be cited]
- **Context:** [Client and circumstances]
- **Relevance:** Pattern 3 (Core Interactions), Pattern 6 (Cross-Client Consistency)

**[User:5]** "Notifications are missing or delayed"
- **Source:** [User feedback]
- **Context:** [Where this was observed]
- **Relevance:** Pattern 3 (Core Interactions)

### Content Discovery Issues

**[User:6]** "Traditional apps win by having much better content selection"
- **Source:** [User observation - to be cited]
- **Context:** [Discussion context]
- **Relevance:** Pattern 2 (Content Discovery)

**[User:7]** "Need 5-6 different clients to work around bugs"
- **Source:** [User feedback - to be cited]
- **Context:** [Where this was observed]
- **Relevance:** All patterns (systemic UX failure)

### Cross-Client Consistency

**[User:8]** "Lost all followers when switching from Primal → Damus → Snort"
- **Source:** [User complaint - to be cited with GitHub issue or Nostr post]
- **Context:** [Specific circumstances]
- **Relevance:** Pattern 6 (Cross-Client Consistency)

**[User:9]** "Profile changes don't sync across apps"
- **Source:** [User feedback - to be cited]
- **Context:** [Where observed]
- **Relevance:** Pattern 6 (Cross-Client Consistency)

### Performance & Reliability

**[User:10]** "Apps hang/buffer constantly"
- **Source:** [User complaint - to be cited]
- **Context:** [Client and device]
- **Relevance:** Pattern 4 (Performance)

**[User:11]** "After 15-20 minutes of messing around, I was able to create a NOSTR account"
- **Source:** Stacker News discussion thread #222205
- **URL:** https://stacker.news/items/222205
- **Date:** 2024
- **Context:** User describing first-time Nostr experience; thread titled "NOSTR is not going to fix anything :("
- **Relevance:** Pattern 1 (Onboarding) - Demonstrates excessive onboarding time

**[User:12]** "If you lose the private key the account is lost forever"
- **Source:** Iris (Nostr client) FAQ documentation
- **URL:** https://github.com/irislib/faq
- **Context:** Official warning presented to users about key management
- **Relevance:** Pattern 1 (Onboarding) - Illustrates the terror of permanent account loss

**[User:13]** Multiple users confused about keypair mechanics and signatures
- **Source:** GitHub Discussion #31, nostr_console
- **URL:** https://github.com/vishalxl/nostr_console/discussions/31
- **Date:** December 2022
- **Examples:**
  - User confused: "I use same private key, but seems like, each platform generates another public key"
  - User didn't understand: "paste the signature here (as hex)" when editing profile
- **Relevance:** Pattern 1 (Onboarding) - Shows fundamental confusion about keys during first experience

**[User:14]** Relay configuration settings don't persist
- **Source:** GitHub Issues, Amethyst client
- **URLs:**
  - Issue #35: https://github.com/vitorpamplona/amethyst/issues/35 (Jan 25, 2023)
  - Issue #69: Relay list resets on updates (Feb 3, 2023)
- **Quote:** "If I add my self-hosted relay, it goes up into the list of relays but then no matter how I leave that screen...when I re-enter that relays screen my relay is not there anymore."
- **Relevance:** Pattern 1 (Onboarding), Pattern 5 (Progressive Complexity) - Relay management frustrations

**[User:15]** "Traditional apps win by having much better content selection"
- **Source:** "The State of Nostr Clients" analysis
- **URL:** https://karnage.npub.pro/post/1711761836895/
- **Date:** March 2024
- **Additional data:** DAU stuck at 10-12k trusted pubkeys, users need 5-6 different clients
- **Relevance:** Pattern 2 (Content Discovery) - Content quality and discovery problems

**[User:16]** "Nostr is weird and hard to use"
- **Source:** Jack Dorsey interview with Mike Solana, Founders Fund
- **Date:** May 2024
- **Coverage:** Washington Post, TechTimes, Engadget
- **Full context:** Dorsey emphasized "those who truly believe in censorship resistance and free speech need to use technologies that enable those values" but admitted UX is "rough around the edges"
- **Relevance:** Pattern 1 (Onboarding), All patterns - Validation from Nostr's most prominent backer

---

## 6. Industry Design Systems

**[Design:1]** Apple Human Interface Guidelines
- **Source:** https://developer.apple.com/design/human-interface-guidelines/
- **Relevance:** All patterns (iOS design standards)

**[Design:2]** Google Material Design
- **Source:** https://material.io/design
- **Relevance:** All patterns (Android design standards)

**[Design:3]** Microsoft Fluent Design System
- **Source:** https://www.microsoft.com/design/fluent/
- **Relevance:** Pattern 5 (Progressive Complexity)

---

## 7. Developer Resources

### Client Repositories (for implementation analysis)

**[Code:1]** Damus (iOS)
- **Source:** https://github.com/damus-io/damus
- **Relevance:** Implementation examples (iOS patterns)

**[Code:2]** Amethyst (Android)
- **Source:** https://github.com/vitorpamplona/amethyst
- **Relevance:** Implementation examples (Android patterns)

**[Code:3]** Primal (Web/Mobile)
- **Source:** [Repository link]
- **Relevance:** Implementation examples

**[Code:4]** Snort (Web)
- **Source:** https://github.com/v0l/snort
- **Relevance:** Implementation examples (web patterns)

---

## Research Gaps (To Be Filled)

### High Priority
- [ ] Academic HCI papers on social media onboarding
- [ ] Quantitative retention data for mainstream apps (benchmarks)
- [ ] TikTok algorithm research (published analyses)
- [ ] Formal user studies of Nostr clients
- [ ] Performance benchmarks for social apps

### Medium Priority
- [ ] Case studies: successful social app launches
- [ ] Research on trust in decentralized systems
- [ ] Feed algorithm comparison studies
- [ ] Progressive disclosure best practices

### Low Priority (Nice to Have)
- [ ] Developer interviews with Nostr client builders
- [ ] Formal usability testing reports
- [ ] Accessibility research for social apps

---

## How to Cite This Work

**APA Style:**
Yeager, S. (2025). *Nostr UX Research Study: Design Patterns for Consumer Applications*. GitHub. https://github.com/shawnyeager/nostr-ux-research

**MLA Style:**
Yeager, Shawn. "Nostr UX Research Study: Design Patterns for Consumer Applications." *GitHub*, 2025, https://github.com/shawnyeager/nostr-ux-research.

---

*Last updated: November 2025*

**Note:** This is a living document. Citations are added as patterns are developed. Placeholders marked with [To be researched] will be filled during the writing process.
