# Branding Feature

This directory contains all branding-related functionality, organized by concern. The feature handles domain branding settings, including colors, fonts, and homepage access controls.

## Directory Structure

```
src/features/branding/
├── api/
│   └── brandingService.ts      # API calls for branding
├── components/
│   ├── BrandPreview/          # Preview components
│   ├── BrandSettingsForm/     # Form components
│   └── ColorPicker/           # Color selection component
├── composables/
│   └── useBranding.ts        # Branding logic and state management
├── schemas/
│   └── brand.ts              # Zod schemas and types
├── stores/
│   └── brandingStore.ts      # State management
└── index.ts                  # Public API exports
```

## Usage

Import branding functionality through the feature's public API:

```typescript
import {
  useBranding,
  useBrandingStore,
  brandingService,
  type BrandSettings
} from '@/features/branding'
```

### Composable Usage

The `useBranding` composable provides reactive access to branding settings and common utilities:

```typescript
const {
  brandingSettings,
  isLoading,
  updateSettings,
  toggleHomepageAccess,
  cornerStyleClasses,
  buttonStyles
} = useBranding(domainName)

// Access current settings
console.log(brandingSettings.value?.primary_color)

// Update settings
await updateSettings({
  primary_color: '#007bff',
  font_family: 'sans-serif'
})

// Toggle homepage access
await toggleHomepageAccess(currentStatus)

// Use computed style classes
<div :class="cornerStyleClasses">
  Rounded corners based on settings
</div>

// Use computed styles
<button :style="buttonStyles">
  Styled button
</button>
```

### Store Usage

Direct store access is available through `useBrandingStore`:

```typescript
const brandingStore = useBrandingStore()

// Get settings for a domain
const settings = brandingStore.getBrandingForDomain(domainName)

// Fetch fresh settings
await brandingStore.fetchBrandSettings(domainName)
```

### API Service

Direct API access is available through `brandingService`:

```typescript
const response = await brandingService.getBrandSettings(domainName)
```

## Types and Schemas

The feature uses Zod schemas for runtime validation and TypeScript types:

```typescript
import type { BrandSettings } from '@/features/branding'

const settings: BrandSettings = {
  primary_color: '#007bff',
  font_family: 'sans-serif',
  corner_style: 'rounded'
}
```

## Migration Note

This feature was extracted from the domains module as part of the move to a feature-based architecture. All branding-related functionality that was previously scattered across different parts of the application is now centralized here.

### Migrating from Previous Usage

If you were previously using the domains store for branding functionality:

```typescript
// Old way
import { useDomainsStore } from '@/stores/domainsStore'
const domainsStore = useDomainsStore()
await domainsStore.updateDomainBrand(domain, brandSettings)

// New way
import { useBranding } from '@/features/branding'
const { updateSettings } = useBranding(domain)
await updateSettings(brandSettings)
```

### Components Migration

Update components that use branding functionality:

```typescript
// Old way - using domains store directly
import { useDomainsStore } from '@/stores/domainsStore'
const domainsStore = useDomainsStore()

// New way - using branding feature
import { useBranding } from '@/features/branding'
const { brandingSettings, cornerStyleClasses, buttonStyles } = useBranding(domain)

// Replace direct store access with composable utilities
<div :class="cornerStyleClasses">
  <button :style="buttonStyles">
    {{ brandingSettings.value?.button_text || 'Submit' }}
  </button>
</div>
