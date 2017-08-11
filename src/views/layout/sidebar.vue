<template>
    <div class="layout-sidebar">
        <Menu style="height: 100%;" :theme="theme1" :active-name="activeName" width="auto" :open-names="['1']" @on-select="selectMenu">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    权限配置
                </template>
                <Menu-item name="userManage">用户管理</Menu-item>
                <Menu-item name="userGroupManage">用户组管理</Menu-item>
                <Menu-item name="roleManage">角色管理</Menu-item>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </template>
                <Menu-item name="2-1">选项 1</Menu-item>
                <Menu-item name="2-2">选项 2</Menu-item>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </template>
                <Menu-item name="3-1">选项 1</Menu-item>
                <Menu-item name="3-2">选项 2</Menu-item>
            </Submenu>
        </Menu>
    </div>
</template>
<script>
export default {
    name: 'sidebar',
    data: function () {
        return {
            theme1: 'light',
            activeName: 'userManage'
        }
    },
    methods: {
        selectMenu(path) {
            if (path) {
                this.activeName = path;
                this.$router.push(path)
            }
        }
    }
}
</script>
