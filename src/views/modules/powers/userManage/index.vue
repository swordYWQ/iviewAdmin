<template>
  <div>
    <div class="filters">
      <Button type="primary">添加</Button>
      <Button type="warning">批量删除</Button>
      <Input class="searchInput" v-model="searchKey" icon="ios-search" @on-click="search" placeholder="请输入..." style="width: 200px"></Input>
    </div>
    <div class="table-content">
      <Table border :columns="columnArr" :data="tableData"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="current" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userManage',
  data: function () {
    return {
      searchKey: '',

      current:1,

      columnArr: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '用户名',
          key: 'userName'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '登录帐号',
          key: 'loginAccount'
        },
        {
          title: '创建时间',
          key: 'createTime'
        },
        {
          title: '最近登陆时间',
          key: 'lastTime'
        },
        {
          title: '角色',
          key: 'role'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ]);
          }
        }
      ],
      tableData: [
        {
          userName: '王小明',
          name: '王小明',
          loginAccount: 'admin',
          createTime: '2017-01-01',
          lastTime: '2017-08-08 08:08:08',
          role: 'Boss',
        },
        {
          userName: '王小明',
          name: '王小明',
          loginAccount: 'guest',
          createTime: '2017-01-01',
          lastTime: '2017-08-08 08:08:08',
          role: 'Boss',
        },
      ]
    }
  },
  methods: {
    search() {
      console.log('search')
    },
    show(index) {
      this.$Modal.info({
        title: '用户信息',
        content: `姓名：${this.tableData[index].name}<br>角色：${this.tableData[index].role}<br>登陆角色：${this.tableData[index].loginAccount}`
      })
    },
    remove(index) {
      this.$Modal.confirm({
        title: '提示',
        content: '<p>确认删除该用户?</p>',
        onOk: () => {
          this.data6.splice(index, 1);
          this.$Message.success('删除成功');
        },
        onCancel: () => {
          this.$Message.info('点击了取消');
        }
      });
    },
    changePage(page) {
      this.current=page;
      console.log(page)
    },
    query(){
      this.current=1;
    }
  }
}
</script>
<style lang="scss" scoped>
.filters {
  padding: 10px;
  .searchInput {
    float: right;
  }
}

.table-content {
  
}
</style>
