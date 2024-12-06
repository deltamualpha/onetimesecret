// src/features/branding/composables/useBranding.ts

import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';

import type { BrandSettings } from '../schemas/brand';
import { useBrandingStore } from '../stores/brandingStore';

/**
 * Composable for accessing and managing branding settings
 * - Provides reactive access to branding settings
 * - Handles loading states and error cases
 * - Returns computed properties for common branding use cases
 */
export function useBranding(domain: string) {
  const brandingStore = useBrandingStore();
  const { isLoading } = storeToRefs(brandingStore);

  // Fetch branding settings on mount
  onMounted(async () => {
    if (!brandingStore.getBrandingForDomain(domain)) {
      await brandingStore.fetchBrandSettings(domain);
    }
  });

  const brandingSettings = computed<BrandSettings | undefined>(() =>
    brandingStore.getBrandingForDomain(domain)
  );

  const updateSettings = async (settings: Partial<BrandSettings>) => {
    try {
      return await brandingStore.updateBrandSettings(domain, settings);
    } catch (error) {
      console.error('Failed to update branding settings:', error);
      throw error;
    }
  };

  const toggleHomepageAccess = async (currentStatus: boolean) => {
    try {
      return await brandingStore.toggleHomepageAccess(domain, currentStatus);
    } catch (error) {
      console.error('Failed to toggle homepage access:', error);
      throw error;
    }
  };

  // Computed properties for common branding use cases
  const cornerStyleClasses = computed(() => ({
    'rounded-lg': brandingSettings.value?.corner_style === 'rounded',
    'rounded-full': brandingSettings.value?.corner_style === 'pill',
    'rounded-none': brandingSettings.value?.corner_style === 'square'
  }));

  const buttonStyles = computed(() => ({
    backgroundColor: brandingSettings.value?.primary_color,
    color: brandingSettings.value?.button_text_light ? '#ffffff' : '#000000',
    fontFamily: brandingSettings.value?.font_family
  }));

  return {
    brandingSettings,
    isLoading,
    updateSettings,
    toggleHomepageAccess,
    cornerStyleClasses,
    buttonStyles
  };
}
