<template>
<div>
    <footer class="is-pc-footer"
      style = "width:100%;
      height:300px;
      background-color:#1E88E5;"
    >
      <div class="flex logo-style">
        <div>
        <g-image src="../../../img/logo.png"></g-image>
        </div>
      </div>
      <div style = "width:100%; height:100px; text-align:center; font-size:16px; color:white; font-weight:300; line-height:50px; padding-top:20px;">
        <div>Copyright © 2017 uEngine &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; All Rights Reserved &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Designed By Sppark &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Address 서울 서초구 신반포로45길 18 주일빌딩 501호</div>
        <div>Email : help@uengine.org</div>
      </div>
    </footer>
    <!-- 모바일 footer -->
    <footer 
      style = "width:100%;
      height:300px;
      background-color:#1E88E5;"
      class="is-mobile-footer"
    >
      <div class="flex logo-style">
        <div>
        <g-image style="display:block;" src="../../../img/logo.png"></g-image>
        </div>
      </div>
      <div style = "width:100%; height:100px; text-align:center; font-size:16px; color:white; font-weight:300; line-height:30px; padding-top:20px;">
        <div>Copyright © 2017 uEngine <br> All Rights Reserved <br> Designed By Sppark <br> Address 서울 서초구 신반포로45길 18 주일빌딩 501호</div>
        <div>Email : help@uengine.org</div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
<style scoped>
.logo-style{
  width:20%; margin-left:40%;  padding-top:60px;
}
.is-mobile-footer{display:none;}
@media only screen and (max-width:1279px) {
    .logo-style{
      width:40%; margin-left:30%;  padding-top:30px;
    }
    .is-mobile-footer{display:block;}
    .is-pc-footer{display:none;}
  }
</style>
