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
        <!-- 직접 생성 카드 업무 프로세스 관리 -->
        <div
          class="p-4 w-full"
          :class="cardSize"
        >
          <div
            class="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative hover:bg-shark-50 hover:bg-opacity-60">
            <g-link :to="'https://bpm-intro.uengine.io/'">
              <div class="p-6">
                <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                  업무 프로세스 관리
                </h1>
                <div class="leading-relaxed mb-12 text-gray-800 text-left">
                  uEngine BPMS 는 OMG 국제표준인 BPMN 2.0 을 지원하여 
                  기업의 프로세스를 관리하고 지속적인 개선을 수행할 수 있도록 하는 프로세스 혁신 기능과 소셜 네트워크 기반의 포털을 통하여 창의적인 프로세스 협업을 가능하게하는 두가지 통제와 혁신의 관점의 UI/UX 를 통합하는 UI를 제공합니다.
                </div>
              </div>
            </g-link>
          </div>
        </div>
        <!-- md 매핑 자동 생성 -->
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
  props: {
    cardSize: {
      type: String,
      default: 'sm:w-1/2 lg:w-1/3'
    },
  },
  components: {
    RecordCard
  }
};
</script>
