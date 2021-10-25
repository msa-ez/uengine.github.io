<template>
  <section>
    <div class="container px-5 py-12 mx-auto">
      <div class="text-center pb-12 ">
        <h2 class="text-3xl">
          제품 서비스 영역
        </h2>
        <p
          class="text-1xl">
          유엔진솔루션즈는 2003년 이래 업무 프로세스 관리 (Business Process Management),
          기업용 SNS, PaaS 를 포함한 클라우드 플랫폼,
          도메인 기반 개발 방법을 지향하는 개발 프레임워크 등을 개발하고 오픈소스 프로젝트로 제공하는 기술 집약적 기업입니다.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <RecordCard
          v-for="edge in $static.records.edges"
          :key="edge.node.id"
          :record="edge.node" />
      </div>
    </div>
  </section>
</template>

<static-query>
  query {
    records: allArticle(limit:6, sortBy:"createdAt") {
      edges {
        node {
          title
          path
          excerpt
          createdAt(format:"Do MMMM YYYY")
          timeToRead
        }
      }
    }
  }
</static-query>

<script>
import RecordCard from '~/components/RecordCard'

export default {
  components: {
    RecordCard
  }
};
</script>
