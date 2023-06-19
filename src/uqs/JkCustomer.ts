//=== UqApp builder created on Wed Jun 14 2023 11:02:02 GMT-0400 (Eastern Daylight Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqID, UqQuery, UqAction, UqIX, UqIDX } from "tonwa-uq";
// eslint-disable-next-line @typescript-eslint/no-unused-vars


//===============================;
//======= UQ 百灵威系统工程部/customer ========;
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
	Certificate = 'certificate',
	CertificateSource = 'certificatesource',
}

export interface $phrase extends ID {
	name: string;
	caption: string;
}

export interface $phraseInActs extends ID {
	ID?: UqID<any>;
	name: string;
	caption: string;
}

export interface Param$role_My {
}
export interface Return$role_MyAdmins {
	id: number;
	unit: number;
	admin: number;
	entity: string;
	assigned: string;
}
export interface Return$role_MyRoles {
	unit: number;
	role: string;
}
export interface Return$role_MyUnitProps {
	unit: number;
	props: string;
}
export interface Result$role_My {
	admins: Return$role_MyAdmins[];
	roles: Return$role_MyRoles[];
	unitProps: Return$role_MyUnitProps[];
}

export interface Param$role_Unit_Users {
	unit: number;
}
export interface Return$role_Unit_UsersUsers {
	id: number;
	user: number;
	admin: number;
	assigned: string;
	name: string;
	nick: string;
	icon: string;
	addBy: number;
}
export interface Return$role_Unit_UsersRoles {
	user: number;
	role: string;
}
export interface Result$role_Unit_Users {
	users: Return$role_Unit_UsersUsers[];
	roles: Return$role_Unit_UsersRoles[];
}

export interface Param$role_Unit_Add_Admin {
	unit: number;
	user: number;
	admin: number;
	assigned: string;
}
export interface Result$role_Unit_Add_Admin {
}

export interface Param$role_Unit_Del_Admin {
	unit: number;
	user: number;
	admin: number;
}
export interface Result$role_Unit_Del_Admin {
}

export interface Param$role_Unit_Add_User {
	unit: number;
	user: number;
	assigned: string;
}
export interface Result$role_Unit_Add_User {
}

export interface Param$role_Unit_User_Role {
	unit: number;
	user: number;
	action: string;
	role: string;
}
export interface Result$role_Unit_User_Role {
}

export interface Param$role_Unit_Quit_Owner {
	unit: number;
}
export interface Result$role_Unit_Quit_Owner {
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

export interface Certificate extends ID {
	name: string;
	description: string;
}

export interface CertificateInActs extends ID {
	ID?: UqID<any>;
	name: string;
	description: string;
}

export interface BuyeraccountCertificate extends IX {
	expiredDate: any;
	path: string;
	createDate: any;
}

export interface CertificateSource extends ID {
	certificate: number;
	buyeraccount: number;
	expiredDate: any;
	path: string;
	status: number;
	creator: number;
	createDate: any;
}

export interface CertificateSourceInActs extends ID {
	ID?: UqID<any>;
	certificate: number | ID;
	buyeraccount: number | ID;
	expiredDate: any;
	path: string;
	status: number;
	creator: number | ID;
	createDate: any;
}

export interface DxPendingAuditCertificate extends IDX {
	id: number;
	createDate?: any;
	$act?: number;
}export interface ActParamDxPendingAuditCertificate {
	id: number|IDXValue;
	createDate?: any|IDXValue;
	$act?: number;
}

export interface CretificateSourceAuditHistory extends IDX {
	id: number;
	status?: number;
	comments?: string;
	auditor?: number;
	$act?: number;
}export interface ActParamCretificateSourceAuditHistory {
	id: number|IDXValue;
	status?: number|IDXValue;
	comments?: string|IDXValue;
	auditor?: number|IDXValue;
	$act?: number;
}

export interface ParamIsValidCustomerExe {
	customer: number;
	comments: string;
	isValid: number;
}
export interface ResultIsValidCustomerExe {
}

export interface ParamGetResearchByParent {
	parent: number;
	key: string;
}
export interface ReturnGetResearchByParentRet {
	id: number;
	name: string;
	parent: number;
}
export interface ResultGetResearchByParent {
	ret: ReturnGetResearchByParentRet[];
}

export interface ParamGetMyExpiredCoupon {
	customer: number;
}
export interface ReturnGetMyExpiredCoupon$page {
	seq: number;
	id: number;
	code: number;
	type: number;
	createdate: any;
	expireddate: any;
}
export interface ResultGetMyExpiredCoupon {
	$page: ReturnGetMyExpiredCoupon$page[];
}

export interface ParamGetMyUsedCoupon {
	customer: number;
}
export interface ReturnGetMyUsedCoupon$page {
	seq: number;
	id: number;
	code: number;
	type: number;
	useddate: any;
}
export interface ResultGetMyUsedCoupon {
	$page: ReturnGetMyUsedCoupon$page[];
}

export interface ParamAcceptCustomerCreditsUsed {
	customer: number;
	coupon: number;
	orderItemId: string;
}
export interface ResultAcceptCustomerCreditsUsed {
}

export interface ParamAcceptCustomerCouponUsed {
	customer: number;
	coupon: number;
}
export interface ResultAcceptCustomerCouponUsed {
}

export interface ParamSearchCustomer {
	key: string;
}
export interface ReturnSearchCustomer$page {
	id: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	gender: string;
	salutation: string;
}
export interface ResultSearchCustomer {
	$page: ReturnSearchCustomer$page[];
}

export interface ParamGetCustomerByKey {
	key: string;
}
export interface ReturnGetCustomerByKeyRet {
	customer: number;
}
export interface ResultGetCustomerByKey {
	ret: ReturnGetCustomerByKeyRet[];
}

export interface ParamGetCustomerByNo {
	customerNo: string;
}
export interface ReturnGetCustomerByNoRet {
	customer: number;
}
export interface ResultGetCustomerByNo {
	ret: ReturnGetCustomerByNoRet[];
}

export interface ParamGetCustomerOrganization {
	customerId: number;
}
export interface ReturnGetCustomerOrganizationRet {
	organization: number;
	customer: number;
}
export interface ResultGetCustomerOrganization {
	ret: ReturnGetCustomerOrganizationRet[];
}

export interface ParamGetBuyerAccountByNo {
	buyAccountNo: string;
}
export interface ReturnGetBuyerAccountByNoRet {
	buyerAccount: number;
	organization: number;
	description: string;
	xyz: string;
	no: string;
	createTime: any;
	isValid: number;
}
export interface ResultGetBuyerAccountByNo {
	ret: ReturnGetBuyerAccountByNoRet[];
}

export interface ParamSearchDomain {
	_parent: number;
}
export interface ReturnSearchDomain$page {
	id: number;
	name: string;
	counts: number;
}
export interface ResultSearchDomain {
	$page: ReturnSearchDomain$page[];
}



export interface ParamActs {
	$phrase?: $phraseInActs[];
	certificate?: CertificateInActs[];
	buyeraccountCertificate?: BuyeraccountCertificate[];
	certificateSource?: CertificateSourceInActs[];
	dxPendingAuditCertificate?: ActParamDxPendingAuditCertificate[];
	cretificateSourceAuditHistory?: ActParamCretificateSourceAuditHistory[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;
	SQL: Uq;
    Role: { [key: string]: string[] };

	$phrase: UqID<any>;
	$role_My: UqQuery<Param$role_My, Result$role_My>;
	$role_Unit_Users: UqQuery<Param$role_Unit_Users, Result$role_Unit_Users>;
	$role_Unit_Add_Admin: UqAction<Param$role_Unit_Add_Admin, Result$role_Unit_Add_Admin>;
	$role_Unit_Del_Admin: UqAction<Param$role_Unit_Del_Admin, Result$role_Unit_Del_Admin>;
	$role_Unit_Add_User: UqAction<Param$role_Unit_Add_User, Result$role_Unit_Add_User>;
	$role_Unit_User_Role: UqAction<Param$role_Unit_User_Role, Result$role_Unit_User_Role>;
	$role_Unit_Quit_Owner: UqAction<Param$role_Unit_Quit_Owner, Result$role_Unit_Quit_Owner>;
	$poked: UqQuery<Param$poked, Result$poked>;
	$setMyTimezone: UqAction<Param$setMyTimezone, Result$setMyTimezone>;
	$getUnitTime: UqQuery<Param$getUnitTime, Result$getUnitTime>;
	Certificate: UqID<any>;
	BuyeraccountCertificate: UqIX<any>;
	CertificateSource: UqID<any>;
	DxPendingAuditCertificate: UqIDX<any>;
	CretificateSourceAuditHistory: UqIDX<any>;
	IsValidCustomerExe: UqAction<ParamIsValidCustomerExe, ResultIsValidCustomerExe>;
	GetResearchByParent: UqQuery<ParamGetResearchByParent, ResultGetResearchByParent>;
	GetMyExpiredCoupon: UqQuery<ParamGetMyExpiredCoupon, ResultGetMyExpiredCoupon>;
	GetMyUsedCoupon: UqQuery<ParamGetMyUsedCoupon, ResultGetMyUsedCoupon>;
	AcceptCustomerCreditsUsed: UqAction<ParamAcceptCustomerCreditsUsed, ResultAcceptCustomerCreditsUsed>;
	AcceptCustomerCouponUsed: UqAction<ParamAcceptCustomerCouponUsed, ResultAcceptCustomerCouponUsed>;
	SearchCustomer: UqQuery<ParamSearchCustomer, ResultSearchCustomer>;
	GetCustomerByKey: UqQuery<ParamGetCustomerByKey, ResultGetCustomerByKey>;
	GetCustomerByNo: UqQuery<ParamGetCustomerByNo, ResultGetCustomerByNo>;
	GetCustomerOrganization: UqQuery<ParamGetCustomerOrganization, ResultGetCustomerOrganization>;
	GetBuyerAccountByNo: UqQuery<ParamGetBuyerAccountByNo, ResultGetBuyerAccountByNo>;
	SearchDomain: UqQuery<ParamSearchDomain, ResultSearchDomain>;
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
            }
        ],
        "keys": [] as any,
        "global": false,
        "isMinute": false
    },
    "$role_my": {
        "name": "$role_my",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [] as any,
        "returns": [
            {
                "name": "admins",
                "fields": [
                    {
                        "name": "id",
                        "type": "id"
                    },
                    {
                        "name": "unit",
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
                    }
                ]
            },
            {
                "name": "roles",
                "fields": [
                    {
                        "name": "unit",
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
                "name": "unitProps",
                "fields": [
                    {
                        "name": "unit",
                        "type": "id"
                    },
                    {
                        "name": "props",
                        "type": "text"
                    }
                ]
            }
        ]
    },
    "$role_unit_users": {
        "name": "$role_unit_users",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "unit",
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
    "$role_unit_add_admin": {
        "name": "$role_unit_add_admin",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "unit",
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
    "$role_unit_del_admin": {
        "name": "$role_unit_del_admin",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "unit",
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
    "$role_unit_add_user": {
        "name": "$role_unit_add_user",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "unit",
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
    "$role_unit_user_role": {
        "name": "$role_unit_user_role",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "unit",
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
    "$role_unit_quit_owner": {
        "name": "$role_unit_quit_owner",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "unit",
                "type": "bigint"
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
    "certificate": {
        "name": "Certificate",
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
                "name": "description",
                "type": "char",
                "size": 50
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "buyeraccountcertificate": {
        "name": "BuyeraccountCertificate",
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
            },
            {
                "name": "expiredDate",
                "type": "date"
            },
            {
                "name": "path",
                "type": "char",
                "size": 100
            },
            {
                "name": "createDate",
                "type": "datetime"
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "certificatesource": {
        "name": "CertificateSource",
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
                "name": "certificate",
                "type": "id",
                "ID": "certificate",
                "tuid": "certificate"
            },
            {
                "name": "buyeraccount",
                "type": "id",
                "ID": "buyeraccount",
                "tuid": "buyeraccount"
            },
            {
                "name": "expiredDate",
                "type": "date"
            },
            {
                "name": "path",
                "type": "char",
                "size": 100
            },
            {
                "name": "status",
                "type": "tinyint"
            },
            {
                "name": "creator",
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
    "dxpendingauditcertificate": {
        "name": "dxPendingAuditCertificate",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "createDate",
                "type": "datetime"
            }
        ],
        "update": true
    },
    "cretificatesourceaudithistory": {
        "name": "CretificateSourceAuditHistory",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "status",
                "type": "tinyint"
            },
            {
                "name": "comments",
                "type": "char",
                "size": 200
            },
            {
                "name": "auditor",
                "type": "id"
            }
        ],
        "update": true
    },
    "isvalidcustomerexe": {
        "name": "isValidCustomerExe",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "customer",
                "type": "id",
                "ID": "customer",
                "tuid": "customer"
            },
            {
                "name": "comments",
                "type": "char",
                "size": 50
            },
            {
                "name": "isValid",
                "type": "int"
            }
        ],
        "returns": [] as any
    },
    "getresearchbyparent": {
        "name": "GetResearchByParent",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "parent",
                "type": "id",
                "ID": "research",
                "tuid": "research"
            },
            {
                "name": "key",
                "type": "char",
                "size": 100
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id",
                        "ID": "research",
                        "tuid": "research"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "parent",
                        "type": "id",
                        "ID": "research",
                        "tuid": "research"
                    }
                ]
            }
        ]
    },
    "getmyexpiredcoupon": {
        "name": "getMyExpiredCoupon",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "customer",
                "type": "id",
                "ID": "customer",
                "tuid": "customer"
            }
        ],
        "returns": [
            {
                "name": "$page",
                "fields": [
                    {
                        "name": "seq",
                        "type": "bigint"
                    },
                    {
                        "name": "id",
                        "type": "int"
                    },
                    {
                        "name": "code",
                        "type": "int"
                    },
                    {
                        "name": "type",
                        "type": "int"
                    },
                    {
                        "name": "createdate",
                        "type": "datetime"
                    },
                    {
                        "name": "expireddate",
                        "type": "date"
                    }
                ],
                "order": "asc"
            }
        ]
    },
    "getmyusedcoupon": {
        "name": "getMyUsedCoupon",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "customer",
                "type": "id",
                "ID": "customer",
                "tuid": "customer"
            }
        ],
        "returns": [
            {
                "name": "$page",
                "fields": [
                    {
                        "name": "seq",
                        "type": "bigint"
                    },
                    {
                        "name": "id",
                        "type": "int"
                    },
                    {
                        "name": "code",
                        "type": "int"
                    },
                    {
                        "name": "type",
                        "type": "int"
                    },
                    {
                        "name": "useddate",
                        "type": "datetime"
                    }
                ],
                "order": "asc"
            }
        ]
    },
    "acceptcustomercreditsused": {
        "name": "AcceptCustomerCreditsUsed",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "customer",
                "type": "id"
            },
            {
                "name": "coupon",
                "type": "id"
            },
            {
                "name": "orderItemId",
                "type": "char",
                "size": 50
            }
        ],
        "returns": [] as any
    },
    "acceptcustomercouponused": {
        "name": "AcceptCustomerCouponUsed",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "customer",
                "type": "id"
            },
            {
                "name": "coupon",
                "type": "id"
            }
        ],
        "returns": [] as any
    },
    "searchcustomer": {
        "name": "searchCustomer",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "key",
                "type": "char",
                "size": 100
            }
        ],
        "returns": [
            {
                "name": "$page",
                "fields": [
                    {
                        "name": "id",
                        "type": "bigint"
                    },
                    {
                        "name": "no",
                        "type": "char",
                        "size": 30
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "firstName",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "lastName",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "gender",
                        "type": "char",
                        "size": 5
                    },
                    {
                        "name": "salutation",
                        "type": "char",
                        "size": 10
                    }
                ],
                "order": "asc"
            }
        ]
    },
    "getcustomerbykey": {
        "name": "getCustomerByKey",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "key",
                "type": "char",
                "size": 30
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "customer",
                        "type": "id",
                        "ID": "customer",
                        "tuid": "customer"
                    }
                ]
            }
        ]
    },
    "getcustomerbyno": {
        "name": "getCustomerByNo",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "customerNo",
                "type": "char",
                "size": 30
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "customer",
                        "type": "id",
                        "ID": "customer",
                        "tuid": "customer"
                    }
                ]
            }
        ]
    },
    "getcustomerorganization": {
        "name": "getCustomerOrganization",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "customerId",
                "type": "id",
                "ID": "customer",
                "tuid": "customer"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "organization",
                        "type": "id",
                        "ID": "organization",
                        "tuid": "organization"
                    },
                    {
                        "name": "customer",
                        "type": "id",
                        "ID": "customer",
                        "tuid": "customer"
                    }
                ]
            }
        ]
    },
    "getbuyeraccountbyno": {
        "name": "getBuyerAccountByNo",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "buyAccountNo",
                "type": "char",
                "size": 30
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "buyerAccount",
                        "type": "bigint"
                    },
                    {
                        "name": "organization",
                        "type": "id",
                        "ID": "organization",
                        "tuid": "organization"
                    },
                    {
                        "name": "description",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "xyz",
                        "type": "char",
                        "size": 5
                    },
                    {
                        "name": "no",
                        "type": "char",
                        "size": 30
                    },
                    {
                        "name": "createTime",
                        "type": "datetime"
                    },
                    {
                        "name": "isValid",
                        "type": "smallint"
                    }
                ]
            }
        ]
    },
    "searchdomain": {
        "name": "SearchDomain",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "_parent",
                "type": "id",
                "ID": "domain",
                "tuid": "domain"
            }
        ],
        "returns": [
            {
                "name": "$page",
                "fields": [
                    {
                        "name": "id",
                        "type": "bigint"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "counts",
                        "type": "int"
                    }
                ],
                "order": "desc"
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