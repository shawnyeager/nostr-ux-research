---
title: Measuring Success
weight: 2
---

**How to validate your improvements are working.**

## About These Benchmarks

**Target metrics in this guide come from three sources:**

1. **Industry Standards** - Google Core Web Vitals (performance), standard SaaS metrics (retention/engagement)
2. **Research Evidence** - Academic studies on social media UX (see [Research section](../../research/))
3. **Nostr-Specific Baselines** - Current observed metrics from nostr.band and user research

**Important:** These targets are guidelines, not absolute requirements. Your specific goals should be based on:
- Your current baseline metrics
- Your user base and use case
- Competitive benchmarks in your category
- Continuous validation with real users

Start by measuring your current state, then set incremental improvement goals.

---

## The Measurement Framework

Every pattern improvement should have three types of metrics:

1. **Leading Indicators** - Early signals that predict success (hours to days)
2. **Lagging Indicators** - Outcome metrics that prove impact (weeks to months)
3. **Qualitative Signals** - User feedback and sentiment (ongoing)

**All three are necessary.** Leading indicators show early trends, lagging indicators prove long-term impact, and qualitative signals explain the "why" behind the numbers.

---

## Pattern 1: Onboarding & First-Run Experience

### Leading Indicators (Track Daily)

**Signup Funnel Metrics:**
- **Signup start rate**: % of visitors who click "Sign up"
- **Signup completion rate**: % who finish signup flow
- **Time to first value**: Minutes from signup to first meaningful action

**Targets:**
- Signup start rate: >20% (if you have guest mode)
- Signup completion rate: >70% (should be 90%+ with simple flow)
- Time to first value: <2 minutes

**How to measure:**
```javascript
// Track funnel events
analytics.track('signup_started', { timestamp })
analytics.track('signup_completed', { timestamp, duration })
analytics.track('first_value_reached', { action: 'viewed_feed' })
```

---

### Lagging Indicators (Track Weekly/Monthly)

**Retention Metrics:**
- **D1 retention**: % who return day 1 after signup
- **D7 retention**: % who return within 7 days
- **D30 retention**: % who return within 30 days

**Targets (based on consumer social app benchmarks):**
- D1 retention: >40% (world-class: >60%)
- D7 retention: >20% (world-class: >30%)
- D30 retention: >10% (Nostr currently ~0%, aim for >5% first)

**Note:** These are typical benchmarks for consumer social applications. Your targets should be based on your current baseline and incremental improvement goals.

**Engagement Metrics:**
- **Activation rate**: % who complete first meaningful action within 24h
- **Posts in first session**: Average posts per new user in first session

**Targets:**
- Activation rate: >50%
- Posts in first session: >1 (indicates engagement)

---

### Qualitative Signals

**What to monitor:**
- Support tickets about onboarding
- User complaints mentioning "signup", "keys", "relays"
- Social media feedback about "getting started"
- User interview quotes

**Red flags:**
- "Too complicated"
- "Lost my keys"
- "Couldn't figure out how to start"
- "Why do I need to choose relays?"

**Green flags:**
- "That was easy"
- "Faster than I expected"
- "Actually makes sense"

---

## Pattern 2: Content Discovery & Feed Quality

### Leading Indicators

**Feed Quality Metrics:**
- **Time to first post load**: Seconds from app open to first post visible
- **Empty feed rate**: % of users who see empty feed
- **Follow rate in first session**: Average follows per new user

**Targets:**
- Time to first post: <2 seconds
- Empty feed rate: <5% (should show trending if empty)
- Follow rate: >5 follows in first session

---

### Lagging Indicators

**Engagement Metrics:**
- **Session length**: Average minutes per session
- **Feed scroll depth**: How far users scroll
- **Return rate**: % who come back within 24h

**Targets:**
- Session length: >3 minutes (Nostr currently ~1 min)
- Feed scroll depth: >10 posts
- Return rate: >30%

**Content Interaction:**
- **Posts viewed per session**: Average posts viewed
- **Engagement rate**: % of posts that get likes/replies/reposts
- **Search usage**: % of sessions with search

**Targets:**
- Posts viewed: >20 per session
- Engagement rate: >10% of viewed posts
- Search usage: >15% of sessions

---

### Qualitative Signals

**Red flags:**
- "Nothing interesting"
- "Feed is empty"
- "Can't find anyone"
- "Same posts over and over"

**Green flags:**
- "Found great content"
- "Discovered interesting people"
- "Could spend hours here"

---

## Pattern 3: Core Interaction Loops

### Leading Indicators

**Action Success Rates:**
- **Post success rate**: % of posts that get written to relays
- **Reply success rate**: % of replies that succeed
- **Action latency**: Seconds from user action to confirmation

**Targets:**
- Post success rate: >99%
- Reply success rate: >99%
- Action latency: <100ms perceived (with optimistic UI)

---

### Lagging Indicators

**Engagement Metrics:**
- **Posts per user per day**: Average daily posts
- **Reply rate**: % of users who reply to posts
- **Daily active users (DAU)**: Users who post/reply/like daily

**Targets:**
- Posts per user: >1 per day (active users)
- Reply rate: >20% of users reply daily
- DAU growth: Month-over-month increase

**Reliability Metrics:**
- **Error rate**: % of actions that fail
- **Retry rate**: % of actions that need user retry
- **Support tickets**: Volume about "posts disappeared"

**Targets:**
- Error rate: <1%
- Retry rate: <5%
- Support tickets: Declining trend

---

### Qualitative Signals

**Red flags:**
- "My post disappeared"
- "Replies don't show up"
- "Likes don't work"
- "App feels broken"

**Green flags:**
- "Just works"
- "Feels fast"
- "Reliable"

---

## Pattern 4: Performance & Perceived Speed

### Leading Indicators

**Performance Metrics:**
- **Time to first paint (FP)**: ms until first pixel renders
- **Time to first contentful paint (FCP)**: ms until first content renders
- **Largest contentful paint (LCP)**: ms until largest content renders
- **Time to interactive (TTI)**: ms until app is interactive

**Targets (based on Google Core Web Vitals):**
- FP: <500ms
- FCP: <1s
- LCP: <2.5s (good), <4s (needs improvement)
- TTI: <3s

**Source:** [Google Core Web Vitals](https://web.dev/articles/vitals) - Industry-standard performance metrics for web applications

**User-Perceived Performance:**
- **Perceived latency**: User survey ("How fast does the app feel?" 1-5)
- **Skeleton screen visibility**: % of loads that show skeleton
- **Bounce rate on slow loads**: % who leave during load

**Targets:**
- Perceived latency: >4/5 average
- Skeleton screen visibility: >90%
- Bounce rate: <20% on loads >3s

---

### Lagging Indicators

**Engagement Impact:**
- **Session length**: Does performance improvement increase time spent?
- **Return rate**: Do users come back more with faster app?
- **Posts per session**: Does speed increase engagement?

**Technical Metrics:**
- **Cache hit rate**: % of requests served from cache
- **Relay response time**: Average ms per relay request
- **Image load time**: Average ms per image

**Targets:**
- Cache hit rate: >80%
- Relay response time: <500ms
- Image load time: <1s

---

### Qualitative Signals

**Red flags:**
- "So slow"
- "App keeps freezing"
- "Takes forever to load"
- "Laggy scrolling"

**Green flags:**
- "Snappy"
- "Fast"
- "Feels native"

---

## Pattern 5: Progressive Complexity

### Leading Indicators

**Complexity Metrics:**
- **Settings screen abandonment**: % who open settings but don't change anything
- **Advanced feature usage**: % of users who access "Advanced" settings
- **Support tickets about features**: Volume of "how do I..." questions

**Targets:**
- Settings abandonment: <30% (most should find what they need)
- Advanced feature usage: <10% of users (should be hidden for most)
- Support tickets: Declining trend

---

### Lagging Indicators

**Comprehension Metrics:**
- **Feature discovery rate**: % who find and use core features
- **Error recovery rate**: % who successfully recover from errors
- **Power user graduation**: % who eventually access advanced features

**Targets:**
- Feature discovery: >70% use core features within first week
- Error recovery: >80% successfully retry/fix errors
- Power user graduation: 5-15% eventually use advanced features

---

### Qualitative Signals

**Red flags:**
- "Too complicated"
- "What's a relay?"
- "Too many options"
- "Overwhelming"

**Green flags:**
- "Easy to understand"
- "Found what I needed"
- "Wasn't overwhelmed"

---

## Pattern 6: Cross-Client Consistency

### Leading Indicators

**Data Integrity Metrics:**
- **Write success rate**: % of events written to >1 relay
- **Cross-client sync delay**: Minutes until data appears in other clients
- **Data loss rate**: % of events that disappear when switching clients

**Targets:**
- Write success rate: >95% to multiple relays
- Sync delay: <5 minutes
- Data loss rate: <1%

---

### Lagging Indicators

**Trust Metrics:**
- **Client switching rate**: % who use multiple clients successfully
- **Follow/follower consistency**: % match across clients
- **Support tickets about data loss**: Volume of "my data disappeared" tickets

**Targets:**
- Client switching: >20% use multiple clients without issues
- Consistency: >95% follow lists match across clients
- Data loss tickets: Declining trend

---

### Qualitative Signals

**Red flags:**
- "Lost my followers"
- "Posts disappeared"
- "Different data in each app"
- "Don't trust it"

**Green flags:**
- "Works across all my apps"
- "Data syncs properly"
- "Reliable"

---

## Measurement Tools & Setup

### Analytics Tools

**Free/Open Source:**
- **PostHog**: Full product analytics, self-hosted or cloud
- **Plausible**: Privacy-focused, simple analytics
- **Matomo**: Open source alternative to Google Analytics

**Paid:**
- **Mixpanel**: Advanced funnels, cohorts, retention
- **Amplitude**: Similar to Mixpanel
- **Heap**: Automatic event capture

---

### Performance Monitoring

**Web:**
- **Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: Comprehensive performance testing
- **Core Web Vitals**: Google's performance metrics

**Mobile:**
- **Firebase Performance**: iOS/Android monitoring
- **Sentry**: Error tracking + performance
- **New Relic**: Enterprise monitoring

---

### User Feedback

**In-App Surveys:**
- Ask NPS (Net Promoter Score): "How likely are you to recommend this app?"
- Ask CSAT (Customer Satisfaction): "How satisfied are you with [feature]?"
- Ask CES (Customer Effort Score): "How easy was it to [action]?"

**User Interviews:**
- 5-10 users per month
- Mix of new users and retained users
- Ask open-ended questions about pain points

**Support Tickets:**
- Tag by pattern (onboarding, discovery, interactions, etc.)
- Track volume trends
- Identify recurring issues

---

## Building a Dashboard

### Essential Metrics to Track

**Onboarding:**
- Signup funnel (started, completed, activated)
- Time to first value
- D1/D7/D30 retention

**Engagement:**
- DAU/WAU/MAU
- Session length
- Posts per user per day

**Reliability:**
- Action success rates (post, reply, like)
- Error rates
- Support ticket volume

**Performance:**
- Page load time (P50, P95, P99)
- Perceived latency (user survey)
- Cache hit rate

---

### Dashboard Tools

**Simple:**
- Plausible (page views, simple events)
- PostHog (funnels, retention, dashboards)

**Advanced:**
- Mixpanel (cohort analysis, A/B tests)
- Amplitude (behavioral cohorts)
- Grafana (custom dashboards from multiple sources)

---

## A/B Testing

### When to A/B Test

**Test when:**
- Uncertain which approach is better
- Significant change to core flow
- Want to measure impact precisely

**Don't test when:**
- Fixing obvious bugs
- Implementing clearly validated improvements
- Change affects <5% of users

---

### How to A/B Test

**Setup:**
1. Define hypothesis ("Guest mode will increase signups by 20%")
2. Define metrics (signup rate, D7 retention)
3. Calculate sample size (usually 1000+ users per variant)
4. Run for 2+ weeks (account for day-of-week effects)

**Implementation:**
```javascript
const variant = abTest.getVariant('guest-mode', ['control', 'treatment'])

if (variant === 'treatment') {
  showGuestMode()
} else {
  showSignupWall()
}

analytics.track('feature_variant', { feature: 'guest-mode', variant })
```

**Tools:**
- PostHog (built-in A/B testing)
- LaunchDarkly (feature flags + experiments)
- Optimizely (enterprise A/B testing)

---

## Summary: Metrics by Pattern

| Pattern | Leading Indicator | Lagging Indicator | Qualitative Signal |
|---------|-------------------|-------------------|--------------------|
| Onboarding | Signup completion rate | D7 retention | "Too complicated" vs "Easy" |
| Content Discovery | Time to first post | Session length | "Feed is empty" vs "Great content" |
| Core Interactions | Action success rate | Posts per user/day | "Posts disappeared" vs "Just works" |
| Performance | Time to interactive | Session length | "So slow" vs "Snappy" |
| Progressive Complexity | Settings abandonment | Feature discovery | "Overwhelming" vs "Easy to understand" |
| Cross-Client Consistency | Write success rate | Data loss tickets | "Lost followers" vs "Works across apps" |

---

## Further Reading on Metrics & Benchmarks

**Performance Metrics:**
- [Google Core Web Vitals](https://web.dev/articles/vitals) - Industry-standard performance benchmarks
- [Web.dev Performance](https://web.dev/explore/metrics) - Detailed guides on measuring web performance

**Retention & Engagement:**
- [Lenny's Newsletter: Retention benchmarks](https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29) - Consumer app retention data
- [Mixpanel Product Benchmarks](https://mixpanel.com/blog/product-benchmarks/) - Cross-industry metrics
- [Amplitude's Behavioral Cohorts Guide](https://amplitude.com/blog/behavioral-cohorts) - User engagement patterns

**Note:** Benchmark data varies significantly by app type, audience, and context. Use industry standards as directional guides, not absolute targets.

---

## Next Steps

1. **Set up basic analytics** (PostHog or Plausible)
2. **Track funnel events** for onboarding
3. **Measure retention** (D1, D7, D30)
4. **Monitor support tickets** by pattern area
5. **Create dashboard** with key metrics

**Remember:** You can't improve what you don't measure. Set up measurement BEFORE implementing improvements.

---

{{< cards >}}
  {{< card link="getting-started/" title="Getting Started" subtitle="Which pattern to implement first" icon="play" >}}
  {{< card link="common-traps/" title="Common Traps" subtitle="Measurement pitfalls to avoid" icon="exclamation" >}}
  {{< card link="../../foundation/validation-framework/" title="Validation Framework" subtitle="The 3-question filter" icon="clipboard-check" >}}
{{< /cards >}}
