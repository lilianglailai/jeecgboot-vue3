<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="title" @ok="handleSubmit" :showOkBtn="!disabled" :width="props.width">
    <BasicForm @register="registerForm">
      
    
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
import { ref, computed, unref, defineProps, reactive } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formSchema } from './data';
import { saveOrUpdateMenu } from './api';
import { message } from 'ant-design-vue';
 
import { defHttp } from '/@/utils/http/axios';
 
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
  //重置表单
  obj = { ...data.record };

  await resetFields();
  setModalProps({ confirmLoading: false });
  isUpdate.value = data?.isUpdate;
  disabled.value = !!data?.disabled;

 
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
 
//表单提交事件
async function handleSubmit(v) {
   
    
  try {
    let values = await validate();
 
  
    let sumObj = { ...obj, ...values};
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
