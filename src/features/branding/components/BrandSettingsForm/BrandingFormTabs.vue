<template>
  <!-- Extract design/content/advanced tabs from AccountDomainBrand -->
</template>

<script setup lang="ts">
import { BrandSettings } from '@/schemas/models/domain/brand';
import { ref } from 'vue';

const props = defineProps<{
  settings: BrandSettings;
}>();

const emit = defineEmits<{
  (e: 'update', settings: Partial<BrandSettings>): void;
}>();
</script>
