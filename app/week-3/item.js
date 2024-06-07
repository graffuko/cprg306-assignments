


export default function Item({name, quantity, category}) {

    let {name, quantity, category} = item;

    return (
        <li className="bg-gray-200 p-4 rounded-md">
            <h3 className="text-xl font-bold">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}