//=== UqApp builder created on Wed Jun 14 2023 11:02:02 GMT-0400 (Eastern Daylight Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqID, UqIX, UqQuery, UqAction, UqIDX } from "tonwa-uq";
// eslint-disable-next-line @typescript-eslint/no-unused-vars


//===============================;
//======= UQ 百灵威系统工程部/RDProduct ========;
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
	PackBottle = 'packbottle',
	PackCover = 'packcover',
	PackGaddi = 'packgaddi',
	PackOuter = 'packouter',
	ProductionScale = 'productionscale',
	Product = 'product',
	Pack = 'pack',
	StorageClassOfGermany = 'storageclassofgermany',
	ExportCarry = 'exportcarry',
	PublishType = 'publishtype',
	PublishTypeUpdReason = 'publishtypeupdreason',
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

export interface PackBottle extends ID {
	no?: string;
	code: string;
	name: string;
	description: string;
}

export interface PackBottleInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	code: string;
	name: string;
	description: string;
}

export interface PackCover extends ID {
	no?: string;
	code: string;
	name: string;
	description: string;
}

export interface PackCoverInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	code: string;
	name: string;
	description: string;
}

export interface PackGaddi extends ID {
	no?: string;
	code: string;
	name: string;
	description: string;
}

export interface PackGaddiInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	code: string;
	name: string;
	description: string;
}

export interface PackOuter extends ID {
	no?: string;
	code: string;
	name: string;
	description: string;
}

export interface PackOuterInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	code: string;
	name: string;
	description: string;
}

export interface RDPackMaterial extends IDX {
	id: number;
	bottle?: number;
	cover?: number;
	gaddi?: number;
	outer?: number;
	locked?: number;
	$act?: number;
}export interface ActParamRDPackMaterial {
	id: number|IDXValue;
	bottle?: number|IDXValue;
	cover?: number|IDXValue;
	gaddi?: number|IDXValue;
	outer?: number|IDXValue;
	locked?: number|IDXValue;
	$act?: number;
}

export interface ParamSearchPackBottleByKey {
	key: string;
}
export interface ReturnSearchPackBottleByKeyRet {
	id: number;
	no: string;
	code: string;
	name: string;
	description: string;
}
export interface ResultSearchPackBottleByKey {
	ret: ReturnSearchPackBottleByKeyRet[];
}

export interface ParamGetPackBottle {
	key: string;
}
export interface ReturnGetPackBottleRet {
	id: number;
	no: string;
	code: string;
	name: string;
	description: string;
}
export interface ResultGetPackBottle {
	ret: ReturnGetPackBottleRet[];
}

export interface ParamGetPackCover {
	key: string;
}
export interface ReturnGetPackCoverRet {
	id: number;
	no: string;
	code: string;
	name: string;
	description: string;
}
export interface ResultGetPackCover {
	ret: ReturnGetPackCoverRet[];
}

export interface ParamGetPackGaddi {
	key: string;
}
export interface ReturnGetPackGaddiRet {
	id: number;
	no: string;
	code: string;
	name: string;
	description: string;
}
export interface ResultGetPackGaddi {
	ret: ReturnGetPackGaddiRet[];
}

export interface ParamGetPackOuter {
	key: string;
}
export interface ReturnGetPackOuterRet {
	id: number;
	no: string;
	code: string;
	name: string;
	description: string;
}
export interface ResultGetPackOuter {
	ret: ReturnGetPackOuterRet[];
}

export interface ProductionScale extends ID {
	no?: string;
	description: string;
	createTime: any;
}

export interface ProductionScaleInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	description: string;
	createTime: any;
}

export interface Product extends ID {
	no?: string;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	isValid: number;
}

export interface ProductInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	brand: number | ID;
	origin: string;
	description: string;
	descriptionC: string;
	isValid: number;
}

export interface Pack extends ID {
	product: number;
	no?: string;
	radiox: number;
	radioy: number;
	unit: string;
}

export interface PackInActs extends ID {
	ID?: UqID<any>;
	product: number | ID;
	no?: string;
	radiox: number;
	radioy: number;
	unit: string;
}

export interface Price extends IX {
	retail: number;
	expireDate: any;
	discountinued: number;
	POA: number;
	isBulk: number;
}

export interface ProductChemical extends IDX {
	id: number;
	chemical?: number;
	CAS?: string;
	purity?: string;
	molecularFomula?: string;
	molecularWeight?: string;
	mdlNumber?: string;
	synonymity?: string;
	synonymityC?: string;
	alias?: string;
	appearance?: string;
	grade?: string;
	gradeCN?: string;
	FP?: string;
	FPmmHg?: number;
	FPMeasurement?: string;
	MP?: string;
	MPmmHg?: number;
	BP?: string;
	BPmmHg?: number;
	density?: string;
	densityCelsius?: number;
	densityUnit?: string;
	RI?: string;
	SR?: string;
	LF?: string;
	LR?: string;
	BI?: string;
	CI?: number;
	WGK?: string;
	RTECS?: string;
	TSCA?: number;
	UN?: string;
	exportCarry?: number;
	exportDGM?: number;
	exportRestriction?: number;
	HValue?: string;
	PValue?: string;
	R?: string;
	S?: string;
	riskSign?: string;
	hazardClass?: string;
	subRisk?: string;
	packingG?: string;
	durability?: number;
	sc_purity?: number;
	MD?: string;
	storage?: number;
	storageClassID?: number;
	ADRRID?: string;
	ADR?: string;
	crossR?: string;
	indexNo?: string;
	Merck?: string;
	Fieser?: string;
	Beilstein?: string;
	EINECS?: string;
	$act?: number;
}export interface ActParamProductChemical {
	id: number|IDXValue;
	chemical?: number|IDXValue;
	CAS?: string|IDXValue;
	purity?: string|IDXValue;
	molecularFomula?: string|IDXValue;
	molecularWeight?: string|IDXValue;
	mdlNumber?: string|IDXValue;
	synonymity?: string|IDXValue;
	synonymityC?: string|IDXValue;
	alias?: string|IDXValue;
	appearance?: string|IDXValue;
	grade?: string|IDXValue;
	gradeCN?: string|IDXValue;
	FP?: string|IDXValue;
	FPmmHg?: number|IDXValue;
	FPMeasurement?: string|IDXValue;
	MP?: string|IDXValue;
	MPmmHg?: number|IDXValue;
	BP?: string|IDXValue;
	BPmmHg?: number|IDXValue;
	density?: string|IDXValue;
	densityCelsius?: number|IDXValue;
	densityUnit?: string|IDXValue;
	RI?: string|IDXValue;
	SR?: string|IDXValue;
	LF?: string|IDXValue;
	LR?: string|IDXValue;
	BI?: string|IDXValue;
	CI?: number|IDXValue;
	WGK?: string|IDXValue;
	RTECS?: string|IDXValue;
	TSCA?: number|IDXValue;
	UN?: string|IDXValue;
	exportCarry?: number|IDXValue;
	exportDGM?: number|IDXValue;
	exportRestriction?: number|IDXValue;
	HValue?: string|IDXValue;
	PValue?: string|IDXValue;
	R?: string|IDXValue;
	S?: string|IDXValue;
	riskSign?: string|IDXValue;
	hazardClass?: string|IDXValue;
	subRisk?: string|IDXValue;
	packingG?: string|IDXValue;
	durability?: number|IDXValue;
	sc_purity?: number|IDXValue;
	MD?: string|IDXValue;
	storage?: number|IDXValue;
	storageClassID?: number|IDXValue;
	ADRRID?: string|IDXValue;
	ADR?: string|IDXValue;
	crossR?: string|IDXValue;
	indexNo?: string|IDXValue;
	Merck?: string|IDXValue;
	Fieser?: string|IDXValue;
	Beilstein?: string|IDXValue;
	EINECS?: string|IDXValue;
	$act?: number;
}

export interface ProductSalesRegion extends IX {
	isValid: number;
}

export interface SalesProduct extends IX {
	salesOrigin: string;
}

export interface ProductStorageConditionSpecial extends IX {
}

export interface StorageClassOfGermany extends ID {
	no?: string;
	code: string;
	description: string;
	descriptionC: string;
}

export interface StorageClassOfGermanyInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	code: string;
	description: string;
	descriptionC: string;
}

export interface ExportCarry extends ID {
	no?: string;
	description: string;
	descriptionC: string;
	createTime: any;
}

export interface ExportCarryInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	description: string;
	descriptionC: string;
	createTime: any;
}

export interface ProductMolText extends IDX {
	id: number;
	mol_text?: string;
	ISHaveCDX?: number;
	isValid?: number;
	createTime?: any;
	creator?: number;
	$act?: number;
}export interface ActParamProductMolText {
	id: number|IDXValue;
	mol_text?: string|IDXValue;
	ISHaveCDX?: number|IDXValue;
	isValid?: number|IDXValue;
	createTime?: any|IDXValue;
	creator?: number|IDXValue;
	$act?: number;
}

export interface ProductGHSHazardStatement extends IX {
	sequence: number;
}

export interface ProductGHSPrecautionaryStatement extends IX {
	sequence: number;
}

export interface ProductGHSPictogram extends IX {
	sequence: number;
}

export interface PublishType extends ID {
	no?: string;
	name: string;
	description: string;
}

export interface PublishTypeInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	name: string;
	description: string;
}

export interface PublishTypeUpdReason extends ID {
	no?: string;
	publishType: number;
	reason: string;
	description: string;
}

export interface PublishTypeUpdReasonInActs extends ID {
	ID?: UqID<any>;
	no?: string;
	publishType: number | ID;
	reason: string;
	description: string;
}

export interface ProductPublishType extends IX {
}

export interface ParamGetProductListCount {
	key: string;
}
export interface ReturnGetProductListCountRet {
	count: number;
}
export interface ResultGetProductListCount {
	ret: ReturnGetProductListCountRet[];
}

export interface ParamGetProductList {
	key: string;
	pageSize: number;
	page: number;
}
export interface ReturnGetProductListRet {
	id: number;
	no: string;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	isValid: number;
}
export interface ResultGetProductList {
	ret: ReturnGetProductListRet[];
}

export interface ParamGetProductionScaleByProductId {
	id: number;
}
export interface ReturnGetProductionScaleByProductIdRet {
	description: string;
}
export interface ResultGetProductionScaleByProductId {
	ret: ReturnGetProductionScaleByProductIdRet[];
}

export interface ParamGetExportCarry {
	id: number;
}
export interface ReturnGetExportCarryRet {
	id: number;
	no: string;
	description: string;
	descriptionC: string;
}
export interface ResultGetExportCarry {
	ret: ReturnGetExportCarryRet[];
}

export interface ParamGetStorageClassOfGermany {
	id: number;
}
export interface ReturnGetStorageClassOfGermanyRet {
	id: number;
	no: string;
	code: string;
	description: string;
	descriptionC: string;
}
export interface ResultGetStorageClassOfGermany {
	ret: ReturnGetStorageClassOfGermanyRet[];
}

export interface ParamGetPublishTypeByProductId {
	id: number;
}
export interface ReturnGetPublishTypeByProductIdRet {
	id: number;
	no: string;
	name: string;
	description: string;
}
export interface ResultGetPublishTypeByProductId {
	ret: ReturnGetPublishTypeByProductIdRet[];
}

export interface ParamPublishProduct {
	product: number;
	publishType: number;
	updateReasonID: number;
	note: string;
	creator: number;
	beforeType: number;
}
export interface ReturnPublishProductRet {
	id: number;
}
export interface ResultPublishProduct {
	ret: ReturnPublishProductRet[];
}

export interface ParamGetPackListCount {
	id: number;
	xi: number;
}
export interface ReturnGetPackListCountRet {
	count: number;
}
export interface ResultGetPackListCount {
	ret: ReturnGetPackListCountRet[];
}

export interface ParamGetPackList {
	id: number;
	pageSize: number;
	page: number;
	xi: number;
}
export interface ReturnGetPackListRet {
	id: number;
	product: number;
	radiox: number;
	radioy: number;
	unit: string;
	bottle: number;
	cover: number;
	gaddi: number;
	outer: number;
	locked: number;
	xi: number;
	retail: number;
	expireDate: any;
	discountinued: number;
	POA: number;
	isBulk: number;
}
export interface ResultGetPackList {
	ret: ReturnGetPackListRet[];
}

export interface ParamSaveOrUpdatePack {
	id: number;
	product: number;
	radiox: number;
	radioy: number;
	unit: string;
	bottle: number;
	cover: number;
	gaddi: number;
	outer: number;
	locked: number;
	xi: number;
	retail: number;
	expireDate: any;
	discountinued: number;
	POA: number;
	isBulk: number;
}
export interface ReturnSaveOrUpdatePackRet {
	productID: number;
}
export interface ResultSaveOrUpdatePack {
	ret: ReturnSaveOrUpdatePackRet[];
}



export interface ParamActs {
	$phrase?: $phraseInActs[];
	$ixphrase?: $ixphrase[];
	packBottle?: PackBottleInActs[];
	packCover?: PackCoverInActs[];
	packGaddi?: PackGaddiInActs[];
	packOuter?: PackOuterInActs[];
	rDPackMaterial?: ActParamRDPackMaterial[];
	productionScale?: ProductionScaleInActs[];
	product?: ProductInActs[];
	pack?: PackInActs[];
	price?: Price[];
	productChemical?: ActParamProductChemical[];
	productSalesRegion?: ProductSalesRegion[];
	salesProduct?: SalesProduct[];
	productStorageConditionSpecial?: ProductStorageConditionSpecial[];
	storageClassOfGermany?: StorageClassOfGermanyInActs[];
	exportCarry?: ExportCarryInActs[];
	productMolText?: ActParamProductMolText[];
	productGHSHazardStatement?: ProductGHSHazardStatement[];
	productGHSPrecautionaryStatement?: ProductGHSPrecautionaryStatement[];
	productGHSPictogram?: ProductGHSPictogram[];
	publishType?: PublishTypeInActs[];
	publishTypeUpdReason?: PublishTypeUpdReasonInActs[];
	productPublishType?: ProductPublishType[];
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
	PackBottle: UqID<any>;
	PackCover: UqID<any>;
	PackGaddi: UqID<any>;
	PackOuter: UqID<any>;
	RDPackMaterial: UqIDX<any>;
	SearchPackBottleByKey: UqQuery<ParamSearchPackBottleByKey, ResultSearchPackBottleByKey>;
	GetPackBottle: UqQuery<ParamGetPackBottle, ResultGetPackBottle>;
	GetPackCover: UqQuery<ParamGetPackCover, ResultGetPackCover>;
	GetPackGaddi: UqQuery<ParamGetPackGaddi, ResultGetPackGaddi>;
	GetPackOuter: UqQuery<ParamGetPackOuter, ResultGetPackOuter>;
	ProductionScale: UqID<any>;
	Product: UqID<any>;
	Pack: UqID<any>;
	Price: UqIX<any>;
	ProductChemical: UqIDX<any>;
	ProductSalesRegion: UqIX<any>;
	SalesProduct: UqIX<any>;
	ProductStorageConditionSpecial: UqIX<any>;
	StorageClassOfGermany: UqID<any>;
	ExportCarry: UqID<any>;
	ProductMolText: UqIDX<any>;
	ProductGHSHazardStatement: UqIX<any>;
	ProductGHSPrecautionaryStatement: UqIX<any>;
	ProductGHSPictogram: UqIX<any>;
	PublishType: UqID<any>;
	PublishTypeUpdReason: UqID<any>;
	ProductPublishType: UqIX<any>;
	GetProductListCount: UqQuery<ParamGetProductListCount, ResultGetProductListCount>;
	GetProductList: UqQuery<ParamGetProductList, ResultGetProductList>;
	GetProductionScaleByProductId: UqQuery<ParamGetProductionScaleByProductId, ResultGetProductionScaleByProductId>;
	GetExportCarry: UqQuery<ParamGetExportCarry, ResultGetExportCarry>;
	GetStorageClassOfGermany: UqQuery<ParamGetStorageClassOfGermany, ResultGetStorageClassOfGermany>;
	GetPublishTypeByProductId: UqQuery<ParamGetPublishTypeByProductId, ResultGetPublishTypeByProductId>;
	PublishProduct: UqAction<ParamPublishProduct, ResultPublishProduct>;
	GetPackListCount: UqQuery<ParamGetPackListCount, ResultGetPackListCount>;
	GetPackList: UqQuery<ParamGetPackList, ResultGetPackList>;
	SaveOrUpdatePack: UqAction<ParamSaveOrUpdatePack, ResultSaveOrUpdatePack>;
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
    "packbottle": {
        "name": "PackBottle",
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
                "name": "no",
                "type": "char",
                "size": 50
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
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 3,
        "isMinute": false
    },
    "packcover": {
        "name": "PackCover",
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
                "name": "no",
                "type": "char",
                "size": 50
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
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 3,
        "isMinute": false
    },
    "packgaddi": {
        "name": "PackGaddi",
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
                "name": "no",
                "type": "char",
                "size": 50
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
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 3,
        "isMinute": false
    },
    "packouter": {
        "name": "PackOuter",
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
                "name": "no",
                "type": "char",
                "size": 50
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
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 3,
        "isMinute": false
    },
    "rdpackmaterial": {
        "name": "RDPackMaterial",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "bottle",
                "type": "id",
                "ID": "packbottle",
                "tuid": "packbottle"
            },
            {
                "name": "cover",
                "type": "id",
                "ID": "packcover",
                "tuid": "packcover"
            },
            {
                "name": "gaddi",
                "type": "id",
                "ID": "packgaddi",
                "tuid": "packgaddi"
            },
            {
                "name": "outer",
                "type": "id",
                "ID": "packouter",
                "tuid": "packouter"
            },
            {
                "name": "locked",
                "type": "tinyint"
            }
        ],
        "update": true
    },
    "searchpackbottlebykey": {
        "name": "SearchPackBottleByKey",
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
                "name": "ret",
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
                    }
                ]
            }
        ]
    },
    "getpackbottle": {
        "name": "GetPackBottle",
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
                "name": "ret",
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
                    }
                ]
            }
        ]
    },
    "getpackcover": {
        "name": "GetPackCover",
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
                "name": "ret",
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
                    }
                ]
            }
        ]
    },
    "getpackgaddi": {
        "name": "GetPackGaddi",
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
                "name": "ret",
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
                    }
                ]
            }
        ]
    },
    "getpackouter": {
        "name": "GetPackOuter",
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
                "name": "ret",
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
                    }
                ]
            }
        ]
    },
    "productionscale": {
        "name": "ProductionScale",
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
                "name": "no",
                "type": "char",
                "size": 50
            },
            {
                "name": "description",
                "type": "char",
                "size": 50
            },
            {
                "name": "createTime",
                "type": "datetime"
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "product": {
        "name": "Product",
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
                "name": "no",
                "type": "char",
                "size": 50
            },
            {
                "name": "brand",
                "type": "id"
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
                "name": "isValid",
                "type": "tinyint",
                "null": false
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 3,
        "isMinute": false
    },
    "pack": {
        "name": "Pack",
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
                "type": "id",
                "ID": "product",
                "tuid": "product"
            },
            {
                "name": "no",
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
                "size": 10
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 3,
        "isMinute": false
    },
    "price": {
        "name": "Price",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id",
                "ID": "$nu",
                "tuid": "$nu"
            },
            {
                "name": "xi",
                "type": "id"
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
                "type": "tinyint",
                "null": false
            },
            {
                "name": "POA",
                "type": "tinyint"
            },
            {
                "name": "isBulk",
                "type": "tinyint"
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "productchemical": {
        "name": "ProductChemical",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "chemical",
                "type": "id"
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
            },
            {
                "name": "mdlNumber",
                "type": "char",
                "size": 12
            },
            {
                "name": "synonymity",
                "type": "char",
                "size": 200
            },
            {
                "name": "synonymityC",
                "type": "char",
                "size": 200
            },
            {
                "name": "alias",
                "type": "char",
                "size": 200
            },
            {
                "name": "appearance",
                "type": "char",
                "size": 100
            },
            {
                "name": "grade",
                "type": "char",
                "size": 200
            },
            {
                "name": "gradeCN",
                "type": "char",
                "size": 200
            },
            {
                "name": "FP",
                "type": "char",
                "size": 30
            },
            {
                "name": "FPmmHg",
                "type": "dec",
                "scale": 2,
                "precision": 12
            },
            {
                "name": "FPMeasurement",
                "type": "char",
                "size": 10
            },
            {
                "name": "MP",
                "type": "char",
                "size": 30
            },
            {
                "name": "MPmmHg",
                "type": "dec",
                "scale": 2,
                "precision": 12
            },
            {
                "name": "BP",
                "type": "char",
                "size": 30
            },
            {
                "name": "BPmmHg",
                "type": "dec",
                "scale": 2,
                "precision": 12
            },
            {
                "name": "density",
                "type": "char",
                "size": 10
            },
            {
                "name": "densityCelsius",
                "type": "dec",
                "scale": 4,
                "precision": 12
            },
            {
                "name": "densityUnit",
                "type": "char",
                "size": 10
            },
            {
                "name": "RI",
                "type": "char",
                "size": 50
            },
            {
                "name": "SR",
                "type": "char",
                "size": 50
            },
            {
                "name": "LF",
                "type": "char",
                "size": 50
            },
            {
                "name": "LR",
                "type": "char",
                "size": 10
            },
            {
                "name": "BI",
                "type": "char",
                "size": 10
            },
            {
                "name": "CI",
                "type": "int"
            },
            {
                "name": "WGK",
                "type": "char",
                "size": 50
            },
            {
                "name": "RTECS",
                "type": "char",
                "size": 50
            },
            {
                "name": "TSCA",
                "type": "int"
            },
            {
                "name": "UN",
                "type": "char",
                "size": 12
            },
            {
                "name": "exportCarry",
                "type": "id",
                "ID": "exportcarry",
                "tuid": "exportcarry"
            },
            {
                "name": "exportDGM",
                "type": "tinyint"
            },
            {
                "name": "exportRestriction",
                "type": "tinyint"
            },
            {
                "name": "HValue",
                "type": "char",
                "size": 100
            },
            {
                "name": "PValue",
                "type": "char",
                "size": 100
            },
            {
                "name": "R",
                "type": "char",
                "size": 200
            },
            {
                "name": "S",
                "type": "char",
                "size": 200
            },
            {
                "name": "riskSign",
                "type": "char",
                "size": 20
            },
            {
                "name": "hazardClass",
                "type": "char",
                "size": 30
            },
            {
                "name": "subRisk",
                "type": "char",
                "size": 30
            },
            {
                "name": "packingG",
                "type": "char",
                "size": 10
            },
            {
                "name": "durability",
                "type": "int"
            },
            {
                "name": "sc_purity",
                "type": "dec",
                "scale": 4,
                "precision": 12
            },
            {
                "name": "MD",
                "type": "char",
                "size": 100
            },
            {
                "name": "storage",
                "type": "id"
            },
            {
                "name": "storageClassID",
                "type": "id",
                "ID": "storageclassofgermany",
                "tuid": "storageclassofgermany"
            },
            {
                "name": "ADRRID",
                "type": "char",
                "size": 10
            },
            {
                "name": "ADR",
                "type": "char",
                "size": 8
            },
            {
                "name": "crossR",
                "type": "char",
                "size": 50
            },
            {
                "name": "indexNo",
                "type": "char",
                "size": 50
            },
            {
                "name": "Merck",
                "type": "char",
                "size": 50
            },
            {
                "name": "Fieser",
                "type": "char",
                "size": 50
            },
            {
                "name": "Beilstein",
                "type": "char",
                "size": 50
            },
            {
                "name": "EINECS",
                "type": "char",
                "size": 50
            }
        ],
        "update": true
    },
    "productsalesregion": {
        "name": "ProductSalesRegion",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id",
                "ID": "$nu",
                "tuid": "$nu"
            },
            {
                "name": "xi",
                "type": "id"
            },
            {
                "name": "isValid",
                "type": "tinyint",
                "null": false
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "salesproduct": {
        "name": "SalesProduct",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id",
                "ID": "$nu",
                "tuid": "$nu"
            },
            {
                "name": "xi",
                "type": "id"
            },
            {
                "name": "salesOrigin",
                "type": "char",
                "size": 50
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "productstorageconditionspecial": {
        "name": "ProductStorageConditionSpecial",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id",
                "ID": "$nu",
                "tuid": "$nu"
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
    "storageclassofgermany": {
        "name": "StorageClassOfGermany",
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
                "name": "no",
                "type": "char",
                "size": 50
            },
            {
                "name": "code",
                "type": "char",
                "size": 20
            },
            {
                "name": "description",
                "type": "char",
                "size": 300
            },
            {
                "name": "descriptionC",
                "type": "char",
                "size": 300
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "exportcarry": {
        "name": "ExportCarry",
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
                "name": "no",
                "type": "char",
                "size": 50
            },
            {
                "name": "description",
                "type": "char",
                "size": 200
            },
            {
                "name": "descriptionC",
                "type": "char",
                "size": 200
            },
            {
                "name": "createTime",
                "type": "datetime"
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "productmoltext": {
        "name": "ProductMolText",
        "type": "idx",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "mol_text",
                "type": "text"
            },
            {
                "name": "ISHaveCDX",
                "type": "int",
                "null": false
            },
            {
                "name": "isValid",
                "type": "int",
                "null": false
            },
            {
                "name": "createTime",
                "type": "datetime"
            },
            {
                "name": "creator",
                "type": "id"
            }
        ],
        "update": true
    },
    "productghshazardstatement": {
        "name": "ProductGHSHazardStatement",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id",
                "ID": "$nu",
                "tuid": "$nu"
            },
            {
                "name": "xi",
                "type": "id"
            },
            {
                "name": "sequence",
                "type": "tinyint"
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "productghsprecautionarystatement": {
        "name": "ProductGHSPrecautionaryStatement",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id",
                "ID": "$nu",
                "tuid": "$nu"
            },
            {
                "name": "xi",
                "type": "id"
            },
            {
                "name": "sequence",
                "type": "tinyint"
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "productghspictogram": {
        "name": "ProductGHSPictogram",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id",
                "ID": "$nu",
                "tuid": "$nu"
            },
            {
                "name": "xi",
                "type": "id"
            },
            {
                "name": "sequence",
                "type": "tinyint"
            }
        ],
        "ixx": false,
        "hasSort": false,
        "xiType": 0
    },
    "publishtype": {
        "name": "PublishType",
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
                "name": "no",
                "type": "char",
                "size": 50
            },
            {
                "name": "name",
                "type": "char",
                "size": 200
            },
            {
                "name": "description",
                "type": "char",
                "size": 4000
            }
        ],
        "keys": [] as any,
        "global": false,
        "idType": 12,
        "isMinute": false
    },
    "publishtypeupdreason": {
        "name": "PublishTypeUpdReason",
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
                "name": "no",
                "type": "char",
                "size": 50
            },
            {
                "name": "publishType",
                "type": "id",
                "ID": "publishtype",
                "tuid": "publishtype"
            },
            {
                "name": "reason",
                "type": "char",
                "size": 50
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
    "productpublishtype": {
        "name": "ProductPublishType",
        "type": "ix",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "ix",
                "type": "id",
                "ID": "$nu",
                "tuid": "$nu"
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
    "getproductlistcount": {
        "name": "GetProductListCount",
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
                "name": "ret",
                "fields": [
                    {
                        "name": "count",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "getproductlist": {
        "name": "GetProductList",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "key",
                "type": "char",
                "size": 100
            },
            {
                "name": "pageSize",
                "type": "int"
            },
            {
                "name": "page",
                "type": "int"
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
                        "name": "no",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "brand",
                        "type": "id"
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
                        "name": "isValid",
                        "type": "tinyint",
                        "null": false
                    }
                ]
            }
        ]
    },
    "getproductionscalebyproductid": {
        "name": "GetProductionScaleByProductId",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "ID": "product",
                "tuid": "product"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "description",
                        "type": "char",
                        "size": 50
                    }
                ]
            }
        ]
    },
    "getexportcarry": {
        "name": "GetExportCarry",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
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
                        "name": "no",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "description",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "descriptionC",
                        "type": "char",
                        "size": 200
                    }
                ]
            }
        ]
    },
    "getstorageclassofgermany": {
        "name": "GetStorageClassOfGermany",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
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
                        "name": "no",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "code",
                        "type": "char",
                        "size": 20
                    },
                    {
                        "name": "description",
                        "type": "char",
                        "size": 300
                    },
                    {
                        "name": "descriptionC",
                        "type": "char",
                        "size": 300
                    }
                ]
            }
        ]
    },
    "getpublishtypebyproductid": {
        "name": "GetPublishTypeByProductId",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id",
                "ID": "product",
                "tuid": "product"
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
                        "name": "no",
                        "type": "char",
                        "size": 50
                    },
                    {
                        "name": "name",
                        "type": "char",
                        "size": 200
                    },
                    {
                        "name": "description",
                        "type": "char",
                        "size": 4000
                    }
                ]
            }
        ]
    },
    "publishproduct": {
        "name": "PublishProduct",
        "type": "action",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "product",
                "type": "id"
            },
            {
                "name": "publishType",
                "type": "id"
            },
            {
                "name": "updateReasonID",
                "type": "id"
            },
            {
                "name": "note",
                "type": "text"
            },
            {
                "name": "creator",
                "type": "id"
            },
            {
                "name": "beforeType",
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
                    }
                ]
            }
        ]
    },
    "getpacklistcount": {
        "name": "GetPackListCount",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "xi",
                "type": "id"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "count",
                        "type": "int"
                    }
                ]
            }
        ]
    },
    "getpacklist": {
        "name": "GetPackList",
        "type": "query",
        "private": false,
        "sys": true,
        "fields": [
            {
                "name": "id",
                "type": "id"
            },
            {
                "name": "pageSize",
                "type": "int"
            },
            {
                "name": "page",
                "type": "int"
            },
            {
                "name": "xi",
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
                        "name": "product",
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
                        "name": "bottle",
                        "type": "id"
                    },
                    {
                        "name": "cover",
                        "type": "id"
                    },
                    {
                        "name": "gaddi",
                        "type": "id"
                    },
                    {
                        "name": "outer",
                        "type": "id"
                    },
                    {
                        "name": "locked",
                        "type": "int"
                    },
                    {
                        "name": "xi",
                        "type": "id"
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
                        "name": "POA",
                        "type": "tinyint"
                    },
                    {
                        "name": "isBulk",
                        "type": "tinyint"
                    }
                ]
            }
        ]
    },
    "saveorupdatepack": {
        "name": "saveOrUpdatePack",
        "type": "action",
        "private": false,
        "sys": true,
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
                "name": "radiox",
                "type": "int"
            },
            {
                "name": "radioy",
                "type": "int"
            },
            {
                "name": "unit",
                "type": "char",
                "size": 50
            },
            {
                "name": "bottle",
                "type": "id"
            },
            {
                "name": "cover",
                "type": "id"
            },
            {
                "name": "gaddi",
                "type": "id"
            },
            {
                "name": "outer",
                "type": "id"
            },
            {
                "name": "locked",
                "type": "int"
            },
            {
                "name": "xi",
                "type": "id"
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
                "name": "POA",
                "type": "tinyint"
            },
            {
                "name": "isBulk",
                "type": "tinyint"
            }
        ],
        "returns": [
            {
                "name": "ret",
                "fields": [
                    {
                        "name": "productID",
                        "type": "id"
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