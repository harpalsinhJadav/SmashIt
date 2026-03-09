export type RootStackParamList = {
    AuthStack: undefined;
    AdminStack: undefined;
    PlayerStack: undefined;
    OwnerStack: undefined;
};

export type AuthStackParamList = {
    Login: undefined;
    Signup: undefined;
};

export type AdminStackParamList = {
    AdminHome: undefined;
};

export type PlayerStackParamList = {
    PlayerHome: undefined;
    Booking: undefined;
    History: undefined;
    Notifications: undefined;
    Profile: undefined;
    CourtDetail: { id: number };
    HistoryDetail: { id: number };
};
