export default function Input(props) {

  return (
    <>
      <label className="text-left relative block p-3 border-2 border-gray-200 rounded-lg" >
        <span className="text-xs font-medium text-gray-500">
          Nombre
        </span>
        <input 
          className="w-full p-0 text-sm border-none focus:ring-0" 
          type="text" 
          placeholder="Ingresa un nombre"
          onChange={(e)=>{props.setName(e.target.value)}}
           />
      </label>
      <br/>
      <label className="text-left relative block p-3 border-2 border-gray-200 rounded-lg">
        <span className="text-xs font-medium text-gray-500">
          Contraseña
        </span>
        <input 
          className="w-full p-0 text-sm border-none focus:ring-0" 
          type="text" 
          placeholder="Ingresa una contraseña" 
          onChange={(e)=>{props.setPassword(e.target.value)}}
        />
      </label>

    </>
  )
}