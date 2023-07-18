export  const url={
    list: '/system/freightContainerSea/list',
    delete: '/system/freightContainerSea/delete',
    deleteBatch: '/system/freightContainerSea/deleteBatch',
    exportXlsUrl: '/system/freightContainerSea/exportXls',
    importExcelUrl: 'system/freightContainerSea/importExcel',
    add: "/system/freightContainerSea/add",
    edit: "/system/freightContainerSea/edit",
    
}
import { defHttp } from '/@/utils/http/axios';
export const list = (params) => {
    return defHttp.get({ url: url.list, params });
}
export const saveOrUpdateMenu = (params, isUpdate) => {
    let apiurl = isUpdate ? url.edit : url.add;
    return defHttp.post({ url: apiurl, params });
  };