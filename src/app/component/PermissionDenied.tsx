import { AppLogout } from "app/brand";
import { Page, useModal } from "tonwa-app";

export function PermissionDenied({ msg = "" }: { msg?: string }) {
    const { openModal } = useModal();
    return (
        <Page
            header={"提示"}
            right={
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => openModal(<AppLogout />)}
                >
                    logout
                </button>
            }
            // logout={true}
            back="none"
        // footer={footer}
        >
            <hr />
            <div className="alert alert-danger text-center" role="alert">
                {`${msg}请联系管理员开放权限!`}
            </div>
        </Page>
    );
}
