import {OrderItemModel} from "./OrderItem.model";


export interface OrderModel {
   name: string;
   family: string;
   phone: string;
   address: string;
   payType: string;
   issueUser: string;
   issueDate: string;
   itemOrderList:OrderItemModel[];
}
