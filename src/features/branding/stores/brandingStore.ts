// src/features/branding/stores/brandingStore.ts

import { defineStore } from 'pinia';

import { brandingService } from '../api/brandingService';
import type { BrandSettings } from '../schemas/brand';

type BrandingState = {
  brandingSettings: Record<string, BrandSettings>;
  isLoading: boolean;
};

/**
 * Store for managing branding state and operations
 * - Handles branding-specific state management
 * - Delegates API calls to brandingService
 * - Provides optimistic updates for better UX
 */
export const useBrandingStore = defineStore('branding', {
  state: (): BrandingState => ({
    brandingSettings: {},
    isLoading: false
  }),

  getters: {
    getBrandingForDomain: (state) => (domain: string) => {
      return state.brandingSettings[domain];
    }
  },

  actions: {
    /**
     * Fetch brand settings for a domain
     */
    async fetchBrandSettings(domain: string) {
      this.isLoading = true;
      try {
        const response = await brandingService.getBrandSettings(domain);
        this.brandingSettings[domain] = response.record;
        return response.record;
      } catch (error) {
        console.error('Failed to get brand settings:', error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    /**
     * Update brand settings for a domain
     */
    async updateBrandSettings(domain: string, settings: Partial<BrandSettings>) {
      this.isLoading = true;
      try {
        const response = await brandingService.updateBrandSettings(domain, settings);
        this.brandingSettings[domain] = response.record;
        return response.record;
      } catch (error) {
        console.error('Failed to update brand settings:', error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    /**
     * Toggle public homepage access with optimistic update
     */
    async toggleHomepageAccess(domain: string, currentStatus: boolean) {
      const newStatus = !currentStatus;
      const previousSettings = this.brandingSettings[domain];

      // Optimistic update
      if (previousSettings) {
        this.brandingSettings[domain] = {
          ...previousSettings,
          allow_public_homepage: newStatus
        };
      }

      try {
        const response = await brandingService.toggleHomepageAccess(domain, newStatus);
        this.brandingSettings[domain] = response.record;
        return response.record;
      } catch (error) {
        // Revert on error
        if (previousSettings) {
          this.brandingSettings[domain] = previousSettings;
        }
        console.error('Failed to toggle homepage access:', error);
        throw error;
      }
    }
  }
});
