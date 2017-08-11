<template>
    <div class="header">
        <!-- <div class="header-logo">
                                            <img class="header-icon" src="../../assets/images/7road_Icon.png">
                                            <div class="header-logo-title">
                                                <h3>权限管理平台</h3>
                                                <h4>PowerManage</h4>
                                            </div>
                                        </div>
                                        <div class="header-aside">
                                            <div class="header-note">
                                                <Icon type="android-notifications"></Icon>
                                            </div>
                                            <Dropdown class="header-user">
                                                <a href="javascript:void(0)" class="user-drop">
                                                    <Icon type="android-person"></Icon>
                                                    <Icon type="android-arrow-dropdown"></Icon>
                                                </a>
                                                <Dropdown-menu slot="list">
                                                    <Dropdown-item>账户中心</Dropdown-item>
                                                    <Dropdown-item>退出登录</Dropdown-item>
                                                </Dropdown-menu>
                                            </Dropdown>
                                            <a class="header-aside-lang">
                                                <span class="circle-text">EN</span>
                                            </a>
                                        </div>
                                        <div class="header-items">
                                            <a class="on">
                                                <i class="category-icon td-appfont icon-analytics"></i>
                                                <span>应用分析</span>
                                            </a>
                                            <a>
                                                <i class="category-icon td-appfont icon-push"></i>
                                                <span>推送营销</span>
                                            </a>
                                            <a>
                                                <i class="category-icon td-appfont icon-Toolbox"></i>
                                                <span>开发助手</span>
                                            </a>
                                            <a>
                                                <i class="category-icon td-appfont icon-management"></i>
                                                <span>应用管理</span>
                                            </a>
                                        </div> -->
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <div class="header-logo">
                <img class="header-icon" src="../../assets/images/7road_Icon.png">
                <div class="header-logo-title">
                    <h3>权限管理平台</h3>
                    <h4>PowerManage</h4>
                </div>
            </div>
            <Menu-item name="1">
                <Icon type="ios-paper"></Icon>
                权限管理
            </Menu-item>
            <Menu-item name="2">
                <Icon type="ios-people"></Icon>
                应用管理
            </Menu-item>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <Menu-group title="使用">
                    <Menu-item name="3-1">新增和启动</Menu-item>
                    <Menu-item name="3-2">活跃分析</Menu-item>
                    <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                    <Menu-item name="3-4">用户留存</Menu-item>
                    <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
            </Submenu>
            <Menu-item name="4">
                <Icon type="settings"></Icon>
                综合设置
            </Menu-item>
    
            <div class="header-aside">
                <div class="header-note">
                    <Dropdown trigger="click" class="header-user">
                        <a href="javascript:void(0)" class="user-drop">
                            <Icon type="android-notifications"></Icon>
                        </a>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>通知1</Dropdown-item>
                            <Dropdown-item>通知2</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                </div>
                <Dropdown trigger="click" class="header-user" @on-click="handler">
                    <a href="javascript:void(0)" class="user-drop">
                        <Icon type="android-person"></Icon>
                        <Icon type="android-arrow-dropdown"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item name="userinfo">账户中心</Dropdown-item>
                        <Dropdown-item name="logout">退出登录</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
                <a class="header-aside-lang">
                    <span class="circle-text">EN</span>
                </a>
            </div>
        </Menu>
    </div>
</template>
<script>
export default {
    name: 'header',
    data: function () {
        return {
            theme1: 'primary'
        }
    },
    methods: {
        handler(e) {
            if (e == 'userinfo') {
                this.$Modal.info({
                    title:'提示',
                    content:'userinfo'
                })
            }
            else if (e == 'logout') {
                this.logout();
            }
        },
        logout() {
            console.log(111)
            this.$Modal.confirm({
                title: '提示',
                content: '<p>确认退出系统吗</p>',
                onOk: () => {
                    this.$router.push('login')
                },
                onCancel: () => {
                    this.$Message.info('点击了取消');
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 100;
    background-color: #2b83f9;
    background-image: linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
    .header-logo {
        width: 200px;
        height: 100%;
        float: left;
        position: relative;
        .header-icon {
            width: 32px;
            height: 32px;
            position: relative;
            top: 15px;
            margin-left: 20px;
            float: left;
        }
        .header-logo-title {
            margin-left: 72px;
            line-height: 25px;
            position: relative;
            top: 10px;
            h3 {
                color: #FFF;
            }
            h4 {
                color: #FFF;
                font-weight: 400;
            }
        }
    }
    .header-aside {
        float: right;
        margin: 0 30px 0 0;
        position: relative;
        color: #fff;
        font-size: 16px;
        line-height: 60px;
        .header-note {
            display: inline-block;
            padding: 0 20px;
            cursor: pointer;
        }
        .header-user {
            display: inline-block;
            padding: 0 20px;
            position: relative;
            .user-drop {
                color: #FFF;
            }
        }
        .header-aside-lang {
            display: inline-block;
            padding: 0 20px;
            font-size: 12px;
            color: #FFF;
            .circle-text {
                height: 23px;
                width: 23px;
                padding: 2px;
                border: 1px solid #fff;
                border-radius: 50%;
            }
        }
    } // .header-items {
    //     float: left;
    //     margin-left: 20px;
    //     a {
    //         display: inline-block;
    //         margin-right: 40px;
    //         position: relative;
    //         height: 60px;
    //         line-height: 60px;
    //         font-size: 14px;
    //         padding: 0 4px;
    //         color: #fff;
    //         opacity: .69;
    //         cursor: pointer;
    //         transition: all .2s ease-in-out;
    //         box-sizing: border-box;
    //         &:hover {
    //             color: #fff;
    //             opacity: 1;
    //         }
    //         &.on {
    //             color: #fff;
    //             opacity: 1;
    //             border-bottom: 5px solid #4fe3c1;
    //         }
    //     }
    // }
}
</style>
