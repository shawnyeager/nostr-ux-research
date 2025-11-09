---
title: "Pattern 4: Performance & Perceived Speed"
weight: 4
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

{{< callout type="warning" >}}
**Performance Impact on Bounce Rates:** [[Research:32]](#research-32) [[Research:33]](#research-33)

- **32% bounce rate increase** from 1 to 3 seconds load time
- **90% increase** at 5 seconds
- **53% of mobile visitors leave** if page takes >3 seconds to load

Speed directly impacts retention. Every second of delay costs users.
{{< /callout >}}

**Additional research:** [[Research:34]](#research-34) [[Research:35]](#research-35) [[Research:31]](#research-31)

- Perceived performance more important than actual performance
- Visual feedback during delays dramatically improves satisfaction
- 100ms response threshold for "instant" feeling

---

## Universal Principles

These principles apply to any application prioritizing performance and user experience.

### 1. Perceived Performance

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

{{< callout type="important" >}}
**Response Time Thresholds** (Updated January 2024) [[Research:31]](#research-31)

- **<100ms:** Feels instantaneous - user perceives direct manipulation
- **<1 second:** Maintains flow of thought - no interruption to mental process
- **<5 seconds:** Keeps attention - Nielsen updated threshold from 10s to 5s in 2024

**For social apps:**
- Button clicks must respond <100ms (disable, show spinner, change color)
- Feed refresh should show first content <1s
- Full feed load acceptable up to 5s if progressive
{{< /callout >}}

**What to do for each:**

- **0-100ms:** Show immediate UI change (button press, loading indicator)
- **100ms-1s:** Use optimistic UI, show skeleton screens
- **1-5s:** Progressive loading, show percentage/status, allow cancellation
- **>5s:** Must be background operation with notification on completion

### 3. Skeleton Screens

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

### 5. Caching & Offline-First

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

### 6. Bundle Size & Initial Load

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

### 7. Incremental Rendering

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

- <a id="data-19"></a>**[[Data:19]](/docs/resources/references#data-21)** User complaints: Nostr apps "slow and clunky", "clients blasting entire message history" (2024-2025)
- <a id="data-20"></a>**[[Data:20]](/docs/resources/references#data-22)** Crash reports across Primal, Amethyst, Nostur, Damus clients (2024-2025)
- <a id="data-21"></a>**[[Data:21]](/docs/resources/references#data-23)** Database identified as "core bottleneck" for slow feed loading; gap vs Twitter's Redis architecture (2024-2025)
- <a id="data-22"></a>**[[Data:22]](/docs/resources/references#data-24)** Amethyst battery drain: Background video loops, up to 100 relay connections, improper WebSocket management (2024-2025)
- <a id="data-23"></a>**[[Data:23]](/docs/resources/references#data-18)** Only 639 relays online; default SQLite backend "worst performance"; free relays slower than paid (2024-2025)
- <a id="data-24"></a>**[[Data:24]](/docs/resources/references#data-25)** Clients can open hundreds of WebSocket connections simultaneously; one per relay (2024-2025)
- <a id="data-25"></a>**[[Data:25]](/docs/resources/references#data-26)** Black Hat USA 2025: Some clients omit signature verification for performance; security tradeoff (2025)
- <a id="data-26"></a>**[[Data:26]](/docs/resources/references#data-27)** nostrdb: "Unfairly fast" embedded database with zero-copy, O(1) access, LMDB design (2024-2025)
- <a id="data-27"></a>**[[Data:27]](/docs/resources/references#data-28)** Primal Caching Service: Server-side caching for Nostr events, open sourced (December 2024)

### Academic & UX Research (Universal Principles)

- <a id="research-31"></a>**[[Research:31]](/docs/resources/references#research-28)** Response Time Limits: 100ms instant, 1s flow uninterrupted, 5s (updated from 10s) keeps attention (NN/g, January 2024)
- <a id="research-32"></a>**[[Research:32]](/docs/resources/references#research-42)** Speed & Bounce: 32% bounce at 3s, 90% at 5s, 123% at 10s; 53% mobile visitors leave >3s (2025)
- <a id="research-33"></a>**[[Research:33]](/docs/resources/references#research-43)** Conversion Impact: 39% at 1s load, 1.9% at 2.4s, 0.6% at 5.7s; 7% loss per second delay (2025)
- <a id="research-34"></a>**[[Research:34]](/docs/resources/references#research-34)** Skeleton screens perceived 30% faster than spinners; best for <10s waits, container components (LogRocket, 2024)
- <a id="research-35"></a>**[[Research:35]](/docs/resources/references#research-44)** Skeleton vs Spinners: More engaging, dramatic UX improvement despite identical speed (UI-Deploy, 2024)
- <a id="research-36"></a>**[[Research:36]](/docs/resources/references#research-30)** React 19 useOptimistic Hook: Elegant optimistic UI solution for social media (LogRocket, 2024)
- <a id="research-37"></a>**[[Research:37]](/docs/resources/references#research-45)** Material Design 3 Expressive loading indicator for <5s waits; 7 unique shape morphs (May 2025)
- <a id="research-38"></a>**[[Research:38]](/docs/resources/references#research-46)** React Optimistic UI vital for social media: Facebook like button turns blue instantly (Telerik, 2025)
- <a id="research-39"></a>**[[Research:39]](/docs/resources/references#research-47)** Service Workers + IndexedDB significantly improves performance, enables offline-first apps (September 2024)
- <a id="research-40"></a>**[[Research:40]](/docs/resources/references#research-48)** Offline-First PWAs: 45% use hybrid approach; Cache API for files, IndexedDB for data (August 2025)

- <a id="research-41"></a>**[[Research:41]](/docs/resources/references#research-49)** JS Bundle Size: Tree shaking, code splitting, dynamic import() reduce bundles 20-50% (2025)
- <a id="research-42"></a>**[[Research:42]](/docs/resources/references#research-50)** Webpack Bundles: <250KB gzipped initial, <1MB total for good UX (2025)
- <a id="research-43"></a>**[[Research:43]](/docs/resources/references#research-51)** React Server Components: 40% faster loads, 15% conversion increase; no JS shipped to client (2024-2025)
- <a id="research-44"></a>**[[Research:44]](/docs/resources/references#research-52)** Native Lazy Loading: 97.5% images load <10ms on 4G, 92.6% on 2G; WebP/AVIF more efficient (2024-2025)
- <a id="research-45"></a>**[[Research:45]](/docs/resources/references#research-53)** React Performance: Virtual scrolling/windowing essential for large lists, reduces DOM ops (2025)
- <a id="research-46"></a>**[[Research:46]](/docs/resources/references#research-54)** React Virtualization: Only render visible elements; reduces DOM updates, memory, render time (2024)
- <a id="research-47"></a>**[[Research:47]](/docs/resources/references#research-55)** TanStack Virtual: Most popular library; use React.memo(), combine with pagination, overscan 1-2 items (November 2024)
- <a id="research-48"></a>**[[Research:48]](/docs/resources/references#research-56)** Nostr Replication Overhead (arXiv): Control replication count, reduce retrieval overhead (Wei & Tyson, September 2025)
- <a id="research-49"></a>**[[Research:49]](/docs/resources/references#research-57)** INP Replaces FID as Core Web Vital: March 12, 2024; measures all interactions vs first only (2024)
- <a id="research-50"></a>**[[Research:50]](/docs/resources/references#research-58)** INP vs FID: INP measures input+processing+paint; Good <200ms, Poor >500ms (Vercel, 2024)
- <a id="research-51"></a>**[[Research:51]](/docs/resources/references#research-59)** 60fps Animation: 16.7ms budget; GPU-accelerated transform/opacity smoother (MDN, November 2025)
- <a id="research-52"></a>**[[Research:52]](/docs/resources/references#research-60)** Rakuten CWV: Good LCP = 61% conversion increase, 26% revenue/visitor increase (web.dev, 2024)
- <a id="research-53"></a>**[[Research:53]](/docs/resources/references#research-61)** Core Web Vitals Impact: 24% less abandonment, 8-10% conversion per 0.1s improvement (2024)

### Case Studies & Examples (Mainstream Apps)

- <a id="example-11"></a>**[[Example:11]](/docs/resources/references#example-17)** Twitter/X: Algorithm runs 5 billion times/day, <1.5s average execution for personalized For You feed (2025)
- <a id="example-12"></a>**[[Example:12]](/docs/resources/references#example-18)** Instagram: AI picks 500 posts/user; "Engage in first 3 seconds"; Reels 2.46% engagement (2025)
- <a id="example-13"></a>**[[Example:13]](/docs/resources/references#example-19)** TikTok: Watch time priority; content must "stop scrolls cold"; brands post 6x/week (2025)
- <a id="example-14"></a>**[[Example:14]](/docs/resources/references#example-20)** Starbucks PWA: 2x daily users, 53% more completions; <1MB, <1s load (2025)
- <a id="example-15"></a>**[[Example:15]](/docs/resources/references#example-21)** Discord: 84% crash reduction iOS, 30% faster switching, 80% faster GIFs, 25% less latency (Dec 2024)

---

**See [References & Bibliography](/docs/resources/references) for full citation details.**

---
