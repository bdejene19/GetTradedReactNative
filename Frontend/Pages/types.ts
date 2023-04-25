export enum StackLoginRoutes {
    CREATE_ACCOUNT = 'Create Account',
    LOGIN = 'Login',
    WORK_LOCATIONS = 'Work Locations',
    MAIN = 'Main',
    CHAT = "Chat",

}

export enum StackMsgRoutes {
    MESSAGES = 'Messages',
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
    [StackLoginRoutes.MAIN]: undefined,
    [StackLoginRoutes.CHAT]: undefined,
}


export type TabRootParamList = { 
    [TabRoutes.PROFILE]: undefined,
    [TabRoutes.JOBS]: undefined,
    [TabRoutes.MESSAGES]: undefined,
}

export type StackMsgParamList = {
    [StackMsgRoutes.MESSAGES]: undefined,
    [StackMsgRoutes.CHAT]: undefined,

}