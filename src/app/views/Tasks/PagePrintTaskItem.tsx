// import printJS from 'print-js';
import { Page, PageLoader, PageSpinner } from 'tonwa-app';
import { useState } from 'react';

// import { useSnapshot } from 'valtio';
// import { UpPrintContent } from './upPrintContent';

import { EJK, ICON_MAP, SMALL_TEMPLATE } from "../../constant/constant";
import { useUqApp } from 'app/UqApp';
import { StoreTemplate } from 'app/Gen/GenTemplate';
import { CountContext } from 'app/tool';
import { templates } from 'app/labelTemplates';

export function PagePrintTaskItem({ param }: { param: any; }) {
    const uqApp = useUqApp();
    async function loader() {
        let store = uqApp.objectOf(StoreTemplate);
        await store.getPrintTaskDataInfo(param);
    }
    return <PageLoader loader={loader} page={<PageContent />} />;
}

function PageContent() {
    const uqApp = useUqApp();
    const store = uqApp.objectOf(StoreTemplate);
    const { currPrintTask } = store; // useAtomValue;
    const { labelTemplate, dxLabelTemplate, printTaskContent } = currPrintTask;
    const [curSize, setCurSize] = useState(labelTemplate?.name);
    let t: string;
    if (curSize.at(0) == "C") {
        if (curSize === "CJKX5") {
            t = 'SizeCX5';
        } else {
            t = `Size${curSize.at(
                0
            )}${curSize.match(/\d+/)}`;
        }

    } else {
        /* CurTeml = require(`App/labelTemplates/SizeG${curSize.match(
            /\d+?/
        )}_${curSize}`).default; */
        t = 'SizeGN_EJKN';
    }

    let CurTeml = templates[t];
    if (CurTeml === undefined) return <PageSpinner />;

    const templateBaseProps = {
        template: curSize === labelTemplate?.name ? dxLabelTemplate : {},
        tmplContent: printTaskContent,
        iconMap: ICON_MAP,
    };

    let printContent: JSX.Element = (
        <CountContext.Provider value={templateBaseProps}>
            {<CurTeml labelTemplate={EJK[curSize]} />}
        </CountContext.Provider>
    );

    /* trStyles 匹配小模板预览时,因模板较小，需要缩放展示  */
    const trStyles = SMALL_TEMPLATE.includes(curSize) ?
        { minHeight: "70mm", transform: "scale(2)", transformOrigin: "top center" } : {};


    async function print() {
        const style = `@media print {@page {margin:0; border:0; padding:0; left: 0; } .div-box-shadow { box-shadow: none;} .div-box-shadow_e { box-shadow: none;} }`;
        alert('print JS');
        /*
        printJS({
            printable: 'print_target_box', type: 'html', style: style, scanStyles: false,
            css: [envUrl + '/printCss/sizeZr.css'), printCssUrl('bootstrap.css"],
            onPrintDialogClose: () => {
                // saveLabelPrintTaskPrinted({ id: currPrintTask, comments: "完成" })
            }
        });
        */
    };

    let printContentUI: any = <div className='alert alert-danger' >没有匹配到标签模板</div>;
    let upContent: any;
    if (CurTeml) {
        printContentUI = <>
            {/* 缩放预览 */}
            <div className='d-flex justify-content-center overflow-hidden' style={trStyles} >{printContent}</div>
            {/* 打印的目标区域 */}
            <div className='m-2 d-none'>
                <div id='print_target_box' style={{ margin: 0, border: 0, padding: 0 }} className='mx-auto overflow-hidden'>{printContent} </div>
            </div>
        </>;
        upContent = <button className='btn btn-sm btn-primary mx-2' onClick={
            () => {
                alert('UpPrintContent');
                // nav.open(<UpPrintContent content={printTaskContent} />);
            }
        }>调整</button>
    };

    let right: any = <>
        {upContent}
        <button className='btn btn-sm btn-primary mx-2' onClick={print}>打印</button>
        {/* <Modal title="打印预览" btnTxet="快速预览" modalSize="modal-lg"
            ok={{ text: "打印", action: () => { print() } }} close={{ text: "取消" }} >
            <div className='d-flex justify-content-center overflow-hidden' style={trStyles} >{printContent}</div>
        </Modal> */}
    </>;

    return <Page header="打印" right={right} >
        {/* 打印任务的部分字段需要展示 */}
        <div className='p-2'>
            <div>{labelTemplate.name}</div>
            <div><b>打印份数</b> <span className='text-primary'>{currPrintTask.quantity}</span></div>
        </div>
        {printContentUI}
    </Page>
}


export interface IModalConfig {
    title: string | JSX.Element;
    size: "sm" | "lg" | "xl";
    toggleBtn: { text: string, className: string };
    footerBtn: {
        close: {
            text?: string, className?: string, isShow?: boolean,
        },
        ok: {
            text?: string, className?: string, isShow?: boolean, action?: Function
        }
    };
};

function Modal(props: any) {
    const { children, modalSize, btnTxet, title, ok, close } = props;
    const { text, action } = ok || {};
    return <>
        <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {btnTxet || "Button"}
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
            <div className={`modal-dialog modal-dialog-centered ${modalSize}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{close?.text || "close"}</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                            if (action) action();
                        }} >{text || "OK"}</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
};
