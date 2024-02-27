import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';

export const ItemLayout = () => {
  const navigate = useNavigate();
  const {
    session: { cart },
  } = useSession();
  const [currItem, setCurrItem] = useState<Cart>(null);
  return (
    <>
      <div>
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setCurrItem(item);
                    navigate(`/v1/items`);
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Outlet context={{ item: currItem }} />
        </div>
      </div>
    </>
  );
};
