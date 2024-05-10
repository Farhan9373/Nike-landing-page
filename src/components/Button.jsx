
const Button = ({label,iconUrl}) => {
  return (
   <button className=" flex justify-center gap-2 items-center font-montserrat text-lg leading-none bg-coral-red rounded-full text-white px-7 py-4 border-2 hover:border-black transition-all ">
    {label}
    <img
    src={iconUrl}
    alt="arrow right" className=" ml-2 rounded-full w-5 h-5"
    />
   </button>
  )
}
export default Button
