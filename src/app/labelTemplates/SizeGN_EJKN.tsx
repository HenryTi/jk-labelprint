import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

import { ProductInfo } from "./component/ProductInfo";
import { ProductMetaInfo } from "./component/ProductMetaInfo";
import { ProductMetaInfo as ProductMetaInfoSmall } from "./component/ProductMetaInfoSmall";
import { ProductInfo as ProductInfoSmall } from "./component/ProductInfoSmall";
import { CountContext, iconUrl } from "app/tool";

export function SizeGN_EJKN(props: any) {
    const { template, tmplContent, iconMap } = useContext<any>(CountContext);
    let {
        id,
        CAS,
        description, // 英文名
        descriptionC, // 中文名
        hazard, // 危险
        lotNumber,
        radiox,
        radioy, // 左上角容量
        salesOrigin, // 左上角编码
        unit, // 包装单位
        position1, // MF
        position2, // MW
        position3, // MP
        position4, // BP
        position5, // FP
        position6, // desity
        position7, // UN
        position8, // 安全存储 store
        position9, // 预防措施和事故处理
        position10, // 危险说明
        position11, // 废弃内容
        position12, // Specifications
        position19,
    } = tmplContent || {};

    if (props === undefined) {
        return <div>
            props undefined in
            function SizeGN_EJKN(props: any)
        </div>
    }
    const {
        labelTemplate: { name, width, height, icon: signs },
    } = props;

    const isSmall = name.match(/\d+/) >= 70;
    return (
        <div
            className={`${name}-content div-box-shadow_e`}
            style={{ width, height }}
        >
            {iconMap
                .filter((icon: any) => {
                    return hazard?.indexOf(icon.name) > -1;
                })
                .map((icon: any, index: number) => {
                    return (
                        <img
                            alt="danger"
                            className={`${name}-content-icon${index + 1}`}
                            style={{
                                display: index > signs - 1 ? "none" : "inline",
                            }}
                            key={icon.name}
                            src={iconUrl(icon.src)}
                        />
                    );
                })}
            {!isSmall ? (
                <>
                    <ProductInfo
                        className={`${name} -content - info`}
                        description={description}
                        radioy={radioy}
                        unit={unit}
                        cat={""}
                        CAS={CAS}
                    />
                    <ProductMetaInfo
                        className={`${name} -content - meta__info`}
                        lotNumber={lotNumber}
                        EIENCE={""}
                        cat={""}
                        CAS={CAS}
                        UN={position7}
                        MF={position1}
                        MW={position2}
                        FP={position5}
                        store={position8}
                        BP={position4}
                        d={position6}
                    />
                </>
            ) : (
                <>
                    <ProductInfoSmall
                        className={`${name} -content - info`}
                        description={description}
                        radioy={radioy}
                        unit={unit}
                        cat={""}
                        CAS={CAS}
                    />
                    <ProductMetaInfoSmall
                        className={`${name} -content - meta__info`}
                        lotNumber={lotNumber}
                        EIENCE={""}
                        cat={""}
                        CAS={CAS}
                    />
                </>
            )}
            <div className={`${name} -content - danger`}>{position10}</div>
            <div className={`${name} -content - qr__code`}>
                <CreateQRCode value={position19} />
            </div>
        </div>
    );
}
