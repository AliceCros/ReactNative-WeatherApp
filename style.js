export default {
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#eee',
        //justifyContent: 'center', // Center content horizontally and vertically
        //alignContent: 'center', // May cause problem
        paddingTop: 10
    },
    mainContainer: {
        height: '30%'
    },
    forecastContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    weatherBackground: {
        resizeMode: 'cover'
    },
    gif: {
        flex: 1,
        resizeMode: 'contain',
        borderRadius: 0 // Does work
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        letterSpacing: 2,
        marginTop: 30
    },
    temp: {
        fontSize: 30,
        textAlign: 'right',
        letterSpacing: 2,
        marginTop: 30
    },
    city: {
        fontSize: 15,
        textAlign: 'left',
        marginRight: 5,
        marginTop: 40,
        letterSpacing: 1
    },
    icon: {
        height: 72,
        width: 72,
        //left: 150, // To fix according to screen resolution
        marginRight: 15,
        marginTop: 15
    },
    quote: {
        fontSize: 21,
        textAlign: 'center',
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30
    },
    tabBarLabel: {
        marginBottom: 10
    },
    tab: {
        backgroundColor: '#000'
    }
}