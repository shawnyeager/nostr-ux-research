---
title: "References & Bibliography"
weight: 2
---

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
- **Source:** Nostr.band statistics portal
- **URL:** https://nostr.band/stats
- **Date accessed:** November 2025
- **Data:** DAU trends, retention cohorts, network growth metrics
- **Key findings:** 30-day retention trending to 0% for recent cohorts, DAU stable at 10,000-12,000 trusted pubkeys

**[Data:2]** Nostr Content Discovery and Retention Crisis
- **Source:** Stats.nostr.band and Nostr User Statistics analysis
- **URL:** https://stats.nostr.band/ and https://socialcapitalmarkets.net/crypto-trading/nostr-statistics/
- **Date:** October 2024
- **Key findings:**
  - Only ~36,000 weekly active users as of October 2024; less than 15,000 daily active
  - Adoption spikes (X ban in Brazil, Reddit/TikTok events) show poor retention
  - Post-viral-event retention failure demonstrates discovery/content problems
- **Relevance:** Pattern 2 (Content Discovery) - Quantifies the retention impact of poor content discovery

**[Data:5]** Nostr Spam Crisis
- **Source:** Nostr.band spam filter and web research
- **URL:** https://spam.nostr.band/
- **Date:** February 2024
- **Key findings:**
  - Nostr hit with approximately 500,000 daily spam messages in mid-February 2024
  - Spam consisted of ads for spam services, scams, and NSFW content
  - Global feed became unusable without filtering
- **Relevance:** Pattern 2 (Content Discovery) - Feed quality problems at scale

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

### Pattern 3: Core Interaction Reliability Data

**[Data:11]** Post Publishing Failures in Nostr
- **Source:** Nostr Biweekly Review (23 Dec 2024-5 Jan 2025)
- **URL:** https://thenostrreview.substack.com/p/nostr-biweekly-review-23-dec-2024
- **Date:** January 2025
- **Key findings:** "If a mod post (later blog post) gets stuck while publishing, a timer kicks in that'll lead to a 'try again' option that usually publishes the post correctly"
- **Relevance:** Pattern 3 - Confirms posts getting stuck during publishing is common enough to require retry mechanisms

**[Data:12]** Relay Data Loss During Downtime
- **Source:** "User Relays" by Sondre Bjellås, Medium
- **URL:** https://medium.com/@sondreb/user-relays-7e23e2ac2590
- **Date:** April 2025
- **Key findings:** "When the Damus relay was taken down for upgrades, users' content was potentially wiped and gone... content stored on that relay was reduced to remaining on one less relay"
- **Relevance:** Pattern 3 - Posts can disappear when relays go down without proper synchronization

**[Data:13]** NIP-25 Reaction Inefficiency Problem
- **Source:** "Reactions are inefficient. There needs to be an aggregate kind" - GitHub Issue #159
- **URL:** https://github.com/nostr-protocol/nips/issues/159
- **Date:** Discussed throughout 2024
- **Key findings:** "NIP-25 is a terribly inefficient way to do it. Clients must gather potentially thousands of events just to count up the likes for a note. Storage of non-kind:1 events is at a MINIMUM about 10:1 compared to actual content posts. One relay operator reported relay growth of about 2GB per day primarily from reactions and metadata"
- **Relevance:** Pattern 3 - Core architectural problem causing reaction display failures and performance issues

**[Data:14]** Catastrophic Follow List Loss
- **Source:** "All my nostr follows gone - how do I get them back?" - Stacker News
- **URL:** https://stacker.news/items/182519
- **Date:** 2024
- **Key findings:** User reported "I was trying out the new Iris Nostr client and decided to follow someone new. From that moment on, I noticed my follows count reset from about 130 to 1 (that last follow)... At least one developer reported losing 75% of their follows"
- **Relevance:** Pattern 3 - Following/unfollowing catastrophically unreliable due to race conditions

**[Data:15]** Kind 3 Race Condition Root Cause
- **Source:** "Add kinds 10 and 11 to prevent race conditions" - GitHub PR #349
- **URL:** https://github.com/nostr-protocol/nips/pull/349
- **Date:** Opened 2023, discussed through 2024
- **Key findings:** "A very common experience on Nostr is that of losing follows due to race conditions when sending kind 3 events... Earlier this week someone signed in to Coracle, their contact list failed to fully sync before they followed someone, and they ended up deleting all their follows"
- **Relevance:** Pattern 3 - Protocol design flaw causing systematic follow list destruction

**[Data:16]** Notification Failures
- **Source:** Nostrability Issues and NDK GitHub
- **URLs:** https://github.com/nostrability/nostrability/issues, https://github.com/nostr-dev-kit/ndk/issues/175
- **Date:** 2024
- **Key findings:** "Receiving payments via Zeus wallet in Damus sometimes fails to trigger zap notifications... Quoting a user without a p-tag does not generate notifications... When outbox is enabled in NDK, the relay list becomes huge, causing zap requests to fail with an HTTP 431 error"
- **Relevance:** Pattern 3 - Missing notifications widespread due to protocol complexity

**[Data:17]** Relay Network Decline
- **Source:** "Improving the Availability and Reliability of the Relay Network"
- **URL:** https://research.dorahacks.io/2024/04/30/nostr-relay-incentive/
- **Date:** April 23, 2024
- **Key findings:** "Only 639 relays online globally (two-thirds reduction from previous year). 95% of relays struggle to cover operational costs. 20% have faced significant downtime"
- **Relevance:** Pattern 3 - Shrinking infrastructure directly impacts reliability

**[Data:18]** Empirical Analysis of Nostr Reliability
- **Source:** "An Empirical Analysis of the Nostr Social Network: Decentralization, Availability, and Replication Overhead" - arXiv
- **URL:** https://arxiv.org/abs/2402.05709
- **Date:** February 2024
- **Key findings:** "Relay availability remains a challenge, where financial sustainability (particularly for-to-use relays) emerges as a contributing factor. 93% of posts can be found across multiple relays, but 178 relays (25% of all relays) hosting more than 5% of posts each"
- **Relevance:** Pattern 3 - Academic validation of systemic reliability challenges

### Pattern 4: Performance & Perceived Speed Data

**[Data:19]** User complaints - Nostr apps "slow and clunky"
- **Source:** Stacker News Nostr client discussions
- **URL:** https://stacker.news/items/126156
- **Date:** 2024
- **Key findings:** Apps described as "slow and clunky" compared to Twitter, with "clients blasting entire message history" causing inefficiency. Multiple users reported clients being "slow" or "buggy"
- **Relevance:** Pattern 4 - User perception of performance problems

**[Data:20]** Crash reports across Nostr clients
- **Sources:** GitHub issues from major Nostr clients
- **URLs:**
  - https://github.com/PrimalHQ/primal-android-app/issues
  - https://github.com/damus-io/damus/issues/3163
  - https://github.com/vitorpamplona/amethyst/releases
  - https://github.com/nostur-com/nostur-ios-public/releases
- **Date:** 2024-2025
- **Key findings:** Primal Android crashes (September & October 2025), Amethyst community join/leave crashes, Nostur iOS crashes and slow loading fixed in v1.19.2 and v1.24.3, Damus Issue #3163 (July 31, 2025)
- **Relevance:** Pattern 4 - Stability and performance issues driving abandonment

**[Data:21]** Database performance bottleneck
- **Source:** Stacker News developer discussions
- **URL:** https://stacker.news/items/126156
- **Date:** 2024
- **Key findings:** Users identify database as "core bottleneck" for slow feed loading. Comparison to Twitter's Redis architecture shows gap
- **Relevance:** Pattern 4 - Technical root cause of performance problems

**[Data:22]** Amethyst battery drain issues
- **Source:** Amethyst GitHub and release notes
- **URL:** https://github.com/vitorpamplona/amethyst/releases
- **Date:** 2024-2025
- **Key findings:** Background video playback silently draining battery on loop, multi-relay connections (up to 100 relays) causing resource consumption, improper WebSocket connection management when app backgrounds
- **Relevance:** Pattern 4 - Mobile performance problems affecting user experience

**[Data:23]** Relay infrastructure statistics
- **Source:** "Improving the Availability and Reliability of the Relay Network"
- **URL:** https://research.dorahacks.io/2024/04/30/nostr-relay-incentive/
- **Date:** April 23, 2024
- **Key findings:** Only 639 relays online globally (80% in North America & Europe), default nostr-relay config: ~100 requests/second, default SQLite backend has "worst performance", free relays have higher latency and less reliability
- **Relevance:** Pattern 4 - Infrastructure limitations affecting performance

**[Data:24]** Multi-relay coordination overhead
- **Source:** Nostr protocol implementation analysis and client documentation
- **URL:** https://github.com/nostr-protocol/nips
- **Date:** 2024-2025
- **Key findings:** Clients can open "hundreds of WebSocket connections simultaneously", each relay gets one WebSocket connection for all communication
- **Relevance:** Pattern 4 - Architecture creating performance bottlenecks

**[Data:25]** Black Hat USA 2025: "Not Sealed: Practical Attacks on Nostr"
- **Source:** Black Hat USA 2025 presentation and academic paper
- **URL:** https://crypto-sec-n.github.io/
- **Date:** August 2025
- **Key findings:** Several clients (Damus, Iris, FreeFrom, Plebstr past versions) omit signature verification entirely to improve speed. Trade-off: Performance improvement vs security vulnerability. Recommendation: Enforce mandatory signature verification in NIP-01
- **Relevance:** Pattern 4 - Critical security vs performance trade-off

**[Data:26]** nostrdb optimization
- **Source:** nostrdb GitHub repository
- **URL:** https://github.com/damus-io/nostrdb
- **Date:** 2024-2025
- **Key findings:** "Unfairly fast" embedded database with zero-copy, O(1) access patterns, memory-mapped LMDB design (copied from strfry)
- **Relevance:** Pattern 4 - Example of performance optimization solution

**[Data:27]** Primal Caching Service
- **Source:** Primal caching service repository (archived December 14, 2024)
- **URL:** https://github.com/PrimalHQ/primal-caching-service
- **Date:** Archived December 2024
- **Key findings:** Server-side caching for Nostr events, open sourced under MIT license, development moved to primal-server
- **Relevance:** Pattern 4 - Relay-level caching strategy

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

**[Research:4]** Bluesky Starter Packs Solve Cold Start Problem
- **Citation:** "Bootstrapping Social Networks: Lessons from Bluesky Starter Packs" - Lancaster University, TU Darmstadt, City St George's University of London
- **URL:** https://arxiv.org/pdf/2501.11605
- **Date:** January 2025
- **Key findings:**
  - Starter packs (curated lists of accounts users can follow with one click) accounted for 43% of follow actions during peak periods
  - 20% of all follow relationships during first 6 months came from starter packs
  - Users included in starter packs received 85% more followers and posted 60% more than similar users not included
  - Over 335,000 starter packs were created in the first six months
- **Relevance:** Pattern 2 (Content Discovery) - Research-backed solution to cold start problem directly applicable to Nostr

**[Research:5]** Cold Start Problem in Recommendation Systems (Academic)
- **Citations:**
  - "A social importance and category enhanced cold-start user recommendation system" - Expert Systems with Applications, ScienceDirect
    - URL: https://www.sciencedirect.com/science/article/abs/pii/S0957417425007523
  - "Recruitment From Social Networks for the Cold Start Problem in Mobile Crowdsourcing" - IEEE Internet of Things Journal
    - URL: https://pureportal.coventry.ac.uk/en/publications/recruitment-from-social-networks-for-the-cold-start-problem-in-mo
- **Date:** 2024
- **Key strategies identified:**
  - Using social network information from existing platforms
  - Leveraging collaborative filtering based on similar user behavior
  - Hybrid models combining content-based and collaborative filtering
  - Incorporating user demographics and stated preferences
  - Using community detection to identify similar users
- **Relevance:** Pattern 2 (Content Discovery) - Academic research backing for Web of Trust and social graph-based discovery

**[Research:6]** Algorithmic vs Chronological Feeds: Impact on Engagement ("Better Feeds" Report)
- **Citation:** Georgetown University Knight-Georgetown Institute. "Better Feeds: Algorithms That Put People First"
- **URL:** https://kgi.georgetown.edu/wp-content/uploads/2025/02/Better-Feeds_-Algorithms-That-Put-People-First.pdf
- **Date:** March 2025
- **Key findings:**
  - Moving users from algorithmic to reverse-chronological feeds decreased time spent on platform and user activity over 3 months
  - Chronological feeds did NOT significantly alter levels of polarization, political knowledge, or other attitudes (contrary to common belief)
  - Users compensated by increasing usage on other platforms: Instagram users → TikTok (+36%), YouTube (+20%); Facebook users → Reddit (+52%), YouTube (+21%)
  - Chronological feeds may increase exposure to abuse, amplify untrustworthy content, and create recency bias
  - Suggests false choice between engagement-optimized vs chronological feeds - algorithms can be designed for long-term user value
- **Relevance:** Pattern 2 (Content Discovery) - Critical evidence that pure chronological feeds won't solve retention problems; users will leave for more engaging alternatives

**[Research:7]** Engagement-Based Algorithms Amplify Divisive Content
- **Citation:** "Engagement, user satisfaction, and the amplification of divisive content on social media" - PNAS Nexus, Oxford Academic
- **URLs:**
  - https://academic.oup.com/pnasnexus/article/4/3/pgaf062/8052060
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC11894805/
- **Date:** 2024-2025
- **Key findings:**
  - Preregistered algorithmic audit of Twitter/X found engagement-based ranking amplifies emotionally charged, out-group hostile political content
  - Users report this content makes them feel worse
  - Users do not prefer the political tweets selected by algorithm, suggesting algorithm underperforms in satisfying stated preferences
  - Item-level satisfaction surveys correlate with integrity metrics and can improve retention when used in ranking
- **Relevance:** Pattern 2 (Content Discovery) - WARNING: optimizing purely for engagement (likes, replies, reposts) amplifies divisive content. Nostr algorithms should incorporate user satisfaction signals (muting, reporting, feedback) alongside engagement

**[Research:8]** Social Media as Search Engine for Gen Z
- **Citation:** Multiple 2024-2025 sources including Sked Social "Social search: How to Optimize for Discoverability on TikTok and Instagram (2025)"
- **URL:** https://skedsocial.com/blog/social-search-how-to-optimize-for-discoverability-on-tiktok-and-instagram-2025/
- **Date:** 2024-2025
- **Key findings:**
  - Two in five Americans currently use TikTok as a search engine
  - Over 50% of Gen Z and Millennials prefer social media for product discovery, recommendations, and research over traditional search engines
  - TikTok introduced "Creator Search Insights Tool" in 2024 to help creators optimize for search behavior
  - Platforms are no longer just for scrolling—they're where consumers look for information
- **Relevance:** Pattern 2 (Content Discovery) - Search functionality is now table stakes, not an afterthought. Users expect to search for topics, hashtags, and people as primary discovery mechanism

### Pattern 3: Core Interaction Loops & Reliability

**[Research:17]** Mobile App Trust and Design (Framna 2024)
- **Source:** "Mobile App Trends 2024 Report" - Framna
- **URL:** https://framna.com/en-us/mobile-app-trends-2024-report
- **Date:** 2024
- **Key findings:** Survey of 3,000+ people ages 18-70 found that 94% of users cited design as main reason they mistrusted or rejected apps. 40% said poor performance would make them prefer better alternatives. If app doesn't load quickly or show signs of reliability, users immediately uninstall.
- **Relevance:** Pattern 3 - Perceived reliability is critical for user trust and retention

**[Research:18]** Social Platform Trust Decline (eMarketer 2024)
- **Source:** "User trust in social platforms is falling" - eMarketer
- **URL:** https://www.emarketer.com/content/user-trust-social-platforms-falling-according-our-new-study
- **Date:** 2024
- **Key findings:** Only 35% of users feel safe participating on social platforms (down from 44%). All 9 major platforms lost trust ground in 2024.
- **Relevance:** Pattern 3 - Trust erosion means core interactions must be rock-solid reliable

**[Research:19]** Response Time Limits (Nielsen Norman Group 2024)
- **Source:** "Response Time Limits: Article by Jakob Nielsen" - NN/g
- **URL:** https://www.nngroup.com/articles/response-times-3-important-limits/
- **Date:** January 2024 (updated)
- **Key findings:** Three critical thresholds: 0.1 seconds (100ms) - limit for feeling system reacts instantaneously; 1.0 second - limit for user's flow of thought staying uninterrupted; 10 seconds - limit for keeping user's attention
- **Relevance:** Pattern 3 - Nostr clients must respond to clicks within 100ms even if relay response takes longer

**[Research:20]** React useOptimistic Hook (Official Documentation 2024)
- **Source:** "useOptimistic – React" - React Official Docs
- **URL:** https://react.dev/reference/react/useOptimistic
- **Date:** 2024 (Canary version)
- **Key findings:** New official React hook for optimistic UI updates. Shows different state while async action is underway, indicating optimistic UI is now framework-level standard pattern
- **Relevance:** Pattern 3 - Optimistic UI is established best practice for social app interactions

**[Research:21]** Optimistic UI Patterns (LogRocket 2024)
- **Source:** "Understanding optimistic UI and React's useOptimistic Hook" - LogRocket
- **URL:** https://blog.logrocket.com/understanding-optimistic-ui-react-useoptimistic-hook/
- **Date:** August 2024
- **Key findings:** Optimistic UI makes applications feel faster and more responsive. Excels when actions are nearly always successful (messages, posts, preferences). NOT recommended for critical operations (flight booking, cash transfers). Must properly handle failure cases and revert state
- **Relevance:** Pattern 3 - Guidelines for when to use optimistic UI in Nostr clients

**[Research:22]** Visibility of System Status (Nielsen Norman Group 2024)
- **Source:** "Visibility of System Status" - NN/g
- **URL:** https://www.nngroup.com/articles/visibility-system-status/
- **Date:** January 2024
- **Key findings:** "Most basic guideline of UI design" - keep users informed about what's going on. Provide appropriate feedback within reasonable time. Present feedback as quickly as possible (ideally immediately)
- **Relevance:** Pattern 3 - Every Nostr interaction needs immediate visual feedback

**[Research:23]** Skeleton Screens (Nielsen Norman Group 2024)
- **Source:** "Skeleton Screens 101" - NN/g
- **URL:** https://www.nngroup.com/articles/skeleton-screens/
- **Date:** November 2024
- **Key findings:** Skeleton screens are new norm for full-page loading. Show wireframe immediately before real content. Best for 2-10 second wait times. Must be consistent with final screen layout
- **Relevance:** Pattern 3 - Nostr feeds taking 2-10 seconds should use skeleton screens, not spinners

**[Research:24]** Success Message UX (Pencil & Paper 2024)
- **Source:** "Success Message UX Examples & Best Practices" - Pencil & Paper
- **URL:** https://www.pencilandpaper.io/articles/success-ux
- **Date:** 2024
- **Key findings:** Error states often prioritized over success states, but both must work together. Success feedback as important as error feedback for user confidence
- **Relevance:** Pattern 3 - Don't neglect success states in Nostr clients

**[Research:25]** Error Message Guidelines (Nielsen Norman Group 2024)
- **Source:** "10 Design Guidelines for Reporting Errors in Forms" - NN/g
- **URL:** https://www.nngroup.com/articles/errors-forms-design-guidelines/
- **Date:** December 2024
- **Key findings:** Help users recover from errors by clearly identifying problems. Allow users to access and correct fields easily
- **Relevance:** Pattern 3 - Error messages in Nostr must be clear and actionable

**[Research:26]** Error Handling UX Patterns (Medium 2025)
- **Source:** "Error handling - UX design patterns" - Medium/Design Bootcamp
- **URL:** https://medium.com/design-bootcamp/error-handling-ux-design-patterns-c2a5bbae5f8d
- **Date:** October 2025
- **Key findings:** Based on Jakob Nielsen's heuristic: "Help Users Recognize, Diagnose, and Recover." Three steps: Tell users error occurred, explain what went wrong, show how to recover
- **Relevance:** Pattern 3 - Three-part error message structure for Nostr

**[Research:27]** Idempotency Explained (FreeCodeCamp 2024)
- **Source:** "What is Idempotence? Explained with Real-World Examples" - FreeCodeCamp
- **URL:** https://www.freecodecamp.org/news/idempotence-explained/
- **Date:** September 2024
- **Key findings:** Post/Redirect/Get (PRG) pattern prevents double-submission. Prevents double-clicks, page refreshes creating duplicate orders. Real-world examples: Traffic light buttons, elevator call buttons
- **Relevance:** Pattern 3 - Nostr clients should prevent double-posting via button disabling and request deduplication

**[Research:28]** Designing Idempotent APIs (Bits and Pieces 2025)
- **Source:** "How To Design an Idempotent API in 2024?" - Bits and Pieces
- **URL:** https://blog.bitsrc.io/designing-an-idempotent-api-in-2024-d4a3cf8d8bf2
- **Date:** March 2025
- **Key findings:** Idempotency improves UX by ensuring consistent results, avoiding duplicate actions, providing predictable and stable interactions
- **Relevance:** Pattern 3 - Nostr events should be idempotent by design

**[Research:29]** Retry Pattern Best Practices (Microsoft Azure 2024)
- **Source:** Microsoft Azure Retry Pattern
- **URL:** https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
- **Date:** 2024
- **Key findings:** Use exponential back-off for retries. Classify errors: Transient (retry) vs Permanent (user action). Don't retry: Authentication failures, invalid requests. Keep user informed during retries
- **Relevance:** Pattern 3 - Nostr clients should auto-retry transient relay failures with exponential backoff

**[Research:30]** Offline-First Design Patterns (Google 2024)
- **Source:** "Design Guidelines for Offline & Sync" - Google Open Health Stack
- **URL:** https://developers.google.com/open-health-stack/design/offline-sync-guideline
- **Date:** 2024
- **Key findings:** Initial sync with clear guidance and time estimates, status bar indicates offline/syncing/success/failure, background syncing based on relevant intervals, progress indicators on key screens, timestamps show recent update times
- **Relevance:** Pattern 3 - Nostr clients should show relay sync status and allow offline post queuing

### Pattern 4: Performance & Perceived Speed

**[Research:31]** Nielsen Norman Group - Response Time Limits (Updated January 2024)
- **Source:** Nielsen Norman Group
- **URL:** https://www.nngroup.com/articles/response-times-3-important-limits/
- **Date:** Updated January 2024
- **Key findings:** 100ms (instant response), 1.0 second (upper limit of user's flow of thought), 10 seconds → Now 5 seconds: "Probably safe to say the upper limit of 10 seconds is now 5 seconds or even less"
- **Relevance:** Pattern 4 - Foundational performance thresholds updated for 2024 expectations

**[Research:32]** Website Speed & Bounce Rate Statistics
- **Source:** Site Builder Report
- **URL:** https://www.sitebuilderreport.com/website-speed-statistics
- **Date:** 2025
- **Key findings:** 32% bounce increase from 1 to 3 seconds load time, 90% bounce increase at 5 seconds, 53% of mobile visitors leave if page takes >3 seconds
- **Relevance:** Pattern 4 - Quantifies business impact of speed on retention

**[Research:33]** User Experience Conversion Statistics
- **Source:** TechJury
- **URL:** https://techjury.net/industry-analysis/user-experience-stats/
- **Date:** 2025
- **Key findings:** Sites loading in 1 second achieve 39% conversion rates, 1.9% conversion at 2.4 seconds, 7% loss in conversion for every 1-second delay
- **Relevance:** Pattern 4 - Conversion rate correlation with load times

**[Research:34]** Skeleton Loading Screen Design
- **Source:** LogRocket
- **URL:** https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/
- **Date:** 2024
- **Key findings:** Users perceive skeleton screens as 30% faster than spinners for identical wait times. Best for wait times under 10 seconds, container-based components
- **Relevance:** Pattern 4 - Perceived performance optimization with concrete data

**[Research:35]** Skeleton Screens vs Spinners Performance
- **Source:** UI Deploy
- **URL:** https://ui-deploy.com/blog/skeleton-screens-vs-spinners-optimizing-perceived-performance
- **Date:** 2024
- **Key findings:** Skeleton screens keep users more engaged during wait times. Developer saw dramatic UX improvement despite identical backend speed
- **Relevance:** Pattern 4 - Loading state pattern selection

**[Research:36]** React Optimistic UI with useOptimistic Hook
- **Source:** LogRocket
- **URL:** https://blog.logrocket.com/understanding-optimistic-ui-react-useoptimistic-hook/
- **Date:** 2024
- **Key findings:** React 19's useOptimistic Hook provides elegant solution. Essential for social media: "seeing a comment appear the moment it's clicked"
- **Relevance:** Pattern 4 - Modern optimistic UI implementation

**[Research:37]** Material Design 3 Loading Indicators
- **Source:** Material Design 3, Google
- **URL:** https://m3.material.io/components/progress-indicators/guidelines
- **URL:** https://9to5google.com/2025/05/16/material-3-expressive-loading-indicator/
- **Date:** May 2025
- **Key findings:** New Material 3 Expressive loading indicator (2025) for wait times <5 seconds. Looping shape morph sequence with 7 unique shapes
- **Relevance:** Pattern 4 - Modern loading pattern design

**[Research:38]** React Design Patterns Best Practices
- **Source:** Telerik
- **URL:** https://www.telerik.com/blogs/react-design-patterns-best-practices
- **Date:** 2025
- **Key findings:** Optimistic UI especially vital in social media. Facebook example: Like button immediately turns blue
- **Relevance:** Pattern 4 - Mainstream app optimistic UI examples

**[Research:39]** Caching Strategy with Service Workers
- **Source:** Peerdh Blog
- **URL:** https://peerdh.com/blogs/programming-insights/implementing-a-caching-strategy-for-indexeddb-with-service-workers
- **Date:** September 2024
- **Key findings:** Service Workers + IndexedDB significantly improves performance and UX. Enables robust offline-first applications
- **Relevance:** Pattern 4 - Caching architecture for performance

**[Research:40]** Offline-First Web Applications
- **Source:** TechTruth
- **URL:** https://techtruth.dev/building-offline-first-web-applications-with-service-workers-and-indexeddb
- **Date:** August 2025
- **Key findings:** Cache-then-network or stale-while-revalidate for dynamic content. 2024 HTTP Archive data: Nearly 45% of high-rated PWAs use hybrid approach
- **Relevance:** Pattern 4 - Industry adoption of caching patterns

**[Research:41]** JavaScript Bundle Size Reduction
- **Source:** Dev.to
- **URL:** https://dev.to/hamzakhan/reducing-javascript-bundle-size-with-code-splitting-in-2025-3927
- **Date:** 2025
- **Key findings:** Tree shaking, code splitting can reduce bundle sizes by 20-50% in typical applications. Use dynamic import() expressions
- **Relevance:** Pattern 4 - Bundle optimization strategies

**[Research:42]** Webpack Bundle Splitting Best Practices
- **Source:** Infervour
- **URL:** https://infervour.com/blog/how-to-split-webpack-bundles-for-code-splitting
- **Date:** 2025
- **Key findings:** Performance budgets for 2024: Initial bundle <250KB gzipped for fast 3G, total bundle <1MB gzipped for good UX
- **Relevance:** Pattern 4 - Specific performance budgets for 2024

**[Research:43]** React Server Components Performance Impact
- **Source:** Developer Way, CoderTrove
- **URL:** https://www.developerway.com/posts/react-server-components-performance
- **URL:** https://www.codertrove.com/articles/react-server-components-2025-nextjs-performance
- **Date:** 2024-2025
- **Key findings:** Real-world example: 40% improvement in load times, 15% increase in conversion rates. RSCs not hydrated, no JS shipped to client
- **Relevance:** Pattern 4 - Emerging React performance optimization

**[Research:44]** Native Image Lazy Loading Performance
- **Source:** Web.dev, MDN, Medium
- **URL:** https://web.dev/articles/browser-level-image-lazy-loading
- **URL:** https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading
- **URL:** https://medium.com/@iliketoplay/lazy-loading-images-in-2024-9b579e885e07
- **Date:** 2024-2025
- **Key findings:** On 4G: 97.5% of lazy-loaded images fully loaded within 10ms of becoming visible. On 2G: 92.6% loaded within 10ms. Native loading="lazy" attribute
- **Relevance:** Pattern 4 - Image optimization for feeds

**[Research:45]** React Performance Optimization Complete Guide
- **Source:** Dev.to
- **URL:** https://dev.to/amaresh_adak/react-performance-optimization-from-slow-to-lightning-fast-complete-guide-2025-19hl
- **Date:** 2025
- **Key findings:** Virtual scrolling/windowing essential for large lists. Only render visible items to reduce DOM operations
- **Relevance:** Pattern 4 - Feed rendering optimization

**[Research:46]** Virtualization in React for Large Lists
- **Source:** Medium
- **URL:** https://medium.com/@ignatovich.dm/virtualization-in-react-improving-performance-for-large-lists-3df0800022ef
- **Date:** 2024
- **Key findings:** Significantly reduces DOM updates, memory usage, and render time by only rendering visible elements
- **Relevance:** Pattern 4 - Virtual scrolling benefits quantified

**[Research:47]** Smooth Scrolling with TanStack Virtual
- **Source:** Borstch
- **URL:** https://borstch.com/blog/development/achieving-smooth-scrolling-in-react-with-tanstack-virtual-best-practices
- **Date:** November 2024
- **Key findings:** TanStack Virtual most popular library (Nov 2024). Best practices: Wrap rows in React.memo(), render 1-2 additional items (overscan)
- **Relevance:** Pattern 4 - Current virtual scrolling best practices

**[Research:48]** Academic Research: Nostr Replication Overhead
- **Source:** arXiv 2402.05709 (Yiluo Wei & Gareth Tyson)
- **Date:** February 2024, revised September 2025
- **Key findings:** "Replication of posts across relays enhances censorship-resistance but introduces significant overhead." Proposed solutions: Control replication count + reduce retrieval overhead
- **Relevance:** Pattern 4 - Academic analysis of Nostr performance trade-offs

**[Research:49]** INP Replaces FID as Core Web Vital (March 2024)
- **Source:** Web.dev
- **URL:** https://web.dev/blog/inp-cwv-march-12
- **Date:** March 12, 2024
- **Key findings:** INP (Interaction to Next Paint) replaced FID as Core Web Vital on March 12, 2024. FID officially deprecated, removed from Google Search Console
- **Relevance:** Pattern 4 - Critical 2024 metric change

**[Research:50]** First Input Delay vs Interaction to Next Paint
- **Source:** Vercel
- **URL:** https://vercel.com/blog/first-input-delay-vs-interaction-to-next-paint
- **Date:** 2024
- **Key findings:** INP measures all interactions (not just first). Good INP: <200ms, Poor: >500ms
- **Relevance:** Pattern 4 - Understanding new metric requirements

**[Research:51]** Animation Performance and Frame Rate
- **Source:** MDN, MoldStud
- **URL:** https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate
- **URL:** https://moldstud.com/articles/p-exploring-the-impact-of-animation-on-performance-essential-insights-for-developers
- **Date:** Updated November 2025, September 2025
- **Key findings:** For 60fps: Browser has 16.7ms to execute scripts. GPU-accelerated properties (transform, opacity) provide smoother results
- **Relevance:** Pattern 4 - Smooth scrolling requirements

**[Research:52]** Rakuten Core Web Vitals Case Study
- **Source:** Web.dev
- **URL:** https://web.dev/case-studies/rakuten
- **Date:** 2024
- **Key findings:** Good LCP led to up to 61.13% increase in conversion rate, 26.09% increase in revenue per visitor
- **Relevance:** Pattern 4 - Business ROI of performance optimization

**[Research:53]** Core Web Vitals Business Impact
- **Source:** Blue Triangle, NitroPack
- **URL:** https://bluetriangle.com/blog/web-vitals-impact-lcp
- **URL:** https://nitropack.io/blog/post/improve-conversion-rates-cwv
- **Date:** 2024
- **Key findings:** Sites meeting Core Web Vitals: 24% reduction in page abandonment, 8-10% conversion increase per 0.1-second improvement
- **Relevance:** Pattern 4 - Performance's direct impact on retention and conversion

### Progressive Complexity & Feature Discovery

**[Research:12]** The 80/20 Rule in Feature Usage (Pareto Principle)
- **Citation:** Interaction Design Foundation, Think.Design
- **URLs:**
  - https://www.interaction-design.org/literature/topics/pareto-principle
  - https://think.design/blog/the-pareto-principle-in-ux/
  - https://lawsofux.com/pareto-principle/
  - https://www.cursorup.com/blog/the-pareto-principle
- **Date:** Updated September 2025 (IDF), December 2024 (Think.Design)
- **Key finding:** 80% of users use only 20% of features
- **Application:** Focus on 20% of design decisions that drive 80% of impact, design for majority first
- **Relevance:** Pattern 5 (Progressive Complexity)

**[Research:13]** Settings Hierarchy and Configuration Burden
- **Citation:** [UX research - to be researched]
- **Key finding:** [Summary]
- **Relevance:** Pattern 5 (Progressive Complexity)

### Data Consistency & Trust

**[Research:14]** User Trust in Distributed Systems
- **Citation:** [HCI research - to be found]
- **Key finding:** [Summary]
- **Relevance:** Pattern 6 (Cross-Client Consistency)

**[Research:15]** Eventual Consistency and User Experience
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

**[Example:4]** TikTok's For You Algorithm - Solving Cold Start Without Followers
- **Sources:** Multiple 2024-2025 analyses including:
  - Sprout Social: "How the TikTok Algorithm Works in 2025" - https://sproutsocial.com/insights/tiktok-algorithm/
  - Buffer: "TikTok Algorithm Guide 2026" - https://buffer.com/resources/tiktok-algorithm/
  - Jackson Mohsenin: "The algorithm isn't everything: TikTok's virtuous cycle" - https://jmohsenin.com/tiktok-strategy
- **Date:** 2024-2025
- **Key patterns:**
  - For You Page algorithm prioritizes content relevance over creator popularity
  - Users with zero followers can reach large audiences if content aligns with viewer interests
  - Algorithm analyzes user interactions (watch time, likes, comments), video information (captions, hashtags, sounds), and device settings
  - Accounts with fewer followers receive more than 75% of impressions from "For You" feed, confirming balanced content distribution
  - Short-form video provides rich signal - users can watch many quickly, algorithm learns preferences rapidly
  - 55% of TikTok users create content, ensuring sufficient content supply even for new users
  - 2024 updates: Analyzes emotional tone, gives exposure to positive/supportive/"feel-good" content
  - Community alignment: Rewards content that aligns with specific communities (#BookTok, #SportsOnTikTok)
  - STEM feed introduced late 2024, contributing to 45% increase in #Science hashtag posts
- **Relevance:** Pattern 2 (Content Discovery) - Demonstrates that algorithmic content discovery solves "need followers to get reach" chicken-and-egg problem. Nostr clients could implement similar "For You" feeds surfacing quality content from unknown npubs

**[Example:5]** Instagram Algorithm Updates (2024-2025) & Multiple Specialized Algorithms
- **Sources:**
  - Later: "How the Instagram Algorithm Works in 2025" - https://later.com/blog/how-instagram-algorithm-works/
  - Sprout Social: "How the Instagram Algorithm Works [Updated 2025]" - https://sproutsocial.com/insights/instagram-algorithm/
  - Shopify: "Instagram Algorithm: How It Works and Tips for 2025" - https://www.shopify.com/blog/instagram-algorithm
  - Buffer: "How the Instagram Algorithm Works: Your 2025 Guide" - https://buffer.com/library/instagram-feed-algorithm/
- **Date:** 2024-2025
- **Key patterns:**
  - **April 2024 update:** Rewards original content creation; heavily weights "shares per reach" (content sent via DMs) as deeper engagement than likes
  - **December 2024:** "Trial Reels" allows creators to test content with non-followers before sharing to audience
  - **Summer 2024:** Shift to views-focused analytics announced by Adam Mosseri
  - **Multiple specialized algorithms:** Feed algorithm prioritizes content from close connections; Reels algorithm focuses on entertainment value and gives newcomers viral potential regardless of follower count; Explore algorithm helps users discover new content using similar signals
  - Each algorithm optimizes for different user goals (staying connected vs discovering new content)
- **Relevance:** Pattern 2 (Content Discovery) - Nostr should prioritize original content and deep engagement signals like zaps over simple likes. Multiple specialized algorithms for different use cases improves user experience

**[Example:6]** Bluesky Starter Packs in Practice
- **Source:** Bluesky blog announcement, June 26, 2024
- **Key pattern:** "Personalized invites that allow you to bring friends directly into your slice of Bluesky!" - helps users joining the social network find interesting content right out of the gate. Existing users can add accounts and custom feeds to create a starter pack and share the link or QR code. Can recommend up to 150 people and up to 3 custom feeds.
- **Research backing:** Lancaster University study (January 2025) found 43% of follows during peak periods came from starter packs
- **Relevance:** Pattern 2 (Content Discovery) - Competitive threat showing what's possible. NIP-51 starter packs exist in Nostr but clients haven't widely implemented. Multiple sources cite Bluesky's better onboarding/discovery as why it grew bigger than Nostr

**[Example:7]** Mastodon Discovery Mechanisms (Federated Timeline Model)
- **Source:** [Decentralized social comparison - to be researched]
- **Key pattern:** Local/Federated timeline structure provides instant content discovery; Hashtag-based discovery
- **Relevance:** Pattern 2 (Content Discovery)

### Pattern 4: Performance & Perceived Speed Examples

**[Example:11]** Twitter/X Algorithm Performance
- **Source:** Sprout Social - "How the Twitter Algorithm Works" (2025)
- **URL:** https://sproutsocial.com/insights/twitter-algorithm/
- **Date:** 2025
- **Key patterns:** Recommendation algorithm runs ~5 billion times per day, completes each execution in under 1.5 seconds on average. Massive scale delivering personalized content
- **Relevance:** Pattern 4 (Performance) - Demonstrates scale and speed requirements for social feed algorithms

**[Example:12]** Instagram Algorithm and Performance
- **Source:** Sprout Social - "How the Instagram Algorithm Works [Updated 2025]"
- **URL:** https://sproutsocial.com/insights/instagram-algorithm/
- **Date:** 2025
- **Key patterns:** Instagram's AI picks 500 posts per user, ranks by predictions. Instagram explicitly advises: "Engage your audience in the first three seconds"
- **Relevance:** Pattern 4 (Performance) - First 3 seconds critical for engagement

**[Example:13]** TikTok Performance Optimization
- **Source:** Dash Social - "TikTok Benchmarks 2025"
- **URL:** https://www.dashsocial.com/social-media-benchmarks/tiktok
- **Date:** 2025
- **Key patterns:** Watch time prioritized—content that "stops scrolls cold" with grabber upfront. Brands post 6 times per week on average for frequent surfacing
- **Relevance:** Pattern 4 (Performance) - Stopping power and perceived instant loading

**[Example:14]** Starbucks PWA Case Study
- **Source:** Solutelabs - "The State of Progressive Web Applications" (2025)
- **URL:** https://www.solutelabs.com/blog/the-state-of-progressive-web-applications
- **Date:** 2025
- **Key patterns:** Offline functionality led to 2x increase in daily active users and 53% rise in order completions. PWAs typically weigh <1 megabyte, sites load in less than 1 second
- **Relevance:** Pattern 4 (Performance) - PWA performance benefits with concrete metrics

**[Example:15]** Discord Performance Improvements (2024-2025)
- **Source:** Discord Update Changelog - December 19, 2024
- **URL:** https://discord.com/blog/discord-update-december-19-2024-changelog
- **Date:** December 19, 2024
- **Key patterns:** 84% reduction in overall crash rate on iOS (August 2024), 30% faster server switching on mobile, up to 80% faster GIF Picker loading times, ~25% reduction in API latency
- **Relevance:** Pattern 4 (Performance) - Specific improvements (crash reduction, server switching speed, API latency) applicable to Nostr's real-time needs

### Pattern 3: Core Interaction Examples

**[Example:6]** Instagram Posting and Confirmation (2024)
- **Source:** "How the Instagram Algorithm Works in 2025" - Later
- **URL:** https://later.com/blog/how-instagram-algorithm-works/
- **Date:** 2024-2025
- **Key patterns:** Upload progress bar, "Posted" confirmation. 2024 algorithm now heavily weights "shares per reach" as key engagement signal, showing Instagram prioritizes reliable delivery confirmation
- **Relevance:** Pattern 3 - Mainstream app example of clear posting feedback

**[Example:7]** TikTok Instant Content Display (2024)
- **Source:** "5 TikTok UI Choices That Made the App Successful" - Iterators
- **URL:** https://www.iteratorshq.com/blog/5-tiktok-ui-choices-that-made-the-app-successful
- **Date:** 2024
- **Key patterns:** Shows content immediately with no loading state. Up/down swiping is "game-changer" - intuitive and effortless navigation. 100ms creates illusion of instantaneous response
- **Relevance:** Pattern 3 - Example of optimistic loading and instant feedback

**[Example:8]** Apple Human Interface Guidelines - Action Feedback (2024)
- **Source:** "Human Interface Guidelines" - Apple Developer
- **URL:** https://developer.apple.com/design/human-interface-guidelines/
- **Date:** 2024
- **Key patterns:** Give users clear and consistent feedback. Ensure understanding of what's happening at every stage. Inform about errors clearly. Visually indicate progress with loading bars. Provide notifications for completion. Use animations, sounds, haptic feedback to confirm actions
- **Relevance:** Pattern 3 - Design system guidance on interaction feedback

**[Example:9]** Material Design 3 - Responsive Feedback (2024)
- **Source:** Material Design 3 articles
- **Date:** 2024
- **Key patterns:** Use motion for visual feedback (clicks, submissions). Components respond instantly to user inputs. Provide clear feedback, enhance overall experience. Responsive feedback is essential for interactivity. Spring-like motion - animations bounce, stretch, respond organically
- **Relevance:** Pattern 3 - Design system approach to interaction responsiveness

**[Example:10]** Social Media Management Tools - Retry Patterns (2024)
- **Source:** SocialBee, SmarterQueue, Vista Social
- **Date:** 2024
- **Key patterns:** For temporary platform bugs - simply re-queue and retry. For post issues (too long, duplicate) - must edit before re-queuing. Rate limiting - wait specified period, slow down activity rate
- **Relevance:** Pattern 3 - Real-world retry pattern implementations

### Progressive Disclosure

**[Example:10]** Slack Settings Hierarchy
- **Source:** [Product analysis]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 5 (Progressive Complexity)

**[Example:11]** Apple iOS Progressive Feature Education
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
- **Key details:** Defines kind 3 events for following lists. Each new contact list event is a replaceable event that supersedes previous ones. Must contain all pubkeys the user is following, as event replaces previous list entirely.
- **Relevance:** Pattern 3 (Core Interactions - follow/unfollow reliability), Pattern 6 (Cross-Client Consistency)

**[Protocol:3]** NIP-25: Reactions
- **Source:** https://github.com/nostr-protocol/nips/blob/master/25.md
- **Key details:** Defines kind 7 events for reactions/likes. Each reaction references the event being reacted to using 'e' and 'p' tags. Reactions should be published to author's relays and user's write relays.
- **Relevance:** Pattern 3 (Core Interactions - reaction/like reliability)

**[Protocol:4]** NIP-46: Nostr Connect (Signers)
- **Source:** https://github.com/nostr-protocol/nips/blob/master/46.md
- **Relevance:** Pattern 1 (Onboarding), Pattern 5 (Progressive Complexity)

**[Protocol:5]** NIP-65: Relay List Metadata (Outbox Model)
- **Source:** https://github.com/nostr-protocol/nips/blob/master/65.md
- **Key details:** Defines kind 10002 events for user's relay preferences. Helps other users discover which relays to use when looking for someone's content or publishing content meant for them to see.
- **Relevance:** Pattern 3 (Core Interactions - relay coordination), Pattern 5 (Progressive Complexity), Pattern 6 (Cross-Client Consistency)

**[Protocol:6]** NIP-57: Lightning Zaps
- **Source:** https://github.com/nostr-protocol/nips/blob/master/57.md
- **Relevance:** Pattern 2 (Content Discovery - quality signal), Pattern 3 (Core Interactions - zap notifications)

**[Protocol:7]** Event Kinds Reference
- **Source:** [NIPs repository]
- **Key kinds:** Kind 0 (metadata), Kind 1 (notes), Kind 3 (contacts)
- **Relevance:** Multiple patterns

### Nostr Design Resources

**[Protocol:8]** Nostr Design - UX Guidelines
- **Source:** https://nostrdesign.org/
- **Relevance:** All patterns (community design resource)

**[Protocol:9]** Nostr Protocol Specification
- **Source:** [Official docs]
- **Relevance:** All patterns (foundational)

---

## 5. User Feedback & Quotes

### Onboarding & First-Run Experience

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

**[User:17]** Key management remains a blocker for adoption
- **Source:** "Managing Nostr Keys and Signing Devices" (Substack)
- **URL:** https://onnostr.substack.com/p/managing-nostr-keys-and-signing-devices
- **Date:** March 2025
- **Quote:** "A protocol based entirely on public/private key pairs being used as identities cannot gain traction and adoption if people are burning their accounts by accident or handing it over to scammers"
- **Key findings:**
  - Hardware signers: "Non-technical users aren't going to onboard by buying or building a device"
  - Extension signers create friction when moving between desktop and mobile
  - "Nostr has a very tight complexity budget when onboarding new users"
- **Relevance:** Pattern 1 (Onboarding) - March 2025 analysis confirms key management is STILL a blocker

**[User:18]** Nostr Design onboarding guidance
- **Source:** Nostr Design reference documentation
- **URL:** https://nostrdesign.org/docs/reference-designs/onboarding/
- **Date:** 2024 (actively maintained)
- **Quote:** Relay selection is "high friction" that should be minimized during onboarding
- **Guidance provided:**
  - Defer key management for a time convenient to user rather than overwhelming upfront
  - Customize feeds based on users' preferred interests instead of throwing into Global
  - Segment recommendations based on chosen interests
- **Relevance:** Pattern 1 (Onboarding), Pattern 5 (Progressive Complexity) - Ecosystem recognition of widespread onboarding problems

**[User:19]** Damus onboarding improvements tracker (ACTIVE)
- **Source:** GitHub Issue #2642, Damus repository
- **URL:** https://github.com/damus-io/damus/issues/2642
- **Date:** Opened November 6, 2024; Last updated February 4, 2025
- **Status:** Open, actively maintained
- **Problems identified:**
  - Profile pre-caching needed to reduce loading states
  - Cold start optimization still pending
  - Development mode cold start listed as technical priority
- **Relevance:** Pattern 1 (Onboarding) - Active work in Feb 2025 proves problems persist

**[User:20]** Damus considering removing account creation step
- **Source:** GitHub Issue #3207, Damus repository
- **URL:** https://github.com/damus-io/damus/issues/3207
- **Date:** Opened August 22, 2025
- **Status:** Open
- **Quote:** "Remove the 'create account' step during new app installation's onboarding sequence, based on the hypothesis that lower friction improves first-time user experience"
- **Relevance:** Pattern 1 (Onboarding) - Aug 2025 shows account creation friction remains critical enough to consider eliminating entirely

**[User:21]** Nstart standalone onboarding tool
- **Source:** Hacker News Show HN post / https://start.njump.me
- **URL:** https://news.ycombinator.com/item?id=43001303
- **Date:** February 2025
- **Description:** A standalone Nostr onboarding tool where users can be "automagically logged into the app, without needing to touch their keys/bunker"
- **Relevance:** Pattern 1 (Onboarding) - Creation of separate onboarding service in Feb 2025 proves client-level onboarding is too complex

**[User:15]** "Traditional apps win by having much better content selection"
- **Source:** "The State of Nostr Clients" analysis by karnage
- **URL:** https://karnage.npub.pro/post/1711761836895/
- **Date:** March 29, 2024
- **Full quote:** "Traditional apps win simply by having much better content selection - you get to see a variety of interesting things that Nostr simply can't match"
- **Additional data:** DAU stuck at 10-12k trusted pubkeys, users need 5-6 different clients
- **Relevance:** Pattern 2 (Content Discovery) - Direct comparison showing Nostr's content discovery deficit

**[User:22]** "Nostr is lacking in content, which could be the primary reason people are not sticking around"
- **Source:** "The State of Nostr Clients" by karnage
- **URL:** https://karnage.npub.pro/post/1711761836895/
- **Date:** March 29, 2024
- **Context:** Analysis of retention crisis based on nostr.band data
- **Relevance:** Pattern 2 (Content Discovery) - Content scarcity as primary retention killer

**[User:23]** "Nostr suffers from the chicken/egg problem where new users are needed to generate more content, and more content is needed to retain new users"
- **Source:** "The State of Nostr Clients" by karnage
- **URL:** https://karnage.npub.pro/post/1711761836895/
- **Date:** March 29, 2024
- **Context:** Cold start problem where empty feeds drive users away before they contribute content
- **Relevance:** Pattern 2 (Content Discovery) - The fundamental chicken-egg problem

**[User:24]** "Nostr does not seem to have any external growth loops, such as the ability to invite people by email with a single click"
- **Source:** "The State of Nostr Clients" by karnage
- **URL:** https://karnage.npub.pro/post/1711761836895/
- **Date:** March 29, 2024
- **Context:** No mechanisms to help users discover or invite others
- **Relevance:** Pattern 2 (Content Discovery) - No growth loops for network effects

**[User:25]** "Users are not notified when tagged, and people have to have a habit of opening the app to know if something is happening"
- **Source:** "The State of Nostr Clients" by karnage
- **URL:** https://karnage.npub.pro/post/1711761836895/
- **Date:** March 29, 2024
- **Context:** Discovery problem - users miss interactions
- **Relevance:** Pattern 2 (Content Discovery), Pattern 3 (Core Interactions) - Notification failures affect discovery

**[User:26]** "Habit formation of using a new app is important in the early usage phase and Nostr seems to have a weak spot here"
- **Source:** "The State of Nostr Clients" by karnage
- **URL:** https://karnage.npub.pro/post/1711761836895/
- **Date:** March 29, 2024
- **Context:** No triggers to bring users back, related to discovery
- **Relevance:** Pattern 2 (Content Discovery) - Weak habit formation due to poor discovery

**[User:27]** "The main problem of decentralized alternatives like Nostr is content discovery"
- **Source:** "A vision for content discovery and relay usage" by fiatjaf
- **URL:** https://fiatjaf.com/3f106d31.html
- **Date:** 2024
- **Context:** Recognized as a core architectural challenge in Nostr's decentralized design
- **Relevance:** Pattern 2 (Content Discovery) - Protocol-level discovery challenge acknowledged

**[User:28]** "It's only possible to search on what you have seen, so search engines will always have to crawl some parts of the network they chose to and index those to enable public search"
- **Source:** Nostr FAQ - "How can I search for content or users?"
- **URL:** https://nostr.com/
- **Date:** 2024
- **Context:** Search is limited by relay coverage and local content
- **Relevance:** Pattern 2 (Content Discovery) - Search limitations in decentralized architecture

**[User:29]** Nostr spam crisis - "500,000 daily spam messages in mid-February"
- **Source:** Nostr.band spam filter documentation and web research
- **URL:** https://spam.nostr.band/
- **Date:** February 2024
- **Full quote:** "Nostr was hit with approximately 500,000 daily spam messages in mid-February, consisting of ads for spam services, scams, and NSFW content"
- **Context:** Global feed usability severely impacted by spam
- **Relevance:** Pattern 2 (Content Discovery) - Feed quality crisis requiring spam filtering

**[User:30]** "There can't be a 'global' view of the network, as it would be full of spam, so indexers have to choose what to display"
- **Source:** Nostr FAQ - "If content is spread across multiple relays how can I be sure I'm seeing everything?"
- **URL:** https://nostr.com/
- **Date:** 2024
- **Context:** Architecture limitation affects discovery
- **Relevance:** Pattern 2 (Content Discovery) - No true global discovery feed possible

**[User:31]** Primal 2.0 addressing discovery problems
- **Source:** NoBS Bitcoin announcement / Primal 2.0 launch
- **URL:** https://www.nobsbitcoin.com/primal-v2-0/
- **Date:** November 21, 2024
- **Quote:** "Primal 2.0 was announced by miljan, founder and CEO of Primal, after the team worked for many months to reach this milestone. Primal now offers a much more comprehensive view of Nostr on its web and mobile apps, with the following additions: a Reads tab, an Explore tab, a Feed Marketplace, comprehensive Advanced Search options, and multiple performance improvements."
- **Context:** Major discovery innovation launched late 2024
- **Relevance:** Pattern 2 (Content Discovery) - Ecosystem response to discovery crisis

**[User:32]** Nstart onboarding wizard with auto-follow
- **Source:** NoBS Bitcoin - Nstart announcement
- **URL:** https://www.nobsbitcoin.com/nstart-nostr-onboarding-wizard/
- **Date:** January 2025
- **Quote:** "Nstart aims to simplify onboarding for new users to the Nostr protocol with an easy-to-use wizard that provides helpful hints about the protocol and exclusive features... Auto follow the contacts list of some old and trusted Nostr users"
- **Context:** Solves cold start by auto-following curated lists
- **Relevance:** Pattern 2 (Content Discovery) - Solution to empty feed problem launched January 2025

**[User:33]** Derek Ross on user-controlled discovery
- **Source:** Derek Ross Nostr post via NoBS Bitcoin coverage
- **URL:** https://www.nobsbitcoin.com/
- **Date:** January 2025
- **Quote:** "Content discovery on Nostr keeps improving, but I believe we still need to act as our own algorithms most of the time—and I actually prefer it that way"
- **Context:** Philosophy on discovery vs algorithms
- **Relevance:** Pattern 2 (Content Discovery) - Developer perspective on algorithmic vs manual discovery

**[User:16]** "Nostr is weird and hard to use"
- **Source:** Jack Dorsey interview with Mike Solana, Founders Fund
- **URL:** https://www.washingtonpost.com/technology/2024/05/21/jack-dorsey-twitter-bluesky-nostr/
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

{{< cards >}}
  {{< card link="/docs/patterns/01-onboarding" title="View Patterns" subtitle="See the 6 design patterns" icon="collection" >}}
  {{< card link="/docs/resources/methodology/" title="Methodology" subtitle="Research approach" icon="beaker" >}}
{{< /cards >}}

---

*Last updated: November 2025*
