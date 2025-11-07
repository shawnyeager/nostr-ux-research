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

**[Data:3]** Mobile App Retention Benchmarks (2024)
- **Source:** [Industry report - to be researched]
- **Data:** Typical D1/D7/D30 retention rates for social apps
- **Key findings:** [To be filled]

**[Data:4]** Social Media Engagement Metrics
- **Source:** [To be researched]
- **Data:** Average session length, posts per user, engagement rates
- **Key findings:** [To be filled]

---

## 2. Academic & UX Research

### Onboarding & First-Run Experience

**[Research:1]** Nielsen Norman Group - Time to First Value
- **Citation:** [Full citation to be added]
- **URL:** https://www.nngroup.com/
- **Key finding:** Users abandon apps that take >2 minutes to reach first value
- **Relevance:** Pattern 1 (Onboarding)

**[Research:2]** Progressive Disclosure in UI Design
- **Citation:** [To be researched - HCI paper or design system]
- **Key finding:** [Summary]
- **Relevance:** Pattern 1 (Onboarding), Pattern 5 (Progressive Complexity)

**[Research:3]** Friction Laddering in User Onboarding
- **Citation:** [To be researched]
- **Key finding:** [Summary]
- **Relevance:** Pattern 1 (Onboarding)

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

**[Example:1]** TikTok Onboarding Teardown
- **Source:** [Product teardown - to be found]
- **Key pattern:** Algorithm-first feed, no signup required to browse
- **Relevance:** Pattern 1 (Onboarding), Pattern 2 (Content Discovery)

**[Example:2]** Instagram Onboarding Flow
- **Source:** [Product analysis - to be researched]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 1 (Onboarding)

**[Example:3]** Discord Onboarding
- **Source:** [To be researched]
- **Key pattern:** [Summary]
- **Relevance:** Pattern 1 (Onboarding)

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

**[User:11]** "All apps are in alpha state"
- **Source:** [User observation - to be cited]
- **Context:** [Discussion context]
- **Relevance:** All patterns (general UX immaturity)

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
