<template>
  <header class="bg-shark-500 text-white body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-row items-center">
      <g-link
        to="/"
        style="width:120px;"
        class="flex title-font font-medium items-center">
        <g-image src="../../../img/logo_color.png"></g-image>
      </g-link>

      <nav style="font-weight:300;" class="header-links ml-auto flex flex-wrap items-center text-xl justify-center">
        <g-link
          to="/"
          class="mr-5 hidden md:block"
          exact>
          Home
        </g-link>
        <div class="float-left">
          <g-link
            to="/articles"
            class="mr-5 hidden md:block"
            exact
          >Products
            <svg xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              class="svg-right feather feather-align-justify"
            >
              <line x1="21" y1="10" x2="3" y2="10"/>
              <line x1="21" y1="6" x2="3" y2="6"/>
              <line x1="21" y1="14" x2="3" y2="14"/>
              <line x1="21" y1="18" x2="3" y2="18"/>
            </svg>
          </g-link>
        </div>
        <g-link
          to="/resources"
          class="mr-5 hidden md:block"
          exact
        >Case Studies
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="svg-right feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="3" y2="18"/>
          </svg>
        </g-link>
        <g-link
          to="/news"
          class="mr-5 hidden md:block"
          exact
        >Event
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="svg-right feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="3" y2="18"/>
          </svg>
        </g-link>
        <g-link
          to="/pages/contribute"
          class="mr-5 hidden md:block"
          exact
        >Service
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="svg-right feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="3" y2="18"/>
          </svg>
        </g-link>

        <g-link
          to="http://www.msaschool.io/operation/introduction/"
          class="mr-5 hidden md:block"
          exact>
          MSA School
        </g-link>

        <a
          href="#"
          type="button"
          aria-label="Open Navigation"
          title="Open Navigation"
          class="block md:hidden mr-5 focus:outline-none"
          @click.prevent="showResponsiveMenu()">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="menu w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>

        <g-link to="/search">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="search w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    showResponsiveMenu () {
      this.$emit('openResponsiveMenu');
    }
  }
};
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
  .svg-right {
    float:right;
    margin-top:3px;
  }
</style>
