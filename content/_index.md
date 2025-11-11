---
title: "Design Patterns for Nostr UX"
description: "Evidence-based UX patterns for building Nostr apps people actually use"
layout: hextra-home
---

<div class="hx:mt-6 hx:mb-6">
{{< hextra/hero-headline >}}
  Design Patterns for&nbsp;<br class="hx:sm:block hx:hidden" />Nostr UX
{{< /hextra/hero-headline >}}
</div>

<div class="hx:mb-12">
{{< hextra/hero-subtitle >}}
  Evidence-based UX patterns for building Nostr apps people actually use
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx:mb-6">
{{< hextra/hero-button text="Get Started" link="docs/introduction/quick-start/" >}}
</div>

<div class="hx:mt-12 hx:mb-8">
  <h2 class="hx:text-3xl hx:font-bold hx:tracking-tight hx:text-gray-900 dark:hx:text-gray-50 hx:mb-6">Start Here</h2>
</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Validation Framework"
    subtitle="Stop building unvalidated features. Use the 3-question filter for every feature decision."
    link="docs/foundation/validation-framework"
    style="background: linear-gradient(to bottom right, #6366f1, #8b5cf6); color: white;"
  >}}
  {{< hextra/feature-card
    title="Quick Wins"
    subtitle="Ship improvements this week. 18 high-impact, low-effort improvements by pattern area."
    link="docs/foundation/quick-wins"
    style="background: linear-gradient(to bottom right, #3b82f6, #6366f1); color: white;"
  >}}
  {{< hextra/feature-card
    title="Implementation Guide"
    subtitle="Apply these patterns. Which pattern first, how to measure, what to avoid."
    link="docs/implementation"
    style="background: linear-gradient(to bottom right, #06b6d4, #3b82f6); color: white;"
  >}}
{{< /hextra/feature-grid >}}

<div class="hx:mt-16 hx:mb-8">
  <h2 class="hx:text-3xl hx:font-bold hx:tracking-tight hx:text-gray-900 dark:hx:text-gray-50 hx:mb-6">The 6 Critical Patterns</h2>
</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Pattern 1: Onboarding"
    subtitle="15-20 minute setup drives abandonment. Get users to value in under 2 minutes."
    link="docs/patterns/01-onboarding"
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-md:min-h-[340px]"
    image="images/onboarding.jpg"
    imageClass="hx:top-[40%] hx:left-0 hx:w-[110%] hx:sm:left-[24px] hx:sm:w-[140%] hx:md:w-[180%] hx:opacity-50 hx:dark:opacity-80"
  >}}
  {{< hextra/feature-card
    title="Pattern 2: Content Discovery"
    subtitle="Empty feeds lose users. Solve the cold start problem with smart defaults."
    link="docs/patterns/02-content-discovery"
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-lg:min-h-[340px]"
    image="images/discovery.jpg"
    imageClass="hx:top-[40%] hx:left-0 hx:w-[110%] hx:sm:left-[36px] hx:sm:w-[140%] hx:md:w-[180%] hx:opacity-50 hx:dark:opacity-80"
  >}}
  {{< hextra/feature-card
    title="Pattern 3: Core Interactions"
    subtitle="Posts disappear, users lose trust. Make basic actions reliable with optimistic UI."
    link="docs/patterns/03-core-interactions"
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-md:min-h-[340px]"
    image="images/interactions.webp"
    imageClass="hx:top-[40%] hx:left-0 hx:w-[110%] hx:sm:left-[36px] hx:sm:w-[110%] hx:opacity-50 hx:dark:opacity-80"
  >}}
  {{< hextra/feature-card
    title="Pattern 4: Performance"
    subtitle="Apps feel slow and crashy. Improve perceived speed with skeleton screens and caching."
    link="docs/patterns/04-performance"
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-md:min-h-[340px]"
    image="images/performance.jpg"
    imageClass="hx:top-[40%] hx:left-0 hx:w-[110%] hx:sm:left-[24px] hx:sm:w-[140%] hx:md:w-[180%] hx:opacity-50 hx:dark:opacity-80"
  >}}
  {{< hextra/feature-card
    title="Pattern 5: Progressive Complexity"
    subtitle="Too much complexity overwhelms. Hide advanced features until users need them."
    link="docs/patterns/05-progressive-complexity"
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-lg:min-h-[340px]"
    image="images/complexity.jpg"
    imageClass="hx:top-[40%] hx:left-0 hx:w-[110%] hx:sm:left-[36px] hx:sm:w-[140%] hx:md:w-[180%] hx:opacity-50 hx:dark:opacity-80"
  >}}
  {{< hextra/feature-card
    title="Pattern 6: Cross-Client Consistency"
    subtitle="Data loss when switching clients. Implement multi-relay write strategies."
    link="docs/patterns/06-cross-client-consistency"
    class="hx:aspect-auto hx:md:aspect-[1.1/1] hx:max-md:min-h-[340px]"
    image="images/consistency.jpg"
    imageClass="hx:top-[40%] hx:left-0 hx:w-[110%] hx:sm:left-[36px] hx:sm:w-[110%] hx:opacity-50 hx:dark:opacity-80"
  >}}
{{< /hextra/feature-grid >}}
