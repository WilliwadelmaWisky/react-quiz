interface Props {
    percentage: number
}

const Progressbar = ({ percentage }: Props) => {
    return (
        <div className="progress w-100">
            <div 
                className="progress-bar"
                style={{ width: percentage.toString() + '%' }}
            />
        </div>
    )
}

export default Progressbar