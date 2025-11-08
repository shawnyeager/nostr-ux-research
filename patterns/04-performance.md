---
title: "Pattern 4: Performance & Perceived Speed"
weight: 4
---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Universal Principles](#universal-principles)
3. [Nostr-Specific Considerations](#nostr-specific-considerations)
4. [Pattern Library: Concrete Solutions](#pattern-library-concrete-solutions)
5. [Anti-Patterns: What Not To Do](#anti-patterns-what-not-to-do)
6. [Validation Checklist](#validation-checklist)
7. [Citations & Sources](#citations--sources)

---

## Problem Statement

### Current State

**Performance issues killing retention:**

- [[Data:19]](#data-19) Apps described as "slow and clunky" compared to Twitter, with "clients blasting entire message history"
- [[Data:20]](#data-20) Multiple crash reports: Primal Android crashes (Sept & Oct 2025), Amethyst community crashes, Nostur iOS crashes
- [[Data:21]](#data-21) Database performance identified as "core bottleneck" causing slow feed loading
- [[User:11]](#user-11) Users report needing "5-6 different clients to work around bugs" with all apps in "alpha state"
- [[Data:22]](#data-22) Amethyst battery drain from background video playback loops and excessive relay connections (up to 100 relays)

**The perception gap:**
Nostr apps may not be objectively slower than centralized alternatives, but they *feel* slower due to:
- No loading state indicators
- Multi-relay coordination exposed to users as delays
- Missing skeleton screens and progressive loading
- Lack of optimistic UI patterns

**The retention impact:**

- Users compare to Twitter/Instagram's polished performance
- "Slow" apps perceived as low-quality or alpha-state
- Performance issues compound trust problems from unreliable core interactions
- First impression matters: slow initial load = immediate bounce

### Root Causes

1. **Multi-relay queries without optimization**: Waiting for slowest relay instead of progressive loading
2. **No caching strategy**: Repeated queries for same data
3. **Synchronous event validation**: Blocking UI thread with cryptographic checks
4. **Missing perceived performance patterns**: No skeleton screens, optimistic UI, or progressive enhancement
5. **Inefficient rendering**: Re-rendering entire feed instead of incremental updates
6. **Large bundle sizes**: Slow initial page load on web clients

### Why This Matters

> "Users don't distinguish between 'objectively fast' and 'feels fast.' Perception is reality." [[Research:31]](#research-31)

**Research shows:** [[Research:32]](#research-32) [[Research:33]](#research-33)
- **32% bounce rate increase** from 1 to 3 seconds load time, **90% increase** at 5 seconds
- **53% of mobile visitors leave** if page takes >3 seconds to load
- Perceived performance more important than actual performance [[Research:34]](#research-34)
- Visual feedback during delays dramatically improves satisfaction [[Research:35]](#research-35)
- 100ms response threshold for "instant" feeling [[Research:31]](#research-31)

---

## Universal Principles

These principles apply to any application prioritizing performance and user experience.

### 1. Perceived Performance > Actual Performance

**Research backing:** [[Research:34]](#research-34) [[Research:35]](#research-35)

**Core insight:** How fast an app *feels* matters more than benchmark speeds. A 500ms operation with great feedback feels faster than a 200ms operation with no indication. [[Research:34]](#research-34) Users perceive skeleton screens as **30% faster** than spinners for identical wait times.

**Key strategies:**

- **Skeleton screens** for 2-10 second loads [[Research:35]](#research-35)
- **Progressive loading** (show something immediately, refine later)
- **Optimistic UI** (assume success, update immediately) [[Research:36]](#research-36)
- **Instant feedback** (respond within 100ms, even if processing continues) [[Research:31]](#research-31)

**Examples from mainstream apps:**

- **Twitter/X:** [[Example:11]](#example-11) Algorithm runs 5 billion times/day, completes each execution in <1.5 seconds on average
- **Instagram:** [[Example:12]](#example-12) AI ranks 500 posts per user by engagement predictions, emphasizes "engage in first 3 seconds"
- **TikTok:** [[Example:13]](#example-13) Watch time prioritized—content that "stops scrolls cold" with grabber upfront
- **Starbucks PWA:** [[Example:14]](#example-14) Offline functionality led to **2x increase in daily active users** and **53% rise in order completions**

### 2. The 100ms / 1s / 10s Rule

**Research backing:** [[Research:31]](#research-31) Nielsen Norman Group response time thresholds (Updated January 2024)

**The thresholds:**

- **<100ms:** Feels instantaneous - user perceives direct manipulation
- **<1 second:** Maintains flow of thought - no interruption to mental process
- **<10 seconds (now <5s):** Keeps attention - Nielsen updated in 2024: "probably safe to say the upper limit of 10 seconds is now 5 seconds or even less" [[Research:31]](#research-31)

**Application to social apps:**

- Button clicks must respond <100ms (disable, show spinner, change color)
- Feed refresh should show first content <1s
- Full feed load acceptable up to 5s if progressive (was 10s in 1993 research)

**What to do for each:**

- **0-100ms:** Show immediate UI change (button press, loading indicator)
- **100ms-1s:** Use optimistic UI, show skeleton screens
- **1-5s:** Progressive loading, show percentage/status, allow cancellation
- **>5s:** Must be background operation with notification on completion

### 3. Skeleton Screens & Progressive Loading

**Research backing:** [[Research:34]](#research-34) [[Research:35]](#research-35)

**Why skeleton screens:**

- **Users perceive skeleton screens as 30% faster** than identical sites with spinners [[Research:34]](#research-34)
- **Skeleton screens feel 20% faster** than spinners for identical wait times [[Research:34]](#research-34)
- Set expectations for content structure [[Research:35]](#research-35)
- Maintain visual stability (no layout shifts)
- Signal that app is working, not frozen

**Best practices:** [[Research:34]](#research-34) [[Research:35]](#research-35) [[Research:37]](#research-37)
- Match final content structure exactly
- Subtle pulsing/shimmer animation (Material Design 3 Expressive indicators for <5s waits)
- Use for 2-10 second loads (spinners for <2s single modules, progress bars >10s)
- Avoid "header + footer only" skeletons - show content areas
- Best for container-based components: tiles, lists, grids, data tables, cards

**Progressive loading pattern:**
```
1. Show skeleton immediately (0ms)
2. Load critical above-the-fold content first
3. Display as soon as available (500ms-1s)
4. Load remaining content in background
5. Lazy load images as user scrolls
```

### 4. Optimistic UI Patterns

**Research backing:** [[Research:36]](#research-36) [[Research:38]](#research-38) (See also: Pattern 3)

**Quick summary:** Update UI immediately assuming success, rollback on failure. React 19's `useOptimistic` Hook provides elegant solution [[Research:36]](#research-36).

**Performance benefit:** Eliminates perceived latency for high-success-rate operations. Essential for social media: "seeing a comment appear the moment it's clicked" [[Research:36]](#research-36).

**Apply to:**

- Likes/reactions (instant visual change) - Facebook's like button immediately turns blue [[Research:38]](#research-38)
- Follow/unfollow (immediate button state)
- Post drafts (save locally, sync in background)
- Profile updates (show changes immediately)

### 5. Caching & Offline-First Architecture

**Research backing:** [[Research:39]](#research-39) [[Research:40]](#research-40)

**Core principle:** Never fetch data twice if you can avoid it.

**Caching layers:**
1. **Memory cache:** Active session data (current feed)
2. **Storage cache:** IndexedDB for data, Cache API for assets [[Research:40]](#research-40)
3. **Service Worker cache:** Static assets, offline functionality [[Research:39]](#research-39)
4. **Relay-level cache:** Smart relay selection based on past performance

**Cache strategies:** [[Research:40]](#research-40)
- **Cache First** or **Network First** based on application needs
- **Stale-while-revalidate** for dynamic content: serve cached immediately while async network fetch updates cache
- **2024 HTTP Archive data:** Nearly 45% of high-rated installable PWAs use hybrid approach [[Research:40]](#research-40)

**Cache invalidation strategies:**

- Time-based expiry (profiles: 1 hour, posts: until user refreshes)
- Event-based (new post = invalidate feed cache)
- User-triggered (pull-to-refresh)

**Offline-first benefits:**

- App works instantly on return visits
- Read cached content while new content loads
- Progressive enhancement as network becomes available

### 6. Bundle Size & Initial Load Optimization

**Research backing:** [[Research:41]](#research-41) [[Research:42]](#research-42) [[Research:43]](#research-43)

**The problem:** Large JavaScript bundles delay time-to-interactive.

**Optimization strategies:**

- **Code splitting:** Load only what's needed for current route. Dynamic `import()` expressions [[Research:41]](#research-41)
- **Tree shaking:** Remove unused code - can reduce bundle sizes by **20-50%** [[Research:41]](#research-41)
- **Lazy loading:** Defer non-critical components
- **Compression:** Gzip/Brotli on all assets
- **CDN distribution:** Serve assets from edge locations
- **React Server Components:** [[Research:43]](#research-43) Real-world example: 40% improvement in load times, 15% increase in conversion rates

**Performance budgets (2024):** [[Research:42]](#research-42)
- Target: **<250KB gzipped** initial bundle for fast 3G
- Total bundle: **<1MB gzipped** for good UX
- Critical path: <50KB for above-the-fold content
- Images: WebP/AVIF formats, responsive images [[Research:44]](#research-44)

### 7. Incremental Rendering & Virtual Scrolling

**Research backing:** [[Research:45]](#research-45) [[Research:46]](#research-46) [[Research:47]](#research-47)

**The problem:** Rendering 1000+ items in DOM kills performance.

**Solutions:**

- **Virtual scrolling:** Only render visible items + small buffer [[Research:45]](#research-45) [[Research:46]](#research-46)
- **Significantly reduces:** DOM updates, memory usage, render time [[Research:46]](#research-46)
- **TanStack Virtual** most popular library as of Nov 2024 [[Research:47]](#research-47)
- **Best practices:** Wrap row components in `React.memo()`, render 1-2 additional items above/below visible area (overscan) [[Research:47]](#research-47)
- **Pagination:** Load 20-50 items at a time
- **Infinite scroll with windowing:** Recycle DOM nodes as user scrolls
- **React.memo / useMemo:** Prevent unnecessary re-renders

**Example: Feed rendering**
```typescript
// Bad: Render all 1000 posts
{posts.map(post => <Post key={post.id} post={post} />)}

// Good: Virtual scrolling
<VirtualList
  items={posts}
  height={window.innerHeight}
  itemHeight={200}
  renderItem={post => <Post post={post} />}
/>
```

---

## Nostr-Specific Considerations

### Challenge 1: Multi-Relay Query Latency

**The problem:** Querying 10 relays in parallel means waiting for the slowest one. [[Data:23]](#data-23) Only 639 relays online globally, with varying performance.

**Current failures:**

- App waits for all relays before showing any content
- One slow/dead relay blocks entire feed load
- No progressive display as results arrive
- Users see blank screen or spinner for 5-10 seconds
- [[Data:24]](#data-24) Clients can open "hundreds of WebSocket connections simultaneously" causing performance overhead
- [[Research:48]](#research-48) Academic research: "Replication of posts across relays enhances censorship-resistance but introduces significant overhead"

**Solutions:**

**Pattern A: Race-based loading**
```typescript
// Show content as soon as ANY relay responds
const posts = []
const relayPromises = relays.map(relay =>
  relay.query(filter).then(events => {
    posts.push(...events)
    renderPosts(posts) // Update UI immediately
  })
)

// Don't wait for all - update progressively
```

**Pattern B: Timeout with fallback**
```typescript
const FAST_RELAY_TIMEOUT = 1000 // 1s
const SLOW_RELAY_TIMEOUT = 5000 // 5s

// Query fast relays first
const fastResults = await Promise.race([
  queryFastRelays(filter),
  delay(FAST_RELAY_TIMEOUT)
])

renderPosts(fastResults) // Show immediately

// Continue querying slow relays in background
querySlowRelays(filter).then(slowResults => {
  mergePosts(fastResults, slowResults)
  renderPosts(allPosts)
})
```

**Pattern C: Relay performance tracking**
```typescript
// Track relay latency over time
interface RelayStats {
  avgLatency: number
  successRate: number
  lastSuccess: timestamp
}

// Query fastest relays first, slowest last
const sortedRelays = relays.sort((a, b) =>
  stats[a.url].avgLatency - stats[b.url].avgLatency
)
```

### Challenge 2: Event Signature Verification Overhead

**The problem:** Cryptographic signature verification is CPU-intensive.

**Current approach:** Verify every event signature synchronously on arrival.

**Performance impact:**

- Blocks UI thread
- ~1-5ms per event verification
- 100 events = 100-500ms of blocking

**Critical security vs performance trade-off:** [[Data:25]](#data-25) Black Hat USA 2025 research found several clients (Damus, Iris, FreeFrom, Plebstr past versions) **omit signature verification entirely** to improve speed. Recommendation: Enforce mandatory verification in NIP-01, but use Web Workers to avoid blocking.

**Solutions:**

**Pattern A: Web Workers for verification**
```typescript
// Offload verification to background thread
const verificationWorker = new Worker('verify-worker.js')

verificationWorker.postMessage({ events })

verificationWorker.onmessage = ({ data: { verified, invalid } }) => {
  renderPosts(verified)
  logInvalid(invalid)
}
```

**Pattern B: Lazy verification**
```typescript
// Verify on-demand, not upfront
function renderPost(event) {
  // Show immediately with "Verifying..." badge
  const verified = verifyLazily(event)

  if (!verified) {
    hidePost(event) // Remove if invalid
    showWarning("Invalid signature detected")
  }
}
```

**Pattern C: Trust-based verification**
```typescript
// Skip verification for trusted sources
const trustedPubkeys = getUserFollows() // WoT

if (trustedPubkeys.includes(event.pubkey)) {
  return event // Skip verification
} else {
  return verifyEvent(event) // Verify unknown sources
}
```

### Challenge 3: Caching Strategy for Nostr Data

**The problem:** No built-in caching in Nostr protocol.

**Current solutions:** [[Data:26]](#data-26) [[Data:27]](#data-27)
- **NDK Dexie-based cache** (browser only)
- **Primal caching service** (relay-level, open sourced Dec 2024)
- **nostrdb:** "Unfairly fast" embedded database with zero-copy, O(1) access, memory-mapped LMDB
- **Strfry performance tuning:** queryTimesliceBudgetMicroseconds = 5000

**What to cache:**

- **Profiles (kind 0):** High reuse, change infrequently
- **Contact lists (kind 3):** Moderate reuse
- **Recent posts (kind 1):** High volume, user expects fresh content
- **Relay metadata:** Connection status, latency stats [[Data:23]](#data-23)

**Cache implementation:**
```typescript
interface NostrCache {
  profiles: Map<pubkey, Profile> // 1 hour TTL
  contacts: Map<pubkey, ContactList> // 1 hour TTL
  recentPosts: LRU<eventId, Event> // Keep 500 most recent
  relayStats: Map<url, RelayStats> // Persistent
}

async function getProfile(pubkey: string): Promise<Profile> {
  // Check cache first
  const cached = cache.profiles.get(pubkey)
  if (cached && !isExpired(cached)) {
    return cached.data
  }

  // Fetch from relays
  const profile = await fetchProfile(pubkey)
  cache.profiles.set(pubkey, { data: profile, expires: Date.now() + 3600000 })
  return profile
}
```

### Challenge 4: Feed Rendering Performance

**The problem:** Nostr feeds mix content from multiple relays with duplicate events.

**Performance challenges:**

- Deduplication overhead (comparing 1000s of event IDs)
- Sorting by timestamp (O(n log n))
- Re-rendering entire list on new events

**Solutions:**

**Pattern A: Efficient deduplication**
```typescript
// Use Set for O(1) lookup
const seenEventIds = new Set<string>()

function deduplicateEvents(events: Event[]): Event[] {
  return events.filter(event => {
    if (seenEventIds.has(event.id)) return false
    seenEventIds.add(event.id)
    return true
  })
}
```

**Pattern B: Incremental sort**
```typescript
// Don't re-sort entire feed, insert new events in correct position
function insertEvent(feed: Event[], newEvent: Event): Event[] {
  const index = binarySearch(feed, newEvent, (a, b) => b.created_at - a.created_at)
  feed.splice(index, 0, newEvent)
  return feed
}
```

**Pattern C: Virtual scrolling with React**
```typescript
import { FixedSizeList } from 'react-window'

<FixedSizeList
  height={window.innerHeight}
  itemCount={posts.length}
  itemSize={200}
  width="100%"
>
  {({ index, style }) => (
    <div style={style}>
      <Post post={posts[index]} />
    </div>
  )}
</FixedSizeList>
```

### Challenge 5: Image Loading Performance

**The problem:** Large images slow down feed scrolling.

**Nostr-specific considerations:**

- Images hosted on external servers (varying speeds)
- No CDN control
- Users may post massive unoptimized images

**Native lazy loading performance:** [[Research:44]](#research-44)
- **On 4G:** 97.5% of lazy-loaded images fully loaded within 10ms of becoming visible
- **On 2G:** 92.6% loaded within 10ms
- **Modern formats:** WebP, AVIF more efficient than JPEG/PNG [[Research:44]](#research-44)

**Solutions:**

**Pattern A: Lazy loading**
```typescript
<img
  src={imageUrl}
  loading="lazy"
  decoding="async"
  alt={altText}
/>
```

**Pattern B: Responsive images with proxy**
```typescript
// Use image proxy for optimization
const optimizedUrl = imageUrl.startsWith('http')
  ? `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl)}&w=600&output=webp`
  : imageUrl

<img src={optimizedUrl} alt={altText} />
```

**Pattern C: Progressive image loading**
```typescript
// Show blurred placeholder, load full image
const [imageLoaded, setImageLoaded] = useState(false)

<div className="image-container">
  <img
    src={thumbnailUrl}
    className={imageLoaded ? 'hidden' : 'blur'}
  />
  <img
    src={fullImageUrl}
    onLoad={() => setImageLoaded(true)}
    className={imageLoaded ? 'visible' : 'hidden'}
  />
</div>
```

---

## Pattern Library: Concrete Solutions

### Pattern A: Fast Initial Feed Load

**Problem:** Users see blank screen for 5+ seconds while feed loads.

**Solution:** Progressive loading with skeleton screens.

**Implementation:**

```typescript
function Feed() {
  const [posts, setPosts] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFeedProgressive()
  }, [])

  async function loadFeedProgressive() {
    // 1. Show skeleton immediately
    setLoading(true)

    // 2. Load from cache first (instant)
    const cachedPosts = await getCachedPosts()
    if (cachedPosts.length > 0) {
      setPosts(cachedPosts)
      setLoading(false) // Remove skeleton, show cached
    }

    // 3. Query fast relays (1s timeout)
    const fastRelays = getFastRelays() // Based on historical performance
    const fastPosts = await Promise.race([
      queryRelays(fastRelays, { kinds: [1], limit: 50 }),
      delay(1000)
    ])

    if (fastPosts.length > 0) {
      setPosts(mergePosts(cachedPosts, fastPosts))
      setLoading(false)
    }

    // 4. Query remaining relays in background (5s timeout)
    const slowRelays = getSlowRelays()
    const slowPosts = await Promise.race([
      queryRelays(slowRelays, { kinds: [1], limit: 50 }),
      delay(5000)
    ])

    setPosts(mergePosts(posts, slowPosts))
  }

  if (loading && posts.length === 0) {
    return <FeedSkeleton count={10} />
  }

  return (
    <VirtualList
      items={posts}
      renderItem={post => <Post post={post} />}
    />
  )
}
```

**Validation:**

- Time to first content: <1 second
- Time to full content: <3 seconds
- User sees progress, not blank screen

---

### Pattern B: Optimized Profile Loading

**Problem:** Loading same profile data repeatedly across feed.

**Solution:** Aggressive caching with background refresh.

**Implementation:**

```typescript
class ProfileCache {
  private cache = new Map<string, CachedProfile>()
  private pending = new Map<string, Promise<Profile>>()

  async get(pubkey: string): Promise<Profile> {
    // 1. Return cached if fresh
    const cached = this.cache.get(pubkey)
    if (cached && Date.now() - cached.timestamp < 3600000) {
      return cached.profile
    }

    // 2. Deduplicate concurrent requests
    const existing = this.pending.get(pubkey)
    if (existing) return existing

    // 3. Fetch from relays
    const promise = this.fetchProfile(pubkey)
    this.pending.set(pubkey, promise)

    const profile = await promise
    this.cache.set(pubkey, { profile, timestamp: Date.now() })
    this.pending.delete(pubkey)

    return profile
  }

  private async fetchProfile(pubkey: string): Promise<Profile> {
    const filter = { kinds: [0], authors: [pubkey], limit: 1 }
    const events = await queryRelays(getFastRelays(), filter)
    return events[0] ? JSON.parse(events[0].content) : null
  }
}

const profileCache = new ProfileCache()

// Usage in component
function Post({ post }) {
  const [author, setAuthor] = useState<Profile | null>(null)

  useEffect(() => {
    profileCache.get(post.pubkey).then(setAuthor)
  }, [post.pubkey])

  return (
    <div>
      <Avatar src={author?.picture} name={author?.name} />
      <Content>{post.content}</Content>
    </div>
  )
}
```

---

### Pattern C: Smooth Infinite Scroll

**Problem:** Feed stutters when loading more posts.

**Solution:** Intersection Observer with preloading buffer.

**Implementation:**

```typescript
function InfiniteFeed() {
  const [posts, setPosts] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore()
        }
      },
      { threshold: 0.5, rootMargin: '200px' } // Trigger before bottom
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => observer.disconnect()
  }, [hasMore, loading])

  async function loadMore() {
    setLoading(true)

    const oldestTimestamp = posts[posts.length - 1]?.created_at || Date.now()
    const filter = {
      kinds: [1],
      until: oldestTimestamp,
      limit: 20
    }

    const newPosts = await queryRelays(getFastRelays(), filter)

    if (newPosts.length === 0) {
      setHasMore(false)
    } else {
      setPosts([...posts, ...newPosts])
    }

    setLoading(false)
  }

  return (
    <div>
      <VirtualList items={posts} renderItem={post => <Post post={post} />} />
      <div ref={loadMoreRef}>
        {loading && <Spinner />}
        {!hasMore && <p>No more posts</p>}
      </div>
    </div>
  )
}
```

---

### Pattern D: Background Sync with Service Worker

**Problem:** Users must manually refresh to see new posts.

**Solution:** Service Worker syncs in background, shows notification.

**Implementation:**

```typescript
// service-worker.js
self.addEventListener('periodicsync', event => {
  if (event.tag === 'sync-feed') {
    event.waitUntil(syncFeed())
  }
})

async function syncFeed() {
  const lastSync = await getLastSyncTime()
  const filter = { kinds: [1], since: lastSync, limit: 50 }

  const newPosts = await queryRelays(getFastRelays(), filter)

  if (newPosts.length > 0) {
    await cacheNewPosts(newPosts)

    // Show notification
    self.registration.showNotification('New posts available', {
      body: `${newPosts.length} new posts from your feed`,
      icon: '/icon.png',
      tag: 'feed-update'
    })
  }

  await setLastSyncTime(Date.now())
}

// Register in app
if ('serviceWorker' in navigator && 'periodicSync' in ServiceWorkerRegistration.prototype) {
  const registration = await navigator.serviceWorker.register('/sw.js')
  await registration.periodicSync.register('sync-feed', {
    minInterval: 60 * 60 * 1000 // 1 hour
  })
}
```

---

## Anti-Patterns: What Not To Do

### Anti-Pattern 1: Synchronous Blocking Operations

**What it looks like:**
```typescript
function loadFeed() {
  showSpinner()

  // Blocks UI for 10+ seconds
  for (const relay of relays) {
    const posts = relay.query(filter) // Synchronous
    allPosts.push(...posts)
  }

  renderFeed(allPosts)
  hideSpinner()
}
```

**Why it fails:**

- UI completely frozen during load
- No way to cancel or show progress
- User can't interact with app

**What to do instead:**

- Async/await with Promise.all()
- Progressive rendering as results arrive
- Show skeleton screen, not spinner

---

### Anti-Pattern 2: No Loading States

**What it looks like:**

- User taps "Refresh"
- Nothing happens for 3 seconds
- Feed suddenly updates
- User confused, taps multiple times

**Why it fails:**

- User doesn't know if action registered
- No perceived progress
- Leads to duplicate requests

**What to do instead:**

- Immediate visual feedback (<100ms)
- Loading indicator (spinner, skeleton, progress)
- Disable button during load

---

### Anti-Pattern 3: Waiting for All Relays

**What it looks like:**
```typescript
// Wait for ALL relays before showing anything
const results = await Promise.all(
  relays.map(r => r.query(filter))
)
renderFeed(results.flat())
```

**Why it fails:**

- Slowest relay determines perceived speed
- One dead relay = 30s timeout
- User sees blank screen entire time

**What to do instead:**

- Show results as they arrive (Promise.race)
- Timeout slow relays (1-5s)
- Cache previous content while refreshing

---

### Anti-Pattern 4: No Caching Strategy

**What it looks like:**

- User navigates away and back
- Feed reloads from scratch
- Same profile images re-downloaded 100 times
- Wastes bandwidth and time

**Why it fails:**

- Unnecessary network requests
- Slow perceived performance
- Poor offline experience

**What to do instead:**

- Cache profiles, posts, static assets
- Use stale-while-revalidate pattern
- Persist cache across sessions

---

### Anti-Pattern 5: Rendering Entire Feed on Update

**What it looks like:**
```typescript
function onNewPost(newPost) {
  const updatedFeed = [newPost, ...posts]
  rerenderEntireFeed(updatedFeed) // Re-renders 1000+ items
}
```

**Why it fails:**

- Massive performance hit
- Scroll position jumps
- Janky user experience

**What to do instead:**

- Virtual scrolling (only render visible)
- Incremental updates (insert single item)
- React.memo / key optimization

---

## Validation Checklist

### Performance Metrics

**Core Web Vitals (Updated March 2024):** [[Research:49]](#research-49) [[Research:50]](#research-50)
- [ ] **Largest Contentful Paint (LCP):** <2.5s
- [ ] **Interaction to Next Paint (INP):** <200ms (**NEW: Replaced FID in March 2024**) [[Research:49]](#research-49)
  - INP measures ALL interactions (not just first like FID)
  - Includes input delay + event handler processing + browser paint time
  - Good: <200ms, Poor: >500ms [[Research:50]](#research-50)
- [ ] **Cumulative Layout Shift (CLS):** <0.1

**Note:** FID (First Input Delay) was officially deprecated and removed from Google Search Console in March 2024. [[Research:49]](#research-49)

**Custom Metrics:**

- [ ] **Time to First Content:** <1 second (cached) or <3 seconds (cold start)
- [ ] **Feed Load Time:** <3 seconds for 50 posts
- [ ] **Profile Load Time:** <500ms (cached) or <2 seconds (network)
- [ ] **Infinite Scroll:** <1 second to load next page
- [ ] **Button Response Time:** <100ms visual feedback

### User Experience Metrics

**Perceived Performance:**

- [ ] Users rate app as "fast" or "very fast" (survey)
- [ ] <5% of users complain about speed
- [ ] Skeleton screens shown for all >1s operations
- [ ] No "frozen UI" moments (>500ms blocking)

**Comparison to Mainstream:**

- [ ] Feed loads as fast or faster than Twitter/Instagram
- [ ] Scrolling smoothness comparable to native apps (60fps target [[Research:51]](#research-51))
- [ ] Image loading doesn't block interaction

**Business Impact Metrics (Based on Industry Research):** [[Research:52]](#research-52) [[Research:53]](#research-53)
- [ ] Meeting Core Web Vitals targets correlates with **24% reduction in page abandonment** [[Research:53]](#research-53)
- [ ] Good LCP can lead to **up to 61% increase in conversion rate** (Rakuten case study) [[Research:52]](#research-52)
- [ ] Performance improvements typically show **8-10% conversion increase** per 0.1s load time improvement [[Research:53]](#research-53)

### Technical Metrics

**Relay Performance:**

- [ ] Average query time: <2 seconds per relay
- [ ] Relay timeout enforced: 5 seconds max
- [ ] Fast relay identified and prioritized
- [ ] Dead relays removed from rotation

**Caching Effectiveness:**

- [ ] Profile cache hit rate: >80%
- [ ] Post cache hit rate: >50% (returning users)
- [ ] Cache size: <100MB storage used

**Rendering Performance:**

- [ ] Feed renders: <16ms per frame (60fps)
- [ ] Virtual scrolling implemented for >100 items
- [ ] No unnecessary re-renders (React DevTools)

### User Research Questions

**Performance Perception:**

- "Does the app feel fast?"
- "Do you notice delays or lag?"
- "How does speed compare to Twitter/Instagram?"

**Loading Feedback:**

- "Is it clear when content is loading?"
- "Can you tell if the app is working or frozen?"
- "Do you feel informed about progress?"

**Problem Areas:**

- "What parts of the app feel slow?"
- "When do you experience lag or stuttering?"
- "Have you abandoned actions due to slowness?"

### A/B Testing Opportunities

Test different approaches:
- Skeleton screens vs spinners vs blank screen
- Progressive loading vs wait-for-all
- Cache duration (1 hour vs 1 day)
- Relay timeout values (1s, 3s, 5s)
- Virtual scrolling threshold (100 items vs 500 items)

**Measure impact on:**

- Perceived speed ratings
- Bounce rate (leave before first content)
- Session duration
- Posts viewed per session
- Return rate

---

## Citations & Sources

**Note:** All sources from 2024-2025 to ensure currency for this fast-moving technology.

### Data & Analytics (Nostr-Specific)

<a id="data-19"></a>
**[Data:19]** User complaints - Nostr apps "slow and clunky", "clients blasting entire message history"
- Source: Community feedback on Nostr performance (2024-2025)
- URL: Aggregated from GitHub issues and user reports

<a id="data-20"></a>
**[Data:20]** Crash reports across Nostr clients
- Primal Android crashes (September & October 2025)
- Amethyst community join/leave crashes, permission crashes
- Nostur iOS crashes and slow loading
- Damus Issue #3163 (July 2025) bug/crash report
- Source: GitHub issues from major Nostr clients (2024-2025)

<a id="data-21"></a>
**[Data:21]** Database performance bottleneck
- Users identify database as "core bottleneck" for slow feed loading
- Comparison to Twitter's Redis architecture shows gap
- Source: Nostr developer discussions (2024-2025)

<a id="data-22"></a>
**[Data:22]** Amethyst battery drain issues
- Background video playback silently draining battery on loop
- Multi-relay connections (up to 100 relays) causing resource consumption
- Improper WebSocket connection management when app backgrounds
- Source: Amethyst GitHub issues (2024-2025)

<a id="data-23"></a>
**[Data:23]** Relay infrastructure statistics
- Only 639 relays online globally (80% in North America & Europe)
- Default nostr-relay config: ~100 requests/second, hundreds of connections
- Default SQLite backend: "worst performance"
- Free relays: Higher latency, less reliable
- Paid relays: Lower latency, better uptime
- Source: Nostr relay monitoring (2024-2025)

<a id="data-24"></a>
**[Data:24]** Multi-relay coordination overhead
- Clients can open "hundreds of WebSocket connections simultaneously"
- Each relay gets one WebSocket connection for all communication
- Source: Nostr protocol analysis (2024-2025)

<a id="data-25"></a>
**[Data:25]** Black Hat USA 2025: "Not Sealed: Practical Attacks on Nostr"
- Several clients (Damus, Iris, FreeFrom, Plebstr past versions) omit signature verification entirely
- Trade-off: Performance improvement vs security vulnerability
- Recommendation: Enforce mandatory signature verification in NIP-01
- Source: Black Hat USA 2025 security research

<a id="data-26"></a>
**[Data:26]** nostrdb optimization
- "Unfairly fast" embedded database
- Zero-copy, O(1) access patterns
- Memory-mapped LMDB design (copied from strfry)
- Source: nostrdb documentation (2024-2025)

<a id="data-27"></a>
**[Data:27]** Primal Caching Service
- Server-side caching for Nostr events
- Open sourced, archived December 2024
- Source: Primal project (2024-2025)

### Academic & UX Research (Universal Principles)

<a id="research-31"></a>
**[Research:31]** Nielsen Norman Group - Response Time Limits (Updated January 2024)
- **100ms:** Perceived as instant response
- **1.0 second:** Upper limit of user's flow of thought
- **10 seconds → Now 5 seconds:** "Probably safe to say the upper limit of 10 seconds is now 5 seconds or even less"
- Original research from 1993, updated for 2024 expectations
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- Date: Updated January 2024

<a id="research-32"></a>
**[Research:32]** Website Speed & Bounce Rate Statistics
- **32% bounce increase** from 1 to 3 seconds load time
- **90% bounce increase** at 5 seconds
- **123% bounce increase** at 10 seconds
- **53% of mobile visitors** leave if page takes >3 seconds
- Even **1-second delay can double bounce rate**
- URL: https://www.sitebuilderreport.com/website-speed-statistics
- Date: 2025

<a id="research-33"></a>
**[Research:33]** User Experience Conversion Statistics
- Sites loading in **1 second achieve 39% conversion rates**
- **1.9% conversion at 2.4 seconds**
- **0.6% conversion at 5.7 seconds**
- **7% loss in conversion** for every 1-second delay
- URL: https://techjury.net/industry-analysis/user-experience-stats/
- Date: 2025

<a id="research-34"></a>
**[Research:34]** Skeleton Loading Screen Design
- **Users perceive skeleton screens as 30% faster** than identical sites with spinners
- **Skeleton screens feel 20% faster** than spinners for identical wait times
- Best for wait times under 10 seconds
- Best for container-based components: tiles, lists, grids, data tables, cards
- URL: https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/
- Date: 2024

<a id="research-35"></a>
**[Research:35]** Skeleton Screens vs Spinners Performance
- Skeleton screens keep users more engaged during wait times
- One developer saw dramatic UX improvement switching from spinners to skeletons despite identical backend speed
- URL: https://ui-deploy.com/blog/skeleton-screens-vs-spinners-optimizing-perceived-performance
- Date: 2024

<a id="research-36"></a>
**[Research:36]** React Optimistic UI with useOptimistic Hook
- **React 19's `useOptimistic` Hook** provides elegant solution
- Currently available in React Canary version
- Essential for social media: "seeing a comment appear the moment it's clicked"
- URL: https://blog.logrocket.com/understanding-optimistic-ui-react-useoptimistic-hook/
- Date: 2024

<a id="research-37"></a>
**[Research:37]** Material Design 3 Loading Indicators
- **New Material 3 Expressive loading indicator** (2025)
- For wait times **less than 5 seconds**
- Looping shape morph sequence with 7 unique Material 3 shapes
- Updated linear and circular progress indicators with wavy shapes
- URL: https://m3.material.io/components/progress-indicators/guidelines
- URL: https://9to5google.com/2025/05/16/material-3-expressive-loading-indicator/
- Date: May 2025

<a id="research-38"></a>
**[Research:38]** React Design Patterns Best Practices
- Optimistic UI especially vital in seamless interaction environments like social media
- Facebook example: Like button immediately turns blue without waiting for server
- Mimics immediate responsiveness
- URL: https://www.telerik.com/blogs/react-design-patterns-best-practices
- Date: 2025

<a id="research-39"></a>
**[Research:39]** Caching Strategy with Service Workers
- Service Workers + IndexedDB significantly improves performance and UX
- Enables robust offline-first applications
- URL: https://peerdh.com/blogs/programming-insights/implementing-a-caching-strategy-for-indexeddb-with-service-workers
- Date: September 2024

<a id="research-40"></a>
**[Research:40]** Offline-First Web Applications
- Service Workers + Cache API enhance PWAs with offline access and improved loading speed
- **Cache-then-network** or **stale-while-revalidate** for dynamic content
- **2024 HTTP Archive data:** Nearly 45% of high-rated installable PWAs use hybrid approach
- Use **Cache API** for application files, **IndexedDB** for other data
- URL: https://techtruth.dev/building-offline-first-web-applications-with-service-workers-and-indexeddb
- Date: August 2025

<a id="research-41"></a>
**[Research:41]** JavaScript Bundle Size Reduction
- Tree shaking, code splitting, dependency analysis most effective strategies
- Can reduce bundle sizes by **20-50%** in typical applications
- Use **dynamic import()** expressions to split modules at runtime
- URL: https://dev.to/hamzakhan/reducing-javascript-bundle-size-with-code-splitting-in-2025-3927
- Date: 2025

<a id="research-42"></a>
**[Research:42]** Webpack Bundle Splitting Best Practices
- **Recommended approach:** Dynamic imports conforming to ECMAScript proposal
- **Performance budgets for 2024:**
  - Initial bundle: **<250KB gzipped** for fast 3G
  - Total bundle: **<1MB gzipped** for good UX
- URL: https://infervour.com/blog/how-to-split-webpack-bundles-for-code-splitting
- Date: 2025

<a id="research-43"></a>
**[Research:43]** React Server Components Performance Impact
- **Real-world example:** E-commerce company migrating product listing pages to RSC:
  - **40% improvement in load times**
  - **15% increase in conversion rates** (within first quarter)
- RSCs not hydrated on server, no JS shipped to client
- **Significantly increases page load time** and **reduces total JavaScript bundle size**
- URL: https://www.developerway.com/posts/react-server-components-performance
- URL: https://www.codertrove.com/articles/react-server-components-2025-nextjs-performance
- Date: 2024-2025

<a id="research-44"></a>
**[Research:44]** Native Image Lazy Loading Performance
- **On 4G:** 97.5% of lazy-loaded images fully loaded within 10ms of becoming visible
- **On 2G:** 92.6% loaded within 10ms
- Native `loading="lazy"` attribute - no custom code needed
- **Modern image formats** (WebP, AVIF) more efficient than JPEG/PNG
- URL: https://web.dev/articles/browser-level-image-lazy-loading
- URL: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading
- URL: https://medium.com/@iliketoplay/lazy-loading-images-in-2024-9b579e885e07
- Date: 2024-2025

<a id="research-45"></a>
**[Research:45]** React Performance Optimization Complete Guide
- Virtual scrolling/windowing essential for large lists
- Only render visible items to reduce DOM operations
- URL: https://dev.to/amaresh_adak/react-performance-optimization-from-slow-to-lightning-fast-complete-guide-2025-19hl
- Date: 2025

<a id="research-46"></a>
**[Research:46]** Virtualization in React for Large Lists
- Virtualization optimizes by only rendering visible elements
- **Significantly reduces:**
  - DOM updates (only visible elements in DOM)
  - Memory usage (fewer elements = less memory)
  - Render time (minimized DOM operations)
- URL: https://medium.com/@ignatovich.dm/virtualization-in-react-improving-performance-for-large-lists-3df0800022ef
- Date: 2024

<a id="research-47"></a>
**[Research:47]** Smooth Scrolling with TanStack Virtual
- **TanStack Virtual** most popular library (November 2024)
- **Best practices:**
  - Wrap row components in `React.memo()` to prevent unnecessary re-renders
  - Combine virtual scrolling with API pagination
  - Render 1-2 additional items above/below visible area (overscan)
- URL: https://borstch.com/blog/development/achieving-smooth-scrolling-in-react-with-tanstack-virtual-best-practices
- Date: November 2024

<a id="research-48"></a>
**[Research:48]** Academic Research: Nostr Replication Overhead
- Title: "Replication of posts across relays enhances censorship-resistance but introduces significant overhead"
- Authors: Yiluo Wei & Gareth Tyson
- **Proposed Solutions:** Control replication count + reduce retrieval overhead
- **Client-side optimizations:** Designed to avoid complicated relay coordination
- Source: arXiv 2402.05709 (February 2024, revised September 2025)

<a id="research-49"></a>
**[Research:49]** INP Replaces FID as Core Web Vital (March 2024)
- **INP (Interaction to Next Paint) replaced FID** as Core Web Vital on March 12, 2024
- Chrome team introduced INP as experimental metric in May 2022
- After nearly 2 years of testing, became stable Core Web Vital
- FID officially deprecated, removed from Google Search Console
- URL: https://web.dev/blog/inp-cwv-march-12
- Date: March 12, 2024

<a id="research-50"></a>
**[Research:50]** First Input Delay vs Interaction to Next Paint
- **Key differences between INP and FID:**
  - **Scope:** FID measures only first interaction; INP considers all interactions
  - **What measured:** FID only measures input delay; INP measures input delay + event handler processing + browser paint time
- **Good INP score:** <200 milliseconds
- **Poor INP score:** >500 milliseconds
- URL: https://vercel.com/blog/first-input-delay-vs-interaction-to-next-paint
- Date: 2024

<a id="research-51"></a>
**[Research:51]** Animation Performance and Frame Rate
- **For 60fps:** Browser has **16.7 milliseconds** to execute scripts, recalculate styles/layout, and repaint
- Complex transitions may raise paint times from 5ms to 30ms per frame, breaching 16ms budget
- **GPU-accelerated properties** (transform, opacity) provide consistently smoother results
- URL: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate
- URL: https://moldstud.com/articles/p-exploring-the-impact-of-animation-on-performance-essential-insights-for-developers
- Date: Updated November 2025, September 2025

<a id="research-52"></a>
**[Research:52]** Rakuten Core Web Vitals Case Study
- **Rakuten 24** (rigorous A/B test):
  - Good LCP led to **up to 61.13% increase in conversion rate**
  - **26.09% increase in revenue per visitor**
  - **11.26% increase in average order value**
- Optimized landing page: **53.4% increase in revenue per visitor**, **33.1% increase in conversion rate**
- URL: https://web.dev/case-studies/rakuten
- Date: 2024

<a id="research-53"></a>
**[Research:53]** Core Web Vitals Business Impact
- Sites meeting Core Web Vitals thresholds show:
  - **24% reduction in page abandonment**
  - **8-10% conversion increase** for every 0.1-second improvement in load time
- **Carpe:** 52% improvement in LCP → **10% increase in traffic**, **5% increase in conversion**, **15% increase in revenue**
- **Relive:** Over 50% faster LCP → **3% increase in conversion**, **6% decrease in bounce**, **9% increase in page views/session**
- URL: https://bluetriangle.com/blog/web-vitals-impact-lcp
- URL: https://nitropack.io/blog/post/improve-conversion-rates-cwv
- Date: 2024

### Case Studies & Examples (Mainstream Apps)

<a id="example-11"></a>
**[Example:11]** Twitter/X Algorithm Performance
- Recommendation algorithm runs **~5 billion times per day**
- Completes each execution in **under 1.5 seconds on average**
- Massive scale delivering personalized content
- "For You" feed: Mixes followed accounts + recommendations
- URL: https://sproutsocial.com/insights/twitter-algorithm/
- Date: 2025

<a id="example-12"></a>
**[Example:12]** Instagram Algorithm and Performance
- **Instagram's AI** picks 500 posts per user, ranks by predictions
- Instagram explicitly advises: **"Engage your audience in the first three seconds"**
- **Reels outperform:** 2.46% engagement rate vs 2% average (2025)
- URL: https://sproutsocial.com/insights/instagram-algorithm/
- Date: 2025

<a id="example-13"></a>
**[Example:13]** TikTok Performance Optimization
- **Watch time first**—if video keeps eyes glued, it flies on FYP
- TikTok loves content that **stops scrolls cold**—video needs grabber upfront
- Brands post **6 times per week on average**
- URL: https://www.dashsocial.com/social-media-benchmarks/tiktok
- Date: 2025

<a id="example-14"></a>
**[Example:14]** Starbucks PWA Case Study
- Significantly enhanced customer experience with offline functionality
- **2x increase in daily active users**
- **53% rise in order completions**
- **PWAs typically weigh <1 megabyte**, sites load in **less than 1 second**
- URL: https://www.solutelabs.com/blog/the-state-of-progressive-web-applications
- Date: 2025

<a id="example-15"></a>
**[Example:15]** Discord Performance Improvements (2024-2025)
- **84% reduction in overall crash rate** on iOS (August 2024)
- Improved chat renderer performance on Android (October 2024)
- **30% faster server switching** on mobile
- **Up to 80% faster GIF Picker** loading times
- **~25% reduction in API latency**
- URL: https://discord.com/blog/discord-update-december-19-2024-changelog
- Date: December 19, 2024

---

**See [References & Bibliography](../appendices/references.md) for full citation details.**

---

*This pattern is part of the [Nostr UX Research Study](../README.md). See [OUTLINE.md](../OUTLINE.md) for the complete study structure.*

---

**Next Pattern:** [Pattern 5: Progressive Complexity](05-progressive-complexity.md) 🚧 Coming Soon
