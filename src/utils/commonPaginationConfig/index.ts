export interface CommonPaginationParams {
    total: number | undefined;
    onChange: ((page: number, pageSize?: number | undefined) => void) | undefined; 
    current: number | undefined;
    pageSize: number | undefined;
    onShowSizeChange: ((current: number, size: number) => void) | undefined;
}

export const CommonPaginationConfig = (props:CommonPaginationParams) =>{

    return (
        {
            onChange: props.onChange,
            showTotal: (total:number, range:[number,number]) => `當前項目${range[0]}-${range[1]} , 總共${total} `,
            total: props.total,
            current: props.current?props.current:1,
            pageSize: props.pageSize,
            onShowSizeChange: props.onShowSizeChange,
            pageSizeOptions:[ '5', '10', '15', '20', '25'],
        }
    )
}
