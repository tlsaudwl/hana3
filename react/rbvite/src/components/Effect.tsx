import { useEffect, useRef, useState } from 'react';

export default function Effect() {
  const [isShow, setShow] = useState(false);
  const hRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!hRef.current) return;

    const pos = hRef.current.getBoundingClientRect();
    console.log('🚀 ~ useEffect ~ pos:', pos);
    hRef.current.style.top = `${pos.bottom + 20}px`;
  }, []);

  return (
    <>
      <div>
        <button onCLick={() => setShow(!isShow)}>Show Effect</button>
      </div>
    </>
  );
}
