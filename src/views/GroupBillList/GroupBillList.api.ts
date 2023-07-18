import { defHttp } from '/@/utils/http/axios';
export const Api= {
    list: '/billAccount/groupBill/list',
    add: "/billAccount/groupBill/add",
    edit: "/billAccount/groupBill/edit",
    exportXlsUrl:"/billAccount/groupBill/exportXls",
    billAccount:{
        list: '/billAccount/groupBill/queryBillAccountByMainId'
      },
      billLog:{
        list: '/billAccount/groupBill/queryBillLogByMainId'
      },
      goodsSize:{
        list: '/billAccount/groupBill/queryGoodsSizeByMainId'
      },
      clientGoods: {
        list: '/billAccount/groupBill/queryClientGoodsByMainId'
      },
      clientInfo: {
        list: '/billAccount/groupBill/queryClientInfoByMainId'
      },
      clientaddress: {
        list: '/billAccount/groupBill/queryClientaddressByMainId'
      },
      getImportUrl: '/front/InputOrderList'
  }
 
export const list = (params) => {
    return defHttp.get({ url: Api.list, params });
}
export const saveOrUpdateMenu = (params, isUpdate) => {
    let url = isUpdate ? Api.edit : Api.add;
    return defHttp.post({ url: url, params });
  };
  export const getExportUrl = Api.exportXlsUrl;
  export const getImportUrl = Api.getImportUrl;