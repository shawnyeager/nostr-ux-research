# Content Discovery & Feed Algorithm Research Findings

Research compilation for Pattern 2: Content Discovery & Feed Quality

---

## Finding 1: Bluesky Starter Packs Solve Cold Start Problem

- **Finding:** Bluesky's "starter packs" (curated lists of accounts users can follow with one click) accounted for 43% of follow actions during peak periods and 20% of all follow relationships during their first 6 months. Users included in starter packs received 85% more followers and posted 60% more than similar users not included. Over 335,000 starter packs were created in the first six months.

- **Source:** "Bootstrapping Social Networks: Lessons from Bluesky Starter Packs" - Lancaster University, TU Darmstadt, City St George's University of London. arXiv preprint: <https://arxiv.org/pdf/2501.11605>

- **Date:** January 2025

- **Relevance:** Directly applicable to Nostr's cold start problem. Shows that curated one-click follow lists dramatically increase user engagement and content creation. Nostr could implement similar "starter npub packs" by interest (Bitcoin, art, tech, etc.) to help new users quickly populate feeds instead of starting with empty timelines.

---

## Finding 2: TikTok Algorithm Enables Discovery Without Followers

- **Finding:** TikTok's For You Page algorithm prioritizes content relevance over creator popularity, meaning even users with zero followers can reach large audiences if content aligns with viewer interests. The algorithm analyzes user interactions (watch time, likes, comments), video information (captions, hashtags, sounds), and device settings. Accounts with fewer followers receive more than 75% of impressions from the "For You" feed, confirming balanced content distribution.

- **Source:** Multiple 2024-2025 sources including Sprout Social "How the TikTok Algorithm Works in 2025" (<https://sproutsocial.com/insights/tiktok-algorithm/>) and Buffer "TikTok Algorithm Guide 2026" (<https://buffer.com/resources/tiktok-algorithm/>)

- **Date:** 2024-2025

- **Relevance:** Demonstrates that algorithmic content discovery can solve the "need followers to get reach" chicken-and-egg problem. Nostr clients could implement similar "For You" feeds that surface quality content from unknown npubs based on user interests and engagement signals, rather than only showing chronological feeds from followed accounts.

---

## Finding 3: Instagram Prioritizes Original Content and Shares (2024 Algorithm Update)

- **Finding:** Instagram's April 2024 algorithm update rewards original content creation. The platform now heavily weights "shares per reach" (content sent via DMs) as a key engagement signal, viewing it as deeper engagement than likes. Instagram introduced "Trial Reels" in December 2024, allowing creators to test content with non-followers before sharing to their audience. Instagram head Adam Mosseri announced a shift to views-focused analytics in summer 2024.

- **Source:** Later "How the Instagram Algorithm Works in 2025" (<https://later.com/blog/how-instagram-algorithm-works/>) and Sprout Social "How the Instagram Algorithm Works [Updated 2025]" (<https://sproutsocial.com/insights/instagram-algorithm/>)

- **Date:** 2024-2025

- **Relevance:** Nostr should prioritize original content in discovery algorithms and consider shares/zaps as stronger signals than simple likes. The "Trial Reels" concept could inspire Nostr clients to let users test notes with broader audiences before posting to followers, helping validate content quality before distribution.

---

## Finding 4: Chronological Feeds Decrease Engagement But Don't Reduce Polarization

- **Finding:** Research study moving users from algorithmic to reverse-chronological feeds on Facebook and Instagram found substantial decreases in time spent on platform and user activity over 3 months. However, chronological feeds did not significantly alter levels of polarization, political knowledge, or other attitudes. Instagram users compensated by increasing TikTok usage by 36% and YouTube by 20%; Facebook users moved to Reddit (52% more) and YouTube (21% more).

- **Source:** Georgetown University Knight-Georgetown Institute "Better Feeds: Algorithms That Put People First" (<https://kgi.georgetown.edu/wp-content/uploads/2025/02/Better-Feeds_-Algorithms-That-Put-People-First.pdf>)

- **Date:** March 2025

- **Relevance:** Simply offering chronological feeds won't solve Nostr's retention problem---users will leave platforms with less engaging feeds for alternatives. Nostr needs sophisticated discovery mechanisms beyond pure chronological ordering, while avoiding the pitfalls of engagement-maximizing algorithms that amplify divisive content.

---

## Finding 5: Engagement-Based Algorithms Amplify Divisive Content Users Don't Actually Want

- **Finding:** Preregistered algorithmic audit of Twitter/X found that engagement-based ranking algorithms amplify emotionally charged, out-group hostile political content that users report makes them feel worse. Users do not prefer the political tweets selected by the algorithm, suggesting the algorithm underperforms in satisfying users' stated preferences. Item-level satisfaction surveys correlate with integrity metrics and can improve user retention when used in ranking.

- **Source:** "Engagement, user satisfaction, and the amplification of divisive content on social media" published in PNAS Nexus, Oxford Academic (<https://academic.oup.com/pnasnexus/article/4/3/pgaf062/8052060>) and PMC (<https://pmc.ncbi.nlm.nih.gov/articles/PMC11894805/>)

- **Date:** 2024-2025

- **Relevance:** Critical warning for Nostr: optimizing purely for engagement (likes, replies, reposts) will amplify divisive content that damages user experience. Nostr algorithms should incorporate user satisfaction signals (muting, reporting, explicit feedback) alongside engagement metrics to surface content users actually want to see, not just content that provokes reactions.

---

## Finding 6: Social Media Now Functions as Search Engine for Gen Z

- **Finding:** Two in five Americans currently use TikTok as a search engine. Over 50% of Gen Z and Millennials prefer social media for product discovery, recommendations, and research over traditional search engines. TikTok introduced "Creator Search Insights Tool" in 2024 to help creators optimize for search behavior. Platforms are no longer just for scrolling---they're where consumers look for information.

- **Source:** Sked Social "Social search: How to Optimize for Discoverability on TikTok and Instagram (2025)" (<https://skedsocial.com/blog/social-search-how-to-optimize-for-discoverability-on-tiktok-and-instagram-2025/>)

- **Date:** 2024-2025

- **Relevance:** Nostr clients should prioritize search functionality as a core discovery mechanism, not an afterthought. Users expect to search for topics, hashtags, and people as a primary way to find content. Robust search is now table stakes for social apps, especially for younger users who treat social platforms as search engines.

---

## Finding 7: TikTok's Short-Form Video Solves Cold Start Through Rich Signal

- **Finding:** TikTok's algorithm overcomes the cold start problem because short videos make it easy for users to watch many at once, providing rich signal about preferences quickly. The UX provides detailed data about every video (watch time, replays, completion rate), allowing the algorithm to learn user preferences rapidly. Additionally, 55% of TikTok users create content, ensuring sufficient content supply even for new users.

- **Source:** Jackson Mohsenin "The algorithm isn't everything: TikTok's virtuous cycle" (<https://jmohsenin.com/tiktok-strategy>) and Tape Real "6 Strategies to Solve Cold Start Problem in Recommender Systems" (<https://web.tapereal.com/blog/6-strategies-to-solve-cold-start-problem-in-recommender-systems/>)

- **Date:** 2024

- **Relevance:** Nostr can learn from this by designing onboarding flows that quickly gather preference signals (explicit interest selection, rapid content rating, quick follow suggestions) rather than forcing users to manually search for accounts. The high creator participation rate also suggests Nostr should make posting low-friction to ensure content supply.

---

## Finding 8: Academic Research on Cold Start Problem Solutions

- **Finding:** Recent academic research identifies multiple strategies to solve the cold start problem in recommender systems: (1) using social network information from existing platforms, (2) leveraging collaborative filtering based on similar user behavior, (3) hybrid models combining content-based and collaborative filtering, (4) incorporating user demographics and stated preferences, (5) using community detection to identify similar users.

- **Source:** "A social importance and category enhanced cold-start user recommendation system" published in Expert Systems with Applications, ScienceDirect (<https://www.sciencedirect.com/science/article/abs/pii/S0957417425007523>) and "Recruitment From Social Networks for the Cold Start Problem in Mobile Crowdsourcing," IEEE Internet of Things Journal (<https://pureportal.coventry.ac.uk/en/publications/recruitment-from-social-networks-for-the-cold-start-problem-in-mo>)

- **Date:** 2024

- **Relevance:** Nostr developers can apply these research-backed strategies: allow users to import social graphs from other platforms, use Web of Trust networks to find similar users, implement collaborative filtering based on zap/like patterns, and explicitly ask users about interests during onboarding to make better recommendations.

---

## Finding 9: Instagram Operates Multiple Specialized Algorithms, Not One Universal System

- **Finding:** Instagram uses multiple algorithms for different surfaces: Feed algorithm prioritizes content from close connections, Reels algorithm focuses on entertainment value and gives newcomers viral potential regardless of follower count, and Explore algorithm helps users discover new content using similar signals. Each algorithm optimizes for different user goals (staying connected vs. discovering new content).

- **Source:** Shopify "Instagram Algorithm: How It Works and Tips for 2025" (<https://www.shopify.com/blog/instagram-algorithm>) and Buffer "How the Instagram Algorithm Works: Your 2025 Guide" (<https://buffer.com/library/instagram-feed-algorithm/>)

- **Date:** 2024-2025

- **Relevance:** Nostr clients should implement different algorithms for different use cases rather than one-size-fits-all feeds. A "Following" feed could show chronological posts from trusted accounts, while a "Discover" feed uses algorithms to surface quality content from unfollowed npubs. Separate feeds for different goals improves user experience.

---

## Finding 10: TikTok Algorithm Now Analyzes Emotional Tone and Community Alignment

- **Finding:** TikTok's 2024 algorithm updates include analyzing emotional tone of videos, giving more exposure to positive, supportive, or "feel-good" content. The algorithm rewards content that aligns with specific communities (e.g., #BookTok, #SportsOnTikTok), making them more visible within those groups. TikTok introduced dedicated STEM feed by default late in 2024, contributing to 45% increase in #Science hashtag posts.

- **Source:** Sprout Social "How the TikTok Algorithm Works in 2025" (<https://sproutsocial.com/insights/tiktok-algorithm/>) and Hootsuite "How does the TikTok algorithm work in 2025?" (<https://blog.hootsuite.com/tiktok-algorithm/>)

- **Date:** 2024

- **Relevance:** Nostr could implement sentiment analysis to prioritize constructive, positive content over toxic interactions. Community-focused feeds based on hashtags or topics (e.g., #Bitcoin, #Nostr, #Photography) would help users find relevant content without following specific accounts. Topic-based feeds solve the cold start problem by showing relevant content before users build networks.

---

## Finding 11: Social Media ROI Highest Among Digital Channels (36% Above Average)

- **Finding:** Nielsen's 2024 Annual Marketing Report surveying nearly 2,000 global marketers found social media has average ROI 36% higher than all media channels over the past three years. 71% of EMEA marketers view social media as extremely/very effective. Marketers plan to allocate 63% of budgets to digital channels, with social media, search, online video, and digital display as top priorities.

- **Source:** Nielsen "2024 Annual Marketing Report" (<https://www.nielsen.com/insights/2024/maximizing-roi-in-a-fragmented-world-nielsen-annual-marketing-report/>)

- **Date:** 2024

- **Relevance:** Demonstrates that social media platforms with good discovery mechanisms and engagement drive real business value, making them attractive to creators and businesses. If Nostr improves content discovery and feed quality to compete with mainstream platforms, it can attract professional creators and businesses seeking high-ROI channels, growing the ecosystem.

---

## Finding 12: Algorithmic Curation Balances Personalization Against Echo Chambers

- **Finding:** Research on social media functionalities finds that algorithmic curation significantly enhances user interaction and is key to retention and active participation. However, it creates a double-edged situation: balancing user experience personalization against risks of creating informational echo chambers. Features like AR filters, ephemeral content, and algorithmic curation all contribute to enhanced engagement.

- **Source:** Research findings discussed in multiple 2024 studies including "Novel Social Media Functionalities and User Behavior" and Encyclopedia MDPI "The Shaping of Social Media Algorithms on User Behavior" (<https://encyclopedia.pub/entry/57094>)

- **Date:** 2024

- **Relevance:** Nostr's decentralized relay model could actually provide better solutions to echo chambers than centralized platforms. Clients could implement algorithmic curation that surfaces diverse viewpoints while still personalizing to user interests. The key is transparency and user control over algorithm parameters, which Nostr's open protocol enables.

---

## Additional Context: Georgetown Report on "Better Feeds" (March 2025)

The comprehensive Georgetown University report "Better Feeds: Algorithms That Put People First" provides policy guidance and research synthesis across multiple studies. Key findings relevant to Nostr:

- Suggesting users must choose between engagement-optimized feeds and chronological/non-personalized feeds creates a false choice
- Algorithms can be designed to optimize for long-term user value rather than short-term engagement
- Limiting personalization can be counterproductive because tailored recommendations enhance user satisfaction and lower barriers to finding high-quality content
- Chronological feeds may increase exposure to abuse, amplify untrustworthy content, and create recency bias rewarding "spammy" posting behavior
- More than 75 bills targeting algorithm design have been introduced in the US since 2023, with over a dozen passing into law

**Source:** <https://kgi.georgetown.edu/wp-content/uploads/2025/02/Better-Feeds_-Algorithms-That-Put-People-First.pdf>
**Date:** March 2025

---

## Summary Implications for Nostr

Based on this research, Nostr content discovery should:

1. **Implement starter packs/curated follow lists** to solve cold start problem (Bluesky model)
2. **Build algorithmic discovery feeds** separate from chronological following feeds (Instagram/TikTok model)
3. **Prioritize original content and deep engagement signals** like zaps over simple likes (Instagram 2024 update)
4. **Avoid pure engagement optimization** that amplifies divisive content (Twitter research warning)
5. **Make search a core discovery mechanism**, not an afterthought (Gen Z behavior shift)
6. **Gather preference signals quickly during onboarding** (TikTok rapid learning model)
7. **Use Web of Trust and social graphs** to solve cold start (academic research)
8. **Implement specialized algorithms for different use cases** (Instagram multiple-algorithm approach)
9. **Consider community/topic-based feeds** independent of follows (TikTok community alignment)
10. **Balance algorithmic curation with transparency and user control** (Georgetown policy guidance)

---

**Document compiled:** November 7, 2025
**For use in:** Pattern 2 - Content Discovery & Feed Quality
**Project:** nostr-ux-research
