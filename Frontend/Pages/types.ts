export enum StackLoginRoutes {
    CREATE_ACCOUNT = 'Create Account',
    LOGIN = 'Login',
    WORK_LOCATIONS = 'Work Locations',
    MAIN = 'Main',
    CHAT = "Chat",

}
export enum JobsStackRoutes {
    JOBS_BOARD = 'Jobs Board',
    SPECIFIC_JOB_BOARD = 'Specific Job Board'
}

export enum ProfileStackRoutes {
    PROFILE = 'Profile',
    
}
export enum StackMsgRoutes {
    MESSAGE_BOARD = 'Message Board',
    CHAT = 'Chat',
}
export enum TabRoutes {
    PROFILE = 'Profile',
    JOBS = 'Jobs',
    MESSAGES = 'Messages',
}


enum DrawerRoutes {
    PROFILE_OPTIONS = ''
};

export type StackRootParamList = {
    [StackLoginRoutes.LOGIN]: undefined,
    [StackLoginRoutes.CREATE_ACCOUNT]: undefined,
    [StackLoginRoutes.WORK_LOCATIONS]: undefined,
    [StackLoginRoutes.MAIN]: ProfileParams,
    [StackLoginRoutes.CHAT]: undefined,
}

export type StackMsgParamList = {
    [StackMsgRoutes.MESSAGE_BOARD]: undefined,
    [StackMsgRoutes.CHAT]: undefined,

}

export type JobsBoardParamList = {
    [JobsStackRoutes.JOBS_BOARD]: undefined,
    [JobsStackRoutes.SPECIFIC_JOB_BOARD]: {
        jobType: string,
    }
}

export type ProfileStackParamList = {
    [ProfileStackRoutes.PROFILE]: { 
        user_id: number; 
        name: string;
        email: string; 
        phone: string;
        password: string;
    }
}
export type TabRootParamList = { 
    [TabRoutes.PROFILE]: undefined,
    [TabRoutes.JOBS]: undefined,
    [TabRoutes.MESSAGES]: undefined,
}


type ProfileParams = {
    user_id: number; 
    name: string;
    email: string; 
    phone: string;
    password: string;
}
