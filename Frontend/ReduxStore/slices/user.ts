import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackendTypes } from "../../Common/GlobalDeclarations";

interface UserStore extends BackendTypes.User { 
    work_images:  BackendTypes.WorkImage[], 
    locations: BackendTypes.WorkLocation[],
}
const initialState: UserStore = {
    name: "",
    email: "",
    phone: "",
    user_id: -1,
    password: "",
    work_images: [],
    locations: [],
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        getUser: (state) => {
            return state           
        },
        
        setUserStore: (state, action: PayloadAction<UserStore>) => {
            return action.payload;
        }, 
        setUserContact: (state, action: PayloadAction<BackendTypes.User>) => {
            if (state != action.payload) {
                return {
                    ...state, 
                    ...action.payload
                }
            }
        },

        setWorkImages: (state, action: PayloadAction<BackendTypes.WorkImage[]>) => {
            if (action.payload) {
                return {
                    ...state,
                    work_images: action.payload
                }
            }
            
        },
        setWorkLocations: (state, action: PayloadAction<BackendTypes.WorkLocation[]>) => {
            if (action.payload) {
                return {
                    ...state,
                    locations: action.payload
                }
            }
            
        },

        addWorkImage: (state, action: PayloadAction<BackendTypes.WorkImage>) => {
            const newImg = action.payload
            const { work_images } = state;
            if (!work_images.includes(newImg)) {
                work_images.push(newImg);
                return {
                    ...state,
                    work_images: work_images,
                }
            }

            return state
        },

        removeWorkImage: (state, action: PayloadAction<{image_id: number}>) => {
            const {image_id } = action.payload
            const { work_images } = state;

            const removedImgArr = work_images.filter(image => image.image_id !== image_id) 
            return {
                ...state,
                work_images: removedImgArr
            }
        },

        addLocation: (state, action: PayloadAction<BackendTypes.WorkLocation>) => {
            const {locations} = state;
            const newLocation = action.payload
            if (!locations.includes(newLocation)) {
                locations.push(newLocation);
                return {
                    ...state,
                    locations: locations,
                }
            }

            return state    
        },

        removeLocation: (state, action: PayloadAction<{location_id: number}>) => {
            const { location_id } = action.payload;
            if (location_id) {
                const removedLocationsArr =  state.locations.filter(location => location.location_id !== location_id)
                return {
                    ...state,
                    locations: removedLocationsArr
                }
            }
        },

        updateContact: (state, action: { payload: BackendTypes.User}) => {
            const contact = action.payload;
            if (contact !== state) {
                return {
                    ...state,
                    ...contact
                }
            }
        }
    }
})

export const { getUser, setUserStore, setUserContact, addLocation, addWorkImage, removeLocation, removeWorkImage, updateContact } =  userSlice.actions;

export default userSlice.reducer;