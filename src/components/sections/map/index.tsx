import map from '@/assets/images/map2.webp'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'

const states = ['São Paulo', 'Rio de Janeiro',
    'Goias',
    'Ceará',
    'Piauí',
    'Maranhão',
    'Rio grande do Norte',
    'Paraíba',
    'Pernambuco',
    'Alagoas',
    'Bahia',
    'Paraná']

export const Map = () => {
    const [showStates, setShowStates] = useState(false)
    return (
        <section className='bg-cardBlue'>
            <div className='max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto grid grid-cols-2 gap-4 items-center '>
                <div className='space-y-4 text-center'>
                    <p className='text-4xl font-semibold'>Estamos presentes em vários estados do Brasil</p>

                    {/* <p>Conferir lista de estados +</p> */}

                    <Button
                        onClick={() => setShowStates(!showStates)}
                        className="text-start w-full cursor-pointer flex gap-2"
                    >
                        Conferir lista de estados

                        <PlusCircle
                            className={`transition-transform duration-300 ${showStates ? 'rotate-45' : 'rotate-0'}`}
                        />

                    </Button>

                    {showStates && (
                    states.map((state, index) => {
                       return(
                         <p key={index} className="mt-2 text-gray-600">{state}</p>
                       )
                    })
                )}
                </div>

                <img src={map} alt="Mapa do Brasil" className='max-w-md mx-auto' />


            </div>
        </section>
    )
}