<template>
  <!-- Extract preview section from AccountDomainBrand -->
</template>

<script setup lang="ts">
import { BrandSettings } from '@/schemas/models/domain/brand';
import BrowserPreviewFrame from './BrowserPreviewFrame.vue';
import BrowserTypeToggle from './BrowserTypeToggle.vue';
import SecretPreview from './SecretPreview.vue';

defineProps<{
  settings: BrandSettings;
}>();
</script>
