export interface Items {
    map(arg0: (item: any) => { id: any; name: any; amount: any; }): Items[];
    id?: number;
    name: string;
    amount: number;
    description: string;
}

export interface IItemsResponse {
    status: string;
    msg: string;
}
