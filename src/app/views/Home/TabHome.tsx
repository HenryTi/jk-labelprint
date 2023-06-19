import { Link } from "react-router-dom";
import { Page, useModal } from "tonwa-app";
import { PagePrintTasks } from "../Tasks/PagePrintTasks";

export function TabHome() {
    const arr: { label: string; path: string; }[] = [
        { label: '单据中心', path: 'a' },
        { label: '档案中心', path: 'b' },
        { label: '报表中心', path: 'c' },
        { label: '设置价格', path: 'd' },
        { label: '权限演示', path: 'e' },
    ];
    const { openModal } = useModal();
    function onPendingTasks() {
        openModal(<PagePrintTasks />);
    }
    const cn = ' px-3 py-2 border-bottom align-items-center ';
    return <Page header="测试" back="none">
        <div className="px-3 py-2 border-bottom small tonwa-bg-gray-1">测试页面</div>
        <div className={cn + ' cursor-pointer text-primary '} onClick={onPendingTasks}>标签打印任务</div>
        {arr.map((v, index) => {
            const { label, path } = v;
            return <Link key={index} to={path} className={cn}>
                {label}
            </Link>
        })}
    </Page>;
}
