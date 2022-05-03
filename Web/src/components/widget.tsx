import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';


export function Widget (){
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className="absolute bottom-4 right-4">
           { isWidgetOpen && <p>Teste</p> }
        <button onClick={toggleWidgetVisibility} className="bg-cyan-500 rounded-full px-3 h-12 text-white flex items-center group" > 
        <ChatTeardropDots className="w-6 h-6 " />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear ">
            <span className="pl-2">
            Feedback
            </span>
            </span>
        </button>
        </div>
    )
}