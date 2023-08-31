const ErrorFields: React.FC<{ errorText: string }> = ({ errorText }) => {
	return <div className='text-[#f78a41e6] mt-[-10px] mb-3 tracking-wide'>{errorText}</div>
}

export default ErrorFields
