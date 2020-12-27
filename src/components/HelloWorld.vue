<template>
  <div class="contain">
    <!--  导航栏-->
    <el-row class="top-nav">
      <el-col :span="12">
        <div><span class="font-home">Home</span></div>
      </el-col>
      <el-col :span="12">
        <div class="div-list"><span>Archives</span></div>
        <div class="div-list"><span>Tags</span></div>
        <div class="div-list"><span>Projects</span></div>
        <div class="div-list"><span>About</span></div>
        <div class="div-list"><span>Admin</span></div>
        <div class="div-list"><span>themes</span></div>
      </el-col>
    </el-row>

    <div class="content">
      <div class="content-main">
        <div class="content-main-message">
          <h1>admin</h1>
          <h3>my blog about programming</h3>
          <hr class="content-main-hr">
          <ul class="content-main-ul">
            <li>
              <a href="#" class="content-main-li content-main-li-first"><i class="fa fa-camera-retro"></i> <span class="network-name">Email</span></a>
            </li>
            <li>
              <a href="#" class="content-main-li"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
            </li>
            <li>
              <a href="#" class="content-main-li"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div class="introduce">
        <div class="introduce-inner">
            <div class="introduce-text">
              <hr class="introduce-hr">
              <h2 class="introduce-h2">java,scala,goLang:</h2>
              <p class="introduce-p">They are three programming languages those i use most,and scala is my favorite</p>
            </div>
            <div class="introduce-img">
               <img class="introduce-img-first" src="../../static/img/ipad.png" alt=""/>
            </div>
          </div>

        <hr class="introduce-hr-introduce">
        <div class="introduce-inner">
            <div class="introduce-img">
              <img class="introduce-img-second" src="../../static/img/dog.png" alt=""/>
            </div>
            <div class="introduce-text">
              <hr class="introduce-hr"/>
              <h2 class="introduce-h2">passion:</h2>
              <p class="introduce-p">The reason why i become a programmer just because i like it,rather than for living</p>
            </div>
        </div>

        <hr class="introduce-hr-introduce">
        <div class="introduce-inner to-footer">
            <div class="introduce-text-3">
              <hr class="introduce-hr"/>
              <h2 class="introduce-h2">new:</h2>
              <p class="introduce-p">I never refuse new things. for example,I use gradle instead of maven or ant,because I think gradle is better</p>
            </div>
            <div class="introduce-img">
              <img class="introduce-img-first" src="../../static/img/phones.png" alt=""/>
            </div>
        </div>
    </div>

    <footer class="footer">
      <el-row>
        <el-col :span="24" class="footer-col">
          <div class="footer-div-list"><span>Archives</span></div>
          <div class="footer-div-list"><span>Tags</span></div>
          <div class="footer-div-list"><span>Projects</span></div>
          <div class="footer-div-list"><span>About</span></div>
          <div class="footer-div-list"><span>Admin</span></div>
        </el-col>
      </el-row>
    </footer>


  </div>
</template>

<script>


import Footer from "./common/footer";
export default {
  name: 'HelloWorld',
    components: {Footer},
    data () {
      return {

      }
  },
    methods: {

    },
    mounted () {

    }
}
</script>


<style  scoped>
  @import "../components/awesome/css/font-awesome.css";
  @import "../style/css/common.css";

  .top-nav {
    background-color: #1A1817;
    height: 50px;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .font-home{
    color: aliceblue;
    height: 50px;
    line-height: 50px;
    margin-left: 45%;
    font-size: large;
    font-weight: bold;
  }

  .div-list{
    float: left;
    height: 50px;
    line-height: 50px;
    margin-left: 5%;
    color: aliceblue;
  }

  .content{

  }

  .content-main{
    background: url("../../static/img/intro-bg-dark.jpg") no-repeat center center;
    height: 600px;
  }

  .content-main-message{
    position: relative;
    padding-top: 5%;
    text-align: center;
    color: snow;
  }

  .content-main-hr{
    margin: 90px 120px;
  }

  .content-main-ul{
    list-style-type: none;
    margin-top: 100px;
  }

  .content-main-li{
    float: left;
    margin-right: 5%;
    text-decoration: none;
    font-size: 20px;
    border: #ccc solid 1px;
    background-color: #fff;
    padding: 10px 16px;
    line-height: 1.3333333;
    border-radius: 6px;
  }

  .content-main-li-first{
    margin-left: 33%;

  }

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

  .to-footer{
    margin-bottom: 50px;
  }

  .footer{
    background-color: #1a1817;
    height: 100px;
    padding-left: 600px;
  }

  .footer-div-list{
    float: left;
    height: 100px;
    line-height: 100px;
    margin-left: 5%;
    color: aliceblue;
  }


</style>
