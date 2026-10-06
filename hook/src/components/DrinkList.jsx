const DrinkList = ({ drinklist }) => {
    return (
        <div>
            <h2>음료 목록</h2>

            <ul>
                {drinklist.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}

export default DrinkList