import { CountContext, iconUrl } from "app/tool";;
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

import { ProductInfo } from "./component/ProductInfo";
import { ProductMetaInfo } from "./component/ProductMetaInfo";

export function SizeG4_EJK43() {
    const { template, tmplContent, iconMap } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 118, height: 53 }, template);
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
    width = width + "mm";
    height = height + "mm";

    return (
        <div
            id="print_target_box11"
            className="ejk43-content div-box-shadow_e"
            style={{ width, height }}
        >
            {/* <div className="ejk43-content-icon1"></div>
            <div className="ejk43-content-icon2"></div>
            <div className="ejk43-content-icon3"></div> */}
            {iconMap
                .filter((icon: any) => {
                    return hazard?.indexOf(icon.name) > -1;
                })
                .map((icon: any, index: number) => {
                    return (
                        <img
                            alt="danger"
                            className={`ejk43-content-icon${index + 1}`}
                            style={{ display: index > 2 ? "none" : "inline" }}
                            key={icon.name}
                            src={iconUrl(icon.src)}
                        />
                    );
                })
            }
            <ProductInfo
                className="ejk43-content-info"
                description={description}
                radioy={radioy}
                unit={unit}
                cat={""}
                CAS={CAS}
            />
            <ProductMetaInfo
                className="ejk43-content-meta__info"
                lotNumber={lotNumber}
                EIENCE={""}
                UN={position7}
                MF={position1}
                MW={position2}
                FP={position5}
                store={position8}
                BP={position4}
                d={position6}
            />
            <div className="ejk43-content-danger">{position10}</div>
            <div className="ejk43-content-qr__code">
                <CreateQRCode value={position19} />
            </div>
        </div>
    );
}
