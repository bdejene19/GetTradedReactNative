export namespace TextResources{ 
    export enum FormStrings {
        NAME = 'Name',
        PASSWORD = 'Password',
        REPEAT_PASS = 'Repeat Password',
        PHONE = 'Phone',
        EMAIL = 'Email',
        BUSINESS = 'Business Name',
        SEARCH = 'Search',
        CONTACT = 'Contact'
    }

    export enum ButtonStrings {
        SUBMIT = 'Submit',
        CONFIRM = 'Confirm',
        LOGIN = 'Login',
        CANCEL = 'CANCEL',
    }
    export enum ContractorTypes {
        ELECTRICIAN = "Electrican",
        CARPENTER = "Carpenter",
        LANDSCAPER = "Landscaper",
        MECHANIC = "Mechanic",
        PAINTER = "Painter",
        PLUMBER = "Plumber",
        SERVICEWORKER = "Service Worker"
    }

    export enum CreateAccountText {
        typeSelection = "Select how you would like to be found (up to 3):",
        locations = "What locations would you work at?"
    }
    
    export enum API_ROUTES {
        HOST = "http://localhost:8000/api",
        LOGIN = "login",
        JOBS = "jobs",
        MESSAGES = "messages",
        THREAD = "messages/thread",
        PROFILE = "profile",
        WORK_IMAGES = "profile/workImages",
        LOCATIONS = "profile/locations"

    }
}

export namespace ColorResources {
    export enum Colors {
        PRIMARY = '',
        SECONDARY = '',
        TERTIARY = '',
    }
}

export namespace BackendTypes {
    export type User = {
         user_id: number;
        name: string;
        email: string;
        phone: string;
        password?: string;
    }

    export type Inbox = {
        inbox_id: number;
        user_id: number;
    }

    export type WorkImage = {
        image_id: number;
        user_id: number;
        file_path: string;
    }

    export type WorkLocation = {
        location_id: number;
        name: string;
        user_id: number;
    }

    export type MessageThread = {
        thread_id: number;
        inbox_id: number;
        user_id: number;
    }

    export type JobPost = {
        job_id: number;
        job_type: string;
        description: string;
        location: string;
        imgLink: string;
        user_id: number;
    }
}