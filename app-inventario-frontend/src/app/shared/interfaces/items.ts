export interface Item {
    id?: number;
    name: string;
    amount: number;
    description: string;
}

export interface IItemsResponse {
    status: string;
    msg: string;
}
