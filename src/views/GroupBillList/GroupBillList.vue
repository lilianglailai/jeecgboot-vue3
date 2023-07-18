<template>
  <div class="p-4">
    <BasicTable @register="registerTable" :rowSelection="rowSelection">
      <template #tableTitle>
        <a-button type="primary" preIcon="ant-design:plus-outlined" @click="visiblelijixiadan = true">立即下单</a-button>
        <a-button type="primary" preIcon="ant-design:plus-outlined" @click="openModal(true, { isUpdate: 'add' })">新增</a-button>
        <a-button type="primary" preIcon="ant-design:vertical-align-bottom-outlined" @click="exportClick">导出</a-button>
           <j-upload-button type="primary" preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button>
    <super-query :config="superQueryConfig" @search="(value)=>handleSuperQuery(value, model, field)"/>
      </template>
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)" />
      </template>
    </BasicTable>
    <GroupBillListModal @register="registerModal" @success="reload" />
    <a-modal class="add_box" v-model:visible="visiblelijixiadan" title="Basic Modal" :footer="null" v-if="visiblelijixiadan">
        
      <a-form-item label="下单类型" :rules="[{ required: true}]" labelAlign="left">
        <JDictSelectTag type="radio" v-model:value="Billmodel.BillchannelName" dictCode="channel,channel_name,channel_name" />
      </a-form-item>

      <a-form-item :rules="[{ required: true}]" label="下单客户" labelAlign="left">
        <JDictSelectTag v-model:value="Billmodel.BilluserName" dictCode="po_user,username,username" />
      </a-form-item>

      <a-form-item label="上传附件" labelAlign="left">
        <span @click="addUpload">
          <a-upload
            :disabled="!Billmodel.BilluserName || !Billmodel.BillchannelName"
            v-model:file-list="fileList"
            name="file"
            :multiple="true"
            :customRequest="customRequest"
            :headers="{ authorization: 'authorization-text' }"
          >
            <a-button>
              <!-- <upload-outlined></upload-outlined> -->
              Click to Upload
            </a-button>
          </a-upload>
        </span>
      </a-form-item>
    </a-modal>
  </div>
</template>

<script lang='ts' name='GroupBillList' setup>
import { ref, reactive, getCurrentInstance, computed,toRaw } from 'vue';
import { BasicTable, TableAction } from '/@/components/Table';
import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
import { useModal } from '/@/components/Modal';

import { useListPage } from '/@/hooks/system/useListPage';
import GroupBillListModal from './GroupBillListModal.vue';
import { list, getExportUrl, getImportUrl } from './GroupBillList.api';
import { searchFormSchema } from './GroupBillList.data';
import { defHttp } from '/@/utils/http/axios';
import { message } from 'ant-design-vue';
const instance = getCurrentInstance();
let proxy;
if (instance !== null) {
  proxy = instance.proxy;
}
let fileList = ref([]);
let visiblelijixiadan = ref(false);

let Billmodel = reactive({
  BilluserName: '',
  BillchannelName: '',
});
const [registerModal, { openModal }] = useModal();
const checkedKeys = ref<any>([]);
const exportList = computed(() => {
  return checkedKeys.value.join(',');
});
const superQueryConfig = reactive({
    conCode:{ title: "关联单号", view: "text", type: "string" },
      refCode:{ title: "物流单号", view: "text", type: "string" },
      clientCode:{ title: "客户单号", view: "text", type: "string" },
      clientName:{ title: "客户名", view: "text", type: "string" },
      channelName:{ title: "渠道名", view: "text", type: "string" },
      channelCode:{ title: "渠道代码", view: "text", type: "string" },
      recipientPhone:{ title: "收货人电话号码", view: "text", type: "string" },
      channelTpye:{ title: "渠道类型", view: "text", type: "string" },
      createdDate:{ title: "下单时间", view: "date", type: "string" },
      billWeight:{ title: "下单重量", view: "number", type: "number" },
      billCbm:{ title: "下单重量", view: "number", type: "number" },
      realWeight:{ title: "真实重量", view: "number", type: "number" },
      realCbm:{ title: "真实体积", view: "number", type: "number" },
      adSuburb:{ title: "省", view: "text", type: "string" },
      adState:{ title: "区", view: "text", type: "string" },
      postcode:{ title: "邮编", view: "text", type: "string" },
      goodsValue:{ title: "货值", view: "text", type: "string" },
      realGoodsNumber:{ title: "实到件数", view: "text", type: "string" },
      goodsNumber:{ title: "货物件数", view: "text", type: "string" },
      orderAmount:{ title: "预报运费", view: "text", type: "string" },
      goodsName:{ title: "货物名称", view: "text", type: "string" },
      billAwb:{ title: "billAwb", view: "text", type: "string" },
      trackState:{ title: "轨迹状态", view: "text", type: "string" },
      billCheck:{ title: "账单复核状态", view: "text", type: "string" },
      billLog:{ title: "计费日志", view: "text", type: "string" },
      airSeaCharge:{ title: "空运海运费", view: "number", type: "number" },
      expressCharge:{ title: "运费", view: "number", type: "number" },
      realOrderAmount:{ title: "实际运费", view: "number", type: "number" },
      shortLetter:{ title: "shortLetter", view: "text", type: "string" },
      vessel:{ title: "vessel", view: "text", type: "string" },
      extraInfo:{ title: "extraInfo", view: "text", type: "string" },
      container:{ title: "container", view: "text", type: "string" },
})
const queryParam = reactive({ });
function handleSuperQuery(params) {
  Object.keys(params).map(k=>{
    queryParam[k] = params[k]
  });
  searchQuery();
}
function searchQuery(){
     setProps({ searchInfo: toRaw(queryParam) });
    reload();
}
const { tableContext, onExportXls,onImportXls } = useListPage({
  tableProps: {
    title: '订单详情',
    api: list,
    columns: [
      {
        title: '关联单号1',
        align: 'center',
        sorter: true,
        dataIndex: 'conCode',
      },
      {
        title: '物流单号1',
        align: 'center',
        sorter: true,
        dataIndex: 'refCode',
      },
      {
        title: '客户单号1',
        align: 'center',
        sorter: true,
        dataIndex: 'clientCode',
      },
      {
        title: '客户名1',
        align: 'center',
        sorter: true,
        dataIndex: 'clientName',
      },
      {
        title: '渠道名1',
        align: 'center',
        sorter: true,
        dataIndex: 'channelName',
      },
      {
        title: '预计成本',
        align: 'center',
        sorter: true,
        dataIndex: 'forecastCost',
      },

      {
        title: '预计卖价',
        align: 'center',
        sorter: true,
        dataIndex: 'forecastSellingPrice',
      },

      {
        title: '下单时间',
        align: 'center',
        sorter: true,
        dataIndex: 'createdDate',
      },
      {
        title: '下单重量',
        align: 'center',
        sorter: true,
        dataIndex: 'billWeight',
      },
      {
        title: '下单体积',
        align: 'center',
        sorter: true,
        dataIndex: 'billCbm',
      },
      {
        title: '真实重量1',
        align: 'center',
        dataIndex: 'realWeight',
      },
      {
        title: '真是体积1',
        align: 'center',
        dataIndex: 'realCbm',
      },
      {
        title: '省',
        align: 'center',
        dataIndex: 'adSuburb',
      },
      {
        title: '区',
        align: 'center',
        dataIndex: 'adState',
      },
      {
        title: '邮编',
        align: 'center',
        dataIndex: 'postcode',
      },
      {
        title: '货值',
        align: 'center',
        dataIndex: 'goodsValue',
      },
      {
        title: '实到件数',
        align: 'center',
        dataIndex: 'realGoodsNumber',
      },
      {
        title: '货物件数',
        align: 'center',
        dataIndex: 'goodsNumber',
      },
      {
        title: '预报运费1',
        align: 'center',
        dataIndex: 'orderAmount',
      },
      {
        title: '货物名称',
        align: 'center',
        dataIndex: 'goodsName',
      },
      {
        title: 'billAwb',
        align: 'center',
        dataIndex: 'billAwb',
      },
      {
        title: '轨迹状态1',
        align: 'center',
        dataIndex: 'trackState',
      },
      {
        title: '账单复核状态',
        align: 'center',
        dataIndex: 'billCheck',
      },
      {
        title: '计费日志1',
        align: 'center',
        dataIndex: 'billLog',
      },
      {
        title: '空运海运费',
        align: 'center',
        dataIndex: 'airSeaCharge',
      },
      {
        title: '运费',
        align: 'center',
        dataIndex: 'expressCharge',
      },
      {
        title: '实际运费1',
        align: 'center',
        dataIndex: 'realOrderAmount',
      },
      {
        title: 'shortLetter',
        align: 'center',
        dataIndex: 'shortLetter',
      },
      {
        title: 'vessel',
        align: 'center',
        dataIndex: 'vessel',
      },
      {
        title: 'extraInfo',
        align: 'center',
        dataIndex: 'extraInfo',
      },
      {
        title: 'container',
        align: 'center',
        dataIndex: 'container',
      },
    ],
    actionColumn: {
      width: 160,
      title: 'Action',
      dataIndex: 'action',
      fixed: 'right',
    },
    formConfig: {
      schemas: searchFormSchema,
      autoAdvancedCol: 2,
      baseColProps: { xs: 24, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6 },
      actionColOptions: { xs: 24, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6 },
    },
  },
  exportConfig: {
    name: '订单列表',
    url: getExportUrl,
    params: {
      selections: exportList,
    },
  },
   importConfig: {
      url: getImportUrl,
    },
});
const [registerTable, { reload,setProps }] = tableContext;
const rowSelection = {
  type: 'checkbox',
  columnWidth: 30,
  selectedRowKeys: checkedKeys,
  onChange: onSelectChange,
};
function addUpload() {
  if (!Billmodel.BilluserName || !Billmodel.BillchannelName) {
    message.warning('请选择下单类型和下单客户');
  }
}
let paramsDate=ref<any>("")
function beforeUpload(file) {
  //文件类型
  console.log("w ca");
  
  var fileName = file.name.substring(file.name.lastIndexOf('.') + 1);
  if (fileName != 'xlsx' && fileName != 'xls') {
    message.error('文件类型必须是xls或xlsx!');

    return false;
  }
  //读取文件大小
  var fileSize = file.size;
  //console.log(fileSize)
  if (fileSize > 5048576) {
    message.error('文件大于5M!');

    return false;
  }
  let params = new FormData(); //表单格式
  params.append('file0', file); //添加file表单数据
  paramsDate.value=params
//   defHttp.post({ url: '/front/InputOrderList/', params }).then((res) => {
    
//     // if (res.type == true) {
//     //   message.success(`文件上传成功`)
//     // } else {
//     //   message.error(`文件上传失败`)
//     // }
//   });
}
function customRequest(options) {
  let params = new FormData();
  params.append('file0', options.file);
  params.append('regionName', Billmodel.BillchannelName);
  params.append('username', Billmodel.BilluserName);
  params.append('inclusTax', '');
  params.append('chargecode', '');
  defHttp.post({ url: '/front/UploadInvoiceExcel/', params }, { isTransformResponse: false }).then((res) => {
    if (res.code == 200) {
      message.success(res.msg);
      visiblelijixiadan.value = false;
      Billmodel.BilluserName = '';
      Billmodel.BillchannelName = '';
    } else {
      message.warning(res.extend.msg);
    }
  });
}
function exportClick() {
  if (!checkedKeys.value.length) {
    message.warning('至少口选一个数据');
  } else {
    onExportXls();
  }
}

/**
 * 选择事件
 */
function onSelectChange(selectedRowKeys: (string | number)[]) {
  checkedKeys.value = selectedRowKeys;
}
/**
 * 下拉操作栏
 */
function handleEdit(record, type, disabled = false) {
  openModal(true, {
    record,
    isUpdate: type,
    disabled: disabled,
  });
}
function getTableAction(record) {
  return [
    {
      label: '编辑',
      onClick: handleEdit.bind(null, record, 'edit', false),
    },
  ];
}
function getDropDownAction(record) {
  return [
    // {
    //   label: '详情',
    //   onClick: handleDetail.bind(null, record),
    // },
    {
      label: '详情',
      onClick: handleEdit.bind(null, record, 'detail', true),
    },
    {
      label: '下载快递面单',
      onClick: getIlspdf.bind(null, record),
    },
    {
      label: '下载入仓单',
      onClick: getIlsinputpdf.bind(null, record),
    },
  ];
}
function getIlsinputpdf(row) {
  window.open(
    'http://localhost:9090/jeecg-boot/front/toDownloadIlsFile?createdDate=' +
      row.createdDate +
      '&username=' +
      row.clientName +
      '&type=' +
      'RCD' +
      '&filename=' +
      row.conCode +
      '-' +
      row.refCode +
      '.pdf',
    '_blank'
  );
}
function getIlspdf(row) {
  window.open(
    'http://localhost:9090/jeecg-boot/front/toDownloadIlsFile?createdDate=' +
      row.createdDate +
      '&username=' +
      row.clientName +
      '&type=' +
      'EXP' +
      '&filename=' +
      row.conCode +
      '-' +
      row.refCode +
      '.pdf',
    '_blank'
  );
}
</script>

<style  lang='less'>
.add_box .ant-modal-body {
  padding: 24px !important;
}
</style>