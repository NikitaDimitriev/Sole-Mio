<template>
<div id="menu">
    <div class="top-menu">
        <div class="top-menu-left">
            <button class="hamburger hamburger--collapse" type="button" @click="activeMenu = !activeMenu" :class="{'is-active': activeMenu}">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <span class="menu-title">MENU</span>
        </div>
        <div class="top-menu-logo">
            <img src="assets/logo.png">
        </div>
        <div class="top-menu-right">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-vk"></i>
            <i class="fa fa-instagram"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Menu",
    data(){
        return{
            activeMenu: false
        }
    }
}
</script>

<style lang="css">

.hamburger:focus{
    outline: none;
}
.top-menu{
    display: flex;
    padding: 24px 130px 0 130px;
    justify-content: space-between
}
.top-menu-left{
    justify-content: space-between;
}
.menu-title{
    margin-left: 20px;
}
.top-menu-right{
    width: 200px;
    justify-content: space-around;
}
</style>
