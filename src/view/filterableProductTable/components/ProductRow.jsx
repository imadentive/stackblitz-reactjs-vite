export default function ProductRow({product})
{
    return (
        <div>
           {
            product.stocked ? product.name: <span style={{color:'red'}}>{product.name}</span>
           }
            <span style={{color:'blue',marginLeft:'10px'}}>{product.price}</span>
        </div>
    );
}