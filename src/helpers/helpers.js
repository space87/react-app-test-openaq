export const getTimeSince = (date) => {
    const newDate = new Date();
    const oldDate = new Date(date);
    const minutes = parseInt(
        (Math.abs(newDate - oldDate) / (1000 * 60)).toFixed(0)
    )
    return minutes;
}