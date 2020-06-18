/*eslint-disable*/
import axios from 'axios'
import Vue from 'vue'

const sender = axios.create({
    // baseURL: process.env.hosturl,
    // withCredentials: true,
    headers: {
    'X-Requested-With': 'application/x-www-form-urlencoded'
    // 'originalUrl': location.href
    // 'Content-MD5': 'f5ec1fa61dbe9c62ddb3d13ef3b3380d'
    }
});
// sender.defaults.baseURL = process.env.hosturl
axios.defaults.timeout = 6000;
axios.defaults.withCredentials = true;
sender.defaults.baseURL = (process.env.NODE_ENV === 'production' ? '/' : '/');
//http://test.ares.duxiaoman-int.com
//http://test01.baidu.com  'http://10.157.28.240:8086'
// let loading = null;
sender.interceptors.request.use(function (config) {
    config.headers['originalUrl'] = location.href
    return config;
}, function (error) {
    return Promise.reject(error);
});

sender.interceptors.response.use(function (response) {
    if (response.data.code && response.data.code === 40001) {
        window.location.href = response.data.redirectUrl
    }
    return response;
}, function (error) {
        if(error){
            // if(loading!=null){
            //     loading.close();
            //     loading = null;
            // }
            Vue.prototype.$message({
                type:'error',
                message: error,
                showClose: true,
                duration: 1000,
                offset: 80
            });
        }
    // if (error.response.status === 401) {
    //     Vue.prototype.$confirm('登录状态失效，请刷新页面', '提示', {
    //         confirmButtonText: '确定',
    //         showCancelButton: false,
    //         type: 'warning'
    //     }).then(() => {
    //         location.reload();
    //     }).catch(() => { });
    //     return;
    // }
    return Promise.reject(error);
});

export const URLS = {
    // get 查询用户的角色
    'getOwnerRole': '/api/authority/isFbi',
    // 任务列表
    // 获取用户信息
    'getUserInfo': '/api/authority/uuap',
    // POST 查询任务列表
    'selectTaskList': '/api/task/selectTaskList',
    //  克隆任务
    'copyTask': '/api/task/copyTask',
    //  删除任务
    'deleteTask': '/api/task/deleteTask',
    // 测试任务
    'testTask': '/api/task/testTask',
    // 任务影响
    "taskAffect": "/api/task/taskAffect",
    // 任务详情
    "taskDetail": "/api/task/taskDetail",
    // 检查任务名称是否存在
    "taskNameCheck": "/api/task/taskNameCheck",
    

    /* 创建任务*/
    // 非FBI用户||FBI用户
    // POST 添加Hive计算任务
    'saveOrUpdateHiveComputeTask': '/api/remotetask/saveOrUpdateHiveComputeTask',
    // POST 导入任务, GP导入Hive任务
    'saveOrUpdateImportGPToHiveTask': '/api/importtask/saveOrUpdateImportGPToHiveTask',
    // POST 导出任务, Hive导入GP任务
    'saveOrUpdateImportHiveToGPTask':'/api/importtask/saveOrUpdateImportHiveToGPTask',
    // POST 导出任务, Hive导入Mysql任务
    'saveOrUpdateImportHiveToMysqlTask':'/api/importtask/saveOrUpdateImportHiveToMysqlTask',
    // POST 导入任务, 第三方Mysql导入Hive任务
    'saveOrUpdateImportThirdMysqlToHiveTask':'/api/importtask/saveOrUpdateImportThirdMysqlToHiveTask',


    // 添加QE计算任务
    'saveOrUpdateQeComputeTask': '/api/remotetask/saveOrUpdateQeComputeTask',
    // 添加GP计算任务 POST 
    'saveOrUpdateGpComputeTask': '/api/remotetask/saveOrUpdateGpComputeTask',
    // 添加远程Ares任务 POST 
    'saveOrUpdateRemoteTask': '/api/remotetask/saveOrUpdateRemoteTask',

    // 导入任务
    //  导入任务，非FBI用户Gp导入Gp任务
    'saveOrUpdateImportGpToGpNotFbiTask': '/api/importtask/saveOrUpdateImportGpToGpNotFbiTask',
    //  导入任务，非FBI用户Gp导入Qe任务
    'saveOrUpdateImportGpToQeNotFbiTask': '/api/importtask/saveOrUpdateImportGpToQeNotFbiTask',
    //  导入任务，非FBI用户Mysql导入Gp任务
    'saveOrUpdateImportMysqlToGpNotFbiTask': '/api/importtask/saveOrUpdateImportMysqlToGpNotFbiTask',
    //  导入任务，非FBI用户Mysql导入Qe任务
    'saveOrUpdateImportMysqlToQeNotFbiTask': '/api/importtask/saveOrUpdateImportMysqlToQeNotFbiTask',

    //  导入任务, 第三方Gp导入Gp任务
    'saveOrUpdateImportThirdGpToGpTask': '/api/importtask/saveOrUpdateImportThirdGpToGpTask',
    //  导入任务, 第三方mysql导入Gp任务
    'saveOrUpdateImportThirdMysqlToGpTask': '/api/importtask/saveOrUpdateImportThirdMysqlToGpTask',
    //  导入任务, 第三方Mysql导入Qe任务
    'saveOrUpdateImportThirdMysqlToQeTask': '/api/importtask/saveOrUpdateImportThirdMysqlToQeTask',
    //  导入任务, 第三方Qe导入Gp任务
    'saveOrUpdateImportThirdQeToGpTask': '/api/importtask/saveOrUpdateImportThirdQeToGpTask',

    //  添加mysql分库导入GP任务 POST 
    'saveOrUpdateImportMultiMysqlToGpTask': '/api/importtask/saveOrUpdateImportMultiMysqlToGpTask',

    // 导出任务

    //  导出任务，非FBI用户GP导出Mysql任务
    'saveOrUpdateExportGpToMysqlNotFbiTask': '/api/exporttask/saveOrUpdateExportGpToMysqlNotFbiTask',
    //  导入任务, GP导出Mysql任务
    'saveOrUpdateExportGpToMysqlTask': '/api/exporttask/saveOrUpdateExportGpToMysqlTask',
    //  导出任务, Gp导入Qe任务
    'saveOrUpdateExportGpToQeTask': '/api/exporttask/saveOrUpdateExportGpToQeTask',
    //  导出任务，非FBI用户QE导出GP任务
    'saveOrUpdateExportQEToGPNotFbiTask': '/api/exporttask/saveOrUpdateExportQEToGPNotFbiTask',
    //  导出任务，非FBI用户QE导出Mysql任务
    'saveOrUpdateExportQeToMysqlNotFbiTask': '/api/exporttask/saveOrUpdateExportQeToMysqlNotFbiTask',
    //  导出任务, Qe导入Mysql任务
    'saveOrUpdateExportQeToMysqlTask': '/api/exporttask/saveOrUpdateExportQeToMysqlTask',

    // POST 查询队列 及所有集群信息
    "getQueue": "/api/queue/getQueue",
    // POST 获取giano组队列信息
    "getGianoQueue": "/api/gianoqueue/getGianoQueue",

    // 依赖树
    "getConditionTree": "api/task/conditionTree",
    // "getConditionTree": "/api/logs/getConditionTree",
    // sql历史版本列表
    "taskHistoryVersionList": "/api/historyVersion/taskHistoryVersionList",

    // POST 历史版本详情
    "taskHistoryVersion": "/api/historyVersion/taskHistoryVersion",
     
    //  任务列表 批量管理 修改任务授权人
    'changeTaskAuthority': "/api/taskmanage/changeTaskAuthority",
    //  任务列表 批量管理 修改任务邮件通知信息
    'changeTaskMail': "/api/taskmanage/changeTaskMail",
    //  任务列表 批量管理 修改任务所有者
    'changeTaskOwner': "/api/taskmanage/changeTaskOwner",
    //  任务列表 批量管理 修改任务短信通知信息
    'changeTaskPhone': "/api/taskmanage/changeTaskPhone",
    //  任务列表 批量管理 修改任务电话通知信息
    'changeTaskTelePhone': "/api/taskmanage/changeTaskTelephone",
    // 查询批次列表
    'getRunInfoList': '/api/runinfo/getRunInfoList',
    // 杀死批次
    'killBatch': '/api/runinfo/killBatch',
    // 重跑批次
    'rerunBatch': '/api/runinfo/rerunBatch',
    // 查看执行命令
    'getCommand': '/api/logs/getCommand',
    // 产看日志
    'getLogs': '/api/logs/getLogs',
    // 查询回溯列表
    'getBacktrackList': '/api/backtrack/getBacktrackList',
    // 终止回溯
    'killTaskBranchBackTrack': '/api/backtrack/killTaskBranchBackTrack',
    // 添加树形回溯
    'addTaskBranchBackTrack': '/api/backtrack/addTaskBranchBackTrack',
    // 获取高级回溯依赖树
    'getTaskConditionDown': '/api/backtrack/getTaskConditionDown',
    // 查询白名单列表
    'getWhiteList': '/api/whitelist/getWhiteList',
    // 审核白名单邮件
    'addWhiteListAudit': '/api/whitelist/addWhiteListAudit',
    // 审核白名单处理
    'addWhiteListActive': '/api/whitelist/addWhiteListActive',
    // 添加白名单信息
    'addWhiteList': '/api/whitelist/addWhiteList',
    // 删除白名单
    'delWhiteList': '/api/whitelist/delWhiteList',
    // 查询账号列表
    'getAccountList': '/api/account/getAccountList',
    // 账号操作
    'saveAccount': '/api/account/saveAccount'
};

function resolveData(response) {
    // if (loading != null) {
    //     loading.close();
    //     loading = null;
    // }
    return new Promise((resolve,reject) => {
        resolve(response.data);
    }).catch(error => console.log(error));
}

const api = {
    // Get请求
    get(name, params = {}) {
        let url = URLS[name] || name;
        if (!url) return Promise.reject('没有填请求的url');
        // if (url === '/api/authority/isFbi'){
        //     url = url + '/' + params.id
        // }
        const method = 'get';
        // if (loading == null){
        //     loading = Vue.prototype.$loading({
        //         lock: true,
        //         text: 'Loading',
        //         spinner: 'el-icon-loading',
        //         background: 'rgba(0, 0, 0, 0.7)'
        //     });
        // }
        return new Promise((resolve,reject)=> {
            sender[method](url, {params: params, dataType: 'json' })
            .then(response => {
                // resolveData(response);
                // if (loading != null) {
                //     loading.close();
                //     loading = null;
                // }
                resolve(response.data);
            }).catch(error => {
                reject(error);
                console.log(error)
            });
        })
    },
    // Post请求
    post(name, params = {}) {
        const url = URLS[name] || name;
        if (!url) return Promise.reject('没有填请求的url');
        const method = 'post';
        // if (loading == null) {
        //     loading = Vue.prototype.$loading({
        //         lock: true,
        //         text: 'Loading',
        //         spinner: 'el-icon-loading',
        //         background: 'rgba(0, 0, 0, 0.7)'
        //     });
        // }
        return new Promise((resolve,reject)=> {
            sender[method](url, params, { dataType: 'json', emulateJSON: false })
            .then(response => {
                // resolveData(response);
                // if (loading != null) {
                //     loading.close();
                //     loading = null;
                // }
                resolve(response.data);
            }).catch(error => {
                reject(error);
                console.log(error);
            });
        });
    },
    // push请求
    push(name, params = {}) {
        const url = URLS[name] || name;
        if (!url) return P.reject('没有填请求的url');
        const method = 'push';
        return sender[method](url, params, { dataType: 'json' }).then(response => {
            return resolveData(response);
        }).catch(error => P.reject(error));
    },
    // delete请求
    delete(name, params = {}) {
        const url = URLS[name] || name;
        if (!url) return P.reject('没有填请求的url');
        const method = 'delete';
        return sender[method](url, params, { dataType: 'json' }).then(response => {
            return resolveData(response);
        }).catch(error => P.reject(error));
    }
};
Plugin.install = function (Vue) {
    // Vue.axios = _axios;
    // window.axios = _axios;
    Vue.api = api;
    window.api = api;
    Object.defineProperties(Vue.prototype,
        {   
            api: {
                get(){
                    return api
                }
            }
        }
        // {
        //     axios: {
        //         get() {
        //             return _axios;
        //         }
        //     },
        //     $axios: {
        //         get() {
        //             return _axios;
        //         }
        //     },
        // }
    );
};

Vue.use(Plugin);
export default Plugin;
