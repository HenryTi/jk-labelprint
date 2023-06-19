// import { MyUqApp } from "App/MyUqApp";
// import { GLOABLE } from "global";
// import _ from "lodash";
// import moment from "moment";
// import { PageStore } from "tonwa-uq-com";
// import { UQs } from "uqs";
// import { proxy } from "valtio";
// import { BoxId } from "../../../tonwa-uq/uqCore/boxId";
// import { ActParamDxLabelTemplate } from "uqs/JkLabelprint";
import { Gen } from "app/tool";
import { getAtomValue } from "tonwa-com";
import { ActParamDxLabelTemplate } from "uqs/UqDefault";

interface State {
    labelTemplates: any[] /* 标签模板列表 */;
    labelPrintTask: any[] /* 标签待打印任务列表 */;
    currPrintTask: any /* 当前任务 */;
    labelPrintTaskPrinted: any[] /* 历史打印任务 */;
    bottleLabelTemplate: any[] /* 瓶与标签尺寸的关系 */;
    bottleListInfo: any[] /* 所有瓶信息 */;
    labelTemplateList: any[] /* 所有标签信息 */;
    users: any[] /* 用户角色及部门等信息 */;
    branchs: any[] /* 所有部门信息 */
    allRoles: any[] /* 所有角色信息 */
}
export class StoreTemplate extends Gen {
    tab: string = "";   // maybe 'me'
    /*
    constructor(param?:any){
        super();
        let { tab } = param || {};
        // console.log('tab-a',tab);
        this.tab = tab;
    }
    */

    labelTemplates: any[] /* 标签模板列表 */;
    labelPrintTask: any[] /* 标签待打印任务列表 */;
    currPrintTask: any /* 当前任务 */;
    labelPrintTaskPrinted: any[] /* 历史打印任务 */;
    bottleLabelTemplate: any[] /* 瓶与标签尺寸的关系 */;
    bottleListInfo: any[] /* 所有瓶信息 */;
    labelTemplateList: any[] /* 所有标签信息 */;
    users: any[] /* 用户角色及部门等信息 */;
    branchs: any[] /* 所有部门信息 */
    allRoles: any[] /* 所有角色信息 */

    async init() {
        if (this.tab !== "me") {
            this.labelTemplates = await this.getLabelTemplate();
            this.labelPrintTask = await this.getLabelPrintTask();
        }
    }

    private async loadInstance(tasks: any[]) {
        let getCurTaskLabelTemplate = this.getCurTaskLabelTemplate;
        let promise: PromiseLike<any>[] = tasks.map((el: any) => {
            return (async function () {
                let data = await getCurTaskLabelTemplate(el.id);
                el.labelInstance = data;
                el.labelTemplate = data?.labelTemplate;
            })();
        });
        await Promise.all(promise);
    }

    /**
     * 获取 待打印任务
     */
    getLabelPrintTask = async () => {
        let pendingPrintTask: any[] =
            await this.uq.GetLabelPrintTaskPending.table({});
        await this.loadInstance(pendingPrintTask);
        /*
        let getCurTaskLabelTemplate = this.getCurTaskLabelTemplate;
        let promise: PromiseLike<any>[] = pendingPrintTask.map((el: any) => {
            return (async function () {
                let data = await getCurTaskLabelTemplate(el.id);
                el.labelInstance = data;
                el.labelTemplate = data?.labelTemplate;
            })();
        });
        await Promise.all(promise);
        */
        return pendingPrintTask;
        // this.state.labelPrintTask = pendingPrintTask;
        // console.log(pendingPrintTask, "++++++++++++++labelPrintTask++++++++++++++");
    };

    /**
     * 获取任务的模板及实例
     */
    getCurTaskLabelTemplate = async (taskId: number) => {
        let getCurLabelTemplate: any =
            await this.uq.GetLabelInstance.obj({
                labelPrintTask: taskId,
            });
        if (!getCurLabelTemplate) return;
        let { labelTemplate } = getCurLabelTemplate;
        /* 获取模板详情 */
        /* let getlabelTemplates: any[] = await this.getLabelTemplate(
            labelTemplate
        ); */
        // if (getlabelTemplates.length)
        //     getCurLabelTemplate.labelTemplate = getlabelTemplates[0];
        getCurLabelTemplate.labelTemplate = this.labelTemplates.find((el: any) => el.id === labelTemplate);
        return getCurLabelTemplate;
    };

    /**
     * 获取当前打印任务的其他信息
     */
    getPrintTaskDataInfo = async (labelPrintTask: any) => {
        if (!labelPrintTask) return;
        // let { JkLabelprint } = this.uqs;
        let { id, labelTemplate } = labelPrintTask;
        let getDxLabelTemplateData: any[] = await this.getDxLabelTemplates(
            labelTemplate?.id
        );
        let getTaskContent: any[] = await this.uq.ID({
            IDX: this.uq.LabelPrintTask,
            id: id,
        });

        // let getTaskContentInstance: any[] = await JkLabelprint.ID({
        let LabelInstance: any[] = await this.uq.ID({
            IDX: this.uq.LabelInstance,
            id: getTaskContent[0]?.instance,
        });

        let LabelInstanceContent: any[] = await this.uq.ID({
            IDX: this.uq.LabelInstanceContent,
            id: getTaskContent[0]?.instance,
        });

        let dxLabelTemplateData: any = getDxLabelTemplateData[0];
        if (dxLabelTemplateData && dxLabelTemplateData.typeSetting) {
            let { typeSetting } = dxLabelTemplateData;
            let typeSettings: any[] = await this.getLabelTypeSetting(
                typeSetting
            );
            dxLabelTemplateData.typeSetting = typeSettings[0] || typeSetting;
        }
        labelPrintTask.printTaskContent = {
            ...LabelInstance[0],
            ...LabelInstanceContent[0],
        };
        labelPrintTask.dxLabelTemplate = dxLabelTemplateData;
        this.currPrintTask = labelPrintTask;
    };

    /**
     * 打印任务完成后,提交
     * @param id(当前打印单的id)
     * @param result(1表示当前打印任务已完成, 0  )
     * @returns
     */
    subLabelPrintTaskFinish = async (taskId: number, result: number = 1) => {
        await this.uq.SubLabelPrintTaskFinish.submit({
            id: taskId,
            result,
        });
    };

    /**
     * 获取历史打印任务, 是否分类,是否分页 尚未确定
     * 分页功能不完善,暂时显示100条数据
     * @param void
     */
    getLabelPrintTaskPrinted = async () => {
        const { $page: printTaskPrinted } =
            await this.uq.GetLabelPrintTaskPrinted.page(
                {},
                Infinity,
                100
            );
        // const  {$page: printTaskPrinted}  = await this.uq.GetLabelPrintTaskPrinted.page({}, Infinity, 1);
        // const  res  = await this.uq.GetLabelPrintTaskPrinted.page({}, Infinity, 100);
        /* const [{ xi }] =  await this.uq.IX({IX: this.uq.LabelPrintTaskSource, ix: 236});
        const res = await this.uq.ID({IDX: this.uq.Request, id: xi}); */
        /*
        let getCurTaskLabelTemplate = this.getCurTaskLabelTemplate;
        let promise: PromiseLike<any>[] = printTaskPrinted.map((el: any) => {
            return (async function () {
                let data = await getCurTaskLabelTemplate(el.id);
                el.labelInstance = data;
                el.labelTemplate = data?.labelTemplate;
            })();
        });
        await Promise.all(promise);
        */
        this.loadInstance(printTaskPrinted);
        this.labelPrintTaskPrinted = printTaskPrinted;
    };

    /**
     * GetBottleLabelTemplate 获取标签尺寸与瓶关系
     * @param bottle (number | undefined)
     * @returns [{}, {}] 瓶子与标签关系
     */
    getBottleLabelTemplate = async (
        bottle: number = undefined,
        type: number = undefined
    ) => {
        const res = await this.uq.GetBottleLabelTemplate.table({
            bottle,
            type,
        });
        // type: EnumBottleTemplateType.bottleoverPack
        const map = new Map();
        res.reduce((prev, curv) => {
            if (!prev.has(curv.id)) {
                const tempObj: any = { label: [] };
                const label: any = {};
                for (let [key, value] of Object.entries(curv)) {
                    if (
                        key === "id" ||
                        key === "code" ||
                        key === "name" ||
                        key === "description"
                    ) {
                        tempObj[key] = value;
                    } else {
                        label[key] = value;
                    }
                }
                tempObj.label.push(label);
                prev.set(curv.id, tempObj);
            } else {
                const label: any = {};
                for (let [key, value] of Object.entries(curv)) {
                    if (
                        key !== "id" &&
                        key !== "code" &&
                        key !== "name" &&
                        key !== "description"
                    ) {
                        label[key] = value;
                    }
                }
                prev.get(curv.id).label.push(label);
            }
            return prev;
        }, map);
        this.bottleLabelTemplate = Array.from(map.values());
        return Array.from(map.values());
    };

    /**
     * getBottleInfo 获取瓶信息列表
     * @param info (模糊查询: code/name/description)
     */
    getBottleInfo = async (info: string) => {
        const bottleListInfo =
            await this.uqApp.uqs.JkRDProduct.SearchPackBottleByKey.table({
                key: info,
            });
        /* const bottleListInfo = await this.uqs.JkRDProduct.ID({
            IDX: this.uqs.JkRDProduct.PackBottle,
            id: undefined,
        }); */
        this.bottleListInfo = bottleListInfo;
        return bottleListInfo;
    };

    /**
     * getLabelTemplateList 获取标签模板及扩展信息
     * @param void
     */
    getLabelTemplateList = async () => {
        /* let { JkLabelprint } = this.uqs;
        let LabelTemplate: any[] = await JkLabelprint.ID({
            IDX: JkLabelprint.LabelTemplate,
            id: undefined,
        });
        let DxLabelTemplate: any[] = await JkLabelprint.ID({
            IDX: JkLabelprint.DxLabelTemplate,
            id: undefined,
        }); */
        let LabelTemplate: any[] = await this.getLabelTemplate();
        let DxLabelTemplate: any[] = await this.getDxLabelTemplates();
        let map: any = new Object();
        LabelTemplate.forEach((v) => {
            map[v.id] = v;
        });
        DxLabelTemplate.forEach((v) => {
            let key = v.id;
            map[key] = Object.assign(map[key], v);
        });

        this.labelTemplateList = Object.values(map);
    };

    /**
     * actBottleAndLabelTemplateRelation 增加/删除标签与瓶关联关系
     * @param bottleId 瓶 id
     * @param lableId  标签 id 为负数时,为删除操作
     */
    actBottleAndLabelTemplateRelation = async (
        bottleId: number,
        labelId: number | number[]
    ) => {
        if (typeof labelId === "number") {
            await this.uq.Acts({
                bottleLabelTemplate: [{ ix: bottleId, xi: labelId }],
            });
        } else {
            await this.uq.Acts({
                bottleLabelTemplate: [
                    ...labelId.map((id) => ({ ix: bottleId, xi: id })),
                ],
            });
        }
    };

    /**
     * actOverPackAndLabelTemplateRelation 增加/删除标签与外套包装关联关系
     * @param bottleId 瓶 id
     * @param labelId lableId  标签 id 为负数时,为删除操作
     */
    actOverPackAndLabelTemplateRelation = async (
        bottleId: number,
        labelId: number | number[]
    ) => {
        if (typeof labelId === "number") {
            await this.uq.Acts({
                bottleOverPackLabelTemplate: [{ ix: bottleId, xi: labelId }],
            });
        } else {
            await this.uq.Acts({
                bottleOverPackLabelTemplate: [
                    ...labelId.map((id) => ({ ix: bottleId, xi: id })),
                ],
            });
        }
    };

    /**
     * 获取模板
     */
    getLabelTemplate = async (param?: any, order: "desc" | "asc" = "desc") => {
        param =
            !(param instanceof Array) && param !== undefined ? [param] : param;
        return await this.uq.ID({
            IDX: this.uq.LabelTemplate,
            id: param,
            order: order,
        });
    };

    /**
     * 获取标签模板的扩展信息
     */
    getDxLabelTemplates = async (
        param?: any,
        order: "desc" | "asc" = "desc"
    ) => {
        param =
            !(param instanceof Array) && param !== undefined ? [param] : param;
        return await this.uq.ID({
            IDX: this.uq.DxLabelTemplate,
            id: param,
            order: order,
        });
    };

    /**
     * 新增/删除一个标签
     * @param label 标签基本信息 
     */
    actLabelTemplate = async (label: any) => {
        const { id, name, description } = label;
        return await this.uq.Acts({
            labelTemplate: [{
                name,
                description,
            }]
        })
    }

    /**
     * 新增/删除一个标签的扩展信息
     * @param label 
     */
    actDxLabelTemplate = async (label: ActParamDxLabelTemplate) => {
        const { dxLabelTemplate } = await this.uq.Acts({
            dxLabelTemplate: [{ ...label }]
        })
        return dxLabelTemplate;
    }

    /**
     * 获取包装瓶(接口需要更新, 包装瓶前端好似还没需要的地方,可以暂时不处理)  数据库 rdproduct
     */
    getBottle = async (param?: any, order: "desc" | "asc" = "desc") => {
        param =
            !(param instanceof Array) && param !== undefined ? [param] : param;
        let res: any[] = [];

        return res;
        // return await this.uq.ID({ IDX: this.uq.Bottle, id: param, order: order });
    };

    /**
     * 获取模板的TypeSetting
     */
    getLabelTypeSetting = async (
        param?: any,
        order: "desc" | "asc" = "desc"
    ) => {
        param =
            !(param instanceof Array) && param !== undefined ? [param] : param;
        if (param && param.length) return [];
        return await this.uq.ID({
            IDX: this.uq.LabelTypeSetting,
            id: param,
            order: order,
        });
    };

    /* getBottleLabelTemplate = async (param: any = [], order: 'desc' | 'asc' = "desc") => {
        param = !(param instanceof Array) && param !== undefined ? [param] : param;
        if (!param) return [];
        return await this.uq.IX({ IX: this.uq.BottleLabelTemplate, ix: param, order: order });
    }; */

    /**
     * 提交打印任务（完成打印）-- 存在问题,打印份数不足时，是否只修改数量，不删除任务 但如何确定份数
     */
    saveLabelPrintTaskPrinted = async (param: any) => {
        let { id, comments } = param;
        let user = getAtomValue(this.uqApp.user);
        let param2: any = {
            id: id,
            result: 1,
            comments: comments,
            printer: user.id,
            printDate: 'print date moment()', // moment().format("YYYY-MM-DD HH:mm:ss"),
        };
        await this.uq.Acts({
            labelPrintTaskPending: [{ id: -1 * id }],
            labelPrintTaskPrinted: [param2],
        });
    };

    /**
     * 微调内容
     */
    saveLabelInstanceContent = async (param: any) => {
        if (param) this.currPrintTask.printTaskContent = param;
        param = !(param instanceof Array) ? [param] : param;
        await this.uq.Acts({ labelInstanceContent: param });
    };

    /**
     * 废弃
     */
    getDetails = async (bottle: number, language: number) => {
        let result: any = {
            bottle: bottle,
            labelTemplate: undefined,
            dxLabelTemplate: undefined,
            labelSize: undefined,
            typeSetting: undefined,
        };
        if (!bottle) return result;
        let getBottles: any[] = await this.getBottle(bottle);
        result.bottle = getBottles.length ? getBottles[0] : bottle;
        /* 据bottle 查询对应的模板 */
        let getBottleLabelTemplate: any; // = await this.uq.GetBottleLabelTemplate.obj({ bottle: bottle, language: language, isSolvent: isSolvent });
        if (!getBottleLabelTemplate) return result;
        /* 获取模板详情 */
        let { labelTemplate } = getBottleLabelTemplate;
        let getlabelTemplates: any[] = await this.getLabelTemplate(
            labelTemplate
        );
        result.labelTemplate = getlabelTemplates[0];
        /* 获取模板的扩展信息 */
        let getDxLabelTemplateData: any[] = await this.getDxLabelTemplates(
            labelTemplate
        );
        if (!getDxLabelTemplateData.length) return result;
        result.dxLabelTemplate = getDxLabelTemplateData[0];
        let { size, typeSetting } = getDxLabelTemplateData[0];
        let typeSettings: any[] = await this.getLabelTypeSetting(typeSetting);
        result.typeSetting = typeSettings[0];
        return result;
    };

    /**
     * 获取所有用户权限及用户信息
     * getAllUserRoleAndUserInfo
     */
    getAllUserRoleAndUserInfo = async () => {
        // 获取角色、人员、部门关系表
        const roles = await this.uq.ID({
            IDX: this.uq.DxUserRole,
            id: undefined,
        });
        // 获取人员信息
        const users = await this.searchUserByKey();
        const branchs = await this.getUserBranch();
        const allRoles = await this.getAllRoles();

        roles.map((role) => {
            const ROLE = allRoles.find((R) => R.id === role.role);
            const BRANCH = branchs.find((B) => B.id === role.branch);
            // 角色中文描述合并到当前 role
            if (ROLE) {
                Object.assign(role, { roleDescription: ROLE.description });
            }
            // 部门中文描述合并到当前 role
            if (BRANCH) {
                Object.assign(role, { branchName: BRANCH.name });
            }
            return role;
        });
        users.map((user) => {
            const ROLE = roles.find((role) => user.id === role.user);
            if (ROLE) {
                Object.assign(user, {
                    dxId: ROLE.id,
                    roleDescription: ROLE.roleDescription,
                    roleId: ROLE.role,
                    branchName: ROLE.branchName,
                    branchId: ROLE.branch
                });
            }
            return user;
        });

        this.allRoles = allRoles;
        this.branchs = branchs;
        this.users = users;
    };

    /**
     * 根据ID获取用户信息
     * @param key userId
     */
    searchUserByKey = async (key: string = undefined) => {
        return await this.uq.SearchUserByKey.table({ key });
    };

    /**
     * 根据user id 获取用户部门
     */
    getUserBranch = async () => {
        return await this.uq.ID({
            IDX: this.uq.Branch,
            id: undefined,
        });
    };

    /**
     * 获取所有角色信息表
     */
    getAllRoles = async () => {
        return await this.uq.ID({
            IDX: this.uq.Roles,
            id: undefined,
        });
    };

    /**
     * 修改当前用户的角色信息
     * @param role object {id, user, role, branch}
     */
    updateRolePermissions = async (role: any) => {
        return await this.uq.Acts({
            dxUserRole: [{ ...role }],
        });
    }
}
/*
class Product {
    readonly uqApp: UqApp;
    id: number;

    state: { brand: any; props: any } = {
        brand: undefined,
        props: undefined,
    };

    constructor(uqApp: UqApp, id: number | BoxId) {
        this.uqApp = uqApp;
        this.id = typeof id === "number" ? id : id.id;
    }

    async loadListItem() {
        await this.loadBase();
        await this.loadBrand();
    }

    async loadBase() {
        if (this.state.props) return;
        let currentSalesRegion: number = GLOABLE.SALESREGION_CN.id;
        let ret = await this.uqApp.uqs.JkProduct.GetAvailableProductById.obj({
            product: this.id,
            salesRegion: currentSalesRegion,
        });
        this.state.props = ret;
    }

    private async loadBrand() {
        if (this.state.brand) return;
        // JkProduct 中没有了 Brand, 后续处理
        // let ret = await this.uqs.JkProduct.Brand.load(
        //     this.state.props?.brand?.id
        // );
        // this.state.brand = ret;
    }
}
*/