const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return 'th'

    switch (number % 10) {
        case 1:
            return 'st'
        case 2:
            return 'nd'
        case 3:
            return 'rd'
        default:
            return 'th'
    }
}

export const FormattedDate = ({
    date,
    ...rest
}: { date: Date } & React.ComponentProps<'time'>) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    const formattedDate = `${day}${nthNumber(day)} ${month}, ${year}`

    return <time {...rest}>{formattedDate}</time>
}
