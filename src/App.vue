
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}

.local-color-primary {
  color: @PrimaryColor !important;
}
.local-color-success {
  color: @SuccessColor !important;
}
.local-color-warn {
  color: @WarnColor !important;
}
.local-color-danger {
  color: @DangerColor !important;
}
.local-color-disabled {
  color: @DisabledColor !important;
}

.local-text-color {
  color: @TextColor !important;
}
.local-text-color-head {
  color: @TextHeadColor !important;
}
.local-text-color-secondary {
  color: @TextSecondaryColor !important;
}

.local-border-color {
  color: @BorderColor !important;
}

.local-disabled {
  cursor: not-allowed;
}

</style>

<template>
  <router-view>
    <p class="local-color-primary">111</p>
  </router-view>
</template>

