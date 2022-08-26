
const Option = ({ value }) => {
    const className = 'px-4 py-2 hover:bg-gray-300 active:bg-gray-300 cursor-pointer bg-accent'
    return (
        <div data-v-46b7d13b tabIndex={-1} role='option' aria-selected="false" className={className}>
            {value}
        </div>
    )
}

export const SelectedOption = ({ value }) => {
    const className = 'px-4 py-2 cursor-pointe bg-gray-300'
    return (
        <div data-v-46b7d13b tabIndex={-1} role='option' aria-selected="false" className={className}>
            {value}
        </div>
    )
}

export default Option