import { ConnectedPosition } from "@angular/cdk/overlay";

export interface PopupConfig {
    hasBackdrop?: boolean,
    closeOnScroll?: boolean,
    positions?: ConnectedPosition[]
}
