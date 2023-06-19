//=== UqApp builder created on Wed Jun 14 2023 11:02:02 GMT-0400 (Eastern Daylight Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqID, UqQuery, UqAction, UqIDX, UqIX } from "tonwa-uq";
// eslint-disable-next-line @typescript-eslint/no-unused-vars


//===============================;
//======= UQ 百灵威系统工程部/product ========;
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

export interface ParamGetLotByLotnumber {
	lotnumber: string;
	origin: string;
}
export interface ReturnGetLotByLotnumberRet {
	id: number;
	product: number;
}
export interface ResultGetLotByLotnumber {
	ret: ReturnGetLotByLotnumberRet[];
}

export interface ParamGetProductLotNumber {
	product: number;
}
export interface ReturnGetProductLotNumberRet {
	id: number;
	product: number;
	lotnumber: string;
}
export interface ResultGetProductLotNumber {
	ret: ReturnGetProductLotNumberRet[];
}

export interface ParamSearchPointProduct {
	keyWord: string;
	salesRegion: number;
}
export interface ReturnSearchPointProduct$page {
	seq: number;
	id: number;
	product: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	radiox: number;
	radioy: number;
	unit: string;
	retail: number;
}
export interface ResultSearchPointProduct {
	$page: ReturnSearchPointProduct$page[];
}

export interface ParamGetPointProductMoreBySource {
	pack: number;
	salesRegion: number;
}
export interface ReturnGetPointProductMoreBySourceRet {
	id: number;
	product: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	radiox: number;
	radioy: number;
	unit: string;
	retail: number;
}
export interface ResultGetPointProductMoreBySource {
	ret: ReturnGetPointProductMoreBySourceRet[];
}

export interface Product2c extends IDX {
	id: number;
	createDate?: any;
	$act?: number;
}export interface ActParamProduct2c {
	id: number|IDXValue;
	createDate?: any|IDXValue;
	$act?: number;
}

export interface ProductCategoryResearchDomain extends IX {
}

export interface ParamGetRootCategories {
	salesRegion: number;
	language: number;
}
export interface ReturnGetRootCategoriesRet {
	productCategory: number;
	name: string;
	total: number;
}
export interface ResultGetRootCategories {
	ret: ReturnGetRootCategoriesRet[];
}

export interface ParamGetRootCategory {
	salesRegion: number;
	language: number;
}
export interface ReturnGetRootCategoryFirst {
	productCategory: number;
	name: string;
	total: number;
}
export interface ReturnGetRootCategorySecend {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
export interface ReturnGetRootCategoryThird {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
export interface ResultGetRootCategory {
	first: ReturnGetRootCategoryFirst[];
	secend: ReturnGetRootCategorySecend[];
	third: ReturnGetRootCategoryThird[];
}

export interface ParamGetChildrenCategory {
	parent: number;
	salesRegion: number;
	language: number;
}
export interface ReturnGetChildrenCategoryFirst {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
export interface ReturnGetChildrenCategorySecend {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
export interface ResultGetChildrenCategory {
	first: ReturnGetChildrenCategoryFirst[];
	secend: ReturnGetChildrenCategorySecend[];
}

export interface ParamSearchProductByCategory {
	productCategory: number;
	salesRegion: number;
	language: number;
}
export interface ReturnSearchProductByCategory$page {
	seq: number;
	id: number;
	no: string;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	chemical: number;
	CAS: string;
	purity: string;
	molecularFomula: string;
	molecularWeight: string;
}
export interface ResultSearchProductByCategory {
	$page: ReturnSearchProductByCategory$page[];
}

export interface ParamCountProductCategoryInclusion {
}
export interface ResultCountProductCategoryInclusion {
}

export interface ParamAddResearchProductCategory {
	research: number;
	productCategory: number;
}
export interface ResultAddResearchProductCategory {
}

export interface ParamDeleteResearchProductCategory {
	research: number;
	productCategory: number;
}
export interface ResultDeleteResearchProductCategory {
}

export interface ParamGetResearchByProductCategory {
	productCategory: number;
}
export interface ReturnGetResearchByProductCategoryRet {
	productCategory: number;
	research: number;
}
export interface ResultGetResearchByProductCategory {
	ret: ReturnGetResearchByProductCategoryRet[];
}

export interface ParamGetProductByOrigin {
	origin: string;
	salesRegion: number;
}
export interface ReturnGetProductByOriginRet {
	id: number;
}
export interface ResultGetProductByOrigin {
	ret: ReturnGetProductByOriginRet[];
}

export interface ParamGetProductPackByOrigin {
	origin: string;
	salesRegion: number;
}
export interface ReturnGetProductPackByOriginRet {
	product: number;
	pack: number;
}
export interface ResultGetProductPackByOrigin {
	ret: ReturnGetProductPackByOriginRet[];
}

export interface ParamGetAvailableProductById {
	product: number;
	salesRegion: number;
}
export interface ReturnGetAvailableProductByIdRet {
	id: number;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	no: string;
	isValid: number;
}
export interface ResultGetAvailableProductById {
	ret: ReturnGetAvailableProductByIdRet[];
}

export interface ParamGetFutureDeliveryTime {
	product: number;
	salesRegion: number;
}
export interface ReturnGetFutureDeliveryTimeRet {
	minValue: number;
	maxValue: number;
	unit: string;
	deliveryTimeDescription: string;
	isRestrict: number;
}
export interface ResultGetFutureDeliveryTime {
	ret: ReturnGetFutureDeliveryTimeRet[];
}

export interface ParamSearchProduct {
	keyWord: string;
	salesRegion: number;
}
export interface ReturnSearchProduct$page {
	seq: number;
	id: number;
	no: string;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	chemical: number;
	CAS: string;
	purity: string;
	gradeCN: string;
	molecularFomula: string;
	molecularWeight: string;
}
export interface ResultSearchProduct {
	$page: ReturnSearchProduct$page[];
}

export interface ParamGetPack {
	brandName: string;
	origin: string;
	radiox: number;
	radioy: number;
	unit: string;
}
export interface ReturnGetPackRet {
	product: number;
	pack: number;
	jkcat: string;
}
export interface ResultGetPack {
	ret: ReturnGetPackRet[];
}

export interface ParamGetProductPrices {
	product: number;
	salesRegion: number;
}
export interface ReturnGetProductPricesRet {
	product: number;
	pack: number;
	salesRegion: number;
	retail: number;
	expireDate: any;
	discountinued: number;
	salesLevel: number;
}
export interface ResultGetProductPrices {
	ret: ReturnGetProductPricesRet[];
}

export interface ParamGetProductByPackId {
	pack: number;
}
export interface ReturnGetProductByPackIdRet {
	product: number;
	origin: string;
	description: string;
	descriptionC: string;
	brand: number;
	brandName: string;
}
export interface ResultGetProductByPackId {
	ret: ReturnGetProductByPackIdRet[];
}

export interface ParamGetBrandSalesRegion {
	salesRegion: number;
}
export interface ReturnGetBrandSalesRegionRet {
	id: number;
	name: string;
	brand: number;
	salesRegion: number;
	level: number;
}
export interface ResultGetBrandSalesRegion {
	ret: ReturnGetBrandSalesRegionRet[];
}

export interface ParamPriceXquery {
	product: number;
	pack: number;
	salesRegion: number;
}
export interface ReturnPriceXqueryRet {
	product: number;
	pack: number;
	salesRegion: number;
	expireDate: any;
	discountinued: number;
	retail: number;
}
export interface ResultPriceXquery {
	ret: ReturnPriceXqueryRet[];
}



export interface ParamActs {
	$phrase?: $phraseInActs[];
	product2c?: ActParamProduct2c[];
	productCategoryResearchDomain?: ProductCategoryResearchDomain[];
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
	GetLotByLotnumber: UqQuery<ParamGetLotByLotnumber, ResultGetLotByLotnumber>;
	GetProductLotNumber: UqQuery<ParamGetProductLotNumber, ResultGetProductLotNumber>;
	SearchPointProduct: UqQuery<ParamSearchPointProduct, ResultSearchPointProduct>;
	GetPointProductMoreBySource: UqQuery<ParamGetPointProductMoreBySource, ResultGetPointProductMoreBySource>;
	Product2c: UqIDX<any>;
	ProductCategoryResearchDomain: UqIX<any>;
	GetRootCategories: UqQuery<ParamGetRootCategories, ResultGetRootCategories>;
	GetRootCategory: UqQuery<ParamGetRootCategory, ResultGetRootCategory>;
	GetChildrenCategory: UqQuery<ParamGetChildrenCategory, ResultGetChildrenCategory>;
	SearchProductByCategory: UqQuery<ParamSearchProductByCategory, ResultSearchProductByCategory>;
	CountProductCategoryInclusion: UqAction<ParamCountProductCategoryInclusion, ResultCountProductCategoryInclusion>;
	AddResearchProductCategory: UqAction<ParamAddResearchProductCategory, ResultAddResearchProductCategory>;
	DeleteResearchProductCategory: UqAction<ParamDeleteResearchProductCategory, ResultDeleteResearchProductCategory>;
	GetResearchByProductCategory: UqQuery<ParamGetResearchByProductCategory, ResultGetResearchByProductCategory>;
	GetProductByOrigin: UqQuery<ParamGetProductByOrigin, ResultGetProductByOrigin>;
	GetProductPackByOrigin: UqQuery<ParamGetProductPackByOrigin, ResultGetProductPackByOrigin>;
	GetAvailableProductById: UqQuery<ParamGetAvailableProductById, ResultGetAvailableProductById>;
	GetFutureDeliveryTime: UqQuery<ParamGetFutureDeliveryTime, ResultGetFutureDeliveryTime>;
	SearchProduct: UqQuery<ParamSearchProduct, ResultSearchProduct>;
	GetPack: UqQuery<ParamGetPack, ResultGetPack>;
	GetProductPrices: UqQuery<ParamGetProductPrices, ResultGetProductPrices>;
	GetProductByPackId: UqQuery<ParamGetProductByPackId, ResultGetProductByPackId>;
	GetBrandSalesRegion: UqQuery<ParamGetBrandSalesRegion, ResultGetBrandSalesRegion>;
	PriceXquery: UqQuery<ParamPriceXquery, ResultPriceXquery>;
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
    "getlotbylotnumber": {
        "name": "getLotByLotnumber",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "lotnumber",
                "type": "char",
                "size": 50
            },
            {
                "name": "origin",
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
                        "type": "id",
                        "ID": "lot",
                        "tuid": "lot"
                    },
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    }
                ]
            }
        ]
    },
    "getproductlotnumber": {
        "name": "getProductLotNumber",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "product",
                "type": "id",
                "ID": "productx",
                "tuid": "productx"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id",
                        "ID": "lot",
                        "tuid": "lot"
                    },
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "lotnumber",
                        "type": "char",
                        "size": 50
                    }
                ]
            }
        ]
    },
    "searchpointproduct": {
        "name": "searchPointProduct",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "keyWord",
                "type": "char",
                "size": 100
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
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
                        "type": "id",
                        "owner": "product",
                        "arr": "packx"
                    },
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "origin",
                        "type": "char",
                        "size": 50
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
                        "name": "imageUrl",
                        "type": "char",
                        "size": 200
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
                        "name": "retail",
                        "type": "dec",
                        "scale": 2,
                        "precision": 12
                    }
                ],
                "order": "asc"
            }
        ]
    },
    "getpointproductmorebysource": {
        "name": "getPointProductMoreBySource",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "pack",
                "type": "bigint"
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id",
                        "owner": "product",
                        "arr": "packx"
                    },
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "origin",
                        "type": "char",
                        "size": 50
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
                        "name": "imageUrl",
                        "type": "char",
                        "size": 200
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
                        "name": "retail",
                        "type": "dec",
                        "scale": 2,
                        "precision": 12
                    }
                ]
            }
        ]
    },
    "product2c": {
        "name": "Product2c",
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
    "productcategoryresearchdomain": {
        "name": "ProductCategoryResearchDomain",
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
    "getrootcategories": {
        "name": "GetRootCategories",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            },
            {
                "name": "language",
                "type": "id",
                "ID": "language",
                "tuid": "language"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "productCategory",
                        "type": "int"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "total",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "getrootcategory": {
        "name": "GetRootCategory",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            },
            {
                "name": "language",
                "type": "id",
                "ID": "language",
                "tuid": "language"
            }
        ],
        "returns": [
            {
                "name": "first",
                "fields": [
                    {
                        "name": "productCategory",
                        "type": "id",
                        "ID": "productcategory",
                        "tuid": "productcategory"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "total",
                        "type": "int"
                    }
                ]
            },
            {
                "name": "secend",
                "fields": [
                    {
                        "name": "productCategory",
                        "type": "id",
                        "ID": "productcategory",
                        "tuid": "productcategory"
                    },
                    {
                        "name": "parent",
                        "type": "id"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "total",
                        "type": "int"
                    }
                ]
            },
            {
                "name": "third",
                "fields": [
                    {
                        "name": "productCategory",
                        "type": "id",
                        "ID": "productcategory",
                        "tuid": "productcategory"
                    },
                    {
                        "name": "parent",
                        "type": "id"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "total",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "getchildrencategory": {
        "name": "GetChildrenCategory",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "parent",
                "type": "id",
                "ID": "productcategory",
                "tuid": "productcategory"
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            },
            {
                "name": "language",
                "type": "id",
                "ID": "language",
                "tuid": "language"
            }
        ],
        "returns": [
            {
                "name": "first",
                "fields": [
                    {
                        "name": "productCategory",
                        "type": "id",
                        "ID": "productcategory",
                        "tuid": "productcategory"
                    },
                    {
                        "name": "parent",
                        "type": "id"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "total",
                        "type": "int"
                    }
                ]
            },
            {
                "name": "secend",
                "fields": [
                    {
                        "name": "productCategory",
                        "type": "id",
                        "ID": "productcategory",
                        "tuid": "productcategory"
                    },
                    {
                        "name": "parent",
                        "type": "id"
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "total",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "searchproductbycategory": {
        "name": "SearchProductByCategory",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "productCategory",
                "type": "id",
                "ID": "productcategory",
                "tuid": "productcategory"
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            },
            {
                "name": "language",
                "type": "id",
                "ID": "language",
                "tuid": "language"
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
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "no",
                        "type": "char",
                        "size": 20
                    },
                    {
                        "name": "brand",
                        "type": "id",
                        "ID": "brand",
                        "tuid": "brand"
                    },
                    {
                        "name": "origin",
                        "type": "char",
                        "size": 50
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
                        "name": "imageUrl",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "chemical",
                        "type": "id",
                        "ID": "chemical",
                        "tuid": "chemical"
                    },
                    {
                        "name": "CAS",
                        "type": "char",
                        "size": 20
                    },
                    {
                        "name": "purity",
                        "type": "char",
                        "size": 80
                    },
                    {
                        "name": "molecularFomula",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "molecularWeight",
                        "type": "char",
                        "size": 30
                    }
                ],
                "order": "asc"
            }
        ]
    },
    "countproductcategoryinclusion": {
        "name": "CountProductCategoryInclusion",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [] as any,
        "returns": [] as any
    },
    "addresearchproductcategory": {
        "name": "addResearchProductCategory",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "research",
                "type": "id"
            },
            {
                "name": "productCategory",
                "type": "id"
            }
        ],
        "returns": [] as any
    },
    "deleteresearchproductcategory": {
        "name": "deleteResearchProductCategory",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "research",
                "type": "id"
            },
            {
                "name": "productCategory",
                "type": "id"
            }
        ],
        "returns": [] as any
    },
    "getresearchbyproductcategory": {
        "name": "GetResearchByProductCategory",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "productCategory",
                "type": "id",
                "ID": "productcategory",
                "tuid": "productcategory"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "productCategory",
                        "type": "id",
                        "ID": "productcategory",
                        "tuid": "productcategory"
                    },
                    {
                        "name": "research",
                        "type": "id",
                        "ID": "research",
                        "tuid": "research"
                    }
                ]
            }
        ]
    },
    "getproductbyorigin": {
        "name": "GetProductByOrigin",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "origin",
                "type": "char",
                "size": 50
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    }
                ]
            }
        ]
    },
    "getproductpackbyorigin": {
        "name": "GetProductPackByOrigin",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "origin",
                "type": "char",
                "size": 50
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "pack",
                        "type": "id",
                        "owner": "product",
                        "arr": "packx"
                    }
                ]
            }
        ]
    },
    "getavailableproductbyid": {
        "name": "GetAvailableProductById",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "product",
                "type": "id",
                "ID": "productx",
                "tuid": "productx"
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "id",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "brand",
                        "type": "id",
                        "ID": "brand",
                        "tuid": "brand"
                    },
                    {
                        "name": "origin",
                        "type": "char",
                        "size": 50
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
                        "name": "imageUrl",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "no",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "isValid",
                        "type": "tinyint"
                    }
                ]
            }
        ]
    },
    "getfuturedeliverytime": {
        "name": "GetFutureDeliveryTime",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "product",
                "type": "id",
                "ID": "productx",
                "tuid": "productx"
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "minValue",
                        "type": "int"
                    },
                    {
                        "name": "maxValue",
                        "type": "int"
                    },
                    {
                        "name": "unit",
                        "type": "char",
                        "size": 10
                    },
                    {
                        "name": "deliveryTimeDescription",
                        "type": "char",
                        "size": 100
                    },
                    {
                        "name": "isRestrict",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "searchproduct": {
        "name": "SearchProduct",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "keyWord",
                "type": "char",
                "size": 100
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
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
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "no",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "brand",
                        "type": "id",
                        "ID": "brand",
                        "tuid": "brand"
                    },
                    {
                        "name": "origin",
                        "type": "char",
                        "size": 50
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
                        "name": "imageUrl",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "chemical",
                        "type": "id",
                        "ID": "chemical",
                        "tuid": "chemical"
                    },
                    {
                        "name": "CAS",
                        "type": "char",
                        "size": 20
                    },
                    {
                        "name": "purity",
                        "type": "char",
                        "size": 80
                    },
                    {
                        "name": "gradeCN",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "molecularFomula",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "molecularWeight",
                        "type": "char",
                        "size": 30
                    }
                ],
                "order": "asc"
            }
        ]
    },
    "getpack": {
        "name": "GetPack",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "brandName",
                "type": "char",
                "size": 20
            },
            {
                "name": "origin",
                "type": "char",
                "size": 50
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
                "size": 20
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "pack",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx",
                        "arr": "packx"
                    },
                    {
                        "name": "jkcat",
                        "type": "char",
                        "size": 50
                    }
                ]
            }
        ]
    },
    "getproductprices": {
        "name": "GetProductPrices",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "product",
                "type": "id",
                "ID": "productx",
                "tuid": "productx"
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "pack",
                        "type": "id",
                        "owner": "product",
                        "arr": "packx"
                    },
                    {
                        "name": "salesRegion",
                        "type": "id",
                        "ID": "salesregion",
                        "tuid": "salesregion"
                    },
                    {
                        "name": "retail",
                        "type": "dec",
                        "scale": 2,
                        "precision": 12
                    },
                    {
                        "name": "expireDate",
                        "type": "datetime"
                    },
                    {
                        "name": "discountinued",
                        "type": "tinyint"
                    },
                    {
                        "name": "salesLevel",
                        "type": "id",
                        "ID": "packsaleslevel",
                        "tuid": "packsaleslevel"
                    }
                ]
            }
        ]
    },
    "getproductbypackid": {
        "name": "GetProductByPackId",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "pack",
                "type": "id",
                "ID": "productx",
                "tuid": "productx",
                "arr": "packx"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "origin",
                        "type": "char",
                        "size": 50
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
                        "name": "brand",
                        "type": "id",
                        "ID": "brand",
                        "tuid": "brand"
                    },
                    {
                        "name": "brandName",
                        "type": "char",
                        "size": 50
                    }
                ]
            }
        ]
    },
    "getbrandsalesregion": {
        "name": "GetBrandSalesRegion",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
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
                        "name": "brand",
                        "type": "id",
                        "ID": "brand",
                        "tuid": "brand"
                    },
                    {
                        "name": "salesRegion",
                        "type": "id",
                        "ID": "salesregion",
                        "tuid": "salesregion"
                    },
                    {
                        "name": "level",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "pricexquery": {
        "name": "PriceXquery",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "product",
                "type": "id",
                "ID": "productx",
                "tuid": "productx"
            },
            {
                "name": "pack",
                "type": "id",
                "owner": "product",
                "arr": "packx"
            },
            {
                "name": "salesRegion",
                "type": "id",
                "ID": "salesregion",
                "tuid": "salesregion"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "product",
                        "type": "id",
                        "ID": "productx",
                        "tuid": "productx"
                    },
                    {
                        "name": "pack",
                        "type": "id",
                        "owner": "product",
                        "arr": "packx"
                    },
                    {
                        "name": "salesRegion",
                        "type": "id",
                        "ID": "salesregion",
                        "tuid": "salesregion"
                    },
                    {
                        "name": "expireDate",
                        "type": "datetime"
                    },
                    {
                        "name": "discountinued",
                        "type": "tinyint"
                    },
                    {
                        "name": "retail",
                        "type": "dec",
                        "scale": 2,
                        "precision": 12
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