// src/features/branding/api/brandingService.ts

import type { ApiRecordResponse } from '@/types/api/responses';
import { apiRecordResponseSchema } from '@/types/api/responses';
import { createApi } from '@/utils/api';
import { transformResponse } from '@/utils/transforms';

import type { BrandSettings } from '../schemas/brand';
import { brandSettingsInputSchema } from '../schemas/brand';

const api = createApi();

/**
 * Service for handling branding-related API calls
 * - Centralizes all branding API endpoints
 * - Handles data transformation at API boundaries
 * - Returns validated data using shared schemas
 */
export const brandingService = {
  /**
   * Get brand settings for a domain
   */
  async getBrandSettings(domain: string) {
    const response = await api.get<ApiRecordResponse<BrandSettings>>(
      `/api/v2/account/domains/${domain}/brand`
    );
    return transformResponse(
      apiRecordResponseSchema(brandSettingsInputSchema),
      response.data
    );
  },

  /**
   * Update brand settings for a domain
   */
  async updateBrandSettings(domain: string, settings: Partial<BrandSettings>) {
    const response = await api.put<ApiRecordResponse<BrandSettings>>(
      `/api/v2/account/domains/${domain}/brand`,
      { brand: settings }
    );
    return transformResponse(
      apiRecordResponseSchema(brandSettingsInputSchema),
      response.data
    );
  },

  /**
   * Toggle public homepage access for a domain
   */
  async toggleHomepageAccess(domain: string, newStatus: boolean) {
    const response = await api.put<ApiRecordResponse<BrandSettings>>(
      `/api/v2/account/domains/${domain}/brand`,
      {
        brand: { allow_public_homepage: newStatus }
      }
    );
    return transformResponse(
      apiRecordResponseSchema(brandSettingsInputSchema),
      response.data
    );
  }
};
