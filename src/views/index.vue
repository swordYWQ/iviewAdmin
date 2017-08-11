<template>
    <div class="layout">
        <PHeader></PHeader>
        <div class="layout-content">
            <PSidebar></PSidebar>
            <div class="layout-content-main">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="/">
                            <Icon type="ios-home-outline"></Icon> 权限管理
                        </Breadcrumb-item>
                        <Breadcrumb-item href="userManage">
                            <Icon type="social-buffer-outline"></Icon> 用户管理
                        </Breadcrumb-item>
                        <!-- <Breadcrumb-item>
                                                        <Icon type="pound"></Icon> Breadcrumb
                                                    </Breadcrumb-item> -->
                    </Breadcrumb>
                </div>
                <transition name="fade">
                    <router-view class="layout-component"></router-view>
                </transition>
                <div class="layout-copy">
                    2015-2017 &copy; sevenRoad
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PHeader from './layout/header'
import PSidebar from './layout/sidebar'
export default {
    components: {
        PHeader, PSidebar
    },
    data: function () {
        return {

        }
    },
    methods: {
        handleStart() {
            this.$Modal.info({
                title: 'Bravo',
                content: 'Now, enjoy the convenience of iView.'
            });
        }
    }
};
</script>
<style lang="scss">
.layout {
    width: 100%;
    height: calc(100% - 60px);
    .layout-content {
        width: 100%;
        height: 100%;
        min-height: 200px;
        margin-top: 60px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        .layout-sidebar {
            width: 200px;
            height: 100%;
            float: left;
        }
        .layout-content-main {
            width: calc(100% - 200px);
            height: 100%;
            margin-left: 200px;
            .layout-breadcrumb {
                padding: 10px 15px;
            }
            .layout-component {
                height: calc(100% - 95px);
                overflow-y: auto;
                position: relative;
            }
            .layout-copy {
                text-align: center;
                padding: 10px 0 20px;
                color: #9ea7b4;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active 在低于版本 2.1.8 中 */

{
    opacity: 0
}
</style>