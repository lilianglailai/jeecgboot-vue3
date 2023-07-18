<template>
  <div>
    
    <BasicTable @register="registerTable" :rowSelection="rowSelection">
      <template #tableTitle>
        <a-button type="primary" preIcon="ant-design:plus-outlined" @click="openModal(true, { isUpdate: 'add' })">新增</a-button>
        <a-button type="primary" preIcon="ant-design:plus-outlined" @click="visiblelijixiadan=true">导入货柜明细</a-button>
        <a-button type="primary" preIcon="ant-design:vertical-align-bottom-outlined" @click="onExportXls">导出</a-button>
        <!-- <j-upload-button type="primary" preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button> -->
        <super-query :config="superQueryConfig" @search="(value) => handleSuperQuery(value, model, field)" />
      </template>
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" />
      </template>
    </BasicTable>
    <FreightContainerSeaListModal @register="registerModal" @success="reload" /> 
       
    
    <a-modal class="add_box" v-model:visible="visiblelijixiadan" title="导入货柜明细"  :footer="null" v-if="visiblelijixiadan">
     
       <a-form  :label-col="{ span: 6 }"
    >

      
          <a-form-item :rules="[{ required: true}]" label="启运时间eta" labelAlign="left" :labelCol="labelCol" prop="createdDate">
            <a-date-picker format="YYYY-MM-DD" placeholder="请选择时间" v-model="Billmodel.eta" style="width: 100%" />
          </a-form-item>
       
          <a-form-item :rules="[{ required: true}]" label="到达时间etd" labelAlign="left" :labelCol="labelCol" prop="createdDate">
            <a-date-picker format="YYYY-MM-DD" placeholder="请选择时间" v-model="Billmodel.etd" style="width: 100%" />
          </a-form-item>
      
          <a-form-item  :rules="[{ required: true}]" label="启运港" labelAlign="left" :labelCol="labelCol" prop="notes">
            <a-input v-model="Billmodel.staPort" placeholder="请输入启运港"></a-input>
          </a-form-item>
   
     
          <a-form-item :rules="[{ required: true}]" label="目的港" labelAlign="left" :labelCol="labelCol" prop="notes">
            <a-input v-model="Billmodel.endPort" placeholder="请输入目的港"></a-input>
          </a-form-item>
      
          <a-form-item  :rules="[{ required: true}]" label="船名" labelAlign="left" :labelCol="labelCol" prop="notes">
            <a-input v-model="Billmodel.vesselName" placeholder="请输入船名"></a-input>
          </a-form-item>
      
       
          <a-form-item :rules="[{ required: true}]" label="航次" labelAlign="left" :labelCol="labelCol" prop="notes">
            <a-input v-model="Billmodel.voyage" placeholder="请输入航次"></a-input>
          </a-form-item>
    
      
          <a-upload
            v-model:file-list="fileList"
            name="file"
            :multiple="true"
            :customRequest="customRequest"
            :headers="{ authorization: 'authorization-text' }"
            @change="handleChange"
          >
            <a-button> Click to Upload </a-button>
          </a-upload>
      </a-form>
     
    </a-modal>
  </div>
</template>

<script lang='ts' name='FreightContainerSeaList' setup>
import { message } from 'ant-design-vue';
import { useModal } from '/@/components/Modal';
import { useListPage } from '/@/hooks/system/useListPage';
import FreightContainerSeaListModal from "./FreightContainerSeaListModal.vue";
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { defHttp } from '/@/utils/http/axios';
import { columns, searchFormSchema } from './data';
import { url, list } from './api';
import { ref, reactive, getCurrentInstance, computed, toRaw } from 'vue';
const instance = getCurrentInstance();
let proxy;
if (instance !== null) {
  proxy = instance.proxy;
}

const superQueryConfig = reactive({
  totalCbm: { title: '总体积', view: 'number', type: 'number' },
  totalKg: { title: '总重量', view: 'number', type: 'number' },
  totalValue: { title: '总货值', view: 'number', type: 'number' },
  totalNum: { title: '总件数', view: 'number', type: 'number' },
  etd: { title: 'etd', view: 'date', type: 'string' },
  eta: { title: 'eta', view: 'date', type: 'string' },
  staPort: { title: '启运港', view: 'text', type: 'string' },
  endPort: { title: '目的港', view: 'text', type: 'string' },
  warehouseAddress: { title: '仓库', view: 'text', type: 'string' },
  oceanBill: { title: 'oceanBill', view: 'text', type: 'string' },
  vesselId: { title: 'vesselId', view: 'text', type: 'string' },
  voyage: { title: 'voyage', view: 'text', type: 'string' },
  container: { title: 'container', view: 'text', type: 'string' },
  seal: { title: 'seal', view: 'text', type: 'string' },
  vesselName: { title: 'vesselName', view: 'text', type: 'string' },
  containerState: { title: 'containerState', view: 'text', type: 'string' },
  createdDate: { title: 'createdDate', view: 'date', type: 'string' },
});
const queryParam = reactive({});
function handleSuperQuery(params) {
  Object.keys(params).map((k) => {
    queryParam[k] = params[k];
  });
  searchQuery();
}
function searchQuery() {
  setProps({ searchInfo: toRaw(queryParam) });
  reload();
}
const exportList = computed(() => {
  return checkedKeys.value.join(',');
});
const checkedKeys = ref<any>([]);
 
  function onSelectChange(selectedRowKeys: (string | number)[], selectRow) {
    checkedKeys.value = selectedRowKeys;
    //判断全选的问题checkedKeys和selectRows必须一致
    
  }
 
 const    rowSelection ={
    type: 'radio',columnWidth: 20,
    selectedRowKeys: checkedKeys,
    onChange: onSelectChange,
    //update-begin-author:wangshuai---date:20221102--for: [VUEN-2562]用户选择，跨页选择后，只有当前页人员 ---
    //table4.4.0新增属性选中之后是否清空上一页下一页的数据，默认false
    preserveSelectedRowKeys:true,
    // onChange: onSelectChange,
    // hideSelectAll:true//全选删除
  }
const [registerModal, { openModal }] = useModal();
const { tableContext, onExportXls, onImportXls } = useListPage({
  tableProps: {
    title: '航运管理',
  
    api: list,
    columns: columns,
    actionColumn: {
      width: 160,
      title: 'Action',
      dataIndex: 'action',
      fixed: 'right',
    },
    formConfig: {
      schemas: searchFormSchema,
      fieldMapToTime: [
        ['etdTime', ['etd_begin', 'etd_end'], 'YYYY-MM-DD'],
        ['etaTime', ['eta_begin', 'eta_end'], 'YYYY-MM-DD'],
        ['createdDate', ['createdDate_begin', 'createdDate_end'], 'YYYY-MM-DD'],
      ],
      autoAdvancedCol: 2,
    },
  },
  exportConfig: {
    name: '订单列表',
    url: url.exportXlsUrl,
    params: {
      selections: exportList,
    },
  },
  importConfig: {
    url: url.importExcelUrl,
  },
});
let visiblelijixiadan = ref(false);
let Billmodel = ref<any>({});
function customRequest(options) {
  let params = new FormData();
  params.append('file0', options.file);
  params.append('container', Billmodel.container);
  params.append('eta', Billmodel.eta);
  params.append('etd', Billmodel.etd);
  params.append('staPort', Billmodel.staPort);
  params.append('endPort', Billmodel.endPort);
  params.append('vesselName', Billmodel.vesselName);
  params.append('voyage', Billmodel.voyage);

  defHttp.post({ url: '/front/updateOdercontainer/', params }, { isTransformResponse: false }).then((res) => {
    // message.success('下单提示');
     if (res.code == 200) {
      message.success(res.msg);
      visiblelijixiadan.value = false;
    
      Billmodel = {};
    } else {
      message.warning(res.extend.msg);
    }
    //  this.Billmodel.value.resetFields()
  });
}
function getTableAction(record) {
  return [
    {
      label: '编辑',
      onClick: handleEdit.bind(null, record),
    },
    {
      label: '删除',
      popConfirm: {
        title: '是否确认删除',
        confirm: handleDelete.bind(null, record),
      },
    },
  ];
}
function handleEdit(record) {
  openModal(true, {
    record,
    isUpdate: true,
  });
}
/**
 * 删除事件
 */
function handleDelete(record) {
  defHttp.delete({ url: url.delete, data: { id: record.id } }, { joinParamsToUrl: true }).then(() => {
    reload();
  });
}
const [registerTable, { reload, setProps }] = tableContext;
</script>

<style  lang='less'>
.add_box .ant-modal-body {
  padding: 24px !important;
}
</style>