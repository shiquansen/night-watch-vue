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





  </div>
</template>

<script>


    export default {
        name: 'HelloWorld',

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
  @import "../../components/awesome/css/font-awesome.css";
  @import "../../style/css/common.css";

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
    background: url("../../../static/img/intro-bg-dark.jpg") no-repeat center center;
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

</style>
