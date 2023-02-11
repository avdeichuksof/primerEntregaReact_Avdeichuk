import './itemListContainer.css';

const ItemListContainer = (props) => {
    return <div> 
        <h1 className='greetText'> {props.greeting} </h1>
    </div>
};

export default ItemListContainer;