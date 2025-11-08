---
title: "Content Discovery & Feed Quality"
patternNumber: 2
problem: "Empty feeds, Traditional apps win by having better content selection"
impact: "Users bounce because feed is boring"
solution: "Smart defaults, starter packs, algorithmic discovery, search that works"
showToc: true
weight: 2
lastUpdated: "November 2025"
---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Universal Principles (70%)](#universal-principles-70)
3. [Nostr-Specific Considerations (30%)](#nostr-specific-considerations-30)
4. [Pattern Library: Concrete Solutions](#pattern-library-concrete-solutions)
5. [Anti-Patterns: What Not To Do](#anti-patterns-what-not-to-do)
6. [Validation Checklist](#validation-checklist)
7. [Citations & Sources](#citations--sources)

---

## Problem Statement

### Current State

**The empty feed problem:**
- New Nostr users report empty or boring feeds after signup [[User:22]](#user-22)
- "Traditional apps win simply by having much better content selection - you get to see a variety of interesting things that Nostr simply can't match" [[User:15]](#user-15)
- Cold start problem drives early abandonment: "Nostr is lacking in content, which could be the primary reason people are not sticking around" [[User:22]](#user-22)

**Discovery failures:**
- "The main problem of decentralized alternatives like Nostr is content discovery" [[User:27]](#user-27)
- Global feed unusable due to spam: Nostr hit with approximately 500,000 daily spam messages in mid-February 2024 [[User:29]](#user-29)
- "There can't be a 'global' view of the network, as it would be full of spam" [[User:30]](#user-30)
- Search limitations: "It's only possible to search on what you have seen" [[User:28]](#user-28)
- "Nostr does not seem to have any external growth loops, such as the ability to invite people by email" [[User:24]](#user-24)

**The retention impact:**
- 30-day retention trending to 0% for recent cohorts [[Data:1]](#data-1)
- Only ~36,000 weekly active users as of October 2024; less than 15,000 daily active [[Data:2]](#data-2)
- Post-viral-event retention failure: adoption spikes from X ban in Brazil, Reddit/TikTok events showed poor retention [[Data:2]](#data-2)
- "Nostr suffers from the chicken/egg problem where new users are needed to generate more content, and more content is needed to retain new users" [[User:23]](#user-23)

### Root Causes

1. **No algorithmic curation**: Pure chronological feeds without intelligent ranking [[User:27]](#user-27)
2. **Cold start unsolved**: No default follows or starter content until recent innovations (Nstart, January 2025) [[User:32]](#user-32)
3. **Relay fragmentation**: Content scattered across relays, hard to aggregate [[User:28]](#user-28)
4. **Spam and noise**: 500K daily spam messages overwhelmed global feeds (February 2024) [User:29, Data:5]
5. **Search limitations**: Full-text search difficult in decentralized architecture [[User:28]](#user-28)
6. **No growth loops**: No email invites, weak notifications, poor habit formation [User:24, User:25, User:26]

### Why This Matters

> "Nostr is lacking in content, which could be the primary reason people are not sticking around after trying it." [[User:22]](#user-22)

**Success metric:** Session length and posts-per-session in first 7 days directly correlate with D30 retention. With Nostr's retention trending toward 0% [[Data:1]](#data-1), content discovery is THE critical problem to solve.

---

## Universal Principles (70%)

These principles apply to any social application, regardless of underlying architecture.

### 1. The Cold Start Problem: Solve It or Die

**Research backing:** Bluesky's starter packs (curated lists of accounts users can follow with one click) accounted for 43% of follow actions during peak periods. Users included in starter packs received 85% more followers and posted 60% more than similar users not included. [[Research:4]](#research-4)

**Core principle:** New users with empty feeds abandon immediately. Every social app must solve: "What do I show someone who follows nobody?"

**Mainstream solutions:**
- **TikTok:** Algorithm-first, no following required. For You Page shows trending content immediately. Users with zero followers can reach large audiences if content aligns with viewer interests. [[Example:4]](#example-4)
- **Instagram:** Browse mode with trending content, then signup wall. Multiple specialized algorithms: Feed (connections), Reels (entertainment + viral potential for newcomers), Explore (discovery). [[Example:5]](#example-5)
- **Twitter/X:** Suggests accounts during signup, shows "For You" algorithmic feed by default [[Example:5]](#example-5)
- **Bluesky:** Starter packs allow users to follow up to 150 people + 3 custom feeds with one click, solving empty feed problem. [[Example:6]](#example-6)
- **Mastodon:** Local/Federated timeline provides instant content discovery [[Example:7]](#example-7)

**Academic research identifies cold start strategies:** Using social network information from existing platforms, collaborative filtering based on similar user behavior, hybrid models, incorporating user demographics and stated preferences, community detection to identify similar users. [[Research:5]](#research-5)

**Key metrics:**
- Time to first interesting content: <30 seconds
- Posts viewed in first session: >20 (establishes habit)
- "Was your first session interesting?" user survey

### 2. Feed Algorithms: Balancing Discovery and Control

**Research backing:** Georgetown University's "Better Feeds" report (March 2025) found that moving users from algorithmic to reverse-chronological feeds decreased time spent on platform over 3 months. Instagram users compensated by increasing TikTok usage by 36% and YouTube by 20%; Facebook users moved to Reddit (+52%) and YouTube (+21%). **Critically**: Chronological feeds did NOT reduce polarization as commonly believed. [[Research:6]](#research-6)

**The tradeoff:**
- **Chronological feeds:** User control, transparency, but requires manual curation and leads to platform abandonment [[Research:6]](#research-6)
- **Algorithmic feeds:** Better discovery, higher engagement, but must avoid pure engagement optimization that amplifies divisive content [[Research:7]](#research-7)

**Successful hybrid approaches:**
- Multiple feed types with clear switching (Mastodon: Home/Local/Federated)
- Algorithmic "For You" + chronological "Following" (Twitter/X)
- User-configurable feed preferences (Bluesky custom feeds)
- Specialized algorithms for different goals: Instagram uses separate algorithms for Feed, Reels, and Explore [[Example:5]](#example-5)

**What makes a good algorithm:**
- Prioritizes content from accounts user explicitly follows
- Surfaces high-engagement content from extended network
- Balances familiar (people you follow) with novel (discovery)
- Responds quickly to engagement signals
- **WARNING:** Avoids pure engagement optimization that amplifies emotionally charged, divisive content users report makes them feel worse [[Research:7]](#research-7)
- Incorporates user satisfaction signals (muting, reporting, explicit feedback) alongside engagement metrics [[Research:7]](#research-7)
- Transparent about why content is shown

### 3. Content Quality Signals

**Research backing:** Instagram's April 2024 algorithm update heavily weights "shares per reach" (content sent via DMs) as deeper engagement than likes. [[Example:5]](#example-5)

**Quality indicators across platforms:**
- **Engagement rate:** Likes, comments, shares relative to follower count
- **Velocity:** How quickly content gains engagement
- **Recency:** Fresh content prioritized over old
- **Relevance:** Matches user interests (topics, hashtags, accounts)
- **Social proof:** "People you follow liked this"

### 4. Search and Discovery Mechanisms

**Critical shift:** Two in five Americans currently use TikTok as a search engine. Over 50% of Gen Z and Millennials prefer social media for product discovery, recommendations, and research over traditional search engines. Platforms are no longer just for scrolling—they're where consumers look for information. [[Research:8]](#research-8)

**User expectations from mainstream apps:**
- **Search:** Find people by name/username, find posts by keyword - now TABLE STAKES, not optional [[Research:8]](#research-8)
- **Explore/Trending:** See what's popular right now
- **Recommendations:** "People you might like" based on follows
- **Topics/Hashtags:** Browse content by subject
- **Curated lists:** Topic-specific or editor-curated accounts

**Implication for Nostr:** Search functionality must be a core discovery mechanism, not an afterthought. Users expect to search for topics, hashtags, and people as a primary way to find content.

### 5. Notification Strategy for Engagement

**Research backing:** "Users are not notified when tagged, and people have to have a habit of opening the app to know if something is happening" - identified as a weak spot in Nostr's habit formation. [User:25, User:26]

**What brings users back:**
- Direct interactions: Replies, mentions, likes on your content
- Social proof: "Person you follow just posted"
- Discovery: "Trending in your network"
- Re-engagement: "You haven't checked in today, here's what you missed"

**Critical balance:** Useful notifications vs notification fatigue

**Nostr-specific challenge:** No central push notification server. Requires client polling, push notification relay, NIP-46 signer with notifications, or Unified Push protocol.

---

## Nostr-Specific Considerations (30%)

### Challenge 1: Decentralized Discovery Without Central Algorithm

**The protocol reality:**
- No central server to run recommendation algorithms
- Each client must implement its own discovery logic
- Relay diversity means content is fragmented

**Nostr advantages:**
- Client diversity enables experimentation with feed algorithms
- No platform-enforced algorithmic manipulation
- User can choose clients based on discovery approach

**Nostr disadvantages:**
- No shared recommendation infrastructure
- Inconsistent discovery experience across clients
- Harder to bootstrap network effects

**Current state:** Major innovation launched November 21, 2024: Primal 2.0 offers Feed Marketplace, Explore tab, comprehensive Advanced Search, and Reads tab with topic-specific feeds (Bitcoin Reads, Philosophy Reads, News Reads, etc.). [[User:31]](#user-31) This addresses longstanding discovery weaknesses identified across the ecosystem.

### Challenge 2: Multi-Relay Content Aggregation

**The complexity:**
- Content scattered across multiple relays
- Different users use different relay sets
- Must query multiple relays and deduplicate
- Slow/dead relays delay content loading

**Current approaches:**
- Query user's relay list for followed accounts [[Protocol:5]](#protocol-5)
- Use relay hints from user profiles [Protocol:NEEDED]
- Implement timeout/fallback for slow relays
- Cache content for offline reading

**Trade-offs:**
- Query all relays = slow, comprehensive
- Query subset = fast, might miss content
- Cache aggressively = fast, stale data

### Challenge 3: Web of Trust as Discovery Mechanism

**The concept:** Use social graph to surface quality content and filter spam.

**Implementation approaches:**
- "Friends of friends" recommendations
- Content from accounts followed by people you trust
- Weighted by proximity in social graph
- Filter spam by excluding accounts with no WoT connections

**Benefits:**
- Organic discovery through real social connections
- Spam resistance (spammers have weak WoT)
- No central authority deciding what's "good"

**Challenges:**
- Computationally expensive to calculate
- Privacy concerns (reveals social graph structure)
- Echo chamber risk (only see similar viewpoints)
- Cold start: New users have no WoT

**Current implementations:** Web of Trust filtering deployed by filter.nostr.wine relay (September 2024): "When you connect to our relay, we gather all of your follows as well as any account they follow and filter your global event requests to include only content from your web of contacts." [Research note: Filter relay documentation]

This creates spam resistance and discovery improvement by limiting global feeds to follows+follows network.

### Challenge 4: Zaps as Quality Signal

**The unique advantage:** Zaps (Lightning payments) [[Protocol:5]](#protocol-5) provide strong quality signal that can't be faked at scale.

**Why it works:**
- Costs real money to zap, unlike free likes
- High zap counts indicate genuine value to community
- Can weight by zap amount (100 sats > 10 sats)
- Sybil-resistant: Expensive to fake engagement

**Discovery applications:**
- "Most zapped posts today" as trending feed
- Zap velocity for viral content detection
- Total zaps as reputation/credibility score
- Weighted feed ranking by zap engagement

**Current usage:** Primal 2.0's trending feeds likely incorporate zap signals as quality indicators. [[User:31]](#user-31) This is a unique Nostr advantage that mainstream platforms lack—authentic monetary endorsement as a ranking signal.

### Challenge 5: Relay-Based Content Filtering & Specialization

**The opportunity:** Different relays can specialize in content types or quality levels.

**Potential patterns:**
- Topic-specific relays (bitcoin, art, music)
- Curated relays (invite-only, high signal)
- Regional/language-specific relays
- Paid relays (spam barrier)

**Discovery implications:**
- "Browse content from [relay name]" as discovery feature
- Relay reputation affects content quality
- Users can subscribe to high-quality relay feeds
- Community-oriented relays can provide useful search by indexing notes locally, already filtered and scoped to that relay's topic [Research note: Search functionality discussions]

**Current state:** Primal 2.0 Feed Marketplace (November 2024) offers topic-specific feeds: Nostr Reads, Bitcoin Reads, Philosophy Reads, News Reads, and custom feeds available on the marketplace. [[User:31]](#user-31) This demonstrates relay/feed specialization in practice.

---

## Pattern Library: Concrete Solutions

### Pattern A: Smart Default Follows

**Problem:** New users follow nobody and see empty feeds.

**Solution:** Provide curated starter follows based on user interests.

**Implementation approaches:**

**Option 1: Interest-Based Onboarding**
```
During signup:
1. "What are you interested in?"
   [ ] Bitcoin [ ] Art [ ] Technology [ ] Music [ ] Other
2. Based on selection, auto-follow 10-20 high-quality accounts
3. User can unfollow later, but starts with populated feed
```

**Option 2: "Popular Accounts" Recommendation**
```
After signup:
1. Show feed with mix of:
   - Top accounts by follower count
   - Most active posters in last 24h
   - High zap recipients
2. In-feed prompts: "Follow @user to see more like this"
3. Follows gradually populate personalized feed
```

**Option 3: Import From Other Platforms**
```
"Find your Twitter follows on Nostr"
1. Upload Twitter following list (CSV export)
2. Match Twitter handles to Nostr npubs (via NIP-05 or manual mapping)
3. Auto-follow matched accounts
4. Instant network portability
```

**Examples from mainstream apps:**
- Instagram: Suggests accounts from contacts and popular accounts during signup [[Example:5]](#example-5)
- Twitter: "Who to follow" based on interests and popular accounts
- Mastodon: Server-specific featured accounts [[Example:7]](#example-7)
- **Bluesky**: Starter packs allow users to follow up to 150 people + 3 custom feeds with one click. 43% of follows during peak periods came from starter packs, and users in starter packs got 85% more followers. [Research:4, Example:6]

**Nostr implementation:**
- **Nstart** (January 2025): Onboarding wizard that can "Auto follow the contacts list of some old and trusted Nostr users" [[User:32]](#user-32)
- **NIP-51 starter packs**: Protocol spec exists (kind 39089: "a named set of profiles to be shared around with the goal of being followed together") but clients haven't widely implemented [Research note: NIP-51]
- **Opportunity**: Nostr has the protocol support but needs more client implementations

**Validation:**
- Track: % of new users with >10 follows after first session
- Measure: Session length for users with starter follows vs empty
- Survey: "Was your first feed interesting?"

**Competitive urgency:** "Why has Bluesky grown bigger than Nostr?" - multiple 2024 comparisons cite Bluesky's better onboarding and discovery (starter packs) as a key reason. [Research note: Bluesky comparison discussions]

---

### Pattern B: Algorithmic "For You" / Discovery Feed

**Problem:** Chronological-only feeds require manual curation and miss content.

**Solution:** Implement algorithmic discovery feed alongside chronological.

**Implementation approaches:**

**Approach 1: Simple Engagement-Based Ranking**
```typescript
function calculatePostScore(post: Event): number {
  const age = now() - post.created_at
  const engagement = post.reactions.length + post.replies.length + post.reposts.length
  const zapValue = post.zaps.reduce((sum, zap) => sum + zap.amount, 0) / 1000 // sats

  // Decay engagement over time
  const hoursSincePost = age / 3600
  const timeFactor = 1 / (1 + hoursSincePost / 24) // Decay over 24h

  return (engagement * 1) + (zapValue * 2) * timeFactor
}
```

**Approach 2: Web of Trust Weighted**
```typescript
function getDiscoveryFeed(userPubkey: string): Event[] {
  const following = getFollowing(userPubkey) // Direct follows
  const network = getFollowsOfFollows(following) // Extended network

  return getAllPosts()
    .filter(post =>
      network.includes(post.pubkey) || // In extended network
      hasHighEngagement(post) // OR high engagement
    )
    .map(post => ({
      ...post,
      score: calculateScore(post, userPubkey, following, network)
    }))
    .sort((a, b) => b.score - a.score)
}
```

**Approach 3: Multiple Feed Types**
```
Tab navigation:
- "Following" - Chronological from accounts you follow
- "For You" - Algorithmic discovery from extended network
- "Trending" - High engagement content, last 24h
- "Local" - Content from specific relay or community
```

**Examples from other platforms:**
- Twitter/X: "For You" (algorithmic) and "Following" (chronological) tabs
- Bluesky: Custom feeds (algorithmic) + "Following" feed
- Mastodon: Home, Local, Federated timeline structure

**Trade-offs:**
- ✅ Better discovery, higher engagement
- ✅ Solves cold start problem
- ❌ Less user control, black-box algorithm
- ❌ Computational overhead
- ❌ Risk of echo chamber or filter bubble

**Nostr-specific considerations:**
- Algorithm runs client-side, not server-side
- Must query multiple relays for comprehensive data
- Can leverage zaps as strong engagement signal
- No user tracking/profiling (privacy-preserving)

**Validation:**
- Track: Time spent in algorithmic feed vs chronological
- Measure: Follows gained from discovery feed interactions
- Survey: "Do you find interesting content easily?"

---

### Pattern C: "Trending Now" Without Centralization

**Problem:** No central server to calculate "trending" topics or posts.

**Solution:** Decentralized trending based on recent engagement across relays.

**Implementation approaches:**

**Approach 1: Client-Side Trending Calculation**
```typescript
async function getTrendingPosts(timeWindow: number = 86400): Promise<Event[]> {
  // Query recent posts from user's relay set
  const relays = getUserRelays()
  const posts = await Promise.all(
    relays.map(relay =>
      relay.query({
        kinds: [1], // Text notes
        since: now() - timeWindow,
        limit: 500
      })
    )
  )

  // Aggregate and calculate engagement scores
  const deduplicated = deduplicateEvents(posts.flat())
  const withEngagement = deduplicated.map(post => ({
    ...post,
    score: calculateEngagementScore(post) // Reactions, replies, zaps, velocity
  }))

  return withEngagement
    .sort((a, b) => b.score - a.score)
    .slice(0, 50)
}
```

**Approach 2: Relay-Provided Trending**
```
Some relays could offer "trending" endpoints:
- REQ trending {"kinds": [1], "limit": 50, "#trending": ["24h"]}
- Relay calculates based on events it has seen
- Client queries multiple relays and aggregates

Benefits:
- Offloads computation from client
- Faster for mobile/low-power devices

Challenges:
- Non-standard, requires relay support
- Trust relay's calculation
- Relay diversity means different "trending" per relay
```

**Approach 3: Hashtag Trending**
```
Track most-used hashtags in recent time period:

1. Query posts with hashtags from last 24h
2. Count hashtag frequency
3. Display top 10-20 hashtags with post counts
4. Click hashtag to see recent posts

Example UI:
Trending Hashtags (24h)
#bitcoin (1,234 posts)
#nostr (856 posts)
#lightning (432 posts)
...
```

**Examples from other platforms:**
- Twitter: Trending topics based on tweet volume and engagement
- Mastodon: Hashtag trends aggregated server-side
- Reddit: "Hot" algorithm based on upvotes and time

**Validation:**
- Track: Click-through rate on trending content
- Measure: Time spent browsing trending vs other feeds
- Survey: "Do you discover interesting content through trending?"

---

### Pattern D: Search That Actually Works

**Problem:** Full-text search is difficult in decentralized architecture without central index.

**Solution:** Hybrid search approach combining local and relay-based search.

**Implementation approaches:**

**Approach 1: Local Search (Client-Side Index)**
```
Client maintains search index of cached content:
- Index posts user has seen (feed, profile views)
- Full-text search across cached events
- Instant results, but limited to cached content

Benefits:
- Fast, works offline
- Privacy-preserving (no search queries to server)

Limitations:
- Only searches content user has already seen
- Storage overhead for mobile devices
```

**Approach 2: Relay Search (Server-Side Index)**
```
Query relays that support search:
REQ search {
  "kinds": [1],
  "search": "bitcoin lightning",
  "limit": 100
}

Benefits:
- Comprehensive results across relay's content
- No client storage overhead

Challenges:
- Not all relays support search
- Relay must maintain full-text index (expensive)
- Privacy concern: relay knows your search queries
```

**Approach 3: Specialized Search Relays**
```
Dedicated relays that aggregate and index content for search:
- Crawl public relays for content
- Build comprehensive search index
- Provide fast search API
- Could be paid service to cover costs

Example: nostr.band already does this
```

**Approach 4: Search by Type**
```
Separate search interfaces:
- "Search People" - By name, NIP-05, npub (metadata search)
- "Search Posts" - By keyword (full-text search)
- "Search Hashtags" - By tag (structured search)

Reduces scope of each search, makes implementation easier
```

**Examples from other platforms:**
- Twitter: Full-text search across all public tweets
- Mastodon: Hashtag search works, full-text search limited
- Reddit: Full-text search with filters (subreddit, time, etc.)

**Validation:**
- Track: Search usage rate (% of sessions with search)
- Measure: Search result click-through rate
- Survey: "Can you find content you're looking for?"

---

### Pattern E: Smart Notifications for Re-engagement

**Problem:** Users forget to check app without notification triggers.

**Solution:** Intelligent notification strategy that brings value without spam.

**Implementation approaches:**

**Notification Priority Tiers:**

**Tier 1: Direct Engagement (Always notify)**
- Replies to your posts
- Mentions (@username)
- Zaps received
- Direct messages

**Tier 2: Social Proof (Notify selectively)**
- Likes/reactions on your posts (batch: "10 people liked your post")
- New follower (batch if many: "5 new followers")
- Someone you follow replied to a thread you're in

**Tier 3: Discovery (Low priority, user opt-in)**
- "Person you follow just posted"
- "Trending post in your network"
- Daily digest: "You missed these posts today"

**Implementation considerations:**
```typescript
interface NotificationSettings {
  mentions: 'all' | 'follows-only' | 'off'
  replies: 'all' | 'follows-only' | 'off'
  reactions: 'all' | 'batched' | 'off'
  zaps: 'all' | 'threshold-only' | 'off' // e.g., only notify for zaps >1000 sats
  newFollowers: 'all' | 'daily-digest' | 'off'
  discovery: 'on' | 'off'
}
```

**Batching strategy:**
```
Instead of: 10 separate "X liked your post" notifications
Send: "10 people reacted to your post" (once)

Batch window: 15 minutes to 1 hour depending on notification type
```

**Nostr-specific: Pull vs Push Notifications**

Challenge: Nostr has no central push notification server.

**Options:**
1. **Client polling:** App checks for new events periodically (battery drain)
2. **Push notification relay:** Specialized relay that forwards events to push services
3. **NIP-46 signer with notifications:** Signer app handles notifications, forwards to client
4. **Unified Push:** Open protocol for privacy-preserving push notifications

**Validation:**
- Track: Notification engagement rate (click-through)
- Measure: Re-engagement (notifications → app opens)
- Survey: "Are notifications useful or annoying?"

---

## Anti-Patterns: What Not To Do

### Anti-Pattern 1: Empty Feed with "Follow People" Message

**What it looks like:**
```
[Empty screen]
"Your feed is empty! Follow people to see content."
[Search button] [Browse suggested users button]
```

**Why it fails:**
- Puts burden on user to curate feed manually
- No immediate value
- High friction before seeing any content
- Users abandon before reaching value

**What to do instead:**
- Show interesting content immediately (trending, popular accounts)
- Auto-follow based on interests
- Provide guest/browse mode before signup

---

### Anti-Pattern 2: Chronological-Only Feed (No Discovery)

**What it looks like:**
- Single feed showing posts in reverse chronological order
- No algorithmic ranking, no trending, no recommendations
- User must manually find all accounts to follow

**Why it fails:**
- Misses content from accounts user would like but hasn't found yet
- No solution for cold start problem
- Requires significant manual curation
- Works for power users, fails for new users

**What to do instead:**
- Provide multiple feed types: chronological AND discovery
- Let users choose their preference
- Default to discovery feed for new users

---

### Anti-Pattern 3: Unusable Global Feed

**What it looks like:**
- "Global" feed showing ALL posts from relay(s) unfiltered
- No spam filtering, no quality ranking
- Firehose of random content

**Why it fails:**
- Signal-to-noise ratio extremely low
- Spam and bot content overwhelms
- No personalization or relevance
- Users quickly learn to avoid it

**What to do instead:**
- Filter global feed by Web of Trust
- Provide quality ranking (engagement, zaps)
- Offer topic-filtered views of global content
- Use as discovery tool, not primary feed

---

### Anti-Pattern 4: No Search or Broken Search

**What it looks like:**
- No search functionality at all, OR
- Search that returns no results or irrelevant results
- Search only works for exact username matches

**Why it fails:**
- Users expect to find people and content by search
- Breaks basic discovery mechanisms
- Frustration when search returns nothing

**What to do instead:**
- Implement at least basic search (people by name/NIP-05)
- Use relay search or specialized search relays for content
- Clear messaging if search is limited ("Searching your cached content...")

---

### Anti-Pattern 5: Notification Spam or No Notifications

**What it looks like:**
- **Too many:** Every like, every reaction, every follow = separate notification
- **Too few:** No notifications at all, users forget app exists

**Why both fail:**
- Too many → notification fatigue → user disables → no re-engagement
- Too few → user forgets app → churn

**What to do instead:**
- Intelligent notification priority (direct engagement > social proof > discovery)
- Batching for low-priority notifications
- User control over notification preferences
- Default to high-value notifications only

---

### Anti-Pattern 6: Relay-Dependent Discovery (Inconsistent Experience)

**What it looks like:**
- "Trending" or "Explore" content varies drastically by relay selection
- User switches relays, suddenly can't find content they saw before
- No explanation for why discovery differs

**Why it fails:**
- Inconsistent, unpredictable experience
- Users don't understand why content appears/disappears
- Breaks mental model of "the network"

**What to do instead:**
- Aggregate discovery across multiple relays
- Explain relay-based differences when relevant
- Provide consistent discovery experience regardless of relay config
- Smart relay selection for discovery (query popular/comprehensive relays)

---

## Validation Checklist

### Metrics to Track

**Engagement Metrics:**
- [ ] **Session length:** Average time spent per session
- [ ] **Posts viewed per session:** How much content do users consume? (target: >20 in first session)
- [ ] **Sessions per day:** How often do users return?
- [ ] **Feed diversity:** What % of content is from new accounts vs followed?

**Discovery Effectiveness:**
- [ ] **Follows per day:** How many new accounts do users follow?
- [ ] **Discovery feature usage:** % of users who use trending/search/explore
- [ ] **Search result click-through:** Do search results lead to engagement?
- [ ] **Discovery → Follow conversion:** % of discovered accounts that get followed

**Content Quality:**
- [ ] **Content engagement rate:** What % of viewed posts get likes/replies/zaps?
- [ ] **Time to scroll past:** Average time spent viewing each post
- [ ] **Negative feedback:** Do users hide/mute/block content? (quality signal)

**Retention Impact:**
- [ ] **D1 retention by feed quality:** Do users with interesting feeds return more?
- [ ] **Churn reasons:** Exit surveys - "Why did you stop using Nostr?"
- [ ] **Comparison:** Retention rates before/after discovery improvements

**Notification Performance:**
- [ ] **Notification engagement:** What % of notifications lead to app opens?
- [ ] **Notification to action:** Do users engage with content from notifications?
- [ ] **Notification settings:** What % of users customize notification preferences?

### User Research Questions

**Qualitative feedback to gather:**

**First Impressions:**
- "Was your first feed interesting? Why or why not?"
- "Could you find content you cared about?"
- "Did you feel overwhelmed or bored?"

**Discovery:**
- "How do you find new people to follow?"
- "Can you find content on topics you're interested in?"
- "Have you used search? Did it work?"

**Feed Quality:**
- "Is your feed interesting enough to check daily?"
- "Do you see too much spam or low-quality content?"
- "Do you wish you had more control over your feed, or is it good as is?"

**Comparison to Other Platforms:**
- "How does content discovery compare to Twitter/Instagram/etc?"
- "What does [other platform] do better for finding content?"
- "What does Nostr do better?"

### A/B Testing Opportunities

**Test different discovery approaches:**
- Default follows vs empty feed
- Algorithmic feed vs chronological only
- Different trending algorithms (engagement vs zaps vs WoT)
- Notification frequency and types

**Measure impact on:**
- D1, D7, D30 retention
- Session length and frequency
- Follows gained
- User-reported satisfaction

---

## Citations & Sources

**Note:** All citations are from 2024-2025 to ensure currency for this fast-moving technology.

### Data & Analytics

<a id="data-1"></a>
**[Data:1]** Nostr.band Analytics - 30-day retention trending to 0% for recent cohorts
<a id="data-2"></a>
**[Data:2]** Nostr Content Discovery Crisis - ~36K weekly active users (October 2024), post-viral retention failure
<a id="data-5"></a>
**[Data:5]** Nostr Spam Crisis - 500,000 daily spam messages (February 2024)

### Academic & UX Research

<a id="research-4"></a>
**[Research:4]** Bluesky Starter Packs Study (Lancaster University, January 2025) - 43% of follows from starter packs during peak periods, 85% more followers for included users
<a id="research-5"></a>
**[Research:5]** Cold Start Problem in Recommendation Systems (Academic, 2024) - Strategies: social network info, collaborative filtering, hybrid models, user demographics, community detection
<a id="research-6"></a>
**[Research:6]** "Better Feeds" Report (Georgetown University, March 2025) - Chronological feeds decrease engagement without reducing polarization; users compensate by using other platforms
<a id="research-7"></a>
**[Research:7]** Engagement-Based Algorithms Amplify Divisive Content (PNAS Nexus, 2024-2025) - Pure engagement optimization amplifies content users report makes them feel worse
<a id="research-8"></a>
**[Research:8]** Social Media as Search Engine (2024-2025) - 2 in 5 Americans use TikTok as search engine; 50%+ of Gen Z prefer social for discovery over Google

### Case Studies & Examples

<a id="example-4"></a>
**[Example:4]** TikTok For You Algorithm (2024-2025) - Prioritizes content relevance over creator popularity; users with zero followers can reach large audiences; 75%+ impressions from For You feed
<a id="example-5"></a>
**[Example:5]** Instagram Algorithm Updates (2024-2025) - April 2024: rewards original content, weights shares over likes; Multiple specialized algorithms for Feed/Reels/Explore
<a id="example-6"></a>
**[Example:6]** Bluesky Starter Packs (June 2024) - Up to 150 people + 3 custom feeds per pack; proven cold start solution
<a id="example-7"></a>
**[Example:7]** Mastodon Discovery - Local/Federated timeline structure, hashtag-based discovery

### Nostr Protocol Documentation

<a id="protocol-5"></a>
**[Protocol:5]** NIP-57: Lightning Zaps - Unique quality signal for content ranking

### User Feedback & Quotes (2024-2025)

<a id="user-15"></a>
**[User:15]** "Traditional apps win simply by having much better content selection" (karnage, March 2024)
<a id="user-22"></a>
**[User:22]** "Nostr is lacking in content, which could be the primary reason people are not sticking around" (2024)
<a id="user-23"></a>
**[User:23]** Chicken-egg problem: need users for content, need content for users (2024)
<a id="user-24"></a>
**[User:24]** "Nostr does not seem to have any external growth loops" (karnage, March 2024)
<a id="user-25"></a>
**[User:25]** "Users are not notified when tagged" (karnage, March 2024)
<a id="user-26"></a>
**[User:26]** "Habit formation... Nostr seems to have a weak spot here" (karnage, March 2024)
<a id="user-27"></a>
**[User:27]** "The main problem of decentralized alternatives like Nostr is content discovery" (2024)
<a id="user-28"></a>
**[User:28]** "It's only possible to search on what you have seen" (2024)
<a id="user-29"></a>
**[User:29]** "500,000 daily spam messages in mid-February" (February 2024)
<a id="user-30"></a>
**[User:30]** "There can't be a 'global' view of the network, as it would be full of spam" (2024)
<a id="user-31"></a>
**[User:31]** Primal 2.0 launch - Feed Marketplace, Explore tab, Advanced Search (November 21, 2024)
<a id="user-32"></a>
**[User:32]** Nstart onboarding wizard - Auto-follow trusted users (January 2025)
<a id="user-33"></a>
**[User:33]** Derek Ross - "Content discovery keeps improving, but we still need to act as our own algorithms" (January 2025)

---

**See [References & Bibliography](../appendices/references.md) for full citation details.**

---

*This pattern is part of the [Nostr UX Research Study](../README.md). See [OUTLINE.md](../OUTLINE.md) for the complete study structure.*

---

**Next Pattern:** [Pattern 3: Core Interaction Loops](03-core-interactions.md) 🚧 Coming Soon
