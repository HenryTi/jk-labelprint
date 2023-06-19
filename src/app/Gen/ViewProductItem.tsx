import { UqApp, useUqApp } from "app/UqApp";
import { GLOABLE } from "app/global";
import { useEffect, useState } from "react";

interface Props {
    id: number;
    Template?: (props: { value: any; }) => JSX.Element;
}

interface TuidProps extends Props {
    cache: TuidCache;
}

abstract class TuidCache {
    private readonly cache: { [id: number]: object } = {};
    private readonly cachePromise: { [id: number]: Promise<any> } = {};
    protected readonly uqApp: UqApp;

    constructor(uqApp: UqApp) {
        this.uqApp = uqApp;
    }

    abstract getObjFromId(id: number): Promise<any>;

    idCache(id: number) {
        let ret = this.cache[id];
        return ret;
    }

    idObj = async (id: number) => {
        let obj = this.cache[id];
        if (obj === undefined) {
            let promise = this.cachePromise[id];
            if (promise === undefined) {
                promise = this.getObjFromId(id);
                this.cachePromise[id] = promise;
            }
            obj = await promise;
            this.cache[id] = (obj === undefined) ? null : obj;
            delete this.cachePromise[id];
        }
        return obj;
    }
}

class ProductCache extends TuidCache {
    private readonly currentSalesRegion: number;

    constructor(uqApp: UqApp, currentSalesRegion: number) {
        super(uqApp);
        this.currentSalesRegion = currentSalesRegion;
    }

    async getObjFromId(id: number): Promise<any> {
        let ret = await this.uqApp.uqs.JkProduct.GetAvailableProductById.obj({
            product: id,
            salesRegion: this.currentSalesRegion,
        });
        return ret;
    }
}

function ViewTuid({ id, Template, cache }: TuidProps) {
    const [value, setValue] = useState(cache.idCache(id));
    useEffect(() => {
        (async function () {
            if (id === undefined || id === null) return;
            let obj = cache.idCache(id);
            if (obj === undefined) {
                obj = await cache.idObj(id);
            }
            setValue(obj);
        })();
    }, [id]);
    if (id === undefined || id === null) return null;
    if (value === undefined) return null;
    if (value === null) {
        return <div>id {id} is invalid</div>;
    }
    if (Template) {
        return <Template value={value} />;
    }
    return <>{JSON.stringify(value)}</>;
}

let productCache: ProductCache;
export function ViewProductItem({ id, Template }: Props) {
    let uqApp = useUqApp();
    if (productCache === undefined) {
        productCache = new ProductCache(uqApp, GLOABLE.SALESREGION_CN.id);
    }
    return <ViewTuid id={id} Template={Template} cache={productCache} />;
}
