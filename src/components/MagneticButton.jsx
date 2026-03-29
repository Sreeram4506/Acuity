import { useRef } from "react";

function MagneticButton({ children, className = "", onClick, type = "button" }) {
  const ref = useRef(null);

  const move = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={ref}
      type={type}
      onMouseMove={move}
      onMouseLeave={reset}
      onClick={onClick}
      className={`transform-gpu will-change-transform transition-transform duration-300 hover:scale-105 active:scale-95 shadow-glow animate-pop ${className}`}
    >
      {children}
    </button>
  );
}

export default MagneticButton;
