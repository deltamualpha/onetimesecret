Major refactor: Reorganizing into a feature-based structure.


<example>
src/features/branding/
├── api/
│   └── brandingService.ts      # API calls for branding
├── components/
│   ├── BrandSettingsForm/      # Form components
│   └── BrandPreview/           # Preview components
├── stores/
│   └── brandingStore.ts        # Centralized state management
├── composables/
│   └── useBrandingManager.ts   # Business logic
├── types/
│   └── branding.ts             # Type definitions
└── views/
    └── BrandingManager.vue     # Main view component
</example>


Current Pain Points:
* Complex state management spread across multiple files (AccountDomainBrand.vue, domainsStore.ts, useDomainBranding.ts)
* Mixed concerns in components (API calls, state management, UI logic)
* Scattered branding logic across different parts of the application


<tree>
  src
 ├──  api
 │   └──  secrets.ts
 ├── ﵂ App.vue
 ├──  assets
 │   ├──  fonts
 │   │   └──  zs
 │   │       ├──  ZillaSlab-Bold.woff
 │   │       ├──  ZillaSlab-Bold.woff2
 │   │       ├──  ZillaSlab-BoldItalic.woff
 │   │       ├──  ZillaSlab-BoldItalic.woff2
 │   │       ├──  ZillaSlab-Italic.woff
 │   │       ├──  ZillaSlab-Italic.woff2
 │   │       ├──  ZillaSlab-Light.woff
 │   │       ├──  ZillaSlab-Light.woff2
 │   │       ├──  ZillaSlab-LightItalic.woff
 │   │       ├──  ZillaSlab-LightItalic.woff2
 │   │       ├──  ZillaSlab-Medium.woff
 │   │       ├──  ZillaSlab-Medium.woff2
 │   │       ├──  ZillaSlab-MediumItalic.woff
 │   │       ├──  ZillaSlab-MediumItalic.woff2
 │   │       ├──  ZillaSlab-Regular.woff
 │   │       ├──  ZillaSlab-Regular.woff2
 │   │       ├──  ZillaSlab-SemiBold.woff
 │   │       ├──  ZillaSlab-SemiBold.woff2
 │   │       ├──  ZillaSlab-SemiBoldItalic.woff
 │   │       ├──  ZillaSlab-SemiBoldItalic.woff2
 │   │       ├──  ZillaSlabHighlight-Bold.woff
 │   │       ├──  ZillaSlabHighlight-Bold.woff2
 │   │       ├──  ZillaSlabHighlight-Regular.woff
 │   │       └──  ZillaSlabHighlight-Regular.woff2
 │   ├──  img
 │   │   ├──  delano-g.png
 │   │   ├──  favicon-dot.svg
 │   │   ├──  new.png
 │   │   ├──  onetime-logo-v3-md.png
 │   │   ├──  onetime-logo-v3-sm.png
 │   │   ├──  onetime-logo-v3-xl.png
 │   │   ├──  onetime-logo-v3-xl.svg
 │   │   ├──  onetime-logo-v3-xs.png
 │   │   ├──  onetime-logo-v4-xs.png
 │   │   └──  soon.jpg
 │   ├──  style.css
 │   └──  ui
 │       └──  settings
 │           └──  WorldMap.svg
 ├──  build
 │   └──  plugins
 │       └──  addTrailingNewline.ts
 ├──  components
 │   ├──  account
 │   │   ├── ﵂ AccountBillingSection.vue
 │   │   ├── ﵂ AccountChangePasswordForm.vue
 │   │   ├── ﵂ AccountDeleteButtonWithModalForm.vue
 │   │   ├── ﵂ APIKeyCard.vue
 │   │   ├── ﵂ APIKeyForm.vue
 │   │   ├── ﵂ BrandSettingsBar.vue
 │   │   ├── ﵂ BrowserPreviewFrame.vue
 │   │   ├── ﵂ BrowserTypeToggle.vue
 │   │   ├── ﵂ DomainBrandView.vue
 │   │   ├── ﵂ DomainHeader.vue
 │   │   ├── ﵂ InstructionsModal.vue
 │   │   └── ﵂ SecretPreview.vue
 │   ├── ﵂ ActivityFeed.vue
 │   ├── ﵂ AltchaChallenge.vue
 │   ├──  auth
 │   │   ├── ﵂ AlternateSignUpMethods.vue
 │   │   ├── ﵂ AuthView.vue
 │   │   ├── ﵂ SignInForm.vue
 │   │   └── ﵂ SignUpForm.vue
 │   ├── ﵂ BasicFormAlerts.vue
 │   ├── ﵂ ButtonGroup.vue
 │   ├──  colonel
 │   │   └── ﵂ FeedbackSection.vue
 │   ├──  common
 │   │   ├── ﵂ ColorPicker.vue
 │   │   ├── ﵂ CycleButton.vue
 │   │   ├── ﵂ CycleButtonText.vue
 │   │   └── ﵂ LoadingOverlay.vue
 │   ├── ﵂ ConfirmDialog.vue
 │   ├── ﵂ CopyButton.vue
 │   ├──  ctas
 │   │   ├── ﵂ FancyIcon.vue
 │   │   ├── ﵂ FancyIconLinkColourChange.vue
 │   │   ├── ﵂ FancyIconLinkSpinning.vue
 │   │   ├── ﵂ HomepagePlansCTA.vue
 │   │   ├── ﵂ PlansElevateCta.vue
 │   │   ├── ﵂ PlansHomepageCtaInitial.vue
 │   │   ├── ﵂ PlansHomepageCtaRed.vue
 │   │   └── ﵂ SuperFancyIconLink.vue
 │   ├── ﵂ CustomDomainDropdown.vue
 │   ├── ﵂ CustomDomainPreview.vue
 │   ├── ﵂ CustomDomainSelector.vue
 │   ├──  dashboard
 │   │   └── ﵂ DashboardTabNav.vue
 │   ├── ﵂ DetailField.vue
 │   ├── ﵂ DomainForm.vue
 │   ├── ﵂ DomainInput.vue
 │   ├── ﵂ DomainsTable.vue
 │   ├── ﵂ DomainVerificationInfo.vue
 │   ├── ﵂ DropdownToggle.vue
 │   ├── ﵂ EmailObfuscator.vue
 │   ├── ﵂ EmptyState.vue
 │   ├── ﵂ FeedbackForm.vue
 │   ├── ﵂ FeedbackModalForm.vue
 │   ├── ﵂ FeedbackToggle.vue
 │   ├── ﵂ GithubCorner.vue
 │   ├── ﵂ GlobalBroadcast.vue
 │   ├── ﵂ HomepageAccessToggle.vue
 │   ├── ﵂ HomepageTaglines.vue
 │   ├──  icons
 │   │   └── ﵂ Fa6SolidEarthEurope.vue
 │   ├── ﵂ InfoTooltip.vue
 │   ├── ﵂ JurisdictionFooterNotice.vue
 │   ├── ﵂ LanguageToggle.vue
 │   ├──  layout
 │   │   ├── ﵂ DefaultFooter.pills.vue
 │   │   ├── ﵂ DefaultFooter.vue
 │   │   ├── ﵂ DefaultHeader.vue
 │   │   ├── ﵂ FooterLinkLists.vue
 │   │   └── ﵂ HeaderUserNav.vue
 │   ├── ﵂ MinimalDropdownMenu.vue
 │   ├──  modals
 │   │   ├── ﵂ FeedbackModal.vue
 │   │   ├──  settings
 │   │   │   ├── ﵂ GeneralTab.vue
 │   │   │   ├── ﵂ JurisdictionInfo.vue
 │   │   │   ├── ﵂ JurisdictionList.vue
 │   │   │   └── ﵂ JurisdictionTab.vue
 │   │   ├── ﵂ SettingsModal.vue
 │   │   ├── ﵂ UpgradeIdentityModal.vue
 │   │   └── ﵂ UpgradeIdentityModalAlt.vue
 │   ├── ﵂ MoreInfoText.vue
 │   ├── ﵂ MovingGlobules.vue
 │   ├── ﵂ PasswordStrengthChecker.vue
 │   ├── ﵂ QuoteBlock.vue
 │   ├── ﵂ QuoteSection.vue
 │   ├──  secrets
 │   │   ├──  branded
 │   │   │   ├── ﵂ BaseSecretDisplay.vue
 │   │   │   ├── ﵂ SecretConfirmationForm.vue
 │   │   │   └── ﵂ SecretDisplayCase.vue
 │   │   ├──  canonical
 │   │   │   ├── ﵂ SecretConfirmationForm.vue
 │   │   │   └── ﵂ SecretDisplayCase.vue
 │   │   ├──  form
 │   │   │   ├── ﵂ ConcealButton.vue
 │   │   │   ├── ﵂ GenerateButton.vue
 │   │   │   ├── ﵂ InboundSecretForm.vue
 │   │   │   ├── ﵂ SecretContentInputArea.collapsed.vue
 │   │   │   ├── ﵂ SecretContentInputArea.gearicon.vue
 │   │   │   ├── ﵂ SecretContentInputArea.vue
 │   │   │   ├── ﵂ SecretForm.vue
 │   │   │   ├── ﵂ SecretFormDrawer.vue
 │   │   │   └── ﵂ SecretFormPrivacyOptions.vue
 │   │   ├──  metadata
 │   │   │   ├── ﵂ BurnButtonForm.vue
 │   │   │   ├── ﵂ MetadataDisplayCase.vue
 │   │   │   ├── ﵂ MetadataFAQ.vue
 │   │   │   └── ﵂ SecretLink.vue
 │   │   ├── ﵂ SecretMetadataTable.vue
 │   │   ├── ﵂ SecretMetadataTableItem.vue
 │   │   └── ﵂ SecretRecipientOnboardingContent.vue
 │   ├── ﵂ SimpleModal.vue
 │   ├── ﵂ StarsRating.vue
 │   ├── ﵂ StatusBar.vue
 │   ├── ﵂ ThemeToggle.vue
 │   └── ﵂ VerifyDomainDetails.vue
 ├──  composables
 │   ├──  useAsyncData.ts
 │   ├──  useClickOutside.ts
 │   ├──  useClipboard.ts
 │   ├──  useConfirmDialog.ts
 │   ├──  useDomainBranding.ts
 │   ├──  useDomainsManager.ts
 │   ├──  useErrorHandler.ts
 │   ├──  useExceptionReporting.ts
 │   ├──  useFetchData.ts
 │   ├──  useFormSubmission.ts
 │   ├──  useMetadataBurn.ts
 │   ├──  useToast.ts
 │   └──  useWindowProps.ts
 ├──  content
 │   └──  info
 │       ├──  privacy.md
 │       └──  terms.md
 ├──  features
 │   └──  branding
 │       ├──  api
 │       ├──  components
 │       │   ├──  BrandPreview
 │       │   ├──  ColorPicker
 │       │   └──  LogoManager
 │       ├──  composables
 │       ├──  stores
 │       ├──  types
 │       └──  views
 ├──  i18n.ts
 ├──  layouts
 │   ├── ﵂ BaseLayout.vue
 │   ├── ﵂ DefaultLayout.vue
 │   ├── ﵂ QuietLayout.vue
 │   └── ﵂ WideLayout.vue
 ├──  locales
 │   ├──  ar.json
 │   ├──  bg.json
 │   ├──  ca_ES.json
 │   ├──  cn.json
 │   ├──  cs.json
 │   ├──  da_DK.json
 │   ├──  de.json
 │   ├──  el_GR.json
 │   ├──  en.json
 │   ├──  es.json
 │   ├──  fr.json
 │   ├──  fr_FR.json
 │   ├──  he.json
 │   ├──  hu.json
 │   ├──  it_IT.json
 │   ├──  nl.json
 │   ├──  pl.json
 │   ├──  pt_BR.json
 │   ├──  pt_PT.json
 │   ├──  ru.json
 │   ├──  sl_SI.json
 │   ├──  sv_SE.json
 │   ├──  tr.json
 │   ├──  uk.json
 │   └──  vi.json
 ├──  main.ts
 ├──  router
 │   ├──  account.routes.ts
 │   ├──  auth.routes.ts
 │   ├──  dashboard.routes.ts
 │   ├──  guards.routes.ts
 │   ├──  index.ts
 │   ├──  product.routes.ts
 │   ├──  public.routes.ts
 │   ├──  recipient.routes.ts
 │   └──  resolvers
 │       ├──  metadataResolver.ts
 │       └──  secretResolver.ts
 ├──  schemas
 │   ├──  base.ts
 │   ├──  index.ts
 │   └──  models
 │       ├──  customer.ts
 │       ├──  domain
 │       │   ├──  brand.ts
 │       │   ├──  index.ts
 │       │   └──  vhost.ts
 │       ├──  domain.ts
 │       ├──  index.ts
 │       ├──  jurisdiction.ts
 │       ├──  metadata.ts
 │       ├──  public.ts
 │       ├──  secret.ts
 │       └──  secret.txt
 ├──  sources
 │   ├──  productTiers.ts
 │   ├──  testimonials.ts
 │   └──  translations.json
 ├──  stores
 │   ├──  authStore.ts
 │   ├──  brandingStore.ts
 │   ├──  csrfStore.ts
 │   ├──  customerStore.ts
 │   ├──  domainsStore.ts
 │   ├──  jurisdictionStore.ts
 │   ├──  languageStore.ts
 │   ├──  metadataStore.ts
 │   ├──  notifications.ts
 │   ├──  plugins
 │   │   └──  logoutPlugin.ts
 │   └──  secretsStore.ts
 ├──  types
 │   ├──  api
 │   │   ├──  index.ts
 │   │   ├──  requests.ts
 │   │   └──  responses.ts
 │   ├──  declarations
 │   │   ├──  index.d.ts
 │   │   ├──  locales.d.ts
 │   │   ├──  pinia.d.ts
 │   │   ├──  shims-md.d.ts
 │   │   ├──  vite-env.d.ts
 │   │   └──  window.d.ts
 │   ├──  index.ts
 │   ├──  onetime.d.txt
 │   └──  ui
 │       ├──  forms.ts
 │       ├──  index.ts
 │       └──  layouts.ts
 ├──  utils
 │   ├──  api.ts
 │   ├──  colorUtils.ts
 │   ├──  dates_and_times.ts
 │   ├──  errors.ts
 │   ├──  redirect.ts
 │   └──  transforms.ts
 └──  views
     ├── ﵂ About.vue
     ├──  account
     │   ├── ﵂ AccountDomainAdd.vue
     │   ├── ﵂ AccountDomainBrand.vue
     │   ├── ﵂ AccountDomains.vue
     │   ├── ﵂ AccountDomainVerify.vue
     │   └── ﵂ AccountIndex.vue
     ├──  auth
     │   ├── ﵂ PasswordReset.vue
     │   ├── ﵂ PasswordResetRequest.vue
     │   ├── ﵂ Signin.vue
     │   └── ﵂ Signup.vue
     ├──  colonel
     │   └── ﵂ ColonelIndex.vue
     ├──  dashboard
     │   ├── ﵂ DashboardIndex.vue
     │   └── ﵂ DashboardRecent.vue
     ├──  errors
     │   ├── ﵂ ErrorNotFound.vue
     │   └── ﵂ ErrorPage.vue
     ├── ﵂ Feedback.vue
     ├── ﵂ Homepage.vue
     ├──  info
     │   ├── ﵂ PrivacyDoc.vue
     │   ├── ﵂ SecurityDoc.vue
     │   └── ﵂ TermsDoc.vue
     ├── ﵂ NotFound.vue
     ├──  pricing
     │   ├── ﵂ Pricing.vue
     │   └── ﵂ PricingDual.vue
     ├──  secrets
     │   ├──  branded
     │   │   ├── ﵂ ShowSecret.vue
     │   │   └── ﵂ UnknownSecret.vue
     │   ├── ﵂ BurnSecret.vue
     │   ├──  canonical
     │   │   ├── ﵂ ShowSecret.vue
     │   │   └── ﵂ UnknownSecret.vue
     │   ├── ﵂ IncomingSupportSecret.vue
     │   ├──  ShowMetadata-sections.txt
     │   ├── ﵂ ShowMetadata.vue
     │   └── ﵂ ShowSecretContainer.vue
     └── ﵂ Translations.vue
</tree>


Help me plan the migration steps, in the form of git mv commands, followed by movedment of existing code which requires manual intervention, and whatever else needs to be done. Let's do it properly, not cutting corners. If anything is unclear, ASK FOR HELP. Be meticulous and do not lose track of details.
