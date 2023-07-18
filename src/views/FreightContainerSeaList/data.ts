import { BasicColumn, FormSchema } from '/@/components/Table';
export const formSchema: FormSchema[] = [
 
    {
        field: 'totalCbm',
        label: '总体积',
        colProps: { span: 12 },
        component:"InputNumber"
    },
    {
        field: 'totalKg',
        label: '总重量',
        colProps: { span: 12 },
        component:"InputNumber"
    },
    {
        field: 'totalValue',
        label: '总货值',
        colProps: { span: 12 },
        component:"InputNumber"
    },
    {
        field: 'totalNum',
        label: '总件数',
        colProps: { span: 12 },
        component:"InputNumber"
    },
    {
        field: 'totalNum',
        label: '总件数',
        colProps: { span: 12 },
        component:"InputNumber"
    },
    {
        field: 'etd',
        label: 'etd',
        colProps: { span: 12 },
        component:"DatePicker"
    },
    {
        field: 'eta',
        label: 'eta',
        colProps: { span: 12 },
        component:"DatePicker"
    },
    {
        field: 'staPort',
        label: '启运港',
        colProps: { span: 12 },
       
    },
    {
        field: 'endPort',
        label: '目的港',
        colProps: { span: 12 },
       
    },
  
    {
        field: 'warehouseAddress',
        label: '仓库',
        colProps: { span: 12 },
    },
    {
        field: 'oceanBill',
        label: 'oceanBill',
        colProps: { span: 12 },
    },
    {
        field: 'vesselId',
        label: 'vesselId',
        colProps: { span: 12 },
    },
    {
        field: 'voyage',
        label: 'voyage',
        colProps: { span: 12 },
    },
    {
        field: 'container',
        label: 'container',
        colProps: { span: 12 },
    },
    {
        field: 'seal',
        label: 'seal',
        colProps: { span: 12 },
    },
    {
        field: 'vesselName',
        label: 'vesselName',
        colProps: { span: 12 },
    },
    {
        field: 'containerState',
        label: 'containerState',
        colProps: { span: 12 },
    },
    {
        field: 'createdDate',
        label: 'createdDate',
        colProps: { span: 12 },
        component:"DatePicker"
    },
]
export const searchFormSchema: FormSchema[] = [
    {
        field: 'etdTime',
        label: 'etd',
        component: 'RangePicker',
        componentProps: {
          valueType: 'Date'
        },
        colProps: { span: 12 },
    },
    {
        field: 'etaTime',
        label: 'eta',
        component: 'RangePicker',
        componentProps: {
          valueType: 'Date'
        },
        colProps: { span: 12 },
    },
    {
        field: 'staPort',
        label: '启运港', 
    },
    {
        field: 'endPort',
        label: '目的港', 
    },    {
        field: 'warehouseAddress',
        label: '目的港', 
    },
    {
        field: 'oceanBill',
        label: 'oceanBill', 
    },
    {
        field: 'voyage',
        label: 'voyage', 
    },
    {
        field: 'container',
        label: 'container', 
    },
    {
        field: 'vesselName',
        label: 'vesselName', 
    },
    {
        field: 'createdDate',
        label: 'createdDate',
        component: 'RangePicker',
        componentProps: {
          valueType: 'Date'
        },
        colProps: { span: 12 },
    },
]
export const columns: BasicColumn[] = [
    {
        title: '总体积',
        align: 'center',
        sorter: true,
        dataIndex: 'totalCbm'
    },
    {
        title: '总重量',
        align: 'center',
        sorter: true,
        dataIndex: 'totalKg'
    },
    {
        title: '总货值',
        align: 'center',
        sorter: true,
        dataIndex: 'totalValue'
    },
     
    {
        title: 'etd',
        align: 'center',
        sorter: true,
        dataIndex: 'etd',
        customCell: function (text: any) {
            return !text ? '' : text.length > 10 ? text.substr(0, 10) : text
        }
    },
    {
        title: 'eta',
        align: 'center',
        sorter: true,
        dataIndex: 'eta',
        customCell: function (text: any) {
            return !text ? '' : text.length > 10 ? text.substr(0, 10) : text
        }
    },
    {
        title: '启运港',
        align: 'center',
        sorter: true,
        dataIndex: 'staPort'
    },
    {
        title: '目的港',
        align: 'center',
        sorter: true,
        dataIndex: 'endPort'
    },
    {
        title: '仓库',
        align: 'center',
        sorter: true,
        dataIndex: 'warehouseAddress'
    },
    {
        title: 'oceanBill',
        align: 'center',
        sorter: true,
        dataIndex: 'oceanBill'
    },
    {
        title: 'vesselId',
        align: 'center',
        sorter: true,
        dataIndex: 'vesselId'
    },
    {
        title: 'voyage',
        align: 'center',
        sorter: true,
        dataIndex: 'voyage'
    },
    {
        title: 'container',
        align: 'center',
        sorter: true,
        dataIndex: 'container'
    },
    {
        title: 'seal',
        align: 'center',
        sorter: true,
        dataIndex: 'seal'
    },
    {
        title: 'vesselName',
        align: 'center',
        sorter: true,
        dataIndex: 'vesselName'
    },
    {
        title: 'containerState',
        align: 'center',
        sorter: true,
        dataIndex: 'containerState'
    },
    {
        title: 'createdDate',
        align: 'center',
        sorter: true,
        dataIndex: 'createdDate',
        customCell: function (text: any) {
            return !text ? '' : text.length > 10 ? text.substr(0, 10) : text
        }
    },

]