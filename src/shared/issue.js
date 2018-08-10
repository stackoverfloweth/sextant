export const getPriorityColor = (priority) => {
    switch (priority) {
        case "Critical":
            return "#cd1e20";
        case "High":
            return "#ea4646";
        case "Medium":
            return "#e68941";
        default:
            return "#2b8736";
    }
}