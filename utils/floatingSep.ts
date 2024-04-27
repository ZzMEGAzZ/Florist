export const floatingSep = (value: number| string) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}