function Button({ border, side, onClick, children }) {
	return (
		<button
			className={`${border} px-6 py-1 font-roboto 
      hover:bg-blue-500 
      hover:text-slate-50 
      hover:rounded-${side}-lg 
      
      active:bg-blue-500 
      active:text-slate-50
      active:rounded-${side}-lg 
      
      focus-within:text-blue-500 
      focus-within:rounded-${side}-lg 
    
      duration-200`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
