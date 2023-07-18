import { JVxeTypes } from '/@/components/jeecg/JVxeTable/types';
import {  reactive } from 'vue';
export const billLogTable:any= reactive({
    loading: false,
    dataSource: [],
    columns: [
      {
        title: 'conCode',
        key: 'conCode',
        type: JVxeTypes.input,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'oldValue',
        key: 'oldValue',
        type: JVxeTypes.input,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'newValue',
        key: 'newValue',
        type: JVxeTypes.input,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'dataByer',
        key: 'dataByer',
        type: JVxeTypes.input,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'dataByType',
        key: 'dataByType',
        type: JVxeTypes.input,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'dateTime',
        key: 'dateTime',
        type: JVxeTypes.date,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      }
    ]
  })
  // 货物尺寸信息
  export const  goodsSizeTable:any=  reactive({
    loading: false,
    dataSource: [],
    columns: [
      {
        title: 'conCode',
        key: 'conCode',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'refCode',
        key: 'refCode',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '长',
        key: 'lth',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '宽',
        key: 'wth',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '高',
        key: 'hth',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '重量',
        key: 'weight',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '状态',
        key: 'num',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'createdDate',
        key: 'createdDate',
        type: JVxeTypes.date,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'img',
        key: 'img',
        type: JVxeTypes.image,
        token: true,
        responseName: 'message',
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      }
    ]
  })
  // 货物信息
  export const  clientGoodsTable:any= reactive({
    loading: false,
    dataSource: [],
    columns: [
      {
        title: '中文品名',
        key: 'chinesename',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '英文品名',
        key: 'englishname',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '海关编码',
        key: 'customscode',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '材质',
        key: 'material',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '用途',
        key: 'usageing',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '品牌型号',
        key: 'brand',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'fba号码',
        key: 'fbanumber',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '货物追踪码',
        key: 'referenceid',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '销售链接',
        key: 'link',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '数量',
        key: 'quantity',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '单价',
        key: 'unitprice',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '总价',
        key: 'totalprice',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '入仓号',
        key: 'putcode',
        type: JVxeTypes.input,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '修改时间',
        key: 'updatetime',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '件数',
        key: 'jianshu',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'createtime',
        key: 'createtime',
        type: JVxeTypes.date,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      }
    ]
  })
  // 发货人信息
  export const clientInfoTable:any=  reactive({
    loading: false,
    dataSource: [],
    columns: [
      {
        title: '公司名字',
        key: 'companyname',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '公司联系人',
        key: 'companycontacts',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '电话',
        key: 'phone',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '住址',
        key: 'address',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '贸易类型',
        key: 'typetrade',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '发票号',
        key: 'invoicenumber',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '件数',
        key: 'numberpieces',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '入仓号',
        key: 'url',
        type: JVxeTypes.input,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '更新时间',
        key: 'updatetime',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '税金支付方',
        key: 'taxpayer',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'FTA产地证是否代办',
        key: 'fta',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '保险是否代买',
        key: 'agencycertificate',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '体积',
        key: 'volumeavg',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '公司省',
        key: 'sendprovince',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '公司市',
        key: 'sendcity',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'createtime',
        key: 'createtime',
        type: JVxeTypes.date,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      }
    ]
  })
  // 收货人信息
  export const clientaddressTable:any=  reactive({
    loading: false,
    dataSource: [],
    columns: [
      {
        title: '收货人公司',
        key: 'consigneecompany',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '联系人',
        key: 'contactperson',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '收货人电话',
        key: 'contactphone',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '邮箱',
        key: 'mailbox',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '仓库地址',
        key: 'warehouse',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '邮编',
        key: 'postcode',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '省',
        key: 'province',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '市',
        key: 'city',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '区',
        key: 'area',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '详细地址',
        key: 'detailedaddress',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: '入仓号',
        key: 'url',
        type: JVxeTypes.input,
        disabled: true,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'updatatime',
        key: 'updatatime',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'abn',
        key: 'abn',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      },
      {
        title: 'createtime',
        key: 'createtime',
        type: JVxeTypes.date,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: ''
      }
    ]
  })
 export const billAccountTable:any= reactive({
    loading: false,
    dataSource: [],
    columns: [
      {
        title: 'refCode',
        key: 'refCode',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: '',
      },
      {
        title: 'acName',
        key: 'acName',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: '',
      },
      {
        title: 'acPrice',
        key: 'acPrice',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: '',
      },
      {
        title: 'acRemarks',
        key: 'acRemarks',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: '',
      },
      {
        title: 'acClientid',
        key: 'acClientid',
        type: JVxeTypes.input,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: '',
      },
      {
        title: 'createdDate',
        key: 'createdDate',
        type: JVxeTypes.date,
        width: '200px',
        placeholder: '请输入${title}',
        defaultValue: '',
      },
    ],
  })