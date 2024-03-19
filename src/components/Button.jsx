function Button({ border, side, onClick, isActive, children }) {
	return (
		<button
			className={`${border} px-6 py-1 font-roboto 
      
      hover:bg-blue-500 
      hover:text-slate-50 
      hover:rounded-${side}-lg 

      ${isActive}

      duration-200`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
