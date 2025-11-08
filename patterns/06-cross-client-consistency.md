---
title: "Pattern 6: Cross-Client Consistency & Data Integrity"
weight: 6
---

## Problem Statement

### Current State

**Data loss destroying user trust:**

- Users losing all their follows when switching between clients (Primal → Damus → Snort) [[Data:14]](#data-14)
- [[Data:15]](#data-15) Race conditions in kind:3 events causing catastrophic follow list destruction when clients sync
- Profile changes (display name, bio, avatar) not appearing across all apps
- Posts disappearing from feeds when relays go offline [[Data:12]](#data-12)
- Users forced to manually re-follow everyone after switching clients
- No visibility into what data is synced vs. out-of-sync

**The trust problem:**

- [[Research:66]](#research-66) 85% of consumers deleted a mobile app due to privacy/data concerns (2025 Digital Trust Index)
- [[Research:67]](#research-67) Over 80% of businesses saw boost in customer loyalty after focusing on data integrity
- [[Research:68]](#research-68) Distributed systems face "scams are everywhere" problem—UX equals trust
- Users don't trust Nostr after losing data once
- "It just works" expectation from mainstream apps not met

**The user experience impact:**

- Users need 5-6 different clients to work around data sync bugs
- Constant anxiety about data loss
- Manual verification required (checking if posts/follows synced)
- Support requests: "Where did my followers go?"
- Abandonment: "I lost everything, I'm done"

### Root Causes

1. **Multi-relay coordination without conflict resolution**: Events spread across relays can conflict with no automatic resolution
2. **Race conditions in replaceable events**: Kind:3 (follows), kind:0 (metadata) can overwrite newer data with stale data [[Data:15]](#data-15)
3. **No sync state visibility**: Users have zero indication of what's synced, syncing, or failed
4. **Relay downtime causing silent data loss**: [[Data:12]](#data-12) [[Data:17]](#data-17) Content on downed relays simply disappears
5. **Client-side caching inconsistencies**: Different clients cache different subsets of relays
6. **No conflict detection or user notification**: Data conflicts happen silently, users discover loss later

### Why This Matters

**Research shows:** [[Research:69]](#research-69) [[Research:70]](#research-70) [[Research:71]](#research-71)

- **72% of users expect instant data sync** across devices (real-time expectations) [[Research:70]](#research-70)
- **45% of users expect content to display correctly** across different devices [[Research:72]](#research-72)
- **Consistency reduces cognitive load** by allowing users to apply learned patterns [[Research:73]](#research-73) [[Research:74]](#research-74)
- Users notice sync conflicts immediately and become confused [[Research:69]](#research-69)
- Failing to maintain consistency increases cognitive load and forces users to learn something new in each client [[Research:73]](#research-73)

**The stakes for Nostr:**
> "When users lose data once, they never fully trust the platform again."

---

## Universal Principles

These principles apply to any distributed system managing user data across multiple clients.


### 1. Maintain Consistency & Adhere to Standards

**Research backing:** [[Research:73]](#research-73) [[Research:74]](#research-74) [[Research:75]](#research-75)

**Core principle (Nielsen Norman Group, 2024):** [[Research:73]](#research-73)

- When applications maintain consistency, users know what to expect
- Learnability is increased, confusion is reduced
- Failing to maintain consistency increases users' cognitive load

**Two types of consistency:**

1. **Internal consistency**: Within a single product or family of products
2. **External consistency**: Following established industry conventions

**Application to Nostr clients:**

- **Internal:** User's data should be identical across all their own client instances
- **External:** Follow conventions from mainstream social apps (Twitter, Instagram) for how data syncs

**Material Design 3 research:** [[Research:75]](#research-75)

- Backed by 46 research studies involving 18,000+ participants worldwide
- Provides common language of components and patterns for cohesive cross-platform experiences
- Consistency creates seamless, intuitive experiences


### 2. User Expectations for Real-Time Sync

**Research backing:** [[Research:70]](#research-70) [[Research:72]](#research-72) [[Research:76]](#research-76)

**User expectations (2024-2025 studies):**

- [[Research:70]](#research-70) **72% of users expect instant reflection** of changes in financial data
- [[Research:72]](#research-72) **45% expect content to display correctly** across different devices
- [[Research:76]](#research-76) **69% appreciate quick reply times**, 59% expect chatbot response within 5 seconds

**Real-time sync is no longer optional:**
> "This degree of synchronization allows people to seamlessly switch between devices without losing the continuity of their user experience." [[Research:70]](#research-70)

**Cross-device expectations:** [[Research:77]](#research-77)

- Delivering seamless cross-device experience is "cornerstone of digital marketing success" in 2025
- Users expect frictionless transitions between devices
- Content, state, and interactions must persist


### 3. Offline-First with Visible Sync States

**Research backing:** [[Research:78]](#research-78) [[Research:79]](#research-79) [[Research:80]](#research-80)

**Modern user expectations:** [[Research:78]](#research-78)
> "Users today do not wish to view a plain 'You're offline' message—PWA 2.0 confirms applications function even in the absence of the internet."

**Essential UX elements:** [[Research:78]](#research-78) [[Research:79]](#research-79)

- **Offline/Online/Sync state indicators** are table stakes
- Users can create/edit content offline
- Content automatically syncs when connectivity returns
- **Seamless experience:** Users don't notice when they're offline [[Research:80]](#research-80)

**Progressive Web App patterns:** [[Research:79]](#research-79)

- Apps learn usage patterns and pre-cache likely-needed content
- Offline editing queues for automatic sync
- "Offline sync isn't optional anymore—it's a must-have for great UX"


### 4. Conflict Resolution Strategies

**Research backing:** [[Research:69]](#research-69) [[Research:81]](#research-81) [[Research:82]](#research-82)

**The challenge:** [[Research:69]](#research-69)
> "When multiple users modify the same record offline, conflicts occur during synchronization, causing users to become confused by sync conflicts."

**Common strategies:** [[Research:81]](#research-81) [[Research:82]](#research-82)

1. **Last Write Wins (LWW)**: Simple timestamp-based resolution
2. **CRDTs (Conflict-free Replicated Data Types)**: For complex data structures
3. **Manual resolution**: UI for users to choose which version to keep
4. **Version vectors**: Track updates across nodes for conflict detection [[Research:82]](#research-82)

**Best practices:** [[Research:83]](#research-83)

- Communicate expectations to users about potential delays
- Provide clear sync status
- Allow manual reconciliation when conflicts can't be auto-resolved
- Inform users about conflict resolution strategy in use


### 5. Trust Through Transparency

**Research backing:** [[Research:67]](#research-67) [[Research:68]](#research-68) [[Research:66]](#research-66)

**Trust crisis:** [[Research:66]](#research-66)

- 2025 Digital Trust Index: universal decline in trust for digital services
- Not one sector reached above 50% approval for data trustworthiness
- **85% of consumers deleted mobile apps due to data privacy concerns**

**Trust-building strategies:** [[Research:68]](#research-68) [[Research:67]](#research-67)

- **Transparency**: Real-time information about transaction progress reduces anxiety [[Research:68]](#research-68)
- **Clear explanations**: Detailed, clear risk explanations before approving actions [[Research:68]](#research-68)
- **Privacy measures**: 80% of businesses saw customer loyalty boost from privacy focus [[Research:67]](#research-67)
- **User control**: In decentralized systems, users own all control—UX must reflect this [[Research:68]](#research-68)

**Critical for distributed systems:** [[Research:68]](#research-68)
> "In an industry where scams are everywhere, UX = trust. Blockchain cannot guarantee the quality of service of DApps, which entirely depends on the services' performance."


### 6. Design for Distributed Systems Constraints

**Research backing:** [[Research:83]](#research-83) [[Research:82]](#research-82) [[Research:84]](#research-84)

**Core challenges:** [[Research:83]](#research-83) [[Research:84]](#research-84)

- Maintaining consistency across distributed replicas is inherently difficult
- Concurrent access without conflicts requires careful state management
- Network partitions and latency cause unavoidable delays

**Design strategies:** [[Research:82]](#research-82) [[Research:83]](#research-83)

- **Set realistic expectations**: Inform users about sync delays [[Research:83]](#research-83)
- **Version tracking**: Use version vectors to track updates across nodes [[Research:82]](#research-82)
- **Conflict detection**: Identify conflicts early before users discover data loss
- **Graceful degradation**: System remains usable even during network issues

**State management best practices:** [[Research:84]](#research-84)

- Enable concurrent access without conflicts
- Optimize resource utilization for performance and responsiveness
- Provide scalability to handle increasing loads
- Maintain consistency across distributed replicas

---

## Nostr-Specific Considerations

### Challenge 1: Kind:3 Race Conditions Destroying Follow Lists

**The problem:** [[Data:14]](#data-14) [[Data:15]](#data-15)

Replaceable events (kind:3 contact lists) use "last event wins" logic, but without proper synchronization, clients can overwrite newer data with stale cached data.

**Documented failures:** [[Data:14]](#data-14)
> "I was trying out the new Iris Nostr client and decided to follow someone new. From that moment on, I noticed my follows count reset from about 130 to 1."

**Root cause:** [[Data:15]](#data-15)
> "A very common experience on Nostr is that of losing follows due to race conditions when sending kind 3 events... Earlier this week someone signed in to Coracle, their contact list failed to fully sync before they followed someone, and they ended up deleting all their follows."

**Why it happens:**

1. User has 130 follows stored across relays
2. User opens new client (Iris/Coracle)
3. Client begins fetching kind:3 from relays (slow, async)
4. Before sync completes, user follows 1 new person
5. Client publishes NEW kind:3 with only that 1 follow
6. Newer event (with 1 follow) replaces older event (with 130 follows)
7. All follows lost

**NIP-02 specification:** [[Protocol:2]](#protocol-2)
> "Each new contact list event is a replaceable event that supersedes previous ones. Must contain ALL pubkeys the user is following, as event replaces previous list entirely."

**The solution pattern:**

- **Block follow/unfollow during initial sync**
- Show "Syncing your follows... X of Y relays" progress indicator
- Only enable follow button once kind:3 fully loaded from majority of relays
- Client-side validation: "You have 130 follows. Are you sure you want to replace with 1?"

**Code pattern:**

```javascript
let contactListFullySynced = false;
let contactListSyncProgress = { loaded: 0, total: relays.length };

async function syncContactList() {
  const events = await Promise.all(
    relays.map(r => r.fetchKind3())
  );
  
  // Merge all kind:3 events, taking the one with latest created_at
  const merged = mergeContactLists(events);
  
  contactListFullySynced = true;
  enableFollowButtons();
}

function followUser(pubkey) {
  if (!contactListFullySynced) {
    showWarning("Still syncing your follows. Please wait...");
    return;
  }
  
  // Safe to follow now
  const newContactList = [...currentContacts, pubkey];
  publishKind3(newContactList);
}
```

### Challenge 2: Profile Metadata Consistency (Kind:0)

**The problem:**
Similar to kind:3, kind:0 (profile metadata) is replaceable and suffers from the same race conditions.

**User experience:**

- Update profile picture in Damus
- Open Primal → old avatar shows
- Update bio in Primal
- Open Damus → new bio, but avatar reverted to old one
- Clients publishing partial kind:0 events that overwrite full profiles

**Solution pattern:**

1. Always fetch kind:0 from all relays before allowing edits
2. Merge strategy: take the most recent complete event
3. Warn user if editing while kind:0 is still syncing
4. Show "Last synced" timestamp for profile data

### Challenge 3: Relay Downtime and Silent Data Loss

**The problem:** [[Data:12]](#data-12) [[Data:17]](#data-17)

**Relay infrastructure reality:** [[Data:17]](#data-17)

- Only 639 relays online globally (two-thirds reduction from previous year)
- 95% struggle to cover operational costs
- 20% have faced significant downtime

**What happens when relays go down:** [[Data:12]](#data-12)
> "When the Damus relay was taken down for upgrades, users' content was potentially wiped and gone... content stored on that relay was reduced to remaining on one less relay."

**User experience:**

- Post from phone → published to 5 relays
- 2 relays go offline
- Open desktop client → only connects to 3 relays still online
- Post missing from feed
- User: "Did I imagine posting this?"

**Solution pattern:**

- **Multi-relay redundancy**: Always publish to ≥5 relays
- **Relay health monitoring**: Track which relays are responsive
- **Retry failed publishes**: Queue and retry events that failed to publish
- **User visibility**: "Posted to 3 of 5 relays. Retrying..."

### Challenge 4: NIP-65 Relay List Metadata Sync

**The specification:** [[Protocol:5]](#protocol-5)

Kind:10002 events advertise user's write relays (OUTBOX) and read relays (INBOX). Other clients use this to discover where to find your content and where to send you mentions.

**The problem:**

- User sets relay preferences in Client A
- Client B doesn't implement NIP-65 properly
- Client C reads wrong relays from outdated kind:10002
- Messages/mentions don't reach user
- User thinks they're being ignored

**Solution pattern:**

1. Always publish kind:10002 to well-known relays
2. Keep relay lists small (2-4 relays as recommended)
3. Validate relay list on every client launch
4. Show "Your relay preferences are synced across all clients" confirmation

---

## Pattern Library: Concrete Solutions

### Pattern 1: Sync State Visibility

**Problem:** Users have zero visibility into what's synced vs. out-of-sync.

**Solution:** Show sync status in UI with clear, actionable information.

**Implementation:**

```javascript
// Sync state indicator component
function SyncStatusBadge({ syncState }) {
  const states = {
    syncing: {
      icon: "⟳",
      text: "Syncing...",
      color: "blue",
      detail: `${syncState.progress.loaded}/${syncState.progress.total} relays`
    },
    synced: {
      icon: "✓",
      text: "Synced",
      color: "green",
      detail: `Last synced ${formatRelativeTime(syncState.lastSync)}`
    },
    conflict: {
      icon: "⚠",
      text: "Sync conflict",
      color: "orange",
      detail: "Tap to resolve"
    },
    error: {
      icon: "✗",
      text: "Sync failed",
      color: "red",
      detail: `${syncState.failedRelays.length} relays unreachable`
    },
    offline: {
      icon: "○",
      text: "Offline",
      color: "gray",
      detail: "Changes will sync when online"
    }
  };
  
  const state = states[syncState.status];
  
  return (
    <div className={`sync-badge sync-${state.color}`}>
      <span className="sync-icon">{state.icon}</span>
      <span className="sync-text">{state.text}</span>
      <span className="sync-detail">{state.detail}</span>
    </div>
  );
}
```

**Where to show:**

- Settings screen (persistent)
- Profile edit screen (while saving)
- Follow/unfollow actions (transient)
- Post composition (before publishing)

**Example UI:**

```
┌─────────────────────────────────┐
│ Profile                    ✓ Synced │
│ Last synced 2 mins ago           │
├─────────────────────────────────┤
│ Display name: Alice              │
│ Bio: Nostr developer             │
│                                  │
│ [Save changes]                   │
└─────────────────────────────────┘

While saving:
┌─────────────────────────────────┐
│ Profile              ⟳ Syncing... │
│ Saving to 3/5 relays             │
├─────────────────────────────────┤
```

### Pattern 2: Optimistic Updates with Rollback

**Problem:** Users expect instant feedback, but relays may fail or conflict.

**Solution:** Optimistic UI that rolls back on failure.

**Implementation:**

```javascript
async function followUser(pubkey) {
  // Optimistic update
  const previousState = [...currentFollows];
  currentFollows.push(pubkey);
  updateUI(); // User sees follow immediately
  
  try {
    const kind3Event = createKind3Event(currentFollows);
    const results = await publishToRelays(kind3Event, relays);
    
    const successfulRelays = results.filter(r => r.success);
    
    if (successfulRelays.length < (relays.length * 0.6)) {
      // Failed to publish to majority
      throw new Error("Insufficient relays confirmed");
    }
    
    // Success - show confirmation
    showToast(`Following ${getUsername(pubkey)}`);
    
  } catch (error) {
    // Rollback optimistic update
    currentFollows = previousState;
    updateUI();
    
    // Show user-friendly error
    showError(
      "Couldn't follow user",
      "Some relays are unreachable. Try again?",
      { retry: () => followUser(pubkey) }
    );
  }
}
```

**User experience:**

1. User clicks "Follow" → Button immediately shows "Following"
2. Background: Publishing to 5 relays
3. Success (3+ relays confirm) → Toast: "Following Alice"
4. Failure (<3 relays) → Revert button, show error with retry option

### Pattern 3: Conflict Resolution UI

**Problem:** When conflicts occur, users need a way to resolve them.

**Solution:** Clear conflict resolution interface.

**Implementation:**

```javascript
function ConflictResolutionModal({ conflict }) {
  const { localVersion, remoteVersion } = conflict;
  
  return (
    <Modal title="Sync Conflict Detected">
      <p>Your {conflict.dataType} has different versions:</p>
      
      <div className="conflict-options">
        <VersionCard 
          label="This Device" 
          data={localVersion}
          lastModified={localVersion.timestamp}
          action={() => resolveConflict('keep-local')}
        />
        
        <VersionCard 
          label="Other Devices" 
          data={remoteVersion}
          lastModified={remoteVersion.timestamp}
          action={() => resolveConflict('keep-remote')}
        />
        
        <button onClick={() => resolveConflict('merge')}>
          Merge Both (Keep All Follows)
        </button>
      </div>
    </Modal>
  );
}

function resolveConflict(strategy) {
  switch (strategy) {
    case 'keep-local':
      publishToAllRelays(localVersion);
      break;
    case 'keep-remote':
      updateLocalState(remoteVersion);
      break;
    case 'merge':
      const merged = mergeVersions(localVersion, remoteVersion);
      publishToAllRelays(merged);
      updateLocalState(merged);
      break;
  }
}
```

**When to show:**

- Follow list conflicts (different follows on different relays)
- Profile metadata conflicts (different bio/avatar)
- Kind:10002 relay list conflicts

### Pattern 4: Background Sync with Queue

**Problem:** Network interruptions cause events to fail publishing.

**Solution:** Queue events for retry when connectivity returns.

**Implementation:**

```javascript
class SyncQueue {
  constructor() {
    this.queue = [];
    this.isOnline = navigator.onLine;
    
    window.addEventListener('online', () => this.processQueue());
    window.addEventListener('offline', () => this.isOnline = false);
  }
  
  async publishEvent(event, relays) {
    if (!this.isOnline) {
      this.queue.push({ event, relays, attempts: 0 });
      showToast("Offline. Will sync when connected.");
      return;
    }
    
    try {
      await this.attemptPublish(event, relays);
    } catch (error) {
      this.queue.push({ event, relays, attempts: 0 });
      this.scheduleRetry();
    }
  }
  
  async processQueue() {
    this.isOnline = true;
    
    while (this.queue.length > 0 && this.isOnline) {
      const item = this.queue.shift();
      
      try {
        await this.attemptPublish(item.event, item.relays);
      } catch (error) {
        item.attempts++;
        
        if (item.attempts < 3) {
          this.queue.push(item); // Retry
        } else {
          showError(`Failed to sync ${item.event.kind} after 3 attempts`);
        }
      }
    }
  }
  
  async attemptPublish(event, relays) {
    const results = await Promise.allSettled(
      relays.map(r => r.publish(event))
    );
    
    const successful = results.filter(r => r.status === 'fulfilled');
    
    if (successful.length < relays.length * 0.6) {
      throw new Error("Insufficient successful publishes");
    }
  }
  
  scheduleRetry() {
    setTimeout(() => this.processQueue(), 5000); // Retry in 5s
  }
}

// Usage
const syncQueue = new SyncQueue();

function publishPost(content) {
  const event = createKind1Event(content);
  syncQueue.publishEvent(event, userRelays);
}
```

**User experience:**

- Offline: "Offline. Will sync when connected."
- Connection returns: Auto-sync queued events
- Partial failure: Automatic retry with exponential backoff
- Final failure: User notification with manual retry option

### Pattern 5: Relay Health Monitoring

**Problem:** Users don't know which relays are working vs. failing.

**Solution:** Monitor and display relay health.

**Implementation:**

```javascript
class RelayHealthMonitor {
  constructor(relays) {
    this.relays = relays.map(url => ({
      url,
      status: 'unknown',
      lastSuccess: null,
      lastFailure: null,
      consecutiveFailures: 0,
      avgLatency: null
    }));
    
    this.startMonitoring();
  }
  
  async checkRelayHealth(relay) {
    const startTime = Date.now();
    
    try {
      await relay.connect();
      const latency = Date.now() - startTime;
      
      relay.status = latency < 1000 ? 'healthy' : 'slow';
      relay.lastSuccess = Date.now();
      relay.consecutiveFailures = 0;
      relay.avgLatency = latency;
      
    } catch (error) {
      relay.status = 'unreachable';
      relay.lastFailure = Date.now();
      relay.consecutiveFailures++;
      
      if (relay.consecutiveFailures >= 3) {
        this.suggestRelayReplacement(relay);
      }
    }
  }
  
  suggestRelayReplacement(failedRelay) {
    showNotification(
      "Relay Offline",
      `${failedRelay.url} has been unreachable. Would you like to replace it?`,
      {
        action: 'Replace',
        onAction: () => this.showRelayRecommendations()
      }
    );
  }
  
  getHealthSummary() {
    return {
      healthy: this.relays.filter(r => r.status === 'healthy').length,
      slow: this.relays.filter(r => r.status === 'slow').length,
      unreachable: this.relays.filter(r => r.status === 'unreachable').length,
      total: this.relays.length
    };
  }
  
  startMonitoring() {
    // Check health every 60 seconds
    setInterval(() => {
      this.relays.forEach(r => this.checkRelayHealth(r));
    }, 60000);
  }
}

// UI Component
function RelayHealthIndicator({ health }) {
  const { healthy, slow, unreachable, total } = health;
  
  return (
    <div className="relay-health">
      <div className="health-summary">
        {healthy}/{total} relays healthy
      </div>
      
      {unreachable > 0 && (
        <div className="health-warning">
          ⚠ {unreachable} relay{unreachable > 1 ? 's' : ''} offline
        </div>
      )}
      
      <button onClick={showDetailedHealth}>View Details</button>
    </div>
  );
}
```

---

## Anti-Patterns: What Not To Do

### Anti-Pattern 1: Silent Data Loss

**What it looks like:**

```
User follows 50 people
→ Switches to new client
→ New client shows 0 follows
→ No error, no warning, no explanation
→ User discovers days later
```

**Why it fails:**

- Destroys user trust immediately
- Users assume THEY did something wrong
- No path to recovery
- Makes switching clients terrifying

**What to do instead:**

- Validate data on every client launch
- "We found 50 follows on relays but 0 locally. Sync now?"
- Show sync progress and completion
- Confirm successful sync: "All 50 follows synced ✓"

### Anti-Pattern 2: No Conflict Visibility

**What it looks like:**

```
User's profile has:
- Relay A: Avatar = photo1.jpg, Bio = "Developer"
- Relay B: Avatar = photo2.jpg, Bio = "Designer"  
- Relay C: Avatar = photo1.jpg, Bio = "Developer"

Client silently picks one, user never knows conflict exists
```

**Why it fails:**

- User makes changes that randomly get overwritten
- No understanding of why data keeps reverting
- Can't fix what they can't see
- Feels like the app is "broken" or "buggy"

**What to do instead:**

- Detect conflicts during sync
- Show conflict resolution UI: "We found 2 versions of your profile. Which should we keep?"
- Log conflicts for debugging
- Prevent NEW conflicts by locking edits during sync

### Anti-Pattern 3: "Just Works" Optimism Without Validation

**What it looks like:**

```javascript
function followUser(pubkey) {
  currentFollows.push(pubkey);
  publishKind3(currentFollows); // Fire and forget
  updateUI(); // Assume it worked
}
```

**Why it fails:**

- No validation that publish succeeded
- User sees "Following" but event never reached relays
- False sense of completion
- Data loss discovered later

**What to do instead:**

- Wait for relay confirmations
- Validate minimum threshold reached (e.g., 3/5 relays)
- Rollback optimistic update on failure
- Show retry option with explanation

### Anti-Pattern 4: Exposing Technical Sync Details

**What it looks like:**

```
Error: Failed to publish kind:3 event to wss://relay.damus.io
REQ subscription timed out after 5000ms
EVENT rejected: duplicate pubkey in tags
```

**Why it fails:**

- Users don't understand protocol terminology
- Technical jargon creates anxiety
- No actionable next step
- Makes app feel developer-focused, not user-focused

**What to do instead:**

```
Can't update your follows right now.

Some servers aren't responding.
We'll keep trying in the background.

[Retry Now]  [Cancel]
```

### Anti-Pattern 5: No Offline Support

**What it looks like:**

```
User on airplane
→ Opens app
→ "No connection" error
→ Can't read old posts
→ Can't queue new posts
→ App is completely unusable offline
```

**Why it fails:**

- Users expect offline functionality (it's 2025)
- Mainstream apps work offline (Twitter, Instagram, etc.)
- Lost opportunity for engagement
- Users switch to apps that work offline

**What to do instead:**

- Cache content for offline reading
- Allow composing posts offline
- Queue events for publish when online
- "You're offline. 3 posts will send when you reconnect."

### Anti-Pattern 6: Overwriting Newer Data with Stale Cache

**What it looks like:**

```
1. User has 100 follows on relays
2. New client starts, caches "0 follows" initially
3. Before full sync, user follows 1 person
4. Client publishes kind:3 with [that 1 person]
5. Newer event (1 follow) replaces older event (100 follows)
6. All 100 follows lost forever
```

**Why it fails:**

- Catastrophic data loss
- No way to recover (event is overwritten on relays)
- User loses ALL follows with one action
- Documented repeatedly in [[Data:14]](#data-14) [[Data:15]](#data-15)

**What to do instead:**

```javascript
function followUser(pubkey) {
  // BLOCK action until sync completes
  if (!kind3FullySynced) {
    showWarning("Still loading your follows. Please wait...");
    return;
  }
  
  // Safe to proceed now
  const newFollows = [...currentFollows, pubkey];
  publishKind3(newFollows);
}
```

### Anti-Pattern 7: Hidden Relay Selection

**What it looks like:**

```
Client picks 3 "default" relays internally
User has no idea which relays their data is on
One relay goes offline
User's posts disappear with no explanation
```

**Why it fails:**

- User has no control or visibility
- Can't troubleshoot when things break
- Violates Nostr's principle of user control
- Creates support burden ("why are my posts missing?")

**What to do instead:**

- Show which relays are being used
- Allow ADVANCED users to customize (but smart defaults)
- Indicate relay health status
- Explain impact: "Your posts are saved on 5 servers. 4 are online."

---

## Validation Checklist

### Data Integrity Metrics

**Track data loss incidents:**

- [ ] **Follow list preservation rate:** % of users who maintain their follows across client switches
  - Target: >99%
  - Track: Follows before switch vs. after switch
  
- [ ] **Profile metadata consistency:** % of users with identical profiles across all relays
  - Target: >95%
  - Measure: Sample user profiles from random relays, compare
  
- [ ] **Post availability:** % of posts findable across majority of relays
  - Target: >95% of posts on ≥3 relays
  - Method: Random sampling of recent posts
  
- [ ] **Event publish success rate:** % of events successfully published to majority of relays
  - Target: >98%
  - Track per event type: kind:0, kind:1, kind:3

### Sync Performance Metrics

**Measure sync speed:**

- [ ] **Time to initial sync:** How long from app open to "fully synced"?
  - Target: <5 seconds for kind:0, kind:3
  - Target: <10 seconds for recent kind:1 feed

- [ ] **Sync conflict rate:** How often do conflicts occur?
  - Track: Conflicts per 1000 events
  - Baseline: Measure current rate
  - Goal: Reduce by >50%

- [ ] **Offline queue success:** % of queued events that successfully sync
  - Target: >95%
  - Track: Events queued vs. events successfully published

### User Experience Metrics

**Trust and confidence:**

- [ ] **Data loss complaints:** Support tickets about lost follows/posts
  - Track weekly
  - Goal: <5 reports per 1000 active users

- [ ] **Client switching rate:** % of users who successfully switch clients without data loss
  - Measure: Users who opened different client within 7 days
  - Target: >95% retain all follows

- [ ] **Perceived reliability:** User survey
  - Question: "Do you trust that your data is safe and consistent?"
  - Target: >80% agree

### Sync State Visibility

**User awareness:**

- [ ] **Sync state visibility:** % of users who notice sync indicators
  - Method: User testing
  - Target: >70% can explain what sync status means

- [ ] **Conflict resolution:** % of users who successfully resolve conflicts
  - Track: Conflicts resolved vs. conflicts that led to data loss
  - Target: >90% successfully resolved

### Technical Validation

**Relay coordination:**

- [ ] **Multi-relay publish coverage:** % of events published to all configured relays
  - Target: >90%
  - Alert if drops below 80%

- [ ] **Relay health detection:** How quickly are failing relays detected?
  - Target: <60 seconds
  - Action: Auto-suggest replacement after 3 consecutive failures

- [ ] **Event deduplication:** % of duplicate events prevented
  - Measure: Events with identical content/timestamp
  - Target: 0 duplicates published

---

## A/B Testing Opportunities

### Test 1: Sync State Visibility

- **A:** No sync indicators (current state in many clients)
- **B:** Persistent sync badge showing real-time status
- **Measure:** User confidence survey, data loss reports

### Test 2: Conflict Resolution Strategy

- **A:** Auto-resolve using Last Write Wins
- **B:** Show conflict UI, let user choose
- **Measure:** Data satisfaction, "lost data" complaints

### Test 3: Follow Action Blocking

- **A:** Allow follow during sync (risk data loss)
- **B:** Block follow until sync complete with explanation
- **Measure:** Follow list preservation rate, user frustration

### Test 4: Offline Queue Visibility

- **A:** Silent queuing (no indication)
- **B:** "3 posts queued. Will send when online."
- **Measure:** User understanding, perceived reliability

---

## Citations & Sources

**Note:** All sources from 2024-2025 to ensure currency.

### Universal UX Research

<a id="research-66"></a>
**[Research:66]** Data Security & User Trust (2025)

- **Source:** "Data Security in Mobile Apps: Protecting User Privacy in 2025 and Beyond" - Sidekick Interactive
- **URL:** <https://www.sidekickinteractive.com/uncategorized/data-security-in-mobile-apps-protecting-user-privacy-in-2025-and-beyond/>
- **Date:** 2025
- **Key finding:** 2025 Digital Trust Index revealed universal decline in trust for digital services compared to last year, with not one sector reaching above 50% approval. 85% of consumers deleted a mobile app due to privacy concerns.

<a id="research-67"></a>
**[Research:67]** Elevate Mobile App Privacy to Win User Trust

- **Source:** NowSecure Blog
- **URL:** <https://www.nowsecure.com/blog/2024/02/07/elevate-mobile-app-privacy-to-win-user-trust/>
- **Date:** February 7, 2024
- **Key finding:** 81% of U.S. adults are concerned about how companies handle their data (Pew Research). Cisco 2024 Data Privacy Benchmark Study found that 80% of businesses saw a boost in customer loyalty after focusing on privacy measures.

<a id="research-68"></a>
**[Research:68]** dApp Design Challenges: Trust in Decentralized Systems

- **Source:** "dApp Design Challenges 2024: Overcoming Web3 Design Obstacles" - The Alien Design
- **URL:** <https://www.thealien.design/insights/dapp-design-challenges>
- **Date:** 2024
- **Key finding:** In an industry where scams are everywhere, UX = trust. Blockchain cannot guarantee the quality of service of DApps, which entirely depends on the services' performance, creating critical need for trust system.

<a id="research-69"></a>
**[Research:69]** Offline Functionality Sync Issues

- **Source:** "Offline Functionality in No-Code Mobile Applications: Solving Sync Issues in 2025" - Mark AI Code
- **URL:** <https://markaicode.com/offline-no-code-app-sync-solutions-2025/>
- **Date:** 2025
- **Key finding:** When multiple users modify the same record offline, conflicts occur during synchronization, causing users to become confused by sync conflicts. Handling conflicts is crucial to maintain data consistency and provide smooth user experience.

<a id="research-70"></a>
**[Research:70]** Real-Time Data Synchronization Best Practices

- **Source:** "Best Practices for Real-Time Data Synchronization Across Devices" - Pixel Free Studio
- **URL:** <https://blog.pixelfreestudio.com/best-practices-for-real-time-data-synchronization-across-devices/>
- **Date:** 2024
- **Key finding:** 72% of users expect instant reflection of changes in their financial data, making real-time sync technologies like WebSocket or Firebase essential. This degree of synchronization allows people to seamlessly switch between devices without losing continuity of user experience.

<a id="research-71"></a>
**[Research:71]** Cross-Platform UX Consistency Across Devices

- **Source:** "Cross-Platform UX: Designing Consistency Across Devices" - Medium
- **URL:** <https://medium.com/@harsh.mudgal_27075/cross-platform-ux-designing-consistency-across-devices-42ad853c7e15>
- **Date:** October 2025
- **Key finding:** Data and content synchronization, along with clearly signposted cross-device interactions, are key components of continuity in cross-device UX. Continuity issues are noted as some of the biggest usability challenges in IoT.

<a id="research-72"></a>
**[Research:72]** 2025 Connected Consumer Innovation with Trust

- **Source:** "2025 Connected Consumer: Innovation with Trust" - Deloitte Insights
- **URL:** <https://www.deloitte.com/us/en/insights/industry/telecommunications/connectivity-mobile-trends-survey.html>
- **Date:** 2025
- **Key finding:** US households spent average of $896 on connected devices in past year. 45% of users expect content to display correctly across different devices, emphasizing importance of responsive design.

<a id="research-73"></a>
**[Research:73]** Maintain Consistency and Adhere to Standards (NN/g)

- **Source:** "Maintain Consistency and Adhere to Standards (Usability Heuristic #4)" - Nielsen Norman Group
- **URL:** <https://www.nngroup.com/articles/consistency-and-standards/>
- **Date:** January 16, 2024
- **Key finding:** When websites and applications adhere to standards, users know what to expect, learnability is increased, and confusion is reduced. Failing to maintain consistency may increase users' cognitive load by forcing them to learn something new.

<a id="research-74"></a>
**[Research:74]** 10 Usability Heuristics for User Interface Design

- **Source:** Nielsen Norman Group
- **URL:** <https://www.nngroup.com/articles/ten-usability-heuristics/>
- **Date:** January 30, 2024
- **Key finding:** Improve learnability by maintaining both types of consistency: internal (within single product/family) and external (follow established industry conventions).

<a id="research-75"></a>
**[Research:75]** Material 3 Expressive Design System

- **Source:** "Material 3 Expressive: What's New and Why it Matters for Designers" - Supercharge Design
- **URL:** <https://supercharge.design/blog/material-3-expressive>
- **Date:** 2025
- **Key finding:** Backed by more user research than any previous update, with 46 research studies involving more than 18,000 participants worldwide. Material Design provides common language of components, motion, and interaction patterns helping teams create cohesive, cross-platform experiences.

<a id="research-76"></a>
**[Research:76]** UX User Experience Statistics and Trends (2025)

- **Source:** "150+ UX (User Experience) Statistics and Trends (Updated for 2025)" - UserGuiding
- **URL:** <https://userguiding.com/blog/ux-statistics-trends>
- **Date:** Updated for 2025
- **Key finding:** 69% of users appreciate digital assistants' quick reply times, with 59% anticipating chatbot reply within 5 seconds. Demonstrates high user expectations for immediate responses in digital interactions.

<a id="research-77"></a>
**[Research:77]** Seamless Cross-Device Experiences UX/UI Trends 2025

- **Source:** "Seamless Cross-Device Experiences: UX/UI Trends in 2025" - 123 Internet Agency
- **URL:** <https://www.123internet.agency/seamless-cross-device-experiences-ux-ui-trends-in-2025/>
- **Date:** 2025
- **Key finding:** Delivering seamless cross-device experience has become cornerstone of digital marketing success as we move into 2025, with UX/UI trends shaped by technological advancements, changing user behaviours, and increasing demand for frictionless digital experiences.

<a id="research-78"></a>
**[Research:78]** Progressive Web Apps 2.0: Offline-First UX

- **Source:** "Progressive Web Apps 2.0: Must-Have Features for Offline-First UX" - Dazzle Birds
- **URL:** <https://dazzlebirds.com/blog/progressive-web-apps-2-0-must-have-features-for-offline-first-ux/>
- **Date:** 2024-2025
- **Key finding:** Users today do not wish to view plain "You're offline" message - PWA 2.0 confirms applications function even in absence of internet. Offline/Online/Sync state indicators are essential UX elements.

<a id="research-79"></a>
**[Research:79]** Progressive Web App Design Strategies 2025

- **Source:** "Progressive Web App Design Strategies: Hidden UX Secrets for 2025" - Lollypop Studio
- **URL:** <https://lollypop-studio.medium.com/progressive-web-app-design-strategies-hidden-ux-secrets-for-2025-4d86754e0f7f>
- **Date:** October 2025
- **Key finding:** PWAs will learn usage patterns and pre-cache content you're likely to need, ensuring seamless offline experience. PWAs will allow you to create and edit content offline, which will then be automatically synced to cloud when you regain connectivity.

<a id="research-80"></a>
**[Research:80]** Offline-First Mobile App Development 2025

- **Source:** "Offline-First Mobile App Development in 2025 and Its Importance" - HashStudioz
- **URL:** <https://www.hashstudioz.com/blog/what-is-offline-first-mobile-app-development-and-why-it-matters-in-2025/>
- **Date:** 2025
- **Key finding:** Successful offline functionality isn't just about handling disconnection—it's about creating experience so smooth that users don't notice when they're offline. Offline sync isn't optional anymore—it's must-have for great user experience.

<a id="research-81"></a>
**[Research:81]** Offline File Sync Developer Guide 2024

- **Source:** "Offline File Sync: Developer Guide 2024" - Daily.dev
- **URL:** <https://daily.dev/blog/offline-file-sync-developer-guide-2024>
- **Date:** 2024
- **Key finding:** Building offline-capable apps leads to sync conflicts, requiring practical ways to handle these situations. Common strategies include Last Write Wins (LWW), CRDTs for complex data structures, and manual resolution providing users with seamless way to address conflicts.

<a id="research-82"></a>
**[Research:82]** Version Vector for Conflict Resolution

- **Source:** "Distributed Systems Design Pattern: Version Vector for Conflict Resolution" - Shanoj
- **URL:** <https://shanoj.com/2024/11/14/distributed-systems-design-pattern-version-vector-for-conflict-resolution-supply-chain-use/>
- **Date:** November 14, 2024
- **Key finding:** When inventory records are updated independently in different warehouses, data conflicts can arise due to network partitions or concurrent updates. Version Vector pattern addresses these challenges by tracking updates across nodes.

<a id="research-83"></a>
**[Research:83]** Distributed Data Consistency Challenges & Solutions

- **Source:** "Distributed Data Consistency: Challenges & Solutions" - Endgrate
- **URL:** <https://endgrate.com/blog/distributed-data-consistency-challenges-and-solutions>
- **Date:** 2024-2025
- **Key finding:** For systems using eventual consistency, systems often implement conflict resolution strategies to handle conflicting changes. They might use timestamps to resolve conflicts or allow users to manually reconcile conflicting changes. Communicate expectations: Inform users about potential delays in data updates.

<a id="research-84"></a>
**[Research:84]** Handling State and State Management (System Design)

- **Source:** "Handling State and State Management | System Design" - GeeksforGeeks
- **URL:** <https://www.geeksforgeeks.org/handling-state-and-state-management-system-design/>
- **Date:** 2024-2025
- **Key finding:** In distributed systems, effective state management enables concurrent access without conflicts, optimizes resource utilization to improve performance and responsiveness, and provides scalability to handle increasing loads. Maintaining consistency across distributed replicas is challenging.

### Nostr-Specific Data

<a id="data-12"></a>
**[Data:12]** Relay Data Loss During Downtime

- **Source:** "User Relays" by Sondre Bjellås - Medium
- **URL:** <https://medium.com/@sondreb/user-relays-7e23e2ac2590>
- **Date:** April 2025
- **Key findings:** "When the Damus relay was taken down for upgrades, users' content was potentially wiped and gone... content stored on that relay was reduced to remaining on one less relay"

<a id="data-14"></a>
**[Data:14]** Catastrophic Follow List Loss

- **Source:** "All my nostr follows gone - how do I get them back?" - Stacker News
- **URL:** <https://stacker.news/items/182519>
- **Date:** 2024
- **Key findings:** User reported "I was trying out the new Iris Nostr client and decided to follow someone new. From that moment on, I noticed my follows count reset from about 130 to 1 (that last follow)... At least one developer reported losing 75% of their follows"

<a id="data-15"></a>
**[Data:15]** Kind 3 Race Condition Root Cause

- **Source:** "Add kinds 10 and 11 to prevent race conditions" - GitHub PR #349
- **URL:** <https://github.com/nostr-protocol/nips/pull/349>
- **Date:** Opened 2023, discussed through 2024
- **Key findings:** "A very common experience on Nostr is that of losing follows due to race conditions when sending kind 3 events... Earlier this week someone signed in to Coracle, their contact list failed to fully sync before they followed someone, and they ended up deleting all their follows"

<a id="data-17"></a>
**[Data:17]** Relay Network Decline

- **Source:** "Improving the Availability and Reliability of the Relay Network"
- **URL:** <https://research.dorahacks.io/2024/04/30/nostr-relay-incentive/>
- **Date:** April 23, 2024
- **Key findings:** "Only 639 relays online globally (two-thirds reduction from previous year). 95% of relays struggle to cover operational costs. 20% have faced significant downtime"

<a id="protocol-2"></a>
**[Protocol:2]** NIP-02: Contact List and Petnames

- **Source:** <https://github.com/nostr-protocol/nips/blob/master/02.md>
- **Key details:** Defines kind 3 events for following lists. Each new contact list event is replaceable event that supersedes previous ones. Must contain all pubkeys the user is following, as event replaces previous list entirely.

<a id="protocol-5"></a>
**[Protocol:5]** NIP-65: Relay List Metadata (Outbox Model)

- **Source:** <https://github.com/nostr-protocol/nips/blob/master/65.md>
- **Key details:** Defines kind 10002 events for user's relay preferences. Helps other users discover which relays to use when looking for someone's content or publishing content meant for them to see.

---

**See [References & Bibliography](/docs/resources/references) for full citation details.**

---

{{< cards >}}
  {{< card link="../../resources/references" title="References" subtitle="Full bibliography & sources" icon="book-open" >}}
  {{< card link="../" title="All Patterns" subtitle="Back to patterns overview" icon="collection" >}}
{{< /cards >}}
