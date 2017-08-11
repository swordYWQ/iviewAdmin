<template>
  <div>
    <div class="filters">
      <Button type="primary">添加</Button>
      <Button type="warning">批量删除</Button>
      <Input class="searchInput" v-model="searchKey" icon="ios-search" @on-click="search" placeholder="请输入..." style="width: 200px"></Input>
    </div>
    <div class="table-content">
      <Table border :columns="columnArr" :data="tableData"></Table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userManage',
  data: function () {
    return {
      searchKey: '',

      columnArr: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '用户组',
          key: 'userGroup'
        },
        {
          title: '创建时间',
          key: 'createTime'
        },
        {
          title: '备注',
          key: 'desc'
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
          userGroup: '王小明',
          createTime: '2017-01-01',
          desc: '111',
        },
        {
          userGroup: '王小明',
          createTime: '2017-01-01',
          desc: '222',
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
        content: `用户组：${this.tableData[index].userGroup}<br>备注：${this.tableData[index].desc}}`
      })
    },
    remove(index) {
      this.$Modal.confirm({
        title: '提示',
        content: '<p>确认删除该用户组?</p>',
        onOk: () => {
          this.data6.splice(index, 1);
          this.$Message.success('删除成功');
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
.filters {
  padding: 10px;
  .searchInput {
    float: right;
  }
}
</style>
