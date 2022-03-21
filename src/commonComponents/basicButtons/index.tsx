import React from "react";
import { 
    SaveOutlined,
    PrinterOutlined,
    PlusOutlined,
    CopyOutlined,
    UnorderedListOutlined,
    SearchOutlined,
    CloseOutlined,
    CheckOutlined,
    DeleteOutlined,
    EditOutlined, 
    FolderOpenOutlined,
    DownloadOutlined,
    TagOutlined
} from "@ant-design/icons"
import { Button } from "antd";
import { ButtonType } from "antd/lib/button";
import { SizeType } from "antd/lib/config-provider/SizeContext";

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    text?: string | undefined;
    type?: ButtonType;
    danger?: boolean | undefined;
    style?: React.CSSProperties;
    size?: SizeType;
}

export const SaveButton = (props: ButtonProps) =>(<Button type="primary" {...props} ><SaveOutlined />{props.text?props.text:"儲存"}</Button>)

export const PrintReportButton = (props: ButtonProps) =>(<Button type="primary" {...props} ><PrinterOutlined />{props.text?props.text:"列印報表"}</Button>)

export const CopyButton = (props: ButtonProps) =>(<Button type="primary" {...props} ><CopyOutlined />{props.text?props.text:"複製"}</Button>)

export const AddButton = (props: ButtonProps)=>(<Button type="primary" {...props} ><PlusOutlined />{props.text?props.text:"新增"}</Button>)

export const SearchAllButton = (props: ButtonProps)=>(<Button type="primary" {...props} ><UnorderedListOutlined />{props.text?props.text:"全部"}</Button>)

export const SearchButton = (props: ButtonProps)=>(<Button type="primary" {...props} ><SearchOutlined />{props.text?props.text:"搜尋"}</Button>)

export const OkButton = (props: ButtonProps)=>(<Button type="primary" {...props} ><CheckOutlined />{props.text?props.text:"確定"}</Button>)

export const CancelButton = (props: ButtonProps)=>(<Button type="default" {...props} ><CloseOutlined />{props.text?props.text:"取消"}</Button>)

export const DeleteButton = (props: ButtonProps)=>(<Button type="primary" danger {...props} ><DeleteOutlined />{props.text?props.text:"刪除"}</Button>)

export const EditButton = (props: ButtonProps) =>(<Button type="primary" {...props} ><EditOutlined />{props.text?props.text:"編輯"}</Button>)

export const SearchFileButton = (props: ButtonProps) =>(<Button type="primary" {...props} ><FolderOpenOutlined />{props.text?props.text:"開啟舊檔"}</Button>)

export const SetClosedButton = (props: ButtonProps) =>(<Button type="primary" {...props} >{props.text?props.text:"結案"}</Button>)

export const DownLoadButton = (props: ButtonProps) =>(<Button type="primary" {...props} ><DownloadOutlined />{props.text?props.text:"下載檔案"}</Button>)

export const TagButton = (props: ButtonProps)=>(<Button type="dashed" {...props} style={{background: "#ebac51",  color: "#000"}} ><TagOutlined />{props.text?props.text:"新增"}</Button>)


export const ModalOkText = (<><CheckOutlined />{" 確定"}</>)
export const ModalCancelText = (<><CloseOutlined />{" 取消"}</>)






