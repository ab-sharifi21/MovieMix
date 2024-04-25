import { ReactElement } from "react";

export interface Route {
    id: string | number,
    text: string,
    href: string,
    icon?: ReactElement
}