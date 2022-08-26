const getCurrentTimeFromStamp = (timestamp)=> {
    var d = new Date(timestamp);
    const timeStampCon = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();

    return timeStampCon;
};

export default getCurrentTimeFromStamp