export const getArgs = (args) => {
    const res = {}
    const argsArr = args.slice(2)
    argsArr.forEach((value, index, arr) => {
        if (value[0] === '-') {
            if (index === arr.length - 1 || arr[index + 1][0] === '-') {
                res[value.substring(1)] = true
            } else {
                res[value.substring(1)] = arr[index + 1]
            }
        }
    })
    return res
}
