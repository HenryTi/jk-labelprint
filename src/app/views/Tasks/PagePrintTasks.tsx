import { List, FA, EasyDate } from "tonwa-com";
import { useState } from "react";
import { None, Page, PageLoader, useModal } from "tonwa-app";
import { StoreTemplate } from "app/Gen/GenTemplate";
import { useUqApp } from "app/UqApp";
import { PagePrintTaskItem } from "./PagePrintTaskItem";
import { PageHistory } from "./PageHistory";
import { BRAND } from "app/constant/constant";
import JKPopover from "app/component/JKPopover";
import JKModal from "app/component/JKModal";
import { ViewProductItem } from "app/Gen";

/**
 * 打印任务列表
 */
export function PagePrintTasks() {
    const uqApp = useUqApp();
    async function loader() {
        let store = uqApp.objectOf(StoreTemplate);
        await store.init();
    }
    return <PageLoader loader={loader} page={<PageContent />} />;
}

function PageContent() {
    const uqApp = useUqApp();
    const store = uqApp.objectOf(StoreTemplate);
    const { openModal } = useModal();
    const {
        subLabelPrintTaskFinish,
        labelPrintTask
    } = store;
    const [filterLabelPrintTask, setFilterLabelPrintTask] =
        useState<any[]>(labelPrintTask);
    const labelOptions = [
        ...new Set(
            labelPrintTask.map((task) => task.labelTemplate?.name ?? "")
        ),
    ];
    function printTaskItem(param: any) {
        openModal(<PagePrintTaskItem param={param} />);
    }

    /**
     * 当前打印任务的完成
     * @param id
     * @param result
     */
    async function printTaskFinish(id: number, result: number) {
        await subLabelPrintTaskFinish(id, result);
        document.getElementById(`row_${id}`).style.display = "none";
    }
    /**
     * 筛选标签名
     * @param labelName jkPopover 传递过来的标签名
     */
    function printTaskFilter(labelName: string) {
        if (!labelName) {
            setFilterLabelPrintTask(labelPrintTask);
            return;
        }
        const tasks = labelPrintTask.filter(
            (task: any) => task?.labelTemplate?.name === labelName
        );
        setFilterLabelPrintTask(tasks);
    }

    async function handleOpenHistory() {
        openModal(<PageHistory />);
    }

    function ViewItem({ value }: { value: any }) {
        let {
            id,
            product,
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
        } = value;
        /*
        let brand: any, origin: any;
        if (props) {
            brand = props.brand;
            origin = props.origin;
        }
        */
        function Template({ value: product }: { value: any }) {
            let { brand, origin } = product;
            return <div id={`row_${id}`} className="row mx-0 small py-2">
                <div className="col-1 px-1 text-center align-self-center">
                    {BRAND[brand]}
                </div>
                <div className="col-1 px-1 text-center align-self-center">
                    {id}
                </div>
                <div className="col-1 px-1 text-center align-self-center">
                    ——
                </div>
                <div className="col-1 px-1 text-center align-self-center">
                    {origin}
                </div>
                <div className="col-2 px-1 text-center align-self-center">
                    {labelInstance?.descriptionC}
                </div>
                <div className="col-1 px-1 text-center align-self-center">{`${radioy}${unit}`}</div>
                <div className="col-1 px-1 text-center align-self-center">
                    {quantity}
                </div>
                <div className="col-1 px-1 text-center align-self-center">
                    {labelTemplate?.name}
                </div>
                {/* <div className="col-1 px-1 text-center">——</div> */}
                <div className="col-1 px-1 text-center align-self-center">
                    <EasyDate date={labelInstance?.createDate} />
                </div>
                <div className="col-1 px-1 text-center align-self-center">
                    <small
                        onClick={() => {
                            printTaskItem(value);
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
                            printTaskFinish(id, 1);
                        }}
                    />
                </div>
            </div>;
        }
        return <ViewProductItem id={product} Template={Template} />;
    }
    return (
        <Page
            header="待打印列表"
            right={
                <button className="btn btn-sm btn-primary" onClick={handleOpenHistory}>
                    打印历史
                </button>
            }
        >
            <div className="row mx-0 small fw-bolder text-center bg-secondary text-light">
                <div className="col-1 px-1">品牌</div>
                <div className="col-1 px-1">货单号</div>
                <div className="col-1 px-1">项目编号</div>
                <div className="col-1 px-1">产品编号</div>
                <div className="col-2 px-1">中文名称</div>
                <div className="col-1 px-1">包装</div>
                <div className="col-1 px-1">打印数量</div>
                <div className="col-1 px-1">
                    标签模板 &nbsp;&nbsp;
                    <JKPopover
                        options={labelOptions}
                        printTaskFilter={(labelName: any) =>
                            printTaskFilter(labelName)
                        }
                    />
                </div>
                {/* <div className="col-1 px-1">型号</div> */}
                <div className="col-1 px-1">申请时间</div>
                <div className="col-1 px-1">打印</div>
                <div className="col-1 px-1">操作</div>
            </div>
            <List
                items={filterLabelPrintTask}
                ViewItem={ViewItem}
                none={<None />}
            />
        </Page>
    );
}
