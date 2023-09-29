const ErrorField: React.FC<{ errorText: string; id: string }> = ({ errorText, id }) => {
	return (
		<div aria-live='assertive' id={id} className='text-[#f78a41e6] mt-[-10px] mb-3 tracking-wide'>
			{errorText}
		</div>
	)
}

export default ErrorField
