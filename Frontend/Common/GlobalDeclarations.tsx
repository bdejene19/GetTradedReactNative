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
        MESSAGES = "messages",
        THREAD = "messages/thread"
    }
}

export namespace ColorResources {
    export enum Colors {
        PRIMARY = '',
        SECONDARY = '',
        TERTIARY = '',
    }
}
