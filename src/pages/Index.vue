<template>
  <Layout>
    <PageHeader style="height:600px;">
      <template v-slot:image>
        <g-image style="-webkit-filter: blur(1px); -moz-filter: blur(1px); -o-filter: blur(1px); -ms-filter: blur(1px); filter: blur(1px);" src="~/assets/images/main-image.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          유엔진 오픈소스
        </p>
        <p class="text-lg md:text-4xl">
          <br/>Cloud Platform  |  Enterprise SNS  |  SaaS Billing  |  UI/UX Platform
        </p>
        <p class="text-lg md:text-2xl">
          <br/>the Universal Engines for Digital Economy Era
        </p>
        <br/>
        <div style="width:50%; margin-left:25%;">
          <!-- <p class="text-lg md:text-2xl text-left">
            사용자 인터뷰
          </p> -->
          <iframe style="width:100%; height:300px;"
            src="https://www.youtube.com/embed/ioOdnl_aIKE"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          >
          </iframe>
        </div>
      </template>
    </PageHeader>
    <div class="container text-center mx-auto">
      <SectionLatestArticles />
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SectionLatestArticles from '~/components/sections/LatestArticles'
import SectionLatestNews from '~/components/sections/LatestNews'
import SectionContribute from '~/components/sections/Contribute'
import SectionThinkDifferent from '~/components/sections/ThinkDifferent'
import SectionOpenSource from '~/components/sections/OpenSource'

export default {
  metaInfo: {
    title: 'uEngine.io'
  },
  components: {
    PageHeader,
    SectionLatestArticles,
    SectionLatestNews,
    SectionContribute,
    SectionThinkDifferent,
    SectionOpenSource
  }
};
</script>
