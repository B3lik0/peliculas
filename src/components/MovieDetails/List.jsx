export default function List({ genres }) {
    return (
        <div>
            <ul>
                {genres?.map((item, index) => (
                    <li key={index}>{item?.name}</li>
                ))}
            </ul>
        </div>
    );
}