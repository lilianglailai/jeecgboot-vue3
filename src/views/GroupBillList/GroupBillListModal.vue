<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="title" @ok="handleSubmit" :showOkBtn="!disabled" :width="props.width">
    <BasicForm @register="registerForm">
      <template #billLog="{ model, field }">
        <a-textarea v-model:value="model[field]" :disabled="disabled" :rows="4" placeholder="请输入计费日志" />
      </template>
      <template #list="">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane tab="订单主表" :key="refKeys[0]" :forceRender="true" >
            <JVxeTable
              :ref="refKeys[0]"
              toolbar
              rowNumber
              rowSelection
              :disabled="disabled"
              :loading="billAccountTable.loading"
              :columns="billAccountTable.columns"
              :dataSource="billAccountTable.dataSource"
              :maxHeight="300"
              clickSelectRow
              keyboardEdit
            />
          </a-tab-pane>
          <a-tab-pane tab="操作日志" :key="refKeys[1]" :forceRender="true" >
            <JVxeTable
             :ref="refKeys[1]"
              toolbar
              rowNumber
              rowSelection
              disabled
              :loading="billLogTable.loading"
              :columns="billLogTable.columns"
              :dataSource="billLogTable.dataSource"
              :maxHeight="300"
              clickSelectRow
              keyboardEdit
            />
          </a-tab-pane>
          <a-tab-pane tab="货物尺寸信息" :key="refKeys[2]" :forceRender="true" >
            <JVxeTable
              :ref="refKeys[2]"
              toolbar
              rowNumber
              rowSelection
              :disabled="disabled"
              :loading="goodsSizeTable.loading"
              :columns="goodsSizeTable.columns"
              :dataSource="goodsSizeTable.dataSource"
              :maxHeight="300"
              clickSelectRow
              keyboardEdit
            />
          </a-tab-pane>
          <a-tab-pane tab="货物信息" :key="refKeys[3]"  :forceRender="true">
            <JVxeTable
              :ref="refKeys[3]"
              toolbar
              rowNumber
              rowSelection
              :disabled="disabled"
              :loading="clientGoodsTable.loading"
              :columns="clientGoodsTable.columns"
              :dataSource="clientGoodsTable.dataSource"
              :maxHeight="300"
              clickSelectRow
              keyboardEdit
            />
          </a-tab-pane>
          <a-tab-pane tab="发货人信息" :key="refKeys[4]"  :forceRender="true">
            <JVxeTable
              :ref="refKeys[4]"
              toolbar
              rowNumber
              rowSelection
              :disabled="disabled"
              :loading="clientInfoTable.loading"
              :columns="clientInfoTable.columns"
              :dataSource="clientInfoTable.dataSource"
              :maxHeight="300"
              clickSelectRow
              keyboardEdit
            />
          </a-tab-pane>
          <a-tab-pane tab="收货人信息" :key="refKeys[5]"  :forceRender="true">
            <JVxeTable
              :ref="refKeys[5]"
              toolbar
              rowNumber
              rowSelection
              :disabled="disabled"
              :loading="clientaddressTable.loading"
              :columns="clientaddressTable.columns"
              :dataSource="clientaddressTable.dataSource"
              :maxHeight="300"
              clickSelectRow
              keyboardEdit
            />
          </a-tab-pane>
        </a-tabs>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
import { ref, computed, unref, defineProps, reactive } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formSchema } from './GroupBillList.data';
import {Api, saveOrUpdateMenu } from './GroupBillList.api';
import { message } from 'ant-design-vue';
 
import { defHttp } from '/@/utils/http/axios';
import {
  billAccountTable,
  billLogTable ,
  goodsSizeTable ,
  clientGoodsTable ,
  clientInfoTable ,
  clientaddressTable ,
 
} from './GroupBilljvxedome.data';
let refKeys = ref(['billAccount', 'billLog', 'goodsSize', 'clientGoods', 'clientInfo', 'clientaddress']);
let activeKey = ref('billAccount');
let billAccount=ref<any>(null)
let billLog=ref<any>(null)
let goodsSize=ref<any>(null)
let clientGoods=ref<any>(null)
let clientInfo=ref<any>(null)
let clientaddress=ref<any>(null)
// Emits声明
let obj = reactive<any>({});

const props = defineProps({
  width: {
    type: String,
    default: '1200px',
  },
});
const emit = defineEmits(['register', 'success']);
const isUpdate = ref('add');
const disabled = ref(false);
 
//表单配置
const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
  labelWidth: 100,
  schemas: formSchema,
  showActionButtonGroup: false,
  disabled: disabled,
});
//表单赋值
const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  obj = { ...data.record };
  await resetFields();
  setModalProps({ confirmLoading: false });
  isUpdate.value = data?.isUpdate;
  disabled.value = !!data?.disabled;

  if (isUpdate.value == 'add') {
    billAccountTable.dataSource = [];
    billLogTable.dataSource = [];
    goodsSizeTable.dataSource = [];
    clientGoodsTable.dataSource = [];
    clientInfoTable.dataSource = [];
    clientaddressTable.dataSource = [];
  }else{
    if (obj.conCode) {
       
        
        let params = { id: obj.conCode }
        requestSubTableData(Api.billAccount.list, params, billAccountTable)
        requestSubTableData(Api.billLog.list, params, billLogTable)
        requestSubTableData(Api.goodsSize.list, params, goodsSizeTable)
        requestSubTableData(Api.clientGoods.list, params, clientGoodsTable)
        requestSubTableData(Api.clientInfo.list, params, clientInfoTable)
        requestSubTableData(Api.clientaddress.list, params, clientaddressTable)
      }
  }
  if (unref(isUpdate)) {
    // 编辑模式下禁用id字段

    //获取详情
    //   data.record = await getTenantById({ id: data.record.id });
    //   //表单赋值
    await setFieldsValue({
      ...data.record,
    });
  }
});
//设置标题
const title = computed(() => (isUpdate.value == 'edit' ? '编辑' : isUpdate.value == 'detail' ? '详情' : '新增'));
function requestSubTableData(url, params, tab, success?) {
    tab.loading = true;
    defHttp.get({ url, params }, { isTransformResponse: false })
      .then((res) => {
        let { result } = res;
        if (res.success && result) {
          if (Array.isArray(result)) {
            tab.dataSource = result;
          } else if (Array.isArray(result.records)) {
            tab.dataSource = result.records;
          }
        }
        typeof success === 'function' ? success(res) : '';
      })
      .finally(() => {
        tab.loading = false;
      });
  }
//表单提交事件
async function handleSubmit(v) {
   
    
  try {
    let values = await validate();
    let jvxeObj:any={  }
    refKeys.value.forEach((res:any)=>{ 
        jvxeObj[res+'List']=eval(res).value.getTableData()
    })
  
     let sumObj = { ...obj, ...values,...jvxeObj};
    setModalProps({ confirmLoading: true });
    //提交表单
    saveOrUpdateMenu(sumObj, isUpdate.value).then((res) => {
     
      closeModal();
      //刷新列表
      emit('success');
    });
    //关闭弹窗
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
<style lang="less" >
.ant-picker,
.ant-input-number {
  width: 100% !important;
}

.ant-col-sm-18 {
  max-width: 100% !important;
}
</style>
