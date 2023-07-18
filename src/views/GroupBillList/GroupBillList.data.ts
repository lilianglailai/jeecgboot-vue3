import { BasicColumn, FormSchema } from '/@/components/Table';
export const formSchema: FormSchema[] = [
 {
    field: 'conCode',
    label: '关联单号',
    component: 'Input', 
    colProps: { span: 8 },
    dynamicDisabled:true,
 },
 {
    field: 'refCode',
    label: '物流单号',
    component: 'Input', 
    colProps: { span: 8 },
    required:true
 },
 
 {
    field: 'clientCode',
    label: '客户单号',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'clientName',
    label: '客户名',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'channelName',
    label: '渠道名',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'channelCode',
    label: '渠道代码',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'recipientPhone',
    label: '收货人电话',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'channelTpye',
    label: '渠道类型',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'createdDate',
    label: '下单时间',
    component: 'DatePicker', 
    colProps: { span: 8 },
 },
 {
    field: 'billWeight',
    label: '下单重量',
    component: 'InputNumber', 
    colProps: { span: 8 },
  
 },
 {
    field: 'billCbm',
    label: '下单体积',
    component: 'InputNumber', 
    colProps: { span: 8 },
 },
 {
    field: 'realWeight',
    label: '真实重量',
    component: 'InputNumber', 
    colProps: { span: 8 },
    required:true
 },
 {
    field: 'realCbm',
    label: '真实体积',
    component: 'InputNumber', 
    colProps: { span: 8 },
    required:true
 },
 {
    field: 'adSuburb',
    label: '省',
    component: 'Input',
    colProps: { span: 8 },
 },
 {
    field: 'adState',
    label: '区',
    component: 'Input',
    colProps: { span: 8 }, 
 },
 {
    field: 'postcode',
    label: '邮编',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'goodsValue',
    label: '货值',
    component: 'InputNumber', 
    colProps: { span: 8 },
 },
 {
    field: 'realGoodsNumber',
    label: '实到件数',
    component: 'InputNumber', 
    colProps: { span: 8 },
 },
 {
    field: 'goodsNumber',
    label: '货物件数',
    component: 'InputNumber', 
    colProps: { span: 8 },
 },
 {
    field: 'orderAmount',
    label: '预报运费',
    component: 'InputNumber', 
    colProps: { span: 8 },
 },
 {
    field: 'goodsName',
    label: '货物名称',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'billAwb',
    label: 'billAwb',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'trackState',
    label: '轨迹状态',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'billCheck',
    label: '账单复核状态',
    component: 'Input', 
    colProps: { span: 8 },
 },
 

 {
    field: 'airSeaCharge',
    label: '空运海运费',
    component: 'InputNumber', 
    colProps: { span: 8 },
 },
 {
    field: 'expressCharge',
    label: '运费',
    component: 'InputNumber', 
    colProps: { span: 8 },
 },
 {
    field: 'realOrderAmount',
    label: '实际运费',
    component: 'InputNumber', 
    colProps: { span: 8 },
 },
 {
    field: 'shortLetter',
    label: 'shortLetter',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'vessel',
    label: 'vessel',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'extraInfo',
    label: 'extraInfo',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'container',
    label: 'container',
    component: 'Input', 
    colProps: { span: 8 },
 },
 {
    field: 'billLog',
    label: '计费日志',
    component: 'InputTextArea', 
    slot:"billLog",
    colProps: { span: 16 },
 },
 {
    colSlot:"list",
    label:"a",
    field:"list",
    
 }
]
export const searchFormSchema:FormSchema[]=[
    {
        field: 'conCode',
        label: '关联单号',
        component: 'Input',
        colProps: { span: 8 },
      },    {
        field: 'refCode',
        label: '物流单号',
        component: 'Input',
        colProps: { span: 8 },
      },
      {
        field: 'clientCode',
        label: '客户单号',
        component: 'Input',
        colProps: { span: 8 },
      },
      {
        field: 'createdDate',
        label: '下单时间',
        component: 'Input',
        colProps: { span: 8 },
      },
      {
        field: 'postcode',
        label: '邮编',
        component: 'Input',
        colProps: { span: 8 },
      },
]