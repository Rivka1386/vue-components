<template>
  <div class="usj-page">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import './vars';
  @import '../../style/elevation.scss';

  body,
  html {
    height: 100%;
    margin: 0;
    width: 100%;
  }

  .usj-page {
    height: 100%;

    > header {
      position: fixed;
      top: 0;
      width: 100%;
    }
  }

  .usj-page-content {
    margin: $header-height + $menu-height 0 0;
    position: fixed;
    top: 0;
    width: 100%;
    height: calc(100% - 108px);

    &--scroll {
      overflow: scroll;
    }
  }

  .usj-page-header {
    box-shadow: $header-shadow;
    height: $header-height;
    padding: 0 20px;
    position: relative;
    z-index: 1;

    > * {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    &__title {
      float: left;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .usj-page-control {
    float: right;

    > * {
      display: inline-block;
      margin-left: 8px;
    }
  }

  .usj-page-menu {
    background-color: $menu-bgcolor;
    height: $menu-height;

    * {
      color: $menu-color;
    }
  }

  .usj-page {
    &-side-nav {
      @include elevate(1);

      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;

      width: $side-width;
    }

    &-side-content {
      top: 0;
      //top: $menu-height + $header-height;
      left: $side-width;
      right: 0;
      bottom: 0;
      position: absolute;
      overflow: auto;
    }
  }
</style>
