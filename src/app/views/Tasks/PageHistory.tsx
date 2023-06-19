import { EasyDate, FA, List } from "tonwa-com";

import { None, Page, PageLoader } from "tonwa-app";
import { useUqApp } from "app/UqApp";
import { StoreTemplate } from "app/Gen/GenTemplate";
import { BRAND } from "app/constant/constant";
export function PageHistory() {
    const uqApp = useUqApp();
    async function loader() {
        let store = uqApp.objectOf(StoreTemplate);
        await store.getLabelPrintTaskPrinted();
    }
    return <PageLoader loader={loader} page={<PageContent />} />;
}

function PageContent() {
    const uqApp = useUqApp();
    const store = uqApp.objectOf(StoreTemplate);
    const { labelPrintTaskPrinted } = store;

    function ViewItem({ value }: { value: any }) {
        let {
            id,
            product: {
                props: { brand, origin },
            },
            pack,
            radiox,
            radioy,
            unit,
            quantity,
            lotNumber,
            bottle,
            language,
            isSolvent,
            labelInstance,
            labelTemplate,
            printDate
        } = value;
        return (
            <div id={`row_${id}`} className="row mx-0 small py-2">
                <div className="col-1 px-1 text-center">
                    {BRAND[brand]}
                </div>
                <div className="col-1 px-1 text-center">{id}</div>
                <div className="col-1 px-1 text-center">——</div>
                <div className="col-1 px-1 text-center">
                    {origin}
                </div>
                <div className="col-2 px-1 text-center">{labelInstance?.descriptionC}</div>
                <div className="col-1 px-1 text-center">{`${radioy}${unit}`}</div>
                <div className="col-1 px-1 text-center">{quantity}</div>

                <div className="col-1 px-1 text-center">
                    {labelTemplate?.name}
                </div>
                {/* <div className="col-1 px-1 text-center">——</div> */}
                <div className="col-1 px-1 text-center">
                    <EasyDate date={labelInstance?.createDate} />
                </div>
                <div className="col-1 px-1 text-center">
                    <EasyDate date={printDate} />
                </div>
                {/* <div className="col-1 px-1 text-center">
                    <small
                        onClick={() => {
                            // printTaskItem(value);
                        }}
                        className="cursor-pointer text-primary"
                    >
                        <FA name="print" size="2x" />
                    </small>
                    &nbsp;
                </div>
                <div className="col-1 px-1 text-center">
                    <JKModal
                        productId={id}
                        printTaskFinish={() => {
                            alert("hello");
                        }}
                    />
                </div> */}
            </div>
        );
    }

    // footer={<JKPageNation />}
    return <Page header="打印历史"  >
        {/* 打印任务的部分字段需要展示 */}
        <div className='row mx-0 small fw-bolder text-center bg-dark text-light' >
            <div className='col-1 px-1'>品牌</div>
            <div className='col-1 px-1'>货单号</div>
            <div className='col-1 px-1'>项目编号</div>
            <div className='col-1 px-1'>产品编号</div>
            <div className='col-2 px-1'>中文名称</div>
            <div className='col-1 px-1'>包装</div>
            <div className='col-1 px-1'>打印数量</div>
            <div className='col-1 px-1'>标签模板</div>
            {/* <div className='col-1 px-1'>型号</div> */}
            <div className='col-1 px-1'>申请时间</div>
            <div className='col-1 px-1'>打印时间</div>
            {/* <div className='col-1 px-1'>打印</div> */}
            {/* <div className='col-1 px-1'>操作</div> */}
        </div>

        <List
            items={labelPrintTaskPrinted}
            ViewItem={ViewItem}
            none={<None />}
        />
    </Page>
}
