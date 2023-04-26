import { StyleSheet } from "react-native"
export const LightMode = StyleSheet.create({
    MainText: {
        color: 'black',
        fontSize: 48,
    },

    SecondaryText: {
        color: 'orange',
        fontSize: 36
    },

    TertiaryText: {
        color: 'black',
        fontSize: 28,
    },

    MainBg: {
        backgroundColor: "orange"
    },

    screenPadding: {
        padding: 7,
        alignItems: 'center',
    }
})


export const GenStyle = StyleSheet.create({
    halfWidth: {
        width: '50%',
    },

    fullWidth: {
        width: '100%',
    },
    halfHeight: {
        height: '50%',
    },
    fullHeight: {
        height: '100%',
    },
    containerBottom: {
        position: 'absolute',
        bottom: '10%',
    },

    stackScreenHeaderHeight: {
        height: 50,
    },
    circle: {
        borderRadius: 100,
        width: '45%',
        height: '65%',
    }
})

export const FontSize = StyleSheet.create({
    pageHeader: {
        fontSize: 22
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '700'
    },
    regText: {
        fontSize: 16,
    },

    smallText: {
        fontSize: 12,
    }
})
export const DarkModeI = StyleSheet.create({
    MainText: {
        color: 'white',
        fontSize: 48,
    },

    SecondaryText: {
        color: 'red',
        fontSize: 36
    },

    TertiaryText: {
        color: 'brown',
        fontSize: 28,
    },

    MainBg: {
        backgroundColor: "black"
    }
})