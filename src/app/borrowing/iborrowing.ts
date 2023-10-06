import { Iemployee } from "../employee/iemployee";
import { Ikey } from "../key/ikey";

export interface Iborrowing {
    id: string;
    key: Ikey;
    employeeBorrowing: Iemployee;
    employeeDevolution: Iemployee;
    dateBorrowing: Date;
    dateDevolution: Date;
    
}
