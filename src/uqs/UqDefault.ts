//=== UqApp builder created on Wed Jun 14 2023 11:02:02 GMT-0400 (Eastern Daylight Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqID, UqIX, UqQuery, UqAction, UqIDX } from "tonwa-uq";
// eslint-disable-next-line @typescript-eslint/no-unused-vars


//===============================;
//======= UQ 百灵威系统工程部/labelprint ========;
//===============================';

export interface ID {
    id?: number;
}

export interface IDX {
    id: number;
}

export interface IX {
    ix: number;
    xi: number;
}

export enum EnumID {
	$phrase = '$phrase',
	LabelTemplate = 'labeltemplate',
	LabelTypeSetting = 'labeltypesetting',
	bottleLightSensitiveConfig = 'bottlelightsensitiveconfig',
	Request = 'request',
	labelPrintTask = 'labelprinttask',
	labelInstance = 'labelinstance',
	Roles = 'roles',
	Branch = 'branch',
	User = 'user',
}

export interface $phrase extends ID {
	name: string;
	caption: string;
	base: number;
	valid: number;
	owner: number;
	type: number;
}

export interface $phraseInActs extends ID {
	ID?: UqID<any>;
	name: string;
	caption: string;
	base: number;
	valid: number;
	owner: number;
	type: number;
}

export interface $ixphrase extends IX {
	type: number;
}

export interface Param$role_My {
}
export interface Return$role_MySites {
	id: number;
	site: number;
	admin: number;
	entity: string;
	assigned: string;
	def: number;
}
export interface Return$role_MyRoles {
	site: number;
	role: string;
}
export interface Return$role_MyPermits {
	site: number;
	permit: string;
}
export interface Result$role_My {
	sites: Return$role_MySites[];
	roles: Return$role_MyRoles[];
	permits: Return$role_MyPermits[];
}

export interface Param$role_Site_Users {
	site: number;
}
export interface Return$role_Site_UsersUsers {
	id: number;
	user: number;
	admin: number;
	assigned: string;
	name: string;
	nick: string;
	icon: string;
	addBy: number;
}
export interface Return$role_Site_UsersRoles {
	user: number;
	role: string;
}
export interface Result$role_Site_Users {
	users: Return$role_Site_UsersUsers[];
	roles: Return$role_Site_UsersRoles[];
}

export interface Param$role_Site_Add_Admin {
	site: number;
	user: number;
	admin: number;
	assigned: string;
}
export interface Result$role_Site_Add_Admin {
}

export interface Param$role_Site_Del_Admin {
	site: number;
	user: number;
	admin: number;
}
export interface Result$role_Site_Del_Admin {
}

export interface Param$role_Site_Add_User {
	site: number;
	user: number;
	assigned: string;
}
export interface Result$role_Site_Add_User {
}

export interface Param$role_Site_User_Role {
	site: number;
	user: number;
	action: string;
	role: string;
}
export interface Result$role_Site_User_Role {
}

export interface Param$role_Site_Quit_Owner {
	site: number;
}
export interface Result$role_Site_Quit_Owner {
}

export interface Param$sites {
}
export interface Return$sites$page {
	id: number;
	no: string;
	ex: string;
}
export interface Result$sites {
	$page: Return$sites$page[];
}

export interface Param$setSite {
	site: number;
}
export interface Result$setSite {
}

export interface Param$poked {
}
export interface Return$pokedRet {
	poke: number;
}
export interface Result$poked {
	ret: Return$pokedRet[];
}

export interface Param$setMyTimezone {
	_timezone: number;
}
export interface Result$setMyTimezone {
}

export interface Param$getUnitTime {
}
export interface Return$getUnitTimeRet {
	timezone: number;
	unitTimeZone: number;
	unitBizMonth: number;
	unitBizDate: number;
}
export interface Result$getUnitTime {
	ret: Return$getUnitTimeRet[];
}

export enum EnumBottleTemplateType {
	bottle = 1,
	bottleoverPack = 2
}

export interface LabelTemplate extends ID {
	name: string;
	description: string;
}

export interface LabelTemplateInActs extends ID {
	ID?: UqID<any>;
	name: string;
	description: string;
}

export interface DxLabelTemplate extends IDX {
	id: number;
	width?: number;
	height?: number;
	typeSetting?: number;
	language?: number;
	brand?: number;
	GHSPictogramsCount?: number;
	isSolvent?: number;
	version?: string;
	isValid?: number;
	$act?: number;
}export interface ActParamDxLabelTemplate {
	id: number|IDXValue;
	width?: number|IDXValue;
	height?: number|IDXValue;
	typeSetting?: number|IDXValue;
	language?: number|IDXValue;
	brand?: number|IDXValue;
	GHSPictogramsCount?: number|IDXValue;
	isSolvent?: number|IDXValue;
	version?: string|IDXValue;
	isValid?: number|IDXValue;
	$act?: number;
}

export interface LabelTypeSetting extends ID {
	name: string;
	description: string;
}

export interface LabelTypeSettingInActs extends ID {
	ID?: UqID<any>;
	name: string;
	description: string;
}

export interface BottleLabelTemplate extends IX {
}

export interface BottleOverPackLabelTemplate extends IX {
}

export interface BottleLightSensitiveConfig extends ID {
	bottle: number;
	光敏感: number;
	language: number;
	template: number;
}

export interface BottleLightSensitiveConfigInActs extends ID {
	ID?: UqID<any>;
	bottle: number | ID;
	光敏感: number | ID;
	language: number | ID;
	template: number | ID;
}

export interface ParamGetBottleLabelTemplate {
	bottle: number;
	type: any;
}
export interface ReturnGetBottleLabelTemplateRet {
	id: number;
	code: string;
	name: string;
	description: string;
	labelId: number;
	labelName: string;
	labelDescription: string;
	width: number;
	height: number;
	language: number;
	brand: number;
	GHSPictogramsCount: number;
	isSolvent: number;
	type: any;
}
export interface ResultGetBottleLabelTemplate {
	ret: ReturnGetBottleLabelTemplateRet[];
}

export enum EnumLablePrintType {
	all = 0,
	bottle = 1,
	overPack = 2,
	lightSensitivePack = 3
}

export interface Request extends ID {
	product: number;
	pack: number;
	radiox: number;
	radioy: number;
	unit: string;
	quantity: number;
	lotNumber: string;
	bottle: number;
	overPack: number;
	isSolvent: number;
	requestType: any;
	language: number;
	biz: number;
	bizNo: string;
	bizMain: number;
	bizMainNo: string;
	requester: number;
	createDate: any;
}

export interface RequestInActs extends ID {
	ID?: UqID<any>;
	product: number | ID;
	pack: number | ID;
	radiox: number;
	radioy: number;
	unit: string;
	quantity: number;
	lotNumber: string;
	bottle: number | ID;
	overPack: number | ID;
	isSolvent: number;
	requestType: any;
	language: number | ID;
	biz: number | ID;
	bizNo: string;
	bizMain: number | ID;
	bizMainNo: string;
	requester: number | ID;
	createDate: any;
}

export interface LabelPrintTask extends ID {
	taskType: any;
	labelTemplate: number;
	instance: number;
	createDate: any;
}

export interface LabelPrintTaskInActs extends ID {
	ID?: UqID<any>;
	taskType: any;
	labelTemplate: number | ID;
	instance: number | ID;
	createDate: any;
}

export interface LabelPrintTaskSource extends IX {
}

export interface LabelInstance extends ID {
	salesOrigin: string;
	CAS: string;
	description: string;
	descriptionC: string;
	radiox: number;
	radioy: number;
	unit: string;
	lotNumber: string;
	hazard: string;
	createDate: any;
}

export interface LabelInstanceInActs extends ID {
	ID?: UqID<any>;
	salesOrigin: string;
	CAS: string;
	description: string;
	descriptionC: string;
	radiox: number;
	radioy: number;
	unit: string;
	lotNumber: string;
	hazard: string;
	createDate: any;
}

export interface LabelInstanceContent extends IDX {
	id: number;
	position1?: string;
	position2?: string;
	position3?: string;
	position4?: string;
	position5?: string;
	position6?: string;
	position7?: string;
	position8?: string;
	position9?: string;
	position10?: string;
	position11?: string;
	position12?: string;
	position13?: string;
	position14?: string;
	position15?: string;
	position16?: string;
	position17?: string;
	position18?: string;
	position19?: string;
	position20?: string;
	position21?: string;
	position22?: string;
	position23?: string;
	position24?: string;
	position25?: string;
	position26?: string;
	position27?: string;
	position28?: string;
	position29?: string;
	position30?: string;
	$act?: number;
}export interface ActParamLabelInstanceContent {
	id: number|IDXValue;
	position1?: string|IDXValue;
	position2?: string|IDXValue;
	position3?: string|IDXValue;
	position4?: string|IDXValue;
	position5?: string|IDXValue;
	position6?: string|IDXValue;
	position7?: string|IDXValue;
	position8?: string|IDXValue;
	position9?: string|IDXValue;
	position10?: string|IDXValue;
	position11?: string|IDXValue;
	position12?: string|IDXValue;
	position13?: string|IDXValue;
	position14?: string|IDXValue;
	position15?: string|IDXValue;
	position16?: string|IDXValue;
	position17?: string|IDXValue;
	position18?: string|IDXValue;
	position19?: string|IDXValue;
	position20?: string|IDXValue;
	position21?: string|IDXValue;
	position22?: string|IDXValue;
	position23?: string|IDXValue;
	position24?: string|IDXValue;
	position25?: string|IDXValue;
	position26?: string|IDXValue;
	position27?: string|IDXValue;
	position28?: string|IDXValue;
	position29?: string|IDXValue;
	position30?: string|IDXValue;
	$act?: number;
}

export interface LabelPrintTaskPending extends IDX {
	id: number;
	$act?: number;
}export interface ActParamLabelPrintTaskPending {
	id: number|IDXValue;
	$act?: number;
}

export interface LabelPrintTaskPrinted extends IDX {
	id: number;
	result?: number;
	comments?: string;
	printer?: number;
	printDate?: any;
	$act?: number;
}export interface ActParamLabelPrintTaskPrinted {
	id: number|IDXValue;
	result?: number|IDXValue;
	comments?: string|IDXValue;
	printer?: number|IDXValue;
	printDate?: any|IDXValue;
	$act?: number;
}

export interface ParamGetLabelPrintTaskPending {
}
export interface ReturnGetLabelPrintTaskPendingRet {
	id: number;
	product: number;
	pack: number;
	radiox: number;
	radioy: number;
	unit: string;
	quantity: number;
	lotNumber: string;
	bottle: number;
	language: number;
	isSolvent: number;
}
export interface ResultGetLabelPrintTaskPending {
	ret: ReturnGetLabelPrintTaskPendingRet[];
}

export interface ParamGetLabelInstance {
	labelPrintTask: number;
}
export interface ReturnGetLabelInstanceRet {
	id: number;
	biz: number;
	labelTemplate: number;
	createDate: any;
	description: string;
	descriptionC: string;
}
export interface ResultGetLabelInstance {
	ret: ReturnGetLabelInstanceRet[];
}

export interface ParamSubLabelPrintTaskFinish {
	id: number;
	result: number;
}
export interface ReturnSubLabelPrintTaskFinishRet {
	result: number;
}
export interface ResultSubLabelPrintTaskFinish {
	ret: ReturnSubLabelPrintTaskFinishRet[];
}

export interface ParamGetLabelPrintTaskPrinted {
}
export interface ReturnGetLabelPrintTaskPrinted$page {
	id: number;
	result: number;
	comments: string;
	printer: number;
	printDate: any;
	taskType: any;
	labelTemplate: number;
	instance: number;
	createDate: any;
	product: number;
	pack: number;
	radiox: number;
	radioy: number;
	unit: string;
	quantity: number;
	lotNumber: string;
	bottle: number;
	language: number;
	isSolvent: number;
}
export interface ResultGetLabelPrintTaskPrinted {
	$page: ReturnGetLabelPrintTaskPrinted$page[];
}

export interface Roles extends ID {
	name: string;
	description: string;
}

export const Roles = {
}

export interface RolesInActs extends ID {
	ID?: UqID<any>;
	name: string;
	description: string;
}

export interface Branch extends ID {
	name: string;
}

export interface BranchInActs extends ID {
	ID?: UqID<any>;
	name: string;
}

export interface User extends ID {
	name: string;
	mobile: string;
	employeeId: string;
}

export interface UserInActs extends ID {
	ID?: UqID<any>;
	name: string;
	mobile: string;
	employeeId: string;
}

export interface DxUserRole extends IDX {
	id: number;
	user?: number;
	role?: number;
	branch?: number;
	$act?: number;
}export interface ActParamDxUserRole {
	id: number|IDXValue;
	user?: number|IDXValue;
	role?: number|IDXValue;
	branch?: number|IDXValue;
	$act?: number;
}

export interface ParamGetUserRole {
	webUser: number;
}
export interface ReturnGetUserRoleRet {
	id: number;
	name: string;
	description: string;
	branchId: number;
	branchName: string;
}
export interface ResultGetUserRole {
	ret: ReturnGetUserRoleRet[];
}

export interface ParamSearchUserByKey {
	key: string;
}
export interface ReturnSearchUserByKeyRet {
	id: number;
	name: string;
	mobile: string;
	employeeId: string;
}
export interface ResultSearchUserByKey {
	ret: ReturnSearchUserByKeyRet[];
}

export interface ParamSubmitLabelPrintUser {
	id: number;
	name: string;
	mobile: string;
	employeeId: string;
}
export interface ReturnSubmitLabelPrintUserRet {
	result: number;
}
export interface ResultSubmitLabelPrintUser {
	ret: ReturnSubmitLabelPrintUserRet[];
}



export interface ParamActs {
	$phrase?: $phraseInActs[];
	$ixphrase?: $ixphrase[];
	labelTemplate?: LabelTemplateInActs[];
	dxLabelTemplate?: ActParamDxLabelTemplate[];
	labelTypeSetting?: LabelTypeSettingInActs[];
	bottleLabelTemplate?: BottleLabelTemplate[];
	bottleOverPackLabelTemplate?: BottleOverPackLabelTemplate[];
	bottleLightSensitiveConfig?: BottleLightSensitiveConfigInActs[];
	request?: RequestInActs[];
	labelPrintTask?: LabelPrintTaskInActs[];
	labelPrintTaskSource?: LabelPrintTaskSource[];
	labelInstance?: LabelInstanceInActs[];
	labelInstanceContent?: ActParamLabelInstanceContent[];
	labelPrintTaskPending?: ActParamLabelPrintTaskPending[];
	labelPrintTaskPrinted?: ActParamLabelPrintTaskPrinted[];
	roles?: RolesInActs[];
	branch?: BranchInActs[];
	user?: UserInActs[];
	dxUserRole?: ActParamDxUserRole[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;
	SQL: Uq;
    Role: { [key: string]: string[] };

	$phrase: UqID<any>;
	$ixphrase: UqIX<any>;
	$role_My: UqQuery<Param$role_My, Result$role_My>;
	$role_Site_Users: UqQuery<Param$role_Site_Users, Result$role_Site_Users>;
	$role_Site_Add_Admin: UqAction<Param$role_Site_Add_Admin, Result$role_Site_Add_Admin>;
	$role_Site_Del_Admin: UqAction<Param$role_Site_Del_Admin, Result$role_Site_Del_Admin>;
	$role_Site_Add_User: UqAction<Param$role_Site_Add_User, Result$role_Site_Add_User>;
	$role_Site_User_Role: UqAction<Param$role_Site_User_Role, Result$role_Site_User_Role>;
	$role_Site_Quit_Owner: UqAction<Param$role_Site_Quit_Owner, Result$role_Site_Quit_Owner>;
	$sites: UqQuery<Param$sites, Result$sites>;
	$setSite: UqAction<Param$setSite, Result$setSite>;
	$poked: UqQuery<Param$poked, Result$poked>;
	$setMyTimezone: UqAction<Param$setMyTimezone, Result$setMyTimezone>;
	$getUnitTime: UqQuery<Param$getUnitTime, Result$getUnitTime>;
	LabelTemplate: UqID<any>;
	DxLabelTemplate: UqIDX<any>;
	LabelTypeSetting: UqID<any>;
	BottleLabelTemplate: UqIX<any>;
	BottleOverPackLabelTemplate: UqIX<any>;
	BottleLightSensitiveConfig: UqID<any>;
	GetBottleLabelTemplate: UqQuery<ParamGetBottleLabelTemplate, ResultGetBottleLabelTemplate>;
	Request: UqID<any>;
	LabelPrintTask: UqID<any>;
	LabelPrintTaskSource: UqIX<any>;
	LabelInstance: UqID<any>;
	LabelInstanceContent: UqIDX<any>;
	LabelPrintTaskPending: UqIDX<any>;
	LabelPrintTaskPrinted: UqIDX<any>;
	GetLabelPrintTaskPending: UqQuery<ParamGetLabelPrintTaskPending, ResultGetLabelPrintTaskPending>;
	GetLabelInstance: UqQuery<ParamGetLabelInstance, ResultGetLabelInstance>;
	SubLabelPrintTaskFinish: UqAction<ParamSubLabelPrintTaskFinish, ResultSubLabelPrintTaskFinish>;
	GetLabelPrintTaskPrinted: UqQuery<ParamGetLabelPrintTaskPrinted, ResultGetLabelPrintTaskPrinted>;
	Roles: UqID<any>;
	Branch: UqID<any>;
	User: UqID<any>;
	DxUserRole: UqIDX<any>;
	GetUserRole: UqQuery<ParamGetUserRole, ResultGetUserRole>;
	SearchUserByKey: UqQuery<ParamSearchUserByKey, ResultSearchUserByKey>;
	SubmitLabelPrintUser: UqAction<ParamSubmitLabelPrintUser, ResultSubmitLabelPrintUser>;
}


export const uqSchema={
    "$phrase": {
        "name": "$phrase",
        "type": "id",
        "private": false,
        "fields": [
            {
                "name": "name",
                "type": "char",
                "size": 200
            },
            {
                "name": "caption",
                "type": "char",
                "size": 100
            },
            {
                "name": "base",
                "type": "bigint"
            },
            {
                "name": "valid",
                "type": "tinyint"
            },
            {
                "name": "owner",
                "type": "bigint"
            },
            {
                "name": "type",
                "type": "tinyint"
            }
        ],
        "keys": [] as any,
        "global": false,
        "isMinute": false
    },
    "$ixphrase": {
        "name": "$ixphrase",
        "type": "ix",
        "private": false,
        "fields": [
            {
                "name": "type",
                "type": "tinyint",
                "null": false
            }
        ],
        "ixx": false,
        "hasSort": false
    },
    "$role_my": {
        "name": "$role_my",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [] as any,
        "returns": [
            {
                "name": "sites",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "site",
                        "type": "id"
                    },
                    {
                        "name": "admin",
                        "type": "tinyint"
                    },
                    {
                        "name": "entity",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "assigned",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "def",
                        "type": "tinyint"
                    }
                ]
            },
            {
                "name": "roles",
                "fields": [
                    {
                        "name": "site",
                        "type": "id"
                    },
                    {
                        "name": "role",
                        "type": "char",
                        "size": 100
                    }
                ]
            },
            {
                "name": "permits",
                "fields": [
                    {
                        "name": "site",
                        "type": "id"
                    },
                    {
                        "name": "permit",
                        "type": "char",
                        "size": 100
                    }
                ]
            }
        ]
    },
    "$role_site_users": {
        "name": "$role_site_users",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "site",
                "type": "bigint"
            }
        ],
        "returns": [
            {
                "name": "users",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "user",
                        "type": "id"
                    },
                    {
                        "name": "admin",
                        "type": "tinyint"
                    },
                    {
                        "name": "assigned",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "nick",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "icon",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "addBy",
                        "type": "id"
                    }
                ]
            },
            {
                "name": "roles",
                "fields": [
                    {
                        "name": "user",
                        "type": "id"
                    },
                    {
                        "name": "role",
                        "type": "char",
                        "size": 100
                    }
                ]
            }
        ]
    },
    "$role_site_add_admin": {
        "name": "$role_site_add_admin",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "site",
                "type": "bigint"
            },
            {
                "name": "user",
                "type": "bigint"
            },
            {
                "name": "admin",
                "type": "tinyint"
            },
            {
                "name": "assigned",
                "type": "char",
                "size": 100
            }
        ],
        "returns": [] as any
    },
    "$role_site_del_admin": {
        "name": "$role_site_del_admin",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "site",
                "type": "bigint"
            },
            {
                "name": "user",
                "type": "bigint"
            },
            {
                "name": "admin",
                "type": "tinyint"
            }
        ],
        "returns": [] as any
    },
    "$role_site_add_user": {
        "name": "$role_site_add_user",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "site",
                "type": "bigint"
            },
            {
                "name": "user",
                "type": "bigint"
            },
            {
                "name": "assigned",
                "type": "char",
                "size": 100
            }
        ],
        "returns": [] as any
    },
    "$role_site_user_role": {
        "name": "$role_site_user_role",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "site",
                "type": "bigint"
            },
            {
                "name": "user",
                "type": "bigint"
            },
            {
                "name": "action",
                "type": "char",
                "size": 100
            },
            {
                "name": "role",
                "type": "char",
                "size": 100
            }
        ],
        "returns": [] as any
    },
    "$role_site_quit_owner": {
        "name": "$role_site_quit_owner",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "site",
                "type": "bigint"
            }
        ],
        "returns": [] as any
    },
    "$sites": {
        "name": "$sites",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [] as any,
        "returns": [
            {
                "name": "$page",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "no",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "ex",
                        "type": "char",
                        "size": 100
                    }
                ],
                "order": "desc"
            }
        ]
    },
    "$setsite": {
        "name": "$setSite",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "site",
                "type": "id"
            }
        ],
        "returns": [] as any
    },
    "$poked": {
        "name": "$poked",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [] as any,
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "poke",
                        "type": "tinyint"
                    }
                ]
            }
        ]
    },
    "$setmytimezone": {
        "name": "$setMyTimezone",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "_timezone",
                "type": "tinyint"
            }
        ],
        "returns": [] as any
    },
    "$getunittime": {
        "name": "$getUnitTime",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [] as any,
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "timezone",
                        "type": "tinyint"
                    },
                    {
                        "name": "unitTimeZone",
                        "type": "tinyint"
                    },
                    {
                        "name": "unitBizMonth",
                        "type": "tinyint"
                    },
                    {
                        "name": "unitBizDate",
                        "type": "tinyint"
                    }
                ]
            }
        ]
    },
    "enumbottletemplatetype": {
        "name": "EnumBottleTemplateType",
        "type": "enum",
        "private": false,
        "sys": true,
        "values": {
            "bottle": 1,
            "bottleoverPack": 2
        }
    },
    "labeltemplate": {
        "name": "LabelTemplate",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "name",
                "type": "char",
                "size": 10
            },
            {
                "name": "description",
                "type": "char",
                "size": 100
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "dxlabeltemplate": {
        "name": "dxLabelTemplate",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "width",
                "type": "int"
            },
            {
                "name": "height",
                "type": "int"
            },
            {
                "name": "typeSetting",
                "type": "id",
                "ID": "labeltypesetting",
                "tuid": "labeltypesetting"
            },
            {
                "name": "language",
                "type": "id"
            },
            {
                "name": "brand",
                "type": "id"
            },
            {
                "name": "GHSPictogramsCount",
                "type": "int"
            },
            {
                "name": "isSolvent",
                "type": "smallint"
            },
            {
                "name": "version",
                "type": "char",
                "size": 20
            },
            {
                "name": "isValid",
                "type": "int"
            }
        ],
        "update": true
    },
    "labeltypesetting": {
        "name": "LabelTypeSetting",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "name",
                "type": "char",
                "size": 10
            },
            {
                "name": "description",
                "type": "char",
                "size": 200
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "bottlelabeltemplate": {
        "name": "bottleLabelTemplate",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id"
            },
            {
                "name": "xi",
                "type": "id"
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "bottleoverpacklabeltemplate": {
        "name": "bottleOverPackLabelTemplate",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id"
            },
            {
                "name": "xi",
                "type": "id",
                "ID": "$local",
                "tuid": "$local"
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 12
    },
    "bottlelightsensitiveconfig": {
        "name": "bottleLightSensitiveConfig",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "bottle",
                "type": "id"
            },
            {
                "name": "光敏感",
                "type": "id"
            },
            {
                "name": "language",
                "type": "id"
            },
            {
                "name": "template",
                "type": "id",
                "ID": "labeltemplate",
                "tuid": "labeltemplate"
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "getbottlelabeltemplate": {
        "name": "GetBottleLabelTemplate",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "bottle",
                "type": "id"
            },
            {
                "name": "type",
                "type": "enum"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "code",
                        "type": "char",
                        "size": 20
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "description",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "labelId",
                        "type": "id",
                        "ID": "labeltemplate",
                        "tuid": "labeltemplate"
                    },
                    {
                        "name": "labelName",
                        "type": "char",
                        "size": 10
                    },
                    {
                        "name": "labelDescription",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "width",
                        "type": "int"
                    },
                    {
                        "name": "height",
                        "type": "int"
                    },
                    {
                        "name": "language",
                        "type": "id"
                    },
                    {
                        "name": "brand",
                        "type": "id"
                    },
                    {
                        "name": "GHSPictogramsCount",
                        "type": "int"
                    },
                    {
                        "name": "isSolvent",
                        "type": "smallint"
                    },
                    {
                        "name": "type",
                        "type": "enum"
                    }
                ]
            }
        ]
    },
    "enumlableprinttype": {
        "name": "EnumLablePrintType",
        "type": "enum",
        "private": false,
        "sys": true,
        "values": {
            "all": 0,
            "bottle": 1,
            "overPack": 2,
            "lightSensitivePack": 3
        }
    },
    "request": {
        "name": "Request",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "product",
                "type": "id"
            },
            {
                "name": "pack",
                "type": "id"
            },
            {
                "name": "radiox",
                "type": "dec",
                "scale": 2,
                "precision": 12
            },
            {
                "name": "radioy",
                "type": "dec",
                "scale": 4,
                "precision": 12
            },
            {
                "name": "unit",
                "type": "char",
                "size": 10
            },
            {
                "name": "quantity",
                "type": "int"
            },
            {
                "name": "lotNumber",
                "type": "char",
                "size": 50
            },
            {
                "name": "bottle",
                "type": "id"
            },
            {
                "name": "overPack",
                "type": "id"
            },
            {
                "name": "isSolvent",
                "type": "int"
            },
            {
                "name": "requestType",
                "type": "enum",
                "null": false
            },
            {
                "name": "language",
                "type": "id"
            },
            {
                "name": "biz",
                "type": "id"
            },
            {
                "name": "bizNo",
                "type": "char",
                "size": 50
            },
            {
                "name": "bizMain",
                "type": "id"
            },
            {
                "name": "bizMainNo",
                "type": "char",
                "size": 50
            },
            {
                "name": "requester",
                "type": "id"
            },
            {
                "name": "createDate",
                "type": "datetime"
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "labelprinttask": {
        "name": "labelPrintTask",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "taskType",
                "type": "enum"
            },
            {
                "name": "labelTemplate",
                "type": "id"
            },
            {
                "name": "instance",
                "type": "id",
                "ID": "labelinstance",
                "tuid": "labelinstance"
            },
            {
                "name": "createDate",
                "type": "datetime"
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "labelprinttasksource": {
        "name": "labelPrintTaskSource",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id"
            },
            {
                "name": "xi",
                "type": "id"
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "labelinstance": {
        "name": "labelInstance",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "salesOrigin",
                "type": "char",
                "size": 50
            },
            {
                "name": "CAS",
                "type": "char",
                "size": 20
            },
            {
                "name": "description",
                "type": "char",
                "size": 1000
            },
            {
                "name": "descriptionC",
                "type": "char",
                "size": 1000
            },
            {
                "name": "radiox",
                "type": "dec",
                "scale": 2,
                "precision": 12
            },
            {
                "name": "radioy",
                "type": "dec",
                "scale": 4,
                "precision": 12
            },
            {
                "name": "unit",
                "type": "char",
                "size": 10
            },
            {
                "name": "lotNumber",
                "type": "char",
                "size": 50
            },
            {
                "name": "hazard",
                "type": "char",
                "size": 50
            },
            {
                "name": "createDate",
                "type": "datetime"
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "labelinstancecontent": {
        "name": "labelInstanceContent",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "position1",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position2",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position3",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position4",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position5",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position6",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position7",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position8",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position9",
                "type": "char",
                "size": 1000
            },
            {
                "name": "position10",
                "type": "text"
            },
            {
                "name": "position11",
                "type": "text"
            },
            {
                "name": "position12",
                "type": "text"
            },
            {
                "name": "position13",
                "type": "text"
            },
            {
                "name": "position14",
                "type": "text"
            },
            {
                "name": "position15",
                "type": "text"
            },
            {
                "name": "position16",
                "type": "text"
            },
            {
                "name": "position17",
                "type": "text"
            },
            {
                "name": "position18",
                "type": "text"
            },
            {
                "name": "position19",
                "type": "text"
            },
            {
                "name": "position20",
                "type": "text"
            },
            {
                "name": "position21",
                "type": "text"
            },
            {
                "name": "position22",
                "type": "text"
            },
            {
                "name": "position23",
                "type": "text"
            },
            {
                "name": "position24",
                "type": "text"
            },
            {
                "name": "position25",
                "type": "text"
            },
            {
                "name": "position26",
                "type": "text"
            },
            {
                "name": "position27",
                "type": "text"
            },
            {
                "name": "position28",
                "type": "text"
            },
            {
                "name": "position29",
                "type": "text"
            },
            {
                "name": "position30",
                "type": "text"
            }
        ],
        "update": true
    },
    "labelprinttaskpending": {
        "name": "LabelPrintTaskPending",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            }
        ],
        "update": true
    },
    "labelprinttaskprinted": {
        "name": "LabelPrintTaskPrinted",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "result",
                "type": "int"
            },
            {
                "name": "comments",
                "type": "char",
                "size": 100
            },
            {
                "name": "printer",
                "type": "id"
            },
            {
                "name": "printDate",
                "type": "datetime"
            }
        ],
        "update": true
    },
    "getlabelprinttaskpending": {
        "name": "GetLabelPrintTaskPending",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [] as any,
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "product",
                        "type": "id"
                    },
                    {
                        "name": "pack",
                        "type": "id"
                    },
                    {
                        "name": "radiox",
                        "type": "dec",
                        "scale": 2,
                        "precision": 12
                    },
                    {
                        "name": "radioy",
                        "type": "dec",
                        "scale": 4,
                        "precision": 12
                    },
                    {
                        "name": "unit",
                        "type": "char",
                        "size": 10
                    },
                    {
                        "name": "quantity",
                        "type": "int"
                    },
                    {
                        "name": "lotNumber",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "bottle",
                        "type": "id"
                    },
                    {
                        "name": "language",
                        "type": "id"
                    },
                    {
                        "name": "isSolvent",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "getlabelinstance": {
        "name": "GetLabelInstance",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "labelPrintTask",
                "type": "id"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "biz",
                        "type": "id"
                    },
                    {
                        "name": "labelTemplate",
                        "type": "id",
                        "ID": "labeltemplate",
                        "tuid": "labeltemplate"
                    },
                    {
                        "name": "createDate",
                        "type": "datetime"
                    },
                    {
                        "name": "description",
                        "type": "char",
                        "size": 1000
                    },
                    {
                        "name": "descriptionC",
                        "type": "char",
                        "size": 1000
                    }
                ]
            }
        ]
    },
    "sublabelprinttaskfinish": {
        "name": "subLabelPrintTaskFinish",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "result",
                "type": "int"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "result",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "getlabelprinttaskprinted": {
        "name": "GetLabelPrintTaskPrinted",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [] as any,
        "returns": [
            {
                "name": "$page",
                "fields": [
                    {
                        "name": "id",
                        "type": "bigint"
                    },
                    {
                        "name": "result",
                        "type": "int"
                    },
                    {
                        "name": "comments",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "printer",
                        "type": "id"
                    },
                    {
                        "name": "printDate",
                        "type": "datetime"
                    },
                    {
                        "name": "taskType",
                        "type": "enum"
                    },
                    {
                        "name": "labelTemplate",
                        "type": "id"
                    },
                    {
                        "name": "instance",
                        "type": "id",
                        "ID": "labelinstance",
                        "tuid": "labelinstance"
                    },
                    {
                        "name": "createDate",
                        "type": "datetime"
                    },
                    {
                        "name": "product",
                        "type": "id"
                    },
                    {
                        "name": "pack",
                        "type": "id"
                    },
                    {
                        "name": "radiox",
                        "type": "dec",
                        "scale": 2,
                        "precision": 12
                    },
                    {
                        "name": "radioy",
                        "type": "dec",
                        "scale": 4,
                        "precision": 12
                    },
                    {
                        "name": "unit",
                        "type": "char",
                        "size": 10
                    },
                    {
                        "name": "quantity",
                        "type": "int"
                    },
                    {
                        "name": "lotNumber",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "bottle",
                        "type": "id"
                    },
                    {
                        "name": "language",
                        "type": "id"
                    },
                    {
                        "name": "isSolvent",
                        "type": "int"
                    }
                ],
                "order": "desc"
            }
        ]
    },
    "roles": {
        "name": "Roles",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "name",
                "type": "char",
                "null": false,
                "size": 50
            },
            {
                "name": "description",
                "type": "char",
                "size": 100
            }
        ],
        "values": {},
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "branch": {
        "name": "Branch",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "name",
                "type": "char",
                "null": false,
                "size": 50
            }
        ],
        "keys": [
            {
                "name": "name",
                "type": "char",
                "null": false,
                "size": 50
            }
        ],
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "user": {
        "name": "User",
        "type": "id",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "null": false
            },
            {
                "name": "name",
                "type": "char",
                "size": 50
            },
            {
                "name": "mobile",
                "type": "char",
                "size": 50
            },
            {
                "name": "employeeId",
                "type": "char",
                "size": 100
            }
        ],
        "keys": [] as any,
        "create": true,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "dxuserrole": {
        "name": "dxUserRole",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "user",
                "type": "id"
            },
            {
                "name": "role",
                "type": "id",
                "ID": "roles",
                "tuid": "roles"
            },
            {
                "name": "branch",
                "type": "id",
                "ID": "branch",
                "tuid": "branch"
            }
        ],
        "update": true
    },
    "getuserrole": {
        "name": "GetUserRole",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "webUser",
                "type": "id"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "description",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "branchId",
                        "type": "id"
                    },
                    {
                        "name": "branchName",
                        "type": "char",
                        "size": 50
                    }
                ]
            }
        ]
    },
    "searchuserbykey": {
        "name": "searchUserByKey",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "key",
                "type": "char",
                "size": 50
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "mobile",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "employeeId",
                        "type": "char",
                        "size": 100
                    }
                ]
            }
        ]
    },
    "submitlabelprintuser": {
        "name": "submitLabelPrintUser",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "name",
                "type": "char",
                "size": 50
            },
            {
                "name": "mobile",
                "type": "char",
                "size": 50
            },
            {
                "name": "employeeId",
                "type": "char",
                "size": 100
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "result",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "$biz": {
        "$user": {
            "name": "$user",
            "type": "$user"
        },
        "$unit": {
            "name": "$unit",
            "type": "$unit"
        }
    }
}