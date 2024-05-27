"use client"

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

import {
    useMemo,
    useEffect,
    useState
} from "react";

const ClinicasList = () => {
    const [arrClinicas, setArrClinicas] = useState([]);    

    useEffect(() => {
        const getClinicas = async () => {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/clinica/listar`)
                .then(async response => {
                    if (!response.ok) {
                        throw new Error("erro na requisição")
                    }
                    return await response.json()
                })
                .then(data => setArrClinicas(data))
                .catch(error => {
                    console.error(error)
                })
        }
        getClinicas()
    },[arrClinicas])
    
    return (
        <div
            className="mt-10 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
            {arrClinicas?.map(({
                id, nome, descricao
            }) => {
                return (
                    <Card
                        key={id}
                        className="h-40 sm:h-48 md:h-64 w-full sm:w-48 md:w-64"
                    >
                        <CardHeader>
                            <CardTitle>
                                <p>{nome}</p>
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p>{descricao}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export {
    ClinicasList
}
