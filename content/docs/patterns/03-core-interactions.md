---
title: "Pattern 3: Core Interaction Loops"
weight: 3
---

## Problem Statement

### Current State

**Core interactions failing:**

- [[Data:1]](#data-1) Posts get stuck during publishing, requiring retry mechanisms
- [[Data:2]](#data-2) Reactions (likes/zaps) fail due to NIP-25 inefficiency - clients must gather thousands of events just to count likes for a single note
- [[Data:3]](#data-3) Relay downtime causes content loss - when relays go down, users' content is potentially wiped
- [[Data:4]](#data-4) Following/unfollowing catastrophically unreliable - users report losing 130 follows down to 1 after following someone new; at least one developer lost 75% of their follows
- [[Data:5]](#data-5) Missing notifications widespread - zap notifications fail to trigger, quoting users without p-tags doesn't generate notifications, mobile push notifications face fundamental OS limitations

**Trust erosion:**

- Users lose confidence when basic actions don't work
- "Did my post actually send?" uncertainty
- Cross-client inconsistency destroys trust
- No feedback when actions fail

**The retention impact:**

- Users abandon apps that feel "broken"
- Unreliable core interactions more damaging than missing features
- Trust lost is hard to rebuild

### Root Causes

1. **Multi-relay coordination failures**: Events not propagating to all necessary relays
2. **No publish confirmation**: Apps don't verify events were actually accepted by relays
3. **Race conditions**: Rapid actions cause conflicts
4. **Missing error handling**: Silent failures leave users confused
5. **Optimistic UI without validation**: Shows success before confirming
6. **Cross-client event conflicts**: Different clients make conflicting updates

### Why This Matters

> "A very common experience on Nostr is that of losing follows due to race conditions when sending kind 3 events... someone signed in to Coracle, their contact list failed to fully sync before they followed someone, and they ended up deleting all their follows." [[Data:6]](#data-6)

{{< callout type="error" >}}
**Trust threshold**: 94% of users cite design as the main reason they mistrust or reject apps; 40% abandon poorly performing alternatives. [[Research:1]](#research-1)[[Data:7]](#data-7)

With Nostr retention trending to 0% and only 10,000-12,000 daily active users, **core interactions must be >99% reliable to rebuild trust.**
{{< /callout >}}

---

## Universal Principles

These principles apply to any social application, regardless of underlying architecture.

### 1. Perceived Reliability

**Research backing:** [[Research:1]](#research-1) Framna 2024 survey of 3,000+ users found that 94% cited design as the main reason they mistrusted or rejected apps, and 40% said poor performance would make them prefer better alternatives. Performance depends on Speed, Security, and Reliability - if an app doesn't load quickly or show signs of reliability, users immediately uninstall. [[Research:2]](#research-2) Only 35% of social media users feel safe participating on platforms (down from 44%), with all 9 major platforms losing trust ground in 2024.

**Core principle:** Users prefer slower, reliable interactions over fast but unreliable ones.

**Key insight:** [[Research:3]](#research-3) Response times under 1.0 second keep user's flow of thought uninterrupted, but feedback must come within 100ms to feel instantaneous. A 200ms delay with clear feedback feels better than instant action that might have failed.

**Mainstream approaches:**

- **Twitter/X:** Shows "Sending..." state, confirms when tweet is live [[Example:1]](#example-1)
- **Instagram:** [[Example:2]](#example-2) Upload progress bar, "Posted" confirmation; 2024 algorithm now heavily weights "shares per reach" as key engagement signal, showing Instagram prioritizes reliable delivery confirmation
- **Discord:** Message appears with "Sending..." then checkmark when delivered
- **Slack:** Pending indicator, retry on failure
- **TikTok:** [[Example:3]](#example-3) Shows content immediately with no loading state - up/down swiping is "game-changer" for intuitive, effortless navigation

**What users need:**

1. Immediate visual feedback that action was received
2. Loading/processing state
3. Clear success/failure indication
4. Easy retry on failure

### 2. Optimistic UI with Validation

**Research backing:** [[Research:4]](#research-4) React introduced official `useOptimistic` hook in 2024 for showing different state while async actions are underway, indicating optimistic UI is now a framework-level standard pattern. [[Research:5]](#research-5) Optimistic UI makes applications feel faster and more responsive by updating UI immediately before server confirmation, creating the illusion of instant response. [[Research:6]](#research-6) Optimistic UI excels when actions are nearly always successful (messages, posts, preferences) but is NOT recommended for critical operations like flight booking or cash transfers. Must properly handle failure cases and revert state.

**The pattern:**

1. Show the change immediately (optimistic)
2. Send the request in background
3. Validate the response
4. Rollback or show error if failed

{{< callout type="info" >}}
**When to use optimistic UI:**

- ✅ Actions users expect to succeed (like, follow, post)
- ✅ When you can easily rollback
- ✅ When instant feedback improves experience
- ❌ Critical actions that can't be undone
- ❌ When failure rate is high
- ❌ When rollback is confusing
{{< /callout >}}

**Example: Liking a post**

```
User clicks like
→ Heart turns red immediately (optimistic)
→ Send like event to server
→ If success: keep heart red
→ If failure: revert to gray + show error toast
```

### 3. Progressive Feedback States

**Research backing:** [[Research:7]](#research-7) Nielsen Norman Group's "Visibility of System Status" (2024) states this is the "most basic guideline of UI design" - keep users informed about what's going on with appropriate feedback within reasonable time, ideally immediately. [[Research:8]](#research-8) Skeleton screens are now the norm for full-page loading, showing wireframe immediately before real content. [[Research:9]](#research-9) Best for 2-10 second wait times, must be consistent with final screen layout, and should include subtle animations (pulsating, fading) to decrease perceived time. [[Research:10]](#research-10) Error states are often prioritized over success states, but both must work together - success feedback is as important as error feedback for user confidence.

**States every interaction needs:**

1. **Idle** - Ready for action
2. **Initiated** - User clicked/tapped
3. **Processing** - Request in flight
4. **Success** - Confirmed complete
5. **Error** - Failed with explanation

**Visual indicators:**

- Initiated: Button state change (pressed) within 100ms
- Processing: Skeleton screen (2-10s) or spinner, progress bar
- Success: Checkmark, color change, brief confirmation
- Error: Red indicator, error message, retry button

### 4. Error Messages That Help

**Research backing:** [[Research:11]](#research-11) Nielsen Norman Group's 2024 guidelines emphasize helping users recover from errors by clearly identifying problems, allowing users to access and correct fields easily. [[Research:12]](#research-12) Error handling must follow Jakob Nielsen's heuristic: "Help Users Recognize, Diagnose, and Recover" - tell users error occurred, explain what went wrong, show how to recover. [[Research:13]](#research-13) Error messages must have three required elements: (1) Problem statement (what went wrong), (2) Cause explanation (why it happened), (3) Solution suggestion (how to fix it). Use neutral and empathetic language, never blame users.

**Bad error messages:**

- "Error occurred" (no information)
- "Network error" (too vague)
- "Failed to post event" (what do I do?)

**Good error messages:**

- "Your post couldn't be sent. Check your connection and try again."
- "Follow action failed. The user's profile might not be available right now."
- "Like wasn't saved. Tap to retry."

{{< callout >}}
**Error message checklist:**

- Explains what happened in plain language
- Suggests what user can do
- Provides easy retry mechanism
- Doesn't expose technical jargon
{{< /callout >}}

### 5. Idempotency

**Research backing:** [[Research:14]](#research-14) The Post/Redirect/Get (PRG) pattern prevents double-submission by converting POST to GET (which is idempotent), preventing double-clicks and page refreshes from creating duplicate orders. [[Research:15]](#research-15) Idempotency improves UX by ensuring consistent results, avoiding duplicate actions, and providing predictable and stable interactions. Users benefit from reliability and confidence that actions won't have unintended consequences. [[Research:16]](#research-16) Best practices include using exponential back-off for retries (increasing time between attempts), classifying errors as transient (retry) vs permanent (user action needed), and keeping users informed during retries.

**Core principle:** Users should be able to retry actions without creating duplicates or causing problems.

**Implementation:**

- Use unique IDs for actions (Nostr event IDs serve this purpose)
- Relays/clients check if action already completed
- Retry produces same result as initial request
- UI prevents accidental double-taps (disable button after click)

**Example: Publishing a post**

```
Generate unique post ID client-side (Nostr event ID based on content)
User clicks "Post" → button disables immediately
→ Send event with ID
→ If network fails, user retries
→ Relay sees duplicate event ID, accepts without creating duplicate
→ User sees their post (not duplicate)
```

---

## Nostr-Specific Considerations

### Challenge 1: Multi-Relay Publishing & Verification

**The protocol reality:**

- Events must be published to multiple relays
- Different users read from different relays
- No guarantee all relays will accept the event
- Some relays may be slow or offline

**Current failures:**

- Post to 3 relays, only 2 accept it
- Other users don't see your post (they use the 3rd relay)
- No way to know which relays failed

**Solution patterns:**

- Publish to user's write relays + common relays
- Wait for confirmation from at least N relays before showing success
- Retry failed relays in background
- Show partial success: "Posted to 4 of 5 relays"

### Challenge 2: Event ID vs Relay Confirmation

**The issue:** Nostr clients can create the event and event ID locally, but that doesn't mean relays accepted it.

**Bad pattern:**

```typescript
const event = createEvent(content)
// Event has ID, but hasn't been sent!
showInFeed(event) // Optimistic UI
await publishToRelays(event) // Might fail, but post already shown
```

**Good pattern:**

```typescript
const event = createEvent(content)
showAsPending(event) // Show as "sending"
const results = await publishToRelays(event)
if (results.successCount >= MIN_RELAYS) {
  showAsPublished(event)
} else {
  showAsPartiallyPublished(event, results)
  retryFailedRelays(event, results.failed)
}
```

### Challenge 3: Following/Unfollowing Consistency

**The problem:** Kind 3 (contact list) events replace the entire list. Race conditions cause lost follows.

**Current failures:**

- User follows Alice in Client A
- User follows Bob in Client B (doesn't know about Alice yet)
- Client B publishes contact list without Alice
- Alice is now unfollowed

**Solutions:**

- Lock: Don't allow simultaneous follow/unfollow in same client
- Read-before-write: Always fetch latest contact list before modifying
- Conflict detection: Check if contact list changed since we read it
- Merge strategy: Combine follows from multiple sources

**NIP considerations:**

- [[Protocol:1]](#protocol-1) NIP-02: Contact List and Petnames - defines kind 3 events for following lists; entire list is replaceable, causing the race condition problem documented above
- [[Protocol:2]](#protocol-2) NIP-65: Relay List Metadata - defines kind 10002 events for user's preferred relay hints to help others find their content

### Challenge 4: Reaction/Like Propagation

**The problem:** Reactions (Kind 7) need to propagate to where the original post's author can see them.

**Where to publish reactions:**

- User's write relays (so their followers see they liked something)
- Original post author's relays (so author sees the reaction)
- Relays where the original post was found

**Current failures:**

- Publish reaction only to your relays
- Author never sees it (they don't read your relays)
- Reaction count appears inconsistent across clients

### Challenge 5: Zap Workflow Complexity

**The multi-step process:**

1. Get author's Lightning address (from Kind 0 metadata)
2. Request invoice from author's Lightning service
3. Pay invoice via Lightning wallet
4. Lightning service publishes Kind 9735 zap receipt to relays
5. Client detects zap receipt and shows it

**Failure points:**

- Author has no Lightning address
- Lightning service is offline
- User's wallet can't pay invoice
- Zap receipt not published
- Client doesn't poll for receipts

**Current UX:**

- User clicks zap
- Wallet opens... then nothing
- No confirmation if zap went through
- Zap count doesn't update

**Better patterns:**

- Check for Lightning address before showing zap option
- Show clear steps: "Requesting invoice..." → "Opening wallet..." → "Confirming..."
- Poll for zap receipts after payment
- Show "Zapped! Receipt pending..." state
- Fallback if receipt never arrives

---

## Pattern Library: Concrete Solutions

### Pattern A: Reliable Post Publishing

**Problem:** Posts don't reliably appear for all users across relays.

**Solution:** Multi-phase publish with confirmation.

**Implementation:**

```typescript
async function publishPost(content: string): Promise<PublishResult> {
  const event = await createSignedEvent(content)

  // Phase 1: Show optimistic UI
  showPostAsPending(event)

  // Phase 2: Publish to relays in parallel
  const targetRelays = [
    ...getUserWriteRelays(),
    ...getCommonRelays() // High-traffic relays
  ]

  const results = await Promise.allSettled(
    targetRelays.map(relay => relay.publish(event, { timeout: 5000 }))
  )

  const successful = results.filter(r => r.status === 'fulfilled')
  const failed = results.filter(r => r.status === 'rejected')

  // Phase 3: Evaluate results
  if (successful.length >= 3) {
    showPostAsPublished(event)
    // Retry failed relays in background
    if (failed.length > 0) {
      retryInBackground(event, failed)
    }
    return { status: 'success', published: successful.length }
  } else if (successful.length > 0) {
    showPostAsPartial(event, successful.length, targetRelays.length)
    return { status: 'partial', published: successful.length }
  } else {
    showPostAsFailed(event)
    return { status: 'failed', published: 0 }
  }
}
```

**UI states:**

```
Pending:  [•••] Publishing...
Success:  [✓] Posted (4/4 relays)
Partial:  [!] Posted (2/4 relays) [Retry]
Failed:   [✗] Failed to post [Retry]
```

**Validation:**

- Track: % of posts that reach ≥3 relays
- Measure: Time from click to confirmation
- Survey: "Did your post publish reliably?"

---

### Pattern B: Optimistic Reactions with Rollback

**Problem:** Likes/reactions feel laggy or don't register.

**Solution:** Instant visual feedback with background confirmation and rollback on failure.

**Implementation:**

```typescript
async function reactToPost(postId: string, reaction: string = '+') {
  const reactionEvent = createReactionEvent(postId, reaction)

  // Immediate UI update
  addReactionToUI(postId, reaction)
  incrementReactionCount(postId)

  try {
    // Publish to relevant relays
    await publishReaction(reactionEvent, {
      userRelays: getUserWriteRelays(),
      postAuthorRelays: getPostAuthorRelays(postId)
    })

    // Success - already shown in UI

  } catch (error) {
    // Rollback UI changes
    removeReactionFromUI(postId, reaction)
    decrementReactionCount(postId)

    // Show error
    showToast('Reaction failed. Tap to retry.')
  }
}
```

**Visual feedback:**

```
Before: 👍 42   [tap]
During: 👍 43   (your reaction appears instantly)
Success: 👍 43  (stays)
Failure: 👍 42  (reverts) + error toast
```

---

### Pattern C: Reliable Follow/Unfollow

**Problem:** Following someone in one client, they disappear in another.

**Solution:** Read-modify-write pattern with conflict detection.

**Implementation:**

```typescript
async function followUser(pubkey: string) {
  // Step 1: Lock to prevent concurrent modifications
  if (contactListLock.isLocked()) {
    showToast('Please wait, processing previous action')
    return
  }
  contactListLock.acquire()

  try {
    // Step 2: Fetch latest contact list from relays
    const currentContacts = await fetchLatestContactList()

    // Step 3: Check if already following
    if (currentContacts.includes(pubkey)) {
      showToast('Already following')
      return
    }

    // Step 4: Add new follow
    const updatedContacts = [...currentContacts, pubkey]
    const contactListEvent = createContactListEvent(updatedContacts)

    // Step 5: Optimistic UI
    addToFollowingList(pubkey)

    // Step 6: Publish
    const result = await publishToRelays(contactListEvent)

    if (!result.success) {
      // Rollback
      removeFromFollowingList(pubkey)
      showError('Failed to follow. Try again.')
    }

  } finally {
    contactListLock.release()
  }
}
```

**Safety checks:**

- Lock prevents race conditions within same client
- Read-before-write prevents conflicts with other clients
- Verify event created_at is newer than current

---

### Pattern D: Clear Action Feedback System

**Problem:** Users don't know if their actions worked.

**Solution:** Standardized feedback states across all interactions.

**UI Component:**

```typescript
interface ActionFeedback {
  state: 'idle' | 'processing' | 'success' | 'error'
  message?: string
  retryAction?: () => void
}

function ActionButton({
  label,
  action,
  icon
}: ActionButtonProps) {
  const [feedback, setFeedback] = useState<ActionFeedback>({ state: 'idle' })

  async function handleAction() {
    setFeedback({ state: 'processing' })

    try {
      await action()
      setFeedback({ state: 'success' })
      setTimeout(() => setFeedback({ state: 'idle' }), 2000)
    } catch (error) {
      setFeedback({
        state: 'error',
        message: error.message,
        retryAction: handleAction
      })
    }
  }

  return (
    <button onClick={handleAction} disabled={feedback.state === 'processing'}>
      {feedback.state === 'idle' && <>{icon} {label}</>}
      {feedback.state === 'processing' && <>⏳ Processing...</>}
      {feedback.state === 'success' && <>✓ Done</>}
      {feedback.state === 'error' && (
        <>
          ✗ {feedback.message}
          <RetryButton onClick={feedback.retryAction} />
        </>
      )}
    </button>
  )
}
```

**Visual examples:**

```
Post button:
[ Post ]  →  [ ⏳ Posting... ]  →  [ ✓ Posted! ]  →  [ Post ]
                                  ↘ [ ✗ Failed. Retry? ]

Follow button:
[ Follow ]  →  [ ⏳ Following... ]  →  [ ✓ Following ]
                                     ↘ [ ✗ Error. Retry? ]

Like button:
[ ♡ Like ]  →  [ ♡ ]  →  [ ♥ Liked ]
                       ↘ [ ♡ Error: Tap to retry ]
```

---

### Pattern E: Batch Operations for Efficiency

**Problem:** Performing many actions individually is slow and unreliable.

**Solution:** Batch related operations and publish as group.

**Use cases:**

- Publishing a post + uploading attached images
- Following multiple users from starter pack
- Deleting multiple posts
- Broadcasting updates to multiple relays

**Implementation:**

```typescript
async function batchFollowUsers(pubkeys: string[]) {
  // Fetch current contact list once
  const currentContacts = await fetchLatestContactList()

  // Add all new follows
  const newFollows = pubkeys.filter(pk => !currentContacts.includes(pk))
  const updatedContacts = [...currentContacts, ...newFollows]

  // Single contact list update
  const event = createContactListEvent(updatedContacts)

  // Show progress
  showProgress(`Following ${newFollows.length} users...`)

  // Publish once
  await publishToRelays(event)

  // Update UI
  updateFollowingList(updatedContacts)
  showSuccess(`Following ${newFollows.length} new users!`)
}
```

**Benefits:**

- Reduces network requests
- Prevents race conditions
- Faster UX
- Lower chance of conflicts

---

## Anti-Patterns: What Not To Do

### Anti-Pattern 1: Silent Failures

**What it looks like:**

```typescript
async function publishPost(content) {
  const event = createEvent(content)
  try {
    await publishToRelays(event)
  } catch (error) {
    // Do nothing - silent failure
  }
  // User thinks post published, but it failed
}
```

**Why it fails:**

- User has no idea action failed
- No way to retry
- Post appears in local UI but not on network
- Destroys trust

**What to do instead:**

- Always show error state
- Provide retry mechanism
- Explain what went wrong
- Give user control

---

### Anti-Pattern 2: Fake Optimistic UI

**What it looks like:**

```typescript
function likePost(postId) {
  // Just update UI, never actually send
  incrementLikeCount(postId)
  showAsLiked(postId)
  // No network request!
}
```

**Why it fails:**

- Like isn't persisted
- Disappears on refresh
- Other users don't see it
- Completely breaks trust

**What to do instead:**

- Optimistic UI must be followed by actual request
- Validate and rollback on failure
- Never fake data

---

### Anti-Pattern 3: No Confirmation

**What it looks like:**

- User deletes post, no confirmation shown
- User zaps 10000 sats, no receipt
- User unfollows account, no feedback

**Why it fails:**

- User unsure if action worked
- Anxiously checks multiple times
- May retry and create problems

**What to do instead:**

- Always confirm critical actions
- Show clear success state
- Provide undo if possible

---

### Anti-Pattern 4: Spinner Forever (No Timeout)

**What it looks like:**

```typescript
async function followUser(pubkey) {
  showSpinner()
  await publishFollow(pubkey) // Might hang forever
  // Spinner never stops if this hangs
}
```

**Why it fails:**

- User stuck waiting
- Can't cancel or retry
- App feels frozen

**What to do instead:**

- Set reasonable timeouts (5-10 seconds)
- Show timeout error
- Allow cancellation
- Provide retry option

---

### Anti-Pattern 5: Publishing to Only One Relay

**What it looks like:**

```typescript
async function publishPost(event) {
  const relay = getUserPreferredRelay()
  await relay.publish(event)
  // Only published to one relay!
}
```

**Why it fails:**

- Single point of failure
- Other users won't see post
- Defeats purpose of decentralization

**What to do instead:**

- Publish to multiple relays
- Include common/popular relays
- Verify multiple confirmations

---

## Validation Checklist

### Reliability Metrics

**Core interactions to measure:**

- [ ] **Post success rate:** >99% of posts reach ≥3 relays
- [ ] **Reaction success rate:** >99% of likes/reactions persist
- [ ] **Follow/unfollow success rate:** >99% without data loss
- [ ] **Time to confirmation:** <3 seconds for most actions
- [ ] **Error rate:** <1% of actions fail
- [ ] **Retry success rate:** >90% of retries succeed

### User Experience Metrics

- [ ] **Perceived reliability:** "Actions feel reliable" (user survey)
- [ ] **Trust score:** "I trust the app to save my actions" (user survey)
- [ ] **Confusion rate:** <5% of users report "not sure if action worked"
- [ ] **Error recovery rate:** % of users who successfully retry after error
- [ ] **Completion rate:** % of initiated actions that complete

### Technical Metrics

- [ ] **Relay publish success:** Average # of relays that accept events
- [ ] **Network failure handling:** % of network errors that show proper feedback
- [ ] **Rollback correctness:** Optimistic UI rollbacks work 100% of time
- [ ] **Lock contention:** Minimal race conditions in contact list updates
- [ ] **Timeout adherence:** No operations hang indefinitely

### User Research Questions

**Reliability perception:**

- "Do your posts reliably appear?"
- "When you like/react to something, does it always register?"
- "Have you lost follows/followers when switching clients?"

**Feedback clarity:**

- "When you post, is it clear when it's done?"
- "If something fails, do you know what happened?"
- "Can you easily retry failed actions?"

**Comparison to other platforms:**

- "How does reliability compare to Twitter/Instagram?"
- "Do you trust Nostr apps as much as mainstream apps?"
- "What makes you lose trust in an app?"

### A/B Testing Opportunities

Test different approaches:

- Optimistic vs confirmed UI
- Spinner duration before timeout
- Number of relays required for "success"
- Error message phrasing
- Retry button placement

**Measure impact on:**

- Perceived reliability
- User trust scores
- Action completion rates
- Retry rates
- Session length

---

## Citations & Sources

**Note:** All sources are from 2024-2025 to ensure currency for this fast-moving technology.

### Data & Analytics (Nostr-Specific)

<a id="data-1"></a>
**[Data:1]** "If a mod post (later blog post) gets stuck while publishing, a timer kicks in that'll lead to a 'try again' option that usually publishes the post correctly."

- Source: Nostr Biweekly Review (23 Dec 2024-5 Jan 2025)
- URL: <https://thenostrreview.substack.com/p/nostr-biweekly-review-23-dec-2024>
- Date: January 2025

<a id="data-2"></a>
**[Data:2]** "NIP-25 is a terribly inefficient way to do it. Burying reactions in the tags requires clients to do a huge amount of data gathering to properly show likes/reactions... clients must gather potentially thousands of events just to count up the likes for a note."

- Source: "Reactions are inefficient. There needs to be an aggregate kind" - GitHub Issue #159
- URL: <https://github.com/nostr-protocol/nips/issues/159>
- Date: Discussed throughout 2024

<a id="data-3"></a>
**[Data:3]** "When the Damus relay was taken down for upgrades, users' content was potentially wiped and gone... content stored on that relay was reduced to remaining on one less relay."

- Source: "User Relays" by Sondre Bjellås
- URL: <https://medium.com/@sondreb/user-relays-7e23e2ac2590>
- Date: April 2025

<a id="data-4"></a>
**[Data:4]** "I was trying out the new Iris Nostr client and decided to follow someone new. From that moment on, I noticed my follows count reset from about 130 to 1 (that last follow)... At least one developer reported losing 75% of their follows."

- Source: "All my nostr follows gone - how do I get them back?" - Stacker News
- URL: <https://stacker.news/items/182519>
- Date: 2024

<a id="data-5"></a>
**[Data:5]** "Receiving payments via Zeus wallet in Damus sometimes fails to trigger zap notifications... Quoting a user without a p-tag does not generate notifications... When outbox is enabled in NDK, the relay list becomes huge, causing zap requests to fail with an HTTP 431 error."

- Source: Nostrability Issues and NDK GitHub
- URLs: <https://github.com/nostrability/nostrability/issues>, <https://github.com/nostr-dev-kit/ndk/issues/175>
- Date: 2024

<a id="data-6"></a>
**[Data:6]** "A very common experience on Nostr is that of losing follows due to race conditions when sending kind 3 events... Earlier this week someone signed in to Coracle, their contact list failed to fully sync before they followed someone, and they ended up deleting all their follows."

- Source: "Add kinds 10 and 11 to prevent race conditions" - GitHub PR #349
- URL: <https://github.com/nostr-protocol/nips/pull/349>
- Date: Opened 2023, discussed through 2024

<a id="data-7"></a>
**[Data:7]** "~36,000 weekly active users, <15,000 daily active users, 165,725 total trusted users (2024). Adoption, engagement, and retention all quite low and having declined significantly from major adoption spikes. 30-day retention trends to 0% for recent cohorts."

- Source: Nostr User Statistics 2025
- URL: <https://socialcapitalmarkets.net/crypto-trading/nostr-statistics/>
- Date: Late 2024 data

<a id="data-8"></a>
**[Data:8]** "Only 639 relays online globally (two-thirds reduction from previous year). 80% concentrated in North America and Europe. 95% of relays struggle to cover operational costs. 20% have faced significant downtime due to insufficient financial support."

- Source: "Improving the Availability and Reliability of the Relay Network"
- URL: <https://research.dorahacks.io/2024/04/30/nostr-relay-incentive/>
- Date: April 23, 2024

<a id="data-9"></a>
**[Data:9]** "Storage of non-kind:1 events is at a MINIMUM about 10:1 compared to actual content posts. One relay operator reported relay growth of about 2GB per day primarily from reactions and metadata."

- Source: NIP-25 reaction discussions on GitHub
- URL: <https://github.com/nostr-protocol/nips/issues/159>
- Date: 2024

<a id="data-10"></a>
**[Data:10]** "An Empirical Analysis of the Nostr Social Network: Decentralization, Availability, and Replication Overhead. Relay availability remains a challenge, where financial sustainability (particularly for free-to-use relays) emerges as a contributing factor."

- Source: arXiv Empirical Analysis
- URL: <https://arxiv.org/abs/2402.05709>
- Date: February 2024

### Academic & UX Research (Universal Principles)

<a id="research-1"></a>
**[Research:1]** "Survey of 3,000+ people ages 18-70 on app preferences. 94% of users cited design as main reason they mistrusted or rejected apps. 40% said poor performance would make them prefer better alternatives. Performance depends on Speed, Security, and Reliability. If app doesn't load quickly or show signs of reliability, users immediately uninstall."

- Source: "Mobile App Trends 2024 Report" - Framna
- URL: <https://framna.com/en-us/mobile-app-trends-2024-report>
- Date: 2024

<a id="research-2"></a>
**[Research:2]** "Only 35% of users feel safe participating on social platforms (down from 44%). Security of data and privacy was leading factor affecting trust. All 9 major platforms (Facebook, Instagram, LinkedIn, Pinterest, Reddit, Snapchat, TikTok, Twitter, YouTube) lost trust ground."

- Source: "User trust in social platforms is falling" - eMarketer
- URL: <https://www.emarketer.com/content/user-trust-social-platforms-falling-according-our-new-study>
- Date: 2024 (analyzing trends through 2024)

<a id="research-3"></a>
**[Research:3]** "Three critical thresholds: 0.1 seconds (100ms) - limit for feeling system reacts instantaneously; 1.0 second - limit for user's flow of thought staying uninterrupted; 10 seconds - limit for keeping user's attention. 100ms creates illusion of instantaneous response. User feels they (not computer) caused the outcome."

- Source: "Response Time Limits: Article by Jakob Nielsen" - NN/g
- URL: <https://www.nngroup.com/articles/response-times-3-important-limits/>
- Date: January 2024 (updated)

<a id="research-4"></a>
**[Research:4]** "New official React hook `useOptimistic` for optimistic UI updates. Shows different state while async action is underway. Returns copy of state that can differ during pending actions."

- Source: "useOptimistic – React" - React Official Docs
- URL: <https://react.dev/reference/react/useOptimistic>
- Date: 2024 (Canary version)

<a id="research-5"></a>
**[Research:5]** "Optimistic UI makes applications feel faster and more responsive. Updates UI immediately before server confirmation. Creates illusion of instant response."

- Source: "Understanding optimistic UI and React's useOptimistic Hook" - LogRocket
- URL: <https://blog.logrocket.com/understanding-optimistic-ui-react-useoptimistic-hook/>
- Date: August 2024

<a id="research-6"></a>
**[Research:6]** "Optimistic UI excels when actions are nearly always successful (messages, posts, preferences). NOT recommended for critical operations (flight booking, cash transfers). For non-critical actions (posts, messages), optimistic UI is OK. Critical: Must properly handle failure cases and revert state."

- Source: "Crafting a Seamless User Experience with Optimistic UI" - Medium
- URL: <https://medium.com/@boubkeraouabe/crafting-a-seamless-user-experience-with-optimistic-ui-547927af24da>
- Date: August 2024

<a id="research-7"></a>
**[Research:7]** "'Most basic guideline of UI design' - keep users informed about what's going on. Provide appropriate feedback within reasonable time. Present feedback as quickly as possible (ideally immediately). Example: Column selection should highlight within 0.1 seconds."

- Source: "Visibility of System Status" - NN/g
- URL: <https://www.nngroup.com/articles/visibility-system-status/>
- Date: January 2024

<a id="research-8"></a>
**[Research:8]** "Skeleton screens are new norm for full-page loading. Show wireframe immediately before real content. Reduces perception of long loading time by providing clues for final layout."

- Source: "Skeleton Screens 101" - NN/g
- URL: <https://www.nngroup.com/articles/skeleton-screens/>
- Date: November 2024

<a id="research-9"></a>
**[Research:9]** "Best for 2-10 second wait times. Must be consistent with final screen layout. Include subtle animations (pulsating, fading) to decrease perceived time. Avoid frame-only skeletons (header/footer only) that don't show content structure."

- Source: "Skeleton loading screen design" - LogRocket
- URL: <https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/>
- Date: April 2025

<a id="research-10"></a>
**[Research:10]** "Error states often prioritized over success states, but both must work together. Success patterns include fields, toasts, banners, notifications. Success feedback as important as error feedback for user confidence."

- Source: "Success Message UX Examples & Best Practices" - Pencil & Paper
- URL: <https://www.pencilandpaper.io/articles/success-ux>
- Date: 2024

<a id="research-11"></a>
**[Research:11]** "10 Design Guidelines for Reporting Errors in Forms. Help users recover from errors by clearly identifying problems. Allow users to access and correct fields easily."

- Source: "10 Design Guidelines for Reporting Errors in Forms" - NN/g
- URL: <https://www.nngroup.com/articles/errors-forms-design-guidelines/>
- Date: December 2024

<a id="research-12"></a>
**[Research:12]** "Based on Jakob Nielsen's heuristic: 'Help Users Recognize, Diagnose, and Recover.' Three steps: Tell users error occurred, explain what went wrong, show how to recover. Error types: Slips (user intends one action but does another) and Mistakes (mismatch between user mental model and system)."

- Source: "Error handling - UX design patterns" - Medium/Design Bootcamp
- URL: <https://medium.com/design-bootcamp/error-handling-ux-design-patterns-c2a5bbae5f8d>
- Date: October 2025

<a id="research-13"></a>
**[Research:13]** "Three Required Elements: (1) Problem statement (what went wrong), (2) Cause explanation (why it happened), (3) Solution suggestion (how to fix it). Recovery patterns: Retry/refresh button, search or browse function, suggest alternatives, contact support, save user progress. Use neutral and empathetic language (don't blame users)."

- Source: Multiple UX design resources
- Date: 2024

<a id="research-14"></a>
**[Research:14]** "Post/Redirect/Get (PRG) pattern prevents double-submission. PRG converts POST to GET (which is idempotent). Prevents double-clicks, page refreshes creating duplicate orders. Real-world examples: Traffic light buttons, elevator call buttons, bus stop buttons."

- Source: "What is Idempotence? Explained with Real-World Examples" - FreeCodeCamp
- URL: <https://www.freecodecamp.org/news/idempotence-explained/>
- Date: September 2024

<a id="research-15"></a>
**[Research:15]** "Idempotency improves UX by ensuring consistent results. Avoids duplicate actions. Provides predictable and stable interactions. Users benefit from reliability."

- Source: "How To Design an Idempotent API in 2024?" - Bits and Pieces
- URL: <https://blog.bitsrc.io/designing-an-idempotent-api-in-2024-d4a3cf8d8bf2>
- Date: March 2025

<a id="research-16"></a>
**[Research:16]** "Use exponential back-off for retries (increasing time between attempts). Network/service may need time to clear backlog. Classify errors: Transient (retry) vs Permanent (user action). Don't retry: Authentication failures, invalid requests. Keep user informed during retries."

- Source: Microsoft Azure Retry Pattern, DoorDash, Medium articles
- URL: <https://learn.microsoft.com/en-us/azure/architecture/patterns/retry>
- Date: 2024

### Case Studies & Examples (Mainstream Apps)

<a id="example-1"></a>
**[Example:1]** "Social media management tools common retry patterns: For temporary platform bugs - simply re-queue and retry. For post issues (too long, duplicate) - must edit before re-queuing. Rate limiting - wait specified period, slow down activity rate."

- Source: SocialBee, SmarterQueue, Vista Social
- Date: 2024

<a id="example-2"></a>
**[Example:2]** "Instagram's April 2024 algorithm update rewards original content creation. Platform now heavily weights 'shares per reach' (content sent via DMs) as key engagement signal, viewing it as deeper engagement than likes."

- Source: "How the Instagram Algorithm Works in 2025" - Later
- URL: <https://later.com/blog/how-instagram-algorithm-works/>
- Date: 2024-2025

<a id="example-3"></a>
**[Example:3]** "TikTok's For You Page algorithm prioritizes content relevance over creator popularity. Up/down swiping is 'game-changer' - intuitive and effortless navigation. Shows content immediately with no loading state. 100ms creates illusion of instantaneous response."

- Source: "5 TikTok UI Choices That Made the App Successful" - Iterators
- URL: <https://www.iteratorshq.com/blog/5-tiktok-ui-choices-that-made-the-app-successful>
- Date: 2024

<a id="example-4"></a>
**[Example:4]** "Apple Human Interface Guidelines (2024): Give users clear and consistent feedback. Ensure understanding of what's happening at every stage. Inform about errors clearly. Visually indicate progress with loading bars. Provide notifications for completion. Use animations, sounds, haptic feedback to confirm actions."

- Source: "Human Interface Guidelines" - Apple Developer
- URL: <https://developer.apple.com/design/human-interface-guidelines/>
- Date: 2024

<a id="example-5"></a>
**[Example:5]** "Material Design 3: Use motion for visual feedback (clicks, submissions). Components respond instantly to user inputs. Provide clear feedback, enhance overall experience. Responsive feedback is essential for interactivity. Spring-like motion - animations bounce, stretch, respond organically."

- Source: Material Design 3 articles
- Date: 2024

### Nostr Protocol Documentation

<a id="protocol-1"></a>
**[Protocol:1]** "NIP-02: Contact List and Petnames - defines kind 3 events for following lists. Each new contact list event is a replaceable event that supersedes previous ones. Must contain all pubkeys the user is following, as event replaces previous list entirely."

- Source: nostr-protocol/nips GitHub
- URL: <https://github.com/nostr-protocol/nips/blob/master/02.md>
- Date: Current specification

<a id="protocol-2"></a>
**[Protocol:2]** "NIP-65: Relay List Metadata - defines kind 10002 events for user's relay preferences. Helps other users discover which relays to use when looking for someone's content or publishing content meant for them to see."

- Source: nostr-protocol/nips GitHub
- URL: <https://github.com/nostr-protocol/nips/blob/master/65.md>
- Date: Current specification

<a id="protocol-3"></a>
**[Protocol:3]** "NIP-25: Reactions - defines kind 7 events for reactions/likes. Each reaction references the event being reacted to using 'e' and 'p' tags. Reactions should be published to author's relays and user's write relays."

- Source: nostr-protocol/nips GitHub
- URL: <https://github.com/nostr-protocol/nips/blob/master/25.md>
- Date: Current specification

### Additional Context

**Toast Notification Patterns (2024):**
Four types: SUCCESS (green), INFO (blue), WARNING (yellow), ERROR (red). Use distinctive color coding and icons for quick comprehension. Provide quick feedback without interrupting workflow. Don't use auto-dismiss for critical messages. High-contrast for urgent messages, low-contrast for supplemental.

- Source: Salesforce, ByteHide, Carbon Design System
- Date: 2024

**Offline-First Patterns (2024):**
"Offline sync isn't optional—it's a must-have for great UX." Sync intervals: as short as 5 minutes, as long as 1 day. Sync only when app active and device connected. Visual feedback vital: progress indicators, notifications. Keep users informed about what's happening.

- Source: Daily.dev, Moments Log, Flutter docs, Microsoft Dynamics
- Date: 2024

**Design System Guidance:**
Google Design Guidelines emphasize: Initial sync with clear guidance and time estimates, status bar indicates offline/syncing/success/failure, background syncing based on relevant intervals, progress indicators on key screens, timestamps show recent update times.

- Source: Google Open Health Stack
- URL: <https://developers.google.com/open-health-stack/design/offline-sync-guideline>
- Date: 2024

---

**See [References & Bibliography](/docs/resources/references) for full citation details.**

---
