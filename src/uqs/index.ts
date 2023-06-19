//=== UqApp builder created on Wed Jun 14 2023 11:02:02 GMT-0400 (Eastern Daylight Time) ===//
import * as UqDefault from './UqDefault';
import * as JkCustomer from './JkCustomer';
import * as JkProduct from './JkProduct';
import * as JkRDProduct from './JkRDProduct';

export interface UQs {
	UqDefault: UqDefault.UqExt;
	JkCustomer: JkCustomer.UqExt;
	JkProduct: JkProduct.UqExt;
	JkRDProduct: JkRDProduct.UqExt;
}

export const uqsSchema = {
	"百灵威系统工程部/labelprint": UqDefault.uqSchema,
	"百灵威系统工程部/customer": JkCustomer.uqSchema,
	"百灵威系统工程部/product": JkProduct.uqSchema,
	"百灵威系统工程部/RDProduct": JkRDProduct.uqSchema,
}

export * as UqDefault from './UqDefault';
export * as JkCustomer from './JkCustomer';
export * as JkProduct from './JkProduct';
export * as JkRDProduct from './JkRDProduct';
