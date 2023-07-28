import { Dispatch, SetStateAction } from "react";

export interface LoginForm {
    email: string;
    password: string;
}

export type SelectedImage = {
    [key: number]: {
        uri: string;
    };
}
export type photoContextType = {
    photos?: SelectedImage,
    setPhotos?: Dispatch<SetStateAction<SelectedImage>>
}