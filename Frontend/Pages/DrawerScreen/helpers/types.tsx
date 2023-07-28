import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface HeaderEditProps {
    title: string;
    icon: IconProp;
    onEdit: () => void;
}

export interface SwitchOption {
    title: string;
    isEnabled: boolean;
    onSwitchChange: () => void;
}