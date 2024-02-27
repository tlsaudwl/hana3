import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function ItemRead({ item }: { item: Cart }) {
  return (
    <div className='text-right'>
      <div>
        <span className='float-start'>상품명:</span>
        {item.name}
      </div>
      <div>
        <span className='float-start'>금액:</span>
        {item.price.toLocaleString()}원
      </div>
      <div>

      </div>
    </div>
  );
}

// detail(read | update)
export const ItemLayout = () => {
  const { item } = useOutletContext<{ item: Cart }>();
  const { isEditing, setEditing } = useState(false);

  return <>{isEditing?<form></form>:<Item>}</>;
};
