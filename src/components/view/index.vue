<template>

  <div class="introduce">
    <div class="introduce-inner">
      <div class="introduce-text">
        <hr class="introduce-hr">
        <h2 class="introduce-h2">java,scala,goLang:</h2>
        <p class="introduce-p">They are three programming languages those i use most,and scala is my favorite</p>
      </div>
      <div class="introduce-img">
        <img class="introduce-img-first" src="../../../static/img/ipad.png" alt=""/>
      </div>
    </div>

    <hr class="introduce-hr-introduce">
    <div class="introduce-inner">
      <div class="introduce-img">
        <img class="introduce-img-second" src="../../../static/img/dog.png" alt=""/>
      </div>
      <div class="introduce-text">
        <hr class="introduce-hr"/>
        <h2 class="introduce-h2">passion:</h2>
        <p class="introduce-p">The reason why i become a programmer just because i like it,rather than for living</p>
      </div>
    </div>

    <hr class="introduce-hr-introduce">
    <div class="introduce-inner">
      <div class="introduce-text-3">
        <hr class="introduce-hr"/>
        <h2 class="introduce-h2">new:</h2>
        <p class="introduce-p">I never refuse new things. for example,I use gradle instead of maven or ant,because I think gradle is better</p>
      </div>
      <div class="introduce-img">
        <img class="introduce-img-first" src="../../../static/img/phones.png" alt=""/>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>


  .introduce{
    margin-top: 50px;
  }

  .introduce-inner{
    margin-left: 150px;
    display:inline-block
  }

  .introduce-hr{
    margin-right: 200px;
    height: 3px;
    background-color: white;
  }

  .introduce-h2{
    margin-top: 50px;
    font-size: 30px;
    color: snow;
  }

  .introduce-p{
    margin-top: 50px;
    color: snow;
  }

  .introduce-text{
    float: left;
    margin-top: 120px;
    margin-left: 200px;
  }

  .introduce-text-3{
    float: left;
    margin-top: 120px;
    margin-left: 150px;
  }

  .introduce-img-first{
    margin-left: 100px;
    margin-top: 30px;
  }

  .introduce-img-second{
    margin-left: 150px;
    margin-top: 30px;
    float: left;
  }

  .introduce-img{
    float: left;
  }
  .introduce-hr-introduce{

  }
</style>
