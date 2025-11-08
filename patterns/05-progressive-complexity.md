---
title: "Pattern 5: Progressive Complexity"
weight: 5
---

## Problem Statement

### Current State

**Overwhelming complexity killing adoption:**

- New users exposed to relay selection, key management, and NIP configurations immediately during onboarding
- Nostr clients showing 50+ relay pickers, signer app setup (NIP-46), and read/write relay splits before users understand basic posting
- Settings pages with technical jargon: "Outbox model (NIP-65)", "Relay list metadata", "Event signature verification"
- Users report feeling "overwhelmed" and "confused" by protocol complexity exposed in UI
- Power user features (relay health indicators, custom feeds, mute lists) presented as essential setup steps

**The perception problem:**
Nostr apps feel like developer tools, not consumer apps. Users compare to Twitter/Instagram's "it just works" simplicity and abandon when faced with:
- Relay management decisions on first launch
- Key signer configuration requirements
- Technical error messages referencing NIPs
- No sensible defaults—everything requires user configuration

**The retention impact:**

- Users abandon during onboarding when faced with unfamiliar technical concepts
- "Too complicated" cited as top reason for not adopting Nostr
- Power users love the control, but they represent <5% of potential audience
- Missing the mainstream market by optimizing for protocol purists

### Root Causes

1. **Protocol complexity exposed directly to users**: Relays, NIPs, and cryptographic concepts in user-facing UI
2. **No smart defaults**: Apps require configuration instead of working great out-of-box
3. **Power user features treated as essential**: Relay selection, signer apps shown to all users upfront
4. **Developer-first design**: Built for people who understand Nostr protocol, not mainstream users
5. **Feature bloat without hierarchy**: All features given equal prominence regardless of usage frequency
6. **Poor feature discovery**: Advanced features either hidden completely or overwhelming beginners

### Why This Matters

> "80% of users will only use 20% of features. Design for that 80% first." [[Research:54]](#research-54)

**Research shows:** [[Research:55]](#research-55) [[Research:56]](#research-56) [[Research:57]](#research-57)
- **30-40% reduction in cognitive load** through progressive disclosure during onboarding [[Research:55]](#research-55)
- **25% fewer interactions** needed when interfaces apply smart defaults (Airbnb case study) [[Research:57]](#research-57)
- **24% reduction in cognitive load** from minimal layouts with decluttered designs (Figma research) [[Research:57]](#research-57)
- Progressive disclosure reduces decision fatigue by revealing information in stages [[Research:56]](#research-56)
- Users abandon apps with >10-15 settings on a single screen [[Research:58]](#research-58)

**The Pareto Principle in UX:** [[Research:54]](#research-54)
- Focus on the 20% of features that deliver 80% of user value
- Most users never explore advanced settings
- Complexity should be optional, not mandatory

---

## Universal Principles

These principles apply to any application managing feature complexity and user experience.

### 1. The Pareto Principle (80/20 Rule)

**Research backing:** [[Research:54]](#research-54) [[Research:59]](#research-59)

**Core insight:** 80% of users will use only 20% of features. Design should optimize for the majority, not the power user minority.

**Application to interface design:**

- **Feature prioritization:** Identify which 20% of features meet 80% of users' needs [[Research:59]](#research-59)
- **Design focus:** 20% of design decisions drive 80% of impact—focus there [[Research:59]](#research-59)
- **MVP development:** Minimum viable products are Pareto Principle in action [[Research:59]](#research-59)

**Key strategies:**

- Default to the 20% of features that deliver 80% of value
- Make power features discoverable, not prominent
- Measure feature usage—if <20% use it, it shouldn't be in primary UI
- Reduce cognitive load by simplifying design elements [[Research:59]](#research-59)

**Examples from mainstream apps:**

- **Email clients:** Compose/Read/Archive visible; filters/labels/rules in settings
- **Social apps:** Post/Like/Comment primary; mute lists/quality filters advanced
- **Photo apps:** Basic filters prominent; curves/levels/masking for pros

### 2. Progressive Disclosure

**Research backing:** [[Research:55]](#research-55) [[Research:56]](#research-56) [[Research:60]](#research-60)

**Core insight:** Defer advanced features and information to secondary UI components. Keep essential content in primary UI, reveal advanced content upon request. [[Research:60]](#research-60)

**Why it works:**

- **30-40% reduction in cognitive load** during onboarding [[Research:55]](#research-55)
- Reduces decision fatigue by revealing information in stages [[Research:56]](#research-56)
- Breaks complex processes into manageable steps [[Research:55]](#research-55)
- Eliminates friction points that cause abandonment [[Research:55]](#research-55)

**Common implementations:** [[Research:56]](#research-56) [[Research:60]](#research-60)
- **Collapsible menus:** Hide advanced options until clicked
- **Tooltips/contextual help:** Information appears on hover or interaction
- **Hover-based actions:** Secondary actions revealed on hover
- **Toggles:** Reveal or hide advanced settings, letting users control interface complexity [[Research:60]](#research-60)
- **Step-by-step flows:** Multi-page wizards instead of one overwhelming screen

**When to use:** [[Research:60]](#research-60)
- Designing for novice users
- Complex tasks with many options
- Limited screen space (mobile)
- High cognitive load scenarios

**Design methods:** [[Research:60]](#research-60)
Define essential vs. advanced content through user research using card sorting and task analysis.

### 3. Smart Defaults That Work for 80%

**Research backing:** [[Research:57]](#research-57) [[Research:61]](#research-61)

**Core insight:** Great UX isn't about hiding features—it's about organizing them so users can find, understand, and use them without frustration. [[Research:61]](#research-61)

**The default experience should:**

- Work excellently without any configuration
- Serve 80% of users' needs immediately
- Allow customization for the 20% who need it
- Never force decisions users aren't ready to make

**Airbnb case study:** [[Research:57]](#research-57)
- Smart defaults led to **25% fewer interactions** needed to complete bookings
- Higher conversion rate with less cognitive effort
- Users could still customize, but most didn't need to

**Best practices:**

- Research what most users actually need (not what power users want)
- Test defaults with non-technical users
- Make changing defaults easy, but unnecessary for most
- Provide "Reset to default" option for users who customize

**Examples:**

- **Notification settings:** Defaults that balance engagement without spam
- **Privacy settings:** Sensible privacy by default, opt-in for sharing
- **Display settings:** Auto dark mode, readable font sizes, standard layouts

### 4. Settings Hierarchy: Basic → Advanced → Expert

**Research backing:** [[Research:58]](#research-58) [[Research:61]](#research-61)

**Core insight:** Limit settings on one screen to 10-15 items—more becomes overwhelming. [[Research:58]](#research-58) Create intuitive menus by moving additional settings to separate screens. [[Research:58]](#research-58)

**Three-tier hierarchy:**

**Tier 1: Basic (Visible to all)**
- Frequently used settings (top of screen) [[Research:58]](#research-58)
- Core functionality toggles
- Account/profile settings
- <10 items maximum

**Tier 2: Advanced (Behind "Advanced Settings" section)**
- Features used by 20-40% of users
- Customization options
- Performance tweaks
- Grouped logically by category

**Tier 3: Expert (Hidden in debug/developer/power user mode)**
- Experimental features
- Technical configurations
- Developer tools
- Risk: Can break things if misused

**Android design guidelines:** [[Research:58]](#research-58)
- Place frequently used settings at top
- Users should glance at settings and understand all individual settings and their values
- Limit items per screen to avoid overwhelming users

**Visual hierarchy principles:** [[Research:61]](#research-61)
- Prioritize important information
- Ensure content aligns with user needs and goals
- Use shared traits (color, shape, size) for quick understanding
- Apply visual consistency

### 5. Contextual Help Over Upfront Tutorials

**Research backing:** [[Research:62]](#research-62) [[Research:63]](#research-63)

**Core insight:** Show help content alongside each step to minimize cognitive load, rather than overwhelming users upfront. [[Research:62]](#research-62)

**Pull revelations vs. Push tutorials:** [[Research:62]](#research-62)
- **Pull revelations:** Help triggered when user would benefit from that information at that moment
- **Push tutorials:** Upfront product tours that users skip or forget

**Nielsen Norman Group (February 2024):** [[Research:62]](#research-62)
Progressive and contextual delivery introduces actions, steps, and features gradually as they become relevant to avoid cognitive overload.

**Best practices:** [[Research:63]](#research-63)
- **Tooltips:** Concise, context-sensitive pop-ups that give information without interrupting flow
- **Contextual hints:** Explain features only when first used
- **Progressive guidance:** Interactive tutorials, tooltips, step-by-step guides
- **AI-enhanced personalization:** Tailor onboarding to each user's goals and behavior [[Research:62]](#research-62)

**Implementation tools:** [[Research:62]](#research-62)
Pendo, Appcues, and Userpilot enable contextual help implementation without coding.

**Design principle:** [[Research:63]](#research-63)
Tooltips provide subtle, contextual guidance; pop-ups or modals are more disruptive—choose appropriately.

### 6. Feature Discovery for Power Users

**Research backing:** [[Research:61]](#research-61) [[Research:64]](#research-64)

**The challenge:** Power users need to find advanced features without overwhelming beginners.

**Discovery patterns:**

**Pattern A: Keyboard shortcuts**
- Display hints in tooltips (e.g., "⌘K to search")
- Provide shortcuts panel (? key)
- Allow customization for power users

**Pattern B: Search within settings**
- Filter settings by keyword
- Jump to specific configurations
- Avoids endless scrolling

**Pattern C: "Advanced" toggle or mode**
- Switch between simplified and full interfaces
- Remember user preference
- Clearly labeled entry point

**Pattern D: Contextual upsells**
- "Looking for more options? Try Advanced Mode"
- Shown after user demonstrates proficiency
- Not intrusive to beginners

**2024-2025 trends:** [[Research:64]](#research-64)
- **"Choose your own UX adventure" settings** for power users
- **Smart defaults** with behavior-based interfaces
- **Dashboards that feel personalized**
- **Adaptive interfaces:** Dark mode at night, simplified UI when fatigued

### 7. Minimize Cognitive Load

**Research backing:** [[Research:57]](#research-57) [[Research:65]](#research-65)

**Core insight:** Reduce cognitive load by simplifying visual information, creating clear interaction design, and applying psychological principles. [[Research:65]](#research-65)

**Proven techniques:** [[Research:65]](#research-65)

**Progressive disclosure:**
Accordions, tooltips, or step-by-step flows reveal content only when needed, keeping interface clean.

**Simplification strategies:**

- Consistent patterns across interface
- Clear layouts with minimal distractions
- Group related items logically
- Improve navigation with clear menus and visual hierarchies

**Mobile-specific:**
Bottom navigation bars and gesture-based controls streamline user journeys. [[Research:65]](#research-65)

**Measurable impact:** [[Research:57]](#research-57)
- **Airbnb:** Higher conversion, 25% fewer interactions with smart defaults
- **Figma:** 24% reduction in cognitive load with minimal layouts
- **Adobe (2024):** 30% increase in engagement with decluttered designs

**Key principle:** [[Research:61]](#research-61)
Great UX isn't about hiding features—it's about organizing them so users can find, understand, and use without frustration.

---

## Nostr-Specific Considerations

### Challenge 1: Relay Management Complexity

**The problem:** Nostr's multi-relay architecture is powerful but overwhelming for new users.

**Current failures:**

- Apps showing 50+ relay pickers during onboarding
- [[Data:31]](#data-31) Users setting relay preferences in one client (Nostrudel) find other clients (Coracle, Nostter) pulling relay lists incorrectly
- [[Data:31]](#data-31) Manual relay additions multiply unexpectedly, causing confusion
- Read/write relay splits exposed to beginners who don't understand the concept
- No explanation of what relays are or why they matter

**NIP-65 (Relay List Metadata) challenges:** [[Data:32]](#data-32)
- Uses kind:10002 events to advertise user's write relays (OUTBOX) and read relays (INBOX)
- Clients should guide users to keep lists small (2-4 relays) [[Data:32]](#data-32)
- Users switching clients experience relay list confusion due to incomplete NIP implementations [[Data:31]](#data-31)

**What 80% of users need:**

- App works perfectly with zero relay configuration
- Smart default relays chosen based on:
  - Geographic location (latency)
  - Reliability metrics
  - Community recommendations
- No relay UI during onboarding

**What 20% of power users need:**

- Relay health indicators (uptime, latency, event coverage)
- Custom relay management
- Read/write relay separation
- Relay analytics and debugging tools

**Progressive disclosure approach:**

**Level 1: Invisible (Default)**
```
No relay UI at all. App chooses optimal relays automatically:
- 2-3 well-connected, reliable relays
- Geographic proximity for low latency
- Automatic failover if relay goes down
```

**Level 2: Basic (Settings → Advanced)**
```
"Network Settings" (not "Relay Management")
- [✓] Automatic relay selection (recommended)
- [ ] Custom relay configuration

Tooltip: "Nostr uses multiple servers (relays) to store your posts.
Automatic mode works great for most people."
```

**Level 3: Power User (Settings → Advanced → Relay Management)**
```
Full relay management interface:
- Add/remove relays manually
- Read/write relay separation
- Relay health monitoring
- NIP-65 outbox model controls
- Import/export relay lists
```

**Implementation example:**
```typescript
// Smart default relays based on user location
function getDefaultRelays(userLocation: string): string[] {
  const globalRelays = [
    'wss://relay.damus.io',
    'wss://nos.lol',
    'wss://relay.nostr.band'
  ]

  const regionalRelays = {
    'NA': ['wss://nostr.mom', 'wss://relay.current.fyi'],
    'EU': ['wss://nostr.wine', 'wss://relay.orangepill.dev'],
    'APAC': ['wss://relay.nostr.wirednet.jp']
  }

  // Combine 2 global + 1-2 regional for optimal coverage
  return [...globalRelays.slice(0, 2), ...regionalRelays[userLocation].slice(0, 2)]
}

// Only show relay UI if user explicitly requests it
function shouldShowRelayUI(user: User): boolean {
  return user.settings.advancedMode === true || user.relayOverrides.length > 0
}
```

### Challenge 2: Key Signer Apps (NIP-46) Complexity

**The problem:** Remote signers enhance security but add significant complexity.

**Current state:** [[Data:33]](#data-33)
- NIP-46 specification unclear and constantly changing
- Incompatibilities between apps and signers
- No signer apps in traditional app stores (requires Obtanium or zap.store)
- Clients don't handle latency well (need better loading states, debouncing, optimistic updates)
- Push notification support incomplete

**Available signers:** [[Data:34]](#data-34)
- **Amber (Android):** Offline signing, multiple accounts, granular permissions
- **Nostr Signer (Alby):** Remote signing via push notifications

**User experience challenges:** [[Data:33]](#data-33)
While NIP-46 is best practice for key security, "it doesn't currently work very well at all" due to spec instability and poor UX.

**What 80% of users need:**

- Simple, secure key storage in-app
- Optional passphrase/biometric protection
- Clear backup instructions

**What 20% of power users need:**

- Remote signer integration (NIP-46)
- Hardware wallet support
- Multiple key/identity management
- Granular permission controls

**Progressive disclosure approach:**

**Level 1: Simple & Secure (Default)**
```
Onboarding:
"Your account is secured with a private key, safely stored on your device"
- Biometric unlock (Face ID/Touch ID)
- Optional passphrase
- Clear backup flow (12-word seed phrase or encrypted file)

NO mention of:
- nsec/npub distinction
- Remote signers
- NIP-46
- Cryptographic details
```

**Level 2: Backup Awareness (After 1 week or first post)**
```
Non-intrusive reminder:
"💡 Secure your account with a backup"
[Set up backup] [Later]

Backup flow:
"Save your recovery phrase. You'll need it if you switch devices."
[Show 12 words] → [Confirm] → [✓ Backed up]
```

**Level 3: Advanced Security (Settings → Security → Advanced)**
```
"Advanced Key Management"
- [ ] Use remote signer app (NIP-46)
  ℹ️ Store keys in a separate app for extra security
  [Connect Signer App]

- [ ] Export private key (nsec)
  ⚠️ Only do this if you know what you're doing
  [Show Private Key]
```

**When to introduce signer apps:**

- NEVER during onboarding
- Only in advanced security settings
- With clear explanation of benefits
- After user has successfully used app for 1+ week

### Challenge 3: Protocol Terminology in UI

**The problem:** Nostr-specific jargon (NIPs, relays, events, kinds) exposed in user-facing UI.

**Current failures:**

- Error messages: "Failed to publish kind:1 event to relay"
- Settings: "Enable NIP-65 Outbox Model"
- Features: "Import NIP-05 identifier"
- Help text: "This is defined in NIP-46"

**Translation guide for user-facing UI:**

| Technical Term | User-Facing Label | Context |
|----------------|-------------------|---------|
| Relay | Server, Network | "Your posts are stored on multiple servers" |
| Event | Post, Message, Update | "Your post was published successfully" |
| Kind:1 | Post | Never mention kind numbers |
| Kind:3 | Following list | "Your following list" |
| NIP-05 | Username, Verified name | "Get a username like alice@example.com" |
| NIP-46 | Remote signer | "Use a separate app to manage your keys" |
| NIP-65 | Network preferences | "Choose your preferred servers" |
| nsec/npub | Private key/Public key | Only in advanced settings |
| Outbox model | (no direct equivalent) | Feature should be invisible |

**Pattern: Hide protocol, show benefit**

**Bad:**
```
⚠️ Failed to publish kind:1 event to wss://relay.example.com
NIP-01 signature verification failed
```

**Good:**
```
⚠️ Couldn't post right now
We'll try again automatically, or you can retry
[Retry] [Cancel]
```

**Bad:**
```
Settings
☐ Enable NIP-65 Outbox Model
☐ Verify NIP-01 Signatures
☐ Support NIP-46 Remote Signers
```

**Good:**
```
Settings
☐ Optimize network performance (recommended)
☐ Verify post authenticity (recommended)

Advanced →
  ☐ Use external key manager
```

### Challenge 4: When to Introduce Advanced Nostr Features

**The progressive rollout:**

**Week 1: Core social experience**
- Post, read, like, reply
- Follow/unfollow
- Profile editing
- Notifications
- Zero Nostr-specific concepts

**Week 2-4: Light customization**
- Mute/block users (no "Web of Trust" jargon)
- Notification preferences
- Display preferences
- Content filters

**Month 2+: Power user features (opt-in)**
- Network settings (relay management)
- Advanced security (remote signers)
- Data portability (export/import)
- Custom feeds
- Zap configuration

**Power user detection signals:**

- User explores settings multiple times
- User asks support about advanced features
- User follows >100 accounts
- User posts >10 times/week
- User has been active >30 days

**Contextual feature discovery:**
```typescript
// Show power user hints based on behavior
if (user.daysActive > 30 && user.postsCount > 50) {
  showContextualHint(
    "💡 Did you know?",
    "You can optimize your network settings for better performance",
    "Settings → Advanced → Network"
  )
}

// Only show once, never intrusive
```

### Challenge 5: Settings Organization for Nostr Apps

**Applying 10-15 items limit to Nostr settings:** [[Research:58]](#research-58)

**Basic Settings (Visible to all, <10 items)**
```
Profile & Account
  • Edit profile
  • Username (NIP-05)
  • Privacy settings

Notifications
  • Enable notifications
  • Sound & badges

Display
  • Theme (Light/Dark/Auto)
  • Text size

Security
  • Require biometric unlock
  • Backup account
```

**Advanced Settings (Collapsed by default)**
```
Advanced →
  Network
    • Network optimization (auto/manual)
    • Connection status

  Security
    • Key management
    • Remote signer setup

  Data & Storage
    • Cache management
    • Import/export

  Experimental
    • Beta features
    • Debug mode
```

**Developer/Debug (Hidden, requires code/gesture)**
```
Hold settings icon for 3 seconds →

Developer Options
  • Relay management (full control)
  • Event inspector
  • NIP feature flags
  • Performance monitoring
  • Protocol diagnostics
```

---

## Pattern Library: Concrete Solutions

### Pattern A: Collapsible Advanced Settings

**Problem:** Settings page with 30+ options overwhelming users.

**Solution:** Group related settings, collapse advanced sections by default.

**Implementation:**

```tsx
function SettingsScreen() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showDeveloper, setShowDeveloper] = useState(false)

  return (
    <div className="settings">
      {/* Basic Settings - Always Visible */}
      <Section title="Profile & Account">
        <Setting label="Edit profile" onClick={editProfile} />
        <Setting label="Username" value={user.nip05} />
        <Setting label="Privacy settings" onClick={showPrivacy} />
      </Section>

      <Section title="Notifications">
        <Toggle label="Enable notifications" checked={notificationsEnabled} />
        <Toggle label="Sound & badges" checked={soundEnabled} />
      </Section>

      <Section title="Display">
        <Select label="Theme" options={['Light', 'Dark', 'Auto']} value={theme} />
        <Slider label="Text size" value={textSize} min={12} max={24} />
      </Section>

      <Section title="Security">
        <Toggle label="Require biometric unlock" checked={biometricEnabled} />
        <Setting label="Backup account" onClick={showBackup} />
      </Section>

      {/* Advanced Settings - Collapsed by Default */}
      <CollapsibleSection
        title="Advanced"
        isOpen={showAdvanced}
        onToggle={() => setShowAdvanced(!showAdvanced)}
        itemCount={8}
      >
        <Subsection title="Network">
          <Toggle label="Network optimization" checked={autoNetwork} />
          <Setting label="Connection status" onClick={showNetworkStatus} />
        </Subsection>

        <Subsection title="Security">
          <Setting label="Key management" onClick={showKeyManagement} />
          <Setting label="Remote signer setup" onClick={showSignerSetup} />
        </Subsection>

        <Subsection title="Data & Storage">
          <Setting label="Cache management" onClick={showCacheSettings} />
          <Setting label="Import/export" onClick={showDataPortability} />
        </Subsection>

        <Subsection title="Experimental">
          <Toggle label="Beta features" checked={betaEnabled} />
          <Setting label="Debug mode" onClick={enableDebugMode} />
        </Subsection>
      </CollapsibleSection>

      {/* Developer Settings - Hidden */}
      {showDeveloper && (
        <CollapsibleSection title="Developer Options" isDangerous>
          <Setting label="Relay management" onClick={showRelayManager} />
          <Setting label="Event inspector" onClick={showEventInspector} />
          <Setting label="NIP feature flags" onClick={showNIPFlags} />
        </CollapsibleSection>
      )}
    </div>
  )
}

// Collapsible section component
function CollapsibleSection({ title, isOpen, onToggle, itemCount, isDangerous, children }) {
  return (
    <div className={`collapsible-section ${isDangerous ? 'dangerous' : ''}`}>
      <button onClick={onToggle} className="section-header">
        <span>{title}</span>
        {!isOpen && itemCount && <span className="badge">{itemCount}</span>}
        <ChevronIcon direction={isOpen ? 'up' : 'down'} />
      </button>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  )
}
```

**Validation:**

- Basic settings: 8 items (under 10 limit)
- Advanced settings: 8 items (collapsed by default)
- Clear visual hierarchy
- Item count badge shows what's hidden

---

### Pattern B: Contextual Feature Introduction

**Problem:** Users don't know about advanced features that could help them.

**Solution:** Show contextual hints based on user behavior, never intrusive.

**Implementation:**

```typescript
// Track user behavior to detect power user patterns
interface UserBehaviorTracker {
  daysActive: number
  postsCount: number
  followingCount: number
  settingsVisits: number
  hasSeenHint: Set<string>
}

function shouldShowHint(
  hintId: string,
  user: UserBehaviorTracker,
  condition: () => boolean
): boolean {
  // Never show same hint twice
  if (user.hasSeenHint.has(hintId)) return false

  // Check condition
  return condition()
}

// Contextual hint system
function useContextualHints(user: UserBehaviorTracker) {
  const [currentHint, setCurrentHint] = useState<ContextualHint | null>(null)

  useEffect(() => {
    // Power user detection: Show relay optimization hint
    if (shouldShowHint('relay-optimization', user, () =>
      user.daysActive > 30 && user.postsCount > 50
    )) {
      setCurrentHint({
        id: 'relay-optimization',
        title: '💡 Did you know?',
        message: 'You can optimize your network settings for better performance',
        action: {
          label: 'Learn more',
          onClick: () => navigate('/settings/advanced/network')
        }
      })
    }

    // Frequent poster: Show backup reminder
    if (shouldShowHint('backup-reminder', user, () =>
      user.postsCount > 10 && !user.hasBackup
    )) {
      setCurrentHint({
        id: 'backup-reminder',
        title: '🔒 Secure your account',
        message: 'You\'ve posted 10 times! Consider backing up your account',
        action: {
          label: 'Set up backup',
          onClick: () => navigate('/settings/security/backup')
        }
      })
    }

    // Heavy follower: Show custom feed hint
    if (shouldShowHint('custom-feeds', user, () =>
      user.followingCount > 100
    )) {
      setCurrentHint({
        id: 'custom-feeds',
        title: '📋 Organize your feed',
        message: 'You follow 100+ people. Try creating custom feeds to organize content',
        action: {
          label: 'Create feed',
          onClick: () => navigate('/feeds/create')
        }
      })
    }
  }, [user])

  const dismissHint = (hintId: string) => {
    user.hasSeenHint.add(hintId)
    setCurrentHint(null)
    // Persist to storage
    saveDismissedHints(user.hasSeenHint)
  }

  return { currentHint, dismissHint }
}

// UI Component
function ContextualHintBanner({ hint, onDismiss }) {
  if (!hint) return null

  return (
    <div className="contextual-hint">
      <div className="hint-content">
        <h4>{hint.title}</h4>
        <p>{hint.message}</p>
      </div>
      <div className="hint-actions">
        <button onClick={hint.action.onClick} className="primary">
          {hint.action.label}
        </button>
        <button onClick={() => onDismiss(hint.id)} className="secondary">
          Dismiss
        </button>
      </div>
    </div>
  )
}
```

---

### Pattern C: Progressive Relay Configuration

**Problem:** Relay selection too complex for beginners, but essential for power users.

**Solution:** Three-tier progressive disclosure (invisible → basic → advanced).

**Implementation:**

```typescript
// Level 1: Automatic relay selection (invisible to user)
class AutomaticRelayManager {
  private userLocation: string
  private relayStats: Map<string, RelayStats>

  async getOptimalRelays(): Promise<string[]> {
    const location = await this.getUserLocation()
    const defaults = this.getDefaultRelays(location)
    const tested = await this.testRelayLatency(defaults)

    // Return 3-4 fastest, most reliable relays
    return tested
      .sort((a, b) => a.latency - b.latency)
      .slice(0, 4)
      .map(r => r.url)
  }

  private getDefaultRelays(location: string): string[] {
    const globalRelays = [
      'wss://relay.damus.io',
      'wss://nos.lol',
      'wss://relay.nostr.band'
    ]

    const regionalRelays = {
      'NA': ['wss://nostr.mom', 'wss://relay.current.fyi'],
      'EU': ['wss://nostr.wine', 'wss://relay.orangepill.dev'],
      'APAC': ['wss://relay.nostr.wirednet.jp', 'wss://relay.nostr.moctane.com']
    }

    return [...globalRelays, ...(regionalRelays[location] || [])]
  }

  private async testRelayLatency(relays: string[]): Promise<RelayTestResult[]> {
    const results = await Promise.all(
      relays.map(async url => {
        const start = Date.now()
        try {
          await this.pingRelay(url)
          return { url, latency: Date.now() - start, online: true }
        } catch {
          return { url, latency: Infinity, online: false }
        }
      })
    )
    return results.filter(r => r.online)
  }
}

// Level 2: Basic toggle (Settings → Advanced)
function NetworkSettings() {
  const [mode, setMode] = useState<'auto' | 'custom'>('auto')
  const [customRelays, setCustomRelays] = useState<string[]>([])

  return (
    <div>
      <h2>Network Settings</h2>

      <RadioGroup value={mode} onChange={setMode}>
        <Radio value="auto">
          <strong>Automatic (Recommended)</strong>
          <p>We'll choose the best servers for you</p>
          <Tooltip>
            Nostr uses multiple servers (relays) to store your posts.
            Automatic mode works great for most people.
          </Tooltip>
        </Radio>

        <Radio value="custom">
          <strong>Custom configuration</strong>
          <p>Manually choose your servers</p>
        </Radio>
      </RadioGroup>

      {mode === 'custom' && (
        <button onClick={() => navigate('/settings/advanced/relays')}>
          Manage relays →
        </button>
      )}
    </div>
  )
}

// Level 3: Full relay management (Settings → Advanced → Relay Management)
function RelayManagementScreen() {
  const [relays, setRelays] = useState<Relay[]>([])
  const [showAddRelay, setShowAddRelay] = useState(false)

  return (
    <div className="relay-manager">
      <h2>Relay Management</h2>
      <p className="description">
        Advanced users: Customize which servers store and relay your posts
      </p>

      {/* Relay List */}
      <div className="relay-list">
        {relays.map(relay => (
          <RelayCard
            key={relay.url}
            relay={relay}
            onRemove={() => removeRelay(relay.url)}
            onToggleRead={() => toggleRelayRead(relay.url)}
            onToggleWrite={() => toggleRelayWrite(relay.url)}
          />
        ))}
      </div>

      {/* Add Relay */}
      <button onClick={() => setShowAddRelay(true)}>
        + Add relay
      </button>

      {/* Advanced Options */}
      <CollapsibleSection title="Advanced Options">
        <Toggle
          label="Enable NIP-65 Outbox Model"
          tooltip="Use your relay preferences when others fetch your posts"
          checked={nip65Enabled}
          onChange={setNip65Enabled}
        />
        <Setting
          label="Import relay list"
          onClick={importRelayList}
        />
        <Setting
          label="Export relay list"
          onClick={exportRelayList}
        />
      </CollapsibleSection>

      {/* Relay Health Monitoring */}
      <Section title="Relay Health">
        <RelayHealthDashboard relays={relays} />
      </Section>
    </div>
  )
}

function RelayCard({ relay, onRemove, onToggleRead, onToggleWrite }) {
  return (
    <div className="relay-card">
      <div className="relay-info">
        <StatusIndicator status={relay.status} />
        <span className="relay-url">{relay.url}</span>
        <span className="relay-latency">{relay.latency}ms</span>
      </div>

      <div className="relay-controls">
        <Toggle
          label="Read"
          size="small"
          checked={relay.read}
          onChange={onToggleRead}
        />
        <Toggle
          label="Write"
          size="small"
          checked={relay.write}
          onChange={onToggleWrite}
        />
        <button onClick={onRemove} className="icon-button">
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
```

---

### Pattern D: Smart Feature Gating

**Problem:** Advanced features visible to all users, causing confusion.

**Solution:** Gate features based on user proficiency level, with clear upgrade path.

**Implementation:**

```typescript
// User proficiency detection
enum UserLevel {
  BEGINNER = 'beginner',      // 0-7 days, <10 posts
  INTERMEDIATE = 'intermediate', // 7-30 days, 10-50 posts
  ADVANCED = 'advanced',        // 30+ days, 50+ posts
  POWER_USER = 'power_user'     // Explicitly enabled advanced mode
}

function getUserLevel(user: User): UserLevel {
  // Explicit power user mode
  if (user.settings.advancedMode) {
    return UserLevel.POWER_USER
  }

  // Based on activity
  const { daysActive, postsCount, followingCount } = user.stats

  if (daysActive > 30 && postsCount > 50) {
    return UserLevel.ADVANCED
  }

  if (daysActive > 7 && postsCount > 10) {
    return UserLevel.INTERMEDIATE
  }

  return UserLevel.BEGINNER
}

// Feature gating component
function FeatureGate({
  requiredLevel,
  feature,
  fallback,
  children
}: {
  requiredLevel: UserLevel
  feature: string
  fallback?: React.ReactNode
  children: React.ReactNode
}) {
  const user = useUser()
  const userLevel = getUserLevel(user)

  const levels = [
    UserLevel.BEGINNER,
    UserLevel.INTERMEDIATE,
    UserLevel.ADVANCED,
    UserLevel.POWER_USER
  ]

  const hasAccess = levels.indexOf(userLevel) >= levels.indexOf(requiredLevel)

  if (hasAccess) {
    return <>{children}</>
  }

  // Show upgrade prompt for intermediate/advanced users
  if (userLevel >= UserLevel.INTERMEDIATE && fallback) {
    return <>{fallback}</>
  }

  // Hide completely for beginners
  return null
}

// Usage examples
function ComposerToolbar() {
  return (
    <div className="composer-toolbar">
      {/* Always visible */}
      <button>Bold</button>
      <button>Italic</button>
      <button>Link</button>

      {/* Intermediate+ */}
      <FeatureGate requiredLevel={UserLevel.INTERMEDIATE} feature="markdown">
        <button>Code</button>
        <button>Quote</button>
      </FeatureGate>

      {/* Advanced+ */}
      <FeatureGate
        requiredLevel={UserLevel.ADVANCED}
        feature="custom-relays"
        fallback={
          <Tooltip>
            Unlock custom relay selection after 30 days of activity
          </Tooltip>
        }
      >
        <button onClick={openRelaySelector}>
          Choose relays for this post
        </button>
      </FeatureGate>

      {/* Power users only */}
      <FeatureGate requiredLevel={UserLevel.POWER_USER} feature="raw-event">
        <button onClick={editRawEvent}>Edit raw event</button>
      </FeatureGate>
    </div>
  )
}

function SettingsMenu() {
  const userLevel = getUserLevel(useUser())

  return (
    <div>
      {/* Basic settings - always visible */}
      <MenuItem to="/settings/profile">Profile</MenuItem>
      <MenuItem to="/settings/notifications">Notifications</MenuItem>
      <MenuItem to="/settings/display">Display</MenuItem>

      {/* Advanced settings - gated */}
      <FeatureGate requiredLevel={UserLevel.INTERMEDIATE} feature="advanced-settings">
        <MenuItem to="/settings/advanced">Advanced</MenuItem>
      </FeatureGate>

      {/* Power user prompt */}
      {userLevel === UserLevel.ADVANCED && (
        <MenuItem onClick={enablePowerUserMode}>
          <span>Enable Power User Mode</span>
          <Badge>Unlock all features</Badge>
        </MenuItem>
      )}
    </div>
  )
}
```

---

### Pattern E: In-App Feature Education

**Problem:** Users don't understand what advanced features do or when to use them.

**Solution:** Contextual tooltips and progressive education.

**Implementation:**

```tsx
// Educational tooltip system
function EducationalTooltip({
  feature,
  title,
  description,
  learnMoreUrl,
  children
}: {
  feature: string
  title: string
  description: string
  learnMoreUrl?: string
  children: React.ReactNode
}) {
  const [hasSeenTooltip, setHasSeenTooltip] = useState(
    () => localStorage.getItem(`tooltip-seen-${feature}`) === 'true'
  )
  const [isOpen, setIsOpen] = useState(false)

  const markAsSeen = () => {
    localStorage.setItem(`tooltip-seen-${feature}`, 'true')
    setHasSeenTooltip(true)
    setIsOpen(false)
  }

  return (
    <Tooltip
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      content={
        <div className="educational-tooltip">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="tooltip-actions">
            {learnMoreUrl && (
              <a href={learnMoreUrl} target="_blank">
                Learn more →
              </a>
            )}
            <button onClick={markAsSeen}>Got it</button>
          </div>
        </div>
      }
      badge={!hasSeenTooltip ? '!' : undefined}
    >
      {children}
    </Tooltip>
  )
}

// Usage in advanced settings
function AdvancedNetworkSettings() {
  return (
    <div>
      <EducationalTooltip
        feature="relay-read-write-split"
        title="Read/Write Relay Split"
        description="Choose different servers for reading posts (read) and publishing your posts (write). This can improve performance and privacy."
      >
        <Toggle
          label="Separate read and write relays"
          checked={splitRelays}
          onChange={setSplitRelays}
        />
      </EducationalTooltip>

      <EducationalTooltip
        feature="outbox-model"
        title="Outbox Model (NIP-65)"
        description="Tell other users which servers to check for your posts. This helps your posts reach more people reliably."
        learnMoreUrl="https://github.com/nostr-protocol/nips/blob/master/65.md"
      >
        <Toggle
          label="Enable outbox model"
          checked={outboxEnabled}
          onChange={setOutboxEnabled}
        />
      </EducationalTooltip>

      <EducationalTooltip
        feature="relay-auth"
        title="Relay Authentication"
        description="Some relays require authentication to prevent spam. This lets you connect to authenticated relays."
      >
        <Toggle
          label="Allow relay authentication (NIP-42)"
          checked={authEnabled}
          onChange={setAuthEnabled}
        />
      </EducationalTooltip>
    </div>
  )
}
```

---

## Anti-Patterns: What Not To Do

### Anti-Pattern 1: Relay Picker in Onboarding

**What it looks like:**
```
Welcome to Nostr!
Step 1: Choose your relays (required)

[ ] wss://relay.damus.io
[ ] wss://nos.lol
[ ] wss://relay.nostr.band
... (47 more relays)

ℹ️ Relays are servers that store your events. Choose at least 3.
Learn more about NIP-01 relay specification →

[Continue]
```

**Why it fails:**

- New users have no idea what relays are
- Overwhelming choice before understanding the platform
- Technical jargon ("events", "NIP-01") scares users away
- Creates decision paralysis
- Users abandon before reaching value

**What to do instead:**

- Zero relay configuration during onboarding
- App chooses optimal relays automatically (2-3 well-connected ones)
- Defer relay management to advanced settings
- Only show to power users who request it

**Good example:**
```
Welcome to Nostr!

[Create account]  [Sign in]

(No relay selection—handled automatically)
```

---

### Anti-Pattern 2: NIP Jargon in User-Facing UI

**What it looks like:**
```
Settings
☑ Enable NIP-01 Event Verification
☑ Support NIP-05 Identifiers
☑ Use NIP-46 Remote Signers
☑ Implement NIP-65 Outbox Model
☐ Enable NIP-42 Relay Authentication

⚠️ Failed to publish kind:1 event to wss://relay.example.com
NIP-01 signature verification failed on event:
a3f82...
```

**Why it fails:**

- Users don't know what NIPs are (nor should they)
- Technical protocol references confuse mainstream users
- Error messages expose implementation details
- Makes app feel like developer tool, not consumer product

**What to do instead:**

- Translate protocol terms to user benefits
- Hide NIP numbers completely
- Use human-readable error messages
- Reference NIPs only in developer documentation

**Good example:**
```
Settings
☑ Verify post authenticity (recommended)
☑ Get a username
☑ Use external key manager
☑ Optimize network performance
☐ Connect to private servers

⚠️ Couldn't post right now
We'll try again automatically
[Retry] [Cancel]
```

---

### Anti-Pattern 3: All Features Visible to All Users

**What it looks like:**
```
Composer Toolbar:
[B] [I] [U] [Link] [Image] [Video] [Poll] [Article]
[Code] [Quote] [Spoiler] [Table] [Embed] [LaTeX]
[Choose Relays] [Set Expiration] [Edit Raw Event]
[Add Hashtags] [Mention] [Emoji] [GIF] [Location]
```

**Why it fails:**

- 20+ buttons overwhelming beginners
- Most users only need 3-4 core features
- Power features clutter interface
- Paradox of choice: more options = less usage

**What to do instead:**

- Show 5-7 core features by default
- Progressive disclosure for advanced features
- Feature gating based on user level
- Overflow menu for less-used actions

**Good example:**
```
Composer Toolbar:
[B] [I] [Link] [Image] [⋯ More]

More menu (contextual):
→ Code block
→ Quote
→ Poll
→ Advanced options (power users only)
```

---

### Anti-Pattern 4: No Smart Defaults

**What it looks like:**
```
First Launch
Before you can use this app, please configure:

1. Select your relays (0 selected)
2. Choose read/write relay split
3. Set up relay authentication
4. Configure event cache duration
5. Set network optimization preferences
6. Choose signature verification level

[Start Configuration]
```

**Why it fails:**

- Requires decisions before user understands platform
- No "just works" experience
- Users abandon rather than configure
- Assumes technical knowledge

**What to do instead:**

- App works perfectly with zero configuration
- Smart defaults for 80% of users
- Defer customization to advanced settings
- One-click "Optimize automatically" option

**Good example:**
```
Welcome to Nostr!

[Create account]  [Sign in]

(Everything configured automatically)
```

---

### Anti-Pattern 5: Settings Overload

**What it looks like:**
```
Settings (67 items on one screen)

Profile
Notifications
Display
Privacy
Security
Network
  - Relay 1 URL
  - Relay 1 Read/Write
  - Relay 2 URL
  - Relay 2 Read/Write
  ... (10 relays, 20 settings)
Performance
Cache
Storage
Advanced
Developer
Experimental
...
(endless scrolling)
```

**Why it fails:**

- Overwhelming cognitive load
- Violates 10-15 items limit
- Users can't find what they need
- Everything looks equally important
- Poor visual hierarchy

**What to do instead:**

- Basic settings: <10 items
- Group related settings logically
- Collapse advanced sections by default
- Use search for finding settings
- Hide developer options completely

**Good example:**
```
Settings

Profile & Account
Notifications
Display
Security

Advanced ▼ (8 items)

(Developer options: hidden)
```

---

### Anti-Pattern 6: Upfront Tutorial Overload

**What it looks like:**
```
Welcome to Nostr! Let's get you started.

Tutorial (12 steps):
1. What are relays?
2. Understanding events and kinds
3. Public and private keys (nsec/npub)
4. NIPs and protocol extensions
5. How to choose relays
6. Read vs Write relays
7. Outbox model (NIP-65)
8. Relay authentication (NIP-42)
9. Remote signers (NIP-46)
10. Web of Trust
11. Zaps and Lightning
12. Data portability

[Start Tutorial] [Skip]

(Users hit Skip, never learn anything)
```

**Why it fails:**

- Information overload before usage
- Users skip and never return
- Teaches protocol, not usage
- No context for why it matters

**What to do instead:**

- Contextual help when features are encountered
- "Pull" education (user-triggered) not "push" (forced)
- Short, focused tooltips at point of use
- Progressive education as users grow

**Good example:**
```
Welcome to Nostr!

[Create account]  [Sign in]

(No upfront tutorial)

Later, when user first encounters relay settings:
💡 Servers (Relays)
Nostr uses multiple servers to store posts.
We've chosen the best ones for you.
[Got it]
```

---

### Anti-Pattern 7: Power User Features in Main Navigation

**What it looks like:**
```
Main Navigation:
🏠 Home
🔔 Notifications
💬 Messages
👤 Profile
🔧 Relay Manager
📊 Event Inspector
🔑 Key Management
⚙️ NIP Feature Flags
🐛 Debug Console
```

**Why it fails:**

- Developer tools mixed with user features
- Beginners confused by technical options
- Poor information architecture
- Visual clutter

**What to do instead:**

- Main navigation: core user features only
- Advanced features in settings
- Developer tools hidden (gesture/code to unlock)
- Clear separation of concerns

**Good example:**
```
Main Navigation:
🏠 Home
🔔 Notifications
💬 Messages
👤 Profile
⚙️ Settings
  → Advanced
      → Developer Options (if enabled)
```

---

### Anti-Pattern 8: Immediate Signer App Requirement

**What it looks like:**
```
Create Account

For maximum security, you need a remote signer app.

Step 1: Install Amber (Android) or Nostr Signer (iOS)
Step 2: Generate keys in signer app
Step 3: Connect this app to your signer
Step 4: Approve connection via NIP-46

[Install Signer App]

Note: Signer apps are not available in app stores.
You'll need to install Obtanium first...
```

**Why it fails:**

- Massive friction before value
- Requires installing 2-3 apps before using one
- Signer apps not in official stores
- NIP-46 has poor UX and compatibility issues
- 99% of users will abandon

**What to do instead:**

- Simple in-app key storage by default
- Optional passphrase/biometric protection
- Introduce signer apps AFTER user is active (1+ weeks)
- Clear explanation of benefits
- Make it optional, not required

**Good example:**
```
Create Account

Your account is secured with a private key,
safely stored on your device.

[Create account]

Later (after 1 week):
💡 Extra Security
Want even more protection? Use a dedicated
signer app to manage your keys.
[Learn more] [Not now]
```

---

## Validation Checklist

### Feature Usage Metrics

**Track which features are actually used:**

- [ ] **Feature usage by user level:**
  - Beginner (0-7 days): Which features do they use?
  - Intermediate (7-30 days): New features adopted?
  - Advanced (30+ days): Power features engaged?
- [ ] **Feature adoption rates:**
  - What % of users ever use advanced features?
  - What % use them regularly (>1x/week)?
- [ ] **Settings engagement:**
  - How many users visit advanced settings?
  - Which settings are changed most often?
  - Which settings are never touched?

**Questions to answer:**

- Are <20% of features used by >80% of users? (Pareto principle validation)
- Which advanced features can be hidden without impact?
- Which "basic" features should be demoted?

---

### Settings Complexity Audit

**Count settings by tier:**

- [ ] **Basic settings (visible to all):** Must be <10 items
- [ ] **Advanced settings (collapsed):** Should be <15 items
- [ ] **Expert/Developer settings:** Hidden entirely

**Validate hierarchy:**

- [ ] Frequently used settings at top
- [ ] Related settings grouped logically
- [ ] No more than 3 levels of nesting
- [ ] Each setting has clear, jargon-free label

**User testing:**

- [ ] New users can find basic settings in <10 seconds
- [ ] Users don't feel overwhelmed by settings screen
- [ ] Power users can find advanced features when needed

---

### Progressive Disclosure Effectiveness

**Measure cognitive load:**

- [ ] **Onboarding completion rate:** Target >70%
- [ ] **Time to first value:** <2 minutes for new users
- [ ] **Decision points during setup:** <3 required decisions

**User feedback:**

- [ ] "Does the app feel overwhelming?" (Target: <10% say yes)
- [ ] "Can you find what you need?" (Target: >80% say yes)
- [ ] "Do you feel in control?" (Target: >70% say yes)

**A/B test progressive disclosure:**

- Test A: All features visible
- Test B: Progressive disclosure
- Measure: Completion rate, time-to-value, feature discovery

---

### Nostr-Specific Validation

**Relay management:**

- [ ] **Default relay selection works for 80% of users:**
  - Post success rate >95%
  - Average latency <2s
  - No manual intervention needed
- [ ] **Advanced users can find relay management:**
  - <20% of users access it
  - Those who do understand it (support tickets as proxy)
  - Power users satisfied with control level

**Protocol terminology:**

- [ ] **Zero NIP references in basic UI:**
  - Error messages use plain language
  - Settings use benefits, not protocol terms
  - Help documentation explains concepts simply
- [ ] **User comprehension:**
  - Users understand what "servers" mean (not "relays")
  - Users understand "username" (not "NIP-05")
  - Users understand "backup" (not "nsec export")

**Signer app introduction:**

- [ ] **Never required during onboarding:** 100% compliance
- [ ] **Introduced after 1+ week:** For active users only
- [ ] **Adoption rate tracked:**
  - What % of eligible users (1+ week) set up signer?
  - What % abandon during signer setup?
  - What % successfully complete setup?

---

### User Research Questions

**For beginners (0-7 days):**

- "Did anything confuse you during setup?"
- "What features do you wish were simpler?"
- "What features do you wish were easier to find?"
- "Did you see any technical terms you didn't understand?"

**For intermediate users (7-30 days):**

- "Have you explored advanced settings?"
- "What features did you discover after using the app for a while?"
- "What would you change about the settings organization?"

**For advanced users (30+ days):**

- "Can you find all the power user features you need?"
- "What advanced features are missing?"
- "Would you prefer more or less control over technical settings?"

---

### Success Metrics

**Primary metrics:**

- [ ] **Onboarding completion rate:** >70% (vs. current baseline)
- [ ] **D1/D7/D30 retention:** Improved by >10%
- [ ] **Time to first post:** <2 minutes (down from 15-20 minutes)
- [ ] **"Too complicated" complaints:** <10% of users

**Secondary metrics:**

- [ ] **Advanced settings usage:** 10-20% of users
- [ ] **Support tickets for relay issues:** Down >50%
- [ ] **Users switching clients for features:** Down >30%
- [ ] **Power user satisfaction:** >80% can find what they need

**Comparative benchmarks:**

- [ ] Onboarding simpler than Twitter/Instagram? (user survey)
- [ ] Settings organization clearer than competitors? (user survey)
- [ ] Advanced features as discoverable as Figma/Slack? (power user survey)

---

### A/B Testing Opportunities

**Test 1: Relay visibility**
- A: Relays in onboarding
- B: Relays hidden entirely
- Measure: Completion rate, confusion, post success

**Test 2: Settings organization**
- A: Flat list (all settings visible)
- B: Collapsed advanced section
- Measure: Time to find settings, perceived complexity

**Test 3: Feature gating**
- A: All features always visible
- B: Progressive feature unlock (beginner → advanced)
- Measure: Feature discovery, usage rates, satisfaction

**Test 4: Terminology**
- A: Protocol terms (relays, NIPs, events)
- B: User-friendly terms (servers, username, posts)
- Measure: Comprehension, support tickets, confusion

**Test 5: Signer introduction**
- A: Signer during onboarding (current some apps)
- B: Signer after 1 week (recommended)
- Measure: Completion rate, signer adoption, abandonment

---

## Citations & Sources

**Note:** All sources from 2024-2025 to ensure currency for this fast-moving technology.

### Universal UX Research

<a id="research-54"></a>
**[Research:54]** Pareto Principle (80/20 Rule) in UX Design
- **Updated:** September 2025 (Interaction Design Foundation)
- **Key finding:** 80% of users use only 20% of features
- **Application:** Focus on 20% of design decisions that drive 80% of impact
- **Source:** https://www.interaction-design.org/literature/topics/pareto-principle
- **Source:** https://think.design/blog/the-pareto-principle-in-ux/
- **Date:** December 2024

<a id="research-55"></a>
**[Research:55]** Progressive Disclosure Reduces Cognitive Load
- **Key finding:** 30-40% reduction in cognitive load during onboarding
- **Benefits:** Breaks complex processes into manageable steps, eliminates abandonment friction
- **Source:** https://www.interaction-design.org/literature/topics/progressive-disclosure
- **Source:** https://lollypop.design/blog/2025/may/progressive-disclosure/
- **Date:** May 2025

<a id="research-56"></a>
**[Research:56]** Progressive Disclosure Strategy
- **Key finding:** Reduces decision fatigue by revealing information in stages
- **Common implementations:** Collapsible menus, tooltips, hover actions, toggles
- **Source:** https://blog.logrocket.com/ux-design/progressive-disclosure-ux-types-use-cases/
- **Source:** https://octet.design/journal/progressive-disclosure/
- **Date:** 2024-2025

<a id="research-57"></a>
**[Research:57]** Cognitive Load Reduction Impact
- **Airbnb:** 25% fewer interactions with smart defaults, higher conversion
- **Figma:** 24% reduction in cognitive load with minimal layouts
- **Adobe (2024):** 30% increase in engagement with decluttered designs
- **Source:** https://developerux.com/2025/04/18/ultimate-guide-to-cognitive-load-reduction-in-ux-design/
- **Date:** April 2025

<a id="research-58"></a>
**[Research:58]** Android Settings Design Guidelines
- **Key finding:** Limit settings to 10-15 items per screen
- **Best practices:** Place frequently used at top, users should glance and understand all settings
- **Source:** https://source.android.com/docs/core/settings/settings-guidelines
- **Source:** https://www.setproduct.com/blog/settings-ui-design
- **Date:** 2024-2025

<a id="research-59"></a>
**[Research:59]** Pareto Principle Application to Interface Design
- **Feature prioritization:** Identify 20% of features that meet 80% of users' needs
- **MVP development:** Minimum viable products are Pareto Principle in action
- **Source:** https://lawsofux.com/pareto-principle/
- **Source:** https://www.cursorup.com/blog/the-pareto-principle
- **Date:** 2024-2025

<a id="research-60"></a>
**[Research:60]** Progressive Disclosure Techniques
- **Core insight:** Defer advanced features to secondary UI, keep essential content in primary UI
- **When to use:** Novice users, complex tasks, limited screen space, high cognitive load
- **Design methods:** Card sorting and task analysis to define essential vs. advanced content
- **Source:** https://www.nngroup.com/articles/progressive-disclosure/
- **Source:** https://www.ux-bulletin.com/progressive-disclosure-in-ux/
- **Date:** 2024-2025

<a id="research-61"></a>
**[Research:61]** Complexity Organization Best Practices
- **Core insight:** Great UX isn't hiding features—it's organizing them so users can find, understand, use without frustration
- **Visual hierarchy:** Prioritize important information, align with user needs, use shared visual traits
- **Source:** https://medium.com/@rounakbajoriastar/from-chaos-to-clarity-organizing-complex-interfaces-with-ux-best-practices-daec1a8328ab
- **Source:** https://devpulse.com/insights/ux-ui-design-best-practices-2025-enterprise-applications/
- **Date:** May 2025

<a id="research-62"></a>
**[Research:62]** Contextual Help and Onboarding (Nielsen Norman Group February 2024)
- **Pull revelations:** Help triggered when user would benefit at that moment
- **Progressive delivery:** Introduce actions/features gradually as they become relevant to avoid overload
- **AI-enhanced personalization:** Tailor onboarding to user goals and behavior
- **Source:** https://www.nngroup.com/articles/onboarding-tutorials/
- **Source:** https://www.uxdesigninstitute.com/blog/ux-onboarding-best-practices-guide/
- **Date:** February 2024

<a id="research-63"></a>
**[Research:63]** Tooltip Design and Contextual Guidance
- **Design principle:** Tooltips provide subtle, contextual guidance; pop-ups/modals are disruptive
- **Best practices:** Concise, context-sensitive pop-ups that give information without interrupting flow
- **Source:** https://www.chameleon.io/blog/why-tooltips-are-terrible-and-why-you-should-use-them
- **Source:** https://www.appcues.com/blog/tooltips
- **Date:** 2024-2025

<a id="research-64"></a>
**[Research:64]** 2024-2025 UX Trends for Power Users
- **"Choose your own UX adventure"** settings for power users
- **Smart defaults** with behavior-based interfaces
- **Adaptive interfaces:** Dark mode at night, simplified UI when fatigued
- **Source:** https://www.aufaitux.com/blog/power-bi-trends-enterprise-analytics-dashboard-ux/
- **Source:** https://trends.uxdesign.cc
- **Date:** 2025

<a id="research-65"></a>
**[Research:65]** Cognitive Load Reduction Techniques
- **Progressive disclosure:** Accordions, tooltips, step-by-step flows keep interface clean
- **Simplification:** Consistent patterns, clear layouts, minimal distractions, logical grouping
- **Mobile-specific:** Bottom navigation, gesture-based controls streamline journeys
- **Source:** https://www.ijraset.com/best-journal/reducing-cognitive-load-in-ui-design
- **Source:** https://hapy.design/journal/ways-to-reduce-cognitive-load-for-a-better-ui/
- **Date:** 2024-2025

### Nostr-Specific Data

<a id="data-31"></a>
**[Data:31]** Cross-Client Relay List Confusion
- Users setting relay preferences in Nostrudel find other clients (Coracle, Nostter) pulling incorrectly
- Manual relay additions multiply unexpectedly
- "Imperfect, incomplete, and/or partially implemented NIPs' unintended consequences"
- **Source:** https://github.com/nostr-protocol/nips/discussions/1134
- **Date:** 2024-2025

<a id="data-32"></a>
**[Data:32]** NIP-65 Relay List Metadata
- Uses kind:10002 events to advertise user's write relays (OUTBOX) and read relays (INBOX)
- Clients should guide users to keep lists small (2-4 relays)
- **Source:** https://nips.nostr.com/65
- **Source:** https://nostrify.dev/relay/outbox
- **Date:** 2024-2025

<a id="data-33"></a>
**[Data:33]** NIP-46 Signer App UX Challenges
- Specification "unclear and constantly changing"
- Incompatibilities between apps and signers
- No signer apps in traditional app stores (requires Obtanium or zap.store)
- Clients don't handle latency well
- "While NIP-46 is best practice, it doesn't currently work very well at all"
- **Source:** https://nostr.com/naddr1qqxnzdenxyenvdesxvmrvwp4qy28wumn8ghj7ctvvahjuat50phjummwv5hsygyhcu9ygdn2v56uz3dnx0uh865xmlwz675emfsccsxxguz6mx8rygpsgqqqw4rsvrkrdw
- **Date:** 2024

<a id="data-34"></a>
**[Data:34]** Available Nostr Signer Apps
- **Amber (Android):** Offline signing, multiple accounts, granular permissions
- **Nostr Signer (Alby):** Remote signing via push notifications
- **Source:** https://blog.getalby.com/nostr-signer/
- **Source:** https://maxgravitt.com/articles/nostr-connect/
- **Date:** 2024-2025

---

**See [References & Bibliography](/docs/resources/references) for full citation details.**

---

{{< cards >}}
  {{< card link="06-cross-client-consistency" title="Next: Pattern 6" subtitle="Cross-Client Consistency" icon="arrow-right" >}}
  {{< card link="../" title="All Patterns" subtitle="Back to patterns overview" icon="collection" >}}
{{< /cards >}}
