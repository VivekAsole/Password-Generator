import { useState, useEffect } from 'react'


export default function App() {

  const [password, setPassword] = useState()
  const [newPassword, setNewPassword] = useState(false)
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [speChar, setSpeChar] = useState(false)


  useEffect(() => {
    let passWd = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "1234567890"
    if (speChar) str += "!@#$%^&*"
    for (let i = 1; i <= length; i++) {
      passWd += str.charAt((Math.floor(Math.random() * str.length)))
    }
    setPassword(passWd)
  }, [length, num, speChar, newPassword])

  const copyToClipboard = () => {    
    // Copy the password to clipboard
    navigator.clipboard.writeText(password);
    
    // Alert the copied text
    alert("Copied the password: " + password);    
  }

  return <>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-100 h-screen">
      <div className="relative top-48 left-28 w-1/3">
        <p className="relative rotate-90 border-8 border-white top-28 -left-36 w-3/5"></p>
        <span className="relative left-10 text-5xl font-bold text-white tracking-wider leading-normal">Password Generator using ReactJs and Tailwind CSS</span>
      </div>
      <div className=" absolute right-20 top-20 flex flex-col items-center w-2/5 p-4 m-4 space-y-10 border-4 border-black rounded-lg">
        <div className="w-full">
          <h1 className="text-3xl font-bold tracking-wider text-amber-900">Password Generator</h1>
        </div>
        <input className="rounded-xl text-2xl w-50 p-2 h-15 w-3/5 text-center font-medium tracking-widest" type="text" value={password} readOnly />
        <div className="flex justify-between w-full">
          <span className="text-2xl text-red-500 font-bold tracking-wider">Password Length</span>
          <span className="text-2xl text-red-500 font-bold">{length}</span>
        </div>
        <input
          className="w-full"
          type="range" min="8" max="16" value={length} id="myRange"
          onChange={(e) => setLength(e.target.value)} />
        <div className="flex justify-between w-full" >
          <div className="w-2/5">
            <input className="size-6 m-4" type="checkbox" onChange={() => setNum(prev => !prev)} />
            <label className="text-2xl">Number (0-9)</label>
          </div>
          <div className="w-2/5">
            <input className="size-6 m-4" type="checkbox" onChange={() => setSpeChar(prev => !prev)} />
            <label className="text-2xl">Symbols</label>
          </div>
        </div>
        <div className="flex justify-around w-full text-2xl font-medium text-white">
          <button 
            className="bg-blue-700 rounded-lg w-2/5 h-12 "
            onClick={copyToClipboard}
          >Copy Password</button>
          <button 
            className="bg-blue-700 rounded-lg w-2/5 h-12"
            onClick={()=> setNewPassword(prev => !prev)} 
          >New Password</button>
        </div>
      </div>
    </div>
  </>
}
