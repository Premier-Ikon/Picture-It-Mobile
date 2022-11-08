import './checkItem.css';

function CheckItem({contentText}) {
    return ( 
        <div className='check-item-container'>
            <i style={{color: 'rgb(42, 182, 145)', fontSize: '20px'}} class="fa-regular fa-circle-check"></i>
            <p style={{marginTop: '-2px', marginLeft: '10px', fontSize: '18px'}}>{contentText}</p>
        </div>
     );
}

export default CheckItem;