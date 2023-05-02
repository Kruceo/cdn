export default function getColors(darkmode) {
    return {
        //simple colors

        red: darkmode ? '#ff9999' : '#777777',
        yellow: darkmode ? '#ffff99' : '#aaaaaa',
        green: darkmode ? '#99ff99' : '#ffffff',
        blue: '#99f',
        orange: '#fc9',
        lightBlue: '#9cf',

        //texts
        text: darkmode ? '#ffffff' : '#000000',

        //most important
       
        primary:     darkmode ? '#101010' : '#909090',
        secondary:   darkmode ? '#323246' : '#ccceff',
        background:  darkmode ? '#222236' : '#bcbeef',
        contrast:    darkmode ? '#00ff99' : '#0000ff',
    }
}
