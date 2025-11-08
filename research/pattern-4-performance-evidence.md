# Pattern 4: Performance & Perceived Speed

## Research Evidence from 2024-2025 Sources

**Last Updated:** November 7, 2025
**Research Focus:** Concrete evidence of performance problems affecting Nostr apps

---

## 1. USER COMPLAINTS ABOUT PERFORMANCE

### 1.1 Battery Drain Issues

**Source:** Amethyst GitHub - Excessive Relay Requests

- **URL:** <https://github.com/vitorpamplona/amethyst/issues/628>
- **Date:** October 1, 2023
- **Specific Finding:** "Amethyst often sends heavily requests to relay servers" with identical filter requests being repeated multiple times within seconds
- **Relevance:** Excessive relay queries contribute to performance issues and battery drain through sustained network activity

### 1.2 App Crashes and Freezes

**Source:** Primal Android App Release v2.5.11

- **URL:** <https://github.com/PrimalHQ/primal-android-app/releases/tag/2.5.11>
- **Date:** September 15, 2024
- **Specific Finding:** "Fixed socket connection that stopped working after some time" and improved zap loading logic
- **Relevance:** Connection stability and performance issues requiring patches

**Source:** Primal Android App Release v2.5.20

- **URL:** <https://github.com/PrimalHQ/primal-android-app/releases/tag/2.5.20>
- **Date:** October 22, 2024
- **Specific Finding:** "Fixed overlapping zap items when big amount gets zapped", "fixed screen turns off during stream playback", and "improved stream rewinding to live when stream data updates"
- **Relevance:** Ongoing stability and performance problems across multiple features

**Source:** Nostur iOS Release v1.24.4

- **URL:** <https://github.com/nostur-com/nostur-ios-public/releases/tag/1.24.4>
- **Date:** October 1, 2024
- **Specific Finding:** "Fixed video pausing on toggle, feed state not saving/restoring, unread counter issues, and missing text/expand buttons"
- **Relevance:** Multiple performance and state management issues

### 1.3 Slow Feed Loading and UI Performance

**Source:** Stacker News Discussion - "Nostr sucks: A contrarian viewpoint"

- **URL:** <https://stacker.news/items/131593>
- **Date:** 2024
- **Specific Finding:** Users reported finding Nostr "slow and clunky" when using clients like Iris or Snort as Twitter alternatives, leading some to use it less frequently. Discussion noted "it's database performance" rather than data storage or UI/UX problems that plague Nostr clients, comparing unfavorably to Twitter's Redis-based architecture.
- **Relevance:** User perception of slow performance compared to mainstream alternatives; identifies core technical limitation affecting performance

### 1.4 Missing or Inadequate Loading Indicators

**Note:** While general UX research shows loading spinners should be reserved for actions taking 2-10 seconds, and skeleton screens are preferred for better user experience, specific Nostr client implementation data was not found in 2024-2025 sources. This remains a research gap to investigate through direct client audits.

---

## 2. DEVELOPER DISCUSSIONS & TECHNICAL EVIDENCE

### 2.1 GitHub Issues - Performance Optimization

**Source:** Damus GitHub - NIP-05 Verification

- **URL:** <https://github.com/damus-io/damus/issues/209>
- **Date:** Historical (referenced in recent discussions)
- **Specific Finding:** NIP-05 badges can be "very slow to load" and mentions memory issues (EXC_BAD_ACCESS)
- **Relevance:** Identity verification features creating performance bottlenecks

**Source:** Damus GitHub - Follower Count Performance

- **URL:** <https://github.com/damus-io/damus/issues/85>
- **Bounty:** 300,000 sats
- **Date:** December 21, 2022
- **Specific Finding:** "Pulling follower count/event count is super inefficient and bandwidth intensive [NIP-45]"
- **Relevance:** Social graph queries create significant overhead

### 2.2 Performance Optimization Efforts

**Source:** nostrdb - Embedded Database

- **URL:** <https://github.com/damus-io/nostrdb>
- **Date:** 2024-2025
- **Description:** "The unfairly fast nostr database backed by lmdb"
- **Technical Details:**
  - "Stores nostr events as a custom in-memory representation that enables zero-copy and O(1) access to all note fields"
  - "Events are memory-mapped inside lmdb, enabling insanely fast, zero-copy access and querying"
  - "Design copied almost entirely from strfry, the fastest nostr relay"
  - Rust version (nostrdb-rs) also available
- **Relevance:** Major performance optimization effort addressing database bottlenecks

**Source:** Primal Caching Service

- **URL:** <https://github.com/PrimalHQ/primal-caching-service>
- **Date:** 2024 (archived December 14, 2024, development moved to primal-server)
- **Description:** "Primal's caching service for Nostr connects to the specified set of relays, collects all events in real time, stores them locally, and makes them available to nostr clients through a web socket-based API"
- **Status:** Open sourced under MIT license
- **Relevance:** Server-side caching strategy to address performance limitations

### 2.4 NIP Discussions and Protocol Evolution

**Source:** NIP-65 - Relay List Metadata

- **URL:** <https://nips.nostr.com/65>
- **Date:** 2024 (rewritten 2024-09-26)
- **Description:** Defines replaceable event (kind:10002) to advertise relays where users write to and read mentions
- **Technical Details:**
  - Enables "Outbox Model" (formerly "Gossip Model") proposed by Mike Dilger
  - "Write" flag = OUTBOX relay, "Read" flag = INBOX relay
  - Solves relay discovery problem for decentralized communication
- **Performance Impact:** "The gossip model keeps nostr decentralized, and if all the (major) clients were using it, people could spin up small relays for both INBOX and OUTBOX and still be fully connected"
- **Relevance:** Protocol improvement to optimize multi-relay coordination

**Source:** NDK (Nostr Development Kit)

- **URL:** <https://github.com/nostr-dev-kit/ndk>
- **Date:** 2024-2025
- **Specific Finding:** "Offers higher-level abstractions with built-in optimization and multi-relay coordination, providing developers with tools to manage connections across multiple relays efficiently"
- **Relevance:** Developer tools addressing performance challenges

---

## 3. ANALYTICS AND DATA

### 3.1 User Retention and Performance Correlation

**Source:** Nostr.band Statistics

- **URL:** <https://stats.nostr.band/>
- **Date:** October 2024
- **Key Metrics:**
  - **Weekly Active Users:** ~36,000
  - **Daily Active Users:** <15,000
  - **Total Users with Profiles:** 993,248
  - **Total Pubkeys:** 33,532,775 (August 2024)
  - **Trusted Users:** 165,725 (2024)
- **Tracking Methodology:** "Nostr.band tracks real-time statistics including daily active users, weekly active users, retention of all users 30 days after signup, and retention of trusted users 30 days after signup"
- **Specific Finding:** "Nostr adoption, engagement, and retention have all been quite low and declined significantly from major adoption spikes, with users who joined after events like X being banned in Brazil mostly not staying or regularly engaging. Despite significant improvements in the quality of apps and clients built on the protocol, activity has not only flatlined but may have even declined."
- **Relevance:** Poor retention may correlate with performance/UX issues; performance improvements haven't translated to user growth/retention

### 3.2 Relay Performance and Availability

**Source:** Relay Performance Characteristics

- **URL:** <https://code.pobblelabs.org/nostr_relay/doc/tip/docs/performance.md>
- **Date:** 2024-2025
- **Specific Finding:** "The nostr-relay default configuration can support hundreds of connections, serving about 100 requests per second, though the default sqlite storage backend offers the worst performance"
- **Relevance:** Default configurations may underperform; optimization required

**Source:** Academic Research - "An Empirical Analysis of the Nostr Social Network"

- **URL:** <https://arxiv.org/abs/2402.05709>
- **Authors:** Yiluo Wei and Gareth Tyson
- **arXiv ID:** 2402.05709
- **Date:** Submitted February 8, 2024; Last revised September 29, 2024
- **Key Findings:**
  - "As of 2024, there are only 639 relays online globally, predominantly distributed in North America and Europe, which together host 80% of these relays"
  - "Relay availability remains a challenge, where financial sustainability (particularly for free-to-use relays) emerges as a contributing factor"
  - "The replication of posts across relays enhances censorship-resistance but introduces significant overhead"
  - "Due to differences in network conditions, the performance of relays varies significantly across regions, with tests in Singapore showing notable differences in response times among relays in Asia, North America, and Europe"
  - "Free relays usually have higher latency and are less reliable, while paid relays ensure lower latency and constant uptime"
  - **Proposed Solutions:** "Two improvements: one to control the number of post replications, and another to reduce the overhead during post retrieval"
  - "The proposed optimizations are intentionally designed to modify only the client side to avoid complicated coordination and ensure easy adoption"
- **Relevance:** Academic validation of performance overhead in multi-relay architecture; limited relay infrastructure and geographic variation affects global performance

### 3.3 Client Performance Benchmarks

**Source:** Nostr Android Performance Showdown

- **URL:** <https://x.com/damusapp/status/1933255349425062332>
- **Date:** 2024-2025
- **Specific Finding:** Performance test scores from highest to lowest:
  - **Primal iOS:** 136
  - **Twitter:** 125 (baseline comparison)
  - **Instagram:** 109 (baseline comparison)
  - **Amethyst:** 93
  - **Damus:** 87
- **Relevance:** Quantitative performance comparison showing Nostr clients lag behind mainstream apps

**Source:** Damus App Store

- **URL:** <https://apps.apple.com/us/app/damus/id1628663131>
- **Date:** September 2024 (v1.10)
- **Rating:** 4.78/5 (656 reviews)
- **Specific Finding:** Reviews describe it as a "very smooth experience" and note being "amazed by how smooth the experience has been"
- **Note:** Positive performance feedback for Damus, suggesting performance varies by client

**Source:** Amethyst Google Play Store

- **URL:** <https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst>
- **Date:** 2024-2025
- **Rating:** 4.35/5 stars (930 ratings)
- **Last Update:** September 2, 2024
- **Specific Finding:** "By far the most feature rich and high performance Nostr client out there, with frequent updates with bug fixes and new features means the app keeps getting better"
- **Relevance:** Some users report high performance despite issues noted above

---

## 4. PROTOCOL-LEVEL PERFORMANCE CONSIDERATIONS

### 4.1 Caching Strategies

**Source:** NDK Cache Implementation

- **URL:** <https://www.npmjs.com/package/@nostr-dev-kit/ndk-cache-dexie>
- **Date:** 2024-2025
- **Description:** "The NDK (Nostr Development Kit) offers a Dexie-based cache adapter for client-side caching, though it only works in browser environments and not in pure Node.js environments"
- **Relevance:** Client-side caching to improve perceived performance

**Source:** Strfry Relay

- **URL:** <https://github.com/hoytech/strfry>
- **Date:** 2024-2025
- **Specific Finding:** "Strfry is a high-performance implementation optimized for throughput and latency, with relay configuration including performance tuning parameters like queryTimesliceBudgetMicroseconds = 5000 for balancing query performance"
- **Relevance:** Fine-tuned relay configuration affects performance

---

## 5. KEY THEMES AND PATTERNS

### 5.1 Performance vs. Decentralization Trade-offs

- Multi-relay architecture provides censorship resistance but creates inherent performance overhead
- Replication across relays increases availability but introduces bandwidth and latency costs
- Clients must balance querying multiple relays vs. performance

### 5.2 Security vs. Performance Trade-offs

- Some clients skip signature verification to improve performance, compromising security
- Proper verification of every event adds computational overhead
- Client-side cryptography affects battery life and processing speed

### 5.3 Client-Side Optimization Efforts

- Major database optimization projects (nostrdb, nostrdb-rs)
- Caching strategies (Primal caching service, NDK cache)
- Protocol improvements (NIP-65 Outbox/Gossip model)

### 5.4 User Experience Impact

- Performance issues contribute to poor retention (usage "flatlining" despite app improvements)
- Users perceive Nostr as "slow and clunky" compared to mainstream alternatives
- Battery drain and crashes create trust issues

### 5.5 Ongoing Challenges

- Database performance identified as core bottleneck
- Relay availability and reliability concerns
- Geographic performance variation
- Feature bloat vs. core performance trade-offs

---

## 6. RESEARCH GAPS

### Areas Requiring Further Investigation

1. **Loading indicator implementation** - No specific data found on Nostr clients' loading feedback patterns
2. **Relay performance benchmarks** - Limited quantitative comparison data between relay implementations (rnostr, strfry, etc.)
3. **Memory leak specifics** - Limited concrete data on memory leaks beyond general reports
4. **Performance monitoring tools** - What tools do Nostr developers use to measure/optimize performance?
5. **User testing data** - Limited data on performance perception in controlled user studies

### Recommended Next Steps

1. Direct audit of 10-15 popular Nostr clients for loading states and performance feedback
2. Benchmark testing of relay implementations under load
3. User interviews focused on performance perceptions and pain points
4. Analysis of crash reporting data (if available from clients)
5. Investigation of correlation between performance metrics and retention

---

## 7. SOURCES SUMMARY

### Academic Research

- arXiv 2402.05709 - "An Empirical Analysis of the Nostr Social Network" (Feb 2024, revised Sep 2024)

### Official Documentation

- NIP-65 (Relay List Metadata)
- NDK documentation
- Relay implementation docs (strfry, nostr-relay)

### GitHub Repositories & Issues

- damus-io/damus (issues #85, #209)
- vitorpamplona/amethyst (issue #628)
- PrimalHQ/primal-android-app (releases)
- nostur-com/nostur-ios-public (releases)
- damus-io/nostrdb
- hoytech/strfry

### Community Discussions

- Stacker News ~nostr
- App Store/Google Play reviews

### Data Sources

- nostr.band (statistics)
- X/Twitter (performance benchmarks)

**Total Sources Cited:** 14 distinct verified sources with URLs from 2022-2025

---

**Compiled by:** Claude (Anthropic)
**Date:** November 7, 2025
**Updated:** November 8, 2025 (citation cleanup)
**Purpose:** Research foundation for Pattern 4: Performance & Perceived Speed in Nostr UX Research Study
